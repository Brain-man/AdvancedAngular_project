import { Routes } from '@angular/router';
import { AboutComponent } from './02Lesson/about/about.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './02Lesson/profile/profile.component';
import { AboutteamComponent } from './02Lesson/about/aboutteam/aboutteam.component';

export const routes: Routes = [
  {path: '',component:AppComponent},
  {path: 'about' ,component:AboutComponent},
  {path: 'about' , pathMatch:"prefix", children: [{path: 'team' ,component:AboutteamComponent}]},
  {path: 'profile/:id',component:ProfileComponent}];
