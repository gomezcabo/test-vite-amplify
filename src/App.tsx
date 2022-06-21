import "./App.css";

import { useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App() {
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

export default App;
