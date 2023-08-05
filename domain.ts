export type Human = {
    name: string;
    alive: boolean;
    tasks: string[];
    happiness: number;
    hasTime: boolean;
}

export type Family = {
    husband: Human;
    wife: Human;
    children: Human[];
    money: number;
}