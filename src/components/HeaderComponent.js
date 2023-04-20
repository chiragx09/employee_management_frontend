import React from 'react'

const HeaderComponent = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand ms-4" href="/">
    Emp System
  </a>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link active" href="/">
          Home 
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="addemp">
          Add Emp
        </a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link active" href="/logout">
          Logout
        </a>
      </li> */}
    </ul>
  </div>
</nav>

        </div>
    )
}

export default HeaderComponent