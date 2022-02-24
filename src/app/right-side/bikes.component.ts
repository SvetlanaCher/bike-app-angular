import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../app.service';
import { AddedBikes } from '../app.interface';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss']
})
export class BikesComponent implements OnInit {

  loading: boolean = true;
  @Input() id: any;

  constructor(
    public sharedService: SharedService
  ) { }

  ngOnInit(): void { }
  
  ngOnChanges(): void {
    if (this.id) {
      this.sharedService.fetchBikes(this.id);
      this.loading = false;
    }
  }

  addBike(item: AddedBikes) {
    this.sharedService.addBike(item);
  }

  isBikeAdded(item: AddedBikes) {
    if ( this.sharedService.selectedBike.includes(item) ) {
      return true;
    }
    else {
      return false;
    }
  }

  removeBike(item: AddedBikes) {
    this.sharedService.removeBike(item);
  }

}

