import React, { Component } from "react";

class PageNum extends Component {
  constructor() {
    super();
    this.state = {
      isFristLoading: true
    };
  }

  componentWillReceiveProps() {
    //列表只有在第一次挂载的时候 isFristLoading为true, 其他情况为false
    this.setState({
      isFristLoading: false
    });
  }

  render() {
    //表头信息
    let tableHeader = this.props.headers.map((tableHerder, index) => {
      if (typeof tableHerder === "object") {
        return (
          <th key={index} width={tableHerder.width}>
            {tableHerder.name}
          </th>
        );
      } else {
        return <th key={index}>{tableHerder}</th>;
      }
    });

    //列表内容
    let ListBody = this.props.children;

    let ListInfo = (
      <tr>
        <td colSpan={this.props.headers.length} className="text-center">
          {this.state.isFristLoading ? "正在加载内容..." : "没有找到相应的结果~"}
        </td>
      </tr>
    );
    let tableBody = ListBody.length ? ListBody : ListInfo;
    return (
      <div className="row">
        <div className="col-md-12">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>{tableHeader}</tr>
            </thead>
            <tbody>{tableBody}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PageNum;
