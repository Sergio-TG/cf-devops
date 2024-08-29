// components/Hours.js

import React from 'react';

const Hours = () => {
  // Obtener el día actual (puedes ignorar la zona horaria del usuario)
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (domingo) a 6 (sábado)

  // Definir las horas de apertura según el día de la semana
  const openingHours = {
    0: '9 a.m. - 8 p.m.', // Domingo
    1: '10 a.m. - 4 p.m.', // Lunes
    2: '10 a.m. - 4 p.m.', // Martes
    3: '10 a.m. - 4 p.m.', // Miércoles
    4: '10 a.m. - 4 p.m.', // Jueves
    5: '10 a.m. - 4 p.m.', // Viernes
    6: '9 a.m. - 8 p.m.', // Sábado
  };

  // Obtener las horas de apertura para el día actual
  const hoursToday = openingHours[dayOfWeek];

  return (
    <div>
      <h2>Horario de hoy: {hoursToday}</h2>
      <p>De lunes a viernes: 10 a.m. - 4 p.m.</p>
      <p>Sábados y domingos: 9 a.m. - 8 p.m.</p>
    </div>
  );
};

export default Hours;
