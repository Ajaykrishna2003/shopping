import React,{useState} from 'react';
import './App.css';


function App() {
  const [amount,setamount]=useState('')
  const handlesubmit=(e)=>{
    e.preventDefault();
    if(amount===""){
      alert("Please, Enter the amount !!!");
    }
    else{
     var option={
      key:"rzp_test_U2i09NEm8jB4r2",key_secret:"hMJuVZAX7krd3psMsHQnWULV",amount:amount*100,
      currency:"INR",
      name:"startups",
      descrpition:"testing",
      handler:function(response){
        alert(response.razorpay_payment_id);
      },
      prefill:{
        name:"ajay",
        emai:"ajay@gmail.com",
        contact:"78484"
      },
      notes:{
        address:"razorpay"
      },
      theme:{
        color:"#3399cc"
      }
     };
     var pay=new window.Razorpay(option);
     pay.open();
    }
  }
  return (
    <>
    <div className="App">
      
    <h2>
     shopping PAYMENT GATEWAY
    </h2>
    <input type="text" placeholder='Enter the amount...' value={amount} onChange={(e)=>setamount(e.target.value)}/>
    <br /> 
    <br />
    <button onClick={handlesubmit}>Pay</button>
    </div>
    <div className="india">
       
        
    </div>
    </>
  );
}

export default App;
