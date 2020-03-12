import React from 'react';

class ScrollTop extends React.Component {
    render() {
        return (
            <div className="scrolltop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Top
            </div>

        );
    }
}

export default ScrollTop;