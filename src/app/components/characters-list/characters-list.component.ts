import { Component, OnInit } from '@angular/core';
import { CharacterDetail } from 'src/app/model/character-detail';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit{
  characters: CharacterDetail[] = [];

  constructor(private dataServ: DataService){}

  ngOnInit(): void {
      this.dataServ.getAllCharacters().subscribe(characters => this.characters = characters);
  }
}
