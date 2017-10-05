import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SuccessComponent } from './success/success.component';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';


const appRoutes:Routes = [
  {
    path: 'success',
    canActivate: [AuthguardGuard],
    component: SuccessComponent
  },
  {
    path: '',
    // redirectTo: 'users/mehulmpt/1',
    // pathMatch: 'prefix'
    component: LoginFormComponent,
  }, 
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SuccessComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
