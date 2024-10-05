import { Html } from '@react-three/drei'
import { useProgress } from '@react-three/drei'

const CanvasLoader = () => {
    const {progress}=useProgress();
  return (
    <Html
    as ="div"
    center
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}

    >
      <p className='text-[#6206ac] font-bold text-2xl'>
         {progress!==0 ?`${progress.toFixed(2)}%`:"Loading ..."}
      </p>
    </Html>
  )
}

export default CanvasLoader
