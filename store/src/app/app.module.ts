import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ExponentialPipe } from './pipes/exponential.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDividerModule, MatIconModule, MatMenuModule, MatSnackBarModule} from '@angular/material';
import { LoginComponent } from './shared/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ExponentialPipe,
    HighlightDirective,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
