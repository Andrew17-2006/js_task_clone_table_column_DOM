'use strict';

function cloneTableColumn(table, fromIndex, insertBeforeIndex) {
  const sections = ['thead', 'tbody', 'tfoot'];

  sections.forEach((section) => {
    const part = table.querySelector(section);

    if (!part) {
      return;
    }

    const rows = part.rows;

    for (const row of rows) {
      const cells = row.cells;
      const cellToClone = cells[fromIndex];

      if (!cellToClone) {
        continue;
      }

      const clonedCell = cellToClone.cloneNode(true);

      row.insertBefore(clonedCell, cells[insertBeforeIndex]);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  cloneTableColumn(table, 1, 4);
});
