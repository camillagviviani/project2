import { Component } from 'react';
import axios from 'axios';
import Activity from "./activity";
import Popup from "reactjs-popup";

class ActivityCharity extends Component {
    constructor(props) {
        super(props);
        this.state = { activity: [], }; 
    }

    fetchData = () => {
        axios.get('http://www.boredapi.com/api/activity?type=charity')
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
        <div>
        <Popup trigger = 
             { <img className="button" src="\images\social.jpeg" /> } 
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

export default ActivityCharity;