import React from "react"
import CryptoCard from "./CryptoCard"

function CryptoList({ cryptoData }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cryptoData.map((crypto) => (
        <CryptoCard key={crypto.id} crypto={crypto} />
      ))}
    </div>
  )
}

export default CryptoList

