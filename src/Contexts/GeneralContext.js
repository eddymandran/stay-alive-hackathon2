import React, { createContext, useState } from 'react';

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [scorePlayer, setScorePlayer] = useState(0);

  
   
 
  return (
    <GeneralContext.Provider value={{ scorePlayer, setScorePlayer }}>
      {children}
    </GeneralContext.Provider>
  );
};
export default GeneralContextProvider;
