import React from "react"

function CryptoCard({ crypto }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <img src={crypto.image || "/placeholder.svg"} alt={crypto.name} className="w-8 h-8 mr-2" />
        <h2 className="text-xl font-semibold">{crypto.name}</h2>
      </div>
      <div className="text-gray-600 mb-2">Symbol: {crypto.symbol.toUpperCase()}</div>
      <div className="text-2xl font-bold mb-2">${crypto.current_price.toLocaleString()}</div>
      <div className={`text-sm ${crypto.price_change_percentage_24h >= 0 ? "text-green-600" : "text-red-600"}`}>
        24h Change: {crypto.price_change_percentage_24h.toFixed(2)}%
      </div>
    </div>
  )
}

export default CryptoCard

