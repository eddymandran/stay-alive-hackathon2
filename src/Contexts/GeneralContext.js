import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [scorePlayer, setScorePlayer] = useState(0);
  const [background, setBackground] = useState("App");

  const ChoosenWallpaper = (fond) => {
    setBackground(fond);
  };

  return (
    <GeneralContext.Provider
      value={{
        scorePlayer,
        setScorePlayer,
        background,
        setBackground,
        ChoosenWallpaper,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
export default GeneralContextProvider;
