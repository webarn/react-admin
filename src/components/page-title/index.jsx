import React from "react";

class PageTitle extends React.Component {
  componentWillMount() {
    document.title = this.props.title + " - HELLO WEB";
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3 className="page-header">{this.props.title}</h3>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default PageTitle;
