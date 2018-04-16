import React, { Component } from "react";
import http from "axios";
import { Link } from "react-router-dom";
import Pagination from "../../../util/pagination";
import Util from "../../../util/mm";
import PageTitle from "../../../components/page-title/index";
import TableList from "../../../util/tableList";

import './index.scss'

const _mm = new Util();

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      pageNum: 1
    };
  }

  componentDidMount() {
    this.productList();
  }

  productList() {
    http
      .get("/manage/product/list.do", { params: { pageNum: this.state.pageNum } })
      .then(res => {
        if (res.data.status === 10) {
          _mm.doLogin();
        } else if (res.data.status === 0) {
          this.setState(res.data.data);
        }
      })
      .catch(err => {
        this.setState({
          list: []
        });
        _mm.errTips("获取用户列表失败!");
      });
  }

  onPageNum(pageNum) {
    this.setState(
      {
        pageNum: pageNum
      },
      () => {
        this.productList(this.state.pageNum);
      }
    );
  }

  //改变商品状态
  onSetStatus(e, id, s) {
    let newStatus = s === 1 ? 2 : 1;
    let confirmTips = s === 1 ? "确定要下架该商品吗?" : "确定要上架该商品吗?";
    if (window.confirm(confirmTips)) {
      http
        .get("/manage/product/set_sale_status.do", {params:{
          productId: id,
          status: newStatus
        }})
        .then(res => {
          console.log(res.data)
          _mm.successTips(res.data.data);
          this.productList();
        })
        .catch(err => {
          _mm.errTips("状态修改失败!");
        });
    }
  }

  render() {
    let tableHeads = [
      { name: "商品ID", width: "10%" },
      { name: "商品信息", width: "50%" },
      { name: "价格", width: "10%" },
      { name: "状态", width: "15%" },
      { name: "操作", width: "15%" }
    ];
    return (
      <div id="page-wrapper">
        <PageTitle title="用户列表" />
        <TableList headers={tableHeads}>
          {this.state.list.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>
                  <p>{product.name}</p>
                  <p>{product.subtitle}</p>
                </td>
                <td>￥{product.price}</td>
                <td>
                  <p>{product.status === 1 ? "在售" : "已下架"}</p>
                  <button className="btn btn-xs btn-warning" onClick={e => this.onSetStatus(e, product.id, product.status)}>
                    {product.status === 1 ? "下架" : "上架"}
                  </button>
                </td>
                <td>
                  <Link className="opera" to={`/product/detail/${product.id}`}>详 情</Link>
                  <Link className="opera" to={`/product/save/${product.id}`}>编 辑</Link>
                </td>
              </tr>
            );
          })}
        </TableList>
        <Pagination
          current={this.state.pageNum}
          total={this.state.total}
          onChange={pageNum => this.onPageNum(pageNum)}
        />
      </div>
    );
  }
}

export default ProductList;
