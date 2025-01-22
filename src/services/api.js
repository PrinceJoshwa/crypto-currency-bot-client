// // import axios from "axios"

// // const API_URL = "https://crypto-currency-bot-server.vercel.app/api"

// // export const fetchCryptoPrices = async () => {
// //   try {
// //     const response = await axios.get(`${API_URL}/crypto/prices`)
// //     return response.data
// //   } catch (error) {
// //     console.error("Error fetching crypto prices:", error)
// //     return []
// //   }
// // }


// import axios from "axios"

// const API_URL = "https://crypto-currency-bot-server.vercel.app/api"

// export const fetchCryptoPrices = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/crypto/prices`, {
//       withCredentials: true,
//     })
//     return response.data
//   } catch (error) {
//     console.error("Error fetching crypto prices:", error)
//     throw error
//   }
// }

import axios from "axios"

const API_URL = "https://crypto-currency-bot-server.vercel.app/api"

export const fetchCryptoPrices = async () => {
  try {
    const response = await axios.get(`${API_URL}/crypto/prices`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    return response.data
  } catch (error) {
    console.error("Error fetching crypto prices:", error)
    throw error
  }
}

