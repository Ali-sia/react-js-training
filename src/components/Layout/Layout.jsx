import { NavLink } from "react-router-dom";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="d-flex h-100">
        <aside>
          <div>
            <NavLink to="/">Home page</NavLink>
            <NavLink to="exercises">Exercises</NavLink>
          </div>
        </aside>

        <main style={{ minHeight: "100vh" }}>
          <div>{children}</div>
        </main>
      </div>
    </>
  );
};
