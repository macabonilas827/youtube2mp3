
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

function App() {

  const [inputValue, setInputValue] = useState('')

  const regexPattern = /(?:[?&]v=|\/embed\/|\/1\/|\/v\/|https:\/\/(?:www\.)?youtu\.be\/)([^&\n?#]+)/
  const youtubeID = regexPattern.exec(inputValue)
//  const {data} = useQuery({
//   queryKey: ["data"],
//   queryFn: async () => {
//     const {data} = await axios.get('http://localhost:3000/api/v1/data')
//     return data
//   }
//  })


console.log(youtubeID)
  return (
    <div>
    </div>
  )
}

export default App
