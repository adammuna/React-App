import React , {useState} from "react";
export const Body = (props) => {
 const { title , setBodytitle } = props
 const [inputValue , setinputValue] =  useState('')
 const handleInput = function (event) { 
   const newValue = event.target.value
   setinputValue (newValue)}
   const handleSubmit = function () {
     setBodytitle(inputValue)
}
return ( 
  <div>
    <input
    type = 'text'
    value={inputValue}
    onChange={handleInput}
    />
    <h1>
      {title}
    </h1>
    <button onClick = {handleSubmit}>submit</button></div>
)
 }
