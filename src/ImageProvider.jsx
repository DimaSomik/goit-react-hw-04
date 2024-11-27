import { useState, useContext, createContext } from "react";

const imageContex = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useImage = () => useContext(imageContex);

export const ImageProvider = ({ children }) => {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const ErrorTrue = () => {setIsError(true)};
    const ErrorFalse = () => {setIsError(false)};

    const LoadingTrue = () => {setIsLoading(true)};
    const LoadingFalse = () => {setIsLoading(false)};

    return (<imageContex.Provider value={{isError, isLoading, ErrorFalse, ErrorTrue, LoadingTrue, LoadingFalse}}>
        {children}
    </imageContex.Provider>);
}
