import { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  console.log('Passou pelo middleware: ', request.nextUrl.pathname);
}
