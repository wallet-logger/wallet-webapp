import React from 'react'
import DashboardTable from '../DashboardTable/DashboardTable';
import { DASHBOARD_TABLE_URL } from '../../utils/backendResource';

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
    fetch(DASHBOARD_TABLE_URL)
        // .then(response => console.log(response))
        .then(response => response.json())
        .then(data => {
          this.setState({ ...this.state, dashboardTableData: data })
        })
  }

  componentDidMount() {
    this.fetchDashboardTableData();
  }

  render() {
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