import Input from '../Input/Input'
import { Props } from './Form.props'

const Form = ({ page }: Props) => {
  return(
  <>
    <form className='w-[500px] flex flex-col border border-[1px #000] rounded-[5px] p-[50px]' action='/admin'>
      <Input placeholder='Логин'/>
      <Input placeholder='Почта'/>
      <Input placeholder='Пароль'/>
      <button>{page}</button>
    </form>
  </>)
}

export default Form