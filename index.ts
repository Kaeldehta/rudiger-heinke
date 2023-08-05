import { doTask, getTasks, goOnVacation, marry } from "./life";
import type { Human } from "./domain";

const rudi: Human = {
    name: "Rüdiger",
    alive: true,
    happiness: 100,
    hasTime: true,
    tasks: getTasks()
}

const heinke: Human = {
    hasTime: true,
    name: "Heinke",
    alive: true,
    happiness: 100,
    tasks: getTasks()
}

const family = marry(rudi, heinke);

while (rudi.alive && heinke.alive) {
    const heinkesTask = heinke.tasks.pop();
    const rudigersTask = rudi.tasks.pop();
    if(heinkesTask) {
        rudi.hasTime = false;
        doTask(rudi, heinkesTask);
        rudi.hasTime = true;
        heinke.happiness += 10;
        continue;
    }
    if(rudigersTask) {
        heinke.hasTime = false;
        doTask(heinke, rudigersTask);
        heinke.hasTime = true;
        rudi.happiness += 10;
        continue;
    }

    if(rudi.hasTime && heinke.hasTime) {

        if(rudi.happiness > 100 && heinke.happiness > 100) {

            family.children.push({
                name: "Heinke Jr.",
                alive: true,
                happiness: 100,
                tasks: [],
                hasTime: true,
            })

            family.children.push({
                name: "Rüdiger Jr.",
                alive: true,
                happiness: 100,
                tasks: [],
                hasTime: true,
            })

            family.money = 0;
            rudi.hasTime = false;
            heinke.hasTime = false;
            rudi.tasks = ["raise children"]
            heinke.tasks = ["raise children"]
        } else {
            goOnVacation(rudi, heinke, ...family.children);
        }
    }

}