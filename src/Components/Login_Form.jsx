

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login_Form() {

  const navigate = useNavigate();


  const [input, setInput] = useState({
    email: "",
    password: "",
  })

  const handleLogin = (e) => {
    e.preventDefault();

    const emailId = e.target.email.value;
    const Pass = e.target.password.value;

    console.log(`Email is : ${emailId}`);
    console.log(`Password is : ${Pass}`);

    if (input.email === "saurabh@gmail.com" && input.password === "1919") {

      navigate("/home");
    }
    else {

      alert("please enter the right email or password");
    }


  }

  return (
    <div className="flex w-full h-screen ">
      <div className="w-full flex justify-center items-center
    lg:w-1/2">
        <div className="bg-white px-20 py-20 rounded-3xl border-2 border-gray-200">
          <div className="text-center">
            <h1 className="text-5xl font-semibold">Welcome</h1>
            <p className="text-lg font-medium text-gray-500 mt-4">Please enter your credentials. </p>
          </div>
          <form onSubmit={handleLogin}>
            <div className=" mt-8 last:">
              <label htmlFor="" className="text-lg font-medium ">Email : </label>
              <input type="text" name="email" value={input.email}
                onChange={(e) => {
                  setInput({
                    ...input, [e.target.name]: e.target.value,
                  })
                }}
                className="w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl"
                placeholder="Enter Your Email.." />
            </div>

            <div className=" mt-8 last:">
              <label htmlFor="" className="text-lg font-medium ">Password : </label>
              <input type="text" name="password" value={input.password}
                onChange={(e) => {
                  setInput({
                    ...input, [e.target.name]: e.target.value,
                  })
                }} className="w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl"
                placeholder="Enter Your Password.." />
            </div>

            <div className="mt-8 flex justify-between items-center">
              <div>
                <input type="checkbox" id="Remember" />
                <label htmlFor="Remember" className="ml-2 font-medium text-base">Remember for 30 days</label>
              </div>
              <button className="font-medium text-base text-violet-500 active:scale-[.98] avtive:duration-75 hover:scale-[1.01] ease-in-out transition-all ">Forgot password </button>
            </div>

            <div className=" mt-8 flex flex-col gap-y-4">
              <button type="submit" className=" text-center bg-violet-500 text-white font-bold py-3 rounded-xl active:scale-[.98] avtive:duration-75 hover:scale-[1.01] ease-in-out transition-all">Sign in</button>
              <button className="flex border-2 border-gray-200 rounded-xl py-3 items-center justify-center gap-2 active:scale-[.98] avtive:duration-75 hover:scale-[1.01] ease-in-out transition-all ">

                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /><path d="M1 1h22v22H1z" fill="none" /></svg>
                Sign in with Google</button>
            </div>

          </form>

          <div className="mt-5 flex justify-center align-items-sm-center">
            <p className="text-base font-medium ">Don't have an account?</p>

            <Link to={"/Registration"} className="text-base font-bold text-violet-500 ml-2 active:scale-[.98] avtive:duration-75 hover:scale-[1.01] ease-in-out transition-all ">Sign Up</Link>
          </div>

        </div>

      </div>
      <div className=" hidden relative  lg:flex h-full  w-1/2 bg-gray-200 items-center justify-center">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-700 to-pink-700 rounded-full animate-bounce  " />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg " />
      </div>
    </div>
  );
}
export default Login_Form;