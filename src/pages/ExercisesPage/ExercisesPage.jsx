import { Suspense } from "react";

import { NavLink, Outlet } from "react-router-dom";

const ExercisesPage = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="vanilajs">vanilajs</NavLink>
        </li>

        <li>
          <NavLink to="react">react</NavLink>
        </li>
      </ul>

      <Suspense fallback={<p>Loading inside ExercisesPage...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ExercisesPage;
