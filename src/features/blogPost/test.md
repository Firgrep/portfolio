I really struggled to retrieve a specific part of a slice from the store. My idea of using .find or .filter were accurate, but I just didn't have the right syntax and stucture. I had tried many overly complicated solutions which I didn't quite understand and which didn't work. What worked is putting it like this in the storeSlice file: 

```javascript
export const selectProjectById = (state, projectId) => {
    return state.projects.projects.find(project => project.id === projectId);
}
```

And in the React component:  

```javascript
const data = useSelector(state => selectProjectById(state, projectId));
```

What confused me most here is that "state" is not defined in the component file, so I must assume that useSelector() recognizes that "state" is a special parameter.