import { FaFreeCodeCamp, FaExpandArrowsAlt } from 'react-icons/fa'

const Editor = ({handleChange}) => {
  return (
    <div className='window window__editor'>
      <div className='window__header'>
        <FaFreeCodeCamp />
        <span>Editor</span>
        <button><FaExpandArrowsAlt /></button>
      </div>
      <textarea id="editor" name="" onChange={handleChange}></textarea>
    </div>
  )
}

export default Editor
