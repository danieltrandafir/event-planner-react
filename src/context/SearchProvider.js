import { createContext, useContext, useState } from "react";

import { getFromLocalStorage } from "../utils/getFromLocalStorage";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [items, setItems] = useState(getFromLocalStorage("plans", []));
    const [results, setResults] = useState(getFromLocalStorage("eventList", []));


    const value = { items, setItems, results, setResults };

    return (
        <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
    );
};

export const useSearch = () => useContext(SearchContext);