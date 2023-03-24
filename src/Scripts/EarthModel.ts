
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
//console.log(width,height)

const maincamera = new THREE.PerspectiveCamera(
    60,//FOV
    width/height,//Aspect Ratio
    0.1,//Near Plane
    1000//Far Plane
)
maincamera.position.set(0,0,2.5)

const scene= new THREE.Scene();

const loader=new GLTFLoader()
let earth:any=null

loader.load('/3dModels/earth.glb',
    (gltf)=>{
        //console.log(gltf)
        earth=gltf.scene
        earth.position.set(0,0,0)
        
        scene.add(earth)
        
    },
    ()=>{
        //  console.log('progress:',progress.loaded/progress.total)
    },
    ()=>{
        // console.log(error)
    }
)

const light=new THREE.DirectionalLight(0xFFFFFF,5)
light.position.set(0,0,5)
//scene.add(light)
const alight = new THREE.AmbientLight( 0xFFFFFF,3 ); // soft white light
scene.add( alight );

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
        earth.rotation.x+=rotationSpeed.x*0.01
        earth.rotation.y+=rotationSpeed.y*0.01
    }
    
    renderer.render(scene,maincamera);
    

}

animate();
