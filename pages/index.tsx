import type { NextPage } from 'next'
import { useEffect, useMemo, useState } from 'react'
import Footer from '../src/components/Main/Footer/Footer'
import Main from '../src/components/Main/Main'
import NavBar from '../src/components/NavBar/NavBar'
import { AppCreateContextProvider } from '../src/context/AppCreateContext'

const Home: NextPage = () => {

  const [isConnected, setIsConnected] = useState(false);
  const [user, setUser] = useState();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsConnected(localStorage.getItem("user") !== null)
  }, [])

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") ?? "{}"));
  }, [isConnected])

  const context = useMemo(
    () => ({ isConnected, user, isDarkMode, setIsDarkMode }),
    [isConnected, user, isDarkMode, setIsDarkMode, setIsConnected, setUser]
  );


  return (
    <AppCreateContextProvider value={context}>
      <NavBar />
      <Main />
      <Footer />
    </AppCreateContextProvider>)
}

export default Home
