import { OrbitControls, Sky } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import ParedVideo from './models/ParedVideo'

export default function Experience() {
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight castShadow shadow-normalBias={ 0.04 } position={[1, 2, 3]} intensity={1.5} />
        <ambientLight  intensity={0.5} />
        <ParedVideo/>
    </>
}