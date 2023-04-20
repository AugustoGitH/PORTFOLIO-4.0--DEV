import * as S from "../styles"

type TPropsControlButtons = {
  onTrash: ()=> void,
  onReloadRepo: ()=> void
}

const ControlButtons = ({ onTrash, onReloadRepo }: TPropsControlButtons)=>{
  return (
    <S.ControlButtons>
      <ul>
        <li onClick={onTrash} className="button-trash"><i className='bx bxs-trash'/></li>
        <li onClick={onReloadRepo} className="button-att-repo"><i className='bx bx-revision'/></li>
      </ul>
    </S.ControlButtons>
  )
}


export default ControlButtons