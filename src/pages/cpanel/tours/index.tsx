/* eslint-disable no-case-declarations */
import { useCallback, useEffect, useState } from "react";

import "./index.css";
import { Controller, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { getRequest, postRequest } from "../../../service"; 
import UploadFile from "../../../components/common/admin/components/formcontrols/UploadFile"; 
import TagSection from "./sections/tags";
import Locations from "./sections/locations";
import { useParams } from "react-router-dom"; 


interface Languages {
  lang_id: number;
  language_name: string;
}

interface LoginFormInputs {
  name: string;
  thumbnail: string | null;
  description: string;
  short_description: string;
  country: string;
  state: string;
  city: string;
  address: string;
  latitude: string;
  longitude: string;
  translations: Translation[]; 
  include_services: IncludeService[];
  categories: string[];
  languages: number[];
  images: string[];
  price_type: string;
  people_limit: number;
  children_price: number;
  adult_price: number;
  tags: string[];
  included:string[];
  excluded:string[];
  whatToExpect:string[];
  termsAndConditions:string;
  privacyPolicy:string;
  pickup_address:PickupAddress[]; 
}
 
interface Country {
  id: number;
  name: string;
}

interface State {
  id: number;
  name: string;
}

interface City {
  id: number;
  name: string;
}

interface Languages {
  lang_id: number;
  language_name: string;
}

interface Categories {
  id: number;
  name: string;
  category: {
    map(arg0: (sub: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
    id: number;
    name: string;
    category: {
      id: number;
      name: string;
    };
  };
}

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

 

type IncludeService = {
  service: string;
  details: string;
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

  
const CreateTour = () => {
  const [country, setCountry] = useState<Country[]>([]);
  const [state, setState] = useState<State[]>([]);
  const [city, setCity] = useState<City[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [languages, setLanguages] = useState<Languages[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [product, setProduct] = useState<Product>();
 console.log(product);
  const {
    register, 
    control,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    defaultValues: {
      categories: [],
      languages: [],
      images: [],
      price_type: "both",
      people_limit: 10,
    },
  });
  const {
    fields: translationFields,
    append: appendTranslation,
    remove: removeTranslation,
  } = useFieldArray({
    control,
    name: "translations",
  });

  const {
    fields: pickupFields,
    append: appendPickup,
    remove: removePickup,
  } = useFieldArray({
    control,
    name: "pickup_address",
  });


  

  const { id } = useParams();
  useEffect(() => {
    getCountry();
    getLanguages();
    getCategories();
    productDetail();
  }, [])


  const productDetail = () => {
    getRequest(`v1/product/${id}/detail`)
      .then((res: { data: Product }) => {
        setProduct(res.data);
        setValue('name',res?.data?.name);
        setValue('thumbnail',res?.data?.thumbnail);
        setValue('description',res?.data?.description);
        setValue('short_description',res?.data?.short_description);  
        setValue('country',res?.data?.country_id); 
        setValue('state',res?.data?.state_id); 
        setValue('city',res?.data?.city_id); 
        setValue('address',res?.data?.address); 
        setValue('latitude',res?.data?.latitude); 
        setValue('longitude',res?.data?.longitude);  
        setValue('price_type',res?.data?.price_type); 
        setValue('children_price',res?.data?.children_price);  
        setValue('adult_price',res?.data?.adult_price);  

        setValue('included',res?.data?.included);
        setValue('excluded',res?.data?.excluded);
        setValue('tags',res?.data?.tags); 
        setValue('categories',res?.data?.categories);
        
        res?.data?.pickup_address.map((p:PickupAddress) => { 
          const isDuplicate = pickupFields.some(field => field.address_id === p.address_id);
          if (!isDuplicate) {
             appendPickup(p)
          }
        });

        res?.data?.translations.map((t:Translation) => {  
          const isDuplicate = translationFields.some(field => field.language_id === t.language_id);
          if (!isDuplicate) {
            appendTranslation(t)
          }
        }); 
        setGalleryImages(res?.data?.images);

      })
      .catch((err: unknown) =>  console.log(err));
  };


  const handleTags = (name:string,tags:string[]) => {
    watch(name,tags); 
    console.log(tags);
  }

 const countryID = watch('country'); 
 const stateID = watch('state'); 
 const getState = useCallback(() => {
  if (countryID) {
        getRequest(`v1/states?skip=0&limit=1000&country_id=${countryID}`)
        .then((res: { data: State[] }) => {
          setState(res.data); 
        })
        .catch((err: unknown) => {
          console.log(err);
        });
    }
}, [countryID]);

const getCity = useCallback(() => {
  if (stateID) {
  getRequest(`v1/cities?skip=0&limit=1000&state_id=${stateID}`)
    .then((res: { data: City[] }) => {
      setCity(res.data); 
    })
    .catch((err: unknown) => {
      console.log(err);
    });
  }
}, [stateID]);

useEffect(() => {
  getState();
}, [countryID, getState]);

useEffect(() => {
  getCity();
}, [stateID, getCity]);
  const getCategories = () => {
    getRequest("v1/category/listing?skip=0&limit=50&tree=1&parent=0")
      .then((res: { data: Categories[] }) => {
        setCategories(res.data);
      })
      .catch((err: unknown) => {
        console.log(err);
      });
  };

  const getLanguages = () => {
    getRequest("v1/languages/listing?skip=0&limit=50")
      .then((res: { data: Languages[] }) => {
        setLanguages(res.data);
      })
      .catch((err: unknown) => {
        console.log(err);
      });
  };

  const getCountry = () => {
    getRequest("v1/countries?skip=0&limit=1000")
      .then((res: { data: Country[] }) => {
        setCountry(res.data);
      })
      .catch((err: unknown) => {
        console.log(err);
      });
  };
 

  const onSubmit: SubmitHandler<LoginFormInputs> = (data: any) => {
    console.log(data);
    setLoading(true);
    postRequest(`v1/product/${id}/update`, data)
      .then((res) => {
        if (res.success) {
          alert("Vendor created successfully"); 
          window.location.href = "/cpanel/vendor/listing";
        }
      })
      .catch(() => alert("Error creating category"))
      .finally(() => {
        setLoading(false);
      });
  };

  const handleTranslations = (
    e: { target: { checked: boolean; value: number } },
    language: Languages
  ) => {
    if (e.target?.checked) {
      const isDuplicate = translationFields.some(field => field.language_id === e.target.value);
      if (!isDuplicate) {
        appendTranslation({
          name: "",
          description: "",
          short_description: "",
          language_id: e.target.value,
          language_name: language.language_name,
        });
      }
    } else {
      const index = translationFields.findIndex(
        (t) => t.language_id === e.target.value
      );
      removeTranslation(index);
    }
  };

  const handlePickup = (
    e: React.ChangeEvent<HTMLInputElement>,
    address: { id: number; title: string }
  ) => {
    if (e.target.checked) {
      // Check if the address is already in the pickupFields array
      const isDuplicate = pickupFields.some(field => field.address_id === address.id);
      if (!isDuplicate) {
        appendPickup({ 
          address_id: address.id, 
          title: address.title,
          group_pickup_price: 0,
          group_dropoff_price: 0,
          group_extra_km: 0,
          private_pickup_price: 0,
          private_dropoff_price: 0,
          private_extra_km: 0,
          vip_pickup_price: 0,
          vip_dropoff_price: 0,
          vip_extra_km: 0,
          isfree: 0
        });
      }
    } else {
      const index = pickupFields.findIndex(
        (t) => t.address_id === address.id
      );
      if (index !== -1) {
        removePickup(index);
      }
    }
  };
  
  // const addressIds:string[] = pickupFields.map((p) => p.address_id);
  const addressIds: string[] = pickupFields.map((p) => p.address_id.toString());

  type FormFieldNames =
  | "name"
  | "thumbnail"
  | "description"
  | "short_description"
  | "country"
  | "state"
  | "city"
  | "address"
  | "latitude"
  | "longitude"
  | "translations"
  | "include_services"
  | "categories"
  | "languages"
  | "images"
  | "price_type"
  | "people_limit"
  | "children_price"
  | "adult_price"
  | "tags"
  | "included"
  | "excluded"
  | "whatToExpect"
  | "termsAndConditions"
  | "privacyPolicy"
  | `pickup_address.${number}.isfree`

  const handleImageUpload = (name: string, url: string) => {
    switch (name) {
      case "images":
        setGalleryImages((prevImages) => {
          const newImages = [...prevImages, url];
          setValue(name, newImages);
          return newImages;
        });
        break;

      default:
        setValue(name as FormFieldNames, url);
        break;
    }
  };

  // Watch the value of the price type field
  const priceType = watch("price_type"); 
  return (
    <>
    {loading}
      <div className="container-fluid">
        <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
          <div className="row">
            <div className="col-md-10">
              <h5 className="card-title mb-2">Product Details</h5>
              <div className="accordion-item card">
                <h2 className="accordion-header" id="generalInfoTop">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTop"
                    aria-expanded="true"
                    aria-controls="collapseTop"
                  >
                    General Info 
                  </button>
                </h2>
                <div
                  id="collapseTop"
                  className="accordion-collapse collapse show"
                  aria-labelledby="generalInfoTop"
                >
                  <div className="card-body">
                    <div className="form-group row">
                      <label
                        htmlFor="name"
                        className="col-sm-3 control-label col-form-label"
                      >
                        <span>Title</span>
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Business Name Here"
                          autoComplete="on"
                          {...register("name", {
                            required: "Name is required",
                          })}
                        />
                        {errors.name && (
                          <p className="text-danger text-right">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="short_description"
                        className="col-sm-3 control-label col-form-label"
                      >
                        <span>short description</span>
                      </label>
                      <div className="col-sm-9">
                        <textarea
                          id="short_description"
                          className="form-control"
                          placeholder="Tour short_description Here"
                          rows={4}
                          autoComplete="on"
                          {...register("short_description", {
                            required: "Tour short description is required",
                          })}
                        />
                        {errors.short_description && (
                          <p className="text-danger text-right">
                            {errors.short_description.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="description"
                        className="col-sm-3 control-label col-form-label"
                      >
                        <span>Description</span>
                      </label>
                      <div className="col-sm-9">
                        <textarea
                          id="description"
                          className="form-control"
                          placeholder="Tour description Here"
                          rows={4}
                          autoComplete="on"
                          {...register("description", {
                            required: "Tour short description is required",
                          })}
                        />
                        {errors.description && (
                          <p className="text-danger text-right">
                            {errors.description.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="price"
                        className="col-sm-3 control-label col-form-label"
                      >
                        <span>Price</span>
                      </label>
                      <div className="col-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            value={"adult"}
                            id="adult_accepted"
                            {...register("price_type", {
                              required: "The field is required",
                            })}
                          />
                          <label
                            className="form-check-label mb-0 m-1"
                            htmlFor="adult_accepted"
                          >
                            Adults Only?
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            value={"children"}
                            id="children_accepted"
                            {...register("price_type", {
                              required: "The field is required",
                            })}
                            name="price_type"
                          />
                          <label
                            className="form-check-label mb-0 m-1"
                            htmlFor="children_accepted"
                          >
                            Children Only?
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            value={"both"}
                            id="both_accepted"
                            {...register("price_type", {
                              required: "The field is required",
                            })}
                            name="price_type"
                          />
                          <label
                            className="form-check-label mb-0 m-1"
                            htmlFor="both_accepted"
                          >
                            Both?
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="name"
                        className="col-sm-3 control-label col-form-label"
                      >
                        <span>People Limit</span>
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="people_limit"
                          placeholder="100"
                          autoComplete="on"
                          {...register("people_limit", {
                              required: "People limit is required",
                          })}
                        />
                        {errors.people_limit && (
                          <p className="text-danger text-right">
                            {errors.people_limit.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {priceType !== "children" && (
                      <div className="form-group row">
                        <label
                          htmlFor="price"
                          className="col-sm-3 control-label col-form-label"
                        >
                          <span>
                            Price <small>Per Adult</small>
                          </span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="number"
                            id="adult_price"
                            className="form-control"
                            placeholder="Price"
                            {...register("adult_price", {
                              required:
                                priceType !== "children"
                                  ? "Adult price is required"
                                  : false,
                            })}
                          />
                          {errors.adult_price && (
                            <p className="text-danger text-right">
                              {errors.adult_price.message}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                    {priceType !== "adult" && (
                      <div className="form-group row">
                        <label
                          htmlFor="price"
                          className="col-sm-3 control-label col-form-label"
                        >
                          <span>
                            Price <small>Per Child (Under 12 yrs)</small>
                          </span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="number"
                            id="children_price"
                            className="form-control"
                            placeholder="Price"
                            {...register("children_price", {
                              required:
                                priceType !== "adult"
                                  ? "Price is required"
                                  : false,
                            })}
                          />
                          {errors.children_price && (
                            <p className="text-danger text-right">
                              {errors.children_price.message}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {translationFields.map((field, index) => (
                <div className="accordion-item card" key={field.id}>
                  <h2 className="accordion-header" id={`generalInfo${index}`}>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapseLang${index}`}
                      aria-expanded="true"
                      aria-controls={`collapseLang${index}`}
                    >
                      General Info {field?.language_name}
                    </button>
                  </h2>
                  <div
                    id={`collapseLang${index}`}
                    className="accordion-collapse collapse show"
                    aria-labelledby={`generalInfo${index}`}
                  >
                    <div className="card-body">
                      <div className="form-group row">
                        <label
                          htmlFor={`translations.${index}.name`}
                          className="col-sm-3 control-label col-form-label"
                        >
                          <span>Title</span>
                        </label>
                        <div className="col-sm-9">
                          <Controller
                            control={control}
                            name={`translations.${index}.name` as const}
                            render={({ field }) => (
                              <input
                                {...field}
                                placeholder="Title"
                                className="form-control"
                              />
                            )}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          htmlFor={`translations.${index}.short_description`}
                          className="col-sm-3 control-label col-form-label"
                        >
                          <span>short description</span>
                        </label>
                        <div className="col-sm-9">
                          <Controller
                            control={control}
                            name={
                              `translations.${index}.short_description` as const
                            }
                            render={({ field }) => (
                              <textarea
                                {...field}
                                placeholder="Short Description"
                                className="form-control"
                              />
                            )}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          htmlFor={`translations.${index}.description`}
                          className="col-sm-3 control-label col-form-label"
                        >
                          <span>Description</span>
                        </label>
                        <div className="col-sm-9">
                          <Controller
                            control={control}
                            name={`translations.${index}.description` as const}
                            render={({ field }) => (
                              <textarea
                                {...field}
                                placeholder="Description"
                                className="form-control"
                              />
                            )}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          htmlFor={`translations.${index}.language_id`}
                          className="col-sm-3 control-label col-form-label"
                        >
                          <span>language</span>
                        </label>
                        <div className="col-sm-9">
                          <Controller
                            control={control}
                            name={`translations.${index}.language_id` as const}
                            render={({ field }) => (
                              <input
                                {...field}
                                placeholder="language id"
                                className="form-control"
                              />
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            

              <div className="accordion-item card">
                <h2 className="accordion-header" id="location">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#locationWrap"
                    aria-expanded="true"
                    aria-controls="locationWrap"
                  >
                    Location Info
                  </button>
                </h2>
                <div
                  id="locationWrap"
                  className="accordion-collapse collapse show"
                  aria-labelledby="location"
                >
                  <div className="card-body">
                    <div className="form-group row">
                      <label
                        htmlFor="country"
                        className="col-sm-3 control-label col-form-label"
                      >
                        <span>Select Country</span>
                      </label>
                      <div className="col-sm-9">
                        <select
                          className="form-control"
                          id="country"
                          {...register("country", {
                            required: "Country is required",
                          })}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setValue("country", e.target.value)
                          }
                        >
                          <option value="">Select Country</option>
                          {country.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.name}
                            </option>
                          ))}
                        </select>
                        {errors.country && (
                          <p className="text-danger text-right">
                            {errors.country.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="state"
                        className="col-sm-3 control-label col-form-label"
                      >
                        <span>Select State</span>
                      </label>
                      <div className="col-sm-9">
                        <select
                          className="form-control"
                          id="state"
                          {...register("state", {
                            required: "state is required",
                          })} 
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setValue("state", e.target.value)
                          }
                        >
                          <option value="">Select State</option>
                          {state.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.name}
                            </option>
                          ))}
                        </select>
                        {errors.state && (
                          <p className="text-danger text-right">
                            {errors.state.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="city"
                        className="col-sm-3 control-label col-form-label"
                      >
                        <span>Select city</span>
                      </label>
                      <div className="col-sm-9">
                        <select
                          className="form-control"
                          id="city"
                          {...register("city", {
                            required: "city is required",
                          })}
                         
                        >
                          <option value="">Select city</option>
                          {city.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.name}
                            </option>
                          ))}
                        </select>
                        {errors.city && (
                          <p className="text-danger text-right">
                            {errors.city.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="address"
                        className="col-sm-3 control-label col-form-label"
                      >
                        <span>Business Address</span>
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="Business Address Here"
                          autoComplete="on"
                          {...register("address", {
                            required: "Business Address is required",
                          })}
                        />
                        {errors.address && (
                          <p className="text-danger text-right">
                            {errors.address.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="latitude"
                        className="col-sm-3 control-label col-form-label"
                      >
                        <span>Latitude</span>
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="latitude"
                          placeholder="Latitude Here"
                          autoComplete="on"
                          {...register("latitude", {
                            required: "Latitude is required",
                          })}
                        />
                        {errors.latitude && (
                          <p className="text-danger text-right">
                            {errors.latitude.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="longitude"
                        className="col-sm-3 control-label col-form-label"
                      >
                        <span>Longitude</span>
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          id="longitude"
                          placeholder="Longitude Here"
                          autoComplete="on"
                          {...register("longitude", {
                            required: "Longitude is required",
                          })}
                        />
                        {errors.longitude && (
                          <p className="text-danger text-right">
                            {errors.longitude.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                {pickupFields && 
                  <div className="accordion-item card">
                    <h2 className="accordion-header" id="selectedPickup">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#selectedPickupWrap" aria-expanded="true" aria-controls="selectedPickupWrap">
                        All Pick Up Locations
                      </button>
                      </h2>
                      <div id="selectedPickupWrap" className="accordion-collapse collapse show" aria-labelledby="selectedPickup">
                        <div className="card-body"> 
                        {pickupFields && pickupFields.map((pickup:PickupAddress,index) => (      
                          <div key={index} className="accordion-item card">
                            <h2 className="accordion-header" id={`selectedPickup${index}`}>
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#selectedPickup${index}Wrap`} aria-expanded="true" aria-controls={`selectedPickup${index}Wrap`}>
                                 {pickup?.title}
                              </button>
                            </h2>
                            <div id={`selectedPickup${index}Wrap`} className="accordion-collapse collapse show" aria-labelledby={`selectedPickup${index}`}>
                                <div className="card-body"> 
                                  
                                  <div className="form-group row">
                                      <label htmlFor="group_pickup_price" className="col-sm-3 control-label col-form-label"><span>Public Transportation Charges</span></label>
                                      <div className="col-sm-3"> 
                                            <Controller
                                              control={control}
                                              name={`pickup_address.${index}.group_pickup_price` as const}
                                              render={({ field }) => (
                                               <> 
                                               <label>Pickup</label>
                                                <input
                                                  type="number"
                                                  {...field}
                                                  placeholder="Pickup Price"
                                                  className="form-control"
                                                />
                                               </>
                                              )}
                                            />
                                        </div>
                                      <div className="col-sm-3"> 
                                        <Controller
                                              control={control}
                                              name={`pickup_address.${index}.group_dropoff_price` as const}
                                              render={({ field }) => (
                                               <>
                                                <label>Dropoff</label>
                                                <input
                                                  type="number"
                                                  {...field}
                                                  placeholder="Dropoff Price"
                                                  className="form-control"
                                                />
                                               </>
                                              )}
                                            />
                                        </div>
                                      <div className="col-sm-3"> 
                                        <Controller
                                              control={control}
                                              name={`pickup_address.${index}.group_extra_km` as const}
                                              render={({ field }) => (
                                               <>
                                                   <label>Price (Per km)</label>
                                                  <input
                                                    type="number"
                                                    {...field}
                                                    placeholder="price per km"
                                                    className="form-control"
                                                  />
                                               </>
                                              )}
                                            />
                                        </div>
                                  </div>


                                 

                                  <div className="form-group row">
                                      <label htmlFor="private_pickup_price" className="col-sm-3 control-label col-form-label"><span>Private Transportation Charges</span></label>
                                      <div className="col-sm-3"> 
                                            <Controller
                                              control={control}
                                              name={`pickup_address.${index}.private_pickup_price` as const}
                                              render={({ field }) => (
                                                <input
                                                  type="number"
                                                  {...field}
                                                  placeholder="Pickup Price"
                                                  className="form-control"
                                                />
                                              )}
                                            />
                                        </div>
                                      <div className="col-sm-3"> 
                                        <Controller
                                              control={control}
                                              name={`pickup_address.${index}.private_dropoff_price` as const}
                                              render={({ field }) => (
                                                <input
                                                  type="number"
                                                  {...field}
                                                  placeholder="Dropoff Price"
                                                  className="form-control"
                                                />
                                              )}
                                            />
                                        </div>
                                      <div className="col-sm-3"> 
                                        <Controller
                                              control={control}
                                              name={`pickup_address.${index}.private_extra_km` as const}
                                              render={({ field }) => (
                                                <input
                                                  type="number"
                                                  {...field}
                                                  placeholder="price per km"
                                                  className="form-control"
                                                />
                                              )}
                                            />
                                        </div>
                                  </div>
  

                                  <div className="form-group row">
                                      <label htmlFor="vip_pickup_price" className="col-sm-3 control-label col-form-label"><span>VIP Transportation Charges</span></label>
                                      <div className="col-sm-3"> 
                                            <Controller
                                              control={control}
                                              name={`pickup_address.${index}.vip_pickup_price` as const}
                                              render={({ field }) => (
                                                <input
                                                  type="number"
                                                  {...field}
                                                  placeholder="Pickup Price"
                                                  className="form-control"
                                                />
                                              )}
                                            />
                                        </div>
                                      <div className="col-sm-3"> 
                                        <Controller
                                              control={control}
                                              name={`pickup_address.${index}.vip_dropoff_price` as const}
                                              render={({ field }) => (
                                                <input
                                                  type="number"
                                                  {...field}
                                                  placeholder="Dropoff Price"
                                                  className="form-control"
                                                />
                                              )}
                                            />
                                        </div>
                                      <div className="col-sm-3"> 
                                        <Controller
                                              control={control}
                                              name={`pickup_address.${index}.vip_extra_km` as const}
                                              render={({ field }) => (
                                                <input
                                                  type="number"
                                                  {...field}
                                                  placeholder="price per km"
                                                  className="form-control"
                                                />
                                              )}
                                            />
                                        </div>
                                  </div>


                                </div>
                            </div>
                          </div>                    
                        ))}
                      </div>
                    </div>
                  </div>
                }
            </div>
            <div className="col-md-2">
              <h5 className="card-title mb-2">Other Tour Details</h5>
              <div className="accordion-item card">
                <h2 className="accordion-header" id="Timages">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#TimagesWrap" aria-expanded="true" aria-controls="TimagesWrap">
                    Tour Images
                  </button>
                </h2>
                <div id="TimagesWrap" className="accordion-collapse collapse show" aria-labelledby="Timages">
                  <div className="card-body">
                    <div className="form-group">                     
                      <UploadFile
                        onUpload={handleImageUpload}
                        name={"thumbnail"}
                        path={"vendors/"}
                        type={"product"}
                        val={''}
                      />
                      <input
                        type="hidden"
                        {...register(`thumbnail`, {
                          required: "This field is required",
                        })}
                      />
                      {errors.thumbnail && (
                        <p className="text-danger text-right">
                          {errors.thumbnail.message}
                        </p>
                      )}
                      <div className="tour-banner">
                        <div className="remove-image"></div>
                        <img src={watch('thumbnail') ?? undefined} alt="Gallery Image 0" />
                      </div>
                    </div>
                                  
                    <div className="form-group row mb-0">
                      <UploadFile
                        onUpload={handleImageUpload}
                        name={"images"}
                        path={"vendors/"}
                        type={"product"}
                        val={""}
                      />
                      <input
                        type="hidden"
                        {...register(`images`)}
                      />
                      {errors.images && (
                        <p className="text-danger text-right">
                          {errors.images.message}
                        </p>
                      )}
                    </div>

                    <div className="form-group row tour-gallery">  
                      {galleryImages &&
                        galleryImages.map((image, index) => ( 
                           <div className="tour-image"  key={index}>
                              <div className="remove-image"></div>
                              <img src={image} alt={`Gallery Image ${index}`} />
                            </div>
                        ))}
                    </div>     
                  </div>
                </div>
              </div>

              <div className="accordion-item card">
                <h2 className="accordion-header" id="category">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#categoryWrap" aria-expanded="true" aria-controls="categoryWrap">
                    Category
                  </button>
                </h2>
                <div id="categoryWrap" className="accordion-collapse collapse show" aria-labelledby="category">
                  <div className="card-body">
                    {categories.map((cate) => (
                      <>
                        <div className="form-check" key={cate.id}>
                          <input
                            type="checkbox"
                            {...register(`categories`, {
                              required: "Category is required",
                            })}
                            className="form-check-input"
                            value={cate.id}
                            id={`customControlValidation-${cate.id}`}
                          />
                          <label
                            className="form-check-label mb-0"
                            htmlFor={`customControlValidation-${cate.id}`}
                          >
                            {cate.name}
                          </label>
                          <br />
                          <div className="col-md-12">
                            {cate?.category &&
                              cate?.category?.map((sub:Categories) => (
                                <>
                                  <div className="form-check mt-2 mb-3" key={sub.id}>
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id={`customControlValidation-${sub.id}`}
                                      {...register(`categories`, {
                                        required: "Category is required",
                                      })}
                                      value={sub.id}
                                    />
                                    <label
                                      className="form-check-label mb-0"
                                      htmlFor={`customControlValidation-${sub.id}`}
                                    >
                                      {sub.name}
                                    </label>
                                      {sub?.category &&
                                        sub?.category?.map((child:Categories) => (
                                        <>
                                          <div
                                            className="form-check mt-2 mb-3"
                                            key={child.id}
                                          >
                                            <input
                                              type="checkbox"
                                              id={`customControlValidation-${child.id}`}
                                              {...register(`categories`, {
                                                required: "Category is required",
                                              })}
                                              className="form-check-input"
                                              value={child.id}
                                            />
                                            <label
                                              className="form-check-label mb-0"
                                              htmlFor={`customControlValidation-${child.id}`}
                                            >
                                              {child.name}
                                            </label>
                                          </div>
                                        </>
                                      ))}
                                  </div>
                                </>
                              ))}
                          </div>
                        </div>
                      </>
                    ))}

                      {errors.categories && (
                        <p className="text-danger text-right">
                          {errors.categories.message}
                        </p>
                      )}
                  </div>
                </div>
              </div>

              <div className="accordion-item card">
                <h2 className="accordion-header" id="language">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#languageWrap" aria-expanded="true" aria-controls="languageWrap">
                    Language Translations
                  </button>
                </h2>
                <div id="languageWrap" className="accordion-collapse collapse" aria-labelledby="language">
                  <div className="card-body">
                    {languages.map((language, index) => (
                      <div className="form-check" key={index}>
                        <input
                          type="checkbox"
                          id={`customControlValidation-${language.lang_id}`}
                          className="form-check-input"
                          value={language.lang_id}
                          {...register("languages")}
                          onChange={(e: any) =>
                            handleTranslations(e, language)
                          }
                        />

                        <label
                          className="form-check-label mb-0"
                          htmlFor={`customControlValidation-${language.lang_id}`}
                        >
                          {language.language_name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="accordion-item card">
                <h2 className="accordion-header" id="tags">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tagsWrap" aria-expanded="true" aria-controls="tagsWrap">
                    Tags
                  </button>
                </h2>
                <div id="tagsWrap" className="accordion-collapse collapse show" aria-labelledby="tags">
                  <div className="card-body">
                    <TagSection  name={'tags'} type={'tags'} register={register}/>
                  </div>
                </div>
              </div>

             <div className="accordion-item card">
                <h2 className="accordion-header" id="includes">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#includesWrap" aria-expanded="true" aria-controls="includesWrap">
                  Included
                  </button>
                </h2>
                <div id="includesWrap" className="accordion-collapse collapse show" aria-labelledby="includes">
                  <div className="card-body">
                    <TagSection  name={'included'} type={'Included'} register={register}/>
                  </div>
                </div>
              </div>  


              <div className="accordion-item card">
                <h2 className="accordion-header" id="includes">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#includesWrap" aria-expanded="true" aria-controls="includesWrap">
                  Excluded
                  </button>
                </h2>
                <div id="includesWrap" className="accordion-collapse collapse show" aria-labelledby="includes">
                  <div className="card-body">
                    <TagSection type={'Excluded'} name={'excluded'} register={register}/>
                  </div>
                </div>
              </div> 
              
              <div className="accordion-item card">
                <h2 className="accordion-header" id="locations">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#locationsWrap" aria-expanded="true" aria-controls="locationsWrap">
                    Pickup Locations
                  </button>
                </h2>
                <div id="locationsWrap" className="accordion-collapse collapse show" aria-labelledby="locations">
                  <div className="card-body">
                    <Locations handlePickup={handlePickup} addressIds={addressIds}  handleTags={handleTags}/>
                  </div>
                </div>
              </div>



              
             <div className="accordion-item card">
                <h2 className="accordion-header" id="includes">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#includesWrap" aria-expanded="true" aria-controls="includesWrap">
                  What To Expect
                  </button>
                </h2>
                <div id="includesWrap" className="accordion-collapse collapse show" aria-labelledby="includes">
                  <div className="card-body">
                    <TagSection  name={'whatToExpect'} type={'whatToExpect'} register={register}/>
                  </div>
                </div>
              </div>   

            </div>
          </div>
          <div className="row right-aside-btns">
            <div className="col-md-12 d-flex justify-content-end gap-3">
              <button
                type="reset"
                className="btn btn-secondary text-white"
              >
                Reset
              </button>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTour;
