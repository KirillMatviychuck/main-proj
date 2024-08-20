import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import './styles/index.scss';
import { useTheme } from './themes/useTheme';
import { classNames } from './helpers/classNames/classNames';


const App = () => {
    const { theme, changeTheme } = useTheme()

    return (

        <div className={classNames('app', {}, [theme])}>
            <Link to='/'>main</Link>
            <Link to='about'>about</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageLazy />} />
                    <Route path='/about' element={<AboutPageLazy />} />
                </Routes>
            </Suspense>
            <button onClick={changeTheme}>Change theme</button>
        </div>
    )
}

export default App;