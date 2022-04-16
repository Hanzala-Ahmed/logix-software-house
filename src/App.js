import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material';
import RatingSlider from './Sections/RatingSlider/RatingSlider';
import "../node_modules/slick-carousel/slick/slick.css"
import "../node_modules/slick-carousel/slick/slick-theme.css"

const themeMenus = createTheme({breakpoints: {
  values: {
    xs: 0,
    sm: 375,
    md: 575,
    lg: 768,
    xl: 990,
    xxl: 1200,
  },
},});

function App() {
  return (
      <ThemeProvider theme={themeMenus}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/slider' element={<RatingSlider />}></Route>
      </Routes>
      </ThemeProvider>
  );
}

export default App;
