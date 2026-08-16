import Form from '@/components/Form/Form'
import Link from 'next/link'

const SignIn = () => {
  return(
    <>
      <div className='w-[100%] h-[100vh] flex flex-col items-center justify-center'>
        <h1 className='mb-[40px] text-[30px] text-[white]'>Вход</h1>
        <Form page='signin'/>
        <div className='flex gap-[10px] text-[white]'>
          <Link href="/signup">Регистрация</Link>
          <Link href="/"> | Главная</Link>
        </div>
      </div>
    </>
  )
}

export default SignIn