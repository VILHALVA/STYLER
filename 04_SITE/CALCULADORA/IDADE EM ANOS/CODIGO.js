document.addEventListener('DOMContentLoaded', function() {
    const birthYearSelect = document.getElementById('birthYear');
    const ageTableBody = document.getElementById('ageTableBody');
    function populateBirthYearOptions() {
        const currentYear = new Date().getFullYear();
        for (let year = 1900; year <= currentYear + 200; year++) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            birthYearSelect.appendChild(option);
        }
    }

    function calculateAndDisplayAges() {
        const selectedYear = parseInt(birthYearSelect.value);
        const currentYear = new Date().getFullYear();
        ageTableBody.innerHTML = ''; 

        for (let year = selectedYear; year <= currentYear + 200; year++) {
            const age = year - selectedYear;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${year}</td>
                <td>${age}</td>
            `;
            ageTableBody.appendChild(row);
        }
    }

    birthYearSelect.addEventListener('change', calculateAndDisplayAges);
    populateBirthYearOptions();
});
