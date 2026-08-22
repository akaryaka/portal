'use client'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { ReactNode } from 'react';

export default function Home() {
  const session = useSession();
  // signOut()
//  session.status
  console.log(session.status);
  
  return (
    <main className="font-sans flex w-full h-[100vh] flex-col items-center justify-center py-32 px-16">
      <div className='flex justify-center gap-[20px] text-[white]'>
        {session.status == 'authenticated'
          ? <button onClick={() => signOut({callbackUrl: '/'})}>выйти</button> 
          : <Link href="/api/auth/signin">Залогиниться с гугл</Link>
        }
        <Link className='text-[30px]' href='signin'>Вход</Link>
        <button onClick={() => signOut({callbackUrl: '/'})}>выйти</button>
        <Link className='text-[30px]' href='signup'>Регистрация</Link>
      </div>
    </main>
  );
}
