import { useState } from "react"
export default function Counter(){
    const [count,setCount] = useState(0);
    const [value,setValue] = useState("");
    function onTextChange(even){
        let v = even.target.value
        setValue(even.target.value)
        setValue(v) 
        console.log(`${v} is equal to {v*31}Bath`)
    }
    return(<>
        <input onChange={(even)=> onTextChange(even)} /> <br />
        <p>you type {value.length}</p><br />
        <p>$ {value} is equal to {value*31} bath</p>
        <button onClick={()=>setCount(count+1)}>Click me</button><br />
        <button onClick={()=>setCount(count-1)}>Click me for delet </button><br />
        <button onClick={()=>setCount(0)}>reset value</button>
        <p>you click {count} item</p>
    </>)
}