import React from "react";
import { useGetUsersQuery } from "../../api/endpoints/userApi";

const Dashboard = () => {
  const { data, isLoading, error } = useGetUsersQuery();

  if (isLoading) return <p>Loading users...</p>;
  //if (error) return <p>Error loading users</p>;

  return (
    <div>
      <h1 className="text-xl font-bold">User List</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="card bg-primary text-primary-content">
          <div className="card-body p-0">
            <h2 className="card-title">Card title!</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            {/* <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div> */}
          </div>
        </div>
        <div className="card bg-neutral text-neutral-content">
          <div className="card-body items-center text-center p-0">
            <h2 className="card-title">Cookies!</h2>
            <p>We are using cookies for no reason.</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Accept</button>
              <button className="btn btn-ghost">Deny</button>
            </div> */}
          </div>
        </div>
      </div>

      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
