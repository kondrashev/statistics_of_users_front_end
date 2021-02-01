import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../store/reducers';
import { Provider } from 'react-redux';
import StatsPageHeader from './StatsPageHeader';
import StatsPageMenu from './StatsPageMenu';
import StatsPageTableUsers from './StatsPageTableUsers';
import StatsPageFooter from './StatsPageFooter';
import FooterLogotipe from './FooterLogotipe';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

const StatsPage = () => {
    const App = () => (
        <Provider store={store}>
            <div>
                <StatsPageHeader />
                <StatsPageMenu />
                <StatsPageTableUsers />
                <StatsPageFooter />
                <FooterLogotipe />
            </div>
        </Provider>
    )
    ReactDOM.render(<App />, document.getElementById('root'))
}
export default StatsPage;