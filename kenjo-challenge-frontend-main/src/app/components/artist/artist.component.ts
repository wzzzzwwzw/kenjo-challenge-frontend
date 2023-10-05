import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ArtistModel } from '../../shared/models/artist.model';

import { ArtistService } from '../../services/artist.service';

import Swal from 'sweetalert2';



@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  artist: ArtistModel = new ArtistModel();


  constructor(private artistService: ArtistService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    const id= this.route.snapshot.paramMap.get('id');

    if ( id !== 'new') {
      if (typeof id === "string") {
        this.artistService.getArtistById(id)
            .subscribe((resp) => {
              this.artist = resp as ArtistModel;
            })
      }
    }
  }

  async save(form: NgForm) {

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
    await Swal.showLoading();

    let petition: Observable<any>;

    if (this.artist._id) {
      petition = this.artistService.updateArtist(this.artist)


    } else {
      petition = this.artistService.createArtist(this.artist)

    }
    petition.subscribe(resp => {
      Swal.fire({
        title: this.artist.name,
        text: 'Updated successfully',
        icon: 'success'
      })
      this.router.navigate(['/artists']);
    })

  }

}
