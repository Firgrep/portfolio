export const formatDateString = (dateString) => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // JavaScript months are go from 0-11
    const day = ("0" + date.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
}
