# Recipe App

Welcome to the Recipe App! This application allows users to view, add, and manage their favorite recipes. It's built using React for the frontend and Node.js with Prisma for the backend.

## Architecture
<p align="center">
  <img src="https://github.com/Suhas7842/Recipe-App/assets/95905505/8302d69c-6db0-4fe9-bda7-556be3862b42" alt="Arcitecture"/>
</p>

## Features

- **Frontend**:
  - Built with React.
  - Recipe search functionality with a visually appealing UI.
  - Display recipe cards with RecipeCard component.
  - Modal to display recipe details using the RecipeModal component.
  - Uses packages like `react-icons` for enhanced UI elements.

- **Backend**:
  - Built with Express.js.
  - Uses Prisma as an ORM.
  - Provides API endpoints for recipe search, fetching recipe summaries, and managing favorite recipes.

## Getting Started 🚀

### Prerequisites:

- Node.js and npm installed on your machine.
- An account on [ElephantSQL](https://www.elephantsql.com/) for the database.
- A [Spoonacular API key](https://spoonacular.com/food-api) for the recipe API

### Setting Up:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/chrisblakely01/react-node-recipe-app.git
   cd react-node-recipe-app
   ```

2. **Setting up the Backend**:

    Navigate to the backend directory:
     ```bash
     cd backend
     ```

    Install the necessary packages:
     ```bash
     npm install
     ```

    **Spoonacular API**:
     - Add the api key to the API_KEY variable in the .env file   

    **ElephantSQL Setup**:
     - Create a new database instance on ElephantSQL.
     - Copy the connection string provided by ElephantSQL.

    **Prisma Setup**:
     - Replace the `DATABASE_URL` in the `.env` file with your ElephantSQL connection string.
     - Initialize Prisma and generate the Prisma client:
       ```bash
       npx prisma init
       npx prisma generate
       ```

   - Start the backend server:
     ```bash
     npm start
     ```

3. **Setting up the Frontend**:

    Navigate to the frontend directory:
     ```bash
     cd frontend
     ```

    Install the necessary packages:
     ```bash
     npm install
     ```

    Start the frontend development server:
     ```bash
     npm run dev
     ```
## Contributing

- Feel free to fork this repository, make changes, and open a pull request if you think your changes can improve this project.


- You can customize this README further based on any additional features or details you'd like to include.
