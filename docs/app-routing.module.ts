import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

const routes: Routes = [
  {path: 'home', component: CharactersListComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'character', loadChildren: () => import('./components/character/character.module').then(m => m.CharacterModule) },
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
