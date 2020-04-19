import BUGS from '../assets/bugs.json';
import FISH from '../assets/fish.json';
/**
 * @method formatAnimalsToArray
 * @description Given json of animals, formats it to an array.
 * @param {JSON} animals 
 */
function formatAnimalsToArray(animals) {
    return Object.keys(animals).map((k) => animals[k]);
}

/**
 * @method isAvailable
 * @description Checks if the animal is currently available within it's available months.
 * @param {} monthsAvailable 
 */
function isAvailable(monthsAvailable) {
    const MONTHS = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    const currentMonth = MONTHS[new Date().getMonth()];
    return monthsAvailable.indexOf(currentMonth) > 0 ? "Yes" : "No";
}

const AnimalQueryService = {
    getBugs() {
        for (var bug in BUGS){
            BUGS[bug].isCurrentlyAvailable = isAvailable(BUGS[bug].monthsAvailable);
        }
        return formatAnimalsToArray(BUGS);
    },
    getFish() {
        for (var fish in FISH) {
            FISH[fish].isCurrentlyAvailable = isAvailable(FISH[fish].monthsAvailable);
        }
        return formatAnimalsToArray(FISH);
    }
}

export default AnimalQueryService;