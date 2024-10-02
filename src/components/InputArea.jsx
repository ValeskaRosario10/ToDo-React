//Challenge : i have extracted the input area, including the input and <button> elemts inot a seperate companent
//  called input area '
//  your job is to make the app work as it did before but htis time wiht
// the input area as a seperate component

//do not modify hte todo item.jsx
//do not move teh input /button elemts back into the app.jsx

//hint 1 you will need to think about how to mange the state of the input elements in input area.jsx
// hint 2 you will need to think about hoe to pass the input
// value back into the addIem () functino in app.jsx

import React, { useState } from "react";

function InputArea(props) {
  const [text, settext] = useState("");

  function update(event) {
    const newvalue = event.target.value;
    settext(newvalue);
  }
  return (
    <div className="form">
      <input type="text" onChange={update} value={text} />

      <button onClick={() =>{
        props.onAdd(text);
        settext("");
      }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
