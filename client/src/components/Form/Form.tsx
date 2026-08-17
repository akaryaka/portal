import Button from '../Button/Button'
import Input from '../Input/Input'
import { Props } from './Form.props'

const Form = ({ page }: Props) => {
  return(
    <>
      <form className='w-[500px] mb-[20px] flex flex-col rounded-[5px] p-[50px] bg-[#ffffff]' action='/admin'>
        <Input className='mb-[15px]' placeholder='Логин'/>
        {page === 'signup' 
          ? <Input className='mb-[15px]' placeholder='Почта'/> 
          : null
        }
        <Input className='mb-[40px]' placeholder='Пароль'/>
        <Button>
          {page === 'signup'
          ? 'регистрация'
          : 'вход'
        }
        </Button>
      </form>
    </>
  )
}

export default Form