function input_matrix() {
    var rows = parseInt(document.getElementById('rows').value);
    var columns = parseInt(document.getElementById('columns').value);
    var matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        var values = prompt(`Введите элементы ${i + 1} строки через пробел:`).split(' ');
        if (values.length !== columns) {
            alert(`Ошибка: Введено неправильное количество значений. Пожалуйста, введите ${columns} значений.`);
            return; // Завершаем функцию, если количество введенных значений не соответствует количеству столбцов
        }
        for (let j = 0; j < columns; j++) {
            matrix[i][j] = parseFloat(values[j]);
        }
    }
    // Вывод матрицы 
    var out = ''
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            out += matrix[i][j] + ' ';
        }
        out += '<br>';
    }
    document.querySelector('.out').innerHTML = out;

    let oddColumn = null;
    for (let j = 0; j < columns; j++){
        let odd = true;
        for (let i = 0; i < rows; i++) {
            if (matrix[i][j] % 2 == 0) {
                odd = false;
            }
        }
        if (odd === true && oddColumn === null) {
            oddColumn = j + 1;
        }   

    }
    if (oddColumn !== null) {
        document.getElementById('odd_column').innerHTML = oddColumn;
    } else {
        document.getElementById('odd_column').innerHTML = "Нет столбца, содержащего только нечетные элементы";
    }
}