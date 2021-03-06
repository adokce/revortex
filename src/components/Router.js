import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<p>Home</p>} />
        <Route path="/" element={<Login />} />
        <Route path="users/*" element={<p>users</p>} />
      </Routes>
    </BrowserRouter>
  );
}
