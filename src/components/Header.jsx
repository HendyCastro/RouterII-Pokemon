import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="container-fluid bg-secondary  d-flex justify-content-between w-100 m-0 p-0 vh-25">
        <a href="#" className="text-decoration-none text-white ">
          <img src="../Poké_Ball_icon.svg.png" alt="PokemonBall" style={{width:"50px"}} />
        </a>
        <div className="navbar-brand ">

          <NavLink to="/" style={{fontSize:"2vw"}} className={({ isActive }) => isActive && "active-class text-decoration-none text-danger"  || "text-decoration-none text-white"}>
            Home
          </NavLink>
          <NavLink to="/pokemones" style={{fontSize:"2vw"}} className={({ isActive }) => isActive && "active-class text-decoration-none text-danger p-3 " || "text-decoration-none text-white p-3"}>
            Pokemones
          </NavLink>
        </div>
      </div>
    </>
  );
}
