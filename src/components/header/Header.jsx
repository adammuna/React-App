import React from "react"
export const Header = (props) => {
  const { title , setHeadertitle } = props 
  const handleclick = function () {
    setHeadertitle("New Header")
  }
return (
   <div onClick={handleclick}>
   <h1>{title}</h1></div>
  )
}

