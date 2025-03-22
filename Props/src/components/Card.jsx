import React from 'react'

// const Card = (props) => {
//     console.log(props) //logs the object a:'Sartik'
//     console.log(props.a) //logs the value refers to a i.e. Sartik
//     return(
//         <div>
//             <h1 className='text-3xl'>Username is {props.a} </h1>
//         </div>
//     )
// }

const Card = (props) => {
    // console.log(props) //logs all the props passed
    // console.log(props.user) //logs the value refers to user i.e. Sarthak
    // console.log(props.age) //logs the value refers to age i.e. 20
    // console.log(props.city) //logs the value refers to city

        console.log(props.city)
    return(
        <div className='mr-10 bg-white text-black inline-block p-6 text-center rounded'>
            <img className='ml-5 h-32 w-32 rounded-full mb-3' src="props.profile_photo" alt="" />
            <h1 className='text-2xl font-semibold mb-4'>{props.username} </h1>
            <h4 className="text-blue-400">{props.prof}</h4>
            <h2>{props.city} , {props.age}</h2>
            <button className='mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Add Friend</button>
        </div>
    )
}

export default Card