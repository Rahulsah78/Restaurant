import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import '@fontsource/poppins'; // Default weight (400)
import '@fontsource/poppins/500.css'; // Optional specific weights
import '@fontsource/poppins/700.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
