import { BrowserRouter } from 'react-router-dom';
import AppRouter         from './Components/AppRouter';
import Header            from './Components/Header/Header';

const App = () => {
    return <BrowserRouter>
        <Header />
        <AppRouter />
    </BrowserRouter>
}

export default App;
