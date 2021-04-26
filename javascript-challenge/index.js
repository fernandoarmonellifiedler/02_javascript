// test: Número más alto de celdas por rows.

function contar() {
  let table = document.getElementsByTagName('table');

  // check si hay tablas en el documento
  if (table[0] === undefined || null)
    return console.log('No hay tablas en el documento!');

  let countArr = [];
  let countTotal = [];

  // iterar sobre cada tabla
  for (let i = 0; i < table.length; i++) {
    let majorNum = 0;
    let cantTotal = 0;

    // itera sobre cada row
    for (let j = 0; j < table[i].rows.length; j++) {
      let cells = table[i].rows[j].cells['length'];
      cantTotal += cells;
      if (cells > majorNum) {
        // agrega el valor más alto en cada iteración
        majorNum = cells;
      }
    }

    // envía a countArr el número más alto de celdas en un mismo tr
    countArr.push(majorNum);
    countTotal.push(cantTotal);
  }

  // Algunos resultados
  let rowConMasCeldas = countArr[0];
  let index = 0;
  console.log(`Número más alto de celdas por rows:`);
  for (let i in countArr) {
    console.log(`Tabla ${Number(i) + 1}: ${countArr[i]}`);
    if (countArr[i] > rowConMasCeldas) {
      rowConMasCeldas = countArr[i];
      index = i;
    }
  }
  console.log(
    `La tabla con mayor cantidad de celdas en una sola row es la número ${
      Number(index) + 1
    } con ${rowConMasCeldas} celdas.`
  );

  let tablaConMasCeldas = countTotal[0];
  let indexTabla = 0;
  for (let i in countTotal) {
    if (countTotal[i] > tablaConMasCeldas) {
      tablaConMasCeldas = countTotal[i];
      indexTabla = i;
    }
  }
  console.log(
    `La tabla con mayor cantidad de celdas en total es la número ${
      Number(indexTabla) + 1
    } con ${tablaConMasCeldas} celdas.`
  );
}
