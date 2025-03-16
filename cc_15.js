// Task 1 - Creating the Base Structure
const riskDashboard = document.getElementById('riskDashboard');

console.log("Risk Dashboard Loaded");

// Task 2 - Add Risk Items Dynamically
const riskForm = document.getElementById('riskForm');
const riskNameInput = document.getElementById('riskName');
const riskLevelInput = document.getElementById('riskLevel');
const departmentInput = document.getElementById('department');

function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement('div');
    riskCard.classList.add('riskCard');

    const riskNameElement = document.createElement('h3');
    riskNameElement.textContent = riskName;

    const riskLevelElement = document.createElement('p');
    riskLevelElement.textContent = `Risk Level: ${riskLevel}`;

    const departmentElement = document.createElement('p');
    departmentElement.textContent = `Department: ${department}`;

    riskCard.appendChild(riskNameElement);
    riskCard.appendChild(riskLevelElement);
    riskCard.appendChild(departmentElement);

    riskDashboard.appendChild(riskCard);
}

riskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const riskName = riskNameInput.value;
    const riskLevel = riskLevelInput.value;
    const department = departmentInput.value;

    addRiskItem(riskName, riskLevel, department);

    riskNameInput.value = '';
    departmentInput.value = '';
});

// Task 3 - Removing Risk Items
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement('div');
    riskCard.classList.add('riskCard');

    const riskNameElement = document.createElement('h3');
    riskNameElement.textContent = riskName;

    const riskLevelElement = document.createElement('p');
    riskLevelElement.textContent = `Risk Level: ${riskLevel}`;

    const departmentElement = document.createElement('p');
    departmentElement.textContent = `Department: ${department}`;

    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.addEventListener('click', () => {
        riskDashboard.removeChild(riskCard);
    });

    riskCard.appendChild(riskNameElement);
    riskCard.appendChild(riskLevelElement);
    riskCard.appendChild(departmentElement);
    riskCard.appendChild(resolveButton);

    riskDashboard.appendChild(riskCard);
}

// Task 4 - Categorizing Risks by Level
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement('div');
    riskCard.classList.add('riskCard');

    if (riskLevel === 'Low') {
        riskCard.style.backgroundColor = 'green';
    } else if (riskLevel === 'Medium') {
        riskCard.style.backgroundColor = 'yellow';
    } else if (riskLevel === 'High') {
        riskCard.style.backgroundColor = 'red';
    }

    const riskNameElement = document.createElement('h3');
    riskNameElement.textContent = riskName;

    const riskLevelElement = document.createElement('p');
    riskLevelElement.textContent = `Risk Level: ${riskLevel}`;

    const departmentElement = document.createElement('p');
    departmentElement.textContent = `Department: ${department}`;

    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.addEventListener('click', () => {
        riskDashboard.removeChild(riskCard);
    });

    riskCard.appendChild(riskNameElement);
    riskCard.appendChild(riskLevelElement);
    riskCard.appendChild(departmentElement);
    riskCard.appendChild(resolveButton);

    riskDashboard.appendChild(riskCard);
}

