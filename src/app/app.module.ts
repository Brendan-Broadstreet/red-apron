import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { RoleGuardService } from './auth/role-guard.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PackageMealsComponent } from './package-meals/package-meals.component';
import { CustomMealsComponent } from './custom-meals/custom-meals.component';
import { LoginComponent } from './login/login.component';

import { ProfileComponent } from './profile/profile.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from './admin/admin.component';

import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { NavComponent } from './nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { SharedComponent } from './components/shared/shared.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    PackageMealsComponent,
    CustomMealsComponent,

    LoginComponent,
    ProfileComponent,
    CartComponent,

    CheckoutComponent,
    AdminComponent,
    SignupComponent,

    HeaderComponent,
    FooterComponent,
    NavComponent,

    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,

    CartComponent,
    SharedComponent,
    CartItemComponent,

    ProductItemComponent,

    AboutComponent,

  ],
  imports: [
    FlexLayoutModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,

    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,

    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,

    MatRadioModule,
    MatSelectModule,
    MatSliderModule,

    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,

    MatToolbarModule,
    MatListModule,
    MatGridListModule,

    MatCardModule,
    MatStepperModule,
    MatTabsModule,

    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,

    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,

    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,

    MatTableModule,
    MatSortModule,
    MatPaginatorModule,

  ],
  providers: [
    RoleGuardService,
    AuthGuardService,
    AuthService,
    JwtHelperService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
