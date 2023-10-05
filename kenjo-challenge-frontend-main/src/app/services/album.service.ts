import { Injectable } from '@angular/core';
import {AlbumModel} from "../shared/models/album.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ALBUM_URL} from "../shared/constants/urls";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http:HttpClient) { }

  getAll():Observable<AlbumModel[]>{
    return this.http.get<AlbumModel[]>(ALBUM_URL+'/all');
  }

  deleteAlbum(albumId: string | undefined): Observable<void> {
    const url = `${ALBUM_URL}/${albumId}`;
    return this.http.delete<void>(url);
  }

  createAlbum( album: AlbumModel ){

    return this.http.post(`${ALBUM_URL }/create`, album)
        .pipe(
            map( (resp: any) => {
              album._id =resp._id;
              return album;
            })
        )
  }

  getAlbumById( id: string){

    return this.http.get(`${ ALBUM_URL }/album/${ id }`);

  }


  updateAlbum( album: AlbumModel ){

    const albumTemp = {
      ...album
    };

    //delete albumTemp._id;

    return this.http.put(`${ ALBUM_URL}/album/${ album._id }`, albumTemp);

  }

}
