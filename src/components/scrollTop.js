import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

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
            <div>
                <Button
                    className={this.state.showScrollTop === true ? 'scrollTop fadeIn' : 'scrollTop'}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{ visibility: this.state.showScrollTop === true ? 'visible' : 'hidden' }}
                    variant="success">
                    <FontAwesomeIcon icon={faChevronUp} />
                </Button>
            </div>
        );
    }
}

export default ScrollTop;