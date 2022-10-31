export const iconName = (numberTheme: number | undefined): any => {
    if (numberTheme === 0) {
        return ('FlowersIcons')
    }
    if (numberTheme === 1) {
        return ('NewYearIcons')
    }
    if (numberTheme === 2) {
        return ('MoneyIcons')
    }
    if (numberTheme === 3) {
        return ('BiscuitIcons')
    }
}
