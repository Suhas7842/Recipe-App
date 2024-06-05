const apiKey = process.env.API_KEY;

export const searchRecipes = async (searchTerm: string, page: number) => {
  if (!apiKey) {
    throw new Error("API Key not found");
  }
  const url = new URL("https://api.spoonacular.com/recipes/complexSearch");

  const queryParams = {
    query: searchTerm,
    number: "10",
    offset: (page * 10).toString(),
    apiKey,
  };
  url.search = new URLSearchParams(queryParams).toString();
  try {
    const searchResponse = await fetch(url);
    const resultJson = await searchResponse.json();
    return resultJson;
  } catch (error) {
    console.error(error);
  }
};

export const getRecipeSummary = async (recipeId: string) => {
  if (!apiKey) {
    throw new Error("API Key not found");
  }
  const url = new URL(
    `https://api.spoonacular.com/recipes/${recipeId}/summary`
  );
  const queryParams = {
    apiKey: apiKey,
  };
  url.search = new URLSearchParams(queryParams).toString();
  const summaryResponse = await fetch(url);
  const summaryJson = await summaryResponse.json();
  return summaryJson;
};

export const getFavoriteRecipesByIds = async (ids: string[]) => {
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const url = new URL("https://api.spoonacular.com/recipes/informationBulk");
  const queryParams = {
    ids: ids.join(","),
    apiKey: apiKey,
  };
  url.search = new URLSearchParams(queryParams).toString();
  const response = await fetch(url.toString());
  const json = await response.json();
  return { results: json };
};
