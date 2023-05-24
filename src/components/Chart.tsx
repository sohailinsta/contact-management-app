import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';

export const Chart = () => {
  // Fetch data using react-query
  const { data: worldData, isLoading, isError } = useQuery('worldData', fetchData);

  // Define an asynchronous function to fetch data from the API
  async function fetchData() {
    try {
      // Fetch historical COVID-19 data from the API
      const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  }

  // Display loading state while data is being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Display error message if data fetching fails
  if (isError) {
    return <div>Error fetching data</div>;
  }

  // Prepare the data for the line graph
  const lineGraphData = {
    labels: Object.keys(worldData.cases || {}),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(worldData.cases || {}),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  // Render the chart component
  return (
    <div>
      <h1>COVID-19 Cases Fluctuation</h1>
      <div style={{ height: '500px', width: '100%' }}>
        <Line data={lineGraphData} />
      </div>
    </div>
  );
};