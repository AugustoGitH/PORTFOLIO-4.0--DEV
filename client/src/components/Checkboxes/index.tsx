
import * as S from "./styles"
import { useState, useRef, useEffect, ChangeEvent } from "react"

type TOptionsCheckbox = {
  label: string | JSX.Element,
  value: string
}

type TParamsCheckboxesChange = {
  name: string,
  value: string | string[]
}

type TPropsCheckboxes = {
  label: string
  options: TOptionsCheckbox[],
  name: string,
  tagAnyone?: boolean,
  onChange: (valueSelected: TParamsCheckboxesChange )=> void,
  value?: string | string[]
}


type TPropsCheckbox = {
  option: TOptionsCheckbox,
  onChange: (event: ChangeEvent<HTMLInputElement>)=> void,
  checked: boolean
}

const Checkbox = ({ option, ...rest }: TPropsCheckbox )=>{
  const idCheckbox = Math.random().toString(16).substring(2)
  return (
    <S.Checkbox>
      <input type="checkbox" id={idCheckbox} className="inp-cbx" value={option.value} {...rest}/>
        <label htmlFor={idCheckbox} className="cbx">
          <span>
            <svg height="10px" width="12px"/>
          </span>
          <span>{option.label}</span>
        </label>
        <svg className="inline-svg">
          <symbol viewBox="0 0 12 10" id="check-4">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </symbol>
        </svg>
    </S.Checkbox>
  )
}



const Checkboxes = ({ options, label, name, tagAnyone, onChange, value }: TPropsCheckboxes)=>{
  const [selectedValues, setSelectedValues] = useState<string[]>(
    value ? Array.isArray(value) ? value : [value] : []
  )

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>)=>{
    const { value, checked } = event.target
    if(checked){
      const valueTrated = [...(tagAnyone ? selectedValues : []), value]
      handleChangeEmit(valueTrated)
      setSelectedValues(valueTrated);
    }else{
      const valueTrated = selectedValues.filter(val => val !== value)
      handleChangeEmit(valueTrated)
      setSelectedValues(valueTrated);
    }
  }

  const handleChangeEmit = (selectValue: string | string[])=>{
    onChange({
      name,
      value: selectValue.length === 1 && !tagAnyone ? selectValue[0] : 
      selectValue.length === 0 && !tagAnyone ? "" : 
      selectValue
    })
  }


  useEffect(()=>{
    if(value !== undefined){
      setSelectedValues(Array.isArray(value) ? value : [ value ] )
    }
  }, [value])


  return (
    <S.Checkboxes>
      <p>{label}</p>
      <div className="check-boxes-list">
        {
          options.map((option, index)=>(
            <Checkbox option={option} key={index} onChange={handleCheckboxChange} checked={selectedValues.includes(option.value)}/>
          ))
        }
      </div>
    </S.Checkboxes>
  )
}

export default Checkboxes