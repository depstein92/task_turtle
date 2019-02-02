import React, { Component } from 'react';
import { ChatFeed, Message } from 'react-chat-ui';
import { Menu, Image, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
import { bindActionCreators } from 'redux';
import actions from '../actions/index';

class UserStatistics extends React.Component {
  constructor(props){
    super(props);

    this.state = { data: [] }
  }

  componentDidMount(){
   const { getUserMessages } = this.props;
   const { username } = this.props.userData.isLoggedIn.data;
   getUserMessages(username);
  }

  returnLineChartData = () => {

    const { jobs } = this.props.userData.isLoggedIn;

    return {
         labels: ["January", "February", "March", "April", "May", "June", "July"],
         datasets: [{
          label: "Jobs Completed",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [jobs.length, 10],

       }],
       maintainAspectRatio: false
     }
  }

  returnDoughnutChartData = () => {

    const { jobs } = this.props.userData.isLoggedIn;
    const sumOfUserRatings = jobs.map( a => a.rating)
                                 .reduce((a, b) => a + b) / jobs.length;
    return {
       labels: ["January", "February", "March", "April", "May", "June", "July"],
       datasets: [{
        label: "Job Ratings",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [sumOfUserRatings, 5],
     }],
     maintainAspectRatio: false
     }
  }

  returnBarChartData = () => {

     const { jobs, messages } = this.props;
     const jobsGranted = messages.payload.data.messages.length

     return {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
         label: "Jobs Requested/Jobs Granted",
         backgroundColor: 'rgb(255, 99, 132)',
         borderColor: 'rgb(255, 99, 132)',
         data: [jobsGranted, 9],
      }],
      maintainAspectRatio: false
    }
  }

  render(){

    return(
      <section className="user-statistics">
       <h1 className="user-statistics__title">
          User Statistics
       </h1>
       <div className="user-statistics__charts">
          <div className="user-statistics__charts--line-chart">
            <Line data={() => this.returnLineChartData()} />
          </div>
          <div className="user-statistics__charts--doughnut-chart">
            <Doughnut data={() => this.returnDoughnutChartData()} />
          </div>
          <div className="user-statistics__charts--bar-chart">
            <Bar data={() => this.returnBarChartData()} />
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    userData: state.isAuthenticated,
    messages: state.messages_inbox,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getUserMessages: actions['getUsersMessagesSuccess'],
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(UserStatistics);
