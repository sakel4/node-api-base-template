/** This functions validates if all the values inside a string array are distinct
 *
 * @param {string[]} array
 * @returns if all the strings are distinct returns true, otherwise false
 */
const hasDuplicates = (array:[]) => new Set(array).size !== array.length;

export default hasDuplicates;
