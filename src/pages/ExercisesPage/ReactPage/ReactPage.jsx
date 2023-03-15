import { Suspense } from "react";

import { NavLink, Outlet } from "react-router-dom";

const ReactPage = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="task1_react">task 1 react</NavLink>
        </li>
      </ul>

      <Suspense fallback={<p>Loading inside ExercisesPage...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ReactPage;
