import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RecipesService {
  constructor(private readonly httpService: HttpService) {}

  async getAllRecipes() {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }

  async getRecipesByIngredient(ingredient: string) {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }

  async getRecipesByCountry(country: string) {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`;
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }

  async getRecipesByCategory(category: string) {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }

  async getRecipeInfo(id: string) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }
}
