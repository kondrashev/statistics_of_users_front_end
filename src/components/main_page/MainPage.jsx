import React from 'react';
import ReactDOM from 'react-dom';
import MainPageHeader from './MainPageHeader';
import MainPageMiddle from './MainPageMiddle';
import MainPageFooter from './MainPageFooter';

const MainPage = () => {
    const App = () => (
        <div>
            <MainPageHeader />
            <MainPageMiddle />
            <MainPageFooter />
        </div>
    )
    ReactDOM.render(<App />, document.getElementById('root'))
}
export default MainPage;