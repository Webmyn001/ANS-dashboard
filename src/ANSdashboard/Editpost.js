import React, { useEffect, useState } from 'react'
import { useNavigate , useParams} from "react-router-dom";
import axios from "axios";


function Formdetails() {
  
  const [Title, setTitle] = useState("")
  const [Subtitle, setSubtitle] = useState("")
  const [Body1, setBody1] = useState("")
  const [Body2, setBody2] = useState("")
  const [Body3, setBody3] = useState("")
  const [Body4, setBody4]= useState("")
  const [Body5, setBody5]= useState("")
  const [Body6, setBody6]= useState("")
  const [Body7, setBody7]= useState("")
  const [Body8, setBody8]= useState("")



 
  const navigate = useNavigate();
  const {id} = useParams()

  const getInfobyId = async () => {
    const response = await axios.get(`https://easy-crown-bull.cyclic.app/api/lessons/${id}`);
    setTitle(response.data.Title);
    setSubtitle(response.data.Subtitle);
    setBody1(response.data.Body1);
    setBody2(response.data.Body2);
    setBody3(response.data.Body3);
    
    setBody4(response.data.Body4);
    setBody5(response.data.Body5);
    setBody6(response.data.Body6);
    setBody7(response.data.Body7);
    setBody8(response.data.Body8);




  }
  const saveForm = async (e) => {
    e.preventDefault();
   

    axios.patch(`https://easy-crown-bull.cyclic.app/api/lessons/${id}`, {Title, Subtitle, Body1,
    Body2, Body3, Body4, Body5, Body6, Body7, Body8})
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
  
    useEffect(()=>{
      getInfobyId()
    },[])


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
 
 
  return (
    <div>
       
       <form className="flex flex-col bg-gradient-to-t min-h-screen from-white to-[#fffadd]
        justify-center items-start sm:flex sm:items-center px-7  pb-5"
       onSubmit={saveForm} enctype="multipart/form-data">
                
                <label className=" font-semibold text-[#7f030d] pt-3 text-xl py-1 ">Title </label>
                <input placeholder="Title"  value={Title} onChange={Onchangetitle}
                className=" border-[#5a5542] focus:outline-0 border-2 w-[250px] sm:w-[400px] rounded-lg px-3 text-[#594545]"/>
                
                <label className="font-semibold text-[#7f030d] pt-3  text-xl py-1 ">Subtitle</label>
                <input placeholder="Sub topic" value={Subtitle} onChange={Onchangesubtitle}
                className=" border-[#5a5542] focus:outline-0 border-2 mb-3 w-[250px] sm:w-[400px] rounded-lg px-3 text-[#594545]"/>

                <label className="  text-[#7f030d] pt-3 py-1 ">first body</label>
                <textarea placeholder="First paragraph" value={Body1} onChange={OnchangeBody1}
                className=" border-[#5a5542] text-[#20201f] focus:outline-0 border-2 w-[250px] sm:w-[400px] rounded-lg px-3 "/>

                <label className=" text-[#7f030d] py-1 ">Second body</label>
                <textarea  value={Body2} onChange={OnchangeBody2} placeholder="Second paragraph"
                className=" border-[#5a5542] focus:outline-0 border-2
                 sm:w-[400px] w-[250px] rounded-lg px-3 text-[#20201f]"/>

                <label className=" text-[#7f030d] py-1 ">Third body</label>
                <textarea  value={Body3} onChange={OnchangeBody3} placeholder="Third paragraph"
                className=" border-[#5a5542] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] rounded-lg px-3 text-[#20201f]"/>

<label className=" text-[#7f030d] py-1 ">Forth body</label>
                <textarea  value={Body4} onChange={OnchangeBody4} placeholder="forth paragraph"
                className=" border-[#5a5542] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] rounded-lg px-3 text-[#20201f]"/>

<label className=" text-[#7f030d] py-1 ">Fifth body</label>
                <textarea  value={Body5} onChange={OnchangeBody5} placeholder="fifth paragraph"
                className=" border-[#5a5542] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] rounded-lg px-3 text-[#20201f]"/>

<label className=" text-[#7f030d] py-1 ">Sixth body</label>
                <textarea  value={Body6} onChange={OnchangeBody6} placeholder="sixth paragraph"
                className=" border-[#5a5542] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] rounded-lg px-3 text-[#20201f]"/>

<label className=" text-[#7f030d] py-1 ">Seventh body</label>
                <textarea  value={Body7} onChange={OnchangeBody7} placeholder="seventh paragraph"
                className=" border-[#5a5542] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] rounded-lg px-3 text-[#20201f]"/>

                

             
                    
               <label className=" text-[#7f030d] py-1 ">conclusion</label>
                <textarea  value={Body8} onChange={OnchangeBody8} placeholder="Conclusion"
                className=" border-[#5a5542] focus:outline-0
                 border-2 sm:w-[400px] w-[250px] rounded-lg px-3 text-[#20201f]"/>

                
                
                <div className="flex items-center justify-center gap-x-5 py-7  pb-0">
                 <div >
                     <button className="bg-[#7f030d] text-[#fefbe9] rounded-md px-3 py-2">Update</button>
                 </div>
               </div>  

         </form>
      



    </div>
  )
  }

  export default Formdetails