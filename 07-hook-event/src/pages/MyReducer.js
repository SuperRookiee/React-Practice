import React from 'react';

function setCounterValue(state, action) {
    console.log("[%o] %o", action, state);

    
    switch (action) {
        case 'HELLO' :
            return state + 1;
        case 'WORLD':
            return state - 1;
        default:
            return 0;
    }
}


const MyReducer = () => {
    const [myCounter, setMyCounter] = React.useReducer(setCounterValue, 0);

    return (
        <div>
            <h2>MyReducer</h2>

            <p>현재 카운트 값: {myCounter}</p>
            <button type='button' onClick={(e) => setMyCounter('HELLO')}>UP</button>
            <button type='button' onClick={(e) => setMyCounter('WORLD')}>DOWN</button>
            <button type='button' onClick={(e) => setMyCounter('')}>RESET</button>
                
        </div>
    );
};

export default MyReducer;