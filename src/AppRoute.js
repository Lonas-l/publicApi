import {Route, Routes} from 'react-router-dom'
import MainPage from "./pages/MainPage";
import RandomWordGenerator from "./pages/RandomWordGenerator/RandomWordGenerator";

export const useRoutes = () => {
    return (
        <Routes>
            <Route path={'/app'} element={<MainPage />} exact/>
            <Route path={'/api/wordGenerator'} element={<RandomWordGenerator />} exact/>
        </Routes>
    )
}
