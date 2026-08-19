import { signOut } from "./actions/auth";

export default function Page() {
  return (
    <>
     <h1>home</h1>
     <form action={signOut}>
      <button type="submit">выйти</button>
     </form>
    </>
  )
}