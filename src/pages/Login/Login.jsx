import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../../api/endpoints/authApi";
import { selectAuth, logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated, user } = useSelector(selectAuth);
  const [login] = useLoginMutation();

  const handleLogin = async () => {
    try {
      localStorage.setItem("token", "test@test.com");
      navigate("/dashboard");
      //await login({ email: "test@test.com", password: "123456" }).unwrap();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      {loading && <p>Loading...</p>}

      {!isAuthenticated ? (
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button
                    className="btn btn-neutral mt-4"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      )}
    </>
  );
};

export default Login;
