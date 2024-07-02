"use client";
import React from "react";
import { UserAuth } from "./_utils/auth-context";
import Link from "next/link";

function page() {
  const { user, gitHubSignIn, firebaseSignOut } = UserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log("Sign up unsuccessful");
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log("Sign out unsuccessful");
    }
  };

  return !user ? (
    <div>
      <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
      <button onClick={handleSignIn} className="text-xl">
        Sign in with Github
      </button>
    </div>
  ) : (
    <div>
      <div>
        <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
        <p className="text-xl">Signed in as {user.email}</p>
        <button onClick={handleSignOut} className="text-xl">
        Sign out
      </button>
        <br/>
        <Link href="/week-8/shopping-list" className="text-xl">Continue to your Shopping List</Link>
      </div>
    </div>
  );
}

export default page;
