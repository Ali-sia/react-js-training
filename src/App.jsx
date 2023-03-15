import "./App.css";

import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";

import { Layout } from "./components/Layout/Layout";
import { Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ExercisesPage = lazy(() => import("./pages/ExercisesPage/ExercisesPage"));
const JavaScriptPage = lazy(() =>
  import("./pages/ExercisesPage/JavaScriptPage/JavaScriptPage")
);
const ColorFlipper = lazy(() =>
  import("./pages/ExercisesPage/JavaScriptPage/ColorFlipper/ColorFlipper")
);
const Counter = lazy(() =>
  import("./pages/ExercisesPage/JavaScriptPage/Counter/Counter")
);
const ReactPage = lazy(() =>
  import("./pages/ExercisesPage/ReactPage/ReactPage")
);
const Task1React = lazy(() =>
  import("./pages/ExercisesPage/ReactPage/Task1React")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <BrowserRouter basename="react-js-training">
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exercises">
              <Route index element={<ExercisesPage />} />
              <Route path="vanilajs">
                <Route index element={<JavaScriptPage />} />
                <Route path="colorFlipper" element={<ColorFlipper />} />
                <Route path="counter" element={<Counter />} />
              </Route>
              <Route path="react">
                <Route index element={<ReactPage />} />
                <Route path="task1_react" element={<Task1React />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
