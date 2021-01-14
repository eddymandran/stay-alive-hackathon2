import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [scorePlayer, setScorePlayer] = useState(0);
  const [backgroundApp, setBackgroundApp] = useState("home");
  const [worldID, setWorldID] = useState();

  return (
    <GeneralContext.Provider
      value={{
        scorePlayer,
        setScorePlayer,
        backgroundApp,
        setBackgroundApp,
        worldID,
        setWorldID
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
export default GeneralContextProvider;
