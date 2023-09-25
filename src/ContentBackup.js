//Learn about event and useState


import React, { useState } from 'react'

const Content = () => {

  const [name, setName] = useState('Devil');
  const [count, setCount] = useState(0);

    const handleNameChange =()=>{
        const names = ['Black Devil', 'White Devil', 'Devil'];
        const fogg = Math.floor(Math.random() * 3);
        // return names[fogg]
        setName(names[fogg]);
      }

      const hanldleClick = () =>{
        // console.log("You clicked")
        setCount(count + 1)
        setCount(count + 1)
        console.log(count)
      }
      const hanldleClick2 = (name) =>{
        // console.log(`${name} was clicked`)
        console.log(count)
      }
      // const hanldleClick3 = (e) =>{
      //   //console.log(e.target)
      //   console.log(e.target.innerText)
      // }

  return (
    <main>
      <p onDoubleClick={hanldleClick}>
      {/* hello {handleNameChange()} */}
      Hello {name}
      </p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={hanldleClick}>Click It</button>
      <button onClick={hanldleClick2}>Click It</button>
    </main>
  )

}

export default Content
