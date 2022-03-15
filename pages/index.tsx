import type { NextPage } from 'next'
import { useEffect, useMemo, useState } from 'react'
import Footer from '../src/components/Main/Footer/Footer'
import Main from '../src/components/Main/Main'
import NavBar from '../src/components/NavBar/NavBar'
import { AppCreateContextProvider } from '../src/context/AppCreateContext'
import { Stations } from '../src/types/Stations'

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

  const [isConnected, setIsConnected] = useState(false);
  const [user, setUser] = useState();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [nbShow, setNbShow] = useState(10);

  useEffect(() => {
    setIsConnected(localStorage.getItem("user") !== null)
  }, [])

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") ?? "{}"));
  }, [isConnected])

  const context = useMemo(
    () => ({ isConnected, user, isDarkMode, stations, nbShow, setNbShow, setIsDarkMode }),
    [isConnected, user, isDarkMode, stations, setIsDarkMode, setIsConnected, setUser]
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
