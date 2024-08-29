import { useCallback, useContext, useEffect, useState } from 'react';
import VendorContext from './VendorContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getRequest, postRequest } from '../../../service';
import UploadFile from '../../../components/common/admin/components/formcontrols/UploadFile';

interface LoginFormInputs {
    name: string;
    email: string;
    phone_number: number;
    intro: string;
    banner: string;
    logo: string;
    country: number;
    state: number;
    city: number;
    address: string;
    latitude: string;
    longitude: string;
    categories: number[];
}

interface Categories {
    id: number;
    name: string;
    category?: Categories[];
}

interface ErrorMessage {
    has: boolean;
    type: 'warning' | 'danger' | 'success';
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

const VendorEdit = () => {
    const vendor = useContext<Vendor | null>(VendorContext);
    const [country, setCountry] = useState<Country[]>([]);
    const [state, setState] = useState<State[]>([]);
    const [city, setCity] = useState<City[]>([]);
    const [categories, setCategories] = useState<Categories[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { register, reset, setValue, handleSubmit, watch, formState: { errors } } = useForm<LoginFormInputs>();

    const [error, setErrorMessage] = useState<ErrorMessage>({
        has: false,
        type: 'warning',
        message: ''
    });

    console.log(country, state, city, error);

    useEffect(() => {
        getCountry();
        getCategories();
    }, []);

    const getCountry = () => {
        getRequest("v1/countries?skip=0&limit=1000")
          .then((res: { data: Country[] }) => {
            setCountry(res.data);
          })
          .catch((err: unknown) => {
            console.log(err);
          });
    };

    const getCategories = () => {
        getRequest("v1/category/listing?skip=0&limit=50&tree=1&parent=0")
          .then((res: { data: Categories[] }) => {
            setCategories(res.data);
          })
          .catch((err: unknown) => {
            console.log(err);
          });
    };

    useEffect(() => {
        if (vendor) {
            setValue('name', vendor.name);
            setValue('email', vendor.email);
            setValue('phone_number', vendor.phone_number);
            setValue('address', vendor.address);
            setValue('latitude', vendor.latitude);
            setValue('intro', vendor.description);
            setValue('longitude', vendor.longitude);
            setValue('logo', vendor.logo);
            setValue('banner', vendor.banner);
            setValue('country', vendor.country_id);
            setValue('state', vendor.state_id);
            setValue('city', vendor.city_id);
            setValue('categories', vendor.categories);
        }
    }, [setValue, vendor]);

    const countryID = watch('country');
    const stateID = watch('state');

    const getState = useCallback(() => {
        if (countryID) {
            getRequest(`v1/states?skip=0&limit=1000&country_id=${countryID}`)
            .then((res: { data: State[] }) => {
              setState(res.data);
              setValue('state', vendor?.state_id ?? res.data[0]?.id); // Fallback if vendor data not available
            })
            .catch((err: unknown) => {
              console.log(err);
            });
        }
    }, [countryID, setValue, vendor]);

    const getCity = useCallback(() => {
        if (stateID) {
            getRequest(`v1/cities?skip=0&limit=1000&state_id=${stateID}`)
            .then((res: { data: City[] }) => {
              setCity(res.data);
              setValue('city', vendor?.city_id ?? res.data[0]?.id); // Fallback if vendor data not available
            })
            .catch((err: unknown) => {
              console.log(err);
            });
        }
    }, [setValue, stateID, vendor]);

    useEffect(() => {
        getState();
    }, [countryID, getState]);

    useEffect(() => {
        getCity();
    }, [stateID, getCity]);

    const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
        console.log(data);
        setLoading(true);
        postRequest(`v1/vendor/${vendor?.id}/update`, data)
            .then((res) => {
                if (res.success) {
                    alert("Vendor created successfully");
                    reset();
                    window.location.href = `/cpanel/vendor-detail/${vendor?.id}/info`;
                }
            })
            .catch(() => setErrorMessage({
                has: true,
                type: 'danger',
                message: "Error creating vendor"
            }))
            .finally(() => {
                setLoading(false);
            });
    };

    const handleImageUpload = (name: string, url: string) => {
        console.log(name);
        setValue(name as keyof LoginFormInputs, url); // Type assertion to match LoginFormInputs
    };

    return (
        <div className="card custom-card">
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
                    <div className="row">
                        <div className="col-md-8">
                            {/* Business Info Card */}
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Business Info</h4>

                                    <div className="form-group row">
                                        <label htmlFor="name" className="col-sm-3 control-label col-form-label">
                                            <span>Business Name</span>
                                        </label>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Business Name Here"
                                                autoComplete="on"
                                                {...register('name', {
                                                    required: 'Name is required'
                                                })}
                                            />
                                            {errors.name && <p className='text-danger text-right'>{errors.name.message}</p>}
                                        </div>
                                    </div>

                                    {/* Other fields go here... */}

                                    <div className="form-group row">
                                        <label htmlFor="banner" className="col-sm-3 control-label col-form-label">
                                            <span>Banner</span>
                                        </label>
                                        <div className="col-sm-9">
                                            <UploadFile 
                                                onUpload={handleImageUpload} // Ensure this matches UploadFile prop type
                                                name="banner"
                                                path="vendors/"
                                                type="category"
                                                val={watch("banner")}
                                            />
                                            <input 
                                                type="hidden" 
                                                {...register('banner', { required: "This field is required" })}
                                            /> 
                                            {errors.banner && <p className='text-danger text-right'>{errors.banner.message}</p>}
                                        </div>
                                    </div>

                                    {/* Other fields go here... */}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            {/* Categories Accordion */}
                            <div className="card card-h-100">
                                <div className="card-body right-aside">
                                    <div className="accordion-item card">
                                        <h2 className="accordion-header" id="category">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#categoryWrap" aria-expanded="true" aria-controls="categoryWrap">
                                                Category
                                            </button>
                                        </h2>
                                        <div id="categoryWrap" className="accordion-collapse collapse show" aria-labelledby="category">
                                            <div className="card-body">
                                                {categories.map((cate) => (
                                                    <div className="form-check" key={cate.id}>
                                                        <input
                                                            type="checkbox"
                                                            {...register('categories', {
                                                                required: "Category is required",
                                                            })}
                                                            className="form-check-input"
                                                            value={cate.id}
                                                            id={`customCheck${cate.id}`}
                                                        />
                                                        <label className="form-check-label" htmlFor={`customCheck${cate.id}`}>
                                                            {cate.name}
                                                        </label>
                                                    </div>
                                                ))}
                                                {errors.categories && <p className='text-danger text-right'>{errors.categories.message}</p>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Other accordions go here... */}

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 text-right">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={loading}
                            >
                                {loading ? 'Saving...' : 'Save'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VendorEdit;