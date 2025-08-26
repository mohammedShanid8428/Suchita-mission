"use client";
import { useState } from "react";

export default function AuthCard() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-96">
      <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">
        {isLogin ? "Login" : "Register"}
      </h3>
      <form className="flex flex-col space-y-4">
        
        <input
          type="text"
          placeholder="Mobile Number"
          className="border rounded-lg px-4 py-2 focus:outline-green-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded-lg px-4 py-2 focus:outline-green-500"
        />

    
        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            className="border rounded-lg px-4 py-2 focus:outline-green-500"
          />
        )}

        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <p className="text-sm text-gray-600 text-center mt-4">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-green-600 font-semibold hover:underline"
        >
          {isLogin ? "Register" : "Login"}
        </button>
      </p>
    </div>
  );
}
