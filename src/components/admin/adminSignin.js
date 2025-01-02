import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { AuthContext } from "../context/Authcontext";

const AdminSignin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    let isValid = true;

    if (!email) {
      setEmailError("Email is required.");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid.");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    }

    if (!isValid) return;

    if (email === "admin@gmail.com" && password === "admin123") {
      message.success("Login successful!");

      navigate("/admin/dashboard");
    } else {
      if (email !== "admin@gmail.com") {
        setEmailError("Email does not exist. Please check and try again.");
      } else if (password !== "admin123") {
        setPasswordError("The password you entered is incorrect.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-4xl text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    SignIn Here
                  </div>
                </div>
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {emailError && (
                    <p className="text-red-500 text-xs">{emailError}</p>
                  )}

                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {passwordError && (
                    <p className="text-red-500 text-xs">{passwordError}</p>
                  )}
                  <button
                    onClick={handleSignup}
                    className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <span className="ml-2">Sign In</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignin;
