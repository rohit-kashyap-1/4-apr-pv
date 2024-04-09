import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import ConditionalRendering from './components/ConditionalRendering';
import AccountBalance from './components/AccountBalance';
import ClassComponent from './components/ClassComponent';
function App() {
  return (
    <BrowserRouter >
    <div className="App">
      <div className='container pt-5'>
        
        <Routes>
        <Route exact path='/products' element={<ProductList />}></Route>
        <Route path='/products/:id' element={<ProductDetail title={""} />}></Route>
        <Route path='/conditional' element={<ConditionalRendering />}></Route>
        <Route path='/account' element={<AccountBalance />}></Route>
        <Route path='/class' element={<ClassComponent />}></Route>
      </Routes>
      </div>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
