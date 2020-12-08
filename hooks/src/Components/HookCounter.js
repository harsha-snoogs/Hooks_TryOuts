import React,{useState,useEffect} from "react";

function HookCounter() {
    const [data,setData] = useState({name:"",age:""})
    useEffect(() => {
     document.title=`Name was ${data.name}` 
    })
    document.title=`Name is ${data.name}` 

    return (
    <div>
      <form>
        <input
        type="text"
        name="name"
        value={data.name}
        onChange={(e)=>setData({...data,name:e.target.value})}
        />
        <input
        type="number"
        name="age"
        value={data.age}
        onChange={(e)=>setData({...data,age:e.target.value})}
        />
        <h2>{JSON.stringify(data)}</h2>
      </form>
    </div>
  );
}

export default HookCounter;
