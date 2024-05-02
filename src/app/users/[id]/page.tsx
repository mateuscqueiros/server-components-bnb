import { dummyAxios } from '@/components/lib/axios';
import { notFound } from 'next/navigation';

type UsersPage = {
  params: {
    id: string;
  };
};

export default async function UserPage({ params }: UsersPage) {
  const users = await dummyAxios.get('/users').then((res) => res.data.users);
  if (isNaN(Number(params.id))) {
    notFound();
  }
  return <>ID do usuário: {params.id}</>;
}
