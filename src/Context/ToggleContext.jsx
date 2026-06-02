import { createContext, useContext } from "react";


////Step#1: create context 
export const ToggleContext = createContext({
    theme : 'light',
    darkMode: () => {}
});
////provide usercontext
export const ToggleProvider = ToggleContext.Provider;


///a hoook for accessing the data from create context
// export const  themeData = useContext(useToggleContext);
 