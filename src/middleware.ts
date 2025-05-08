import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
   const isPublicUrl = path === '/login' || path === '/signup' || 
   path === 'varifyemail'

   const token = request.cookies.get('token')?.value || ''

   if (isPublicUrl && token) {
    return NextResponse.redirect(new URL('/home', request.url))
   } else if (!isPublicUrl && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
   }
   }

 

 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/login',
    '/signup',
    '/varifyemail',
    '/profile'
  ]
}