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
  setSearchLocation,
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
  }, [apiKey, setLocation, setError, setValue]);

  const handleAddressSearch = (e: FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value.trim();
    if (!inputValue) return;

    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        inputValue
      )}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'OK' && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setSearchLocation({ latitude: lat, longitude: lng });
          setAddress(data.results[0].formatted_address);
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
          onChange={handleAddressSearch}
          placeholder="Enter Business Address"
        />
        {errors.address && <span className="error">{errors.address.message}</span>}
      </fieldset>
    </>
  );
};

export default SearchLocation;
