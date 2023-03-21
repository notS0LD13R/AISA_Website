
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';



const space=document.getElementById('earth-model') as HTMLDivElement;
const width=space.clientWidth;
const height=space.clientHeight;

const renderer = new THREE.WebGL1Renderer({
    canvas:document.getElementById('webgl') as HTMLCanvasElement
})

renderer.setClearColor( 0xffffff, 0);
renderer.setSize(width,height);
console.log(width,height)

const maincamera = new THREE.PerspectiveCamera(
    60,//FOV
    width/height,//Aspect Ratio
    0.1,//Near Plane
    100//Far Plane
)
maincamera.position.set(0,0,0.5)

const scene= new THREE.Scene();

const loader=new GLTFLoader()
let earth:any=null

loader.load('/3dModels/earth1.glb',
    (gltf)=>{
        console.log(gltf)
        earth=gltf.scene
        earth.position.set(0,0,0)
        
        scene.add(earth)
        
    },
    (progress)=>{
        console.log('progress:',progress.loaded/progress.total)
    },
    (error)=>{
        console.log(error)
    }
)

const light=new THREE.DirectionalLight(0xADD8E6,4)
light.position.set(2,0,2)
scene.add(light)

const rotationSpeed={
    x:0,
    y:0.05
}
space.addEventListener('mousemove',(e)=>{
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    
    rotationSpeed.y=(e.clientX-rect.x)/width-0.5;
    //rotationSpeed.x=(e.clientY-rect.y)/height-0.5;
    //console.log(rotationSpeed.x,rotationSpeed.y)

})



function animate(){
    requestAnimationFrame(animate);
    if(earth){
        earth.rotation.x+=rotationSpeed.x*0.03
        earth.rotation.y+=rotationSpeed.y*0.03
    }
    
    renderer.render(scene,maincamera);
    

}

animate();
