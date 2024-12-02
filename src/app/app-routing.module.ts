import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListComponent } from './pages/list/list.component';
import { AuthGuard } from './auth.guard';

export const routes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canMatch: [AuthGuard] },
  { path: 'list', component: ListComponent, canMatch: [AuthGuard] },
  { path: '*', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
