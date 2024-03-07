import { createContext } from "react";

const AppointmentContext = createContext("");

const AppointmentContextProvider = ({ children }) => {
  return <AppointmentContext.Provider>{children}</AppointmentContext.Provider>;
};

export { AppointmentContextProvider, AppointmentContext };
