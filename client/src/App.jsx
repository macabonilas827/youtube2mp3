

import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

import { FaPlay } from 'react-icons/fa6'

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
    <div className="h-[40vh] bg-red-700 relative">
     
      <form className="flex flex-col gap-2.5 w-4/6 h-[40vh] m-auto justify-end items-center pt-5 " onSubmit={handleSubmit}>
        
      <h1 className="italic drop-shadow-sm text-4xl text-black font-black mb-20 z-10">YouTube2Mp3</h1>
     <FaPlay className="absolute  top-5 h-28 w-28 z-1 opacity-80"  />
      
      <div className="flex justify-center items-center absolute -bottom-5">
      <input className="w-72 p-3 rounded-l-2xl outline-none drop-shadow-md text-black text-xs" type="text" placeholder="youtube url"   onChange={(e) => setInputValue(e.target.value) }  />
      <button className="p-3 rounded-r-2xl border border-indigo-100 bg-slate-200 drop-shadow-md text-black text-xs font-bold" type="submit">Convert</button>
      </div>

      </form>
      <h6>{dataTitle}</h6>
     <button className="rounded-none  bg-black p-2"><a href={dataLink}>Download</a></button> 
    </div>
  )
}

export default App
