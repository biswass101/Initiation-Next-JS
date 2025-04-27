type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function userServer() {
    const getData = await new Promise((resolve) => setTimeout(() => resolve("Promise resolved"), 2000));
    console.log(getData);
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();

  return (
    <ul className="space-y-4 p-4">
      {users.map((user) => {
        return (
          <li
            key={user.id}
            className="bg-white shadow-md p-4 rounded-lg text-gray-700"
          >
            <div className="font-bold">{user.name}</div>
            <div className="text-sm">
              <div>Username: {user.username}</div>
              <div>Email: {user.email}</div>
              <div>Phone: {user.phone}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
