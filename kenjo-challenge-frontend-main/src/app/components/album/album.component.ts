import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AlbumModel } from '../../shared/models/album.model';
import { ArtistModel } from '../../shared/models/artist.model';



import Swal from 'sweetalert2';
import {ArtistService} from "../../services/artist.service";
import {AlbumService} from "../../services/album.service";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styles: [
  ]
})
export class AlbumComponent implements OnInit {

  album: AlbumModel = new AlbumModel();

  artist: ArtistModel = new ArtistModel();

  artistsList: ArtistModel[] = [];

  constructor(private artistService: ArtistService,
              private albumService: AlbumService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(){
/*
    this.artist.getAllArtists()
        .subscribe((data: any) => {
          this.artistsList = data;
        });

    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'new') {
      this.albumService.getAlbumById(id)
          .subscribe( (resp: AlbumModel) => {
            this.album = resp;
          })
    }
*/
  }

  save(form: NgForm) {

    if (form.invalid) {
      console.log('Form is not valid');
      return;
    }

    Swal.fire({
      title: 'Wait',
      text: 'Saving data',
      icon: 'info',
      allowOutsideClick: true
    });
    Swal.showLoading();

    let petition: Observable<any>;

    if (this.album._id) {
      petition = this.albumService.updateAlbum( this.album )
    } else {
      petition = this.albumService.createAlbum( this.album )
    }

    petition.subscribe( resp => {
      Swal.fire({
        title: this.album.title,
        text: 'Updated successfully',
        icon: 'success'
      })
      this.router.navigate(['/home']);
    })

  }

}
