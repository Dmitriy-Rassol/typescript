async function fillTable(users: any[]) {
    const table = document.createElement('table');
    
    // Создаем заголовок таблицы
    const headerRow = table.insertRow();
    ['id', 'name', 'username', 'email', 'phone', 'website'].forEach(field => {
        const headerCell = document.createElement('th');
        headerCell.textContent = field;
        headerRow.appendChild(headerCell);
    });
    
    // Добавляем данные пользователей в таблицу
    users.forEach(user => {
        const row = table.insertRow();
        ['id', 'name', 'username', 'email', 'phone', 'website'].forEach(field => {
            const cell = row.insertCell();
            cell.textContent = user[field];
        });
    });
    
    // Вставляем таблицу в DOM
    document.body.appendChild(table);
}

// Вызываем функцию fetchData для получения данных и заполнения таблицы
async function fetchDataAndFillTable() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        fillTable(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchDataAndFillTable();

