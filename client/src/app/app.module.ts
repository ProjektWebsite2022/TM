import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
import { EventsComponent } from './_pages/events/events.component';
import { EventItemComponent } from './_components/event-item/event-item.component';
import { EventSearchComponent } from './_components/event-search/event-search.component';
import { SingleEventComponent } from './_pages/single-event/single-event.component';
import { TeamComponent } from './_components/team/team.component';
import { FooterComponent } from './_components/footer/footer.component';
import { LogoCloudComponent } from './_components/logo-cloud/logo-cloud.component';
import { WarenkorbComponent } from './_pages/warenkorb/warenkorb.component';

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
    GeschichteComponent,
    EventsComponent,
    EventItemComponent,
    EventSearchComponent,
    SingleEventComponent,
    TeamComponent,
    FooterComponent,
    LogoCloudComponent,
    WarenkorbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
