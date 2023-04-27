# DEVLOG

Educational notes (primarily for myself) for before, during and after project development.

## Objectives

The task is to make a portfolio website showing projects as well as a blog where I can discuss project development and ideas in some depth. I am doing this in large part as an exercise to solidify my understanding of React and Redux as well as practicing some new tools and concepts, like mocking and testing. Particularly, I want the website to load data as if it was retrieving this from a backend or external API, such that if the data grows larger, the website automatically generates the necessary elements. 

Planned features:
- Portfolio website that contains pages 
    - home page
    - projects page
    - individual project pages
    - blog page
    - individual blog pages
    - contact form
    - about page
- A data file containing all necessary info for various projects, which will be loaded into the website and individual pages for each project to be dynamically generated.
- A data file containing all necessary info for various blog posts, which will be loaded into the website and individual pages for each project to be dynamically generated.
- Since this is essentially a static page, retrieving data files will be done through mocking (MSW). I am fully aware that this is NOT recommended for production, and it is NOT efficient, but since this is an educational project first and foremost, mocking will be used in this instance to simulate retrieving data. In the future, I may implement an actual backend or an external API that will host data and resources. 
- OPTIONAL: search bar. 

Technologies to be used:
* React v18 and React Router v6. We're going to get real familiar with building React apps.
* Redux. This is overkill for such a small app, but it's part of the learning experience. I want to become much more confident with Redux store, slices, reducers, extra reducers, async loading and generally how state management works.
* MSW for the data API mocking. Again, NOT recommended for real production. This is an education project first and foremost. For a real situation, it is better to build an actual backend, use external API or simply load the data files directly. 
* Testing with React and Redux. Testing is an important part of programming, and at the time of writing I am familiar with Mocha. How testing works exactly with React and Redux is uncharted waters for me, so I will have to do some research here and learn what is best to do. Ideally, it's best to build the tests first and then the program components and then develop these in tandem, but since I already have a lot to learn just with building the site itself, I will focus on that first and then implement testing once I have set up all the planned features.
* Bootstrap for some basic CSS structure. 


## Bugs and Challenges Encountered During Development

Turns out that if you put @media query at the bottom of the css file, it will take priority over what is written above when the media condition kicks in. I had always placed media queries on top and was confounded why the css setting in the media query were not being updated despite fulfilling the condition. 

useParams only retrieves data that has been specified at the level of the router through the exact variable name. E.g. router may have "/projects/:project" and one may try to retrieve the project ID with ```const { id } = useParams()``` but this will return undefined since "id" is not specified explicitly at the router level. Changing it to ```const { project } = useParams()``` resolves this issue. 

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

I received an error when loading the project URL directly, despite having put in the conditions for store isLoading. It seems like was a brief moment where isLoading was false yet the project variable was still undefined (hence leading to the error in the intended render). Adding an additional check for whether the project variable is undefined sorted this, but perhaps not as elegant. I discovered that one could check for the projects.length === 0 as an additional check, which leads to an error, and within the intended render, add another conditional that checks whether projects.length is greater than 0. 

I wanted to include the Github repo readme file into the project details page, and after doing some research, the best way seems to do an API fetch to the raw link provided by Github. I set up an async function nested inside a useEffect hook. I also learned here that one should sanitize this data, especially it if is something inputted by the agent-user, but since I am retrieving documents I myself have written, I believe it should be safe. On the other hand, perhaps someone could conceivably malicously edit the readme file on the other end. Better safe than sorry, so I'm going to try DOMPurify, which is recommended by the folks at Marked. 

I great difficulty locating the reason for a bug that was caused with opening and close the collapsed bootstrap navbar. I had checked everything in the local code and attempted various fixes, scanned stack overflow and even consulted ChatGPT. The solutions ChatGPT was providing was to double check everything was written correctly (which it was), and then proceeded to suggest I install the Bootstrap-React package. But it seemed like an expensive solution for an otherwise minor issue, and I had made this work with another project. I scanned stack overflow again and found that someone's solution was that they had imported the bootstrap JS file twice over; once in the CDN and once in their app. I checked for this in my own app and saw that I had made the same error... the fix was then quick. 

When using firebase, I was getting an error of trying to read the .length of an undefined. After much digging around and headscratching, I disovered this was due to missing data.Apparently, firebase does not much like arrays. And it doesn't store empty arrays at all! So when I imported my data into firebase, it simply erased the empty arrays without letting me know, and when my program was looking for an array to check the length, it would return the error. I rewrote the condition so that it doesn't look for an array explicitly and it worked.

```
{project.languages.length > 0 &&
<div>
    <span>Languages:</span><Icons dataArray={project.languages} />
</div>}
```
To:
```
{project.languages &&
<div>
    <span>Languages:</span><Icons dataArray={project.languages} />
</div>}
```

I finally learned the difference between forEach and map methods when I was trying to use forEach in my render. I was puzzled when my console logs clearly showed that the variables were defined and outputting value but nothing showed in the UI. I turns out forEach does NOT RETURN anything; and so it is good for performing side-effects on something (such as console.logs), but not if one wants to execute a transformation on a piece of data. 

Why is there an unexpected additional nested array in my array? In my processing of data from an API I wanted to access the nested objects in an object, and for this I used `Object.entries`. Here was my code below:
```javascript
blogCollectionSnapshot.forEach((doc) => {
    // Retrieving actual blog post data
    const dataObj = doc.data();
    console.log(Object.entries(dataObj));
    // Data is an object of objects, which are returned as key-value arrays
    blogArrayRaw.push(Object.entries(dataObj));
});
console.log(blogArrayRaw);
```
It turns out that, if you think more carefully what's happening, `Object.entries` turns each key-value pair into an array of two elements, one key and one value. These key-value pair arrays are themselves returned as an array. So when I pushed this returned array into my other empty array, I was adding an array to an exsting array, hence I had an additional nested array. It appears the fix for this was to simply add a spread operator in front of Object.entries within the .push() method to "spread" out the array returned by Object.entries, in effect flattening the array, such that .push() then just pushes each of these sub-arrays into the target array, like so:
```javascript
blogArrayRaw.push(...Object.entries(dataObj));
                    ^^^ the Spread (...) syntax
```
For more on the Spread operator, check the [mdn web docs here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

Significant logical bug where the copied md string into firestore would lose some important data (whitespace, carriage return, etc.). Opted to try encoding and decoding with base64, and got it working! A different script sets the body of the document with an encoded string in base64, which is then retrieved by the web app, which decodes the base64 string back into the semantic string, which later in the app is parsed by marked and DOMPurify, and the rendered output appears as expected. This will increase the size of the data, but it preserves the important details needed for marked to produce the expected output. Another method would be to store the data as an .md file on storage, but since I don't intend my post to be that long, and already have a structure set up with firestore, I decided to go with this route. On the plus side, I learned to encode/decode with javascript using two different programs. 

Small bug where, if you have something nested within a button and you try to retrieve its value with `e.target.value`, it may sometimes return undefined. This is because you click on the nested element and not on the button. To fix this, use `e.currentTarget.value`, and it will return the expected value even if you click on the nested element. 

I was having issues with my blog tags counter counting double (even double the usual from React.Strictmode), and looking into the matter I discovered that Redux doesn't actually (at least does not necessitate) the preserving of state between pages or even website refreshes. Between pages this was a particular problem. I found a tool called redux-persist which allows one to save the store into the browser's sessionStorage (or localStorage), but after implementing this, it didn't solve my problem. Looking into the matter further, I found that the useEffect hooks I used to load data were actually being dispatched all the time. I checked in with ChatGPT to debug and figure out a way, and it suggested I implement conditionals into the useEffect in charge of loading the data to first load it from sessionStorage through redux-perist and, if the slice was still empty, then call the thunk to fetch new data from the database. It seemed to me _a lot_ of extra code just for something rather simple, so I tried first with just putting in the conditional to check if the slice was falsy (I actually first tried with an additional state property called .loaded), and this seemed to sort out my issues! I then put in similar or corresponding conditionals into the rest of my components and Redux stopped fetching when it already had the data. It seems I actually didn't need redux-persist this time and that the real error was in the lack of proper conditionals for the useEffect hooks. In any case, redux-persist does helpfully keep the data between pages or between refreshes, as long as one doesn't close the tab or the browser. I think, however, that putting into the control flow that the useEffect hooks try to load the store from sessionStorage first, before checking the slice, or checking the slice and attempt to load from sessionStorage _and then_ attempt to fetch from database, would be an extra layer of better optimization. But I hesistate at this point because I don't want to import a lot of Redux and redux-persist files into my components, and would rather find another solution where a function is called by the components to try to load from the sessionStorage before trying the fetch. 

On redux-persist: https://stackoverflow.com/questions/70468548/how-do-i-persist-my-redux-state-with-local-storage

Alt version of filtering for selected tags chaining methods and callbacks:
This func is bugged/incomplete. An additional loop within the if checker is required to loop over the `filteredEntriesArray` in order to check for duplicates, in which case the item should not be pushed into the array. In its current state, the func causes duplication of same-ID children. I think it's at this point better to use built-in methods to solve the issue, as the amount of nested loops is becoming difficult to read.
```javascript
const arrayOfEntries = Object.entries(blogObj);
const filteredEntriesArray = []
for (let i = 0; i < arrayOfEntries.length; i++) {
    for (let j = 0; j < arrayOfEntries[i][1].tags.length; j++) {
        for (let k = 0; k < controlArr.length; k++) {
            if (arrayOfEntries[i][1].tags[j] === controlArr[k]) {
                filteredEntriesArray.push(arrayOfEntries[i])
            }
        }
    }
}
```