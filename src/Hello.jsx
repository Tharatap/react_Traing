import './Hello.css';
const  Hello=function({name,age=20}) { 
    
    return <>  
    <h1>Hello {name} age = {age}</h1>  {/*จะเรียกตัวแปรต้องอยู่ใน {ตัวแปร} */}
        <div id = "email" class = "yellow-bg" > email:tharatap/t@ku.th</div>
        <div class = "box yellow-bg">tel:0653601***</div>
    </>
  
     
}
export default Hello;