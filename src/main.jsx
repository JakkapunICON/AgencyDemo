import ReactDOM from 'react-dom/client';
import React, { createContext, useReducer, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './Config';

// export const ResponsiveContext = createContext();

function Main() {
    // const initialState = 'xl';

    // function reducer(state, action) {
    //     switch (action.type) {
    //         case 'responsivemode':
    //             return action.payload;
    //         default:
    //             throw new Error();
    //     }
    // }

    // const [radioResponsiveModeState, radioResponsiveModeDispatch] = useReducer(reducer, initialState);

    return (
        // <ResponsiveContext.Provider value={{ radioResponsiveModeState, radioResponsiveModeDispatch }}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        // </ResponsiveContext.Provider>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
