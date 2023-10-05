import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ArtistModel} from '../shared/models/artist.model';
import {map} from 'rxjs/operators';
import {ARTIST_URL} from "../shared/constants/urls";

@Injectable({
    providedIn: 'root'
})
export class ArtistService {

    constructor(private http: HttpClient) {
    }

    getAllArtists() {

        return this.http.get(`${ARTIST_URL}/artist/all`);

    }

    getArtistById(id: string) {

        return this.http.get(`${ARTIST_URL}/artist/${id}`);

    }

    deleteArtist(id: string) {

        return this.http.delete(`${ARTIST_URL}/artist/${id}`);

    }

    createArtist(artist: ArtistModel) {

        return this.http.post(`${ARTIST_URL}/artist/create`, artist)
            .pipe(
                map((resp: any) => {
                    artist._id = resp._id;
                    return artist;
                })
            )

    }

    updateArtist(artist: ArtistModel) {

        const artistTemp = {
            ...artist
        };

        delete artistTemp._id;

        return this.http.put(`${ARTIST_URL}/${artist._id}`, artistTemp);

    }

}
