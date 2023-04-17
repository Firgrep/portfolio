

export const getProjects = async () => {
    const requestUrl = `/dataprojects`;
    const response = await fetch(requestUrl, {
        method: 'GET'
    });
    const json = await response.json();

    return json;
}
