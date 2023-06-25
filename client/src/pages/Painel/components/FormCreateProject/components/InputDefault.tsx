
import * as S from "../styles"
import { useRef, RefObject, ComponentProps } from "react"

interface IInputDefaultProps extends ComponentProps<"input"> {
  label?: string,
}


const InputDefault = ({ label, onClick, ...restPropsInput }: IInputDefaultProps) => {
  return (
    <S.InputDefault onClick={onClick}>
      <input required type="text" {...restPropsInput} />
      <span>{label}</span>
      <i></i>
    </S.InputDefault>
  )
}

export default InputDefault