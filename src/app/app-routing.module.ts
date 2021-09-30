import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AddCategorieComponent } from './categorie/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './categorie/list-categorie/list-categorie.component';
import { ListScategorieComponent } from './scategorie/list-scategorie/list-scategorie.component';
import { AddScategorieComponent } from './scategorie/add-scategorie/add-scategorie.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { ListArticleComponent } from './article/list-article/list-article.component';

const routes: Routes = [
  {path: '', component:MenuComponent,children : [
    {path: 'categories', component: ListCategorieComponent},
    {path: 'categorie', component: AddCategorieComponent},
    {path: 'scategories', component: ListScategorieComponent},
    {path: 'scategorie', component: AddScategorieComponent},
    {path: 'articles', component: ListArticleComponent},
    {path: 'article', component: AddArticleComponent},
    
  ]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
