import { dummyAxios } from '@/components/lib/axios';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const data = await dummyAxios
    .get('/users')
    .then((response: any) => response.data.users);

  return Response.json(data);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const data = await dummyAxios
    .post('/users/add', body)
    .then((response) => response.data);

  return Response.json(data);
}
