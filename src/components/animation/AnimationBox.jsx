import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


/**
 * Animated box that accepts up to six different textures.
 * @param {*} props | id: string, textures: object, rotation: object
 *                  | {textures}: up to 6 paths to media files
 *                  | {rotation}: x, y, z coordinates in type number
 * @returns 
 */
export const AnimationBox = ({
    id,
    textures: {
        texture1,
        texture2,
        texture3,
        texture4,
        texture5,
        texture6,
    },
    rotation = {
        x: 0.01,
        y: 0.01,
        z: 0.005,
    }
}) => {
    const effectCalled = useRef(false);
    const INT_SIZE = 250;
    const STR_HEIGHT = `${INT_SIZE}px`
    const STR_WIDTH = `${INT_SIZE}px`
    const INT_X_ROTATION = rotation.x;
    const INT_Y_ROTATION = rotation.y;
    const INT_Z_ROTATION = rotation.z;
    
    useEffect(() => {
        if (effectCalled.current) return; // guard to prevent double-effect call during development

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
        const firstTextureLoaded = new THREE.TextureLoader().load(texture1);
        const secondTextureLoaded = new THREE.TextureLoader().load(texture2);
        const thirdTextureLoaded = new THREE.TextureLoader().load(texture3);
        const fourthTextureLoaded = new THREE.TextureLoader().load(texture4);
        const fifthTextureLoaded = new THREE.TextureLoader().load(texture5);
        const sixthTextureLoaded = new THREE.TextureLoader().load(texture6);

        // Add object element
        const geometry = new THREE.BoxGeometry(3, 3, 3);
        const materials = [
           new THREE.MeshStandardMaterial({ 
                // color: 0xFF6347,
                map: firstTextureLoaded,
                transparent: true,
            }),
            new THREE.MeshStandardMaterial({ 
                map: secondTextureLoaded,
                transparent: true,
            }),
            new THREE.MeshStandardMaterial({ 
                map: thirdTextureLoaded,
                transparent: true,
            }),
            new THREE.MeshStandardMaterial({ 
                map: fourthTextureLoaded,
                transparent: true,
            }),
            new THREE.MeshStandardMaterial({ 
                map: fifthTextureLoaded,
                transparent: true,
            }),
            new THREE.MeshStandardMaterial({ 
                map: sixthTextureLoaded,
                transparent: true,
            }),
        ];

        const cube = new THREE.Mesh(geometry, materials);
        scene.add(cube);

        // Add orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            cube.rotation.x += INT_X_ROTATION;
            cube.rotation.y += INT_Y_ROTATION;
            cube.rotation.z += INT_Z_ROTATION;
            controls.update();
        };
        animate();
        effectCalled.current = true;
    }, [
        INT_X_ROTATION,
        INT_Y_ROTATION,
        INT_Z_ROTATION,
        texture1,
        texture2,
        texture3,
        texture4,
        texture5,
        texture6,
        id,
    ])
  
      return (
        <div style={{height: STR_HEIGHT, width: STR_WIDTH}} id={`animationContainer-${id}`}>
            <canvas id={`animationCanvas-${id}`}></canvas>
        </div>
      );
  
}

