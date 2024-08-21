import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';




const App = () => {
    const { theme, changeTheme } = useTheme()

    return (

        <div className={classNames('app', {}, [theme])}>
            <Link to='/'>main</Link>
            <Link to='about'>about</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </Suspense>
            <button onClick={changeTheme}>Change theme</button>
        </div>
    )
}

export default App;