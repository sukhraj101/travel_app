import React, { useEffect, FormEvent } from 'react';

interface SearchLocationProps {
  setLocation: (location: { latitude: number; longitude: number }) => void;
  setAddress: (address: string) => void;
  setError: (error: string) => void;
  setSearchLocation: (location: { latitude: number; longitude: number }) => void;
  setValue: (field: string, value: any) => void;
  register: any;
  errors: { [key: string]: { message: string } };
}

const SearchLocation: React.FC<SearchLocationProps> = ({
  setLocation,
  setAddress,
  setError, 
  setValue,
  register,
  errors,
}) => {
  const apiKey = 'AIzaSyAMYBMtmVO65WtPcEY8yk89U04iUm8HY-E';

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.status === 'OK' && data.results.length > 0) {
                setValue('address', data.results[0].formatted_address);
                setValue('latitude', latitude);
                setValue('longitude', longitude);
              } else {
                setError('Unable to retrieve address.');
              }
            })
            .catch((error) => {
              setError('Error fetching address: ' + error.message);
            });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, [apiKey, setLocation, setAddress, setError, setValue]);

  const handleAddressSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      value: { value: string };
    };
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        target.value.value
      )}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'OK' && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          console.log(lat, lng)
        //   setSearchLocation({ latitude: lat, longitude: lng });
        //   setAddress(data.results[0].formatted_address);
        } else {
          alert('Unable to find address.');
        }
      })
      .catch((error) => {
        alert('Error fetching location: ' + error.message);
      });
  };

  return (
    <>
      <fieldset>
        <label htmlFor="business">Business Address</label>
        <input
          {...register('address', { required: 'This field is required' })}
          type="text"
          onChange={(e) => handleAddressSearch(e)}
          placeholder="Enter Business Address"
        />
        {errors.address && <span className="error">{errors.address.message}</span>}
      </fieldset>
    </>
  );
};

export default SearchLocation;
