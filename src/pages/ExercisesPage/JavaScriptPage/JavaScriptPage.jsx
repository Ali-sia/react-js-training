import { Suspense } from "react";

import { NavLink, Outlet, useLocation } from "react-router-dom";

const JavaScriptPage = () => {
  const location = useLocation();
  return (
    <>
      <ol>
        <li>
          <NavLink to="colorFlipper" state={{ from: location }}>
            ColorFlipper
          </NavLink>
        </li>
        <li>
          <NavLink to="counter" state={{ from: location }}>
            Counter
          </NavLink>
        </li>
      </ol>

      <Suspense fallback={<p>Loading inside JS exercises...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default JavaScriptPage;
