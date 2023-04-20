import * as S from "../styles"
import { useState, useEffect } from "react"


type TPropsDisplayPositions = {
  onChange: (position: number)=> void,
  value: number
}

const DisplayPositions = ({ onChange, value }: TPropsDisplayPositions)=>{
  const [ position, setPosition ] = useState(value)

  useEffect(()=>{
    onChange(position)
  }, [position])

  useEffect(()=>{
    setPosition(value)
  }, [value])


  const handlePropsStar = (pos: number)=>({
    onClick: ()=> setPosition(pos === position ? 0 : pos),
    className: position === pos ? "marked": ""
  })


  return (
    <S.DisplayPositions>  
      <ul>
        <li {...handlePropsStar(1)}><i className='bx bxs-star'/></li>
        <li {...handlePropsStar(2)}><i className='bx bxs-star'/></li>
        <li {...handlePropsStar(3)}><i className='bx bxs-star'/></li>
        <li {...handlePropsStar(4)}><i className='bx bxs-star'/></li>
        <li {...handlePropsStar(5)}><i className='bx bxs-star'/></li>
      </ul>
    </S.DisplayPositions>
  )
}


export default DisplayPositions