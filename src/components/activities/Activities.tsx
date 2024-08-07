import Breadcrum from "./components/breadcrums/Breadcrum";
import TourDetails from "./components/details/TourDetails";
import TourPackage from "./components/details/TourPackage";
import Gallery from "./components/gallery/Gallery";
import './activities.css'
import { getRequest } from "../../service";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type Translation = {
    name: string;
    short_description: string;
    description: string;
    language_id: number;
    language_name: string;
  };
  
  type PickupAddress = {
    address_id: number; 
    title:string;
    group_pickup_price: number;
    group_dropoff_price: number;
    group_extra_km: number;
    private_pickup_price: number;
    private_dropoff_price: number;
    private_extra_km: number;
    vip_pickup_price: number;
    vip_dropoff_price: number;
    vip_extra_km: number;
    isfree: number;
  };
  
interface Product{
    name: string;
    description: string;
    thumbnail:string;
    short_description:string;
    country_id:string;
    state_id:string;
    city_id:string;
    address:string;
    latitude:string;
    longitude:string; 
    pickup_address: PickupAddress[];
    images:string[];
    translations: Translation[];  
    adult_price:number; 
    children_price:number;
    adult_limit:number;
    children_limit:number;
    included:string[];
    excluded:string[];
    tags:string[];
    categories:string[];
  }
const Activities = () => {
    const { id } = useParams();
    const [galleryImages, setGalleryImages] = useState<string[]>([]);
    const [product, setProduct] = useState<Product>();
    useEffect(() => { 
      productDetail();
    }, [])
  
  
    const productDetail = () => {
      getRequest(`v1/product/${id}/detail`)
        .then((res: { data: Product }) => {
          setProduct(res.data); 
          setGalleryImages(res?.data?.images);
  
        })
        .catch((err: unknown) =>  console.log(err));
    };
  return (
    <>
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrum/>
                    </div>
                </div>
                <div className="row mb-6">
                    <Gallery product={product}/>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <TourDetails  product={product}/>
                    </div>
                    <div className="col-md-4">
                        <TourPackage/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Activities