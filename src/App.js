import './App.scss'
import Editor from './components/Editor'
import Previewer from './components/Previewer'
import { marked } from 'marked'

function App() {

  const handleChange = (event) => {
    const html = marked.parse(event.target.value)

    // Update preview
    document.getElementById('preview').innerHTML = html
  }

  return (
    <>
      <Editor handleChange={handleChange}/>
      <Previewer />
    </>
  );
}

export default App;
