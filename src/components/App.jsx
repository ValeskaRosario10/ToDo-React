import React , {useState} from "react";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

function App() {
  const [text, settext]= useState("");
const [item , setitem] =useState([]);

  function update(event){
    const newvalue =event.target.value;
    settext(newvalue);
  }


function Click(event){
  const {datad} =event.target;
  setitem((data)=>{
  
  };) 
}



  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={update} value={text}/>
        
        <button onClick={"Click"}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem) => {
            return <li>{todoitem} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
