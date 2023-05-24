import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';

// Create a new instance of QueryClient
const queryClient = new QueryClient();

// Render the application
ReactDOM.render(
  // Provide the QueryClient to the application using QueryClientProvider
  <QueryClientProvider client={queryClient}>
    {/* Provide the Redux store to the application using Provider */}
    <Provider store={store}>
      {/* Render the root component, App */}
      <App />
    </Provider>
  </QueryClientProvider>,
  document.getElementById('root')
);
