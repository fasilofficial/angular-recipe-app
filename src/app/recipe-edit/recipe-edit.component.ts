import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  editedRecipe: any = {};
  originalRecipe: any;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const recipeId = +params['id'];
      this.originalRecipe = this.recipeService.getRecipeById(recipeId);
      this.editedRecipe = { ...this.originalRecipe };
    });
  }

  onSubmit() {
    this.recipeService.updateRecipe(this.editedRecipe);
    this.router.navigate(['/recipes']);
  }
}
