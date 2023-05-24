import { useQuery } from 'react-query';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

interface CountryData {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
  };
  active: number;
  recovered: number;
  deaths: number;
}

const fetchData = async () => {
  const response = await axios.get<CountryData[]>('https://disease.sh/v3/covid-19/countries');
  return response.data;
};

export const Map = () => {
  const { data: countryData, isLoading, error } = useQuery('countryData', fetchData);

  const [selectedMarker, setSelectedMarker] = useState<CountryData | null>(null);

  const handleMarkerClick = (country: CountryData) => {
    setSelectedMarker(country);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  const mapOptions = {
    zoom: 2,
    center: { lat: 20, lng: 0 },
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: An error occurred while fetching the data.</div>;
  }
  
  

  return (
    <div className="-z-10">
      <h1>COVID-19 Country Specific Data</h1>
      <GoogleMap  mapContainerStyle={{ height: '500px', width: '100%' }} options={mapOptions}>
        {countryData && countryData.map((country) => (
          <Marker
            key={country.country}
            position={{ lat: country.countryInfo.lat, lng: country.countryInfo.long }}
            onClick={() => handleMarkerClick(country)}
          />
        ))}
        {selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.countryInfo.lat, lng: selectedMarker.countryInfo.long }}
            onCloseClick={handleInfoWindowClose}
          >
            <div>
              <h3>{selectedMarker.country}</h3>
              <p>Active Cases: {selectedMarker.active}</p>
              <p>Recovered Cases: {selectedMarker.recovered}</p>
              <p>Deaths: {selectedMarker.deaths}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};
