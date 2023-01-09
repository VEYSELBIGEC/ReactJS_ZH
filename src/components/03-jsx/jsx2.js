import React from "react";

const Jsx2 = () => {
  const user = {
    name: "Ali COME HERE",
    email: "ali@comehere.com",
    occupation: "Developer",
  };

  return (
    <>
      <div>NAME : {user.name} </div>
      <div>EMAIL : {user.email} </div>
      <div>OCCUPATION : {user.occupation} </div>
    </>
  );
};

export default Jsx2;
