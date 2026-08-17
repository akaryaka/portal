'use client'
// import Link from 'next/link'
import { useSession } from 'next-auth/react'
// import { ReactNode } from 'react';

export default function Home() {
  const session = useSession();
 
  console.log(session);
  
  return (
    <main className="font-sans flex w-full h-[100vh] flex-col items-center justify-center py-32 px-16">
      <div className='flex justify-center gap-[20px] text-[white]'>
        {/* <Link className='text-[30px]' href='signin'>Вход</Link>
        <Link className='text-[30px]' href='signup'>Регистрация</Link> */}
      </div>
    </main>
  );
}
