
const Mybutton = ({colorName , handleClick}) => {
  return (
    <button className="border-2 p-2 m-2 rounded-2xl cursor-pointer" style={{backgroundColor  : colorName , color : "white"}} onClick={() => handleClick(colorName)}>{colorName}</button>
  )
}

export default Mybutton