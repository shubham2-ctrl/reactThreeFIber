import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import {useLoader} from '@react-three/fiber'
import { Clone, useGLTF , useAnimations} from '@react-three/drei'
const Model = () =>
{
    const model = useGLTF('./mercedes.glb')
    // const animations = useAnimations(model.animations,model.scene)
    // console.log(animations);
    return (
       <>
        <Clone object={model.scene}  scale={1} position-x={-3}  position-y={0.07}/>
        <Clone object={model.scene}  scale={1} position-x = {0} position-y={0.07}/>
        <Clone object={model.scene}  scale={1} position-x= {3} position-y={0.07}/>

       </>
    )
}
export default Model;