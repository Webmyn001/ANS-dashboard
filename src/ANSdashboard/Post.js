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




  const [images, setImages] = useState("")
 

  const navigate = useNavigate();
  

  const saveForm = async (e) => {
    e.preventDefault();
     
    


    axios.post("https://easy-crown-bull.cyclic.app/api/lessons/add", {Title,Subtitle,Body1,Body2,Body3,images,Body4,Body5,Body6,Body7,Body8,Body9,Body10,Body11,Body12,Body13,Body14,Body15,Body16})
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

                <label className="  text-[#7f030d] font-semibold pt-3 py-1 ">first body</label>
                <textarea placeholder="First paragraph" value={Body1} onChange={OnchangeBody1}
                className=" border-[#0b0f11] h-[100px] w-[250px] text-[#20201f] focus:outline-0 border-2 sm:w-[400px] rounded-lg px-3 "/>

                <label className=" text-[#7f030d]  font-semibold py-1 ">Second body</label>
                <textarea  value={Body2} onChange={OnchangeBody2}  placeholder="Second paragraph"
                className=" border-[#0b0f11] focus:outline-0 border-2
                 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

                <label className=" text-[#7f030d] py-1 font-semibold">Third body</label>
                <textarea  value={Body3} onChange={OnchangeBody3}  placeholder="Third paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

               <label className=" text-[#7f030d] py-1 font-semibold">Fourth body</label>
                <textarea  value={Body4} onChange={OnchangeBody4}  placeholder="Forth paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

               <label className=" text-[#7f030d] py-1 font-semibold">Fifth body</label>
                <textarea  value={Body5} onChange={OnchangeBody5}  placeholder="Fifth paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

              <label className=" text-[#7f030d] py-1 font-semibold">Sixth body</label>
                <textarea  value={Body6} onChange={OnchangeBody6}  placeholder="Sixth paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

              <label className=" text-[#7f030d] py-1 font-semibold">Seventh body</label>
                <textarea  value={Body7} onChange={OnchangeBody7}  placeholder="Seventh paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

<label className=" text-[#7f030d] py-1 font-semibold">8th body</label>
                <textarea  value={Body8} onChange={OnchangeBody8}  placeholder="8th paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

<label className=" text-[#7f030d] py-1 font-semibold">9th body</label>
                <textarea  value={Body9} onChange={OnchangeBody9}  placeholder=" 9th paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>


<label className=" text-[#7f030d] py-1 font-semibold">10th body</label>
                <textarea  value={Body10} onChange={OnchangeBody10}  placeholder="10th paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>


<label className=" text-[#7f030d] py-1 font-semibold">11th body</label>
                <textarea  value={Body11} onChange={OnchangeBody11}  placeholder=" 11th paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>


<label className=" text-[#7f030d] py-1 font-semibold">12th body</label>
                <textarea  value={Body12} onChange={OnchangeBody12}  placeholder="12th paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>


<label className=" text-[#7f030d] py-1 font-semibold">13th body</label>
                <textarea  value={Body13} onChange={OnchangeBody13}  placeholder=" 13th paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

<label className=" text-[#7f030d] py-1 font-semibold">14th body</label>
                <textarea  value={Body14} onChange={OnchangeBody14}  placeholder="14th paragraph"
                className=" border-[#0b0f11] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] h-[100px] rounded-lg px-3 text-[#20201f]"/>

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