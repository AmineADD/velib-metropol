import { FC, useEffect, useMemo, useState } from 'react'
import Favorites from '../src/components/Favorites/Favorites';
import NavBar from '../src/components/NavBar/NavBar'
import { AppCreateContextProvider } from '../src/context/AppCreateContext'
import { Station } from '../src/types/Stations';

const Favorite: FC = () => {
    const [user, setUser] = useState();
    const [isConnected, setIsConnected] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [favorites, setFavorites] = useState<Station[]>([]);

    useEffect(() => {
        setIsConnected(localStorage.getItem("user") !== null)
    }, [])

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user") ?? "{}"));
    }, [isConnected])

    useEffect(() => {
        setFavorites(JSON.parse(localStorage.getItem("favorites")) ?? []);
    }, [user])

    const context = useMemo(
        () => ({ isConnected, user, isDarkMode, favorites, setFavorites, setIsDarkMode }),
        [isConnected, user, isDarkMode, favorites, setFavorites, setIsDarkMode]
    );
    return (
        <AppCreateContextProvider value={context}>
            <NavBar />
            <Favorites />
        </AppCreateContextProvider>)
}

export default Favorite
