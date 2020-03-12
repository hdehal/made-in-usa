import React from 'react';

class ScrollTop extends React.Component {

    // Initial state
    constructor(props) {
        super(props);

        this.scrollFunc = this.scrollFunc.bind(this);

        this.state = {
            showScrollTop: false
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollFunc)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollFunc)
    }

    scrollFunc(e) {
        var y = window.scrollY;
        if (y >= 100) {
            this.setState({
                showScrollTop: true
            });

        } else {
            this.setState({
                showScrollTop: false
            });
        }
    };

    render() {
        return (
            <div className="scrollTop"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{ visibility: this.state.showScrollTop === true ? 'visible' : 'hidden' }}
            >
                Top
            </div>
        );
    }
}

export default ScrollTop;