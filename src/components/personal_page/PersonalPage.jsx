import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../store/reducers';
import { Provider } from 'react-redux';
import StatsPageHeader from '../statistics/StatsPageHeader';
import StatsPageMenu from '../statistics/StatsPageMenu';
import Diagram from './Diagram';
import FooterLogotipe from '../statistics/FooterLogotipe';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

const PersonalPage = () => {
    const App = () => (
        <Provider store={store}>
            <div>
                <StatsPageHeader />
                <StatsPageMenu />
                <Diagram />
                <FooterLogotipe move={1} />
            </div>
        </Provider>
    )
    ReactDOM.render(<App />, document.getElementById('root'))
}
export default PersonalPage;