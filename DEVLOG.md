# DEVLOG

Educational notes to self.

* Turns out that if you put @media query at the bottom of the css file, it will take priority over what is written above when the media condition kicks in. I had always placed media queries on top and was confounded why the css setting in the media query were not being updated despite fulfilling the condition. 
* useParams only retrieves data that has been specified at the level of the router through the exact variable name. E.g. router may have "/projects/:project" and one may try to retrieve the project ID with ```const { id } = useParams()``` but this will return undefined since "id" is not specified explicitly at the router level. Changing it to ```const { project } = useParams()``` resolves this issue. 
* I really struggled to retrieve a specific part of a slice from the store. My idea of using .find or .filter were accurate, but I just didn't have the right syntax and stucture. I had tried many overly complicated solutions which I didn't quite understand and which didn't work. What worked is putting it like this in the storeSlice file: 
```
export const selectProjectById = (state, projectId) => {
    return state.projects.projects.find(project => project.id === projectId);
}
```
And in the React component:
```
const data = useSelector(state => selectProjectById(state, projectId));
```
What confused me most here is that "state" is not defined in the component file, so I must assume that useSelector() recognizes that "state" is a special parameter.
*  I received an error when loading the project URL directly, despite having put in the conditions for store isLoading. It seems like was a brief moment where isLoading was false yet the project variable was still undefined (hence leading to the error in the intended render). Adding an additional check for whether the project variable is undefined sorted this, but perhaps not as elegant. I discovered that one could check for the projects.length === 0 as an additional check, which leads to an error, and within the intended render, add another conditional that checks whether projects.length is greater than 0. 