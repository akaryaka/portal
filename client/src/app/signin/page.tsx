import Form from 'next/form'
import Link from 'next/link'

const SignIn = () => {
  return(
    <>
      <h1>Вход</h1>
      <Link href="/">Главная</Link>
      <Form action='/submit'>
        <input type="text" placeholder='Логин' />
        <input type="text" placeholder='Почта' />
        <input type="text" placeholder='Пароль' />
        <button>войти</button>
      </Form>
      <div>
        <span>еще не зарегистрированы?</span>
        <Link href="/signup">регистрация</Link>
      </div>
    </>
  )
}

export default SignIn