"use client";

import { useState } from "react";
import Link from "next/link";

export function LoginPage() {
  const [role, setRole] = useState("management");

  return (
    <main className="loginPage">
      <div className="loginCard">
        <Link className="backLink" href="/">← Back to Aptixon website</Link>
        <h1>Welcome back</h1>
        <p>Sign in to your Aptixon workspace.</p>
        <div className="roleTabs" role="tablist" aria-label="Login role">
          {["management", "employee", "worker"].map((item) => (
            <button
              type="button"
              role="tab"
              aria-selected={role === item}
              className={role === item ? "active" : ""}
              key={item}
              onClick={() => setRole(item)}
            >
              {item === "worker" ? "Crew Worker" : item[0].toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
        {role === "worker" ? (
          <>
            <label className="loginField">Mobile number<input inputMode="numeric" placeholder="+91 98765 43210" /></label>
            <p className="roleNote">Standard SMS rates apply · 18+ only</p>
          </>
        ) : (
          <>
            <label className="loginField">Aptixon Employee ID<input placeholder="e.g. AE1025" /></label>
            <label className="loginField">Password<input type="password" placeholder="Enter your password" /></label>
          </>
        )}
        <button className="primaryButton loginSubmit" type="button">{role === "worker" ? "Send OTP" : "Sign In"}</button>
      </div>
    </main>
  );
}
