import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const commonOptions: any = {
  theme: 'light',
  closeOnClick: true,
  autoClose: 2000,
  position: 'top-center',
  style: { fontSize: 16, color: 'black', fontFamily: 'Pretendard' },
}

const readyAlert = () => {
  toast.warning('미안, 아직 준비중이에요!', {
    icon: () => '🚧',
    ...commonOptions,
  })
}

export {
    readyAlert,
}
