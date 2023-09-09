import React from 'react'
import './App.css'
import Card from './Components/Card/Card';

function App() {


  return (
    <>
      {/* <h1 className='text-center text-3xl'>hello</h1>
   <button className='btn btn-primary'>Click Here</button>
    <Greetings></Greetings> */}

      {/* <div className='text-center'>
        <h1>Describing Zayed Khan</h1>
        <Person />
        <Message />
      </div> */}
      <h1 className='text-center text-3xl m-10'>Hello</h1>
      <div className='grid grid-cols-3 gap-4 px-10'>
      <Card/>
      <Card/>
      <Card/>
      </div>
      



    </>
  )
}

// function Greetings() {
//   return (
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eligendi adipisci perspiciatis modi magni nam ipsum sed voluptatum repellendus perferendis. Illo tempora alias tenetur ut architecto impedit molestiae temporibus nemo!</p>
//   );

// }

// function Person() {
//   return (
//     <h3>zayed khan</h3>
//   )
// }

// function Message() {
//   return (
//     <p>I am tiger...</p>
//   )
// }



export default App
