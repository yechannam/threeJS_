import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

let rotationIt = true;

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.set(0,3,10);

let loader = new GLTFLoader();

loader.load('cute_ghost/scene.gltf', function(gltf){
    const obj = gltf.scene;
    scene.add(obj);
    
    function animate() {
        requestAnimationFrame( animate );

        if (rotationIt)
            obj.rotation.y += 0.01;
        else
            obj.rotation.y = 0;

        renderer.render( scene, camera );
    }
    animate();
});

const button = document.querySelector('button');
 
const buttonClickHandler = () =>{
  rotationIt = !rotationIt;
};
 
button.onclick = buttonClickHandler;

