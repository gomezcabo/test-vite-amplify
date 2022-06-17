import "./App.css";

import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({
  Auth: {
    region: "us-east-1", // REQUIRED - Amazon Cognito Region
    userPoolId: "us-east-1_zQdJWqzWa", // OPTIONAL - Amazon Cognito User Pool ID
    userPoolWebClientId: "25tqsnvrfp7tqaruigmoiom907", // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
  },
});

function Auth() {
  return (
    <div className="tw-w-full tw-flex tw-flex-col tw-p-12 tw-items-center">
      <img
        className="tw-w-64 tw-mb-12"
        src="https://dev-cd.energyconnexxion.com/connexxion/static/images/ConnexxionByLynxspringLogo-navbar.png"
      />
      <Authenticator />
    </div>
  );
}

function Home() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <main className="tw-p-12 tw-w-100">
      <header className="tw-text-right tw-w-full">
        <button onClick={signOut} className="tw-cursor-pointer tw-underline">
          Sign Out
        </button>
      </header>

      <h1 className="tw-font-bold tw-text-orange-500">
        Hello, {user?.username}
      </h1>
      <div className="tw-mt-10">
        This is just a placeholder page for authenticated users
      </div>
    </main>
  );
}

function App() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  return authStatus !== "authenticated" ? <Auth /> : <Home />;
}

export default App;
