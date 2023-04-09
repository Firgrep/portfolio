export const getProjects = async () => {
    const requestUrl = `/dataprojects`;
    const response = await fetch(requestUrl, {
        method: 'GET'
    });
    const json = await response.json();

    return json;
}

// export const getPetDetails = async (id) => {
//     const requestUrl = `/animals/${id}`;
//     const response = await fetch(requestUrl, {
//       method: 'GET'
//     });
  
//     const json = await response.json();
  
//     return json;
//   };

// export const getProjectDetails = async (id) => {
//     const requestUrl = `/dataprojects/${id}`;
//     const response = await fetch(requestUrl)
// }