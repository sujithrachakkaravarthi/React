import React from 'react'

export default function List(){
    const college=[{id:1,stuName:"sachin",age:26},
    {id:2,stuName:"surya",age:24},
    {id:3,stuName:"panvith",age:29},]
 const display=college.map((col)=><li key={col.id}> {col.stuName} {col.age}</li>)

 return(
    <div style={{backgroundColor:"plum"}}>
        <h1>List of students</h1>
        {display}
    </div>
 )

}