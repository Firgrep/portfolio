import React from "react";
import Firebase from '../../assets/firebase.svg';
import Nodejs from '../../assets/nodejs.svg';
import Cypress from '../../assets/cypress.svg';
import Docker from '../../assets/docker.svg';
import Googlecloud from '../../assets/googlecloud.svg';
import Nextjs from '../../assets/next.svg';
import Nextauth from '../../assets/nextauth.svg';
import Prisma from '../../assets/prisma.svg';
import Trpc from '../../assets/trpc.svg';
import Typescript from '../../assets/typescript.svg';
import Zod from '../../assets/zod.svg';
import './icon.css';

export const Icon = ({icon, size}) => {
    const supportedIcons = ["redux", "react", "javascript", "python", "django", 
                            "matplotlib", "html", "css", "jspdf", "bootstrap", 
                            "cplusplus", "pandas", "git", "numpy", "github", "linkedin",
                            "chartjs", "materialui", "firebase", "nodejs", "cypress",
                            "docker", "googlecloud", "nextjs", "nextauth", "prisma",
                            "trpc", "typescript", "zod"];
    const viewBox = "0 0 128 128";
    const fontWeight = "bold";
    const limitSize = "60px";
    const alignCenter = "center";
    const containerMargin = "0 10px";

    // TODO: Refactor code to make use of svg as separate file and make a func to loop
    // over the icons and data and output the required icon. 

    if (!supportedIcons.includes(icon.toLowerCase())) {
        // const iconCapitalized = icon.charAt(0).toUpperCase() + icon.slice(1);
        return(
            <div style={{textAlign: alignCenter, margin: containerMargin}}>
                <svg viewBox={viewBox} style={{height: getSize(size), width: getSize(size)}}>
                    <path d="M26.13,8.81A17.18,17.18,0,0,0,13.24,4.72c14,11.42-2.58,26.17-11.79,9-3.78,8.49.16,16.31,8,20.33,3.7,1.9,5.65,3,7,4.53a11.73,11.73,0,0,1,1.86,2.92l3.49,8.26H7.11A2.32,2.32,0,0,0,4.8,52.1V93a16.87,16.87,0,0,0,16.82,16.82H96.79A16.87,16.87,0,0,0,113.61,93V52.1a2.32,2.32,0,0,0-2.32-2.32H88.89l13.07-22-9.37-5.4L76.21,49.78H65.79l0-2.86a.57.57,0,0,0-.12-.35c-.5-.6-.88-1-1.2-1.41h0c-.74-.86-1.12-1.29-1.12-1.57s.36-.75,1.09-1.65c.3-.37.66-.81,1.08-1.36a.57.57,0,0,0,.13-.36V37.05a.55.55,0,0,0-.55-.55l-4.85,0,.09-22.09,2.92-5.11a2.85,2.85,0,0,0,.46-1.55l0-5A2.83,2.83,0,0,0,60.82,0L54,0a2.83,2.83,0,0,0-2.79,2.87l.08,5.54A2.79,2.79,0,0,0,51.81,10l2.73,3.91-.09,22.63-5.74,0a.55.55,0,0,0-.55.56v3.1a.54.54,0,0,0,.14.36c.47.52.87,1,1.22,1.32,1,1.07,1.48,1.59,1.49,2s-.41.86-1.19,1.85c-.39.49-.87,1.1-1.44,1.86a.5.5,0,0,0-.12.35v1.86H35.19l-5.5-12.91a12.84,12.84,0,0,1-1.11-3.79,14.19,14.19,0,0,1,.28-3.75c1.33-7.78,4-14.25-2.73-20.52ZM9.43,63.94H109V54.41H9.43v9.53ZM109,68.57H95.13v7.79A3.17,3.17,0,0,1,92,79.53H80.86a3.18,3.18,0,0,1-3.17-3.17V68.57H41.82v7.79a3.18,3.18,0,0,1-3.17,3.17H27.55a3.18,3.18,0,0,1-3.18-3.17V68.57H9.43V93a12.24,12.24,0,0,0,12.19,12.2H96.79A12.24,12.24,0,0,0,109,93V68.57ZM75.29,18.83a15.81,15.81,0,0,1,5.3-2.57,10.13,10.13,0,0,1,7.87.85l20.38,11.75L107.61,31l7.75,4.51,7.52-13L115.14,18l-1.4,2.36L93.48,8.68a10.31,10.31,0,0,0-8-1.38c-4.24,1.14-7.65,5-10.23,11.53Z"/>
                </svg>
                {
                    getSize(size) === limitSize
                    && 
                    <h5 style={{color: "#282B34", fontWeight: fontWeight}}>{icon}</h5>
                }
            </div>
        )
    }

    return(
        <div style={{textAlign: alignCenter, margin: containerMargin}}>
            {
                icon.toLowerCase() === "redux"
                &&
                <>
                    <svg viewBox={viewBox} style={{height: getSize(size), width: getSize(size)}}>
                        <path fill="none" d="M0 0h128v128H0z"></path><path d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 01-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0010 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0026.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 01-2.61-6A9.12 9.12 0 0187.37 70h.34a9.15 9.15 0 011 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 01-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0016 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 00-17.27-20.85 62 62 0 00-34.74-10.59h-2.93a9.21 9.21 0 01-8 5.54h-.31a9.13 9.13 0 01-.3-18.25h.33a9 9 0 018 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 011.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 00-9.64 25.25 59.61 59.61 0 008.47 36.16 2.75 2.75 0 011.14-.16h.32a9.12 9.12 0 01.33 18.24h-.33a9.16 9.16 0 01-9.12-8.79z" fill="#764abc"></path>
                    </svg>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#764abc", fontWeight: fontWeight}}>Redux</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "react"
                &&
                <>
                    <svg viewBox={viewBox} style={{height: getSize(size), width: getSize(size)}}>
                        <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                    </svg>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#61DAFB", fontWeight: fontWeight}}>React</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "javascript"
                &&
                <>
                    <svg viewBox={viewBox} style={{height: getSize(size), width: getSize(size)}}>
                        <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
                    </svg>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#282B34", fontWeight: fontWeight}}>JavaScript</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "python"
                &&
                <>
                    <svg viewBox={viewBox} style={{height: getSize(size), width: getSize(size)}}>
                        <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4"></stop><stop offset="1" stopColor="#306998"></stop></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B"></stop><stop offset="1" stopColor="#FFE873"></stop></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"></path><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"></path><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#B8B8B8" stopOpacity=".498"></stop><stop offset="1" stopColor="#7F7F7F" stopOpacity="0"></stop></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path>
                    </svg>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#306998", fontWeight: fontWeight}}>Python</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "django"
                &&
                <>
                    <svg viewBox={viewBox} style={{height: getSize(size), width: getSize(size)}}>
                        <path fill="#0C4B33" d="M59.448 0h20.93v96.88c-10.737 2.04-18.62 2.855-27.181 2.855-25.551-.001-38.87-11.551-38.87-33.705 0-21.338 14.135-35.2 36.015-35.2 3.398 0 5.98.272 9.106 1.087zm0 48.765c-2.446-.815-4.485-1.086-7.067-1.086-10.6 0-16.717 6.523-16.717 17.939 0 11.145 5.845 17.26 16.582 17.26 2.309 0 4.212-.136 7.202-.542z"></path><path fill="#0C4B33" d="M113.672 32.321V80.84c0 16.717-1.224 24.735-4.893 31.666-3.398 6.661-7.883 10.873-17.124 15.494l-19.435-9.241c9.242-4.35 13.726-8.153 16.58-14 2.99-5.979 3.943-12.91 3.943-31.122V32.321zM92.742.111h20.93v21.474h-20.93z"></path>
                    </svg>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#0C4B33", fontWeight: fontWeight}}>Django</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "matplotlib"
                &&
                <>
                    <svg viewBox={viewBox} style={{height: getSize(size), width: getSize(size)}} stroke="#777" fillOpacity=".8">
                        <path fill="#FFF" d="m63,1a63,63 0 1,0 2,0zm0,14a49,49 0 1,0 2,0zm0,14a35,35 0 1,0
                        2,0zm0,14a21,21 0 1,0 2,0zm0,14a7,7 0 1,0 2,0zm64,7H1m108-45-90,90m90,0-90-90m45-18v126"/>
                        <path fill="#F60" d="m50,8-20,10 68,92 10-10L64,64z"/>
                        <path fill="#FC0" d="m17,50v28L64,64z"/>
                        <path fill="#7F7" d="m64,64 6,35H58z"/>
                        <path fill="#CF3" d="m64,64 13-40 9,5z"/>
                        <path fill="#04F" d="m64,64 14-6 1,4zl-26,13 3,4z"/>
                    </svg>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#0b5d9c", fontWeight: fontWeight}}>Matplotlib</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "html"
                &&
                <>
                    <svg viewBox={viewBox} style={{height: getSize(size), width: getSize(size)}}>
                        <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
                    </svg>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#E44D26", fontWeight: fontWeight}}>HTML</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "css"
                &&
                <>
                    <svg viewBox={viewBox} style={{height: getSize(size), width: getSize(size)}}>
                        <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>                    
                    </svg>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#1572B6", fontWeight: fontWeight}}>CSS</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "jspdf"
                &&
                <>
                    <svg viewBox={viewBox} style={{height: getSize(size), width: getSize(size)}}>
                        <g><circle className="jspdf-blend" fill="#03eabe" xmlns="http://www.w3.org/2000/svg" cx="69.25" cy="121.9" r="49.63"/><path fill="#8b5cdd" className="jspdf-blend" xmlns="http://www.w3.org/2000/svg" d="M102.69 49.68A51.36 51.36 0 1 1 53 0a51.36 51.36 0 0 1 49.69 49.68z"/><circle fill="#8e9a9a" className="jspdf-blend" xmlns="http://www.w3.org/2000/svg" cx="86.07" cy="80.79" r="32.82"/></g>
                    </svg>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#282B34", fontWeight: fontWeight}}>jsPDF</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "bootstrap"
                &&
                <>
                    <svg viewBox={viewBox} style={{height: getSize(size), width: getSize(size)}}>
                        <defs><linearGradient id="bootstrap-original-a" x1="76.079" x2="523.48" y1="10.798" y2="365.95" gradientTransform="translate(1.11 14.613) scale(.24566)" gradientUnits="userSpaceOnUse"><stop stopColor="#9013fe" offset="0"></stop><stop stopColor="#6610f2" offset="1"></stop></linearGradient><linearGradient id="bootstrap-original-b" x1="193.51" x2="293.51" y1="109.74" y2="278.87" gradientTransform="translate(0 52)" gradientUnits="userSpaceOnUse"><stop stopColor="#fff" offset="0"></stop><stop stopColor="#f1e5fc" offset="1"></stop></linearGradient><filter id="bootstrap-original-c" x="161.9" y="135.46" width="197" height="249" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="8"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs><path d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z" fill="url(#bootstrap-original-a)"></path><path transform="translate(1.494 2.203) scale(.24566)" d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z" fill="url(#bootstrap-original-b)" filter="url(#bootstrap-original-c)" stroke="#fff"></path>
                    </svg>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#9013fe", fontWeight: fontWeight}}>Bootstrap</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "cplusplus"
                &&
                <>
                    <svg viewBox={viewBox} style={{height: getSize(size), width: getSize(size)}}>
                        <path fill="#D26383" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#9C033A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path><path d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z" fill="#fff"></path>
                    </svg>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "rgb(156, 3, 58)", fontWeight: fontWeight}}>C++</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "pandas"
                &&
                <>
                    <svg viewBox={viewBox} style={{height: getSize(size), width: getSize(size)}}>
                        <path className="pandas" d="M48.697 15.176h12.25v25.437h-12.25zm0 52.251h12.25v25.436h-12.25z" color="#000" fill="#130754"></path><path className="pandas" d="M48.697 48.037h12.25v12.001h-12.25z" color="#000" fill="#ffca00"></path><path className="pandas" d="M29.017 36.087h12.25v84.552h-12.25zM67.97 88.414h12.25v25.436H67.97zm0-52.297h12.25v25.437H67.97z" color="#000" fill="#130754"></path><path className="pandas" d="M67.97 68.983h12.25v12.001H67.97z" color="#000" fill="#e70488"></path><path className="pandas" d="M87.238 8.55h12.25v84.552h-12.25z" color="#000" fill="#130754"></path>
                    </svg>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#130754", fontWeight: fontWeight}}>Pandas</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "git"
                &&
                <>
                    <svg viewBox={viewBox} style={{height: getSize(size), width: getSize(size)}}>
                        <path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"></path>
                    </svg>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#F34F29", fontWeight: fontWeight}}>Git</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "numpy"
                &&
                <>
                    <svg viewBox={viewBox} style={{height: getSize(size), width: getSize(size)}}>
                        <path d="M54.32 27.164L33.304 16.559 10.226 28.071l21.594 10.84zM63.961 32.031L86 43.16 63.137 54.637 41.512 43.782zM93.398 16.715l22.645 11.355-20.254 10.168-22.082-11.141zM83.652 11.824L63.265 1.601 43.101 11.667l21.008 10.59zM67.715 99.605v27.816l24.695-12.324-.023-27.828zM92.375 77.555l-.027-27.535-24.633 12.246v27.547zM122.02 72.398v27.926l-21.066 10.508-.016-27.797zM122.02 62.633V35.266l-21.105 10.492.016 27.59z" color="#000" fill="#4cabcf" className="pandas"></path><path d="M58.996 62.266l-16.629-8.367v36.14S22.019 46.756 20.14 42.865c-.242-.504-1.242-1.051-1.496-1.188-3.668-1.914-14.355-7.324-14.355-7.324v63.871l14.785 7.926V72.75s20.129 38.676 20.336 39.102c.21.422 2.219 4.492 4.383 5.926 2.87 1.906 15.195 9.316 15.195 9.316z" color="#000" fill="#4c75cf" className="pandas"></path>
                    </svg>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "rgb(76, 117, 207)", fontWeight: fontWeight}}>NumPy</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "github"
                &&
                <>
                    <svg viewBox={viewBox} style={{height: getSize(size), width: getSize(size)}}>
                        <g fill="#181616"><path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
                    </svg>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#181616", fontWeight: fontWeight}}>GitHub</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "linkedin"
                &&
                <>
                    <svg viewBox={viewBox} style={{height: getSize(size), width: getSize(size)}}>
                        <path fill="#0076b2" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"></path><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path>
                    </svg>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#0076b2", fontWeight: fontWeight}}>Linkedin</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "chartjs"
                &&
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 192 192" style={{height: getSize(size), width: getSize(size)}}>
                    <path fill="#36A2EB" d="M161.271,96.556c-22.368,0.439-17.709,14.599-33.473,18.18c-16.014,3.638-18.542-39.111-34.552-39.111  c-16.012,0-19.559,41.526-39.608,70.034l-0.572,0.807l42.985,24.813l65.22-37.651V96.556z"/>
                    <path fill="#FFCE56" d="M161.271,95.267c-7.488-9.61-12.567-20.658-23.494-20.658c-19.337,0-14.249,31.545-35.62,31.545  c-21.373,0-23.62-33.931-47.832-2.035c-7.715,10.163-13.925,21.495-18.803,32.218l60.529,34.943l65.22-37.651V95.267z"/>
                    <path opacity="0.8" fill="#FE6184" d="M30.829,108.334c7.338-20.321,10.505-36.779,24.514-36.779  c21.371,0,26.458,60.039,44.779,53.931c18.318-6.105,16.282-38.669,44.779-38.669c5.424,0,10.962,3.323,16.371,8.698v38.113  l-65.22,37.651l-65.222-37.651V108.334z"/>
                    <path fill="#E7E9ED" d="M96,176l-69.292-39.999V56L96,16l69.292,40v80L96,176z M34.849,131.301L96,166.602l61.151-35.301V60.7  L96,25.399L34.849,60.7V131.301z"/>
                    </svg>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#FE6184", fontWeight: fontWeight}}>Chart.js</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "materialui"
                &&
                <>
                    <svg viewBox={viewBox} style={{height: getSize(size), width: getSize(size)}}>
                        <path fill="#1FA6CA" d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6z"></path><path fill="#1C7FB6" d="M48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4V41z"></path><path fill="#1FA6CA" d="M48 77.8v18.4l32 18.4V96.2L48 77.8z"></path><path fill="#1C7FB6" d="M80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z"></path>
                    </svg>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#1FA6CA", fontWeight: fontWeight}}>MaterialUI</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "firebase"
                &&
                <>
                    <img src={Firebase} style={{height: getSize(size), width: getSize(size)}} alt=""></img>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#FFCA28", fontWeight: fontWeight}}>Firebase</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "nodejs"
                &&
                <>
                    <img src={Nodejs} style={{height: getSize(size), width: getSize(size)}} alt=""></img>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#83CD29", fontWeight: fontWeight}}>Node.js</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "cypress"
                &&
                <>
                    <img src={Cypress} style={{height: getSize(size), width: getSize(size)}} alt=""></img>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#2AB586", fontWeight: fontWeight}}>Cypress</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "docker"
                &&
                <>
                    <img src={Docker} style={{height: getSize(size), width: getSize(size)}} alt=""></img>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#066da5", fontWeight: fontWeight}}>Docker</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "googlecloud"
                &&
                <>
                    <img src={Googlecloud} style={{height: getSize(size), width: getSize(size)}} alt=""></img>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#6b7280", fontWeight: fontWeight}}>Google Cloud</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "nextjs"
                &&
                <>
                    <img src={Nextjs} style={{height: getSize(size), width: getSize(size)}} alt=""></img>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#020617", fontWeight: fontWeight}}>Next.js</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "nextauth"
                &&
                <>
                    <img src={Nextauth} style={{height: getSize(size), width: getSize(size)}} alt=""></img>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#020617", fontWeight: fontWeight}}>NextAuth</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "prisma"
                &&
                <>
                    <img src={Prisma} style={{height: getSize(size), width: getSize(size)}} alt=""></img>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#020617", fontWeight: fontWeight}}>Prisma</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "trpc"
                &&
                <>
                    <img src={Trpc} style={{height: getSize(size), width: getSize(size)}} alt=""></img>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#398CCB", fontWeight: fontWeight}}>tRPC</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "typescript"
                &&
                <>
                    <img src={Typescript} style={{height: getSize(size), width: getSize(size)}} alt=""></img>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#007acc", fontWeight: fontWeight}}>TypeScript</h5>
                    }
                </>
            }
            {
                icon.toLowerCase() === "zod"
                &&
                <>
                    <img src={Zod} style={{height: getSize(size), width: getSize(size)}} alt=""></img>
                    {
                        getSize(size) === limitSize
                        && 
                        <h5 style={{color: "#18253F", fontWeight: fontWeight}}>Zod</h5>
                    }
                </>
            }
        </div>

        
    );
};

const getSize = (size) => {
    switch (size) {
        case 'supertiny':
            return '27px';
        case 'tiny':
            return '40px';
        case 'large':
            return '100px';
        default: 
            return '60px';
    }
};
