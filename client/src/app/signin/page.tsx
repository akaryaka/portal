import Form from '@/components/Form/Form'
import Link from 'next/link'

const SignIn = () => {
  return(
    <>
      <h1>Вход</h1>
      <Link href="/">Главная</Link>
      <Form page='вход'/>
      <div>
        <span>еще не зарегистрированы?</span>
        <Link href="/signup">регистрация</Link>
      </div>
    </>
  )
}

export default SignIn