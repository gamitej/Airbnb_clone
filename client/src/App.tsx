import { Suspense } from "react";
// router
import Router from "@/routes/router";
// libs
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      {/* toast notification */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* react suspense & routes */}
      <Suspense fallback={<h2>loading...</h2>}>
        <Router isLoggedIn={true} />
      </Suspense>
    </div>
  );
}

export default App;
