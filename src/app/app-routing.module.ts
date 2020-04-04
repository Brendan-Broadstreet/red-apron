import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'

import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { RoleGuardService as RoleGuard } from './auth/role-guard.service';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [

  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [RoleGuard],
    data: {
      // expectedRole: 'admin'
      expectedRole: true
    }
  },
  {
    path: '',
    redirectTo: '/header',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
