import React from 'react'
import DashboardTable from '../DashboardTable/DashboardTable';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isFetching: false,
      dashboardTableData: []
    };
    this.fetchDashboardTableData = this.fetchDashboardTableData.bind(this);
  }

  fetchDashboardTableData() {
    fetch('http://localhost:8000/dashboard/home')
        // .then(response => console.log(response))
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.setState({ ...this.state, dashboardTableData: data })
        })
  }

  componentDidMount() {
    this.fetchDashboardTableData();
  }

  render() {
    // const dashboardTableData = [
    //   {
    //     name: 'june',
    //     office: 'new york',
    //     age: '22',
    //     startDate: '2012/02/22',
    //     position: 'clerk',
    //     salary: '200',
    //   }
    // ];

    return (
      <React.Fragment>
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid">
              <h1 className="mt-4">Dashboard</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
              <DashboardTable data={this.state.dashboardTableData}/>
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;