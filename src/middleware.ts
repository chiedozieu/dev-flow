import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import getOrCreateDB from './models/server/dbSetup'
import getOrCreateStorage from './models/server/storageSetup'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    Promise.all([
        getOrCreateDB(),
        getOrCreateStorage()
    ])
  return NextResponse.next()
}
 

export const config = {
   matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}