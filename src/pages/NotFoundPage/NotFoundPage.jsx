import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>Opsss! This page doesn&apos;t exist</p>

      <Link to="/">Open home page</Link>
    </div>
  );
};

export default NotFoundPage;
