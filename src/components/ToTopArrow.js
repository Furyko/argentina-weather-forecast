import React from 'react';

function ToTopArrow() {
    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div>
            <button onClick={toTop} className='float'>
                <p className='arrow'></p>
            </button>
        </div>
    )
}

export default ToTopArrow;