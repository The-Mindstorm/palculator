const shapeOptions = {
    "2d": [
        { value: "circle", label: "Circle" },
        { value: "triangle", label: "Triangle" },
        { value: "rectangle", label: "Rectangle" },
        { value: "square", label: "Square" },
        { value: "hexagon", label: "Hexagon" }
    ],
    "3d": [
        { value: "sphere", label: "Sphere" },
        { value: "cube", label: "Cube" },
        { value: "cuboid", label: "Cuboid" },
        { value: "cylinder", label: "Cylinder" },
        { value: "cone", label: "Cone" }
    ],
    "euclidean": [
        { value: "parallel_lines", label: "Parallel Lines" },
        { value: "congruent_triangles", label: "Congruent Triangles" }
    ],
    "non_euclidean": [
        { value: "hyperbolic_plane", label: "Hyperbolic Plane" },
        { value: "spherical_triangle", label: "Spherical Triangle" }
    ],
    "differential": [
        { value: "curve_length", label: "Curve Length" },
        { value: "surface_curvature", label: "Surface Curvature" }
    ],
    "algebraic": [
        { value: "ellipse_equation", label: "Ellipse Equation" },
        { value: "parabola_equation", label: "Parabola Equation" }
    ],
    "analytic": [
        { value: "line_equation", label: "Line Equation" },
        { value: "circle_equation", label: "Circle Equation" }
    ],
    "computational": [
        { value: "convex_hull", label: "Convex Hull" },
        { value: "voronoi_diagram", label: "Voronoi Diagram" }
    ],
    "topology": [
        { value: "mobius_strip", label: "Möbius Strip" },
        { value: "torus", label: "Torus" }
    ],
    "fractal": [
        { value: "koch_snowflake", label: "Koch Snowflake" },
        { value: "sierpinski_triangle", label: "Sierpinski Triangle" }
    ],
    "trigonometry": [
        { value: "right_triangle", label: "Right Triangle" },
        { value: "general_triangle", label: "General Triangle" }
    ],
    "coordinate": [
        { value: "distance", label: "Distance Between Points" },
        { value: "midpoint", label: "Midpoint" },
        { value: "section", label: "Section Formula" }
    ]
};

const categorySelect = document.getElementById('category');
const shapeSelect = document.getElementById('shape');

function updateShapeOptions() {
    const selectedCategory = categorySelect.value;
    const options = shapeOptions[selectedCategory] || [];
    shapeSelect.innerHTML = "";
    options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.label;
        shapeSelect.appendChild(option);
    });
}

// Initial population
updateShapeOptions();

// Update on change
categorySelect.addEventListener('change', updateShapeOptions);

const graphCanvas = document.getElementById('geometry-graph');
let chartInstance = null;

function drawGraph(category, shape) {
    if (!graphCanvas) return;

    // Destroy previous chart if exists
    if (chartInstance) {
        chartInstance.destroy();
    }

    // Example: Draw a circle for 2D/circle, triangle for 2D/triangle, etc.
    if (category === "2d" && shape === "circle") {
        // Draw a circle using Chart.js (as a polar area)
        chartInstance = new Chart(graphCanvas, {
            type: 'polarArea',
            data: {
                labels: [''],
                datasets: [{
                    data: [1],
                    backgroundColor: ['#ea80fc'],
                    borderWidth: 0
                }]
            },
            options: {
                plugins: { legend: { display: false } },
                scales: { r: { ticks: { display: false }, grid: { display: false }, angleLines: { display: false } } }
            }
        });
    } else if (category === "2d" && shape === "triangle") {
        // Draw a triangle using Chart.js (radar chart with 3 points)
        chartInstance = new Chart(graphCanvas, {
            type: 'radar',
            data: {
                labels: ['A', 'B', 'C'],
                datasets: [{
                    data: [1, 1, 1],
                    backgroundColor: 'rgba(255,128,171,0.5)',
                    borderColor: '#ff80ab',
                    pointRadius: 0
                }]
            },
            options: {
                plugins: { legend: { display: false } },
                scales: { r: { ticks: { display: false }, grid: { display: false }, angleLines: { display: false }, min: 0, max: 1 } }
            }
        });
    } else {
        // For other categories/shapes, show a placeholder or clear the canvas
        graphCanvas.getContext('2d').clearRect(0, 0, graphCanvas.width, graphCanvas.height);
    }
}

// Update graph when dropdowns change
document.getElementById('category').addEventListener('change', function() {
    drawGraph(this.value, document.getElementById('shape').value);
});
document.getElementById('shape').addEventListener('change', function() {
    drawGraph(document.getElementById('category').value, this.value);
});

// Initial draw
drawGraph(document.getElementById('category').value, document.getElementById('shape').value);