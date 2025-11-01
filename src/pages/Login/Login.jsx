import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../../api/endpoints/authApi";
import { selectAuth, logout } from "../../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(selectAuth);
  const [login] = useLoginMutation();

  const handleLogin = async () => {
    try {
      await login({ email: "test@test.com", password: "123456" }).unwrap();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4">
      <h2>Login Page</h2>
      {error && <p className="text-red-500">{error}</p>}
      {loading && <p>Loading...</p>}

      {!isAuthenticated ? (
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      ) : (
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Login;
