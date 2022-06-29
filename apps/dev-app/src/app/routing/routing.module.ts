import { HomeComponent } from '../components/home/home.component';
import { NgModule } from '@angular/core';

import { RoutingRoutingModule } from './routing-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { PasswordInputComponent } from '../components/password-input/password-input.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'password-input', component: PasswordInputComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
