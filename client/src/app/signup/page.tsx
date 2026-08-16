import Form from '@/components/Form/Form'
import Link from 'next/link'

const SignUp = () => {
  return(
    <>
      <h1>Регистрация</h1>
      <Link href="/">Главная</Link>
      <Form page='регистрация'/>
      <div>
        <span>уже зарегистрированы?</span>
        <Link href="/signin">вход</Link>
      </div>
    </>
  )
}

export default SignUp