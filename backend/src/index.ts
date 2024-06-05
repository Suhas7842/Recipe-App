import express from "express";
import cors from "cors";
import "dotenv/config";
import * as RECIPEAPI from "./recipe-api";
import { PrismaClient } from "@prisma/client";

const app = express();
const prismaClient = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/api/recipes/search", async (req, res) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const page = parseInt(req.query.page as string);
    const results = await RECIPEAPI.searchRecipes(searchTerm, page);
    return res.json(results);
  } catch (error) {
    console.error("Error in search:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get("/api/recipes/:recipeId/summary", async (req, res) => {
  const recipeId = req.params.recipeId;
  const results = await RECIPEAPI.getRecipeSummary(recipeId);
  return res.json(results);
});

app.post("/api/recipes/favourite", async (req, res) => {
  const recipeId = req.body.recipeId;
  try {
    const favouriteRecipe = await prismaClient.favouriteRecipes.create({
      data: {
        recipeId: recipeId,
      },
    });
    return res.status(201).json(favouriteRecipe);
  } catch (error) {
    console.error("Error in adding favourite recipe:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get("/api/recipes/favourite", async (req, res) => {
  try {
    const favouriteRecipes = await prismaClient.favouriteRecipes.findMany();
    const recipeIds = favouriteRecipes.map((recipe) =>
      recipe.recipeId.toString()
    );
    const favourites = await RECIPEAPI.getFavoriteRecipesByIds(recipeIds);
    return res.json(favourites);
  } catch (error) {
    console.error("Error in getting favourite recipes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.delete("/api/recipes/favourite", async (req, res) => {
  const recipeId = req.body.recipeId;
  try {
    await prismaClient.favouriteRecipes.delete({
      where: {
        recipeId: recipeId,
      },
    });
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Oops! Something went worng" });
  }
});

app.listen(5000, () => {
  console.log("server running on localhost:5000");
});
