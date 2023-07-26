import React, { createContext, useState } from "react";


export const RSContext = createContext();

export default function RSContextProvider(props) {
  const [businessPlan, setBusinessPlan] = useState("");
  const [businessRegister, setBusinessRegister]=useState({});

  return (
    <RSContext.Provider value={{ businessPlan, setBusinessPlan, businessRegister, setBusinessRegister }}>
      {props.children}
    </RSContext.Provider>
  );
}
