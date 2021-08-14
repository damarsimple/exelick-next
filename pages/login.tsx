import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import AppContainer from "../components/AppContainer";
import { AiFillGoogleCircle } from "react-icons/ai";
import { gql, useMutation } from "@apollo/client";
import { User } from "../types/type";
import { useAuthStore } from "../store/auth";
import { CORE_USER_INFO_MINIMAL_FIELD } from "../fragments/fragments";
import { client } from "./_app";
import { useUserStore } from "../store/user";
import { getMyCredentials } from "../helpers/auth";

const LOGIN = gql`
  ${CORE_USER_INFO_MINIMAL_FIELD}
  mutation Login($password: String!, $email: String!) {
    login(input: { password: $password, email: $email }) {
      message
      token
      user {
        ...CoreUserInfoMinimalField
      }
    }
  }
`;

export interface LoginOutput {
  token: string;
  user: User;
  message: string;
}
export default function Login() {
  const router = useRouter();

  const { setToken } = useAuthStore();

  const { setUser } = useUserStore();

  const [handleLogin, { data, loading, error }] = useMutation<{
    login: LoginOutput;
  }>(LOGIN, {
    onCompleted: async (e) => {
      if (e.login.token) {
        setToken(e.login.token);
        setUser(e.login.user);

        getMyCredentials();

        router.push("/dashboard");
      }
    },
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    handleLogin({
      variables: {
        email: username,
        password: password,
      },
    });
  };

  return (
    <AppContainer title="Login" without={["navbar"]}>
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
            <div className="p-4 py-6 text-white md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
              <Image
                className="rounded-full h-24 w-24 "
                src="https://trakteer.id/storage/images/avatar/ava-kqwK2sVxMEXfACgq0luplMIrcWAm9eGA1617518306.jpg"
                alt="Picture of the author"
                height={300}
                width={300}
              />
            </div>
            <div className="p-5 bg-white md:flex-1">
              <h3 className="my-4 text-2xl font-semibold text-gray-700">
                Login
              </h3>
              <h4 className="h-4 my-4 text-lg font-thin  italic text-red-600">
                {data?.login?.message} {error?.message}
              </h4>
              <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Email address
                  </label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    type="email"
                    id="email"
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-gray-500"
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline focus:text-blue-800"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="password"
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                  >
                    Log in
                  </button>
                </div>
                <div className="flex flex-col space-y-5">
                  <span className="flex items-center justify-center space-x-2">
                    <span className="h-px bg-gray-400 w-14" />
                    <span className="font-normal text-gray-500">
                      or login with
                    </span>
                    <span className="h-px bg-gray-400 w-14" />
                  </span>
                  <div className="flex flex-col space-y-4">
                    <button className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none">
                      <span>
                        <AiFillGoogleCircle size="1.5em" />
                      </span>
                      <span className="text-sm font-medium text-gray-800 group-hover:text-white">
                        Google
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  );
}
