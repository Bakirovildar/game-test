export interface IGameSettings {
    count: number,
    value: number,
    isAscending: boolean,
    numberTheme: number
}

export const saveSettings = (settings:IGameSettings) => localStorage.setItem('settingValue', JSON.stringify(settings))

export const getSettings = () => JSON.parse(localStorage.getItem('settingValue') || '')
