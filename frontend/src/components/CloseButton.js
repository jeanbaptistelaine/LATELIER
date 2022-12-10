import { useNavigate } from 'react-router-dom'
import { ReactComponent as IconClose } from '../assets/icons8-close.svg'

export default function CloseButton() {
  const navigate = useNavigate()

  const handleBackHome = () => {
    navigate(`/`)
  }
  return (
    <button className='button--close'>
      <IconClose onClick={handleBackHome} />
    </button>
  )
}
