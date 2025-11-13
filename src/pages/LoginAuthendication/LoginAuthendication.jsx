import { createContext, useContext, useState } from "react";

const AuthProvider = createContext();

const LoginAuthendication = () => {
  const code = `
import { createContext, useContext, useState } from "react";

const AuthProvider = createContext();

const LoginAuth = () => {
  const { login, setLogin, user, setUser } = useAuthContxt();
  const ProtectedDashboard = withAuth(Dashboard);
  return <>{login ? <ProtectedDashboard /> : <Login />}</>;
};

const AuthContxt = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState("");

  return (
    <AuthProvider value={{ login, setLogin, user, setUser }}>
      {children}
    </AuthProvider>
  );
};

const useAuthContxt = () => useContext(AuthProvider);

const Dashboard = () => {
  return <p>Dashboard</p>;
};

const withAuth = (WrappedComponent) => {
  return function ({ ...args }) {
    const { login, setLogin, user, setUser } = useAuthContxt();

    if (!login) {
      return <p>Please Login then try again...</p>;
    }
    return (
      <>
        <p>Hello {user?.uName}</p>
        <button className="btn" onClick={() => setLogin(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="size-[1.2em]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          Logout
        </button>
        <WrappedComponent {...args} />
      </>
    );
  };
};

const Login = () => {
  const { login, setLogin, user, setUser } = useAuthContxt();
  const [fUser, setFUser] = useState({
    uName: "",
    pWord: "",
    errors: {
      uName: "",
      pWord: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name !== "" && value !== "") {
      setFUser((p) => ({
        ...p,
        [name]: value,
        errors: {
          ...p.errors,
          [name]: "",
        },
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fUser.uName === "") {
      setFUser((p) => ({
        ...p,
        errors: {
          ...p.errors,
          uName: "User name required...",
        },
      }));
    }
    if (fUser.pWord === "") {
      setFUser((p) => ({
        ...p,
        errors: {
          ...p.errors,
          pWord: "Password required...",
        },
      }));
    }
    if (fUser.uName !== "" && fUser.pWord !== "") {
      const { uName, pWord } = fUser;
      setLogin(true);
      setUser({ uName, pWord });
    }
  };

  return (
    <form className="login-form" action="" onSubmit={handleSubmit}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">User name</label>
        <input
          type="text"
          className="input"
          placeholder="User name"
          name="uName"
          onChange={handleChange}
        />
        {fUser.errors.uName && (
          <label className="label text-red-500">{fUser.errors.uName}</label>
        )}
        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          name="pWord"
          onChange={handleChange}
        />
        {fUser.errors.pWord && (
          <label className="label text-red-500">{fUser.errors.pWord}</label>
        )}
        <button className="btn btn-neutral mt-4" type="submit">
          Login
        </button>
      </fieldset>
    </form>
  );
};

`;
  return (
    <>
      <div className="flex w-full h-full flex-col lg:flex-row">
        <div className=" bg-base-300 rounded-box p-4 h-full grow place-items-center">
          <AuthContxt>
            <LoginAuth />
          </AuthContxt>
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className=" bg-base-300 rounded-box grid h-full grow place-items-center">
          <div className="mockup-code w-full h-full p-4">
            <pre>
              <code>{code}</code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginAuthendication;

const LoginAuth = () => {
  const { login, setLogin, user, setUser } = useAuthContxt();
  const ProtectedDashboard = withAuth(Dashboard);
  return <>{login ? <ProtectedDashboard /> : <Login />}</>;
};

const AuthContxt = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState("");

  return (
    <AuthProvider value={{ login, setLogin, user, setUser }}>
      {children}
    </AuthProvider>
  );
};

const useAuthContxt = () => useContext(AuthProvider);

const Dashboard = () => {
  return <p>Dashboard</p>;
};

const withAuth = (WrappedComponent) => {
  return function ({ ...args }) {
    const { login, setLogin, user, setUser } = useAuthContxt();

    if (!login) {
      return <p>Please Login then try again...</p>;
    }
    return (
      <>
        <p>Hello {user?.uName}</p>
        <button
          className="btn  btn-soft btn-error"
          onClick={() => setLogin(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="size-[1.2em]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          Logout
        </button>
        <WrappedComponent {...args} />
      </>
    );
  };
};

const Login = () => {
  const { login, setLogin, user, setUser } = useAuthContxt();
  const [fUser, setFUser] = useState({
    uName: "",
    pWord: "",
    errors: {
      uName: "",
      pWord: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name !== "" && value !== "") {
      setFUser((p) => ({
        ...p,
        [name]: value,
        errors: {
          ...p.errors,
          [name]: "",
        },
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fUser.uName === "") {
      setFUser((p) => ({
        ...p,
        errors: {
          ...p.errors,
          uName: "User name required...",
        },
      }));
    }
    if (fUser.pWord === "") {
      setFUser((p) => ({
        ...p,
        errors: {
          ...p.errors,
          pWord: "Password required...",
        },
      }));
    }
    if (fUser.uName !== "" && fUser.pWord !== "") {
      const { uName, pWord } = fUser;
      setLogin(true);
      setUser({ uName, pWord });
    }
  };

  return (
    <form className="login-form" action="" onSubmit={handleSubmit}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">User name</label>
        <input
          type="text"
          className="input"
          placeholder="User name"
          name="uName"
          onChange={handleChange}
        />
        {fUser.errors.uName && (
          <label className="label text-red-500">{fUser.errors.uName}</label>
        )}
        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          name="pWord"
          onChange={handleChange}
        />
        {fUser.errors.pWord && (
          <label className="label text-red-500">{fUser.errors.pWord}</label>
        )}
        <button className="btn btn-neutral mt-4" type="submit">
          Login
        </button>
      </fieldset>
    </form>
  );
};
