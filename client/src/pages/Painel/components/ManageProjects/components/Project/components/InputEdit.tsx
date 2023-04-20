import * as S from "../styles"
import { useEffect, useRef, useState } from "react"

type TPropsInputEdit = {
  value?:string | number,
  placeholcer?: string,
  onChange: (value: string | number)=> void,
  edited?: boolean
}

const InputEdit = ({ value, placeholcer, onChange, edited }: TPropsInputEdit)=>{
  const [isEditabled, setIsEditabled] = useState(false)
  const [valueInput, setValueInput] = useState(value || "")

  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(()=>{
    onChange(valueInput)
  }, [valueInput])

  useEffect(()=>{
    if(edited !== undefined){
      setIsEditabled(edited)
    }
  }, [edited])

  useEffect(()=>{ 
    setValueInput(value || valueInput)
  }, [value])

  useEffect(()=>{
    if(inputRef.current && isEditabled){
      inputRef.current?.focus()
    }
  }, [isEditabled])

  const handleClickEditInput = ()=>{
    setIsEditabled(prevEdit=> !prevEdit)
  }

  return (
    <S.InputEdit>
      <input ref={inputRef} style={{background: isEditabled ? "#fff" : "" }} disabled={!isEditabled} value={valueInput} placeholder={placeholcer || ""} onChange={e=> setValueInput(e.target.value)}/>
      <button onClick={handleClickEditInput}>{isEditabled ? "Concluir": "Editar"}</button>
    </S.InputEdit>
  )
}


export default InputEdit