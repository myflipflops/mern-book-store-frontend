// src/utils/baseURL.js

const getBaseUrl = () => {
  // Determine if the application is running in a production environment
  // This typically means it's deployed (e.g., on Vercel)
  // or if the hostname is not 'localhost'.
  if (process.env.NODE_ENV === 'production' || window.location.hostname !== 'localhost') {
    // If in production, return the URL of your DEPLOYED BACKEND API.
    // This has been updated with your provided backend URL.
    return 'https://mern-backend-dusky-eta.vercel.app/';
  } else {
    // If in development (running on your local machine), return the local backend URL.
    return 'http://localhost:5000';
  }
};

export default getBaseUrl;
