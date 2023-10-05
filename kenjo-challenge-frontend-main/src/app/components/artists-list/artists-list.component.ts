import {Component, OnInit} from '@angular/core';
import {ArtistModel} from '../../shared/models/artist.model';

;
import Swal from 'sweetalert2';
import {ArtistService} from "../../services/artist.service";

@Component({
    selector: 'app-artists-list',
    templateUrl: './artists-list.component.html',
    styles: []
})
export class ArtistsListComponent implements OnInit {

    artistsList: ArtistModel[] = [];
    loading = false;

    constructor(private artistService: ArtistService) {
    }

    ngOnInit() {
        this.loading = true;
        this.artistService.getAllArtists()
            .subscribe((resp: any) => {
                this.artistsList = resp
                this.loading = false;
            });
    }

    deleteArtist(artist: ArtistModel, i: number) {

        Swal.fire({
            title: 'You sure?',
            text: `Do you want to delete ${artist.name} ?`,
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
        }).then(resp => {
            if (resp.value) {
                this.artistsList.splice(i, 1);
                if (artist._id != null) {
                    this.artistService.deleteArtist(artist._id).subscribe();
                }
            }
        })

    }

}
