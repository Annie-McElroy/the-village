import React, { useState, createContext, useContext } from "react";

// Variable equal to react's createContext
// Returns an object tha contains 2 components: provider and consumer
export const RequestContext = createContext();

// Create custom hook for components to have immediate access to provider value



// Provider becomes our object that contains state
// Return RequestContext.Provider component and pass in value to make available to all components and props (if needed)

// Make sure to import RequestContext to App.js and wrap it around all the components

// Add methods to add request and delete request - reference module 22 State, activity 4 (unsolved or solved)

// const RequestContext = () => {

//   return (
//     <RequestContext.Provider value={({ })}
//   );
// };

// export default RequestContext;