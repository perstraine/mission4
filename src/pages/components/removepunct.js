export default function removePunct(oriString) {
    const punctRegex = /[^a-zA-Z0-9\s]+/gm;
    const punctLess = oriString.replace(punctRegex, ' ');
    return punctLess.trim();
}
