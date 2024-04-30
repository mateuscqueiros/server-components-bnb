import { axios } from '../lib/axios';

export default async function Home() {
  const users = await axios
    .get('/users')
    .then((response) => response.data.users);

  return (
    <>
      <div>Esse aqui é o conteúdo da Home</div>
      {users.map((user: any) => (
        <p key={user.id}>{user.firstName}</p>
      ))}
    </>
  );
}
