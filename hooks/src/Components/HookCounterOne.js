import React, { useState } from "react";

function HookCounterOne() {
  const [items, setItem] = useState([{a:"b",id:"0"},{a:"d",id:"1"}]);
  
    let updateList=()=>{
        setItem([...items,{
            id:items.length,
            a: Math.ceil(Math.random()*10)
        }])
    }
  return (
    <div>
        <button onClick={updateList}>Add random number</button>
      <ul>
          {
              items.map(item=>{
                  return (
                  <li key={item.id}>{item.a}</li>
                  )
              })
          }
      </ul>
    </div>
  );
}

export default HookCounterOne;
