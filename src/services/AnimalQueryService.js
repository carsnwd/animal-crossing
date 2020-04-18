import BUGS from '../assets/bugs.json';
import FISH from '../assets/fish.json';
/**
 * @method formatAnimalsToArray
 * @description Given json of animals, formats it to an array.
 * @param {JSON} animals 
 */
const formatAnimalsToArray = (animals) => {
    return Object.keys(animals).map((k) => animals[k]);
}

const AnimalQueryService = {
    getBugs() {
        return formatAnimalsToArray(BUGS);
    },
    getFish() {
        return formatAnimalsToArray(FISH);
    }
}

export default AnimalQueryService;