import React from 'react'
import Card from './components/Card'
import Ex from './components/Ex'

const App = () => {
  const user = "Sartik"

  //Data as Array
  const users = [
    {
      "name": "rahul_verma",
      "city": "Delhi",
      "age": 28,
      "profession": "Software Engineer",
      "profile_photo": "https://example.com/profiles/rahul_verma.jpg"
    },
    {
      "name": "priya_sharma",
      "city": "Mumbai",
      "age": 25,
      "profession": "Graphic Designer",
      "profile_photo": "https://example.com/profiles/priya_sharma.jpg"
    },
    {
      "name": "amit_patel",
      "city": "Ahmedabad",
      "age": 32,
      "profession": "Data Analyst",
      "profile_photo": "https://example.com/profiles/amit_patel.jpg"
    },
    {
      "name": "sneha_nair",
      "city": "Bangalore",
      "age": 30,
      "profession": "Marketing Manager",
      "profile_photo": "https://example.com/profiles/sneha_nair.jpg"
    },
    {
      "name": "rohit_singh",
      "city": "Kolkata",
      "age": 27,
      "profession": "Product Manager",
      "profile_photo": "https://example.com/profiles/rohit_singh.jpg"
    }
  ]

  // users.forEach(function(elem){
  //   console.log(elem)
  // })
// OR , both will work , fwtch the data from the array
  // users.map(function(elem){

  //   return elem //returning the element
  // })
  
  return (
    // <div>
    //   <Card a={user} /> {/* username is passed as prop named a */}
    //   <Card a="Harsh" />
    //   <Card a = "Sarthak" />
    // </div>

    // <div>
    //   <div className='p-10'>
    //     {/* <Card user="Sarthak" age='20' city="Bhopal" surname="Sharma" /> */}

    //     <div className="p-10">
    //       {users.map(function(elem,idx){
    //         // return <h1>{elem.username}</h1>
    //         return <Card key={idx} username={elem.name} age={elem.age} prof={elem.profession} city={elem.city} photo={elem.profile_photo} />
    //       })}
    //     </div>
    //   </div>
    // </div>


    //Ex
    <div>
      <Ex name="Sartik" />
    </div>
  )
}

export default App