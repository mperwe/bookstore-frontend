import React from "react";
import SigninForm from "../components/SigninForm";

function Signin() {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-6">Sign In</h1>
      <SigninForm />
    </div>
  );
}

export default Signin;
