import { Routes } from '@angular/router';
import {ArtistComponent} from "./components/artist/artist.component";
import {AlbumComponent} from "./components/album/album.component";
import {HomeComponent} from "./components/pages/home/home.component";
import {ArtistsListComponent} from "./components/artists-list/artists-list.component";


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'album/:id', component: AlbumComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'artists', component: ArtistsListComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];
