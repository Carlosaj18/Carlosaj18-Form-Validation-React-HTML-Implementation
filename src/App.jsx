import { useEffect, useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birdthday: "",
    password: "",
    confirmPassword: "",
  });

  const [inputs, setInputs] = useState([
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage:
        "Username should be 3-16 characters and should not include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "invalid email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage:
        "Password should be 8-20 characters and it must include one special character",
      pattern: "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).+",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "Passwords do not match",
      pattern: values.password,
      required: true,
    },
  ]);

  useEffect(() => {}, [inputs]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const calculateEighteenYearsAgo = () => {
    const now = new Date();
    const eighteenYearsAgo = new Date(
      now.getFullYear() - 18,
      now.getMonth(),
      now.getDate()
    );
    const formattedDate = eighteenYearsAgo.toISOString().split("T")[0];
    return `${formattedDate}.*`;
  };

  const handleAddFields = () => {
    const name = window.prompt("Please enter the name of the field:");
    if (!name) return; // Cancelled or empty input
    const type = isNaN(name) ? "text" : "number"; // If name is not a number, set type to text
    const placeholder = "";
    const label = "";
    const errorMessage = "";
    const required = true;

    const newInput = {
      id: inputs.length + 1,
      name: name,
      type: type,
      placeholder: placeholder,
      label: label,
      errorMessage: errorMessage,
      required: required,
    };

    setInputs([...inputs, newInput]);
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            errorMessage={input.errorMessage}
          />
        ))}
        <button type="button" onClick={handleAddFields}>
          Add Field{" "}
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
