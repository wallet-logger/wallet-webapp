import React from 'react';

function SidebarSection(props) {
  console.log(props);
  return (
    <React.Fragment>
      <div className="sb-sidenav-menu-heading">{props.headerName}</div>
      {props.sidebarEntries.map(function(each, index){
        return <SiderbarEntry key={index} title={each.title} active={each.active}/>;
      })}
    </React.Fragment>
  );
}

function SiderbarEntry(props) {
  return (
      <React.Fragment>
        <a className={`nav-link ${props.active ? 'active' : ''}`}  href="index.html">
          <div className="sb-nav-link-icon">
            <i className="fas fa-tachometer-alt"></i>
          </div>
          {props.title}
        </a>
      </React.Fragment>
  );
}

export default SidebarSection;