import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';

export const Chart = () => {
  const { data: worldData, isLoading, isError } = useQuery('worldData', fetchData);

  async function fetchData() {
    try {
      const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

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

  return (
    <div>
      <h1>COVID-19 Cases Fluctuation</h1>
      <div style={{ height: '500px', width: '100%' }}>
        <Line data={lineGraphData} />
      </div>
    </div>
  );
};


// import React from 'react';
// import { useQuery } from 'react-query';
// import { Line } from 'react-chartjs-2';
// import axios from 'axios';

// export const Chart = () => {
//   const { data: worldData, isLoading, isError } = useQuery('worldData', fetchData);

//   async function fetchData() {
//     try {
//       const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
//       return response.data;
//     } catch (error) {
//       throw new Error('Failed to fetch data');
//     }
//   }

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error fetching data</div>;
//   }

//   const lineGraphData = {
//     labels: Object.keys(worldData.cases || {}),
//     datasets: [
//       {
//         label: 'Cases',
//         data: Object.values(worldData.cases || {}),
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1,
//       },
//     ],
//   };

//   return (
//     <div>
//       <h1>COVID-19 Cases Fluctuation</h1>
//       <div style={{ height: '500px', width: '100%' }}>
//         <Line data={lineGraphData} />
//       </div>
//     </div>
//   );
// };

// export default Chart;
