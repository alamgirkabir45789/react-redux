import React, { createContext, useState } from "react";
import Router from "../src/router/Router";

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState({ loggedIn: false });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* <LogInButtons /> */}
      {/* <PageLinks /> */}
      <Router />
    </UserContext.Provider>
  );
};

export default App;
