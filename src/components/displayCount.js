import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            totalItems: '',
            lastUpdate: ''
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

    // Timestamp for lastUpdate
    async getDate() {
        (await item())
            .findOne({}, { sort: { "_id": -1 } })
            .then(data => data._id.getTimestamp().toLocaleDateString("en-US"))
            .then(data => this.setState({ lastUpdate: data }))

            // Error logging
            .catch(err => {
                console.warn("Error:", err);
            });
    }

    componentDidMount() {
        this.getData(); // Get data for count
        this.getDate(); // Get date for getTimestamp
    }

    render() {

        return (
            <Link to="/">
                <Button id="lastUpdate" size="sm" variant="link">
                    Last Updated: {this.state.lastUpdate}
                </Button>
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
            </Link>
        )
    }
}

export default DisplayCount;