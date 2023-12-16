import React from 'react';

function BoardComponent() {
    return (
        <div className='board'>
            <div className="cell white"></div>
            <div className="cell black"></div>
            <div className="cell white"></div>
            <div className="cell black"></div>
        </div>
    );
}

export default BoardComponent;