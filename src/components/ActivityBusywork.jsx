import { Component } from 'react';
import axios from 'axios';
import Activity from "./Activity";
import Popup from "reactjs-popup";

class ActivityBusywork extends Component {
    constructor(props) {
        super(props);
        this.state = { activity: [], }; 
    }

    fetchData = () => {
        axios.get('http://www.boredapi.com/api/activity?type=busywork')
        .then(res => 
            this.setState({ activity: res.data}));
    }

  componentDidMount() {
    this.fetchData();
  }

  render () {
      const activity = this.state.activity;
      return (
        <section className="ActivityList">
        <div className="buttonflex">
        <Popup trigger = 
             { <img className="button" src="\images\busywork.jpeg" /> } 
             modal
             nested>
               <div>
              <Activity key={activity.key} activity={activity} />
             </div>
             </Popup>
        </div>
    </section>
      );
  }
}

export default ActivityBusywork;