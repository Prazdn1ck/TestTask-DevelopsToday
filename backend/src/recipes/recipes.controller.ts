import { Controller, Get, Param, Query } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get('all')
  getAllRecipes() {
    return this.recipesService.getAllRecipes();
  }

  @Get('by-ingredient')
  getRecipesByIngredient(@Query('i') ingredient: string) {
    return this.recipesService.getRecipesByIngredient(ingredient);
  }

  @Get('by-country')
  getRecipesByCountry(@Query('a') country: string) {
    return this.recipesService.getRecipesByCountry(country);
  }

  @Get('by-category')
  getRecipesByCategory(@Query('c') category: string) {
    return this.recipesService.getRecipesByCategory(category);
  }

  @Get(':id')
  async getRecipeInfo(@Param('id') id: string) {
    return this.recipesService.getRecipeInfo(id);
  }
}
