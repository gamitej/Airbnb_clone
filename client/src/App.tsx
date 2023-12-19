import { Suspense } from "react";
import Router from "@/routes/router";
import { Toaster } from "react-hot-toast";
// comp
import { Navbar } from "@/components";
import Modal from "@/components/Modals/Modal";

function App() {
  return (
    <div>
      {/* toast notification */}
      <Toaster position="top-center" reverseOrder={false} />

      <Modal
        title="hello world"
        isOpen
        disabled
        actionLabel="hi"
        onClose={() => {}}
        onSubmit={() => {}}
        secondaryAction={() => {}}
      />
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
