import React, { Component } from "react";
import { ClasssBox } from "./style";
import { classFiles } from "./const";

export class Classshow extends Component {
  constructor() {
    super();
    this.state = {
      classData: classFiles,
      onLeftSelect: "",
      onRightShow: [],
    };
    // this.classOnclick = this.classOnclick.bind(this)
  }
  componentDidMount() {
    console.log("classFiles", classFiles);
    const res = classFiles;
    const leftClass = res.keywordAreas[0].level1words[0];
    var initOnSelect = leftClass.keyword;
    var initRightClass = leftClass.level2words;
    this.setState({
      onLeftSelect: initOnSelect,
      onRightShow: initRightClass,
    });
  }
  // 左边的class点击事件
  leftClassOnclick(selectClass, classDetail) {
    this.setState({
      onLeftSelect: selectClass,
      onRightShow: classDetail,
    });
  }
  render() {
    return (
      <ClasssBox>
        <div className="leftArea">
          {/* 左边的选项 */}
          <ul>
            {this.state.classData.keywordAreas.map((item) => {
              return(
                <li key={item.areaId}>
                  <div className="list-tit">
                    <h3>{item.areaName}</h3>
                  </div>
                  <ul>
                    {item.level1words.map((level1)=> {
                      return (<li key={level1.keywordId} className={this.state.onLeftSelect === level1.keyword ? 'cur' : ''} onClick={this.leftClassOnclick.bind(this, level1.keyword, level1.level2words)}>{level1.keyword}</li>);
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="rightArea">
          <ul className="good-list">
            {/* 右边的详情展示 */}
            {
              this.state.onRightShow.map(item =>{
                return (
                  <li key={item.keywordId}>
                  <a
                    href="http://localhost:3000/productlist?ip=408"
                    className="good-link"
                  >
                    <div className="good-imgbox">
                      <img
                        src={item.imageUrl}
                        className="good-img"
                      />
                    </div>
                    <p className="good-name">{item.keyword}</p>
                  </a>
                </li>
                )
              })
            }
          </ul>
        </div>
      </ClasssBox>
    );
  }
}

export default Classshow;
