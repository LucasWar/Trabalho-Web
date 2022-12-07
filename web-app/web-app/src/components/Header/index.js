import { useContext } from 'react';
import StoreContext from '../Store/Context';

export default function Header() {
  
  const { setToken } = useContext(StoreContext);
  function handleLogout(){
    setToken('');
    alert('Sessão encerrada');
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg mt-3" style={{ backgroundColor: '#F6F5FC' }} >
        <a className="navbar-brand ms-3" href="/">
          ClassHub
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex flex-row-reverse me-3"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active me-3">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item active me-3">
              <a className="nav-link" href="/cursos">
                Cursos
              </a>
            </li>
            <li className="nav-item active me-3">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item active me-3">
              <a className="nav-link" href="/register">
                Cadastre-se
              </a>
            </li>
            <li className="nav-item active me-3">
              <button
                style={{
                  borderRadius: '10px',
                  padding: '5px',
                  borderColor: '#5640ca'
                }} 
                onClick={() => handleLogout()}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </>
  );
}