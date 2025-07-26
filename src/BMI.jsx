import { useRef, useState } from "react";
import './Bmi.css';
function BmiText({bmi}) {
    if(bmi < 18.5){
        return(<>
        <h1>Underweight</h1>
        <img src="https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-cute-thin-man-png-image_11516030.png" alt="underweight" height={300} />)
        </>)
    }
    else if (bmi > 30) {
        return (<>
        <h1>Overweight</h1>
        <img src="https://st.depositphotos.com/1967477/3506/v/450/depositphotos_35063231-stock-illustration-fat-boy-cartoon-posing.jpg" alt="Overweight" height={300}  />
        </>)

    }
    return (<>
    <h1>Normal</h1>
    <img src="https://png.pngtree.com/png-clipart/20210910/ourmid/pngtree-thin-and-happy-girl-png-image_3894570.jpg" alt="normal"height={300} />
    </>);
}
export default function BMI() {
    const w_inputRef = useRef(null);
    const h_inputRef = useRef(null);
    const [bmi,setBmi] = useState(0,0);
    function CalculateBmi(){
        let w = parseFloat(w_inputRef.current.value);
        let h = parseFloat(h_inputRef.current.value) / 100;
        setBmi(w/(h*h));
    }
    return(<>
    
    Weight:<input ref={w_inputRef}/> kg. 
    Height:<input ref={h_inputRef}/> cm.
    <button  onClick={CalculateBmi}>calculae</button>
    <p>Bmi Value: {bmi}</p><br />

    <BmiText bmi={bmi}/>
    </>);
  
  
  
  



    {/*const [weight, setWeight] = useState(0);  // ใช้ชื่อว่า weight และ setWeight
  const [height, setHeight] = useState(0);  // ใช้ชื่อว่า height และ setHeight

  const bmi = (height > 0) ? (weight / (height * height)).toFixed(2) : 0;

  return (
    <div>
      <h2>BMI Calculator</h2>

      <label>Weight (kg): </label>
      <input
        type="number"
        value={weight}
        onChange={(event) => setWeight(parseFloat(event.target.value))}
      />
      <br />

      <label>Height (m): </label>
      <input
        type="number"
        value={height}
        onChange={(event) => setHeight(parseFloat(event.target.value))}
      />
      <br />

      <h3>Your BMI is: {isNaN(bmi) ? "Invalid input" : bmi}</h3>
    </div>
  );*/}
}

     
