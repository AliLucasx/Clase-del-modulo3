let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio: 9,
      curso: 'Android',
    },
    {
      nombre: 'Daniel',
      promedio: 6,
      curso: 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio: 3,
      curso: 'iOS',
    },
  ];
  
  let nuevoEstudiante1 = {
    nombre: 'Juan',
    promedio: 5,
    curso: 'iOS',
  };
  
  let nuevoEstudiante2 = {
    nombre: 'Miguel',
    promedio: 2,
    curso: 'Android',
  };
  
  estudiantes.push(nuevoEstudiante1);
  estudiantes.push(nuevoEstudiante2);
  
  console.log(estudiantes);