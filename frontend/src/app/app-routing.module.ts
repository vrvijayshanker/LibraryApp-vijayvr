import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';

const routes: Routes = [
  { path:'',redirectTo:'login',pathMatch:'full' },
  { path:'login', component:UserloginComponent },
  { path:'signup', component:UsersignupComponent },
  { path:'dashboard', component:DashboardComponent },
  { path:'newbook', component:AddbookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserloginComponent,UsersignupComponent,DashboardComponent,AddbookComponent]
