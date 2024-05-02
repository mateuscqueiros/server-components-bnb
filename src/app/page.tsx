import { internalAxios } from '../lib/axios';

export default async function Home() {
  const users = await internalAxios.get('/api/users').then((res) => res.data);

  return (
    <>
      Página inicial
      {users && users.map((user: any) => <p key={user.id}>{user.firstName}</p>)}
    </>
  );
}
