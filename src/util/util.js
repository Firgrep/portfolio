/**
 * Formats a string in simplified extended ISO format, zero UTC offset, and returns
 * a string local to GB in the form of "DD Month YYYY".
 * @param {string} dateString - Expects a string in simplified extended ISO format.
 * @returns 
 */
export const formatDateString = (dateString) => {
    const date = new Date(dateString);

    // Old setup with YYYY-MM-DD output
    // const year = date.getFullYear();
    // const month = ("0" + (date.getMonth() + 1)).slice(-2); // JavaScript months are go from 0-11
    // const day = ("0" + date.getDate()).slice(-2);

    // return `${year}-${month}-${day}`;

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
}

/**
 * Formats a string in simplified extended ISO format, zero UTC offset, and returns
 * a string in the form "YYYY-MM".
 * @param {string} dateString - Expects a string in simplified extended ISO format.
 * @returns 
 */
export const formatDateStringYearMonth = (dateString) => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);

    return `${year}-${month}`;
}

/**
 * Formats tags by either capitalizing them, or turning all-caps, 
 * or capitalized camelCase (if supported). If not supported, returns
 * tag as is.
 * @param {string} tag - Language or tech tool name
 * @returns 
 */
export const formatTag = (tag) => {
    const supportedTagsSimple = ["react", "redux", "python", "django", "firebase", "general"]

    if (tag.toLowerCase() === "javascript") {
        return "JavaScript";
    }

    if (tag.toLowerCase() === "css") {
        return "CSS";
    }

    if (tag.toLowerCase() === "html") {
        return "HTML";
    }

    if (supportedTagsSimple.includes(tag.toLowerCase())) {
        return tag.charAt(0).toUpperCase() + tag.slice(1);
    }

    return tag;
}
