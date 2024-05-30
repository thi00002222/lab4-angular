import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    {path: '', component: ProductlistComponent},
    {path: 'products/:id', component: ProductdetailComponent},
    {path: '**', component: NotfoundComponent}
];

