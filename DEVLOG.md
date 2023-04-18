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