import { Link } from "react-router-dom"

const Navbar=() => {
    return(
<div className="">
<nav className="navbar navbar-expand-lg bg-black text-white d-flax g-5">
  <div className="container-fluid">
    <Link className="navbar-brand text-info fs-2" to="/">Recipies</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 p-1 d-flax gap-5 text-white">
        <li className="nav-item">
          <Link className=" btn btn-outline-info w-100 fs-5" aria-current="page" to="/">Home</Link>
        </li>
    
      </ul>
    </div>
  </div>
</nav>

</div>
    )
}

export default Navbar;