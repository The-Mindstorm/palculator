document.addEventListener('DOMContentLoaded', function () {
    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 60 },
            color: { value: '#7ecfff' },
            shape: { type: 'circle' },
            opacity: { value: 0.3 },
            size: { value: 4 },
            move: { enable: true, speed: 1.5 },
        },
    });

    // Get all form elements
    const calculators = document.getElementById('calculators');
    const mechanicsDropdown = document.getElementById('mechanics-dropdown');
    const thermodynamicsDropdown = document.getElementById('thermodynamics-dropdown');
    const electromagnetismDropdown = document.getElementById('electromagnetism-dropdown');
    const waveOpticsDropdown = document.getElementById('wave-optics-dropdown');
    const modernPhysicsDropdown = document.getElementById('modern-physics-dropdown');
    const fluidPhysicsDropdown = document.getElementById('fluid-physics-dropdown');
    const astrophysicsDropdown = document.getElementById('astrophysics-dropdown');
    const materialScienceDropdown = document.getElementById('material-science-dropdown');
    const miscellaneousDropdown = document.getElementById('miscellaneous-dropdown');
    const variableDropdown = document.getElementById('variable-dropdown');
    const form = document.getElementById('calculator-form');
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    const input4 = document.getElementById('input4');
    const label1 = document.querySelector('label[for="input1"]');
    const label2 = document.querySelector('label[for="input2"]');
    const label3 = document.querySelector('label[for="input3"]');
    const label4 = document.querySelector('label[for="input4"]');
    const resultDiv = document.getElementById('result');
    const formulaDisplay = document.getElementById('formula-display');
    // Function to evaluate mathematical expressions in inputs
    function evaluateExpression(expression) {
        if (!expression || expression.trim() === '') return NaN;
        
        try {
            // Replace scientific notation format (10^6 → 10**6)
            expression = String(expression).replace(/(\d+)\^(-?\d+(\.\d+)?)/g, "$1**$2");
            
            // Use Function constructor for safer evaluation than eval()
            return Function('"use strict"; return (' + expression + ')')();
        } catch (error) {
            console.error("Expression evaluation error:", error);
            return NaN;
        }
    }

    // Function to toggle calculator dropdowns
    function toggleCalculatorDropdowns() {
        const calculatorType = calculators.value;
        
        // Hide all dropdowns first
        mechanicsDropdown.style.display = 'none';
        thermodynamicsDropdown.style.display = 'none';
        electromagnetismDropdown.style.display = 'none';
        waveOpticsDropdown.style.display = 'none';
        modernPhysicsDropdown.style.display = 'none';
        fluidPhysicsDropdown.style.display = 'none';
        astrophysicsDropdown.style.display = 'none';
        materialScienceDropdown.style.display = 'none';
        miscellaneousDropdown.style.display = 'none';
        
        // Show the selected dropdown
        if (calculatorType === 'mechanics-calculator') {
            mechanicsDropdown.style.display = 'block';
        } else if (calculatorType === 'thermodynamics-calculator') {
            thermodynamicsDropdown.style.display = 'block';
        } else if (calculatorType === 'electromagnetism-calculator') {
            electromagnetismDropdown.style.display = 'block';
        } else if (calculatorType === 'wave-optics-calculator') {
            waveOpticsDropdown.style.display = 'block';
        } else if (calculatorType === 'modern-physics-calculator') {
            modernPhysicsDropdown.style.display = 'block';
        } else if (calculatorType === 'fluid-physics-calculator') {
            fluidPhysicsDropdown.style.display = 'block';
        } else if (calculatorType === 'astrophysics-calculator') {
            astrophysicsDropdown.style.display = 'block';
        } else if (calculatorType === 'material-science-calculator') {
            materialScienceDropdown.style.display = 'block';
        } else if (calculatorType === 'miscellaneous-calculator') {
            miscellaneousDropdown.style.display = 'block';
        }
        
        // Reset and hide the variable dropdown initially
        variableDropdown.innerHTML = '';
        variableDropdown.style.display = 'none';
        
        // Update variable dropdown options
        updateVariableDropdown();
    }

    // Function to update variable dropdown based on calculator and type selections
    function updateVariableDropdown() {
        const calculatorType = calculators.value;
        variableDropdown.innerHTML = ''; // Clear existing options
        
        let typeDropdown;
        if (calculatorType === 'mechanics-calculator') {
            typeDropdown = mechanicsDropdown;
        } else if (calculatorType === 'thermodynamics-calculator') {
            typeDropdown = thermodynamicsDropdown;
        } else if (calculatorType === 'electromagnetism-calculator') {
            typeDropdown = electromagnetismDropdown;
        } else if (calculatorType === 'wave-optics-calculator') {
            typeDropdown = waveOpticsDropdown;
        } else if (calculatorType === 'modern-physics-calculator') {
            typeDropdown = modernPhysicsDropdown;
        } else if (calculatorType === 'fluid-physics-calculator') {
            typeDropdown = fluidPhysicsDropdown;
        } else if (calculatorType === 'astrophysics-calculator') {
            typeDropdown = astrophysicsDropdown;
        } else if (calculatorType === 'material-science-calculator') {
            typeDropdown = materialScienceDropdown;
        } else if (calculatorType === 'miscellaneous-calculator') {
            typeDropdown = miscellaneousDropdown;
        }
        
        if (!typeDropdown) return;
        
        const type = typeDropdown.value;
        
        // Add options based on calculator type and specific type
        if (calculatorType === 'mechanics-calculator') {
            if (type === 'speed') {
                addOption(variableDropdown, 'speed', 'Speed (v)');
                addOption(variableDropdown, 'distance', 'Distance (d)');
                addOption(variableDropdown, 'time', 'Time (t)');
            } else if (type === 'force') {
                addOption(variableDropdown, 'force', 'Force (F)');
                addOption(variableDropdown, 'mass', 'Mass (m)');
                addOption(variableDropdown, 'acceleration', 'Acceleration (a)');
            } else if (type === 'work') {
                addOption(variableDropdown, 'work', 'Work (W)');
                addOption(variableDropdown, 'force', 'Force (F)');
                addOption(variableDropdown, 'distance', 'Distance (d)');
            } else if (type === 'kinetic') {
                addOption(variableDropdown, 'ke', 'Kinetic Energy (KE)');
                addOption(variableDropdown, 'mass', 'Mass (m)');
                addOption(variableDropdown, 'velocity', 'Velocity (v)');
            }
        } else if (calculatorType === 'thermodynamics-calculator') {
            if (type === 'idealGas') {
                addOption(variableDropdown, 'pressure', 'Pressure (P)');
                addOption(variableDropdown, 'volume', 'Volume (V)');
                addOption(variableDropdown, 'moles', 'Moles (n)');
                addOption(variableDropdown, 'temperature', 'Temperature (T)');
            } else if (type === 'heatTransfer') {
                addOption(variableDropdown, 'heat', 'Heat (Q)');
                addOption(variableDropdown, 'mass', 'Mass (m)');
                addOption(variableDropdown, 'specificHeat', 'Specific Heat (c)');
                addOption(variableDropdown, 'tempChange', 'Temperature Change (ΔT)');
            } else if (type === 'thermalExpansion') {
                addOption(variableDropdown, 'lengthChange', 'Length Change (ΔL)');
                addOption(variableDropdown, 'coefficient', 'Coefficient of Expansion (α)');
                addOption(variableDropdown, 'initialLength', 'Initial Length (L)');
                addOption(variableDropdown, 'tempChange', 'Temperature Change (ΔT)');
            } else if (type === 'entropy') {
                addOption(variableDropdown, 'entropyChange', 'Entropy Change (ΔS)');
                addOption(variableDropdown, 'heat', 'Heat (Q)');
                addOption(variableDropdown, 'temperature', 'Temperature (T)');
            }
        } else if (calculatorType === 'electromagnetism-calculator') {
            if (type === 'coulomb') {
                addOption(variableDropdown, 'force', 'Force (F)');
                addOption(variableDropdown, 'charge1', 'Charge 1 (q₁)');
                addOption(variableDropdown, 'charge2', 'Charge 2 (q₂)');
                addOption(variableDropdown, 'distance', 'Distance (r)');
            } else if (type === 'efield') {
                addOption(variableDropdown, 'electricField', 'Electric Field (E)');
                addOption(variableDropdown, 'force', 'Force (F)');
                addOption(variableDropdown, 'charge', 'Charge (q)');
            } else if (type === 'ohms') {
                addOption(variableDropdown, 'voltage', 'Voltage (V)');
                addOption(variableDropdown, 'current', 'Current (I)');
                addOption(variableDropdown, 'resistance', 'Resistance (R)');
            } else if (type === 'power') {
                addOption(variableDropdown, 'power', 'Power (P)');
                addOption(variableDropdown, 'current', 'Current (I)');
                addOption(variableDropdown, 'voltage', 'Voltage (V)');
            } else if (type === 'capacitance') {
                addOption(variableDropdown, 'capacitance', 'Capacitance (C)');
                addOption(variableDropdown, 'charge', 'Charge (Q)');
                addOption(variableDropdown, 'voltage', 'Voltage (V)');
            } else if (type === 'magneticField') {
                addOption(variableDropdown, 'magneticField', 'Magnetic Field (B)');
                addOption(variableDropdown, 'current', 'Current (I)');
                addOption(variableDropdown, 'distance', 'Distance (r)');
            }
        } else if (calculatorType === 'wave-optics-calculator') {
            if (type === 'wavelength') {
                addOption(variableDropdown, 'wavelength', 'Wavelength (λ)');
                addOption(variableDropdown, 'frequency', 'Frequency (f)');
                addOption(variableDropdown, 'velocity', 'Velocity (v)');
            } else if (type === 'snell') {
                addOption(variableDropdown, 'angle1', 'Angle 1 (θ₁)');
                addOption(variableDropdown, 'angle2', 'Angle 2 (θ₂)');
                addOption(variableDropdown, 'index1', 'Refractive Index 1 (n₁)');
                addOption(variableDropdown, 'index2', 'Refractive Index 2 (n₂)');
            } else if (type === 'lens') {
                addOption(variableDropdown, 'focalLength', 'Focal Length (f)');
                addOption(variableDropdown, 'objectDistance', 'Object Distance (d₀)');
                addOption(variableDropdown, 'imageDistance', 'Image Distance (d₁)');
            } else if (type === 'diffraction') {
                addOption(variableDropdown, 'angle', 'Angle (θ)');
                addOption(variableDropdown, 'order', 'Order (m)');
                addOption(variableDropdown, 'wavelength', 'Wavelength (λ)');
                addOption(variableDropdown, 'spacing', 'Slit Spacing (d)');
            }
        } else if (calculatorType === 'modern-physics-calculator') {
            if (type === 'relativity') {
                addOption(variableDropdown, 'energy', 'Energy (E)');
                addOption(variableDropdown, 'mass', 'Mass (m)');
            } else if (type === 'timeDilation') {
                addOption(variableDropdown, 'dilatedTime', 'Dilated Time (t\')');
                addOption(variableDropdown, 'properTime', 'Proper Time (t)');
                addOption(variableDropdown, 'velocity', 'Velocity (v)');
            } else if (type === 'lengthContraction') {
                addOption(variableDropdown, 'contractedLength', 'Contracted Length (L\')');
                addOption(variableDropdown, 'properLength', 'Proper Length (L)');
                addOption(variableDropdown, 'velocity', 'Velocity (v)');
            } else if (type === 'photoelectric') {
                addOption(variableDropdown, 'kineticEnergy', 'Kinetic Energy (Ek)');
                addOption(variableDropdown, 'frequency', 'Frequency (f)');
                addOption(variableDropdown, 'workFunction', 'Work Function (φ)');
            } else if (type === 'bohrModel') {
                addOption(variableDropdown, 'energy', 'Energy (E)');
                addOption(variableDropdown, 'level', 'Quantum Number (n)');
                addOption(variableDropdown, 'radius', 'Radius (r)');
            } else if (type === 'radioactive') {
                addOption(variableDropdown, 'finalAmount', 'Final Amount (N)');
                addOption(variableDropdown, 'initialAmount', 'Initial Amount (N₀)');
                addOption(variableDropdown, 'decayConstant', 'Decay Constant (λ)');
                addOption(variableDropdown, 'time', 'Time (t)');
                addOption(variableDropdown, 'halfLife', 'Half-Life (t½)');
            }
        } else if (calculatorType === 'fluid-physics-calculator') {
            if (type === 'density') {
                addOption(variableDropdown, 'density', 'Density (ρ)');
                addOption(variableDropdown, 'mass', 'Mass (m)');
                addOption(variableDropdown, 'volume', 'Volume (V)');
            } else if (type === 'pressure') {
                addOption(variableDropdown, 'pressure', 'Pressure (P)');
                addOption(variableDropdown, 'force', 'Force (F)');
                addOption(variableDropdown, 'area', 'Area (A)');
            } else if (type === 'hydrostatic') {
                addOption(variableDropdown, 'pressure', 'Pressure (P)');
                addOption(variableDropdown, 'density', 'Density (ρ)');
                addOption(variableDropdown, 'height', 'Height (h)');
                addOption(variableDropdown, 'gravity', 'Gravity (g)');
            } else if (type === 'buoyancy') {
                addOption(variableDropdown, 'force', 'Buoyant Force (F_b)');
                addOption(variableDropdown, 'density', 'Fluid Density (ρ)');
                addOption(variableDropdown, 'volume', 'Submerged Volume (V)');
                addOption(variableDropdown, 'gravity', 'Gravity (g)');
            } else if (type === 'bernoulli') {
                addOption(variableDropdown, 'pressure', 'Pressure Difference (ΔP)');
                addOption(variableDropdown, 'height', 'Height Difference (Δh)');
                addOption(variableDropdown, 'velocity', 'Velocity Difference (Δv)');
            } else if (type === 'continuity') {
                addOption(variableDropdown, 'area1', 'Area 1 (A₁)');
                addOption(variableDropdown, 'velocity1', 'Velocity 1 (v₁)');
                addOption(variableDropdown, 'area2', 'Area 2 (A₂)');
                addOption(variableDropdown, 'velocity2', 'Velocity 2 (v₂)');
            } else if (type === 'reynolds') {
                addOption(variableDropdown, 'reynolds', 'Reynolds Number (Re)');
                addOption(variableDropdown, 'density', 'Density (ρ)');
                addOption(variableDropdown, 'velocity', 'Velocity (v)');
                addOption(variableDropdown, 'length', 'Characteristic Length (L)');
                addOption(variableDropdown, 'viscosity', 'Dynamic Viscosity (μ)');
            } else if (type === 'surfaceTension') {
                addOption(variableDropdown, 'force', 'Force (F)');
                addOption(variableDropdown, 'surfaceTension', 'Surface Tension (γ)');
                addOption(variableDropdown, 'length', 'Length (L)');
            } else if (type === 'stokes') {
                addOption(variableDropdown, 'dragForce', 'Drag Force (F_d)');
                addOption(variableDropdown, 'viscosity', 'Dynamic Viscosity (η)');
                addOption(variableDropdown, 'radius', 'Sphere Radius (r)');
                addOption(variableDropdown, 'velocity', 'Velocity (v)');
            } else if (type === 'poiseuille') {
                addOption(variableDropdown, 'flowRate', 'Flow Rate (Q)');
                addOption(variableDropdown, 'radius', 'Tube Radius (r)');
                addOption(variableDropdown, 'pressureDiff', 'Pressure Difference (ΔP)');
                addOption(variableDropdown, 'viscosity', 'Viscosity (η)');
                addOption(variableDropdown, 'length', 'Tube Length (L)');
            }
        } else if (calculatorType === 'astrophysics-calculator') {
            if (type === 'gravity') {
                addOption(variableDropdown, 'force', 'Gravitational Force (F)');
                addOption(variableDropdown, 'mass1', 'Mass 1 (m₁)');
                addOption(variableDropdown, 'mass2', 'Mass 2 (m₂)');
                addOption(variableDropdown, 'distance', 'Distance (r)');
            } else if (type === 'escape') {
                addOption(variableDropdown, 'velocity', 'Escape Velocity (v_esc)');
                addOption(variableDropdown, 'mass', 'Mass of Body (M)');
                addOption(variableDropdown, 'radius', 'Radius (r)');
            } else if (type === 'orbital') {
                addOption(variableDropdown, 'period', 'Orbital Period (T)');
                addOption(variableDropdown, 'mass', 'Central Mass (M)');
                addOption(variableDropdown, 'radius', 'Orbital Radius (r)');
            } else if (type === 'blackhole') {
                addOption(variableDropdown, 'radius', 'Schwarzschild Radius (r_s)');
                addOption(variableDropdown, 'mass', 'Black Hole Mass (M)');
            } else if (type === 'luminosity') {
                addOption(variableDropdown, 'luminosity', 'Luminosity (L)');
                addOption(variableDropdown, 'radius', 'Stellar Radius (r)');
                addOption(variableDropdown, 'temperature', 'Surface Temperature (T)');
            } else if (type === 'distance') {
                addOption(variableDropdown, 'distance', 'Distance (d)');
                addOption(variableDropdown, 'apparent', 'Apparent Magnitude (m)');
                addOption(variableDropdown, 'absolute', 'Absolute Magnitude (M)');
            } else if (type === 'hubble') {
                addOption(variableDropdown, 'velocity', 'Recession Velocity (v)');
                addOption(variableDropdown, 'distance', 'Distance (d)');
                addOption(variableDropdown, 'constant', 'Hubble Constant (H₀)');
            }
        } else if (calculatorType === 'material-science-calculator') {
            if (type === 'youngs') {
                addOption(variableDropdown, 'youngs', 'Young\'s Modulus (E)');
                addOption(variableDropdown, 'stress', 'Stress (σ)');
                addOption(variableDropdown, 'strain', 'Strain (ε)');
            } else if (type === 'stress') {
                addOption(variableDropdown, 'stress', 'Stress (σ)');
                addOption(variableDropdown, 'force', 'Force (F)');
                addOption(variableDropdown, 'area', 'Area (A)');
            } else if (type === 'strain') {
                addOption(variableDropdown, 'strain', 'Strain (ε)');
                addOption(variableDropdown, 'lengthChange', 'Length Change (ΔL)');
                addOption(variableDropdown, 'initialLength', 'Initial Length (L₀)');
            } else if (type === 'shear') {
                addOption(variableDropdown, 'shearModulus', 'Shear Modulus (G)');
                addOption(variableDropdown, 'shearStress', 'Shear Stress (τ)');
                addOption(variableDropdown, 'shearStrain', 'Shear Strain (γ)');
            } else if (type === 'bulk') {
                addOption(variableDropdown, 'bulkModulus', 'Bulk Modulus (K)');
                addOption(variableDropdown, 'pressure', 'Pressure (P)');
                addOption(variableDropdown, 'volumeStrain', 'Volume Strain (ΔV/V)');
            } else if (type === 'poisson') {
                addOption(variableDropdown, 'poissonRatio', 'Poisson\'s Ratio (ν)');
                addOption(variableDropdown, 'lateralStrain', 'Lateral Strain (εₜ)');
                addOption(variableDropdown, 'axialStrain', 'Axial Strain (εₗ)');
            } else if (type === 'thermal-expansion') {
                addOption(variableDropdown, 'lengthChange', 'Length Change (ΔL)');
                addOption(variableDropdown, 'coefficient', 'Thermal Expansion Coefficient (α)');
                addOption(variableDropdown, 'initialLength', 'Initial Length (L₀)');
                addOption(variableDropdown, 'tempChange', 'Temperature Change (ΔT)');
            } else if (type === 'diffusion') {
                addOption(variableDropdown, 'diffusionCoeff', 'Diffusion Coefficient (D)');
                addOption(variableDropdown, 'flux', 'Diffusion Flux (J)');
                addOption(variableDropdown, 'gradient', 'Concentration Gradient (∇c)');
            }
        } else if (calculatorType === 'miscellaneous-calculator') {
            if (type === 'dimensional') {
                addOption(variableDropdown, 'dimensions', 'Dimensions (M, L, T)');
                addOption(variableDropdown, 'units', 'Units (kg, m, s)');
            } else if (type === 'uncertainty') {
                addOption(variableDropdown, 'addition', 'Addition/Subtraction');
                addOption(variableDropdown, 'multiplication', 'Multiplication/Division');
                addOption(variableDropdown, 'power', 'Power Function');
            } else if (type === 'vector') {
                addOption(variableDropdown, 'addition', 'Vector Addition');
                addOption(variableDropdown, 'dotProduct', 'Dot Product');
                addOption(variableDropdown, 'crossProduct', 'Cross Product');
                addOption(variableDropdown, 'magnitude', 'Vector Magnitude');
            } else if (type === 'statistics') {
                addOption(variableDropdown, 'mean', 'Mean');
                addOption(variableDropdown, 'stdDev', 'Standard Deviation');
                addOption(variableDropdown, 'linearReg', 'Linear Regression');
            } else if (type === 'conversion') {
                addOption(variableDropdown, 'length', 'Length');
                addOption(variableDropdown, 'mass', 'Mass');
                addOption(variableDropdown, 'time', 'Time');
                addOption(variableDropdown, 'energy', 'Energy');
                addOption(variableDropdown, 'force', 'Force');
            } else if (type === 'fermi') {
                addOption(variableDropdown, 'estimation', 'Order of Magnitude');
            }
        }
        
        // Show variable dropdown if options were added
        if (variableDropdown.options.length > 0) {
            variableDropdown.style.display = 'block';
            
            // Update the form based on the first option
            if (variableDropdown.options[0]) {
                variableDropdown.value = variableDropdown.options[0].value;
                updateCalculatorForm();
            }
        }
    }
    function setupInputValidation() {
        // Regular expression allowing only valid mathematical expression characters
        const validPattern = /^[0-9\.\+\-\*\/\(\)\^\s\.eE]+$/;
        
        function validateInput(event) {
            const input = event.target;
            const value = input.value;
            
            if (!validPattern.test(value)) {
                // Remove any invalid characters
                input.value = value.replace(/[^0-9\.\+\-\*\/\(\)\^\s\.eE]/g, '');
            }
        }
        
        // Add validation to all inputs
        input1.addEventListener('input', validateInput);
        input2.addEventListener('input', validateInput);
        input3.addEventListener('input', validateInput);
        input4.addEventListener('input', validateInput);
    }

    // Helper function to add options to dropdown
    function addOption(selectElement, value, text) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = text;
        selectElement.appendChild(option);
    }

    // Function to update calculator form based on selected variable
    function updateCalculatorForm() {
        // Hide all inputs and labels initially
        label1.style.display = 'none';
        label2.style.display = 'none';
        label3.style.display = 'none';
        label4.style.display = 'none';
        input1.style.display = 'none';
        input2.style.display = 'none';
        input3.style.display = 'none';
        input4.style.display = 'none';
        // Clear any placeholder text
        input1.placeholder = 'Enter a value or expression';
        input2.placeholder = 'Enter a value or expression';
        input3.placeholder = 'Enter a value or expression';
        input4.placeholder = 'Enter a value or expression';
        
        const calculatorType = calculators.value;
        
        if (calculatorType === 'mechanics-calculator') {
            const type = mechanicsDropdown.value;
            const variable = variableDropdown.value;
            
            // Set formula display
            if (type === 'speed') {
                formulaDisplay.textContent = 'v = d / t';
                
                if (variable === 'speed') {
                    label1.textContent = 'Distance (d, m):';
                    label2.textContent = 'Time (t, s):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'distance') {
                    label1.textContent = 'Speed (v, m/s):';
                    label2.textContent = 'Time (t, s):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'time') {
                    label1.textContent = 'Distance (d, m):';
                    label2.textContent = 'Speed (v, m/s):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            } else if (type === 'force') {
                formulaDisplay.textContent = 'F = m × a';
                
                if (variable === 'force') {
                    label1.textContent = 'Mass (m, kg):';
                    label2.textContent = 'Acceleration (a, m/s²):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'mass') {
                    label1.textContent = 'Force (F, N):';
                    label2.textContent = 'Acceleration (a, m/s²):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'acceleration') {
                    label1.textContent = 'Force (F, N):';
                    label2.textContent = 'Mass (m, kg):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            } else if (type === 'work') {
                formulaDisplay.textContent = 'W = F × d';
                
                if (variable === 'work') {
                    label1.textContent = 'Force (F, N):';
                    label2.textContent = 'Distance (d, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'force') {
                    label1.textContent = 'Work (W, J):';
                    label2.textContent = 'Distance (d, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'distance') {
                    label1.textContent = 'Work (W, J):';
                    label2.textContent = 'Force (F, N):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            } else if (type === 'kinetic') {
                formulaDisplay.textContent = 'KE = ½ m v²';
                
                if (variable === 'ke') {
                    label1.textContent = 'Mass (m, kg):';
                    label2.textContent = 'Velocity (v, m/s):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'mass') {
                    label1.textContent = 'Kinetic Energy (KE, J):';
                    label2.textContent = 'Velocity (v, m/s):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'velocity') {
                    label1.textContent = 'Kinetic Energy (KE, J):';
                    label2.textContent = 'Mass (m, kg):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            }
        } else if (calculatorType === 'thermodynamics-calculator') {
            const type = thermodynamicsDropdown.value;
            const variable = variableDropdown.value;
            
            if (type === 'idealGas') {
                formulaDisplay.textContent = 'PV = nRT';
                
                if (variable === 'pressure') {
                    label1.textContent = 'Number of Moles (n):';
                    label2.textContent = 'Temperature (T, K):';
                    label3.textContent = 'Volume (V, m³):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'volume') {
                    label1.textContent = 'Number of Moles (n):';
                    label2.textContent = 'Temperature (T, K):';
                    label3.textContent = 'Pressure (P, Pa):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'moles') {
                    label1.textContent = 'Pressure (P, Pa):';
                    label2.textContent = 'Volume (V, m³):';
                    label3.textContent = 'Temperature (T, K):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'temperature') {
                    label1.textContent = 'Pressure (P, Pa):';
                    label2.textContent = 'Volume (V, m³):';
                    label3.textContent = 'Number of Moles (n):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                }
            } else if (type === 'heatTransfer') {
                formulaDisplay.textContent = 'Q = mcΔT';
                
                if (variable === 'heat') {
                    label1.textContent = 'Mass (m, kg):';
                    label2.textContent = 'Specific Heat (c, J/kg·K):';
                    label3.textContent = 'Temperature Change (ΔT, K):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'mass') {
                    label1.textContent = 'Heat (Q, J):';
                    label2.textContent = 'Specific Heat (c, J/kg·K):';
                    label3.textContent = 'Temperature Change (ΔT, K):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'specificHeat') {
                    label1.textContent = 'Heat (Q, J):';
                    label2.textContent = 'Mass (m, kg):';
                    label3.textContent = 'Temperature Change (ΔT, K):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'tempChange') {
                    label1.textContent = 'Heat (Q, J):';
                    label2.textContent = 'Mass (m, kg):';
                    label3.textContent = 'Specific Heat (c, J/kg·K):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                }
            } else if (type === 'thermalExpansion') {
                formulaDisplay.textContent = 'ΔL = αLΔT';
                
                if (variable === 'lengthChange') {
                    label1.textContent = 'Coefficient (α, K⁻¹):';
                    label2.textContent = 'Initial Length (L, m):';
                    label3.textContent = 'Temperature Change (ΔT, K):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'coefficient') {
                    label1.textContent = 'Length Change (ΔL, m):';
                    label2.textContent = 'Initial Length (L, m):';
                    label3.textContent = 'Temperature Change (ΔT, K):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'initialLength') {
                    label1.textContent = 'Length Change (ΔL, m):';
                    label2.textContent = 'Coefficient (α, K⁻¹):';
                    label3.textContent = 'Temperature Change (ΔT, K):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'tempChange') {
                    label1.textContent = 'Length Change (ΔL, m):';
                    label2.textContent = 'Coefficient (α, K⁻¹):';
                    label3.textContent = 'Initial Length (L, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                }
            } else if (type === 'entropy') {
                formulaDisplay.textContent = 'ΔS = Q/T';
                
                if (variable === 'entropyChange') {
                    label1.textContent = 'Heat (Q, J):';
                    label2.textContent = 'Temperature (T, K):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'heat') {
                    label1.textContent = 'Entropy Change (ΔS, J/K):';
                    label2.textContent = 'Temperature (T, K):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'temperature') {
                    label1.textContent = 'Entropy Change (ΔS, J/K):';
                    label2.textContent = 'Heat (Q, J):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            }
        } else if (calculatorType === 'electromagnetism-calculator') {
            const type = electromagnetismDropdown.value;
            const variable = variableDropdown.value;
            
            if (type === 'coulomb') {
                formulaDisplay.textContent = 'F = k·q₁·q₂/r²';
                
                if (variable === 'force') {
                    label1.textContent = 'Charge 1 (q₁, C):';
                    label2.textContent = 'Charge 2 (q₂, C):';
                    label3.textContent = 'Distance (r, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'charge1') {
                    label1.textContent = 'Force (F, N):';
                    label2.textContent = 'Charge 2 (q₂, C):';
                    label3.textContent = 'Distance (r, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'charge2') {
                    label1.textContent = 'Force (F, N):';
                    label2.textContent = 'Charge 1 (q₁, C):';
                    label3.textContent = 'Distance (r, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'distance') {
                    label1.textContent = 'Force (F, N):';
                    label2.textContent = 'Charge 1 (q₁, C):';
                    label3.textContent = 'Charge 2 (q₂, C):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                }
            } else if (type === 'efield') {
                formulaDisplay.textContent = 'E = F/q';
                
                if (variable === 'electricField') {
                    label1.textContent = 'Force (F, N):';
                    label2.textContent = 'Charge (q, C):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'force') {
                    label1.textContent = 'Electric Field (E, N/C):';
                    label2.textContent = 'Charge (q, C):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'charge') {
                    label1.textContent = 'Force (F, N):';
                    label2.textContent = 'Electric Field (E, N/C):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            } else if (type === 'ohms') {
                formulaDisplay.textContent = 'V = IR';
                
                if (variable === 'voltage') {
                    label1.textContent = 'Current (I, A):';
                    label2.textContent = 'Resistance (R, Ω):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'current') {
                    label1.textContent = 'Voltage (V, V):';
                    label2.textContent = 'Resistance (R, Ω):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'resistance') {
                    label1.textContent = 'Voltage (V, V):';
                    label2.textContent = 'Current (I, A):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            } else if (type === 'power') {
                formulaDisplay.textContent = 'P = IV';
                
                if (variable === 'power') {
                    label1.textContent = 'Current (I, A):';
                    label2.textContent = 'Voltage (V, V):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'current') {
                    label1.textContent = 'Power (P, W):';
                    label2.textContent = 'Voltage (V, V):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'voltage') {
                    label1.textContent = 'Power (P, W):';
                    label2.textContent = 'Current (I, A):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            } else if (type === 'capacitance') {
                formulaDisplay.textContent = 'C = Q/V';
                
                if (variable === 'capacitance') {
                    label1.textContent = 'Charge (Q, C):';
                    label2.textContent = 'Voltage (V, V):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'charge') {
                    label1.textContent = 'Capacitance (C, F):';
                    label2.textContent = 'Voltage (V, V):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'voltage') {
                    label1.textContent = 'Charge (Q, C):';
                    label2.textContent = 'Capacitance (C, F):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            } else if (type === 'magneticField') {
                formulaDisplay.textContent = 'B = μ₀I/2πr';
                
                if (variable === 'magneticField') {
                    label1.textContent = 'Current (I, A):';
                    label2.textContent = 'Distance (r, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'current') {
                    label1.textContent = 'Magnetic Field (B, T):';
                    label2.textContent = 'Distance (r, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'distance') {
                    label1.textContent = 'Magnetic Field (B, T):';
                    label2.textContent = 'Current (I, A):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            }
        } else if (calculatorType === 'wave-optics-calculator') {
            const type = waveOpticsDropdown.value;
            const variable = variableDropdown.value;
            
            if (type === 'wavelength') {
                formulaDisplay.textContent = 'λ = v / f';
                
                if (variable === 'wavelength') {
                    label1.textContent = 'Velocity (v, m/s):';
                    label2.textContent = 'Frequency (f, Hz):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'frequency') {
                    label1.textContent = 'Velocity (v, m/s):';
                    label2.textContent = 'Wavelength (λ, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'velocity') {
                    label1.textContent = 'Frequency (f, Hz):';
                    label2.textContent = 'Wavelength (λ, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            } else if (type === 'diffraction') {
                formulaDisplay.textContent = 'sin θ = mλ/d';
                
                if (variable === 'angle') {
                    label1.textContent = 'Order (m):';
                    label2.textContent = 'Wavelength (λ, m):';
                    label3.textContent = 'Slit Spacing (d, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'order') {
                    label1.textContent = 'Angle (θ, degrees):';
                    label2.textContent = 'Wavelength (λ, m):';
                    label3.textContent = 'Slit Spacing (d, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'wavelength') {
                    label1.textContent = 'Angle (θ, degrees):';
                    label2.textContent = 'Order (m):';
                    label3.textContent = 'Slit Spacing (d, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'spacing') {
                    label1.textContent = 'Angle (θ, degrees):';
                    label2.textContent = 'Order (m):';
                    label3.textContent = 'Wavelength (λ, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                }
            } else if (type === 'snell') {
                formulaDisplay.textContent = 'n₁sinθ₁ = n₂sinθ₂';
                
                if (variable === 'angle1') {
                    label1.textContent = 'Refractive Index 1 (n₁):';
                    label2.textContent = 'Refractive Index 2 (n₂):';
                    label3.textContent = 'Angle 2 (θ₂, degrees):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'angle2') {
                    label1.textContent = 'Refractive Index 1 (n₁):';
                    label2.textContent = 'Refractive Index 2 (n₂):';
                    label3.textContent = 'Angle 1 (θ₁, degrees):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'index1') {
                    label1.textContent = 'Refractive Index 2 (n₂):';
                    label2.textContent = 'Angle 1 (θ₁, degrees):';
                    label3.textContent = 'Angle 2 (θ₂, degrees):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'index2') {
                    label1.textContent = 'Refractive Index 1 (n₁):';
                    label2.textContent = 'Angle 1 (θ₁, degrees):';
                    label3.textContent = 'Angle 2 (θ₂, degrees):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                }
            } else if (type === 'lens') {
                formulaDisplay.textContent = '1/f = 1/d₀ + 1/d₁';
                
                if (variable === 'focalLength') {
                    label1.textContent = 'Object Distance (d₀, m):';
                    label2.textContent = 'Image Distance (d₁, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'objectDistance') {
                    label1.textContent = 'Focal Length (f, m):';
                    label2.textContent = 'Image Distance (d₁, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'imageDistance') {
                    label1.textContent = 'Focal Length (f, m):';
                    label2.textContent = 'Object Distance (d₀, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            }
        } else if (calculatorType === 'modern-physics-calculator') {
            const type = modernPhysicsDropdown.value;
            const variable = variableDropdown.value;
            
            if (type === 'relativity') {
                formulaDisplay.textContent = 'E = mc²';
                
                if (variable === 'energy') {
                    label1.textContent = 'Mass (m, kg):';
                    label1.style.display = 'block';
                    input1.style.display = 'block';
                } else if (variable === 'mass') {
                    label1.textContent = 'Energy (E, J):';
                    label1.style.display = 'block';
                    input1.style.display = 'block';
                }
            } else if (type === 'photoelectric') {
                formulaDisplay.textContent = 'E = hf - φ';
                
                if (variable === 'kineticEnergy') {
                    label1.textContent = 'Frequency (f, Hz):';
                    label2.textContent = 'Work Function (φ, eV):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'frequency') {
                    label1.textContent = 'Kinetic Energy (E_k, eV):';
                    label2.textContent = 'Work Function (φ, eV):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'workFunction') {
                    label1.textContent = 'Kinetic Energy (E_k, eV):';
                    label2.textContent = 'Frequency (f, Hz):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            } else if (type === 'bohrModel') {
                formulaDisplay.textContent = 'E = -13.6/n² eV';
                
                if (variable === 'energy') {
                    label1.textContent = 'Quantum Number (n):';
                    label1.style.display = 'block';
                    input1.style.display = 'block';
                } else if (variable === 'level') {
                    label1.textContent = 'Energy (E, eV):';
                    label1.style.display = 'block';
                    input1.style.display = 'block';
                } else if (variable === 'radius') {
                    label1.textContent = 'Quantum Number (n):';
                    label1.style.display = 'block';
                    input1.style.display = 'block';
                }
            } else if (type === 'radioactive') {
                formulaDisplay.textContent = 'N = N₀e^(-λt)';
                
                if (variable === 'finalAmount') {
                    label1.textContent = 'Initial Amount (N₀):';
                    label2.textContent = 'Decay Constant (λ, s⁻¹):';
                    label3.textContent = 'Time (t, s):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'initialAmount') {
                    label1.textContent = 'Final Amount (N):';
                    label2.textContent = 'Decay Constant (λ, s⁻¹):';
                    label3.textContent = 'Time (t, s):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'decayConstant') {
                    label1.textContent = 'Final Amount (N):';
                    label2.textContent = 'Initial Amount (N₀):';
                    label3.textContent = 'Time (t, s):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'time') {
                    label1.textContent = 'Final Amount (N):';
                    label2.textContent = 'Initial Amount (N₀):';
                    label3.textContent = 'Decay Constant (λ, s⁻¹):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'halfLife') {
                    label1.textContent = 'Decay Constant (λ, s⁻¹):';
                    label1.style.display = 'block';
                    input1.style.display = 'block';
                }
            }
        } else if (calculatorType === 'fluid-physics-calculator') {
            const type = fluidPhysicsDropdown.value;
            const variable = variableDropdown.value;
            
            if (type === 'density') {
                formulaDisplay.textContent = 'ρ = m/V';
                
                if (variable === 'density') {
                    label1.textContent = 'Mass (m, kg):';
                    label2.textContent = 'Volume (V, m³):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'mass') {
                    label1.textContent = 'Density (ρ, kg/m³):';
                    label2.textContent = 'Volume (V, m³):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'volume') {
                    label1.textContent = 'Mass (m, kg):';
                    label2.textContent = 'Density (ρ, kg/m³):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            } else if (type === 'pressure') {
                formulaDisplay.textContent = 'P = F/A';
                
                if (variable === 'pressure') {
                    label1.textContent = 'Force (F, N):';
                    label2.textContent = 'Area (A, m²):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'force') {
                    label1.textContent = 'Pressure (P, Pa):';
                    label2.textContent = 'Area (A, m²):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'area') {
                    label1.textContent = 'Force (F, N):';
                    label2.textContent = 'Pressure (P, Pa):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            } else if (type === 'hydrostatic') {
                formulaDisplay.textContent = 'P = ρgh';
                
                if (variable === 'pressure') {
                    label1.textContent = 'Density (ρ, kg/m³):';
                    label2.textContent = 'Gravity (g, m/s²):';
                    label3.textContent = 'Height (h, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                    input2.value = '9.81'; // Default gravity
                } else if (variable === 'density') {
                    label1.textContent = 'Pressure (P, Pa):';
                    label2.textContent = 'Gravity (g, m/s²):';
                    label3.textContent = 'Height (h, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                    input2.value = '9.81'; // Default gravity
                } else if (variable === 'height') {
                    label1.textContent = 'Pressure (P, Pa):';
                    label2.textContent = 'Density (ρ, kg/m³):';
                    label3.textContent = 'Gravity (g, m/s²):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                    input3.value = '9.81'; // Default gravity
                } else if (variable === 'gravity') {
                    label1.textContent = 'Pressure (P, Pa):';
                    label2.textContent = 'Density (ρ, kg/m³):';
                    label3.textContent = 'Height (h, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                }
            } else if (type === 'buoyancy') {
                formulaDisplay.textContent = 'F_b = ρgV';
                
                if (variable === 'force') {
                    label1.textContent = 'Fluid Density (ρ, kg/m³):';
                    label2.textContent = 'Gravity (g, m/s²):';
                    label3.textContent = 'Submerged Volume (V, m³):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                    input2.value = '9.81'; // Default gravity
                } else if (variable === 'density') {
                    label1.textContent = 'Buoyant Force (F_b, N):';
                    label2.textContent = 'Gravity (g, m/s²):';
                    label3.textContent = 'Submerged Volume (V, m³):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                    input2.value = '9.81'; // Default gravity
                } else if (variable === 'volume') {
                    label1.textContent = 'Buoyant Force (F_b, N):';
                    label2.textContent = 'Fluid Density (ρ, kg/m³):';
                    label3.textContent = 'Gravity (g, m/s²):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                    input3.value = '9.81'; // Default gravity
                } else if (variable === 'gravity') {
                    label1.textContent = 'Buoyant Force (F_b, N):';
                    label2.textContent = 'Fluid Density (ρ, kg/m³):';
                    label3.textContent = 'Submerged Volume (V, m³):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                }
            } else if (type === 'bernoulli') {
                formulaDisplay.textContent = 'P₁ + ½ρv₁² + ρgh₁ = P₂ + ½ρv₂² + ρgh₂';
                
                if (variable === 'pressure') {
                    label1.textContent = 'Height Difference (h₂ - h₁, m):';
                    label2.textContent = 'Velocity Difference (v₂ - v₁, m/s):';
                    label3.textContent = 'Density (ρ, kg/m³):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'height') {
                    label1.textContent = 'Pressure Difference (P₂ - P₁, Pa):';
                    label2.textContent = 'Velocity Difference (v₂ - v₁, m/s):';
                    label3.textContent = 'Density (ρ, kg/m³):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'velocity') {
                    label1.textContent = 'Pressure Difference (P₂ - P₁, Pa):';
                    label2.textContent = 'Height Difference (h₂ - h₁, m):';
                    label3.textContent = 'Density (ρ, kg/m³):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                }
            } else if (type === 'continuity') {
                formulaDisplay.textContent = 'A₁v₁ = A₂v₂';
                
                if (variable === 'area1') {
                    label1.textContent = 'Area 2 (A₂, m²):';
                    label2.textContent = 'Velocity 1 (v₁, m/s):';
                    label3.textContent = 'Velocity 2 (v₂, m/s):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'velocity1') {
                    label1.textContent = 'Area 1 (A₁, m²):';
                    label2.textContent = 'Area 2 (A₂, m²):';
                    label3.textContent = 'Velocity 2 (v₂, m/s):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'area2') {
                    label1.textContent = 'Area 1 (A₁, m²):';
                    label2.textContent = 'Velocity 1 (v₁, m/s):';
                    label3.textContent = 'Velocity 2 (v₂, m/s):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'velocity2') {
                    label1.textContent = 'Area 1 (A₁, m²):';
                    label2.textContent = 'Area 2 (A₂, m²):';
                    label3.textContent = 'Velocity 1 (v₁, m/s):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                }
            } else if (type === 'reynolds') {
                formulaDisplay.textContent = 'Re = ρvL/μ';
                
                if (variable === 'reynolds') {
                    label1.textContent = 'Density (ρ, kg/m³):';
                    label2.textContent = 'Velocity (v, m/s):';
                    label3.textContent = 'Characteristic Length (L, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'density') {
                    label1.textContent = 'Reynolds Number (Re):';
                    label2.textContent = 'Velocity (v, m/s):';
                    label3.textContent = 'Characteristic Length (L, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'velocity') {
                    label1.textContent = 'Reynolds Number (Re):';
                    label2.textContent = 'Density (ρ, kg/m³):';
                    label3.textContent = 'Characteristic Length (L, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'length') {
                    label1.textContent = 'Reynolds Number (Re):';
                    label2.textContent = 'Density (ρ, kg/m³):';
                    label3.textContent = 'Velocity (v, m/s):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'viscosity') {
                    label1.textContent = 'Reynolds Number (Re):';
                    label2.textContent = 'Density (ρ, kg/m³):';
                    label3.textContent = 'Velocity (v, m/s):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                }
            } else if (type === 'surfaceTension') {
                formulaDisplay.textContent = 'F = γL';
                
                if (variable === 'force') {
                    label1.textContent = 'Surface Tension (γ, N/m):';
                    label2.textContent = 'Length (L, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'surfaceTension') {
                    label1.textContent = 'Force (F, N):';
                    label2.textContent = 'Length (L, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'length') {
                    label1.textContent = 'Force (F, N):';
                    label2.textContent = 'Surface Tension (γ, N/m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            }else if (type === 'stokes') {
                formulaDisplay.textContent = 'F_d = 6πηrv';
                
                if (variable === 'dragForce') {
                    label1.textContent = 'Dynamic Viscosity (η, Pa·s):';
                    label2.textContent = 'Sphere Radius (r, m):';
                    label3.textContent = 'Velocity (v, m/s):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'viscosity') {
                    label1.textContent = 'Drag Force (F_d, N):';
                    label2.textContent = 'Sphere Radius (r, m):';
                    label3.textContent = 'Velocity (v, m/s):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'radius') {
                    label1.textContent = 'Drag Force (F_d, N):';
                    label2.textContent = 'Dynamic Viscosity (η, Pa·s):';
                    label3.textContent = 'Velocity (v, m/s):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'velocity') {
                    label1.textContent = 'Drag Force (F_d, N):';
                    label2.textContent = 'Dynamic Viscosity (η, Pa·s):';
                    label3.textContent = 'Sphere Radius (r, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                }
            } else if (type === 'poiseuille') {
                formulaDisplay.textContent = 'Q = πr⁴ΔP/8ηL';
                
                if (variable === 'flowRate') {
                    label1.textContent = 'Tube Radius (r, m):';
                    label2.textContent = 'Pressure Difference (ΔP, Pa):';
                    label3.textContent = 'Viscosity (η, Pa·s):';
                    label4.textContent = 'Tube Length (L, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    label4.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                    input4.style.display = 'block';
                } else if (variable === 'radius') {
                    label1.textContent = 'Flow Rate (Q, m³/s):';
                    label2.textContent = 'Pressure Difference (ΔP, Pa):';
                    label3.textContent = 'Viscosity (η, Pa·s):';
                    label4.textContent = 'Tube Length (L, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    label4.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                    input4.style.display = 'block';
                } else if (variable === 'pressureDiff') {
                    label1.textContent = 'Flow Rate (Q, m³/s):';
                    label2.textContent = 'Tube Radius (r, m):';
                    label3.textContent = 'Viscosity (η, Pa·s):';
                    label4.textContent = 'Tube Length (L, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    label4.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                    input4.style.display = 'block';
                } else if (variable === 'viscosity') {
                    label1.textContent = 'Flow Rate (Q, m³/s):';
                    label2.textContent = 'Tube Radius (r, m):';
                    label3.textContent = 'Pressure Difference (ΔP, Pa):';
                    label4.textContent = 'Tube Length (L, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    label4.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                    input4.style.display = 'block';
                } else if (variable === 'length') {
                    label1.textContent = 'Flow Rate (Q, m³/s):';
                    label2.textContent = 'Tube Radius (r, m):';
                    label3.textContent = 'Pressure Difference (ΔP, Pa):';
                    label4.textContent = 'Viscosity (η, Pa·s):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    label4.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                    input4.style.display = 'block';
                }
            }
        } else if (calculatorType === 'astrophysics-calculator') {
            const type = astrophysicsDropdown.value;
            const variable = variableDropdown.value;
            
            if (type === 'gravity') {
                formulaDisplay.textContent = 'F = G·m₁·m₂/r²';
                
                if (variable === 'force') {
                    label1.textContent = 'Mass 1 (m₁, kg):';
                    label2.textContent = 'Mass 2 (m₂, kg):';
                    label3.textContent = 'Distance (r, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'mass1') {
                    label1.textContent = 'Force (F, N):';
                    label2.textContent = 'Mass 2 (m₂, kg):';
                    label3.textContent = 'Distance (r, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'mass2') {
                    label1.textContent = 'Force (F, N):';
                    label2.textContent = 'Mass 1 (m₁, kg):';
                    label3.textContent = 'Distance (r, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'distance') {
                    label1.textContent = 'Force (F, N):';
                    label2.textContent = 'Mass 1 (m₁, kg):';
                    label3.textContent = 'Mass 2 (m₂, kg):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                }
            } else if (type === 'escape') {
                formulaDisplay.textContent = 'v_esc = √(2GM/r)';
                
                if (variable === 'velocity') {
                    label1.textContent = 'Mass (M, kg):';
                    label2.textContent = 'Radius (r, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'mass') {
                    label1.textContent = 'Escape Velocity (v_esc, m/s):';
                    label2.textContent = 'Radius (r, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'radius') {
                    label1.textContent = 'Escape Velocity (v_esc, m/s):';
                    label2.textContent = 'Mass (M, kg):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            } else if (type === 'orbital') {
                formulaDisplay.textContent = 'T² = (4π²/GM)r³';
                
                if (variable === 'period') {
                    label1.textContent = 'Central Mass (M, kg):';
                    label2.textContent = 'Orbital Radius (r, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'mass') {
                    label1.textContent = 'Orbital Period (T, s):';
                    label2.textContent = 'Orbital Radius (r, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'radius') {
                    label1.textContent = 'Orbital Period (T, s):';
                    label2.textContent = 'Central Mass (M, kg):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            } else if (type === 'blackhole') {
                formulaDisplay.textContent = 'r_s = 2GM/c²';
                
                if (variable === 'radius') {
                    label1.textContent = 'Black Hole Mass (M, kg):';
                    label1.style.display = 'block';
                    input1.style.display = 'block';
                } else if (variable === 'mass') {
                    label1.textContent = 'Schwarzschild Radius (r_s, m):';
                    label1.style.display = 'block';
                    input1.style.display = 'block';
                }
            } else if (type === 'luminosity') {
                formulaDisplay.textContent = 'L = 4πr²σT⁴';
                
                if (variable === 'luminosity') {
                    label1.textContent = 'Stellar Radius (r, m):';
                    label2.textContent = 'Surface Temperature (T, K):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'radius') {
                    label1.textContent = 'Luminosity (L, W):';
                    label2.textContent = 'Surface Temperature (T, K):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'temperature') {
                    label1.textContent = 'Luminosity (L, W):';
                    label2.textContent = 'Stellar Radius (r, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            } else if (type === 'distance') {
                formulaDisplay.textContent = 'm - M = 5log(d/10)';
                
                if (variable === 'distance') {
                    label1.textContent = 'Apparent Magnitude (m):';
                    label2.textContent = 'Absolute Magnitude (M):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'apparent') {
                    label1.textContent = 'Distance (d, parsecs):';
                    label2.textContent = 'Absolute Magnitude (M):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'absolute') {
                    label1.textContent = 'Distance (d, parsecs):';
                    label2.textContent = 'Apparent Magnitude (m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            } else if (type === 'hubble') {
                formulaDisplay.textContent = 'v = H₀d';
                
                if (variable === 'velocity') {
                    label1.textContent = 'Hubble Constant (H₀, km/s/Mpc):';
                    label2.textContent = 'Distance (d, Mpc):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input1.value = '70'; // Default Hubble constant
                } else if (variable === 'distance') {
                    label1.textContent = 'Recession Velocity (v, km/s):';
                    label2.textContent = 'Hubble Constant (H₀, km/s/Mpc):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input2.value = '70'; // Default Hubble constant
                } else if (variable === 'constant') {
                    label1.textContent = 'Recession Velocity (v, km/s):';
                    label2.textContent = 'Distance (d, Mpc):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            }
        } else if (calculatorType === 'material-science-calculator') {
            const type = materialScienceDropdown.value;
            const variable = variableDropdown.value;
            
            if (type === 'youngs') {
                formulaDisplay.textContent = 'E = σ/ε';
                
                if (variable === 'youngs') {
                    label1.textContent = 'Stress (σ, Pa):';
                    label2.textContent = 'Strain (ε):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'stress') {
                    label1.textContent = 'Young\'s Modulus (E, Pa):';
                    label2.textContent = 'Strain (ε):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'strain') {
                    label1.textContent = 'Stress (σ, Pa):';
                    label2.textContent = 'Young\'s Modulus (E, Pa):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            } else if (type === 'stress') {
                formulaDisplay.textContent = 'σ = F/A';
                
                if (variable === 'stress') {
                    label1.textContent = 'Force (F, N):';
                    label2.textContent = 'Area (A, m²):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'force') {
                    label1.textContent = 'Stress (σ, Pa):';
                    label2.textContent = 'Area (A, m²):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'area') {
                    label1.textContent = 'Force (F, N):';
                    label2.textContent = 'Stress (σ, Pa):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            } else if (type === 'strain') {
                formulaDisplay.textContent = 'ε = ΔL/L₀';
                
                if (variable === 'strain') {
                    label1.textContent = 'Length Change (ΔL, m):';
                    label2.textContent = 'Initial Length (L₀, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'lengthChange') {
                    label1.textContent = 'Strain (ε):';
                    label2.textContent = 'Initial Length (L₀, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'initialLength') {
                    label1.textContent = 'Length Change (ΔL, m):';
                    label2.textContent = 'Strain (ε):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            } else if (type === 'shear') {
                formulaDisplay.textContent = 'G = τ/γ';
                
                if (variable === 'shearModulus') {
                    label1.textContent = 'Shear Stress (τ, Pa):';
                    label2.textContent = 'Shear Strain (γ):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'shearStress') {
                    label1.textContent = 'Shear Modulus (G, Pa):';
                    label2.textContent = 'Shear Strain (γ):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'shearStrain') {
                    label1.textContent = 'Shear Stress (τ, Pa):';
                    label2.textContent = 'Shear Modulus (G, Pa):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            } else if (type === 'bulk') {
                formulaDisplay.textContent = 'K = -P/(ΔV/V)';
                
                if (variable === 'bulkModulus') {
                    label1.textContent = 'Pressure (P, Pa):';
                    label2.textContent = 'Volume Strain (ΔV/V):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'pressure') {
                    label1.textContent = 'Bulk Modulus (K, Pa):';
                    label2.textContent = 'Volume Strain (ΔV/V):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'volumeStrain') {
                    label1.textContent = 'Pressure (P, Pa):';
                    label2.textContent = 'Bulk Modulus (K, Pa):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            } else if (type === 'poisson') {
                formulaDisplay.textContent = 'ν = -εₜ/εₗ';
                
                if (variable === 'poissonRatio') {
                    label1.textContent = 'Lateral Strain (εₜ):';
                    label2.textContent = 'Axial Strain (εₗ):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'lateralStrain') {
                    label1.textContent = 'Poisson\'s Ratio (ν):';
                    label2.textContent = 'Axial Strain (εₗ):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'axialStrain') {
                    label1.textContent = 'Lateral Strain (εₜ):';
                    label2.textContent = 'Poisson\'s Ratio (ν):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            } else if (type === 'thermal-expansion') {
                formulaDisplay.textContent = 'ΔL = αL₀ΔT';
                
                if (variable === 'lengthChange') {
                    label1.textContent = 'Coefficient (α, K⁻¹):';
                    label2.textContent = 'Initial Length (L₀, m):';
                    label3.textContent = 'Temperature Change (ΔT, K):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'coefficient') {
                    label1.textContent = 'Length Change (ΔL, m):';
                    label2.textContent = 'Initial Length (L₀, m):';
                    label3.textContent = 'Temperature Change (ΔT, K):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'initialLength') {
                    label1.textContent = 'Length Change (ΔL, m):';
                    label2.textContent = 'Coefficient (α, K⁻¹):';
                    label3.textContent = 'Temperature Change (ΔT, K):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                } else if (variable === 'tempChange') {
                    label1.textContent = 'Length Change (ΔL, m):';
                    label2.textContent = 'Coefficient (α, K⁻¹):';
                    label3.textContent = 'Initial Length (L₀, m):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                }
            } else if (type === 'diffusion') {
                formulaDisplay.textContent = 'J = -D∇c';
                
                if (variable === 'diffusionCoeff') {
                    label1.textContent = 'Flux (J, mol/m²·s):';
                    label2.textContent = 'Concentration Gradient (∇c, mol/m⁴):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'flux') {
                    label1.textContent = 'Diffusion Coefficient (D, m²/s):';
                    label2.textContent = 'Concentration Gradient (∇c, mol/m⁴):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                } else if (variable === 'gradient') {
                    label1.textContent = 'Flux (J, mol/m²·s):';
                    label2.textContent = 'Diffusion Coefficient (D, m²/s):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                }
            }
        } else if (calculatorType === 'miscellaneous-calculator') {
            const type = miscellaneousDropdown.value;
            const variable = variableDropdown.value;
            
            if (type === 'dimensional') {
                formulaDisplay.textContent = '[X] = MᵃLᵇTᶜ';
                
                if (variable === 'dimensions') {
                    label1.textContent = 'Physical Quantity:';
                    label1.style.display = 'block';
                    input1.style.display = 'block';
                    input1.placeholder = 'e.g., Force, Energy, Power';
                } else if (variable === 'units') {
                    label1.textContent = 'Value with Units:';
                    label1.style.display = 'block';
                    input1.style.display = 'block';
                    input1.placeholder = 'e.g., 5 kg m/s²';
                }
            } else if (type === 'uncertainty') {
                if (variable === 'addition') {
                    formulaDisplay.textContent = 'δz = √[(δx)² + (δy)²]';
                    label1.textContent = 'Value 1 (x ± δx):';
                    label2.textContent = 'Uncertainty 1 (δx):';
                    label3.textContent = 'Value 2 (y ± δy):';
                    label4.textContent = 'Uncertainty 2 (δy):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    label4.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                    input4.style.display = 'block';
                } else if (variable === 'multiplication') {
                    formulaDisplay.textContent = 'δz/z = √[(δx/x)² + (δy/y)²]';
                    label1.textContent = 'Value 1 (x):';
                    label2.textContent = 'Uncertainty 1 (δx):';
                    label3.textContent = 'Value 2 (y):';
                    label4.textContent = 'Uncertainty 2 (δy):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    label4.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                    input4.style.display = 'block';
                } else if (variable === 'power') {
                    formulaDisplay.textContent = 'δy/y = |n| · (δx/x)';
                    label1.textContent = 'Base Value (x):';
                    label2.textContent = 'Uncertainty in x (δx):';
                    label3.textContent = 'Power (n):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                }
            } else if (type === 'vector') {
                if (variable === 'addition') {
                    formulaDisplay.textContent = '→C = →A + →B';
                    label1.textContent = 'Vector A x-component:';
                    label2.textContent = 'Vector A y-component:';
                    label3.textContent = 'Vector B x-component:';
                    label4.textContent = 'Vector B y-component:';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    label4.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                    input4.style.display = 'block';
                } else if (variable === 'dotProduct') {
                    formulaDisplay.textContent = 'A·B = |A||B|cosθ';
                    label1.textContent = 'Vector A x-component:';
                    label2.textContent = 'Vector A y-component:';
                    label3.textContent = 'Vector B x-component:';
                    label4.textContent = 'Vector B y-component:';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    label4.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                    input4.style.display = 'block';
                } else if (variable === 'crossProduct') {
                    formulaDisplay.textContent = '|A×B| = |A||B|sinθ';
                    label1.textContent = 'Vector A x-component:';
                    label2.textContent = 'Vector A y-component:';
                    label3.textContent = 'Vector A z-component:';
                    label4.textContent = 'Vector B x-component:';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    label4.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                    input4.style.display = 'block';
                    // Need to add input for B's y and z components
                    // This would require adding input5 and input6
                } else if (variable === 'magnitude') {
                    formulaDisplay.textContent = '|A| = √(Ax² + Ay² + Az²)';
                    label1.textContent = 'Vector x-component:';
                    label2.textContent = 'Vector y-component:';
                    label3.textContent = 'Vector z-component:';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                }
            } else if (type === 'statistics') {
                if (variable === 'mean') {
                    formulaDisplay.textContent = 'μ = Σxi/n';
                    label1.textContent = 'Data Points (comma separated):';
                    label1.style.display = 'block';
                    input1.style.display = 'block';
                    input1.placeholder = 'e.g., 1.2, 3.4, 5.6, 7.8';
                } else if (variable === 'stdDev') {
                    formulaDisplay.textContent = 'σ = √[Σ(xi-μ)²/n]';
                    label1.textContent = 'Data Points (comma separated):';
                    label1.style.display = 'block';
                    input1.style.display = 'block';
                    input1.placeholder = 'e.g., 1.2, 3.4, 5.6, 7.8';
                } else if (variable === 'linearReg') {
                    formulaDisplay.textContent = 'y = mx + b';
                    label1.textContent = 'x values (comma separated):';
                    label2.textContent = 'y values (comma separated):';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input1.placeholder = 'e.g., 1, 2, 3, 4';
                    input2.placeholder = 'e.g., 2.1, 3.9, 6.2, 8.0';
                }
            } else if (type === 'conversion') {
                if (variable === 'length') {
                    formulaDisplay.textContent = 'Convert between length units';
                    label1.textContent = 'Value:';
                    label2.textContent = 'From Unit:';
                    label3.textContent = 'To Unit:';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                    input2.placeholder = 'e.g., m, km, ft, mi';
                    input3.placeholder = 'e.g., m, km, ft, mi';
                } else if (variable === 'mass') {
                    formulaDisplay.textContent = 'Convert between mass units';
                    label1.textContent = 'Value:';
                    label2.textContent = 'From Unit:';
                    label3.textContent = 'To Unit:';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                    input2.placeholder = 'e.g., kg, g, lb, oz';
                    input3.placeholder = 'e.g., kg, g, lb, oz';
                } else if (variable === 'time') {
                    formulaDisplay.textContent = 'Convert between time units';
                    label1.textContent = 'Value:';
                    label2.textContent = 'From Unit:';
                    label3.textContent = 'To Unit:';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                    input2.placeholder = 'e.g., s, min, hr, day';
                    input3.placeholder = 'e.g., s, min, hr, day';
                } else if (variable === 'energy') {
                    formulaDisplay.textContent = 'Convert between energy units';
                    label1.textContent = 'Value:';
                    label2.textContent = 'From Unit:';
                    label3.textContent = 'To Unit:';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                    input2.placeholder = 'e.g., J, kWh, eV, cal';
                    input3.placeholder = 'e.g., J, kWh, eV, cal';
                } else if (variable === 'force') {
                    formulaDisplay.textContent = 'Convert between force units';
                    label1.textContent = 'Value:';
                    label2.textContent = 'From Unit:';
                    label3.textContent = 'To Unit:';
                    label1.style.display = 'block';
                    label2.style.display = 'block';
                    label3.style.display = 'block';
                    input1.style.display = 'block';
                    input2.style.display = 'block';
                    input3.style.display = 'block';
                    input2.placeholder = 'e.g., N, dyn, lbf';
                    input3.placeholder = 'e.g., N, dyn, lbf';
                }
            } else if (type === 'fermi') {
                formulaDisplay.textContent = 'Order of Magnitude Estimation';
                
                if (variable === 'estimation') {
                    label1.textContent = 'Value:';
                    label1.style.display = 'block';
                    input1.style.display = 'block';
                }
            }
        }
    }

    // Handle form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const calculatorType = calculators.value;
        let result = null;
        
        // Get input values
        const val1 = evaluateExpression(input1.value);
        const val2 = evaluateExpression(input2.value);
        const val3 = evaluateExpression(input3.value);
        const val4 = evaluateExpression(input4.value);
        
        // Simple calculator for demonstration
        if (calculatorType === 'mechanics-calculator') {
            const type = mechanicsDropdown.value;
            const variable = variableDropdown.value;
            
            if (type === 'speed') {
                if (variable === 'speed') {
                    result = val1 / val2; // d/t
                } else if (variable === 'distance') {
                    result = val1 * val2; // v*t
                } else if (variable === 'time') {
                    result = val1 / val2; // d/v
                }
            } else if (type === 'force') {
                if (variable === 'force') {
                    result = val1 * val2; // m*a
                } else if (variable === 'mass') {
                    result = val1 / val2; // F/a
                } else if (variable === 'acceleration') {
                    result = val1 / val2; // F/m
                }
            } else if (type === 'work') {
                if (variable === 'work') {
                    result = val1 * val2; // F*d
                } else if (variable === 'force') {
                    result = val1 / val2; // W/d
                } else if (variable === 'distance') {
                    result = val1 / val2; // W/F
                }
            } else if (type === 'kinetic') {
                if (variable === 'ke') {
                    result = 0.5 * val1 * val2 * val2; // 0.5*m*v^2
                } else if (variable === 'mass') {
                    result = 2 * val1 / (val2 * val2); // 2*KE/v^2
                } else if (variable === 'velocity') {
                    result = Math.sqrt(2 * val1 / val2); // sqrt(2*KE/m)
                }
            }
        } else if (calculatorType === 'thermodynamics-calculator') {
            const type = thermodynamicsDropdown.value;
            const variable = variableDropdown.value;
            
            if (type === 'idealGas') {
                const R = 8.314; // Gas constant in J/(mol·K)
                if (variable === 'pressure') {
                    result = val1 * R * val2 / val3; // nRT/V
                } else if (variable === 'volume') {
                    result = val1 * R * val2 / val3; // nRT/P
                } else if (variable === 'moles') {
                    result = val1 * val2 / (R * val3); // PV/RT
                } else if (variable === 'temperature') {
                    result = val1 * val2 / (val3 * R); // PV/nR
                }
            } else if (type === 'heatTransfer') {
                if (variable === 'heat') {
                    result = val1 * val2 * val3; // m*c*ΔT
                } else if (variable === 'mass') {
                    result = val1 / (val2 * val3); // Q/c/ΔT
                } else if (variable === 'specificHeat') {
                    result = val1 / (val2 * val3); // Q/m/ΔT
                } else if (variable === 'tempChange') {
                    result = val1 / (val2 * val3); // Q/m/c
                }
            } else if (type === 'thermalExpansion') {
                if (variable === 'lengthChange') {
                    result = val1 * val2 * val3; // α*L*ΔT
                } else if (variable === 'coefficient') {
                    result = val1 / (val2 * val3); // ΔL/L/ΔT
                } else if (variable === 'initialLength') {
                    result = val1 / (val2 * val3); // ΔL/α/ΔT
                } else if (variable === 'tempChange') {
                    result = val1 / (val2 * val3); // ΔL/α/L
                }
            } else if (type === 'entropy') {
                if (variable === 'entropyChange') {
                    result = val1 / val2; // Q/T
                } else if (variable === 'heat') {
                    result = val1 * val2; // ΔS*T
                } else if (variable === 'temperature') {
                    result = val1 / val2; // Q/ΔS
                }
            }
        } else if (calculatorType === 'electromagnetism-calculator') {
            const type = electromagnetismDropdown.value;
            const variable = variableDropdown.value;
            
            if (type === 'coulomb') {
                const k = 8.99e9; // Coulomb's constant
                if (variable === 'force') {
                    result = k * val1 * val2 / (val3 * val3); // k*q1*q2/r²
                } else if (variable === 'charge1') {
                    result = val1 * val3 * val3 / (k * val2); // F*r²/k/q2
                } else if (variable === 'charge2') {
                    result = val1 * val3 * val3 / (k * val2); // F*r²/k/q1
                } else if (variable === 'distance') {
                    result = Math.sqrt(k * val2 * val3 / val1); // sqrt(k*q1*q2/F)
                }
            } else if (type === 'efield') {
                if (variable === 'electricField') {
                    result = val1 / val2; // F/q
                } else if (variable === 'force') {
                    result = val1 * val2; // E*q
                } else if (variable === 'charge') {
                    result = val1 / val2; // F/E
                }
            } else if (type === 'ohms') {
                if (variable === 'voltage') {
                    result = val1 * val2; // I*R
                } else if (variable === 'current') {
                    result = val1 / val2; // V/R
                } else if (variable === 'resistance') {
                    result = val1 / val2; // V/I
                }
            } else if (type === 'power') {
                if (variable === 'power') {
                    result = val1 * val2; // I*V
                } else if (variable === 'current') {
                    result = val1 / val2; // P/V
                } else if (variable === 'voltage') {
                    result = val1 / val2; // P/I
                }
            } else if (type === 'capacitance') {
                if (variable === 'capacitance') {
                    result = val1 / val2; // Q/V
                } else if (variable === 'charge') {
                    result = val1 * val2; // C*V
                } else if (variable === 'voltage') {
                    result = val1 / val2; // Q/C
                }
            } else if (type === 'magneticField') {
                const mu0 = 4 * Math.PI * 1e-7; // Magnetic permeability
                if (variable === 'magneticField') {
                    result = mu0 * val1 / (2 * Math.PI * val2); // μ₀I/2πr
                } else if (variable === 'current') {
                    result = 2 * Math.PI * val1 * val2 / mu0; // 2πrB/μ₀
                } else if (variable === 'distance') {
                    result = mu0 * val2 / (2 * Math.PI * val1); // μ₀I/2πB
                }
            }
        } else if (calculatorType === 'wave-optics-calculator') {
            const type = waveOpticsDropdown.value;
            const variable = variableDropdown.value;
            
            if (type === 'wavelength') {
                if (variable === 'wavelength') {
                    result = val1 / val2; // v/f
                } else if (variable === 'frequency') {
                    result = val1 / val2; // v/λ
                } else if (variable === 'velocity') {
                    result = val1 * val2; // f*λ
                }
            } else if (type === 'diffraction') {
                const degToRad = Math.PI / 180;
                if (variable === 'angle') {
                    result = Math.asin(val1 * val2 / val3) / degToRad; // asin(m*λ/d) in degrees
                } else if (variable === 'order') {
                    result = (Math.sin(val1 * degToRad) * val3) / val2; // sin(θ)*d/λ
                } else if (variable === 'wavelength') {
                    result = (Math.sin(val1 * degToRad) * val3) / val2; // sin(θ)*d/m
                } else if (variable === 'spacing') {
                    result = (val2 * val3) / Math.sin(val1 * degToRad); // m*λ/sin(θ)
                }
            } else if (type === 'snell') {
                const degToRad = Math.PI / 180;
                if (variable === 'angle1') {
                    result = Math.asin(val2 * Math.sin(val3 * degToRad) / val1) / degToRad;
                } else if (variable === 'angle2') {
                    result = Math.asin(val1 * Math.sin(val3 * degToRad) / val2) / degToRad;
                } else if (variable === 'index1') {
                    result = val1 * Math.sin(val3 * degToRad) / Math.sin(val2 * degToRad);
                } else if (variable === 'index2') {
                    result = val1 * Math.sin(val2 * degToRad) / Math.sin(val3 * degToRad);
                }
            } else if (type === 'lens') {
                if (variable === 'focalLength') {
                    result = 1 / (1/val1 + 1/val2); // 1/(1/d₀ + 1/d₁)
                } else if (variable === 'objectDistance') {
                    result = 1 / (1/val1 - 1/val2); // 1/(1/f - 1/d₁)
                } else if (variable === 'imageDistance') {
                    result = 1 / (1/val1 - 1/val2); // 1/(1/f - 1/d₀)
                }
            }
        } else if (calculatorType === 'modern-physics-calculator') {
            const type = modernPhysicsDropdown.value;
            const variable = variableDropdown.value;
            
            if (type === 'relativity') {
                const c = 299792458; // Speed of light in m/s
                
                if (variable === 'energy') {
                    result = val1 * c * c; // m*c^2
                } else if (variable === 'mass') {
                    result = val1 / (c * c); // E/c^2
                }
            } else if (type === 'photoelectric') {
                const h = 6.626e-34; // Planck's constant
                const eV = 1.602e-19; // electron volt in joules
                
                if (variable === 'kineticEnergy') {
                    result = h * val1 / eV - val2; // (h*f)/eV - φ
                } else if (variable === 'frequency') {
                    result = (val1 + val2) * eV / h; // (E_k + φ)*eV/h
                } else if (variable === 'workFunction') {
                    result = h * val2 / eV - val1; // (h*f)/eV - E_k
                }
            } else if (type === 'bohrModel') {
                if (variable === 'energy') {
                    result = -13.6 / (val1 * val1); // -13.6/n²
                } else if (variable === 'level') {
                    result = Math.sqrt(-13.6 / val1); // sqrt(-13.6/E)
                } else if (variable === 'radius') {
                    const a0 = 5.29e-11; // Bohr radius in meters
                    result = val1 * val1 * a0; // n²*a0
                }
            } else if (type === 'radioactive') {
                if (variable === 'finalAmount') {
                    result = val1 * Math.exp(-val2 * val3); // N₀*e^(-λt)
                } else if (variable === 'initialAmount') {
                    result = val1 / Math.exp(-val2 * val3); // N/e^(-λt)
                } else if (variable === 'decayConstant') {
                    result = -Math.log(val1 / val2) / val3; // -ln(N/N₀)/t
                } else if (variable === 'time') {
                    result = -Math.log(val1 / val2) / val3; // -ln(N/N₀)/λ
                } else if (variable === 'halfLife') {
                    result = Math.log(2) / val1; // ln(2)/λ
                }
            }
        } else if (calculatorType === 'fluid-physics-calculator') {
            const type = fluidPhysicsDropdown.value;
            const variable = variableDropdown.value;
            
            if (type === 'density') {
                if (variable === 'density') {
                    result = val1 / val2; // m/V
                } else if (variable === 'mass') {
                    result = val1 * val2; // ρ*V
                } else if (variable === 'volume') {
                    result = val1 / val2; // m/ρ
                }
            } else if (type === 'pressure') {
                if (variable === 'pressure') {
                    result = val1 / val2; // F/A
                } else if (variable === 'force') {
                    result = val1 * val2; // P*A
                } else if (variable === 'area') {
                    result = val1 / val2; // F/P
                }
            } else if (type === 'hydrostatic') {
                if (variable === 'pressure') {
                    result = val1 * val2 * val3; // ρ*g*h
                } else if (variable === 'density') {
                    result = val1 / (val2 * val3); // P/(g*h)
                } else if (variable === 'height') {
                    result = val1 / (val2 * val3); // P/(ρ*g)
                } else if (variable === 'gravity') {
                    result = val1 / (val2 * val3); // P/(ρ*h)
                }
            } else if (type === 'buoyancy') {
                if (variable === 'force') {
                    result = val1 * val2 * val3; // ρ*g*V
                } else if (variable === 'density') {
                    result = val1 / (val2 * val3); // F/(g*V)
                } else if (variable === 'volume') {
                    result = val1 / (val2 * val3); // F/(ρ*g)
                } else if (variable === 'gravity') {
                    result = val1 / (val2 * val3); // F/(ρ*V)
                }
            } else if (type === 'bernoulli') {
                const rho = val3; // Density
                const g = 9.81; // Gravity
                if (variable === 'pressure') {
                    result = rho * g * val1 + 0.5 * rho * val2 * val2; // ρgh + ½ρv²
                } else if (variable === 'height') {
                    result = (val1 - 0.5 * rho * val2 * val2) / (rho * g); // (P - ½ρv²)/(ρg)
                } else if (variable === 'velocity') {
                    result = Math.sqrt(2 * (val1 - rho * g * val2) / rho); // sqrt(2(P - ρgh)/ρ)
                }
            } else if (type === 'continuity') {
                if (variable === 'area1') {
                    result = val1 * val3 / val2; // A₂v₂/v₁
                } else if (variable === 'velocity1') {
                    result = val2 * val3 / val1; // A₂v₂/A₁
                } else if (variable === 'area2') {
                    result = val1 * val2 / val3; // A₁v₁/v₂
                } else if (variable === 'velocity2') {
                    result = val1 * val2 / val3; // A₁v₁/A₂
                }
            } else if (type === 'reynolds') {
                if (variable === 'reynolds') {
                    result = val1 * val2 * val3 / 0.001; // ρvL/μ (default μ = 0.001 for water)
                } else if (variable === 'density') {
                    result = val1 * 0.001 / (val2 * val3); // Re·μ/(v·L)
                } else if (variable === 'velocity') {
                    result = val1 * 0.001 / (val2 * val3); // Re·μ/(ρ·L)
                } else if (variable === 'length') {
                    result = val1 * 0.001 / (val2 * val3); // Re·μ/(ρ·v)
                } else if (variable === 'viscosity') {
                    result = val2 * val3 * val1 / 0.001; // ρvL/Re
                }
            } else if (type === 'surfaceTension') {
                if (variable === 'force') {
                    result = val1 * val2; // γ·L
                } else if (variable === 'surfaceTension') {
                    result = val1 / val2; // F/L
                } else if (variable === 'length') {
                    result = val1 / val2; // F/γ
                }
            }else if (type === 'stokes') {
                const pi = Math.PI;
                if (variable === 'dragForce') {
                    result = 6 * pi * val1 * val2 * val3; // 6πηrv
                } else if (variable === 'viscosity') {
                    result = val1 / (6 * pi * val2 * val3); // F_d/(6πrv)
                } else if (variable === 'radius') {
                    result = val1 / (6 * pi * val2 * val3); // F_d/(6πηv)
                } else if (variable === 'velocity') {
                    result = val1 / (6 * pi * val2 * val3); // F_d/(6πηr)
                }
            } else if (type === 'poiseuille') {
                const pi = Math.PI;
                if (variable === 'flowRate') {
                    result = (pi * Math.pow(val1, 4) * val2) / (8 * val3 * val4); // πr⁴ΔP/8ηL
                } else if (variable === 'radius') {
                    result = Math.pow((8 * val1 * val3 * val4) / (pi * val2), 0.25); // (8QηL/πΔP)^(1/4)
                } else if (variable === 'pressureDiff') {
                    result = (8 * val1 * val3 * val4) / (pi * Math.pow(val2, 4)); // 8QηL/πr⁴
                } else if (variable === 'viscosity') {
                    result = (pi * Math.pow(val2, 4) * val3) / (8 * val1 * val4); // πr⁴ΔP/8QL
                } else if (variable === 'length') {
                    result = (pi * Math.pow(val2, 4) * val3) / (8 * val1 * val4); // πr⁴ΔP/8Qη
                }
            }
        } else if (calculatorType === 'astrophysics-calculator') {
            const type = astrophysicsDropdown.value;
            const variable = variableDropdown.value;
            
            if (type === 'gravity') {
                const G = 6.674e-11; // Gravitational constant
                if (variable === 'force') {
                    result = G * val1 * val2 / (val3 * val3); // G*m1*m2/r²
                } else if (variable === 'mass1') {
                    result = val1 * val3 * val3 / (G * val2); // F*r²/(G*m2)
                } else if (variable === 'mass2') {
                    result = val1 * val3 * val3 / (G * val2); // F*r²/(G*m1)
                } else if (variable === 'distance') {
                    result = Math.sqrt(G * val2 * val3 / val1); // sqrt(G*m1*m2/F)
                }
            } else if (type === 'escape') {
                const G = 6.674e-11; // Gravitational constant
                if (variable === 'velocity') {
                    result = Math.sqrt(2 * G * val1 / val2); // sqrt(2GM/r)
                } else if (variable === 'mass') {
                    result = val1 * val1 * val2 / (2 * G); // v²*r/(2G)
                } else if (variable === 'radius') {
                    result = 2 * G * val2 / (val1 * val1); // 2GM/v²
                }
            } else if (type === 'orbital') {
                const G = 6.674e-11; // Gravitational constant
                const pi = Math.PI;
                if (variable === 'period') {
                    result = Math.sqrt((4 * pi * pi * val2 * val2 * val2) / (G * val1)); // sqrt((4π²r³)/(GM))
                } else if (variable === 'mass') {
                    result = (4 * pi * pi * val2 * val2 * val2) / (G * val1 * val1); // 4π²r³/(GT²)
                } else if (variable === 'radius') {
                    result = Math.cbrt((G * val2 * val1 * val1) / (4 * pi * pi)); // cbrt((GMT²)/(4π²))
                }
            } else if (type === 'blackhole') {
                const G = 6.674e-11; // Gravitational constant
                const c = 299792458; // Speed of light
                if (variable === 'radius') {
                    result = (2 * G * val1) / (c * c); // 2GM/c²
                } else if (variable === 'mass') {
                    result = (val1 * c * c) / (2 * G); // r_s*c²/(2G)
                }
            } else if (type === 'luminosity') {
                const sigma = 5.67e-8; // Stefan-Boltzmann constant
                const pi = Math.PI;
                if (variable === 'luminosity') {
                    result = 4 * pi * val1 * val1 * sigma * Math.pow(val2, 4); // 4πr²σT⁴
                } else if (variable === 'radius') {
                    result = Math.sqrt(val1 / (4 * pi * sigma * Math.pow(val2, 4))); // sqrt(L/(4πσT⁴))
                } else if (variable === 'temperature') {
                    result = Math.pow(val1 / (4 * pi * val2 * val2 * sigma), 0.25); // (L/(4πr²σ))^(1/4)
                }
            } else if (type === 'distance') {
                if (variable === 'distance') {
                    result = 10 * Math.pow(10, (val1 - val2) / 5); // 10*10^((m-M)/5)
                } else if (variable === 'apparent') {
                    result = val2 + 5 * Math.log10(val1 / 10); // M + 5log(d/10)
                } else if (variable === 'absolute') {
                    result = val2 - 5 * Math.log10(val1 / 10); // m - 5log(d/10)
                }
            } else if (type === 'hubble') {
                if (variable === 'velocity') {
                    result = val1 * val2; // H₀*d
                } else if (variable === 'distance') {
                    result = val1 / val2; // v/H₀
                } else if (variable === 'constant') {
                    result = val1 / val2; // v/d
                }
            }
        } else if (calculatorType === 'material-science-calculator') {
            const type = materialScienceDropdown.value;
            const variable = variableDropdown.value;
            
            if (type === 'youngs') {
                if (variable === 'youngs') {
                    result = val1 / val2; // σ/ε
                } else if (variable === 'stress') {
                    result = val1 * val2; // E*ε
                } else if (variable === 'strain') {
                    result = val1 / val2; // σ/E
                }
            } else if (type === 'stress') {
                if (variable === 'stress') {
                    result = val1 / val2; // F/A
                } else if (variable === 'force') {
                    result = val1 * val2; // σ*A
                } else if (variable === 'area') {
                    result = val1 / val2; // F/σ
                }
            } else if (type === 'strain') {
                if (variable === 'strain') {
                    result = val1 / val2; // ΔL/L₀
                } else if (variable === 'lengthChange') {
                    result = val1 * val2; // ε*L₀
                } else if (variable === 'initialLength') {
                    result = val1 / val2; // ΔL/ε
                }
            } else if (type === 'shear') {
                if (variable === 'shearModulus') {
                    result = val1 / val2; // τ/γ
                } else if (variable === 'shearStress') {
                    result = val1 * val2; // G*γ
                } else if (variable === 'shearStrain') {
                    result = val1 / val2; // τ/G
                }
            } else if (type === 'bulk') {
                if (variable === 'bulkModulus') {
                    result = -val1 / val2; // -P/(ΔV/V)
                } else if (variable === 'pressure') {
                    result = -val1 * val2; // -K*(ΔV/V)
                } else if (variable === 'volumeStrain') {
                    result = -val1 / val2; // -P/K
                }
            } else if (type === 'poisson') {
                if (variable === 'poissonRatio') {
                    result = -val1 / val2; // -εₜ/εₗ
                } else if (variable === 'lateralStrain') {
                    result = -val1 * val2; // -ν*εₗ
                } else if (variable === 'axialStrain') {
                    result = -val1 / val2; // -εₜ/ν
                }
            } else if (type === 'thermal-expansion') {
                if (variable === 'lengthChange') {
                    result = val1 * val2 * val3; // α*L₀*ΔT
                } else if (variable === 'coefficient') {
                    result = val1 / (val2 * val3); // ΔL/(L₀*ΔT)
                } else if (variable === 'initialLength') {
                    result = val1 / (val2 * val3); // ΔL/(α*ΔT)
                } else if (variable === 'tempChange') {
                    result = val1 / (val2 * val3); // ΔL/(α*L₀)
                }
            } else if (type === 'diffusion') {
                if (variable === 'diffusionCoeff') {
                    result = -val1 / val2; // -J/∇c
                } else if (variable === 'flux') {
                    result = -val1 * val2; // -D*∇c
                } else if (variable === 'gradient') {
                    result = -val1 / val2; // -J/D
                }
            }
        } else if (calculatorType === 'miscellaneous-calculator') {
            const type = miscellaneousDropdown.value;
            const variable = variableDropdown.value;
            
            if (type === 'dimensional') {
                if (variable === 'dimensions') {
                    // This would require a database of physical quantities and their dimensions
                    // Simplified implementation
                    const dimensions = {
                        'force': 'MLT⁻²',
                        'energy': 'ML²T⁻²',
                        'power': 'ML²T⁻³',
                        'momentum': 'MLT⁻¹',
                        'velocity': 'LT⁻¹',
                        'acceleration': 'LT⁻²',
                        'pressure': 'ML⁻¹T⁻²',
                        'density': 'ML⁻³',
                        'torque': 'ML²T⁻²',
                        'angular momentum': 'ML²T⁻¹',
                        'frequency': 'T⁻¹',
                        'electric charge': 'IT',
                        'electric potential': 'ML²T⁻³I⁻¹',
                        'electric field': 'MLT⁻³I⁻¹',
                        'electric resistance': 'ML²T⁻³I⁻²',
                        'magnetic field': 'MT⁻²I⁻¹',
                        'inductance': 'ML²T⁻²I⁻²'
                    };
                    
                    const input = val1.toString().toLowerCase();
                    const dimension = dimensions[input] || 'Quantity not found';
                    resultDiv.textContent = 'Dimensions: ' + dimension;
                    return;
                } else if (variable === 'units') {
                    // This would require unit parsing
                    resultDiv.textContent = 'Unit analysis requires more complex implementation';
                    return;
                }
            } else if (type === 'uncertainty') {
                if (variable === 'addition') {
                    // Calculate uncertainty for addition/subtraction
                    // δz = √[(δx)² + (δy)²]
                    const value1 = val1;
                    const uncertainty1 = val2;
                    const value2 = val3;
                    const uncertainty2 = val4;
                    
                    const sumResult = value1 + value2;
                    const uncertaintyResult = Math.sqrt(Math.pow(uncertainty1, 2) + Math.pow(uncertainty2, 2));
                    
                    result = sumResult;
                    resultDiv.textContent = `Result: ${result.toFixed(4)} ± ${uncertaintyResult.toFixed(4)}`;
                    return;
                } else if (variable === 'multiplication') {
                    // Calculate uncertainty for multiplication/division
                    // For multiplication: δz/z = √[(δx/x)² + (δy/y)²]
                    const value1 = val1;
                    const uncertainty1 = val2;
                    const value2 = val3;
                    const uncertainty2 = val4;
                    
                    const multResult = value1 * value2;
                    const relUncertainty = Math.sqrt(Math.pow(uncertainty1/value1, 2) + Math.pow(uncertainty2/value2, 2));
                    const absoluteUncertainty = multResult * relUncertainty;
                    
                    result = multResult;
                    resultDiv.textContent = `Result: ${result.toFixed(4)} ± ${absoluteUncertainty.toFixed(4)}`;
                    return;
                } else if (variable === 'power') {
                    // Calculate uncertainty for power function
                    // δy/y = |n| · (δx/x)
                    const value = val1;
                    const uncertainty = val2;
                    const power = val3;
                    
                    const powResult = Math.pow(value, power);
                    const relUncertainty = Math.abs(power) * (uncertainty / value);
                    const absoluteUncertainty = powResult * relUncertainty;
                    
                    result = powResult;
                    resultDiv.textContent = `Result: ${result.toFixed(4)} ± ${absoluteUncertainty.toFixed(4)}`;
                    return;
                }
            } else if (type === 'vector') {
                if (variable === 'addition') {
                    // Vector addition
                    const ax = val1;
                    const ay = val2;
                    const bx = val3;
                    const by = val4;
                    
                    const cx = ax + bx;
                    const cy = ay + by;
                    
                    resultDiv.textContent = `Result: (${cx.toFixed(4)}, ${cy.toFixed(4)})`;
                    return;
                } else if (variable === 'dotProduct') {
                    // Dot product
                    const ax = val1;
                    const ay = val2;
                    const bx = val3;
                    const by = val4;
                    
                    const dotProduct = ax * bx + ay * by;
                    
                    result = dotProduct;
                    return;
                } else if (variable === 'crossProduct') {
                    // This is a simplified 2D version
                    const ax = val1;
                    const ay = val2;
                    const az = val3;
                    const bx = val4;
                    
                    // We need B's y and z components
                    resultDiv.textContent = 'Cross product requires all vector components';
                    return;
                } else if (variable === 'magnitude') {
                    // Vector magnitude
                    const x = val1;
                    const y = val2;
                    const z = val3 || 0; // In case z is not provided
                    
                    result = Math.sqrt(x*x + y*y + z*z);
                    return;
                }
            } else if (type === 'statistics') {
                if (variable === 'mean') {
                    // Calculate mean
                    const dataString = input1.value;
                    const dataPoints = dataString.split(',').map(x => parseFloat(x.trim())).filter(x => !isNaN(x));
                    
                    if (dataPoints.length === 0) {
                        resultDiv.textContent = 'Error: No valid data points';
                        return;
                    }
                    
                    const sum = dataPoints.reduce((a, b) => a + b, 0);
                    result = sum / dataPoints.length;
                    return;
                } else if (variable === 'stdDev') {
                    // Calculate standard deviation
                    const dataString = input1.value;
                    const dataPoints = dataString.split(',').map(x => parseFloat(x.trim())).filter(x => !isNaN(x));
                    
                    if (dataPoints.length === 0) {
                        resultDiv.textContent = 'Error: No valid data points';
                        return;
                    }
                    
                    const mean = dataPoints.reduce((a, b) => a + b, 0) / dataPoints.length;
                    const squareDiffs = dataPoints.map(x => Math.pow(x - mean, 2));
                    const avgSquareDiff = squareDiffs.reduce((a, b) => a + b, 0) / dataPoints.length;
                    result = Math.sqrt(avgSquareDiff);
                    return;
                } else if (variable === 'linearReg') {
                    // Linear regression
                    const xString = input1.value;
                    const yString = input2.value;
                    
                    const xValues = xString.split(',').map(x => parseFloat(x.trim())).filter(x => !isNaN(x));
                    const yValues = yString.split(',').map(x => parseFloat(x.trim())).filter(x => !isNaN(x));
                    
                    if (xValues.length !== yValues.length || xValues.length === 0) {
                        resultDiv.textContent = 'Error: Data points must match and be valid';
                        return;
                    }
                    
                    const n = xValues.length;
                    const sumX = xValues.reduce((a, b) => a + b, 0);
                    const sumY = yValues.reduce((a, b) => a + b, 0);
                    const sumXY = xValues.map((x, i) => x * yValues[i]).reduce((a, b) => a + b, 0);
                    const sumXX = xValues.map(x => x * x).reduce((a, b) => a + b, 0);
                    
                    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
                    const intercept = (sumY - slope * sumX) / n;
                    
                    resultDiv.textContent = `Result: y = ${slope.toFixed(4)}x + ${intercept.toFixed(4)}`;
                    return;
                }
            } else if (type === 'conversion') {
                // Basic unit conversion maps
                const lengthConversions = {
                    'm': 1,
                    'cm': 0.01,
                    'mm': 0.001,
                    'km': 1000,
                    'in': 0.0254,
                    'ft': 0.3048,
                    'yd': 0.9144,
                    'mi': 1609.34
                };
                
                const massConversions = {
                    'kg': 1,
                    'g': 0.001,
                    'mg': 1e-6,
                    'lb': 0.453592,
                    'oz': 0.0283495
                };
                
                const timeConversions = {
                    's': 1,
                    'min': 60,
                    'hr': 3600,
                    'day': 86400
                };
                
                const energyConversions = {
                    'J': 1,
                    'kJ': 1000,
                    'cal': 4.184,
                    'kcal': 4184,
                    'eV': 1.602e-19,
                    'kWh': 3.6e6
                };
                
                const forceConversions = {
                    'N': 1,
                    'dyn': 1e-5,
                    'lbf': 4.44822
                };
                
                if (variable === 'length') {
                    const value = val1;
                    const fromUnit = input2.value.toLowerCase();
                    const toUnit = input3.value.toLowerCase();
                    
                    if (!lengthConversions[fromUnit] || !lengthConversions[toUnit]) {
                        resultDiv.textContent = 'Error: Invalid units';
                        return;
                    }
                    
                    result = value * lengthConversions[fromUnit] / lengthConversions[toUnit];
                    return;
                } else if (variable === 'mass') {
                    const value = val1;
                    const fromUnit = input2.value.toLowerCase();
                    const toUnit = input3.value.toLowerCase();
                    
                    if (!massConversions[fromUnit] || !massConversions[toUnit]) {
                        resultDiv.textContent = 'Error: Invalid units';
                        return;
                    }
                    
                    result = value * massConversions[fromUnit] / massConversions[toUnit];
                    return;
                } else if (variable === 'time') {
                    const value = val1;
                    const fromUnit = input2.value.toLowerCase();
                    const toUnit = input3.value.toLowerCase();
                    
                    if (!timeConversions[fromUnit] || !timeConversions[toUnit]) {
                        resultDiv.textContent = 'Error: Invalid units';
                        return;
                    }
                    
                    result = value * timeConversions[fromUnit] / timeConversions[toUnit];
                    return;
                } else if (variable === 'energy') {
                    const value = val1;
                    const fromUnit = input2.value.toLowerCase();
                    const toUnit = input3.value.toLowerCase();
                    
                    if (!energyConversions[fromUnit] || !energyConversions[toUnit]) {
                        resultDiv.textContent = 'Error: Invalid units';
                        return;
                    }
                    
                    result = value * energyConversions[fromUnit] / energyConversions[toUnit];
                    return;
                } else if (variable === 'force') {
                    const value = val1;
                    const fromUnit = input2.value.toLowerCase();
                    const toUnit = input3.value.toLowerCase();
                    
                    if (!forceConversions[fromUnit] || !forceConversions[toUnit]) {
                        resultDiv.textContent = 'Error: Invalid units';
                        return;
                    }
                    
                    result = value * forceConversions[fromUnit] / forceConversions[toUnit];
                    return;
                }
            } else if (type === 'fermi') {
                if (variable === 'estimation') {
                    const value = val1;
                    
                    if (value === 0) {
                        resultDiv.textContent = 'Result: 0 (exact)';
                        return;
                    }
                    
                    const orderOfMagnitude = Math.floor(Math.log10(Math.abs(value)));
                    const scientificNotation = (value / Math.pow(10, orderOfMagnitude)).toFixed(2) + ' × 10^' + orderOfMagnitude;
                    
                    resultDiv.textContent = `Result: ${scientificNotation}`;
                    return;
                }
            }
        }
        
        // Display the result
        if (result !== null) {
            resultDiv.textContent = 'Result: ' + result.toFixed(4);
        } else {
            resultDiv.textContent = 'Calculation not implemented for this combination.';
        }
    });

    // Add event listeners
    calculators.addEventListener('change', toggleCalculatorDropdowns);
    mechanicsDropdown.addEventListener('change', updateVariableDropdown);
    thermodynamicsDropdown.addEventListener('change', updateVariableDropdown);
    electromagnetismDropdown.addEventListener('change', updateVariableDropdown);
    waveOpticsDropdown.addEventListener('change', updateVariableDropdown);
    modernPhysicsDropdown.addEventListener('change', updateVariableDropdown);
    fluidPhysicsDropdown.addEventListener('change', updateVariableDropdown);
    astrophysicsDropdown.addEventListener('change', updateVariableDropdown);
    materialScienceDropdown.addEventListener('change', updateVariableDropdown);
    miscellaneousDropdown.addEventListener('change', updateVariableDropdown);
    variableDropdown.addEventListener('change', updateCalculatorForm);

    // Initialize the dropdowns
    toggleCalculatorDropdowns();
    updateVariableDropdown();
    setupInputValidation();
    
    // Initialize AOS
    AOS.init();
});