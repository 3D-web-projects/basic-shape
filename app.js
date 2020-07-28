/*
*
* Objective: Display a simple box on the screen
*
* Steps:
*
* 1. Initial Set up
* 2. Create the Scene
* 3. Create the Camera
* 4. Create a Visible Object
* 5. Create the Renderer
* 6. Render the Scene
*
* */

// 1. Initial Set up
// - Import classes from three.js,
// - Obtain a reference to the scene-container element from index.html

import {
    BoxBufferGeometry,
    Color,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer
} from 'three';

// Get reference to the container element that will hold our scene
const container = document.querySelector('#scene-container');


// 2. Create the Scene
const scene = new Scene();
// Set the background color
scene.background = new Color('skyblue');


// 3. Create the Camera
const fov = 35;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 100;

const camera = new PerspectiveCamera(fov, aspect, near, far);
// move camera back so we view the scene
camera.position.set(0, 0, 10);

// 4. Create a Visible object
const width = 2, height = 2, depth = 2;
const geometry = new BoxBufferGeometry(width, height, depth);
// create a default (white) Basic Material
const material = new MeshBasicMaterial();
// create a Mesh containing the geometry and material
const cube = new Mesh(geometry, material);

// add mesh to the scene
scene.add(cube);

// 5. Create the renderer
const renderer = new WebGLRenderer();
// set the renderer's width and height
renderer.setSize(window.innerWidth, window.innerHeight);
// finally, set the pixel ratio so that our scene will look good on retina
renderer.setPixelRatio(window.devicePixelRatio);

// add the automatically created <canvas> element to the page
container.append(renderer.domElement);

