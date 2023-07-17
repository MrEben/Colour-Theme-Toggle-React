import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const themeReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE-THEME":
        return {
          theme: action.payload,
        };
      default:
        return state;
    }
  };
  const currentThemeCol = localStorage.getItem("theme-col");

  const initial = {
    theme: currentThemeCol || "",
  };
  const [state, dispatch] = useReducer(themeReducer, initial);
  useEffect(() => {
    //  store the value of the state.theme
    localStorage.setItem("theme-col", state.theme);
  }, [state.theme]);
  return (
    <AppContext.Provider value={{ state, dispatch, isModalOpen, toggleModal }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
