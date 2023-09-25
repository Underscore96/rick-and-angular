import { Component, Input } from '@angular/core';
import { CharacterDetail } from 'src/app/model/character-detail';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() character?: CharacterDetail;



}
