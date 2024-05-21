import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

function RegisterAndLoginForm() {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [isLoginORRegister, setIsLogInOrRegister] = useState("register");

  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    const url = isLoginORRegister === "register" ? "/register" : "/login";
    const { data } = await axios.post(url, { username, password: pwd });
    setLoggedInUsername(username);
    setId(data.id);
  }
  return (
    <div className="h-screen bg-blue-50 flex items-center">
      <form className="mx-auto w-64" onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
          className="rounded-sm block w-full p-2 mb-2 border"
        />
        <input
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          type="password"
          placeholder="password"
          className="rounded-sm block w-full p-2 mb-2 border"
        />
        <button className="bg-blue-500 rounded-sm text-white w-full block p-2">
          {isLoginORRegister === "register" ? "Register" : "Login"}
        </button>
        <div className="text-center">
          {isLoginORRegister === "register" ? (
            <p>
              Already a member?
              <button onClick={() => setIsLogInOrRegister("login")}>
                Login here
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?
              <button onClick={() => setIsLogInOrRegister("register")}>
                Register here
              </button>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default RegisterAndLoginForm;
