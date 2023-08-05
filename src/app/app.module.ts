import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this line
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: 'recipes', component: RecipeListComponent },
  { path: 'create', component: RecipeCreateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeCreateComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add this line
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
