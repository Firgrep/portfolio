**Table of Contents**

- [Overview](#overview)
- [Quickstart](#quickstart)
- [Functionality](#functionality)
- [Aesthetics](#aesthetics)
- [Performance](#performance)
- [Testing](#testing)
- [Accessibility](#accessibility)
- [Security](#security)
- [Resources](#resources)

# Overview

[🌟🔗 Live Link](https//www.filipniklas.com) *when ready

This is a personalized Portfolio showcase and blog website that automatically updates contents and UI based on data fetched from from external database service. 

The idea is to minimize, or avoid altogether, updating the app itself in order to update contents. For example, when a project or blog post is to be added, one should simply need to update the database and the portfolio app will, when visited, retrieve the latest data with which to populate its contents. 

While primarily an educational project to solidify knowledge in front-end tools like React and Redux--and therefore there were many discoveries and mistakes made during development--utility has been in mind to create a functional, visiually pleasing and efficient website. 

In its current form, the portfolio app behaves largely as a static website, yet that dynamically loads in data as needed, but future implementations may include user authentication and manipulation of the database from the front-end.

# Quickstart
Fork the project and clone the repository.
```
git clone https://github.com/Firgrep/portfolio.git
```

Note that this .git repository will NOT include, for security reasons, certain API credentials, such that the app will not function properly when run from the clone as is, as this repository is inteded for public inspection of code rather than providing utility (but please feel free to use anything you find). If you want to add your own credentials and backend service, create a .js file in the `/src/api/firebase/` folder that contains a config file and initializes the connection. For emails, go to `/compontents/contactForm/emailCred/` and add a .js file with the requisite config for an email provider. (A blog post or two about how to set these up may come in the future.)

In the project directory, you can start a local server by inputting into your terminal.
```
npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Functionality
Portfolio is built using React and Redux, and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template. React Router is used to create and manage site routes. 

Redux is used as global state management of the app with particular "slices" generated for specific data groups. For example, data pertaining to projects will have their own "slice", while the list of all blog posts and their metadata have another, while individual blog posts have still further their own slice. These are loaded into the app as required by the UI and not before. For example, there is no point loading in the entire blog dataset if the user wishes only to view a specific post or topic, so the decision was made to split the blog dataset into one collection that contains everything needed to list relevant information about all blog posts (title, date, description, tags, etc.) and another collection that independently contains the individual blog posts body contents. In this way, redundant data load is minimized and that increases overall performance.

The `redux-persist` library has been used to save the global state in the browser's sessionStorage, such that data persists between refreshes (and secures between pages) in order to save on reads from the databse (fetching external data). This mitigates excessive or redudant database reads, but, since the data is cleared upon tab or browser closing, the data will likely not go stale. Currently, the global state uses about 0.3% of the 5MB sessionStorage allowance, such that there is no worry about exceeding that (however, in principle, some solution needs to be in place in the future to negotiate the limit).

The `Marked` library has been used to handle the blog data, which was written in .md format, and convert it to appropriate HTML for the site. There was a serious issue discovered under development where, when the .md data was being uploaded as a string to the database, some details (whitespace, etc.) were lost, such that when the data was then retrieved by the app and formatted into HTML by Marked, it would lose important details (such as code-blocks). Eventually, a solution was discovered in decoding the .md string into encoded base64 string and upload that to the database, and then, in the app, retrieve the base64 string and decode it back into semantic string and let Marked format it into HTML. In this way, the content appeared properly as it was in the .md file. Now, there is a tradeoff here where encoded base64 string takes up more space than a regular semantic string and there is likely a small performance hit on the app where it must spend time to decode the encoded string; but these are negligible given the already small size each blog post operates with (and it is only text, no media) and a small price to pay to maintain otherwise vital functionality keeping the correct appearance. 

`Mock Service Worker` library was used to simulate retrieval of data under development, and, while it is generally not recommended for production, it also does not fit with the intended design of the app to be able to manipulate the contents through the data rather than the app itself. Hence, a BaaS provider was decided upon as the alternative.

`Firebase` is used as a BaaS provider, and specifically the Realtime Database and Firestore Database have been employed. Portfolio retrieves the data through thunk functions of the respective Redux "slice" and maintains it in its store (along with persistence in sessionStorage). Writes and updates to the databases are done through a different set of scripts.

A special "misc" dataset is used for news and maintenance items. For example, should there be an error on the site and one wants to inform the user as quickly as possible, the maintenance field can be updated in the database with a specific maintenance message and the app will render this on its homepage. 

`@emailjs` is used as the email service for the contact form. 

# Aesthetics
Apart from custom CSS to style the site as needed, various additional tools have been used to enhance the appearance, responsiveness and functionality of the site. 

`Bootstrap` has been used as a "CSS skeleton", mainly for its helpful containers and navbar.

`MaterialUI` has been used for its buttons, icons, toggle buttons and chips.

`@emotion/styled` and `@emotion/react` are used because they are dependencies for MaterialUI.

`Highlight.js` has been used to color the code-blocks in the blog posts relevant to programming language. 

`AOS` has been used, sparingly, for fade-in and fade-out animation effects.

# Performance
Code-splitting has been employed at the level of router pages to increase initial page load and overal site performance. Unfortunately, this has a rather ugly side-effect that causes a momentary collapse of the UI where the temporary fallback UI is loaded while the real UI is being downloaded and executes, causing a jarring UX. A simple aesthetic (and performatively very cheap) solution was found in simply increasing the height of the fallback UI to prevent the apparent collapse. Alternative logical solutions have been discovered, but not one that currently fits the requirements for this app. For more on this issue, please see the DEVLOG. 

The `ErrorBoundary` component has been placed where it seemed most logical to prevent a full app crash should there be misbehaviour in a particular component. 

Media have been scaled down and reformatted to lower-cost formats to save load size and time. For example, images in .png or .jpg format have been converted to .webp. Wherever possible, .svg formats have been preferred over other picture files. 

# Testing
`Cypress` has been used for automated End-to-End (e2e) testing. Priority was given to this type of testing over integration and unit tests since it simulates real user experience. Pages and components with most interactivity (and thus highest likelyhood of breaking), such as the blog post filter, were prioritized first. 

`Mock Service Worker` was used initially in development to simulate fetching data from an external API. This was very helpful, as it allowed me to develop the Redux slices properly without having to set up the external database first. And, when the later transition occured over to an external databaes, it was a matter of switching the callback functions in the Redux thunks from the MSW handlers over to the Firebase callers. 

Otherwise, manual testing has been employed throughout, with careful step-by-step implementation of new code or feature and then immediately test the UI (whenever possible) to see that old functionality, and new, were working as expected. 

# Accessibility
Semantic HTML tags have been used wherever it made sense as well as aria-labels for inputs. Most, if not all, of the library components used already come packaged with aria descriptions. 

The UI has been manually tested for responsiveness to work adequately for smaller and tablet-sized screens, as well as very large screens. 

# Security
`DOMPurify` is used to sanitize the blog post data for malicious XXS.

Firebase's `App Check` and `reCAPTCHA v3` are employed to monitor and enforce that the data retrieved from the database is by the correct app. Otherwise, Firebase's database rules for read and write of data have been configured appropriately. 

# Resources
To learn more about the tools and technologies used in this app, please visit the relevant documentation. They are usually really great, clearly written with helpful examples.

* [React documentation](https://reactjs.org/)
* [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
* [React Router documentation](https://reactrouter.com/en/main)
* [Redux documentation](https://redux.js.org/)
* [Firebase documentation](https://firebase.google.com/docs)
* [Firebase API reference](https://firebase.google.com/docs/reference)
* [Cypress documentation](https://docs.cypress.io/guides/overview/why-cypress)
* [React Testing Library documentation](https://testing-library.com/docs/react-testing-library/intro/)
* [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
* [MaterialUI](https://mui.com/material-ui/getting-started/overview/)
* [Mock Service Worker](https://mswjs.io/docs/)
* [Marked](https://marked.js.org/)
* [DOMPurify](https://github.com/cure53/DOMPurify)

-----------------
**From the initial React Readme:**

`npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`npm run eject`

Note: this is a one-way operation. Once you `eject`, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
