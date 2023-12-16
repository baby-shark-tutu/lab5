function input_matrix() {
    var rows = parseInt(document.getElementById('rows').value);
    var columns = parseInt(document.getElementById('columns').value);
    var matrix = [];

    // ввод матрицы
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        let values = prompt(`Введите элементы ${i + 1} строки:`).split(' ');
        if (values.length != columns) {
            alert(`Ошибка: Введено неправильное количество значений. Пожалуйста, введите ${columns} значений.`);
            return;
        }
        for (let j = 0; j < columns; j++) {
            matrix[i][j] = parseFloat(values[j]);
        }
    }
    // вывод матрицы
    var out_1 = '';
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            out_1 += matrix[i][j] + ' ';
        }
        out_1 += '<br>';
    }
    document.querySelector('.out_1').innerHTML = out_1;
    
    // нахождение максимального элемента
    var max_elem = matrix[0][0];
    var max_index = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (max_elem < matrix[i][j]) {
                max_elem = matrix[i][j];
                max_index = i;
            }
        }
    }
    document.getElementById('max_elem').innerHTML = 'Максимум: ' + max_elem;

    // вывод матрицы с удаленной строкой
    var out_2 = '';
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < columns; j++) {
            out_2 += matrix[i][j] + ' ';
        }
        out_2 += '<br>';
    }
    document.querySelector('.out_2').innerHTML = out_2;
}