import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Center } from "@react-three/drei";

const MODEL_PATH = "/3d/models/laptop.glb";

function Modelo3d() {
  // model full path: /public/3d/models/avatar.glb
  const { scene } = useGLTF(MODEL_PATH);
  return <primitive object={scene} />;
}

export default function Modelo3dCanvas() {
  return (
    <Canvas camera={{ position: [15, 15, 20], fov: 50 }}>
      <Suspense fallback={null}>
        <Center>
          <Modelo3d />
        </Center>
        <Environment preset="studio" /> {/* HDRI básico */}
      </Suspense>
      <OrbitControls
        autoRotate
        autoRotateSpeed={2}
        enablePan={false}
        makeDefault
        enableDamping
        dampingFactor={0.1}
        minDistance={20}
        maxDistance={50}
        target={[0, 0, 0]}
      />
    </Canvas>
  );
}

useGLTF.preload("/3d/models/laptop.glb"); // pre-fetch para evitar popping
