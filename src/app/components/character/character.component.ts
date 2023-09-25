import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterDetail } from 'src/app/model/character-detail';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  character?: CharacterDetail;

  constructor(private route:ActivatedRoute, private dataServ: DataService){
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {


    this.dataServ.getSingleCharacter(id).subscribe(char => this.character = char);
  }
  }


  navigateToOrigin(){
    const url = this.character!.origin.url;
    const urlArray = url.split('/');
    const lastElement = urlArray[urlArray.length -1]

  }


  navigateToLocation(){

  }

}
