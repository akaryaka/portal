import Link from 'next/link'

export default function Home() {
  return (
    <main className="font-sans flex w-full h-[100vh] flex-col items-center justify-center py-32 px-16">
      <div className='flex justify-center gap-[20px]'>
        <Link href='signin'>Вход</Link>
        <Link href='signup'>Регистрация</Link>
      </div>
    </main>
  );
}
