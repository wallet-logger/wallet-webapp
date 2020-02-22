import React from 'react';
import DashboardTableEntry from '../DashboardTableEntry/DashboardTableEntry';

function DataboardTable (props) {
  const { data } = props;

  return (
      <React.Fragment>
        <div className="card mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="dataTables_length" id="dataTable_length">
                      <label>
                        {'Show '}
                        <select
                            name="dataTable_length"
                            aria-controls="dataTable"
                            className="custom-select custom-select-sm form-control form-control-sm"
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                        {' entries'}
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div id="dataTable_filter" className="dataTables_filter">
                      <label>
                        Search:
                        <input
                            type="search"
                            className="form-control form-control-sm"
                            placeholder=""
                            aria-controls="dataTable"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                    </tr>
                    </thead>
                    <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                    </tr>
                    </tfoot>
                    <tbody>
                    {data.map((row, index) => {
                      return (
                          <DashboardTableEntry  row={row.fields} index={index}/>
                      );
                    })}
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="dataTable_info"
                         role="status" aria-live="polite">Showing 1 to 10 of 57
                      entries
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers"
                         id="dataTable_paginate">
                      <ul className="pagination">
                        <li className="paginate_button page-item previous disabled"
                            id="dataTable_previous"><a href="#"
                                                       aria-controls="dataTable"
                                                       data-dt-idx="0" tabIndex="0"
                                                       className="page-link">Previous</a>
                        </li>
                        <li className="paginate_button page-item active"><a href="#"
                                                                            aria-controls="dataTable"
                                                                            data-dt-idx="1"
                                                                            tabIndex="0"
                                                                            className="page-link">1</a>
                        </li>
                        <li className="paginate_button page-item "><a href="#"
                                                                      aria-controls="dataTable"
                                                                      data-dt-idx="2"
                                                                      tabIndex="0"
                                                                      className="page-link">2</a>
                        </li>
                        <li className="paginate_button page-item "><a href="#"
                                                                      aria-controls="dataTable"
                                                                      data-dt-idx="3"
                                                                      tabIndex="0"
                                                                      className="page-link">3</a>
                        </li>
                        <li className="paginate_button page-item "><a href="#"
                                                                      aria-controls="dataTable"
                                                                      data-dt-idx="4"
                                                                      tabIndex="0"
                                                                      className="page-link">4</a>
                        </li>
                        <li className="paginate_button page-item "><a href="#"
                                                                      aria-controls="dataTable"
                                                                      data-dt-idx="5"
                                                                      tabIndex="0"
                                                                      className="page-link">5</a>
                        </li>
                        <li className="paginate_button page-item "><a href="#"
                                                                      aria-controls="dataTable"
                                                                      data-dt-idx="6"
                                                                      tabIndex="0"
                                                                      className="page-link">6</a>
                        </li>
                        <li className="paginate_button page-item next"
                            id="dataTable_next"><a href="#"
                                                   aria-controls="dataTable"
                                                   data-dt-idx="7" tabIndex="0"
                                                   className="page-link">Next</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
  );
};

export default DataboardTable;