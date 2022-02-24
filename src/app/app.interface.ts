export interface City {
    company: string;
    id: string;
    location: {
        city: string;
        country: string;
    }
    name: string;
};

export interface Bike {
    id: string;
    name: string;
    free_bikes: number;
    timestamp: string;
    extra: {
        address: string;
    }
}

export interface AddedBikes {
    id: string;
    name: string;
    free_bikes: number;
    timestamp: string;
    extra: {
        address: string;
    }
}