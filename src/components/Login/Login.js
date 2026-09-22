import { useState } from 'react';
import './Login.css';

// Iconos simples en SVG (sin dependencias externas)
const CartIcon = ({ color = '#ffffff', size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
    <path d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20.5 8H6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="20.5" r="1.3" fill={color} stroke="none" />
    <circle cx="17" cy="20.5" r="1.3" fill={color} stroke="none" />
  </svg>
);

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="1.8">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
  </svg>
);

const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="1.8">
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" strokeLinecap="round" />
  </svg>
);

function Login({ onLoginSuccess }) {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!usuario.trim() || !contrasena.trim()) {
      setError('Por favor completa usuario y contraseña.');
      return;
    }

    setCargando(true);
    try {
      // TODO: reemplazar este bloque por la llamada real a Spring Boot, por ejemplo:
      // const res = await fetch('http://localhost:8080/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ userName: usuario, contrasena }),
      // });
      // if (!res.ok) throw new Error('Credenciales inválidas');
      // const data = await res.json();

      // Mock temporal mientras no hay backend conectado
      await new Promise((resolve) => setTimeout(resolve, 400));
      const data = { nombre: usuario, rol: 'Administrador' };

      if (onLoginSuccess) onLoginSuccess(data);
    } catch (err) {
      setError('Usuario o contraseña incorrectos.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-panel-izquierdo">
        <div className="login-logo-circulo">
          <CartIcon size={44} />
        </div>
        <h1 className="login-marca">GLOBAL EXPRESS</h1>
        <p className="login-subtitulo">Minimarket</p>
      </div>

      <div className="login-panel-derecho">
        <div className="login-form-wrapper">
          <div className="login-encabezado">
            <div className="login-logo-pequeno">
              <CartIcon size={22} />
            </div>
            <h2>BIENVENIDO</h2>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <label className="login-label" htmlFor="usuario">
              <UserIcon /> Usuario
            </label>
            <input
              id="usuario"
              type="text"
              className="login-input"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              autoComplete="username"
            />

            <label className="login-label" htmlFor="contrasena">
              <LockIcon /> Contraseña
            </label>
            <input
              id="contrasena"
              type="password"
              className="login-input"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              autoComplete="current-password"
            />

            {error && <p className="login-error">{error}</p>}

            <button type="submit" className="login-boton" disabled={cargando}>
              {cargando ? 'Ingresando...' : 'Ingresar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
