document.addEventListener('DOMContentLoaded', function () {
    const gradeForm = document.getElementById('gradeForm');
    const gradeInputs = document.getElementById('gradeInputs');
    const addGradeButton = document.getElementById('addGrade');
    const calculateButton = document.getElementById('calculate');
    const resultSection = document.getElementById('resultSection');
    const gradesList = document.getElementById('gradesList');
    const averageDisplay = document.getElementById('average');
    const clearButton = document.getElementById('clear');
  
    let grades = [];

    function updateCalculateButton() {
      const gradeElements = document.querySelectorAll('.grade');
      const validGrades = Array.from(gradeElements).every(function (element) {
        return element.value !== '' && !isNaN(element.value) && parseFloat(element.value) >= 0 && parseFloat(element.value) <= 10;
      });
      const anyEmpty = Array.from(gradeElements).some(function (element) {
        return element.value === '';
      });
      calculateButton.disabled = !validGrades || anyEmpty || gradeElements.length < 2;
      addGradeButton.disabled = !validGrades || anyEmpty || gradeElements.length < 2 || gradeElements.length == 4;
    }
  
    addGradeButton.addEventListener('click', function () {
      const currentGradesCount = gradeInputs.querySelectorAll('.grade').length;
      if (currentGradesCount < 4) {
        const newInput = document.createElement('div');
        newInput.classList.add('input-group');
        newInput.innerHTML = `
          <label for="grade${currentGradesCount + 1}">NOTA ${currentGradesCount + 1}:</label>
          <input type="number" id="grade${currentGradesCount + 1}" class="grade" min="0" max="10">
        `;
        gradeInputs.appendChild(newInput);
        updateAddGradeButton();
        updateCalculateButton();
      }
      
    });
  
    gradeInputs.addEventListener('input', updateCalculateButton);
  
    calculateButton.addEventListener('click', function () {
      grades = [];
      const gradeElements = document.querySelectorAll('.grade');
      gradeElements.forEach(function (element) {
        grades.push(parseFloat(element.value));
      });
  
      const total = grades.reduce((acc, curr) => acc + curr, 0);
      const average = total / grades.length;
  
      resultSection.style.display = 'block';
      clearButton.style.display = 'block';
      gradesList.innerHTML = '<strong>NOTAS:</strong> ' + grades.join(', ');
      averageDisplay.textContent = 'MÉDIA: ' + average.toFixed(2);

      calculateButton.disabled = true;
    });
  
    clearButton.addEventListener('click', function () {
      resultSection.style.display = 'none';
      clearButton.style.display = 'none';
      calculateButton.disabled = true;
      addGradeButton.disabled = true;
      grades = [];
      gradeInputs.innerHTML = `
        <div class="input-group">
          <label for="grade1">NOTA 1:</label>
          <input type="number" id="grade1" class="grade" min="0" max="10">
        </div>
        <div class="input-group">
          <label for="grade2">NOTA 2:</label>
          <input type="number" id="grade2" class="grade" min="0" max="10">
        </div>
      `;
      updateAddGradeButton();
      updateCalculateButton();
    });
  });
