import * as THREE from 'three';
// import * as dat from 'dat.gui';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const threeJsBackground = () => {
  const loader = new GLTFLoader();

  const canvas = document.querySelector('canvas.three-js-bg');

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(-0.11, -0.12, 4.8);
  camera.rotation.set(0.08, 0.1, 0.04);

  const modelPath = 'static/models/side_table.glb';

  // const debug = new dat.GUI();

  // New Group for GLTF Object to Inhabit so it is accessible for event listeners;
  var table = new THREE.Group();

  //Load the GLTF File
  loader.load(modelPath, function (gltf) {
    const model = gltf.scene;
    const modelMaterial = new THREE.MeshBasicMaterial({
      wireframe: true,
      color: 0xBAADA1,
    })
    var meshArray = [];

    // Set model material for all group meshes
    model.children.map(object => {
      object.material = modelMaterial;

      // Add meshes into array
      // For some reason pushing straight into parent
      // scope only grabs half the meshes
      meshArray.push(object);
      return true;
    });

    // Transfer mesh group into parent scope variable.
    meshArray.map(mesh => table.add(mesh));

  }, null, (error) => console.log(error));

  scene.add(table);
  table.position.set(-0.25, 0.57, 2.3)
  table.rotation.set(-1.06, 0.01, 0.03)

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  let mouse = {
    x: 0,
    y: 0,
  };

  document.addEventListener("mousemove", (e) => {
    // Get mouse location on document
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  })

  window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  })


  var animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  animate();
}

export default threeJsBackground;