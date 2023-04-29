## >> Minor
- Hovering over the Chip in the Button in the BlogFilterSelection component won't display the usual hand but returns to a normal cursor. 

## >> Better Solution Needed
### Flickering loads due to code-splitting
Implement a transition function that prevents React from rendering the suspense fallback before the next render is loaded. This is an issue that occurs due to code-splitting; since pages are now split, they must be downloaded before they can be rendered, allowing a brief moment where the next page goes blank and then renders, which has an ugly "flickering" effect. The current solution is to add a fixed height element to the fallback element to prevent the jarring experience but while this works aesthetically well enough (it's important not to have any text or content in this element, since it actually adds a jarring effect by having a loading text or icon pop in and out--better to just leave it empty), logically the issue is still there. I've attempted different solutions, but none have produced the wanted outcome. One solution is to write a custom Suspense Router but I've only come across methods that use browser history and this app needs to use hash browser because of hosting restrictions. This appears to be a common issue among React developers. For more discussion and resources on this matter, see:
-   https://stackoverflow.com/questions/66039626/react-lazy-suspens-react-router-dont-change-route-until-component-is-fetched
-   https://stackoverflow.com/questions/72932889/react-router-lazy-suspense-usetransition-how-to-stay-on-current-page-until-n
-   https://github.com/remix-run/react-router/issues/8860
-   https://gist.github.com/perlow/bb7612b25f37667be964f1a1aba42780
-   https://react.dev/reference/react/useTransition
-   https://react.dev/reference/react/Suspense#preventing-unwanted-fallbacks