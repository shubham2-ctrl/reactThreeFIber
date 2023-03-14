import { OrbitControls } from '@react-three/drei'
import { DoubleSide } from 'three'
import Model from './Model'

export default function Experience()
{
       
    return <>
        <OrbitControls makeDefault />
        <directionalLight castShadow position={ [ 1, 6, 3 ] } intensity={ 6 } />
        <ambientLight intensity={ 5 } />
        <pointLight position={[10, 10, 10]} />
        <mesh receiveShadow position-y={ 0.035 }  rotation-x={ - Math.PI * 0.5 } scale={ 20 }>
            <planeGeometry  />
            <meshStandardMaterial side ={DoubleSide}  color="black" />
        </mesh>
        <Model/>
    </>
}