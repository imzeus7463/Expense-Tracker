import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // Other components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,  // Ensure this is included
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      // Other routes...
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }