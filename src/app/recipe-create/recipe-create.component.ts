import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent {
  newRecipe: any = {};

  constructor(private recipeService: RecipeService, private router: Router) { }

  onSubmit() {
    this.recipeService.addRecipe(this.newRecipe);
    this.router.navigate(['/recipes']);
  }
}
