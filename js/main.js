// generates the grid

document.addEventListener('DOMContentLoaded', function() {
    const gridSize = 3; // Size of the grid
    const gridContainer = document.getElementById('kenken-grid');

    for (let row = 0; row < gridSize; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'grid-row';

        for (let col = 0; col < gridSize; col++) {
            const cellDiv = document.createElement('div');
            cellDiv.className = 'grid-cell';
            cellDiv.id = `cell-${row}-${col}`;
            rowDiv.appendChild(cellDiv);
        }

        gridContainer.appendChild(rowDiv);
    }
});
