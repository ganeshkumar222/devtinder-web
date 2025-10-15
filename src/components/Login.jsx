import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constant";

const schema = z.object({
  emailId: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const Login = () => {
  const dispatch =  useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues:{
      emailId:"gkbhai2323@gmail.com",
      password:"Kumar123#"
    }
  });

  const onSubmit =async (data) => {
    console.log(data)
 
    try {
       const response = await axios.post(BASE_URL + "/login",data,{withCredentials:true})
console.log(response)
   dispatch(addUser(response.data))
   navigate("/")

    } catch (error) {
      console.log(error)
    }
   
    // Later replace this with axios.post("/api/login", data)
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center">
      <div className="card bg-neutral w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email ID</legend>
              <input
                type="email"
                className="input"
                placeholder="Enter your email"
                {...register("emailId")}
              />
              {errors.email && (
                <span className="text-error text-sm">
                  {errors.email.message}
                </span>
              )}
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input"
                placeholder="Enter your password"
                {...register("password")}
              />
              {errors.password && (
                <span className="text-error text-sm">
                  {errors.password.message}
                </span>
              )}
            </fieldset>

            <div className="card-actions justify-center">
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
