import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';

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

export const AnimationBox = ({id}) => {
    const effectCalled = useRef(false);
    const INT_SIZE = 350;
    const STR_HEIGHT = `${INT_SIZE}px`
    const STR_WIDTH = `${INT_SIZE}px`
    
    useEffect(() => {
        if (effectCalled.current) return; // guard to prevent double-effect call during development
        console.log("effect fires");

        // Get DOM elements
        const canvas = document.getElementById(`animationCanvas-${id}`);
        const container = document.getElementById(`animationContainer-${id}`);

        // Make new scene
        const scene = new THREE.Scene();

        // Setup cemra
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        camera.position.z = 5;
        
        // Setup renderer
        const renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: true,
        });
        renderer.setSize(INT_SIZE, INT_SIZE);
        container.appendChild(renderer.domElement);

        // Add lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        ambientLight.castShadow = true;
        scene.add(ambientLight);

        const spotLight = new THREE.SpotLight(0xffffff, 1);
        spotLight.castShadow = true;
        spotLight.position.set(0, 64, 32);
        scene.add(spotLight);

        // Textures
        const firebaseTexture = new THREE.TextureLoader().load(Firebase);
        const dockerTexture = new THREE.TextureLoader().load(Docker);
        const nextTexture = new THREE.TextureLoader().load(Nextjs);
        const nodejsTexture = new THREE.TextureLoader().load(Nodejs);
        const googlecloudTexture = new THREE.TextureLoader().load(Googlecloud);
        const nextauthTexture = new THREE.TextureLoader().load(Nextauth);
        const cypressTexture = new THREE.TextureLoader().load(Cypress);

        // Add object element
        const geometry = new THREE.BoxGeometry(3, 3, 3);
        const materials = [
           new THREE.MeshStandardMaterial({ 
                // color: 0xFF6347,
                map: firebaseTexture,
                transparent: true,
            }),
            new THREE.MeshStandardMaterial({ 
                map: dockerTexture,
                transparent: true,
            }),
            new THREE.MeshStandardMaterial({ 
                map: nextTexture,
                transparent: true,
            }),
            new THREE.MeshStandardMaterial({ 
                map: nodejsTexture,
                transparent: true,
            }),
            new THREE.MeshStandardMaterial({ 
                map: googlecloudTexture,
                transparent: true,
            }),
            new THREE.MeshStandardMaterial({ 
                map: nextauthTexture,
                transparent: true,
            }),
        ];

        const cube = new THREE.Mesh(geometry, materials);
        scene.add(cube);

        // Add orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);

        // Add FPS stats
        const stats = Stats();
        container.appendChild(stats.dom);

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            controls.update();
            stats.update();
        };
        animate();
        effectCalled.current = true;
    }, [])
  
      return (
        <div style={{height: STR_HEIGHT, width: STR_WIDTH}} id={`animationContainer-${id}`}>
            <canvas id={`animationCanvas-${id}`}></canvas>
        </div>
      );
  
}

