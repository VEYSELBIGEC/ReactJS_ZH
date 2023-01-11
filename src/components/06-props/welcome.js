import React from "react";
import "./welcome.scss";

const Welcome = (props) => {

  return (
    <h1 className="welcomeH1">
      Welcome {props.firstName} {props.lastName}
    </h1>
  );
};

export default Welcome;



// 2 ) destructuring props yapmak demektir!
// const Welcome = (props) => {
//   const { firstName, lastName } = props ;
//   return (
//     <h1>Welcome {firstName} {lastName}</h1>
//   )
// }
// export default Welcome

// 3 ) props cok fazla ise burda bu sekilde kullanmak cok iyi olmuyor, 2. yontem tercih edilir!
// const Welcome = ({ firstName, lastName }) => {
//
//   return (
//     <h1>Welcome {firstName} {lastName}</h1>
//   )
// }
// export default Welcome
