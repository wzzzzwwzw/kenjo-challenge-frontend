import { Injectable } from '@angular/core';
import {Album} from "../shared/models/album";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ALBUM_URL} from "../shared/constants/urls";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Album[]>{
    return this.http.get<Album[]>(ALBUM_URL+'/all');
  }

  deleteAlbum(albumId: string): Observable<void> {
    const url = `${ALBUM_URL}/${albumId}`;
    return this.http.delete<void>(url);
  }



}
