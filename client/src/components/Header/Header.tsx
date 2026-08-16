import Link from 'next/link'


const Header = () => {
  return(
    <>
      <header className='pt-[15px] pb-[15px] bg-[grey]'>
        <div className='w-[1440px] mr-[auto] ml-[auto] flex justify-between'>
          <Link className='text-[white]' href="/">Главная</Link>
          <div>аккаунт</div>
        </div>
      </header>
    </>
  )
}

export default Header