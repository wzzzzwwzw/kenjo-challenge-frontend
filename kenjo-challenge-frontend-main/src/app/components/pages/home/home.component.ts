import { Component, OnInit } from '@angular/core';
import {Album} from "../../../shared/models/album";
import {AlbumService} from "../../../services/album.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  albums:Album[]=[];
  constructor(private albumService :AlbumService,activatedRoute :ActivatedRoute) {
    let albumsObservable: Observable<Album[]>;
    activatedRoute.params.subscribe((params) => {

      albumsObservable = albumService.getAll();
      albumsObservable.subscribe((serverAlbums) => {
        this.albums = serverAlbums;
      })
    })
  }

  ngOnInit(): void {
  }

}
