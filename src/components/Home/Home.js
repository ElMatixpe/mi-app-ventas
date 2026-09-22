import { useState } from 'react';
import Sidebar from '../Layout/Sidebar';
import Inicio from '../Inicio/Inicio';
import ModuloPendiente from '../ModuloPendiente/ModuloPendiente';
import { UserPlusIcon, ChevronDownIcon } from '../Icons/icons';
import './Home.css';

const TITULOS = {
  inicio: 'Inicio',
  ventas: 'Ventas',
  productos: 'Productos',
  usuarios: 'Usuarios',
  reportes: 'Reportes',
};

function Dashboard({ usuario, onCerrarSesion }) {
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  const renderContenido = () => {
    if (seccionActiva === 'inicio') return <Inicio usuario={usuario} />;
    return <ModuloPendiente nombre={TITULOS[seccionActiva]} />;
  };

  return (
    <div className="dashboard-layout">
      <Sidebar
        activo={seccionActiva}
        onSeleccionar={setSeccionActiva}
        onCerrarSesion={onCerrarSesion}
      />

      <div className="dashboard-contenido">
        <div className="dashboard-topbar">
          <div className="dashboard-usuario">
            <UserPlusIcon size={30} />
            <div className="dashboard-usuario-texto">
              <span className="dashboard-usuario-nombre">{usuario?.nombre}</span>
              <span className="dashboard-usuario-rol">{usuario?.rol}</span>
            </div>
            <ChevronDownIcon />
          </div>
        </div>
        <hr className="dashboard-separador" />

        <div className="dashboard-main">{renderContenido()}</div>
      </div>
    </div>
  );
}

export default Dashboard;
