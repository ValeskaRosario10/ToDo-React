import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s


//Challenge  extracted parts form app and put in INputArea 
//1.You will need to think about how to manage the state of the input element in INputArea.jsx 
//2.You will need to think about how to pass th einput value back into the adddItem() function in App.jsx 
function App() {

  const [item, setitem] = useState([]);



  function addItem(text) {
    setitem((previtem) => {
      return [...previtem, text];
    });
    settext("");
  }

  function deleteItem(id) {
    // console.log("item called delete ");
    // console.log(id);
    setitem((previtem) => {
      return previtem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea    
      onAdd={addItem} />
      <div>
        <ul>
          {item.map((todoitem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoitem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
