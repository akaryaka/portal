import createClient from "@/app/utils/supabase/server";
import { type NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const response = NextResponse.next({
    request: {
      headers: request.headers
    }
  })

  const supabase = await createClient();

  const {data: {user}} = await supabase.auth.getUser();

  if (!user && !request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (user && !request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return response
}

// export const config = {
//   matcher: {

//   }
// }