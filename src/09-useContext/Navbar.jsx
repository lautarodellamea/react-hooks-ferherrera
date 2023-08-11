import { Link, NavLink } from "react-router-dom";
{
  /* Los Link solo me recargan los componentes y no todo */
}
/* El navLink se encarga de la navegacion */

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          useContext
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/login"
            >
              Login
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/about"
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

/* aca vemos cuando esta activo el link */
{
  /* <NavLink
  className={(args) => {
    console.log(args);
    return "nav-link";
  }}
  to="/login"
>
  Login
</NavLink>; */
}
