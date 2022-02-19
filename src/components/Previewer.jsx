import { FaFreeCodeCamp, FaExpandArrowsAlt } from 'react-icons/fa'

const Previewer = () => {
  return (
    <div className='window window__preview'>
      <div className='window__header'>
        <FaFreeCodeCamp />
        <span className='window__title'>Previewer</span>
        <button><FaExpandArrowsAlt /></button>
      </div>
      <div id="preview"></div>
    </div>
  )
}

export default Previewer
