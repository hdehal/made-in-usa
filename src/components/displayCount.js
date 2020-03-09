import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge';
import CountUp from 'react-countup';

// Modularized component imports
import { item } from './stitchAuth';

class DisplayCount extends Component {

    // Initial state
    constructor(props) {
        super(props);

        this.state = {
            totalItems: ''
        }
    }

    // Count database documents
    async getData() {
        (await item())
            .count({ "isVerified": true })
            .then(totalItems => this.setState({ totalItems }))

            // Error logging
            .catch(err => {
                console.warn("Error:", err);
            });
    }

    componentDidMount() {
        this.getData();
    }

    render() {

        return (
            <Button size="sm" variant="success" >
                <Badge variant="light">
                    <CountUp start={0} end={this.state.totalItems} delay={1}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                </Badge> Companies
            </Button>
        )
    }
}

export default DisplayCount;