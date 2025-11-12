import { useState, useEffect, useRef } from "react";

const UseEffect = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const response = await fetch("https://dummyjson.com/products");
      const resJson = await response.json();
      setDatas(resJson?.products);
    }
    fetchApi();
  }, []);

  const handleClick = (id) => {
    setDatas((p) => p.filter((item) => item.id !== id));
  };

  const code = `
import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const response = await fetch("https://dummyjson.com/products");
      const resJson = await response.json();
      setDatas(resJson?.products);
    }
    fetchApi();
  }, []);

  const handleClick = (id) => {
    setDatas((p) => p.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      {datas.length > 0 ? (
        <table>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>category</th>
            <th>stock</th>
            <th>Delete</th>
          </tr>
          {datas &&
            datas?.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.stock}</td>
                <td>
                  <span
                    style={{
                      padding: "0.1rem 0.5rem",
                      cursor: "pointer",
                      border: "1px solid #CCC",
                      backgroundColor: "#CCC",
                    }}
                    onClick={() => handleClick(item.id)}
                  >
                    X
                  </span>
                </td>
              </tr>
            ))}
        </table>
      ) : (
        <p>No data available...</p>
      )}
    </div>
  );
}
`;
  return (
    <>
      <div className="flex w-full h-full flex-col lg:flex-row">
        <div className=" bg-base-300 rounded-box p-4 h-full grow place-items-center">
          {datas.length > 0 ? (
            <table className="useeffect-table">
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>category</th>
                <th>stock</th>
                <th>Delete</th>
              </tr>
              {datas &&
                datas?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>{item.stock}</td>
                    <td>
                      <span
                        style={{
                          padding: "0.1rem 0.5rem",
                          cursor: "pointer",
                          border: "1px solid #CCC",
                          backgroundColor: "#CCC",
                        }}
                        onClick={() => handleClick(item.id)}
                      >
                        X
                      </span>
                    </td>
                  </tr>
                ))}
            </table>
          ) : (
            <p>No data available...</p>
          )}
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
export default UseEffect;
