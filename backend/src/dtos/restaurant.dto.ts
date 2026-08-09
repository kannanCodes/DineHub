export interface CreateRestaurantDto{
     name: string;
     address: string;
     contact: string;
}

export interface updateRestaurantDto{
     name ?: string;
     address ?:string;
     contact ?:string;
}