"use client";
import { useState, useEffect, FormEvent } from "react";

interface User {
  mobile: string;
  password: string;
  name?: string;
}

export default function Authentication() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [mobile, setMobile] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUsers: User[] =
        JSON.parse(localStorage.getItem("users") || "[]");
      setUsers(storedUsers);
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isLogin) {
      // Register new user
      if (!users.find((u) => u.mobile === mobile)) {
        const newUser: User = { mobile, password, name };
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setIsLogin(true);
      }
    }

    // Clear inputs
    setMobile("");
    setPassword("");
    setName("");
  };

  return (
    <div className="p-6 border rounded w-80 mx-auto mt-10 shadow-md">
      <h3 className="text-xl font-bold mb-3 text-center">
        {isLogin ? "Login" : "Register"}
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile"
          className="border p-2 rounded"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className="border p-2 rounded"
          required
        />
        {!isLogin && (
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="border p-2 rounded"
            required
          />
        )}
        <button
          type="submit"
          className="bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <p className="text-center mt-3 text-sm">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-green-600 hover:underline"
        >
          {isLogin ? "Create new account" : "Back to Login"}
        </button>
      </p>
    </div>
  );
}
