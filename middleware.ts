import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const sessionRole = request.cookies.get('session_role')?.value;

    const isDashboard = request.nextUrl.pathname.startsWith('/dashboard');
    const isApi = request.nextUrl.pathname.startsWith('/api/secrets');

    if((isDashboard || isApi) && !sessionRole){
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/secrets/:path*'],
};