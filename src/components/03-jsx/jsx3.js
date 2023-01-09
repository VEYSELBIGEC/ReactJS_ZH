import React from "react";

const Jsx3 = () => {
  const isAdmin = false;
  /* we can write the statements with if conditionals ! Comment is written like this in this area */
  // or Comment is written like this in this area by double line !

  return (
    <>
      {/* we can write the statements with Ternary ! Comment is written like this in this area ! */}

      {isAdmin ? (
        <>
          <h2>Admin Menu</h2>
          <ul>
            <li>Create user</li>
            <li>Update user</li>
            <li>Delete user</li>
          </ul>
        </>
      ) : (
        <>
          <h2>User Menu</h2>
          <ul>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </>
      )}
    </>
  );
};

export default Jsx3;
