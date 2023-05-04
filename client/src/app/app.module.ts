import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './_pages/index/index.component';
import { KontaktComponent } from './_pages/kontakt/kontakt.component';
import { GalerieComponent } from './_pages/galerie/galerie.component';
import { UeberUnsComponent } from './_pages/ueber-uns/ueber-uns.component';
import { NavigationComponent } from './_components/navigation/navigation.component';
import { DropdownNavigationElementComponent } from './_components/dropdown-navigation-element/dropdown-navigation-element.component';
import { ContactComponent } from './_components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeschichteComponent } from './_components/geschichte/geschichte.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    KontaktComponent,
    GalerieComponent,
    UeberUnsComponent,
    NavigationComponent,
    DropdownNavigationElementComponent,
    ContactComponent,
    GeschichteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
