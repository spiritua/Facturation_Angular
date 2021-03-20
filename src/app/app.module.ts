import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionPageComponent } from './connexion-page/connexion-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConnexionPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'accueil', component: AccueilComponent},
      {path: '', redirectTo:'accueil', pathMatch: 'full'},
      {path: 'connexion', component: ConnexionPageComponent},
      {path: '**', redirectTo: 'accueil', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
