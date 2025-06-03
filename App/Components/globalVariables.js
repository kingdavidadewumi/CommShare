import { createContext, useState } from "react";


export const AppContext = createContext();
export function AppProvider({ children }) {
    const [userInfo, setUserInfo] = useState({ firstname: "Mark", lastname: "David", email: "john@gmail.com", image: null });
    const [estates, setEstates] = useState([]);
    const [estateGroups, setEstateGroups] = useState([]);
    const [createdEstates, setCreatedEstates] = useState([]);
    const [userUID, setUserUID] = useState("H8ipARv0RlTGKKi3Q9rW43ml59O2"); // Winner
    // const [userUID, setUserUID] = useState("s9aVYCEr4HdI6Fu5SgEoC2s2xgl2"); // MJ
    const [preloader, setPreloader] = useState(false);



    return (
        <AppContext.Provider value={{
            userInfo, setUserInfo,
            estates, setEstates,
            estateGroups, setEstateGroups,
            userUID, setUserUID,
            preloader, setPreloader,
            createdEstates, setCreatedEstates
        }}>
            {children}
        </AppContext.Provider>
    );

}