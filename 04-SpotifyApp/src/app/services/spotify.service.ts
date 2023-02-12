import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 

    console.log('Spotify Service Listo');

  }

  getQuery( query: string){
    const url =`https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAqXOvCDYabyLyNo_HQTDMFmYL2qgm2oqSZ1R5iONS0xIicdLBYl6TYSKQnghlwLIytFrOf1hGXW9L_Dof_Y7gNfGGdvEwsn5XvyyL-igabBHkDASlp'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){

   return this.getQuery('browse/new-releases?limit=20')
       .pipe(  map( (data: any) => {
          return data.albums.items;
        }));
  }

  getArtistas( termino: string ){

    return this.getQuery(`search?query=${ termino }&type=artist&locale=es-ES%2Ces%3Bq%3D0.9%2Cen%3Bq%3D0.8&offset=0&limit=15`)
    .pipe(  map( (data: any) => data.artists.items));
  }

  getArtista( id: string ){

    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks( id: string ){

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe(  map( (data: any) => data.tracks));
  }

}