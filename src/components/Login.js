import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col">
      <div className="bg-yellow-600 p-1 text-center font-bold">
        <ion-icon name="hammer" />
        &nbsp; Currently in a Staging Environment. To access Production, go to
        connectedbynexus.com
      </div>
      <div className="min-h-screen flex flex-row justify-center items-stretch">
        <LoginSidebar />
        <LoginContent />
      </div>
    </div>
  );
}

function LoginSidebar() {
  //   return <div className="hidden sm:block">LoginSidebar</div>;
  return (
    <div className="hidden lg:block bg-gray-800 lg:w-224 bg-aqua">
      {/* <img
        className="object-cover h-full"
        src="https://stg.nxc2.connectedbynexus.com/static/media/loginbg.123587a4.jpg"
        alt="sidebar-cover-city"
      /> */}
      {/* <div>
        <div>
        </div>
        <div>
          <h2>Welcome to</h2>
          <h1>NexusConnect</h1>
          <div></div>
          <div>
            Manage Payables<span>·</span>Manage Receivables
          </div>
        </div>
      </div> */}
    </div>
  );
}

function LoginContent() {
  return (
    <div className="flex w-full items-center justify-center">
      {/* "Card": */}
      <div className="w-full sm:w-160 mx-4">
        <div className="flex mb-4 justify-between items-baseline">
          <h1 className="text-4xl font-bold">Log in</h1>
          <span>
            or <span className="font-bold text-blue-600">sign up</span>
          </span>
        </div>

        <div className="px-3 py-3 mb-4 rounded border border-red-500 bg-red-100 text-red-500">
          Incorrect email or password!
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="username">
            Email or Username
          </label>
          <input
            className="w-full sm:w-160 p-4 rounded border border-gray-400 bg-gray-100"
            id="username"
            type="text"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="password">
            Password
          </label>
          <input
            className="w-full sm:w-160 p-4 rounded border border-gray-400 bg-gray-100"
            id="password"
            type="password"
          />
        </div>

        <div className="mb-8">
          <span>
            Have an <span className="font-bold text-blue-600">invite code</span>
            ?
          </span>
        </div>

        <button
          className="
          w-full sm:w-160 p-3 rounded border border-blue-900 bg-blue-700 hover:bg-blue-800  text-white font-bold mb-4"
          type="button"
        >
          Log in
        </button>

        <div className="mb-1">
          <span>
            Forgot your{" "}
            <span className="font-bold text-blue-600">password</span>?
          </span>
        </div>

        <div className="mb-1">
          <span>
            First time logging into the new Connect and need a password
            reminder?{" "}
            <span className="font-bold text-blue-600">Click here</span>
          </span>
        </div>

        {/* 
        <button>Log in</button>

        <div>Forgot your password?</div>
        <div>
          First time logging into the new Connect and need a password reminder?
          Click here
        </div> */}
      </div>
    </div>
  );
}

function LoginContent2() {
  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
}
