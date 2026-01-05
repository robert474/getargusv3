import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';

  // Redirect non-www to www (only in production)
  if (host === 'getargus.ai') {
    url.host = 'www.getargus.ai';
    return NextResponse.redirect(url, 301);
  }

  // Remove _rsc query parameter from URLs to prevent indexing issues
  // This ensures clean canonical URLs
  if (url.searchParams.has('_rsc')) {
    url.searchParams.delete('_rsc');
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|json|txt|xml)$).*)',
  ],
};
