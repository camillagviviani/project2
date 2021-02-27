import { Component } from 'react';

class Activity extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { activity } = this.props;

        return (
            <div className ="Activity">
                <h2>{activity.activity}</h2>
                <img src="" alt=""/>
            </div>
        );
    }
}

export default Activity;