import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AddedBikes, Bike, City } from "./app.interface";

@Injectable({providedIn: 'root'})
export class SharedService {
    public idBike: string | undefined;
    public cities: any;
    public item: any;
    public loading: boolean = false;
    public network: City[] = [];
    public bikes: Bike[] = [];
    public selectedBike: AddedBikes[] = [];

    constructor(private http: HttpClient) {};

    fetchCitiesBikes() {
        return this.http.get('http://api.citybik.es/v2/networks/')
            .subscribe(res => {
                this.cities = res;
                this.network = this.cities.networks;
            })
    };

    getId(id: string) {
        this.idBike = id;
    };

    fetchBikes(id: string) {
        return this.http.get(`http://api.citybik.es/v2/networks/${id}`)
            .subscribe(res => {
                this.item = res;
                this.bikes = this.item.network.stations;
            })
    };

    addBike(selected: AddedBikes) {
        this.selectedBike.push(selected);
    }

    removeBike(selected: AddedBikes) {
        const found = this.selectedBike.find(e => e.id == selected.id);
        if (found) {
            this.selectedBike.splice(this.selectedBike.indexOf(found), 1);
        }
    }

}