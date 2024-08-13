import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Axios from './hooks/useAxios'

import './nav.css'
const Navigation = () => {
  const [user, setUser] = useState('')

  useEffect(() => {
    Axios('POST', 'login/validacion', null)
      .then((res) => {
        setUser(res.data.user.usuario)
        console.log(res.data.user.usuario)
      })
      .catch(err => {
        console.log(err.response.data)
      })
  },[])
  function deleteAllCookies() {
    // Obtén todas las cookies
    const cookies = document.cookie.split(';');

    // Recorre cada cookie y elimínala
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

      // Configura la cookie con una fecha de expiración pasada
      document.cookie = name + '=; Max-Age=0; path=/; domain=' + window.location.hostname;
    }
  }

  const logout = () => {
    deleteAllCookies()
  }

  return <nav>
    <div className="logo">ABOGADOSFM</div>
    <ul className="nav-links">
      {user && (
        <>
          <li><Link to='/home'>Casos</Link></li>
        </>
      )}
      {user === 'admin' && (
        <>
          <li><Link to='/dashboard'>Gestion</Link></li>
        </>
      )}
      <li><Link to='/ayuda'>Ayuda</Link></li>
      {user && (
        <>
          <li className="tooltip">
            <Link to='/landing' onClick={logout}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                <path d="M9 12h12l-3 -3" />
                <path d="M18 15l3 -3" />
              </svg>
              <span className="tooltiptext">¿Deseas Cerrar Sesión?</span>
            </Link></li>
          <li className="tooltip">
            <Link>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
              </svg>
              <span className="tooltiptext">{user}</span>
            </Link></li>
        </>
      )}
      {user === '' && (
        <>
          <li><Link to='/'><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-login" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
            <path d="M21 12h-13l3 -3" />
            <path d="M11 15l-3 -3" />
          </svg></Link></li>
        </>
      )}

    </ul>
    <div className="search-icon">
    </div>
    <div className="menu-icon">
      <button className="menu">☰</button>
    </div>
  </nav>
}

export default Navigation