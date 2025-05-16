import React from 'react';
import '../styles/MaintenanceOverlay.sass';

const MaintenanceOverlay: React.FC = () => {
  return (
    <div className="maintenance-overlay">
      <div className="maintenance-overlay__content">
        <h1>Manutenção</h1>
        <p>15/05 - 18/05</p>
      </div>
    </div>
  );
};

export default MaintenanceOverlay;
