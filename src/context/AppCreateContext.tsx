import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { user } from '../types/User';

type AppCreateContextType = {
    isConnected?: boolean;
    user?: user;
    isDarkMode?: boolean;
    setIsDarkMode?: Dispatch<SetStateAction<boolean>>;
};

const AppCreateContext = createContext<AppCreateContextType>({ isDarkMode: false });

export const AppCreateContextProvider = AppCreateContext.Provider;

export const useAppCreateContext = () => {
    const context = useContext(AppCreateContext);
    if (!context) {
        throw new Error(
            'error by Context AppCreateContext'
        );
    }
    return context;
};