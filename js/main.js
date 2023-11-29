// generates the grid

        // Extract puzzle size from URL parameters
        function getParameterByName(name) {
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(window.location.href);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }

        // Generate the grid
        function generateGrid(size) {
            var grid = document.getElementById('kenken-grid');
            grid.innerHTML = ''; // Clear existing grid

            for (var i = 0; i < size; i++) {
                var row = document.createElement('div');
                row.className = 'grid-row';
                for (var j = 0; j < size; j++) {
                    var cell = document.createElement('div');
                    cell.className = 'grid-cell';
                    row.appendChild(cell);
                }
                grid.appendChild(row);
            }
        }

        // On load
        window.onload = function() {
            var size = getParameterByName('puzzleSize'); // Get size from URL
            if (size) generateGrid(size); // Generate grid if size is provided
        };