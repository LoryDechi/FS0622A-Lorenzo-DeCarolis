import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MaiuscoloPipe } from './pipes/maiuscolo.pipe';
import { EvidenziaDirective } from './directives/evidenzia.directive';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { UsersComponent } from './components/users/users.component';
import { UserChildComponent } from './components/user-child/user-child.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    NavbarComponent,
    HomeComponent,
    MaiuscoloPipe,
    EvidenziaDirective,
    DettaglioComponent,
    UsersComponent,
    UserChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
