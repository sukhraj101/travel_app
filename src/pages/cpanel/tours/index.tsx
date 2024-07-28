/* eslint-disable no-case-declarations */
import React, { useEffect, useState } from "react";

import "./index.css";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { getRequest, postRequest } from "../../../service";
import { stringify } from "querystring";
import UploadFile from "../../../components/common/admin/components/formcontrols/UploadFile";
import { Url } from "url";
import TagSection from "./sections/tags";
import Locations from "./sections/locations";

interface LoginFormInputs {
  name: string;
  thumbnail: string;
  description: number;
  short_description: string;
  country: number;
  state: number;
  city: number;
  address: string;
  latitude: string;
  longitude: string;
  translations: Translation[];
  include_services: IncludeService[];
  categories: number[];
  languages: number[];
  images: string[];
  price_type: string;
  people_limit: number;
  children_price: number;
  adult_price: number;
  tags: string[]
}

interface ErrorMessage {
  has: boolean;
  type: "warning" | "danger" | "success";
  message: string;
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

type IncludeService = {
  service: string;
  details: string;
};

const CreateTour = () => {
  const [country, setCountry] = useState<Country[]>([]);
  const [state, setState] = useState<State[]>([]);
  const [city, setCity] = useState<City[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [languages, setLanguages] = useState<Languages[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const {
    register,
    reset,
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

  useEffect(() => {
    getCountry();
    getLanguages();
    getCategories();
  }, []);


  const handleTags = (tags:string[]) => {
    watch('tags',tags); 
    console.log(tags);
  }

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

  const getState = () => {
    getRequest(`v1/states?skip=0&limit=1000&country_id=${watch("country")}`)
      .then((res: { data: State[] }) => {
        setState(res.data);
      })
      .catch((err: unknown) => {
        console.log(err);
      });
  };

  const getCity = () => {
    getRequest(`v1/cities?skip=0&limit=1000&state_id=${watch("state")}`)
      .then((res: { data: City[] }) => {
        setCity(res.data);
      })
      .catch((err: unknown) => {
        console.log(err);
      });
  };

  const onSubmit: SubmitHandler<LoginFormInputs> = (data: any) => {
    console.log(data);
    setLoading(true);
    // postRequest(`v1/vendor/store`, data)
    //   .then((res) => {
    //     if (res.success) {
    //       alert("Vendor created successfully");
    //       reset();
    //       window.location.href = "/cpanel/vendor/listing";
    //     }
    //   })
    //   .catch(() => setErrorMessage("Error creating category"))
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };

  const handleTranslations = (
    e: { target: { checked: boolean; value: number } },
    language: Languages
  ) => {
    if (e.target?.checked) {
      appendTranslation({
        name: "",
        description: "",
        short_description: "",
        language_id: e.target.value,
        language_name: language?.language_name,
      });
    } else {
      const index = translationFields.findIndex(
        (t) => t.language_id == e.target.value
      );
      removeTranslation(index);
    }
  };

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
        setValue(name, url);
        break;
    }
  };

  // Watch the value of the price type field
  const priceType = watch("price_type");
  return (
    <>
      <div className="container-fluid">
        <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
          <div className="row">
            <div className="col-md-8">
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
                    General Info (English)
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

              {/* <div className="accordion-item card">
                <h2 className="accordion-header" id="charges">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#chargesWrap" aria-expanded="true" aria-controls="chargesWrap">
                    Charges
                  </button>
                </h2>
                <div id="chargesWrap" className="accordion-collapse collapse show" aria-labelledby="charges">
                  <div className="card-body">
                  </div>
                </div>
              </div>*/}

              <div className="accordion-item card">
                <h2 className="accordion-header" id="charges">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#chargesWrap"
                    aria-expanded="true"
                    aria-controls="chargesWrap"
                  >
                    Charges
                  </button>
                </h2>
                <div
                  id="chargesWrap"
                  className="accordion-collapse collapse show"
                  aria-labelledby="charges"
                >
                  <div className="card-body">
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
                          onChange={(e: event) => {
                            setValue("country", e.target.value);
                            getState();
                          }}
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
                          onChange={(e: event) => {
                            setValue("state", e.target.value);
                            getCity();
                          }}
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
            </div>
            <div className="col-md-4">
              <h5 className="card-title mb-2">Other Tour Details</h5>
              <div className="accordion-item card">
                <h2 className="accordion-header" id="Timages">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#TimagesWrap" aria-expanded="true" aria-controls="TimagesWrap">
                    Tour Images
                  </button>
                </h2>
                <div id="TimagesWrap" className="accordion-collapse collapse" aria-labelledby="Timages">
                  <div className="card-body">
                    <div className="form-group">                     
                      <UploadFile
                        onUpload={handleImageUpload}
                        name={"thumbnail"}
                        path={"vendors/"}
                        type={"category"}
                        val={watch("thumbnail")}
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
                        <img src="http://127.0.0.1:8000/vendors/1722160685biMpxhousebeautifullivingroompatternsstyleinspiration21522249825.jpg" alt="Gallery Image 0" />
                      </div>
                    </div>
                    <div className="form-group row tour-gallery">
                      <div className="tour-image">
                        <div className="remove-image"></div>
                        <img src="http://127.0.0.1:8000/vendors/1722160685biMpxhousebeautifullivingroompatternsstyleinspiration21522249825.jpg" alt="Gallery Image 0" />
                      </div>
                      <div className="tour-image">
                        <div className="remove-image"></div>
                        <img src="http://127.0.0.1:8000/vendors/1722160685biMpxhousebeautifullivingroompatternsstyleinspiration21522249825.jpg" alt="Gallery Image 0" />
                      </div>
                      <div className="tour-image">
                        <div className="remove-image"></div>
                        <img src="http://127.0.0.1:8000/vendors/1722160685biMpxhousebeautifullivingroompatternsstyleinspiration21522249825.jpg" alt="Gallery Image 0" />
                      </div>
                      <div className="tour-image">
                        <div className="remove-image"></div>
                        <img src="http://127.0.0.1:8000/vendors/1722160685biMpxhousebeautifullivingroompatternsstyleinspiration21522249825.jpg" alt="Gallery Image 0" />
                      </div>
                      <div className="tour-image">
                        <div className="remove-image"></div>
                        <img src="http://127.0.0.1:8000/vendors/1722160685biMpxhousebeautifullivingroompatternsstyleinspiration21522249825.jpg" alt="Gallery Image 0" />
                      </div>
                      <div className="tour-image">
                        <div className="remove-image"></div>
                        <img src="http://127.0.0.1:8000/vendors/1722160685biMpxhousebeautifullivingroompatternsstyleinspiration21522249825.jpg" alt="Gallery Image 0" />
                      </div>
                      <div className="tour-image">
                        <div className="remove-image"></div>
                        <img src="http://127.0.0.1:8000/vendors/1722160685biMpxhousebeautifullivingroompatternsstyleinspiration21522249825.jpg" alt="Gallery Image 0" />
                      </div>
                      <div className="tour-image">
                        <div className="remove-image"></div>
                        <img src="http://127.0.0.1:8000/vendors/1722160685biMpxhousebeautifullivingroompatternsstyleinspiration21522249825.jpg" alt="Gallery Image 0" />
                      </div>
                      {galleryImages &&
                        galleryImages.map((image, index) => (
                          <div className="col-md-3" key={index}>
                            <img src={image} alt={`Gallery Image ${index}`} />
                          </div>
                        ))}
                    </div>                    
                    <div className="form-group row mb-0">
                      <UploadFile
                        onUpload={handleImageUpload}
                        name={"images"}
                        path={"vendors/"}
                        type={"category"}
                        val={""}
                      />
                      <input
                        type="hidden"
                        {...register(`images`, {
                          required: "This field is required",
                        })}
                      />
                      {errors.images && (
                        <p className="text-danger text-right">
                          {errors.images.message}
                        </p>
                      )}
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
                <div id="categoryWrap" className="accordion-collapse collapse" aria-labelledby="category">
                  <div className="card-body">
                    {categories.map((cate) => (
                      <>
                        <div className="form-check" key={cate.id}>
                          <input
                            type="checkbox"
                            {...register(`categories`)}
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
                              cate?.category?.map((sub) => (
                                <>
                                  <div className="form-check mt-2 mb-3" key={sub.id}>
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id={`customControlValidation-${sub.id}`}
                                      {...register(`categories`)}
                                      value={sub.id}
                                    />
                                    <label
                                      className="form-check-label mb-0"
                                      htmlFor={`customControlValidation-${sub.id}`}
                                    >
                                      {sub.name}
                                    </label>
                                      {sub?.category &&
                                        sub?.category?.map((child) => (
                                        <>
                                          <div
                                            className="form-check mt-2 mb-3"
                                            key={child.id}
                                          >
                                            <input
                                              type="checkbox"
                                              id={`customControlValidation-${child.id}`}
                                              {...register(`categories`)}
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
                    <TagSection handleTags={handleTags}/>
                  </div>
                </div>
              </div>
              
              <div className="accordion-item card">
                <h2 className="accordion-header" id="tags">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tagsWrap" aria-expanded="true" aria-controls="tagsWrap">
                    Pickup Locations
                  </button>
                </h2>
                <div id="tagsWrap" className="accordion-collapse collapse show" aria-labelledby="tags">
                  <div className="card-body">
                    <Locations />
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="row right-aside-btns">
            <div className="col-md-12 d-flex justify-content-end gap-3">
              <button
                type="reset"
                className="btn btn-success text-white"
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
