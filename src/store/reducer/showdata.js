import {
  ADD_TO_DATA,
  CLEAR_DATA,
  CHANGE_DATA,
  REMOVE_FROM_DATA,
} from "../actions/showdata.js";
// 初始状态
const initState = {
  tabletitle: {
    name: "中文名",
    ForeignNames: "外文名",
    anotherName: "别 名",
    positioning: "定 位",
    DebutWorks: "登场作品",
    height: "身 高",
    HostileRelationship: "敌对关系",
    Camp: "所属阵营",
    RecommendedLocation: "推荐位置",
    HeroOrientation: "英雄定位",
  },
  tablelist: [
    {
      name: "李青",
      ForeignNames: "Lee Sin",
      anotherName: "瞎子",
      sex: "男",
      DebutWorks: "英雄联盟",
      height: "170",
      HostileRelationship: "",
      Camp: "艾欧尼亚",
      RecommendedLocation: "打野",
      HeroOrientation: "战士",
    },
  ],
};
// reducer
// 作用: 指定state的修改逻辑：创建一个新state的并返回（覆盖旧数据）
function showdataReducer(state = initState, action) {
  console.log("initState", state);
  switch (
    action.type // 添加商品
  ) {
    case ADD_TO_DATA:
      console.log("目前的数据是", action.newlist); // 返回一个新的State，这个state会自动覆盖store中的旧数据
      return {
        ...state,
        tablelist: [...state.tablelist, action.newlist],
      }; // 删除商品 // case REMOVE_FROM_DATA: // return { //     ...state, //     cartlist: state.cartlist.filter(item => item.goods_id != action.goods_id) // }
    default:
      return state;
  }
}
export default showdataReducer;
