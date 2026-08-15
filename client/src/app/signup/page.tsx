import Form from 'next/form'
import Link from 'next/link'

const SignUp = () => {
  return(
    <>
      <h1>Регистрация</h1>
      <Link href="/">Главная</Link>
      <Form action='/submit'>
        <input type="text" placeholder='Логин' />
        <input type="text" placeholder='Почта' />
        <input type="text" placeholder='Пароль' />
        <button>Зарегистрироваться</button>
      </Form>
      <div>
        <span>уже зарегистрированы?</span>
        <Link href="/signin">вход</Link>
      </div>
    </>
  )
}

export default SignUp