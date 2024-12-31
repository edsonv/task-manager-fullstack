import { NextRequest, NextResponse } from 'next/server';

const middleware = (req: NextRequest) => {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: '/',
};

export default middleware;
