import { useState, useEffect, useRef } from "react";

const UseState = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleFieldChange = (e, index) => {
    const { value } = e.target;
    console.log(value);

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && inputRefs.current[index - 1] && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const code = `
import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleFieldChange = (e, index) => {
    const { value } = e.target;
    console.log(value);

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && inputRefs.current[index - 1] && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {otp &&
        otp.map((value, index) => (
          <input
            key={index}
            type="text"
            className="input-otp"
            ref={(input) => (inputRefs.current[index] = input)}
            value={value}
            name=""
            id=""
            onChange={(e) => handleFieldChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
    </div>
  );
}

  `;
  return (
    <>
      <div className="flex w-full h-full flex-col lg:flex-row">
        <div className=" bg-base-300 rounded-box p-4 h-full grow place-items-center">
          {otp &&
            otp.map((value, index) => (
              <input
                key={index}
                type="text"
                className="input-otp input input-xl h-20 w-20  "
                ref={(input) => (inputRefs.current[index] = input)}
                value={value}
                name=""
                id=""
                onChange={(e) => handleFieldChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
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
export default UseState;
