import Link from 'next/link'

export default function Home() {
  return (
    <main className="font-sans flex w-full h-[100vh] flex-col items-center justify-center py-32 px-16">
      <div className='flex justify-center gap-[20px] text-[white]'>
        <Link className='text-[30px]' href='signin'>Вход</Link>
        <Link className='text-[30px]' href='signup'>Регистрация</Link>
      </div>
    </main>
  );
}
