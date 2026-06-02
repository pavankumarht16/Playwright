import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const API ='http://localhost:5000/api/items'
function App() {

  const [items, setItems]= useState([])
  const [name, setName]= useState("")
  const [price, setPrice]= useState("")

  const loadItems= async()=>{
    const res = await fetch(API);
    const data = await res.json();
    setItems(data);
  }

  const addItem = async()=>{
    await fetch(API,{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name,
        price
      })
    });
    setName("")
    setPrice("")
    loadItems()

  }

  useEffect(()=>{
    loadItems()
  },[])
  return (
    <div style={{padding:"30px"}}>
      <h2>Items</h2>

      <input
      data-testid="item-input"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      placeholder='Enter Item'
      />
<br></br>
      <input
      data-testid="price-input"
      value={price}
      onChange={(e)=>setPrice(e.target.value)}
        placeholder="Enter price"
      />

<button onClick={addItem}>Add</button>
      <ul>
        {items.map((item)=>(
          <li key={item.id}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
