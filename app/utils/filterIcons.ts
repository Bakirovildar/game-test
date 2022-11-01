export const filterIcons = (countIcon: number, value: number) => {
    let num: any = []
    const alphabet = ['Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю']

    for (let i = 0; i < countIcon; i++) {
        if (value === 1) {
            const random = Math.floor(Math.random() * alphabet.length)
            num.push(alphabet[random])
            num.splice(random, 1)
        }

        if (value === 2) {
            num = randomNumbers(10, countIcon)
        }

        if (value === 3) {
            num = randomNumbers(20, countIcon)
        }

        if (value === 4) {
            num = randomNumbers(51, countIcon)
        }

        if (value === 5) {
            num = randomNumbers(100, countIcon)
        }

        if (value === 6) {
            num = randomNumbers(1000, countIcon)
        }
    }
    return num
}

const randomNumbers = (maxNum: number, value: number)  => {
    const outArray = []; // массив, в котором будем хранить уникальные числа
    let i = 0; // индекс для массива
    const countNum = value; // количество нужных чисел
    const max = maxNum; // максимальное число
    const min = 1; // минимальное  число
    // цикл, пока не получим массив с уникальными числами
    while(i<countNum){
        let number: any = Math.floor((Math.random()*max)+min); // генерим случайное число
        if(find(outArray, number) ===0){ // Проверяем уникальность числа.
            outArray[i] = number; // если уникальное, то заисываем его в массив
            i++;
        }
    }

    function find(array: Array<any>, value: number) {
        for(let i=0; i<array.length; i++) {
            if (array[i] == value) return 1;
        }
        return 0;
    }
    return outArray
}
