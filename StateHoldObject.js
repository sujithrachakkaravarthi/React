import React, { useState } from 'react'

export default function StateHoldObject(){
    const[college,setCollege]=useState({cid:1,cname:"skct",year:2023})
    //const changeCollege=()=>setCollege({cid:2,cname:"skcet",year:2024})
    const changeDemo=()=>{
        setCollege((prevState)=>{return{...prevState,year:2024}})
    }
    return (
      <div>
        <h1>College ID is {college.cid}</h1>
        <h1>College name is {college.cname}</h1>
        <h1>College year is {college.year}</h1>
       
        <button onClick={changeDemo}>Change Year</button>
      </div>
    )
  }
