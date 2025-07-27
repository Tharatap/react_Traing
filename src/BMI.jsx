import { useRef, useState } from "react";
import './Bmi.css';

function BmiText({ bmi }) {
    if (bmi < 18.5) {
        return (
            <div className="result-section">
                <h3>Underweight</h3>
                <div className="bmi-image-container">
                    <img src="https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-cute-thin-man-png-image_11516030.png" alt="underweight" />
                </div>
            </div>
        );
    } else if (bmi > 30) {
        return (
            <div className="result-section">
                <h3>Overweight</h3>
                <div className="bmi-image-container">
                    <img src="https://st.depositphotos.com/1967477/3506/v/450/depositphotos_35063231-stock-illustration-fat-boy-cartoon-posing.jpg" alt="overweight" />
                </div>
            </div>
        );
    }
    return (
        <div className="result-section">
            <h3>Normal</h3>
            <div className="bmi-image-container">
                <img src="https://img.pikbest.com/png-images/20241102/cartoon-style-muscular-figure-with-angular-shapes_11045601.png!w700wp" alt="normal" />
            </div>
        </div>
    );
}

export default function BMI() {
    const w_inputRef = useRef(null);
    const h_inputRef = useRef(null);
    const [bmi, setBmi] = useState(0);

    function CalculateBmi() {
        let w = parseFloat(w_inputRef.current.value);
        let h = parseFloat(h_inputRef.current.value) / 100;
        if (!isNaN(w) && !isNaN(h) && h > 0) {
            setBmi(w / (h * h));
        }
    }

    return (
        <div className="bmi-container">
            <h1>BMI Calculator</h1>
            <input ref={w_inputRef} placeholder="Weight (kg)" />
            <input ref={h_inputRef} placeholder="Height (cm)" />
            <button onClick={CalculateBmi}>Calculate</button>
            <p className="bmi-value">BMI Value: {bmi.toFixed(2)}</p>
            <BmiText bmi={bmi} />
        </div>
    );
}












{/*import { useRef, useState } from "react";
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
}
    */}

     
