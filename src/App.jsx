import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import CryptoList from "./components/CryptoList"
import { fetchCryptoPrices } from "./services/api"

function App() {
  const [cryptoData, setCryptoData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCryptoPrices()
      setCryptoData(data)
    }

    fetchData()
    const interval = setInterval(fetchData, 60000) // Fetch every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <CryptoList cryptoData={cryptoData} />
      </main>
    </div>
  )
}

export default App

