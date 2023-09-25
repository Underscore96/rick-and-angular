import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CharacterDetail } from '../model/character-detail';

@Injectable({
  providedIn: 'root'
})
export class DataService {


 readonly BASE_URL = 'https://rickandmortyapi.com/api/';

 pageNumber = 1;

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<CharacterDetail[]>{
    return this.http.get<any>(this.BASE_URL + 'character?page=' + this.pageNumber).pipe(
      map(data => data.results)
    );

  }


  previousPage(){
    if (this.pageNumber>1) {
      this.pageNumber--;
      this.getAllCharacters();

    }
  }



  nextPage(){
    if (this.pageNumber>1) {
      this.pageNumber++;
      this.getAllCharacters();

    }
  }

  getSingleCharacter(id: string): Observable<CharacterDetail> {
    return this.http.get<CharacterDetail>(this.BASE_URL + 'character/' + id)

  }
}
