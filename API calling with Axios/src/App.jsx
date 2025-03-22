import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data , setData] = useState([])

  //to use axios first install it using : npm i axios
  //axios is a tool help us to call API

  //API Calling
  //Data in API is in form of promises , so we need to use then method to get data from API
  //Data coming through API is asynchronous so we need to use async and await to get data from API
  //otherwise compiler will run the code without waiting for data from API and will show promise pending
  const getData = async () =>{
    const response = await axios.get('https://picsum.photos/v2/list') //get method is used to get data from API
    // console.log(response) //give all the data from api

    //to get specific data from API
    // const data = response.data
    // console.log(data)
    //OR
    // console.log(response.data)

    //Using States

    setData(response.data) // store all the data from API in data state

  }

  useEffect(() => {
    getData()
  }, )
  

  return (
    <>
      <div className='p-10'>
        <button onClick={getData} className='bg-teal-600 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90' >Get Data</button>
        <div className='p-5 mt-5 bg-gray-950 text-white'>
          {data.map(function(elem,idx){
            return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
              <img className='h-40' src={elem.download_url} alt="" />
              <h1>{elem.author}</h1>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App