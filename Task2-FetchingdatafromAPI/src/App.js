import './App.css';
import React, {useState} from 'react';

function App() {
  let [data,setdata]=useState([]);
  function getData(){
    fetch(`https://reqres.in/api/users?page=1`)
       .then((Response)=>Response.json())
       .then((userdata)=>{
         console.log(userdata);
        setdata(userdata.data);
       })
       .catch((Error)=>{
         console.log( Error);
       })
  };
 return (
    <div className="App">
      {/* <nav class="nav">
        <div class="container">
            <div class="logo">
                <a href="#">Your Logo</a>
            </div>
            <div id="mainListDiv" class="main_list">
                <ul class="navlinks">
                    <li><a href="#">Lets</a></li>
                    <li><a href="#">Grow</a></li>
                    <li><a href="#">More</a></li>
                    <li><button className='btn' onClick={getData}>Get Users</button></li>
                </ul>
            </div>
            <span class="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav> */}
      <nav class="navv">
         <ul class="menu">
             <li><a class="nav_items" href=" "> LetsGrowMore</a></li>
            
             <button className='btn' onClick={getData}>Get Users</button>
         </ul>
     </nav>
    <div>
       {
           data.map((data)=>{
                  return(
                    <div className='card'>
                      <div className='container'>
    
    
                      <div className="data-detail">
                      <h3 > ID: {data.id}
                          </h3>  
  
                          <h4> Email: {data.email} </h4>
                          <img src={data.avatar} />
                          <h4>Name: {data.first_name} {data.last_name}</h4>
  
                            </div>
                            </div>
                            </div>
                  )
         })
                          }
                          </div>
    </div>
  );}
export default App;

