import React from 'react';


function Navigation({ onSignOut}) {
    
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-brand btn btn-link" onClick={() => {}}>
        Data Nectar
      </button>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={() => {}}>Home</button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={onSignOut}>Sign out</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
