import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../api.service';
import { Menu, MainMenu } from '../menu';
import { PostService } from '../post.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  constructor(private apiService: ApiService, private postService: PostService) { }

  // tslint:disable-next-line:max-line-length
  Food: Menu = { recipe_title: undefined, recipe_category: undefined, recipe_cooktime: undefined, recipe_image: undefined, recipe_ingredients: undefined, recipe_instructions: undefined, recipe_preptime: undefined, recipe_price: undefined, recipe_servings: undefined };
  showCard = false;
  recipeID: string;
  mainCourse: string;
  sideDish: string;
  price: string;
  category: string;
  MenuResults = [];
  SideMenuResults = [];


  ngOnInit(): void {
  }

  grab() {
    this.apiService.getFood(this.recipeID).subscribe(response => {
      console.log(response.title);
      this.Food.recipe_title = response.title;
      this.Food.recipe_category = response.category;
      this.Food.recipe_cooktime = response.readyInMinutes;
      this.Food.recipe_image = response.image;
      this.Food.recipe_ingredients = response.extendedIngredients;
      this.Food.recipe_instructions = response.analyzedInstructions[0].steps;
      this.Food.recipe_servings = response.servings;
      this.Food.recipe_preptime = response.preptime;
      this.Food.recipe_price = response.price;
      this.showCard = true;
    });
  }

  findMainCourse() {
    console.log(this.mainCourse);
    this.apiService.getMainCourse(this.mainCourse).subscribe(response => {
      console.log(response.results);
      this.MenuResults = response.results;
    });
  }

  findSideDish() {
    console.log(this.sideDish);
    this.apiService.getSideDish(this.sideDish).subscribe(response => {
      console.log(response);
      this.SideMenuResults = response.results;
    });
  }

  postMenu() {
    // tslint:disable-next-line:prefer-const
    let menu: MainMenu = {
      menu: {
        name: this.Food.recipe_title,
        img: this.Food.recipe_image,
        category: this.category,
        ingredients: JSON.stringify(this.Food.recipe_ingredients),
        instructions: JSON.stringify(this.Food.recipe_instructions),
        cooktime: this.Food.recipe_cooktime,
        preptime: this.Food.recipe_preptime,
        servings: this.Food.recipe_servings,
        price: this.price
      }
    };
    this.postService.postFood(menu).subscribe(response => {
      console.log(response);
    });
  }

  inputMainCourseItem() {
    const recipeID = 752543;
    console.log(recipeID);
  }

  inputSideResult() {

  }
}
