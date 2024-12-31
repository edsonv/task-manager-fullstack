import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/'];
const publicRoutes = ['/login'];

const middleware = (req: NextRequest) => {
  const { pathname } = req.nextUrl;

  console.log(pathname);

  const isProtectedRoute = protectedRoutes.includes(pathname);
  const isPublicRoute = publicRoutes.includes(pathname);
  const session = true;

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  if (isPublicRoute && session) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  return NextResponse.next();
};

export default middleware;
