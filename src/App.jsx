import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";

const Archive = lazy(() => import("./pages/Archive"));
const Skills = lazy(() => import("./pages/Skills"));

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background-base text-foreground-text selection:bg-electric-green selection:text-background-base">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center bg-background-base">
              <div className="flex flex-col items-center gap-4">
                <p className="font-anton text-sm uppercase tracking-[0.3em] text-muted-text">
                  ABISHEK<span className="text-electric-green">.C</span>
                </p>
                <div className="h-px w-28 overflow-hidden bg-border-subtle">
                  <div className="h-full w-1/2 bg-electric-green animate-pulse" />
                </div>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </Suspense>
        <ScrollToTop />
      </div>
    </SmoothScroll>
  );
}

export default App;