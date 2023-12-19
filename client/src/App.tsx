import { Suspense } from "react";
import Router from "@/routes/router";
import { Toaster } from "react-hot-toast";
// comp
import { Navbar } from "./components";

function App() {
  return (
    <div>
      {/* toast notification */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* navbar */}
      <Navbar />

      {/* react suspense & routes */}
      <Suspense fallback={<h2>loading...</h2>}>
        <Router isLoggedIn={true} />
      </Suspense>
    </div>
  );
}

export default App;
