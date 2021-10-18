
import React,{useState} from 'react'
import './App.css'

function App() {
  var [text,setText]=useState("")
  var [arr1,uparr]=useState([])
  
  // debugger
  // function handle(e){
    
  //   setText(e.target.value)
    
  //   arr.push(text)
  //   console.log(arr)
  // }
  
 const add=()=>{
    const ul=document.getElementById("list")
    const arr=[...arr1,text]
    uparr(arr)
    document.getElementById("text1").value=""

      const liItem=document.createElement("li")
      liItem.innerHTML=text
      ul.appendChild(liItem)
    

 }
  console.log(arr1)
  
  // const gnerateList=()=>{
    
  //   const arr=[...arr1]
   
  // }

  // }
  
  const del=()=>{
    
    var inp=text
    const ind=arr1.indexOf(inp)
    if (ind > -1) {
      arr1.splice(ind, 1);
    }
    uparr(arr1)
    var myList = document.querySelectorAll('#list li');
  
    myList[ind].parentNode.removeChild(myList[ind]);
  }
  
  const delAll=()=>{
    arr1=[]
    var ul = document.getElementById("list");
    ul.innerHTML = "";


  }
     

  return (

    <>
    <input id="text1"  onChange={e=>setText(e.target.value)}></input>
    <button id="add" onClick={()=>add()}>add</button>
    <button id="dela" onClick={()=>delAll()}>delete all</button>
    <button id="delete" onClick={()=>del()}>delete</button>
    <ul id="list">
    </ul>
    </>

  );
}

export default App;
