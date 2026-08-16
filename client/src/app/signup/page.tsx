import Form from '@/components/Form/Form'
import Link from 'next/link'

const SignUp = () => {
  return(
    <>
      <div className='w-[100%] h-[100vh] flex flex-col items-center justify-center'>
        <h1 className='mb-[40px] text-[30px] text-[white]'>Регистрация</h1>
        <Form page='signup'/>
        <div className='text-[white]'>
          <Link href="/signin">Вход</Link>
          <Link href="/"> | Главная</Link>
        </div>
      </div>
    </>
  )
}

export default SignUp