import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const cookies = request.cookies
    const session = cookies.get('authjs.session-token')

    if (!session) {
        return NextResponse.redirect(new URL('/login', request.url).toString())
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/shop',
}