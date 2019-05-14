

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Easing,
  Animated,
  TouchableOpacity,
} from 'react-native';
// 控件
import Picker from 'react-native-picker';
// import Save, { DATE_ENUM } from '../SaveManager/Save';
import DateManager from '../DateManager/DateManager';
import { ScreenWidth, ScreenHeight, StreamColor } from '../../utils/index';
const DATE_ENUM = {
  YEAR: 0,   // 年
  MONTH: 1,  // 月
  WEEK: 2,   // 周
  DAY: 3,    // 日
};
class ArrayUtils {
  // 数组是否包含某个元素
  static contains(array, item) {
      for (let i=0; i<array.length; i++) {
          if (array[i] == item) {
              return true;
          }
      }
      return false;
  }
  // 从日期1到日期2之间时间
  static getDateRange(date1, date2, date_enum) {
      let dateArr = [];
      for (let i=date1.year; i<=date2.year; i++) {
          if (date_enum == DATE_ENUM.YEAR) {
              dateArr.push({
                  year: i,
                  remark: ArrayUtils.getRemarkWithDate({year: i}, DATE_ENUM.YEAR)
              })
          } 
          else if (date_enum == DATE_ENUM.MONTH) {
              var maxMonth = i == date2.year ? date2.month : 12;
              var minMonth = i == date1.year ? date1.month : 1;
              for (let y=minMonth; y<=maxMonth; y++) {
                  dateArr.push({
                      year: i,
                      month: y,
                      remark: ArrayUtils.getRemarkWithDate({year: i, month: y}, DATE_ENUM.MONTH)
                  })
              }
          } 
          else if (date_enum == DATE_ENUM.WEEK) {
              var maxWeek = i == date2.year ? date2.week : 52;
              var minWeek = i == date1.year ? date1.week : 1;
              for (let y=minWeek; y<=maxWeek; y++) {
                  dateArr.push({
                      year: i,
                      week: y,
                      remark: ArrayUtils.getRemarkWithDate({year: i, week: y}, DATE_ENUM.WEEK)
                  })
              }
          }
      }
      return dateArr;
  }
  // 返回描述信息
  static getRemarkWithDate(date, date_enum) {
      if (date_enum == DATE_ENUM.YEAR) {
          let currentYear = DateManager.getYear();
          if (currentYear == date.year) {
              return "今年"
          } else if (currentYear - 1 == date.year) {
              return "去年";
          } else {
              return date.year + "年"
          }
      } else if (date_enum == DATE_ENUM.MONTH) {
          let currentYear = DateManager.getYear();
          let currentMonth = DateManager.getMonth();
          if (currentYear == date.year && currentMonth == date.month) {
              return "本月"
          } else if (currentYear == date.year && currentMonth - 1 == date.month) {
              return "上月";
          } else {
              if (currentYear != date.year) {
                  return date.year + "年" + date.month + "月"
              } else {
                  return date.month + "月"
              }
          }
      } else if (date_enum == DATE_ENUM.WEEK) {
          let currentYear = DateManager.getYear();
          let currentWeek = DateManager.getWeek();
          if (currentYear == date.year && currentWeek == date.week) {
              return "本周";
          } else if (currentYear == date.year && currentWeek - 1 == date.week) {
              return "上周";
          } else {
              if (currentYear != date.year) {
                  return date.year + "-" + date.week + "周"
              } else {
                  return date.week + "周"
              }
          }
      } else if (date_enum == DATE_ENUM.DAY) {
          let currentYear = parseInt(DateManager.getYear());
          let currentMonth = parseInt(DateManager.getMonth());
          let currentDay = parseInt(DateManager.getDay());
          date.year = parseInt(date.year);
          date.month = parseInt(date.month);
          date.day = parseInt(date.day);
          console.log(currentYear);
          console.log(currentMonth);
          console.log(currentDay);
          console.log(date);
          if (date.year == currentYear && date.month == currentMonth && date.day == currentDay) {
              return '今天';
          } else if (date.year == currentYear && date.month == currentMonth && date.day == (currentDay - 1)) {
              return '昨天';
          } else {
              return date.year + '/' + date.month + '/' + date.day;
          }
      }
  }
  // 比较两个日期
  static compareTo(date1, date2, compare_enum) {
      if (date1.year > date2.year) {
          if (compare_enum == COMPARE_ENUM.MORE) {
              return date1;
          }
          return date2;
      }
      else if (date1.year < date2.year) {
          if (compare_enum == COMPARE_ENUM.MORE) {
              return date2;
          }
          return date1;
      }
      else if (date1.year == date2.year) {
          if (date1.week > date2.week) {
              if (compare_enum == COMPARE_ENUM.MORE) {
                  return date1;
              }
              return date2;
          }
          else if (date1.week < date2.week) {
              if (compare_enum == COMPARE_ENUM.MORE) {
                  return date2;
              }
              return date1;
          }
      }
      return date1;
  }
  // 返回具体描述信息
  static getRemarkDeatilWithDate(date) {
      let str = DateManager.getFormatDate(date.year) + '年' + 
                DateManager.getFormatDate(date.month) + '月' + 
                DateManager.getFormatDate(date.day) + '日  星期' +
                DateManager.getWeekday(date.year, date.month-1, date.day);
      return str;
  }
}
class ThirdPicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      opacity: new Animated.Value(0),
      index: 0,
      isShow: false,
      selectedValue: ''
    }
  }
  static getRemarkWithDate(date, date_enum) {
    return ArrayUtils.getRemarkWithDate(date, date_enum);
}
  getIsShow() {
    return this.state.isShow;
  }
  fix(num, length) {
    return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
  }
  timePicker(index){
    var data = [];
    var selectedValue = [];
    // 时间
    if (index == 0) {
      let hour = [];
      for(var i=0; i<24; i++){
        hour.push(i);
      }
      let minute = [];
      for(var i=0; i<60; i++){
        minute.push(i);
      }
      data = [hour, minute];
      selectedValue = [DateManager.getHour(), DateManager.getMinute()];
    }
    // 年份
    else if (index == 1) {
      for (var i=2000; i<=DateManager.getYear(); i++) {
        data.push(i);
      }
      selectedValue = [DateManager.getYear()];
    }
    // 年-月-日
    else if (index == 2) {
      data = [[],[],[]];
      for (var year=2000; year<=DateManager.getYear(); year++) {
        data[0].push(year+"年");
      }
      for (var month=1; month<=12; month++) {
        data[1].push(month+"月");
      }
      for (var day=1; day<=DateManager.getDaysWithMonthAndYear(); day++) {
        data[2].push(this.fix(day, 2)+"日");
      }
      selectedValue = [
        DateManager.getYear()+"年",
        DateManager.getMonth()+"月",
        DateManager.getDay()+"日"
      ];
    }
    // 年-月
    else if (index == 3) {
      data = [[],[]];
      for (var year=2000; year<=DateManager.getYear(); year++) {
        data[0].push(year+"年");
      }
      for (var month=1; month<=12; month++) {
        data[1].push(month+"月");
      }
      selectedValue = [
        DateManager.getYear()+"年",
        DateManager.getMonth()+"月",
      ];
    }
    
    Picker.init({
        pickerData: data,
        selectedValue: selectedValue,
        pickerTitleText: this.props.title,
        pickerConfirmBtnText: '确认',
        pickerCancelBtnText: '取消',
        pickerConfirmBtnColor: [50, 50, 50, 1],
        pickerCancelBtnColor: [50, 50, 50, 1],
        pickerTitleColor: [50, 50, 50, 1],
        pickerToolBarBg: [255, 255, 255, 1],
        pickerBg: [255, 255, 255, 1],
        pickerToolBarFontSize: 14,
        pickerFontSize: 15,
        onPickerConfirm: data => this._onPickerConfirm(data),
        onPickerCancel: data => this._onPickerCancel(data),
        onPickerSelect: data => this._onPickerSelect(data)
    });
    Picker.show();

    this.setState({
      index: index,
      selectValue: '今天'
    })
  }
  _onPickerConfirm=(data)=>{
    if (this.state.index == 0) {

    }
    else if (this.state.index == 1) {
      var year = parseInt(data[0]);
      var str = Save.getRemarkWithDate({year: year}, DATE_ENUM.YEAR);
      this.props.onPickerConfirm(str, data);
    }
    else if (this.state.index == 2) {
      var year = parseInt(data[0]);
      var month = parseInt(data[1]);
      var day = parseInt(data[2]);
      var str = Save.getRemarkWithDate({year: year, month: month, day: day}, DATE_ENUM.DAY);
      this.props.onPickerConfirm(str, data);
    }
    else if (this.state.index == 3) {
      var year = parseInt(data[0]);
      var month = parseInt(data[1]);
      var str = Save.getRemarkWithDate({year: year, month: month}, DATE_ENUM.MONTH);
      this.props.onPickerConfirm(str, data);
    }
    this.hide();

    // if (this.state.selectValue == '' ||
    //     this.state.selectValue == '今天') {
    //   if (this.state.index == 0) {
    //   } else if (this.state.index == 1) {
    //   } else if (this.state.index == 2) {
    //     value = data[0]+data[1]+data[2];
    //     value = value.replace(/年/, "/")
    //     value = value.replace(/月/, "/")
    //     value = value.replace(/日/, "")
    //     this.props.onPickerConfirm('今天', data);
    //   } else if (this.state.index == 3) {
    //     this.props.onPickerConfirm({
    //       year: data[0].replace(/年/, ""),
    //       month: data[1].replace(/月/, ""),
    //     }, data);
    //   }
    // } else {
    //   this.props.onPickerConfirm(this.state.selectValue, data);
    // }
    // this.hide();
  }
  _onPickerCancel=(data)=>{
    this.hide();
    this.props.onPickerCancel();
  }
  _onPickerSelect=(data)=>{
    // var value;
    // if (this.state.index == 0) {
    // } else if (this.state.index == 1) {
    // } else if (this.state.index == 2) {
    //   value = data[0]+data[1]+data[2];
    //   value = value.replace(/年/, "/")
    //   value = value.replace(/月/, "/")
    //   value = value.replace(/日/, "")
    // }

    // this.setState({
    //   selectValue: value
    // })
    this.props.onPickerSelect(data)
  }
  show(index) {
    this.timePicker(index);
    this.setState({
      display: 'flex',
    })
    Animated.timing(this.state.opacity,{ 
      duration: 300,
      easing: Easing.elastic(0),
      toValue: 1,
    }).start((result)=>{
      this.setState({
        isShow: true
      })
    });
  }
  hide() {
    Picker.hide();
    Animated.timing(this.state.opacity,{ 
      duration: 300,
      easing: Easing.elastic(0),
      toValue: 0,
    }).start((result)=>{
      this.setState({
        display: 'none',
        isShow: false,
      })
    });
  }
  showYear() {
    this.timePicker();
    this.setState({
      display: 'flex',
    })
    Animated.timing(this.state.opacity,{ 
      duration: 300,
      easing: Easing.elastic(0),
      toValue: 1,
    }).start((result)=>{

    });
  }
  render() {
    return (
      <TouchableOpacity style={[styles.container,{
                                  display: this.state.display,
                                  top: this.props.top ? this.props.top : 0
                                }]} activeOpacity={1} onPress={()=>this.hide()}>
        <Animated.View 
          style={[
              styles.container, {
              opacity: this.state.opacity, 
              display: this.state.display,
              backgroundColor: 'rgba(50,50,50,0.4)',
              flex: 1,
              top: 0
            }
          ]} >
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: ScreenWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  }
});

ThirdPicker.defaultProps = {
  onPickerConfirm: ()=>{},
  onPickerCancel: ()=>{},
  onPickerSelect: ()=>{},
}
ThirdPicker.propTypes = {
  onPickerConfirm: PropTypes.func,
  onPickerCancel: PropTypes.func,
  onPickerSelect: PropTypes.func,
}

// 连接组件 
export default ThirdPicker;