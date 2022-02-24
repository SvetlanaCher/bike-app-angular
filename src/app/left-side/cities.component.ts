import { Component, OnInit, Output } from '@angular/core';
import { SharedService } from '../app.service';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {


  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.fetchCitiesBikes();
  }

  chooseCity(id: string) {
    if (id) {
      this.sharedService.getId(id);
    }
  }

}
