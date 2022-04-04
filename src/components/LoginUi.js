import "./LoginUi.css";
import Popupl from "./Popupl";
import { BiErrorCircle } from "react-icons/bi";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function LoginUi() {
  const location = useLocation();
  const navigation = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [popupl, setPopupl] = useState(false);
  const submitform = (e) => {
    if (username && password) {
      // alert(username,password);
      if (username === "lokesh" && password === "12345") {
        // alert("Valid username and password");
        // const location=useLocation();
        // const navigation=useNavigate();
        navigation("/home");
        setPopupl(false);

        setValid(true);
        setError(false);
        // if(localStorage.)
        localStorage.setItem("user", username);
        // localStorage.setItem("valid", true);

        // Navigate replace to = "/login/dashboard" / >
      } else {
        setValid(false);
        setError(true);
        setPopupl(true);
        // alert("Invalid username or password");
        // <Navigate to="/login/dashboard"/>
      }
      localStorage.setItem("valid", valid);
      // if (localStorage.getItem('valid')) {
      //   localStorage.setItem('valid', valid);
      // }

      e.preventDefault();
      const entry = [...username, ...password];
      setData(entry);
      // alert(data.username,data.password);
      // alert(entry.username);
      setUsername("");
      setPassword("");
      // setError(false);
      // alert(username,password);
    } else {
      alert("Invalid credintals");
      setPopupl(true);
      // <Navigate replace to = "/login"/>
      navigation("/login");
    }
    // e.preventDefault();
    // const entry = { username: username, password: password };
    // setData(entry);
    // console.log(data);
  };

  return (
    <>
      <form onSubmit={submitform}>
        <div className="main">
          <div className="sub-main">
            <div>
              <div className="imgs">
                <div className="container-image">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABKVBMVEX///9Pbo3/4bJHX39HT2UpOUr9yI7/0mf/16N+VElObY1JY4NHaYn29/lPcI//4rQ+YoX/5rX/36z/1mVASV48V3k/Z4//3aX/12Q6YINEZodMYXxqg53m6u5NaYY7WX7Hz9hIVGt2SkL9zpcsPU88VGyzvsuFmK3W3OM0Pli5u8ITLUQAJUF7UEb/6cf/zY/h5epceJVrfIihr791Rjnw0aYRLESmmYP/8NqFXE/cv5uRjYx9gIg2S2HCy9VYc4u4p3l7kKfwyWvIsXWkssFpTUk8Pkri2tiWcF3ItJWBe3CUinleX19ETFStiXC6qY3Tso//+e/pvIxpc4SpnJCmnX3Zu3Dfv2+AiIXzy2oAGTO0pKHFtK9OREmHgHORb2eojoi/nX/+3LkBipAyAAAM+0lEQVR4nO2dDVubyBbHIakxIiEYa0wwwdxYQ7rWVIypmm1t07Uvatu0293tdrvd3d7v/yHuAIHwMsAMzAvu7f95+qLicH4558w5AyQjCAzUHfYG47Ex65imIiqKaXaM8eWgd1RjcXLKqg0HhimrmqbJsixJoiQCgX/AV5qmqrJpXPZuL2f3wjDbqibbVDGSAGjbNC66vI3F13BspsAFMFVzPORtMo56hqYi0i0pVdno8TYcTUNDQ3VeSLImG4X3ZG1g4novCKmagyLPPEeGquXAsyVp2rio886w05ZT7QdKPUZWZ0UM1p6pptquNZ8eHz/VmqkHyu1O0RiPOul8UvP002artfn52dNm2rGipM6KFKtdo52efs3Hz1urtjY3f01HBH40CjPnXGqp+QcAbzZXPbV+QkAUZXnAG83W0ESZP7Wb1uoqLqKomUe88QRhjBCgIK2ergbVQglU8HvtMWe+oaKhGCo2f9sMIW4+Raucmsl1xrlEciBwxXFrNUz4DMmJlhs5ZuNMRTNSbP4UdiEQmveBVIMTX1dBmEIXhJ+jgK3fkRs8mU+k9tBbUOkY4kLkMLUG0Di0OIM2sn2ifAMj/A2dUBTbF6wBLzEARe1XGOEnHEKR9XwzRp1jbDWfQQhXn2MRiirTyogHSMSHbBExAUnkoY14yQpwgAmYfy5diFUu9nAmGUc56+ESkUnR6CJ2agHCXD2NTyqL0q9kuNaUpy8NDqTQBzSQWzW/sq8tQpKp96gXuLOMo+j68DSLC4FUys1NLUvyWAqt8TfR1vjQkehevckWo5aafsQWdi1cim6cDrPFqIP4++eWk4zWtbYcl8ZVmiWjk+eavdw8/bS62Vp9jnK9NEFShx5gHhda0pry8bHSzONASxSdmMuFjhDuW6SPQc2J3ZwuJCZqnc0480RKWDKtdZTCm8wTpd6tMEFKLUwvsvUzkmIJ/EfxSXS/zjbvaHRaN7w0tDGsP7q+Y+s/QTnf1HXdPnIBjSpKiThDfL0tg0VJt6HuIMni1SVREVE5pRkVQoRqaMPpyGRRUF23h0glNKkQmil0DlwmtgAn8GcaJS3CeB+C2YQInQ9TTKKkRJgQpUTpPEg9Ni8p9W3wtaGi6DvE6TxKHY5IaY04gNRDRaTgvYB2YIQanQunR5Cehp77EhlVSg8wRKcaFoAgVsOhSmmiiYappDMBBF4MIVJq2oSoEymn4FJBQmouFIRh6I4FK8A7euClpXn3InhbjVWQhsKU7k02w5eKzNIwSKhRvq7vQ+RDSP/hmnGbK2GbwX3gnixzI5TlHn1AQagtnpdlTiixe6Z2aD/zzJhQUjssHza1nstnSShxeLa9OxZVZoRlic97MC7uMwK8y+tB4S4rwvs/cCI8+k641F2obiehY/s9Syvoso+P5eZGOLzvx8JDSgf2wd7lRdi7f8cCI8YFZwWg3HzY/YMq3FJ/cHvLxccDJoAHx7wAhRrdCHV1j+N72L4wIfzCD1D48+Qrdb6vJ39yJVx78ZIq38sXa1wJX52srdFkBHxrayeveBMCRjqx+vWFPTpXwq5D6EA+OCBWPA4evFzgWYQ834BY8wjX+pPJ/PrgwaO8lAePHhxczyeTvjfyCc83PPsI10obQJP5zZsVgJmF8wDArbz9az6xBiotBz7hCCgInhmHrzdKlizjJlen12+BuaigB/axb69Pryb279vjvD70xuZKeO4RvnMsczGBO6dXpzfXb96uPLD0COhgKetL+/srb99c35xeTW3H+Yd45xGecyX827Wj/95nnqP6hmv1ZDq9urqaz09dzefg6+l04r4aG/XwL298cxPx8O+CEE4jhAGDYUr8hWlBCP/xCCdJ9maQN5ke/sOV8ItHmOiRLPIIeTbedmPqmHFOmnDDKxY821If4TvihG654Ez4ih6hWy64tqVLwv434oRuuSgKYbQc5lT9fTEI3cVFfxKp2XkJ3YLIs/E+qzcafUrlcFkQ+43S6AMfwHoDZItbtYgDlkqHy0rbOOMBOLKs2FiYQbwcgqHPF2NbQ/NA/NDwmeGunYgSOgXR7SXYE545ZkzP+1TKoVsQ++dOS8/BiaOFHRvfDvsUyqFVEA/X+off3CXIiDmhVx02Su/6/feki4Vd8vvvSt4rx5EQ2DJ5PaVA+P71xBcZXAlLJfIxGhmVPeGIClS82BOesQXkMJc69ZAdIYfGjS1hnT2gQH72TBL7NGSciDyClG0i8ghStmHKZfUknLFzYoMLoCAwA+Qyz1hi50ROgMwykc81DFuMplNeMWqJSZzyqRQBxAbNdUaDpwctfRiVRmeUllKjsxG3S6VhUUlILp1arGjMqnzzLywKUw7HGgEVccCCuZCCE4vmQgpO5A0UEWEnFs+FpKfTomWhJaI1sVi10BXJxoZ3qxYjgoS8UWJEbLIp4jTjiFScFjRGLZEBLOI86orIfFrMedQVgVQsbhI6GuVF5L6mT1Xe2abwgHlTcbvQSWjrQzUXYeU2EFZL2Zvwyu0gzIzYqNwWwmqmXKxbgLeA8KxqKwNg1QKsFLwaCh7hHjbhng1YKX61GDmE1UoVJxkXDgT6L2+ARNWOQPNddRH3kCecuutAoKogHBVmD9mwjK2t3fF21UOsoE2q9ZLnQKC98e7WFq8tHVPU2SqXy7uP/YgWYzJkPchXefh4F4yyRXGTjuyyAQHix6ofsbLXqMd6EvyksVcJ6OOuPUoREReAAHFnsu1HBI5sQB1ZrzeqlZB2dhejFA/RA7S0RHQ9tFdtAExLpcU/jepeGO/hz+Vdb4yiIQYAy7vTCKLDCVS1/gqzOYDvd/2DFAsxCAgQr+CISQoBFgsxDAgQ54EpFQVwvhsepDiIUUCA+MsSEcWND3+JABYHcQgBBIg/4iA+/BECCBA5bAMcwRsrqgQzLlD7UyP1MRSwLKnKmCvk0JBUWRQVHY7oq/0pbvwIB7T2DZBVyeADWesZsrr4vF1lHY7oq/1Jbvx5Bw647n62riobPcbdeO1ipmn+zSCgFpb9tT/WjYE6H5BvfFnTZhfMILuDjqqF9rqAp2Kg9se4MVIGPYU+4l7W1M6AAaSNF92sJCZOA7Uf6sZ4wPXo5h2SBUn3E4cuOu24PeNjEed+xDAjpM67gPDTSFq7Q28n0kspDi8pFf21Pxyq0DrvKP5EkibS+djygZy4K1lMySgHa3+QMabOW5ITt0PSZPLbsAzNtF3XYlMxWPt9ofowps6XoUkYYjQJf7j3GGWr6jhzg7V/yRhT5y2ln0xqk/yA6FoHadu8uJIRrv0LyJg6bwlphzetQ6x2HIWrX4ziUxGEXQhxexIb1E63hiBZJlQ5esg7O8anYrj2b0/jHZiehK4kjUjHetFOP5WneLMDtX/7KgEQIQk9tXv5AXs4gAmp6K/927F13hLOtpZS/l11hirWPppJcerV/u34Ol/GiFFHebfvgu1ElgPRrv3b8XUeHxBMqbmmm5qIvxNqgvV27d+Or/OWsM+Xb3+rDv4ex4qciPhxklDny2ndGlR5tgocZNkBODFOy1v3odetXGHHqCU1c5OKnYQLxCSEeyv3kn6cadtoKXMqJmw8mnzGJMCVJMSMJ5QzXleF7VmJpPjuzfkM91hExG4tKjXToriWFTA+Fd0PqY9BjFnWo0jKQphrr/hEwDjEHOfTMqz6a1jdWliwVPRvMwBDzJiEC0TGLoTE6fp+4NOR96MxmjUJHULsilFLuuiUBVEKEYa9nA8QCJcw80TqKZRjSohQCR+QU2oPkzBrLfQULBkShDDgxcyFwpWMuaF8N1s7E9B60EEhQutbvhjNfzoN76rNZe4gFX0ATjwECO3vSIGXIKcwNwlO2EcdQ0HzdV891KFH5BLeEiNfMXS1SEX3xfJl4r6bdRKZJLQl4xAOSQQpYJLW15cZBiME2bq+LhEBFFWcFQaRNLSkKEvr4YT+I/IJKxGNXA1NjJQnHuETUlR+yTiX+XNXQ5ioE+JURArnB4T36BLiXJKqyVR86KsWNAhFBYOQ1EQTNIA2IUbzTceH/qaGxvCSjN63fSfMqH87oaT7CHUaJ+BNqAQIKUw13AnFHR/hDoXxvxN+J8yvfR/hPoXxuRMGLkXt/xtnmv8Dwic+QhqLCwqESrxgR6cS4o3HgFBfj5cePTyVMGk8lNv7xAnLyYqMoATuPUUsTnrWCO2SMWnCFMDoNdBkwhRAlGuqZAmTH7hwXvUQhLLiV/iHCOORJBRSXZj4vAX8RU8mTB8O4fYbOiDCtTYEwrBFAUIC44WF9XBU+g1gbIsCy8PoApEAIdb10qPU+xbYFikhQiXneFG1sZ5STH2gDd+iEGHu8cLCvEWaeocU36KdAGF4+ZSfEOvGjJD+aHDhCPGfh+61EwMV36J9moSymuFp6O5MTSj82BZFn1QgRijJqpHtrRfdy5l5CwjN2WVSCv4PuVIZ4RcjwtUAAAAASUVORK5CYII="
                    alt="profile"
                    className="profile"
                  />
                </div>
              </div>
              <div>
                <h1>Login</h1>
                <div className="a">
                  {/* <img src={email} alt="email" className="email" /> */}
                  <input
                    type="text"
                    placeholder="Username"
                    className="shadow p-3 mb-5 bg-body rounded name form-control"
                    required
                    name="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <Popupl trigger={popupl} setTrigger={setPopupl}>
                  <BiErrorCircle color="red" size={80} />
                  <br></br>
                  Invalid username or password
                </Popupl>
                <div className="second-input">
                  {/* <img src={pass} alt="pass" className="email" /> */}
                  <input
                    type="password"
                    placeholder="Password"
                    className="shadow p-3 mb-5 bg-body rounded name form-control"
                    required
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="login-button">
                  <button id="btn" type="submit">
                    Login
                  </button>
                </div>

                <p className="link">
                  {/* <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginUi;

// import "./LoginUi.css";
// import { useState } from "react";
// import { useLocation, useNavigate, Link, Navigate } from "react-router-dom";
// import Popup from "./Popup";
// // import { BrowserRouter as Router, Routes ,Route,Navigate} from 'react-router-dom';

// function LoginUi() {
//   const location = useLocation();
//   const navigation = useNavigate();

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [valid, setValid] = useState(false);
//   const [error, setError] = useState(false);
//   const [data, setData] = useState([]);
//   const [popup, setPopup] = useState(false);
//   const submitform = (e) => {
//     if (username && password) {
//       // alert(username,password);
//       if (username === "lokesh" && password === "12345") {
//         // alert("Valid username and password");
//         // const location=useLocation();
//         // const navigation=useNavigate();
//         navigation("/login/dashboard");
//         setPopup(false);

//         setValid(true);
//         setError(false);
//         // if(localStorage.)
//         localStorage.setItem("user", username);
//         // localStorage.setItem("valid", true);

//         // Navigate replace to = "/login/dashboard" / >
//       } else {
//         setValid(false);
//         setError(true);
//         setPopup(true);
//         // alert("Invalid username or password");
//         // <Navigate to="/login/dashboard"/>
//       }
//       localStorage.setItem("valid", valid);
//       // if (localStorage.getItem('valid')) {
//       //   localStorage.setItem('valid', valid);
//       // }

//       e.preventDefault();
//       const entry = [...username, ...password];
//       setData(entry);
//       // alert(data.username,data.password);
//       // alert(entry.username);
//       setUsername("");
//       setPassword("");
//       // setError(false);
//       // alert(username,password);
//     } else {
//       alert("Invalid credintals");
//       setPopup(true);
//       // <Navigate replace to = "/login"/>
//       navigation("/login");
//     }
//     // e.preventDefault();
//     // const entry = { username: username, password: password };
//     // setData(entry);
//     // console.log(data);
//   };

//   return (
//     <>
//       <form onSubmit={submitform}>
//         <div className="main">
//           {" "}
//           {/* <form onSubmit={submitform}> */}
//           <div className="sub-main">
//             <div>
//               <div className="imgs">
//                 <div className="container-image">
//                   <img
//                     src="data:image/png;base64,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"
//                     alt="profile"
//                     className="profile"
//                   />
//                 </div>
//               </div>{" "}
//               <div>
//                 <h1 className="heading"> LOGIN </h1>{" "}
//                 <div className="shadow p-3 mb-5 bg-body rounded">
//                   {" "}
//                   {/* <img src={email} alt="email" className="email"/> */}{" "}
//                   <input
//                     type="text"
//                     placeholder="Username"
//                     className="shadow p-3 mb-5 bg-body rounded name form-control"
//                     required
//                     name="username"
//                     autoComplete="off"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                   />{" "}
//                 </div>{" "}
//                 <div className="shadow p-3 mb-5 bg-body rounded second-input">
//                   {" "}
//                   {/* <img src={pass} alt="pass" className="email"/> */}{" "}
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     className="shadow p-3 mb-5 bg-body rounded name form-control"
//                     required
//                     name="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />{" "}
//                 </div>{" "}
//                 <div className="login-button">
//                   {" "}
//                   {/* <button type="submit">SUBMIT</button> */}{" "}
//                   <a href="www.google.com" target="_blank">
//                     {" "}
//                     <button type="submit"></button>
//                   </a>
//                   {/* <Popup trigger={popup} setTrigger={setPopup}> */}
//                   {/* <h3> Invalid username or password</h3> */}
//                   {/* </Popup> */}
//                 </div>
//                 <p className="link">
//                   {" "}
//                   {/* <a >Forgot password ?</a>
//                    */}{" "}
//                   {/* <Link>Forgot password?</Link>
//                    */}{" "}
//                   <a href="www.google.com" target="_blank">
//                     {" "}
//                     Forgot password ?{" "}
//                   </a>{" "}
//                   {error ? <h3> Invalid username or password </h3> : <></>}
//                 </p>
//               </div>{" "}
//             </div>
//           </div>{" "}
//           {/* </form>s */}{" "}
//         </div>{" "}
//         {/* <h1 className="error">Invalid username or password</h1> */}{" "}
//         {/* {(!setValid) ?
//             <h1>Invalid username or password</h1>
//             :<h1>Invalid</h1>

//             } */}{" "}
//       </form>{" "}
//       {/* < h1 className = "error" > Invalid username or password < /h1>
//        */}{" "}
//       <div> {/* <h1>Invalid username or password</h1> */} </div>{" "}
//     </>
//   );
// }

// export default LoginUi;

// // import './LoginUi.css';
// // import {
// //   useState
// // } from "react";
// // import {
// //   useLocation,
// //   useNavigate,
// //   Link,
// //   Navigate
// // } from 'react-router-dom';
// // // import { BrowserRouter as Router, Routes ,Route,Navigate} from 'react-router-dom';

// // function LoginUi() {
// //    const location=useLocation();
// //    const navigation=useNavigate();

// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [valid, setValid] = useState(false);
// //   const [error, setError] = useState(false);
// //   const [data, setData] = useState([]);
// //   const submitform = (e) => {
// //     if (username && password) {
// //       // alert(username,password);
// //       if (username === "lokesh" && password === "12345") {
// //         // alert("Valid username and password");
// //         // const location=useLocation();
// //         // const navigation=useNavigate();
// //         navigation('/login/dashboard');

// //         setValid(true);
// //         setError(false);
// //         // if(localStorage.)
// //         localStorage.setItem('user', username);
// //         // localStorage.setItem("valid", true);
// //         <
// //         // Navigate replace to = "/login/dashboard" / >

// //       } else {
// //         setValid(false);
// //         setError(true);
// //         // alert("Invalid username or password");
// //         // <Navigate to="/login/dashboard"/>
// //       }
// //       localStorage.setItem("valid", valid);
// //       // if (localStorage.getItem('valid')) {
// //       //   localStorage.setItem('valid', valid);
// //       // }

// //       e.preventDefault();
// //       const entry = [...username, ...password];
// //       setData(entry);
// //       // alert(data.username,data.password);
// //       // alert(entry.username);
// //       setUsername("");
// //       setPassword("");
// //       // setError(false);
// //       // alert(username,password);

// //     } else {
// //       alert("Invalid credintals");
// //       <Navigate replace to = "/login"/>
// //     }
// //     // e.preventDefault();
// //     // const entry = { username: username, password: password };
// //     // setData(entry);
// //     // console.log(data);

// //   }

// //   return ( <
// //       >
// //       <
// //       form onSubmit = {
// //         submitform
// //       } >
// //       <
// //       div className = "main" > {
// //         /* <form onSubmit={submitform}> */
// //       }

// //       <
// //       div className = "sub-main" >
// //       <
// //       div >
// //       <
// //       div className = "imgs" >
// //       <
// //       div className = "container-image" >
// //       <
// img src = "data:image/png;base64,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"
// //       alt = "profile"
// //       className = "profile" / >

// //       <
// //       /div>

// //       <
// //       /div> <
// //       div >
// //       <
// //       h1 className = "heading" > LOGIN < /h1> <
// //       div className = "shadow p-3 mb-5 bg-body rounded" > {
// //         /* <img src={email} alt="email" className="email"/> */
// //       } <
// //       input type = "text"
// //       placeholder = "Username"
// //       className = "shadow p-3 mb-5 bg-body rounded name form-control"
// //       required name = "username"
// //       autoComplete = 'off'
// //       value = {
// //         username
// //       }
// //       onChange = {
// //         (e) => setUsername(e.target.value)
// //       }
// //       /> < /
// //       div > <
// //       div className = "shadow p-3 mb-5 bg-body rounded second-input" > {
// //         /* <img src={pass} alt="pass" className="email"/> */
// //       } <
// //       input type = "password"
// //       placeholder = "Password"
// //       className = "shadow p-3 mb-5 bg-body rounded name form-control"
// //       required name = "password"
// //       value = {
// //         password
// //       }
// //       onChange = {
// //         (e) => setPassword(e.target.value)
// //       }
// //       /> < /
// //       div > <
// //       div className = "login-button" > {
// //         /* <button type="submit">SUBMIT</button> */
// //       } <
// //       a href = "www.google.com"
// //       target = "_blank" > < button type = "submit"
// //       className = "btn heading" > Login < /button></a >
// //       <
// //       /div>

// //       <
// //       p className = "link" > {
// //         /* <a >Forgot password ?</a>
// //          */
// //       } {
// //         /* <Link>Forgot password?</Link>
// //          */
// //       } <
// //       a href = "www.google.com"
// //       target = "_blank" > Forgot password ? < /a> {
// //       (error) ?
// //       <
// //       h3 > Invalid username or password < /h3> :<></ >
// //     }

// //     <
// //     /p>

// //     <
// //     /div> < /
// //   div >

// //     <
// //     /div> {
// //   /* </form>s */
// // } <
// // /div> {
// // /* <h1 className="error">Invalid username or password</h1> */
// // } {
// //   /* {(!setValid) ?
// //             <h1>Invalid username or password</h1>
// //             :<h1>Invalid</h1>

// //             } */
// // } <
// // /form> {
// // /* < h1 className = "error" > Invalid username or password < /h1>
// //  */
// // } <
// // div > {
// //     /* <h1>Invalid username or password</h1> */
// //   } <
// //   /div> < / >
// // );
// // }

// // export default LoginUi;
