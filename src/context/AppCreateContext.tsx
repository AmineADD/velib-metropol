import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { Station, Stations } from '../types/Stations';
import { user } from '../types/User';

type AppCreateContextType = {
    isConnected?: boolean;
    user?: user;
    isDarkMode?: boolean;
    stations?: Stations;
    nbShow?: number;
    favorites?: Station[];
    zoom?: number;
    setZoom?: Dispatch<SetStateAction<number>>;
    setFavorites?: Dispatch<SetStateAction<Station[]>>;
    setNbShow?: Dispatch<SetStateAction<number>>;
    setIsDarkMode?: Dispatch<SetStateAction<boolean>>;
};

const AppCreateContext = createContext<AppCreateContextType>({ isDarkMode: false, nbShow: 10 });

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