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