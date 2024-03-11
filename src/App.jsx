import { useState } from 'react'
import './App.css'

import React from 'react';


const App = () => {


const col={col: "col-12 col-md-6 col-lg-4"}

const [allnewdata,setallnewdata]=useState([{id:1,name: "Office Taks  ", disc: "this is disription for my first task "},
{id:2,name: "Office Taks  ", disc: "this is disription for my second task "},
{id:3,name: "Office Taks ", disc: "this is disription for my third task "}])
       
  function add(){
    let inputname=document.getElementById("datainput").value
    let inputdis=document.getElementById("datainput2").value
    setallnewdata([...allnewdata,{id : allnewdata.length+1,name:inputname,disc:inputdis}])
  }
 function Delete(id){
  setallnewdata(allnewdata.filter((itemdata)=>itemdata.id!==id))

 }
 function Edit({id,fname,disc}){

  setallnewdata(allnewdata.filter((itemdata)=>(itemdata===id?{...itemdata,name:fname,disc:disc}:itemdata)))
 
 }

 
 
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='mainheading'>My todo</h1>
        

          </div>
          <div className='col-12 col-md-5 '>
            <input type='text' id='datainput' placeholder="Enter your Task Name ...."/>

          </div>
          <div className='col-12 col-md-5 '>
            <input type='text' id='datainput2' placeholder="Enter your  ...." />
          </div>
          <div className='col-12 col-md-2'>
            <button className='addbutton'onClick={add}>Add todo</button>
          </div>
          <div className='col-6 col-md-6 col-lg-6'>
            <h4 className='mytodo'>My Todos</h4>
          </div>
          <div className='col-6 col-md-6 col-lg-6'>
            <div className='section'>
            <label htmlFor='cars' className=''>Filter:</label>
            <select id="cars " className=''>
            <option value="completed" className='all'>All</option>
             <option value="completed " className='green'>completed</option>
               <option value="incompleted" className='red'>incompleted"</option>
               
                </select>
 



            </div>
          <p ></p>
          </div>
          {allnewdata.map((d)=>(
            <div className={col.col} key={d.id}>
            <div className='card_h' >
            <h4>Name:   {d.name} {d.id}</h4>
            <p>Discription:    {d.disc}</p>
            <label htmlFor='cars' className=''>Filter:</label>
            <select id="cars " className='sele'>
             <option value="completed" className='green'>completed</option>
               <option value="incompleted" className='red'>incompleted"</option>
               
                </select>
            <div className='btnsize'>
                <button className='btnDelete' onClick={()=>Delete(d.id)}>Delete</button>
                <button className='btnEdit' onClick={()=>Edit(d.id,d.name,d.disc)}>Edit</button>
              
            </div>

        </div>
        </div>
          ))}
          






        </div>

      </div>
          
          

 </div>

      
  );
};

export default App;
