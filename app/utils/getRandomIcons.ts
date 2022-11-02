export const getRandomIcons = (countIcon: number, value: number) => {
    return value === 1 ? getRandomAlphabetIcons(countIcon) : getRandomNumberIcons(value, countIcon);
}

const getRandomAlphabetIcons = (countIcon: number) => {
    let icons: any = []
    const alphabet = ['Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю']

    while (icons.length < countIcon) {
        const random = Math.floor(Math.random() * alphabet.length)
        icons.push(alphabet[random])
        alphabet.splice(random, 1)
    }

    return icons
}

const getRandomNumberIcons = (value: number, countNum: number) => {
    const outArray:Array<number> = []; // массив, в котором будем хранить уникальные числа
    const max = getMaxRange(value); // максимальное число
    const min = 1; // минимальное  число
    // цикл, пока не получим массив с уникальными числами
    while (outArray.length < countNum) {
        let randomNumber: number = Math.floor((Math.random() * max) + min); // генерим случайное число
        if (!outArray.includes(randomNumber)) { // Проверяем уникальность числа.
            outArray.push(randomNumber)
        }
    }

    return outArray
}

const getMaxRange = (value: number): number => {
    if (value === 2) {
        return 10
    }
    if (value == 3) {
        return 20
    }
    if (value == 4) {
        return 51
    }
    if (value == 5) {
        return 100
    }
    if (value == 6) {
        return 1000
    }
    return 0
}
