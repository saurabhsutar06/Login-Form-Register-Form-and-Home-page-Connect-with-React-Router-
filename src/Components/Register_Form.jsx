import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const Register_Form = () => {
  const navigate = useNavigate();

  const [gender, setGender] = useState();
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    mob: "",
    address: "",
    password: "",
    conf_password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const fname = e.target.name.value;
    const lname = e.target.lname.value;
    const emailId = e.target.email.value;
    const mob = e.target.mob.value;
    const address = e.target.address.value;
    const pass = e.target.password.value;
    const confpass = e.target.conf_password.value;

    console.log(`First Name is : ${fname}`);
    console.log(`Last Name is : ${lname}`);
    console.log(`Email id is : ${emailId}`);
    console.log(`Mobile Number is : ${mob}`);
    console.log(`Gender is : ${gender}`);
    console.log(`Address is : ${address}`);
    console.log(`Pssword is : ${pass}`);
    console.log(`Confirm Password is : ${confpass}`);

    navigate("/Login")

  }


  return (
    <div className="flex w-full h-screen " >


      <div className=" hidden relative  lg:flex h-full  w-2/5 bg-gray-200 items-center justify-center">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-700 to-pink-700   animate-[spin_10s_linear_infinite]  " />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg " />
      </div>

      <div className="w-full p-30 flex justify-center items-center
    lg:w-3/5">

        <div className=" bg-white  px-12 py-12 rounded-3xl border-2 border-gray-200">
          <div className="text-center">
            <h1 className="  text-3xl mb-1 font-semibold">Welcome..! Please enter your details.</h1>

          </div>
          <form action="" onSubmit={handleSubmit}>

            <div className=" grid grid-cols-2 gap-10">
              <div className=" mt-4 ">
                <label htmlFor="" className="text-lg font-medium ">First Name : </label>
                <input type="text" name="name" value={input.name} onChange={
                  (e) => {
                    setInput({
                      ...input, [e.target.name]: e.target.value,
                    })
                  }
                } className="w-full p-3 mt-1  bg-transparent border-2 border-gray-100 rounded-xl"
                  placeholder="Enter Your Name.." />
              </div>

              <div className=" mt-4 ">
                <label htmlFor="" className="text-lg font-medium ">Last Name : </label>
                <input type="text" name="lname" value={input.lname}
                  onChange={(e) => {
                    setInput({
                      ...input, [e.target.name]: e.target.value,
                    })
                  }} className="w-full p-3 mt-1 bg-transparent border-2 border-gray-100 rounded-xl"
                  placeholder="Enter Your last number.." />
              </div>
            </div>

            <div className=" mt-4 ">
              <label htmlFor="" className="text-lg font-medium ">Email : </label>
              <input type="text" name="email" value={input.email}
                onChange={(e) => {
                  setInput({
                    ...input, [e.target.name]: e.target.value,
                  })
                }} className="w-full p-3 mt-1 bg-transparent border-2 border-gray-100 rounded-xl"
                placeholder="Enter Your Email.." />
            </div>

            <div className=" grid grid-cols-2 gap-10">
              <div className=" mt-4 ">
                <label htmlFor="" className="text-lg font-medium ">Mobile No : </label>
                <input type="text" name="mob" value={input.mob}
                  onChange={(e) => {
                    setInput({
                      ...input, [e.target.name]: e.target.value,
                    })
                  }} className="w-full p-3 mt-1 bg-transparent border-2 border-gray-100 rounded-xl"
                  placeholder="Enter Your mobile number.." />
              </div>

              <div className=" mt-4 ">
                <label htmlFor="" className="text-lg font-medium ">Gender : </label>
                <div className="flex gap-3 mt-3 justify-center">
                  <input
                    className="h-5 w-5 items-center justify-center mt-1
                    hover:via-violet-500 "
                    type="radio"
                    name="agreed-to-terms"
                    id="agree-yes"
                    value="male"
                    checked={gender === 'male'}
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}

                  />
                  <label htmlFor="agree-yes" className="text-xl font-semibold mr-12 hover:text-violet-700 ">Male</label>


                  <input
                    className="h-5 w-5 items-center justify-center mt-1 hover:via-violet-500 "
                    type="radio"
                    name="agreed-to-terms"
                    id="agree-no"
                    value="female"
                    checked={gender === 'female'}
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                  />
                  <label htmlFor="agree-no" className="text-xl font-semibold hover:text-violet-700  ">Female</label>
                </div>
              </div>

            </div>

            <div className=" mt-4 ">
              <label htmlFor="" className="text-lg font-medium ">Address : </label>
              <textarea name="address" value={input.address}
                onChange={(e) => {
                  setInput({
                    ...input, [e.target.name]: e.target.value,
                  })
                }} className="w-full p-3 mt-1 bg-transparent border-2 border-gray-100 rounded-xl"
                placeholder="Enter Your address.." />
            </div>


            <div className=" grid grid-cols-2 gap-10">
              <div className=" mt-4 ">
                <label htmlFor="" className="text-lg font-medium ">Create Password : </label>
                <input type="text" name="password" value={input.password} onChange={(e) => {
                  setInput({
                    ...input, [e.target.name]: e.target.value,
                  })
                }} className="w-full p-3 mt-1 bg-transparent border-2 border-gray-100 rounded-xl"
                  placeholder="Enter Your Password.." />
              </div>

              <div className=" mt-4 last:">
                <label htmlFor="" className="text-lg font-medium ">Confirm Password : </label>
                <input type="text" name="conf_password" value={input.conf_password}
                  onChange={(e) => {
                    setInput({
                      ...input, [e.target.name]: e.target.value,
                    })
                  }} className="w-full p-3 mt-1 bg-transparent border-2 border-gray-100 rounded-xl"
                  placeholder="Enter Your confirm password.." />
              </div>
            </div>
            <div className=" mt-6 flex flex-col gap-y-4">

              <button type="submit" className=" text-center bg-violet-500 text-white font-bold py-3 rounded-xl active:scale-[.98] avtive:duration-75 hover:scale-[1.01] ease-in-out transition-all">Sign Up</button>

            </div>

          </form>

          <div className="mt-5 flex justify-center align-items-sm-center">
            <p className="text-base font-medium ">Already have an account?</p>

            <Link to={"/Login"} className="text-base font-bold text-violet-500 ml-2 active:scale-[.98] avtive:duration-75 hover:scale-[1.01] ease-in-out transition-all ">Sign In</Link>
          </div>

        </div>

      </div>


    </div>
  )
}

export default Register_Form
