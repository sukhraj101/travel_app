import React, { useState, useEffect } from 'react';
import Popup from '../../../../components/common/admin/components/popup/index'; 
import { getRequest, postRequest } from '../../../../service';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'; 

 
interface Addresses {
    filter(arg0: (record: { title: string; }) => boolean): unknown;
    id: number;
    title: string;
    latitude: number;
    longitude: number;
    address: string;
  }
  

  interface LocationsProps {
    handlePickup: (e: React.ChangeEvent<HTMLInputElement>, checkbox: Addresses) => void;
    addressIds: string[];
  }
  
  const Locations: React.FC<LocationsProps> = ({
    handlePickup,
    addressIds
  }) => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false); 
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [title, setTitle] = useState('');
  const [records, setRecords] = useState<Addresses>([]);
  
  const { 
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });

  console.log(loading);
  const getLocations = () => {
    setLoading(true);
    getRequest(`v1/vendor/1/pickup-locations`)
      .then((res) => {
        setRecords(res.data);
        setLoading(false);
      })
      .catch(() => alert('Error fetching tags'))
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getLocations();
  }, []);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setAddress('');
  };

  const handleSelect = ({ description }: { description: string }) => {
    setValue(description, false);
    clearSuggestions();

    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        setAddress(description);
        setLatitude(lat);
        setLongitude(lng);
        
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const saveLocation =  () => {
    if (latitude == undefined || longitude == undefined || address == '' || title == '') {
      return;
    } else {
      setLoading(true);
      postRequest(`v1/vendor/1/pickup-location/store`, {
        latitude: latitude,
        longitude: longitude,
        address: address,
        title: title,
      })
        .then((res) => {
          if (res.success) {
            getLocations();
            alert("Vendor created successfully");
            setShowModal(false);
          }
        })
        .catch(() => alert("Error creating category"))
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveChanges = () => {
    //saveLocation();
    setShowModal(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

 
  const filteredRecords = records?.filter((record: { title: string; }) =>
    record.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePickup = (
    e: React.ChangeEvent<HTMLInputElement>,
    address: Addresses
  ) => {
    if (e.target.checked) {
      // Check if the address is already in the pickupFields array
      const isDuplicate = addressIds.includes(address.id.toString());
      if (!isDuplicate) {
        // Append address logic here
      }
    } else {
      // Remove address logic here
    }
  };
  
  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Search tags here..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="tags-wrap mb-2">
      {filteredRecords && filteredRecords.map((checkbox:{id:number;title:string}) => (
          <div className="form-check" key={checkbox.id}>
            <input
              type="checkbox"
              id={checkbox.id.toString()}
              className="form-check-input" 
              checked={addressIds.includes(checkbox.id.toString())}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePickup(e, checkbox)} 
              value={checkbox.id.toString()}
            />
            <label className="form-check-label mb-0" htmlFor={checkbox.id.toString()}>
              {checkbox.title}
            </label>
          </div>
        ))}
      </div>
      <button type="button" className="btn btn-primary btn-align-right" onClick={handleOpenModal}>
        Add new
      </button>
      {showModal && (
        <Popup title="Add New Location" show={showModal} onClose={handleCloseModal} onSave={handleSaveChanges}>
          <>
            <div className="form-group row">
              <label htmlFor="title" className="col-sm-4 control-label col-form-label">
                <span>Pickup Location Title</span>
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                />
                {title == '' && (
                  <p className="text-danger text-right">
                    Title is required!
                  </p>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="address" className="col-sm-4 control-label col-form-label">
                <span>Address</span>
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  value={value}
                  onChange={handleInput}
                  placeholder="Address"
                />
                {status === 'OK' && (
                  <ul>
                    {data.map((suggestion) => (
                      <li key={suggestion.place_id} onClick={() => handleSelect(suggestion)}>
                        {suggestion.description}
                      </li>
                    ))}
                  </ul>
                )}
                {address == '' && (
                  <p className="text-danger text-right">
                    Address is required!
                  </p>
                )}
              </div>
            </div>
          </>
          <div className="modal-footer">
            <button type="button" onClick={()=>saveLocation()} className="btn btn-primary">Save changes</button>
          </div>
        </Popup>
      )}
    </>
  );
};

export default Locations;

 