'use client'

import { trpc } from '@/utils/trpc'

export default function Home() {
  const usersQuery = trpc.user.getAll.useQuery();

  if (usersQuery.isLoading) return <div>Loading...</div>;
  if (usersQuery.error) return <div>Error: {usersQuery.error.message}</div>;

  return (
    <main>
      <h1>All Users</h1>
      <ul>
        {usersQuery.data?.map((user) => (
          <li key={user.id}>
            {user.email} - {user.name ?? 'No Name'}
          </li>
        ))}
      </ul>
    </main>
  );
}
