

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
import Save, { DATE_ENUM } from '../SaveManager/Save';
import DateManager from '../DateManager/DateManager';
import { ScreenWidth, ScreenHeight, StreamColor } from '../../utils/index';

class ThirdPicker extends Component {

  static defaultProps = {
    onPickerConfirm: ()=>{},
    onPickerCancel: ()=>{},
    onPickerSelect: ()=>{},
  }

  static propTypes = {
    onPickerConfirm: PropTypes.func,
    onPickerCancel: PropTypes.func,
    onPickerSelect: PropTypes.func,
  }

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
  }
  _onPickerCancel=(data)=>{
    this.hide();
    this.props.onPickerCancel();
  }
  _onPickerSelect=(data)=>{
    this.props.onPickerSelect(data)
  }
  show(index) {
    console.log("picker show")
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
    try{
      Picker.hide && Picker.hide();
    }catch(e){
      console.log(e)
    }
    
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
  hideHandler = ()=> {
    console.log("onHide");
    this.hide();
  }
  render() {
    return (
      <TouchableOpacity style={[styles.container,{
                                  display: this.state.display, 
                                  position: this.state.display!=='none'?'absolute':'relative', 
                                  top: this.props.top?this.props.top:0
                                }]} activeOpacity={1} onPress={this.hideHandler}>
        <Animated.View 
          style={[
              styles.containerView, {
              opacity: this.state.opacity, 
              display: this.state.display
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
    position: 'relative',
    left: 0,
    right: 0,
    bottom: 0,
    //backgroundColor: 'rgba(50,50,50,0.4)',
  },

  containerView: {
    width: ScreenWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0, 
    top:0,
    backgroundColor: 'rgba(50,50,50,0.4)',
    flex: 1
  }
});

// 连接组件 
export default ThirdPicker;