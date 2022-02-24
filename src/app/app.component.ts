import { AfterViewChecked, ChangeDetectorRef, Component, Output, ViewChild } from '@angular/core';
import { CitiesComponent } from './left-side/cities.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  
    @ViewChild(CitiesComponent)
    viewChild!: CitiesComponent;

    @Output() idParent: string | undefined;
    @Output() countBikes: any ;
  
    constructor(private cdref: ChangeDetectorRef) {}

    ngAfterContentChecked() {
      this.cdref.detectChanges();
      this.idParent = this.viewChild.sharedService.idBike;

      this.countBikes = this.viewChild.sharedService.selectedBike.length;
    }
  
    ngAfterViewChecked() { }
}
