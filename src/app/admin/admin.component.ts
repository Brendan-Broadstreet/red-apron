import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../api.service';
import { Menu, MainMenu, EntreeItemMenu, SideItemMenu } from '../menu';
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
  showCard2 = false;
  showCard3 = false;
  recipeID: string;
  mainCourse: string;
  sideDish: string;
  price: string;
  category: string;
  MenuResults = [];
  SideMenuResults = [];
  // tslint:disable-next-line:max-line-length
  // EntreeMenu: MainMenu = { menu: { name: undefined, img: undefined, category: undefined, cooktime: undefined, ingredients: undefined, instructions: undefined, preptime: undefined, price: undefined, servings: undefined } };
  // tslint:disable-next-line:max-line-length
  SideMenu: SideItemMenu = { name: undefined, img: undefined, category: undefined, cooktime: undefined, ingredients: undefined, instructions: undefined, preptime: undefined, price: undefined, servings: undefined };


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

  inputMainCourseItem(entreeID) {
    this.apiService.getEntreeItem(entreeID).subscribe(response => {
      console.log(response);
      this.Food.recipe_title = response.title;
      this.Food.recipe_category = response.category;
      this.Food.recipe_cooktime = response.readyInMinutes;
      this.Food.recipe_image = response.image;
      this.Food.recipe_ingredients = response.extendedIngredients;
      this.Food.recipe_instructions = response.analyzedInstructions[0].steps;
      this.Food.recipe_servings = response.servings;
      this.Food.recipe_preptime = response.preptime;
      this.Food.recipe_price = response.price;
    });
  }

  inputSideItem(sideItemID) {
    this.apiService.getSideItem(sideItemID).subscribe(response => {
      console.log(response);
      this.Food.recipe_title = response.title;
      this.Food.recipe_category = response.category;
      this.Food.recipe_cooktime = response.readyInMinutes;
      this.Food.recipe_image = response.image;
      this.Food.recipe_ingredients = response.extendedIngredients;
      this.Food.recipe_instructions = response.analyzedInstructions[0].steps;
      this.Food.recipe_servings = response.servings;
      this.Food.recipe_preptime = response.preptime;
      this.Food.recipe_price = response.price;
    })
  }

  fullMenuToggle() {
    this.showCard = true;
    this.showCard2 = false;
    this.showCard3 = false;
  }

  entreeMenuToggle() {
    this.showCard = false;
    this.showCard2 = true;
    this.showCard3 = false;
  }

  sideItemToggle() {
    this.showCard = false;
    this.showCard2 = false;
    this.showCard3 = true;
  }

  // postEntreeItem() {
  //   // tslint:disable-next-line:prefer-const
  //   let combomenu: EntreeItemMenu = {
  //     name: this.EntreeMenu.recipe_title,
  //     img: this.EntreeMenuItem.recipe_image,
  //     category: this.category,
  //     ingredients: JSON.stringify(this.Food.recipe_ingredients),
  //     instructions: JSON.stringify(this.Food.recipe_instructions),
  //     cooktime: this.Food.recipe_cooktime,
  //     preptime: this.Food.recipe_preptime,
  //     servings: this.Food.recipe_servings,
  //     price: this.price
  //   };
  //   this.postService.postEntreeComboMenu(combomenu).subscribe(response => {
  //     console.log(response);
  //   });
  // }


}
