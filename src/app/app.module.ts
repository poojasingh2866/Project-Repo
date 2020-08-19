import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './component/registration-form/registration-form.component';
import { DisplayDataComponent } from './component/display-data/display-data.component';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: RegistrationFormComponent
  },
  {
    path: 'user/:uid',
    component: DisplayDataComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    DisplayDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
