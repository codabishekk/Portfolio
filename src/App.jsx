import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const Archive = lazy(() => import("./pages/Archive"));
const Skills = lazy(() => import("./pages/Skills"));

import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-violet-500/30">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="h-1 w-24 bg-violet-500/20 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-violet-500 animate-[loading_1.5s_infinite_ease-in-out]"></div>
          </div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
