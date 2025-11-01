import React from "react";
import { useGetUsersQuery } from "../../api/endpoints/userApi";

const Dashboard = () => {
  const { data, isLoading, error } = useGetUsersQuery();

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <div>
      <h1 className="text-xl font-bold">User List</h1>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
