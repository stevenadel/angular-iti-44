import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:"",
        component: ProductsListComponent,
        title: "Products List"
    },
    {
        path: "product-details/:id",
        component: ProductDetailsComponent,
        title: "Game details page"
    },
    {
        path: "register",
        component: RegisterComponent,
        title: "Register"
    },
    {
        path: "login",
        component: LoginComponent,
        title: "Log in"
    },
    {
        path: "cart",
        component: CartComponent,
        title: "Cart"
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];