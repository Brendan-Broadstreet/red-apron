import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }
  httpOptions =
    new HttpHeaders({
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'x-rapidapi-key': 'da8849d152msh02b73b3707786fcp165f34jsn7e0c2ae27ec5'
    });
  getFood(recipeID: string): any {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeID}/information`, { headers: this.httpOptions });
  }

  getMainCourse(mainCourse: string): any {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?&number=10&offset=0&type=main%20course&instructionsRequired=true&query=${mainCourse}`, { headers: this.httpOptions });
  }

  getSideDish(sideDish: string): any {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?&number=10&offset=0&type=side%20dish&instructionsRequired=true&query=${sideDish}`, { headers: this.httpOptions });
  }
}
