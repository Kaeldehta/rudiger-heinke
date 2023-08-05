import { Family, Human } from "./domain";

export const marry = (groom: Human, bride: Human): Family => {
    console.log(`${groom.name} and ${bride.name} are now married!`);
    return {
        husband: groom,
        wife: bride,
        children: [],
        money: Infinity,
    }
}

export const getTasks = () => {
    return ["Kochen", "Putzen"]
}

export const doTask = (human: Human, task: string) => {
    console.log(`${human.name} is now doing ${task}`);
}

export const goOnVacation = (...humans: Human[]) => {
    humans.forEach(human => {
        human.happiness += 10;
    })
}