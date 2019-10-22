import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductComponent} from './components/product/product.component';
import {ContactComponent} from './components/contact/contact.component';
import {LoginComponent} from './shared/login/login.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'product', component: ProductComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
