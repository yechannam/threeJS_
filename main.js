import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// camera.position.set(5, 14, 18);
// camera.lookAt( 0.5, 10, 16 );

// light = new THREE.AmbientLight(0xffffff); // soft white light
// scene.add(light);

// light_sun = new THREE.DirectionalLight ( 0x808080, 1.0 );
// var shadowBlur=10;
// light_sun.castShadow=true;
// light_sun.shadow.camera.left=-shadowBlur;
// light_sun.shadow.camera.right=shadowBlur;
// light_sun.shadow.camera.top=shadowBlur;
// light_sun.shadow.camera.bottom=-shadowBlur;
// scene.add( light_sun );

// let loader = new GLTFLoader();
// loader.load('why.gltf', function(gltf){
//     Mesh = gltf.scene;
//             Mesh.scale.set(1,1,1);
//             scene.add(Mesh);
//             Mesh.position.x = 0;
//             Mesh.position.y = 10;
//             Mesh.position.z = 15;
//     renderer.render(scene, camera);
// });

const renderer = new THREE.WebGLRenderer( { canvas: MyCanvas } );
    const camera = new THREE.PerspectiveCamera(50, 640 / 180, 1, 1000);
    const scene = new THREE.Scene();
    let Mesh;
    let light;
    let light_sun;

    function init() {
        scene.background = new THREE.Color('black');
        camera.position.set(5, 14, 18);
        camera.lookAt( 0.5, 10, 16 );
        // renderer.setSize(window.innerWidth, window.innerHeight);
        // document.body.appendChild(renderer.domElement);
    }

    function setLight() {
        light = new THREE.AmbientLight(0xffffff); // soft white light
        scene.add(light);
        
        light_sun = new THREE.DirectionalLight ( 0x808080, 1.0 );
          var shadowBlur=10;
          light_sun.castShadow=true;
          light_sun.shadow.camera.left=-shadowBlur;
          light_sun.shadow.camera.right=shadowBlur;
          light_sun.shadow.camera.top=shadowBlur;
          light_sun.shadow.camera.bottom=-shadowBlur;
          scene.add( light_sun );
    }

    function loadGLTF() {
        let balloonLoader = new THREE.GLTFLoader();

        balloonLoader.load('why.gltf', (gltf) => {
            Mesh = gltf.scene;
            Mesh.scale.set(1,1,1);
            scene.add(Mesh);
            Mesh.position.x = 0;
            Mesh.position.y = 10;
            Mesh.position.z = 15;
        });
    }

    function animate() {
        requestAnimationFrame(animate);
        if (Mesh && Mesh.rotation) {
            Mesh.rotation.y -= 0.001;
        }
        
        // 카메라 컨트롤러 추가
        //let controls = new THREE.OrbitControls (camera, renderer.domElement);
        //controls.update();
      
        renderer.render(scene, camera);
    }

    init();
    setLight();
    loadGLTF();
    animate();
