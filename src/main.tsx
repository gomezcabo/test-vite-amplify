import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./polyfills";

Amplify.configure({
  Auth: {
    region: "us-east-1", // REQUIRED - Amazon Cognito Region
    userPoolId: "us-east-1_zQdJWqzWa", // OPTIONAL - Amazon Cognito User Pool ID
    userPoolWebClientId: "25tqsnvrfp7tqaruigmoiom907", // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    cookieStorage: {
      domain: "localhost", // REQUIRED - Cookie domain (only required if cookieStorage is provided)
      expires: 0.05,
      sameSite: "strict", // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
      secure: true, // OPTIONAL - Cookie secure flag
    },
  },
});

const Auth = () => (
  <div className="tw-w-full tw-flex tw-flex-col tw-p-12 tw-items-center">
    <img
      className="tw-w-64 tw-mb-12"
      src="ConnexxionByLynxspringLogo-navbar.png"
    />
    <Authenticator />
  </div>
);

const AppMain = () => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  return authStatus !== "authenticated" ? <Auth /> : <App />;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <AppMain />
    </Authenticator.Provider>
  </React.StrictMode>
);
