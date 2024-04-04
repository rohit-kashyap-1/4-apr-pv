import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
function App() {
  return (
    <BrowserRouter >
    <div className="App">
      <div className='container pt-5'>
        
        <Routes>
        <Route exact path='/products' element={<ProductList />}></Route>
        <Route path='/products/:id' element={<ProductDetail />}></Route>
      </Routes>
      </div>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
