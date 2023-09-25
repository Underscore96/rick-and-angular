import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public dataServ: DataService){}

  previousPage(){
    this.dataServ.previousPage();

  }



  nextPage(){
    this.dataServ.nextPage();

  }


}
