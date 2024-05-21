import React, { useContext } from "react";
import Register from "./RegisterAndLoginForm";
import { UserContext } from "./UserContext";
import Chat from "./Chat";

function Routes() {
  const { username, id } = useContext(UserContext);

  if (username) return <Chat />;
  return (
    <>
      <Register />
    </>
  );
}

export default Routes;
