import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('accessToken');
  const { pathname } = request.nextUrl;

  // Paths that don't require authentication
  const publicPaths = ['/', '/login', '/register', '/favicon.ico'];

  // Check if the current path is public
  const isPublicPath = publicPaths.includes(pathname);

  // If user is not authenticated and trying to access a protected route
  if (!token && !isPublicPath) {
    const loginUrl = new URL('/login', request.url);
    // loginUrl.searchParams.set('from', pathname); // Optional: redirect back after login
    return NextResponse.redirect(loginUrl);
  }

  // If user is authenticated and trying to access login/register pages, redirect to home
  if (token && (pathname === '/login' || pathname === '/register')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - images (public images)
     */
    '/((?!api|_next/static|_next/image|images).*)',
  ],
};
