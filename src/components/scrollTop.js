import React from 'react';

let showScrollTop = false;

var scrollFunc = function () {
    var y = window.scrollY;
    if (y >= 800) {
        showScrollTop = true;
        console.log(showScrollTop)
    } else {
        showScrollTop = false;
        console.log(showScrollTop)
    }
};

window.addEventListener("scroll", scrollFunc);

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