import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Formdetails() {
  
  const [Title, setTitle] = useState("")
  const [Subtitle, setSubtitle] = useState("")
  const [Body1, setBody1] = useState("")
  const [Body2, setBody2] = useState("")
  const [Body3, setBody3] = useState("")
  const [Body4, setBody4] = useState("")
  const [Body5, setBody5] = useState("")
  const [Body6, setBody6] = useState("")
  const [Body7, setBody7] = useState("")
  const [Body8, setBody8] = useState("")
  const [Body9, setBody9] = useState("")
  const [Body10, setBody10] = useState("")
  const [Body11, setBody11] = useState("")
  const [Body12, setBody12] = useState("")
  const [Body13, setBody13] = useState("")
  const [Body14, setBody14] = useState("")
  const [Body15, setBody15] = useState("")
  const [Body16, setBody16] = useState("")

  const [Subtitle1, setSubtitle1] = useState("")
  const [Subtitle2, setSubtitle2] = useState("")
  const [Subtitle3, setSubtitle3] = useState("")
  const [Subtitle4, setSubtitle4] = useState("")
  const [Subtitle5, setSubtitle5] = useState("")
  const [Subtitle6, setSubtitle6] = useState("")
  const [Subtitle7, setSubtitle7] = useState("")
  const [Subtitle8, setSubtitle8] = useState("")
  const [Subtitle9, setSubtitle9] = useState("")
  const [Subtitle10, setSubtitle10] = useState("")
  const [Subtitle11, setSubtitle11] = useState("")
  const [Subtitle12, setSubtitle12] = useState("")
  const [Subtitle13, setSubtitle13] = useState("")
  const [Subtitle14, setSubtitle14] = useState("")
  const [Subtitle15, setSubtitle15] = useState("")


  const [images, setImages] = useState("")
 

  const navigate = useNavigate();
  

  const saveForm = async (e) => {
    e.preventDefault();
     
    


    axios.post("https://easy-crown-bull.cyclic.app/api/lessons/add", {Title,Subtitle,Body1,Body2,Body3,images,
    Body4,Body5,Body6,Body7,Body8,Body9,Body10,Body11,Body12,Body13,Body14,Body15,Body16,
    Subtitle1,Subtitle2,Subtitle3,Subtitle4,Subtitle5,Subtitle6,Subtitle7,Subtitle8,Subtitle9,Subtitle10,Subtitle11,
    Subtitle12,Subtitle13,Subtitle14,Subtitle15
  })
    .then((res)=>
    { 
    console.log("saved succesfully")
    navigate("/");
    alert("form submitted succesfully")
  }).catch((err)=> {
      console.log(err)
      alert("Unable to submit form, kindly complete the form")
    })
    
    
  }
  
  // conversion of image to base64

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = ()=>{
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      };
    })
  }


const Onchangetitle =(e)=> {
        setTitle(e.target.value)
    }

    const Onchangesubtitle =(e)=> {
      setSubtitle(e.target.value)
  }
  const OnchangeBody1 =(e)=> {
    setBody1(e.target.value)
}

const OnchangeBody2 =(e)=> {
  setBody2(e.target.value)
}

const OnchangeBody3 =(e)=> {
  setBody3(e.target.value)
}

const OnchangeBody4 =(e)=> {
  setBody4(e.target.value)
}

const OnchangeBody5 =(e)=> {
  setBody5(e.target.value)
}

const OnchangeBody6 =(e)=> {
  setBody6(e.target.value)
}

const OnchangeBody7 =(e)=> {
  setBody7(e.target.value)
}

const OnchangeBody8 =(e)=> {
  setBody8(e.target.value)
}

const OnchangeBody9 =(e)=> {
  setBody9(e.target.value)
}
const OnchangeBody10 =(e)=> {
  setBody10(e.target.value)
}
const OnchangeBody11 =(e)=> {
  setBody11(e.target.value)
}
const OnchangeBody12 =(e)=> {
  setBody12(e.target.value)
}
const OnchangeBody13 =(e)=> {
  setBody13(e.target.value)
}
const OnchangeBody14 =(e)=> {
  setBody14(e.target.value)
}
const OnchangeBody15 =(e)=> {
  setBody15(e.target.value)
}
const OnchangeBody16 =(e)=> {
  setBody16(e.target.value)
}


const Onchangesubtitle1 =(e)=> {
  setSubtitle1(e.target.value)
}
 
const Onchangesubtitle2 =(e)=> {
  setSubtitle2(e.target.value)
}
const Onchangesubtitle3 =(e)=> {
  setSubtitle3(e.target.value)
}
const Onchangesubtitle4 =(e)=> {
  setSubtitle4(e.target.value)
}
const Onchangesubtitle5 =(e)=> {
  setSubtitle5(e.target.value)
}
const Onchangesubtitle6 =(e)=> {
  setSubtitle6(e.target.value)
}
const Onchangesubtitle7 =(e)=> {
  setSubtitle7(e.target.value)
}
 const Onchangesubtitle8 =(e)=> {
  setSubtitle8(e.target.value)
}
const Onchangesubtitle9 =(e)=> {
  setSubtitle9(e.target.value)
}
const Onchangesubtitle10 =(e)=> {
  setSubtitle10(e.target.value)
}
const Onchangesubtitle11 =(e)=> {
  setSubtitle11(e.target.value)
}
const Onchangesubtitle12 =(e)=> {
  setSubtitle12(e.target.value)
}
const Onchangesubtitle13 =(e)=> {
  setSubtitle13(e.target.value)
}
const Onchangesubtitle14 =(e)=> {
  setSubtitle14(e.target.value)
}
const Onchangesubtitle15 =(e)=> {
  setSubtitle15(e.target.value)
}


const Onchangeimages = async (e) => { 
  const files = Array.from(e.target.files)
      
if (e.target.files.length < 3 ) {
 setImages(null)
  alert("please select three images")
  }else{
       setImages([]);
       files.forEach(file => {

           const reader = new FileReader();

           reader.onload = () => {
               if (reader.readyState === 2) {
                   setImages(oldArray => [...oldArray, reader.result]);
                   
               }
           }

           reader.readAsDataURL(file)

       })
  }
}
  const Load =() => {
    alert("Please wait .....")
  }
 

 
console.log(Title, Subtitle, Body1, Body2, Body3,Body4)
  return (
    <div className='bg-gradient-to-t min-h-screen  from-white to-[#fffadd] '>
       <h1 className='text-xl text-center py-2 font-bold text-[#7f030d] px-7'>Post New Lectures.</h1>
       <form className="flex flex-col justify-center
       items-start sm:flex sm:items-center px-7  pb-5"
       onSubmit={saveForm} encType="multipart/form-data">
                
                <label className=" font-semibold text-[#7f030d] pt-3 text-xl py-1 ">Title </label>
                <input placeholder="Topic"  value={Title} onChange={Onchangetitle}
                className=" border-[#0b0f11] w-[250px] focus:outline-0 border-2 sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
                
                <label className="font-semibold pt-3 text-[#7f030d] text-xl py-1 ">Subtitle</label>
                <input placeholder="Sub-title" value={Subtitle} onChange={Onchangesubtitle}
                className=" border-[#0b0f11] w-[250px] focus:outline-0 border-2 mb-3 sm:w-[400px] rounded-lg px-3 text-[#594545]"/>

<label className="font-semibold text-[#7f030d] pt-3  text-xl py-1 ">Subtitle1</label>
                <input placeholder="Sub topic1" value={Subtitle1} onChange={Onchangesubtitle1}
                className=" border-[#5a5542] focus:outline-0 border-2 mb-3 w-[250px] sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
                
                <label className="  text-[#7f030d] font-semibold pt-3 py-1 ">first body</label>
                <textarea placeholder="First paragraph" value={Body1} onChange={OnchangeBody1}
                className=" border-[#0b0f11] h-[100px] w-[250px] text-[#20201f] focus:outline-0 border-2 sm:w-[400px] rounded-lg px-3 "/>

<label className="font-semibold text-[#7f030d] pt-3  text-xl py-1 ">Subtitle2</label>
                <input placeholder="Sub topic2" value={Subtitle2} onChange={Onchangesubtitle2}
                className=" border-[#5a5542] focus:outline-0 border-2 mb-3 w-[250px] sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
                
                <label className=" text-[#7f030d]  font-semibold py-1 ">Second body</label>
                <textarea  value={Body2} onChange={OnchangeBody2}  placeholder="Second paragraph"
                className=" border-[#0b0f11] focus:outline-0 border-2
                 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>
 
 <label className="font-semibold text-[#7f030d] pt-3  text-xl py-1 ">Subtitle3</label>
                <input placeholder="Sub topic3" value={Subtitle3} onChange={Onchangesubtitle3}
                className=" border-[#5a5542] focus:outline-0 border-2 mb-3 w-[250px] sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
                
                <label className=" text-[#7f030d] py-1 font-semibold">Third body</label>
                <textarea  value={Body3} onChange={OnchangeBody3}  placeholder="Third paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

<label className="font-semibold text-[#7f030d] pt-3  text-xl py-1 ">Subtitle4</label>
                <input placeholder="Sub topic4" value={Subtitle4} onChange={Onchangesubtitle4}
                className=" border-[#5a5542] focus:outline-0 border-2 mb-3 w-[250px] sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
                
               <label className=" text-[#7f030d] py-1 font-semibold">Fourth body</label>
                <textarea  value={Body4} onChange={OnchangeBody4}  placeholder="Forth paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

<label className="font-semibold text-[#7f030d] pt-3  text-xl py-1 ">Subtitle5</label>
                <input placeholder="Sub topic5" value={Subtitle5} onChange={Onchangesubtitle5}
                className=" border-[#5a5542] focus:outline-0 border-2 mb-3 w-[250px] sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
                
               <label className=" text-[#7f030d] py-1 font-semibold">Fifth body</label>
                <textarea  value={Body5} onChange={OnchangeBody5}  placeholder="Fifth paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

<label className="font-semibold text-[#7f030d] pt-3  text-xl py-1 ">Subtitle6</label>
                <input placeholder="Sub topic6" value={Subtitle6} onChange={Onchangesubtitle6}
                className=" border-[#5a5542] focus:outline-0 border-2 mb-3 w-[250px] sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
                
              <label className=" text-[#7f030d] py-1 font-semibold">Sixth body</label>
                <textarea  value={Body6} onChange={OnchangeBody6}  placeholder="Sixth paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

<label className="font-semibold text-[#7f030d] pt-3  text-xl py-1 ">Subtitle7</label>
                <input placeholder="Sub topic7" value={Subtitle7} onChange={Onchangesubtitle7}
                className=" border-[#5a5542] focus:outline-0 border-2 mb-3 w-[250px] sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
                
              <label className=" text-[#7f030d] py-1 font-semibold">Seventh body</label>
                <textarea  value={Body7} onChange={OnchangeBody7}  placeholder="Seventh paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

<label className="font-semibold text-[#7f030d] pt-3  text-xl py-1 ">Subtitle8</label>
                <input placeholder="Sub topic8" value={Subtitle8} onChange={Onchangesubtitle8}
                className=" border-[#5a5542] focus:outline-0 border-2 mb-3 w-[250px] sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
                
<label className=" text-[#7f030d] py-1 font-semibold">8th body</label>
                <textarea  value={Body8} onChange={OnchangeBody8}  placeholder="8th paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

<label className="font-semibold text-[#7f030d] pt-3  text-xl py-1 ">Subtitle9</label>
                <input placeholder="Sub topic9" value={Subtitle9} onChange={Onchangesubtitle9}
                className=" border-[#5a5542] focus:outline-0 border-2 mb-3 w-[250px] sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
                
<label className=" text-[#7f030d] py-1 font-semibold">9th body</label>
                <textarea  value={Body9} onChange={OnchangeBody9}  placeholder=" 9th paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

<label className="font-semibold text-[#7f030d] pt-3  text-xl py-1 ">Subtitle10</label>
                <input placeholder="Sub topic10" value={Subtitle10} onChange={Onchangesubtitle10}
                className=" border-[#5a5542] focus:outline-0 border-2 mb-3 w-[250px] sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
                
<label className=" text-[#7f030d] py-1 font-semibold">10th body</label>
                <textarea  value={Body10} onChange={OnchangeBody10}  placeholder="10th paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>
 
 <label className="font-semibold text-[#7f030d] pt-3  text-xl py-1 ">Subtitle11</label>
                <input placeholder="Sub topic11" value={Subtitle11} onChange={Onchangesubtitle11}
                className=" border-[#5a5542] focus:outline-0 border-2 mb-3 w-[250px] sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
                

<label className=" text-[#7f030d] py-1 font-semibold">11th body</label>
                <textarea  value={Body11} onChange={OnchangeBody11}  placeholder=" 11th paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

<label className="font-semibold text-[#7f030d] pt-3  text-xl py-1 ">Subtitle12</label>
                <input placeholder="Sub topic12" value={Subtitle12} onChange={Onchangesubtitle12}
                className=" border-[#5a5542] focus:outline-0 border-2 mb-3 w-[250px] sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
                

<label className=" text-[#7f030d] py-1 font-semibold">12th body</label>
                <textarea  value={Body12} onChange={OnchangeBody12}  placeholder="12th paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

<label className="font-semibold text-[#7f030d] pt-3  text-xl py-1 ">Subtitle13</label>
                <input placeholder="Sub topic13" value={Subtitle13} onChange={Onchangesubtitle13}
                className=" border-[#5a5542] focus:outline-0 border-2 mb-3 w-[250px] sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
                
<label className=" text-[#7f030d] py-1 font-semibold">13th body</label>
                <textarea  value={Body13} onChange={OnchangeBody13}  placeholder=" 13th paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

<label className="font-semibold text-[#7f030d] pt-3  text-xl py-1 ">Subtitle14</label>
                <input placeholder="Sub topic14" value={Subtitle14} onChange={Onchangesubtitle14}
                className=" border-[#5a5542] focus:outline-0 border-2 mb-3 w-[250px] sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
                
<label className=" text-[#7f030d] py-1 font-semibold">14th body</label>
                <textarea  value={Body14} onChange={OnchangeBody14}  placeholder="14th paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

<label className="font-semibold text-[#7f030d] pt-3  text-xl py-1 ">Subtitle15</label>
                <input placeholder="Sub topic15" value={Subtitle15} onChange={Onchangesubtitle15}
                className=" border-[#5a5542] focus:outline-0 border-2 mb-3 w-[250px] sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
                
<label className=" text-[#7f030d] py-1 font-semibold">15th body</label>
                <textarea  value={Body15} onChange={OnchangeBody15}  placeholder="15th paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

                

                <h1 className='pt-5 text-[#7f030d] pb-1 font-semibold text-xl'>Images</h1>
               <label htmlFor='file'  className=" text-[#7f030d] py-1 font-semibold ">Select three images</label>
                <input  type='file'  name='image1' onChange={Onchangeimages}
                className=" border-[#0b0f11] focus:outline-0 
                sm:w-[400px] border-2 rounded-lg px-3 text-[#20201f]" required multiple/>
                

            
               <label className=" text-[#7f030d] py-1 font-semibold pt-7">Conclusion</label>
                <textarea  value={Body16} onChange={OnchangeBody16} 
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

                
                
                <div className="flex items-center justify-center gap-x-5 py-7  pb-0">
                 <div >
                     <button className="bg-[#7f030d] text-white rounded-md px-3 py-2" onClick={Load}>Submit</button>
                 </div>
               </div>  

         </form>
      



    </div>
  )
  }

  export default Formdetails