import { useEffect, useMemo, useState } from 'react'
import Main from '../src/components/Main/Main'
import NavBar from '../src/components/NavBar/NavBar'
import { AppCreateContextProvider } from '../src/context/AppCreateContext'
import { Station, Stations } from '../src/types/Stations'

const Home = ({ fetched }: {
  fetched: {
    data: { stations: [] }
    lastUpdatedOther: number
    ttl: number
  }
}) => {

  const stations: Stations = {
    results: fetched?.data.stations,
    lastFetch: new Date(fetched?.lastUpdatedOther * 1000)//timestamp to date
  }
  const [user, setUser] = useState();
  const [isConnected, setIsConnected] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [nbShow, setNbShow] = useState(10);
  const [zoom, setZoom] = useState(12);
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
    () => ({ isConnected, user, isDarkMode, favorites, setFavorites, zoom, setZoom, stations, nbShow, setNbShow, setIsDarkMode }),
    [isConnected, user, isDarkMode, stations, favorites, setFavorites, zoom, nbShow, setZoom, setIsDarkMode]
  );


  return (
    <AppCreateContextProvider value={context}>
      <NavBar />
      <Main />
    </AppCreateContextProvider>)
}

export async function getStaticProps() {
  const res = await fetch('https://velib-metropole-opendata.smoove.pro/opendata/Velib_Metropole/station_information.json')
  const data = await res.json();
  return {
    props: {
      fetched: data,
    }
  }
}

export default Home
