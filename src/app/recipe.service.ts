import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes = [
    {
      id: 1,
      title: 'Pasta Carbonara',
      description: 'Classic Italian pasta with eggs, cheese, and pancetta.',
      ingredients: 'Spaghetti, eggs, Parmesan cheese, pancetta, garlic, black pepper',
    },
    {
      id: 2,
      title: 'Chicken Curry',
      description: 'Spicy and flavorful Indian chicken curry.',
      ingredients: 'Chicken, onions, tomatoes, ginger, garlic, curry spices',
    },
    // Add more sample recipes as needed
  ];

  constructor() { }

  // Method to fetch all recipes
  getAllRecipes() {
    return this.recipes;
  }

  // Method to fetch a recipe by ID
  getRecipeById(id: number) {
    return this.recipes.find(recipe => recipe.id === id);
  }

  // Method to add a new recipe
  addRecipe(recipe: any) {
    // In a real-world scenario, you might generate a unique ID here
    this.recipes.push(recipe);
  }

  // Method to update an existing recipe
  updateRecipe(updatedRecipe: any) {
    const index = this.recipes.findIndex(recipe => recipe.id === updatedRecipe.id);
    if (index !== -1) {
      this.recipes[index] = updatedRecipe;
    }
  }

  // Method to delete a recipe by ID
  deleteRecipe(id: number) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
  }
}
