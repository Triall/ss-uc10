export default function validateString(string, maxLenght = Infinity) {
    const isValidString = typeof string === 'string' && string.length <= maxLenght;

    if (!isValidString) {
        return false;
    }

    const regexp = new RegExp('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~.])^\\S*$');

    return regexp.test(string);
}
