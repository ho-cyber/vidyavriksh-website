import { Suspense } from 'react';
import { useThree } from '@react-three/fiber';
import Spline from '@splinetool/react-spline';

export default function SplineModel({ url, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  return (
    <Suspense fallback={null}>
      <group position={position} rotation={rotation} scale={[scale, scale, scale]}>
        <Spline scene={url} />
      </group>
    </Suspense>
  );
}
