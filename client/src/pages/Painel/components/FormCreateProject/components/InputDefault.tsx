
import * as S from "../styles"
import { useRef, RefObject } from "react"

type TPropsInput = {
  label?: string,
  onChange?: (e: any)=> void,
  value?: string,
  onFocus?: ()=> void,
  onBlur?: ()=> void,
  onClick?: ()=> void
}

const InputDefault = ( {label, onClick, ...rest}: TPropsInput )=>{
  return (
    <S.InputDefault onClick={onClick}>
      <input required type="text" {...rest}/>
      <span>{label}</span>
      <i></i>
    </S.InputDefault>
  )
}

export default InputDefault