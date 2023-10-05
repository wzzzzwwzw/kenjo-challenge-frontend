import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import {RatingModule} from "ng-starrating";
import {AppRoutingModule} from "./app-routing.module";
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import {ArtistsListComponent} from "./components/artists-list/artists-list.component";
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {ROUTES} from "./app.routes";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ArtistComponent,
    AlbumComponent,
    ArtistsListComponent,
    NavbarComponent
  ],
  imports: [RatingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forRoot( ROUTES, { useHash: true} )


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
