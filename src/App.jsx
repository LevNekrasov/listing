import Listing from './components/Listing';
import './style/main.css'
import data from './data/etsy.json'

function App() {
  return (
    <Listing items={data} />
  )
}

export default App;