export interface LoginTypes {
    name: string
    streetName: string
    cityName: string
    stateName: string
    countryName: string
}


export interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    quantity: number;
    rating: { rate: number, count: number };
}