import React from "react";

function getInputStyle(length) {
  const hue = Math.min(length * 10, 100);
  return {
    backgroundColor: `hsl(${hue}, 100%, 50%)`
  };
}

function PasswordInput() {
  const [password, setPassword] = React.useState("");
  const passwordLength = password.length;

  return (
    <div>
      <input
        style={getInputStyle(passwordLength)}
        className="password-input"
        type="password"
        value={password}
        onChange={event => {
          setPassword(event.target.value);
        }}
      />
      {passwordLength}
    </div>
  );
}

export default PasswordInput;

// const Input = styled.input`
//   border: 4px solid slateblue;
//   /* border: ${props =>
//     props.password.length
//       ? "5px solid rgb(224, 224, 183)"
//       : "5px solid red"}; */
//   width: 300px;
//   height: 40px;
//   font-size: 1em;
//   margin: 10px;
// `;
// // import { directive } from "@babel/types";

// /**
//  * Exercise
//  * Change the background-color of the input based
//  * on the length of the password
//  * At a length of 0-4 it should be a red to orange
//  * At a length of around 10 it should become green
//  * It should never become blue, so stop at green
//  */

// function getInputStyle(length) {
//   const hue = Math.min(length * 10, 100);
//   return {
//     backgroundColor: `hsl(${hue}, 100%, 50%)`
//   };
// }

// function PasswordInput() {
//   const [password, setPassword] = React.useState("");
//   return (
//     <div>
//       <Input
//         style={getInputStyle(password.length)}
//         type="password"
//         value={password}
//         onChange={event => setPassword(event.target.value)}
//         placeholder="Must have x many characters"
//       />
//       {password.length}
//     </div>
//   );
// }

// export default PasswordInput;

// // How to change the background color?
// // How to access the input value (password)?
// // How should a function look like which returns the color based on password length?
// // Why does it make sense to use HSL?

// // function getInputStyle(passwordLength) {
// //   let pwLength = passwordLength > 10 ? 10 : passwordLength;
// //   return { backgroundColor: `hsl(${pwLength * 10}, 100%, 50%)` };
// // }

// // if (passwordLength >= 5) {
// //   return {
// //     backgroundColor: "hsl(100, 100%, 50%)"
// //   };
// // }
// // if (passwordLength === 4) {
// //   return {
// //     backgroundColor: "hsl(65, 100%, 50%)"
// //   };
// // }
// // if (passwordLength === 3) {
// //   return {
// //     backgroundColor: "hsl(50, 100%, 50%)"
// //   };
// // }
// // if (passwordLength === 2) {
// //   return {
// //     backgroundColor: "hsl(30, 100%, 50%)"
// //   };
// // }
// //   const inputStyle = {
// //     background: "hsl(10, 100%, 50%)"
// //   };
// //   return inputStyle;
// // }
