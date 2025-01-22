// import React, { useState, useEffect } from "react"
// import Header from "./components/Header"
// import CryptoList from "./components/CryptoList"
// import { fetchCryptoPrices } from "./services/api"

// function App() {
//   const [cryptoData, setCryptoData] = useState([])

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchCryptoPrices()
//       setCryptoData(data)
//     }

//     fetchData()
//     const interval = setInterval(fetchData, 60000) // Fetch every minute

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Header />
//       <main className="container mx-auto px-4 py-8">
//         <CryptoList cryptoData={cryptoData} />
//       </main>
//     </div>
//   )
// }

// export default App

import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import CryptoList from "./components/CryptoList"
import { fetchCryptoPrices } from "./services/api"

function App() {
  const [cryptoData, setCryptoData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCryptoPrices()
        setCryptoData(data)
        setError(null)
      } catch (err) {
        console.error("Error fetching data:", err)
        setError("Failed to fetch crypto prices. Please try again later.")
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 60000) // Fetch every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {error ? <div className="text-red-600 text-center">{error}</div> : <CryptoList cryptoData={cryptoData} />}
      </main>
    </div>
  )
}

export default App


