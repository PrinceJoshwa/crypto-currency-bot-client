import axios from "axios"

const API_URL = "http://localhost:5000/api"

export const fetchCryptoPrices = async () => {
  try {
    const response = await axios.get(`${API_URL}/crypto/prices`)
    return response.data
  } catch (error) {
    console.error("Error fetching crypto prices:", error)
    return []
  }
}

