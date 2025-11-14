import { useState, useEffect } from "react";
const DinamicElements = () => {
  const [dim, setDim] = useState({ row: 1, col: 1 });
  useEffect(() => {
    const timer = setInterval(() => {
      let num = Math.floor(Math.random() * 11);
      setDim({ row: num, col: num });
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const code = `

import { useState, useEffect } from "react";

export default function App() {
  const [dim, setDim] = useState({ row: 1, col: 1 });
  useEffect(() => {
    const timer = setInterval(() => {
      let num = Math.floor(Math.random() * 11);
      setDim({ row: num, col: num });
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="App">
      <Matrix row={dim?.row} col={dim?.col} />
    </div>
  );
}

const Matrix = ({ row, col }) => {
  const matrix = Array.from({ length: row }, (_, r) =>
    Array.from({ length: col }, (_, c) => c * row + (r + 1))
  );

  return (
    <div>
      {matrix.map((row, i) => (
        <div key={i} style={{ display: "flex" }}>
          {row.map((col, j) => (
            <div
              key={j}
              style={{ height: "40px", width: "40px", border: "1px solid" }}
            >
              {col}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};


  `;

  return (
    <>
      <div className="flex w-full h-full flex-col lg:flex-row">
        <div className=" bg-base-300 rounded-box p-4 h-full grow place-items-center">
          <Matrix row={dim?.row} col={dim?.col} />
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

export default DinamicElements;

const Matrix = ({ row, col }) => {
  const matrix = Array.from({ length: row }, (_, r) =>
    Array.from({ length: col }, (_, c) => c * row + (r + 1))
  );
  console.log(matrix);

  return (
    <div>
      {matrix.map((row, i) => (
        <div style={{ display: "flex" }}>
          {row.map((col, j) => (
            <div style={{ height: "40px", width: "40px", border: "1px solid" }}>
              {col}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
