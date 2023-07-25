
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

function App() {

  const [inputValue, setInputValue] = useState('')
  const [returnData, setReturnData] = useState(null)

  
  const regexPattern = /(?:[?&]v=|\/embed\/|\/1\/|\/v\/|https:\/\/(?:www\.)?youtu\.be\/)([^&\n?#]+)/
  const youtubeID = regexPattern.exec(inputValue)
  
  const mutation = useMutation({
    mutationFn: (data) => {
    return axios.post('http://127.0.0.1:3000/api/v1/data', data)
  },
  onSuccess: (data) => {
    setReturnData(data)
  }
})


const handleSubmit = e => {
  e.preventDefault()

  mutation.mutate({data: youtubeID[1]})
  
}
let dataLink, dataTitle;
if(returnData) {
 const {data:{data:{link,title}}} = returnData
dataLink = link

dataTitle = title
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="youtube url"   onChange={(e) => setInputValue(e.target.value) }  />
      <button type="submit">Send it!</button>
      </form>
      <h6>{dataTitle}</h6>
     <button><a href={dataLink}>Download</a></button> 
    </div>
  )
}

export default App
