import React from 'react';
interface Vendor {
    id: number;
    name: string;
    email: string;
    phone_number: number;
    description: string;
    logo: string;
    banner: string;
    country_id: number;
    state_id: number;
    city_id: number;
    address: string;
    latitude: string;
    longitude: string;
    categories: number[];
}

const VendorContext = React.createContext<Vendor | null>(null);

export default VendorContext;