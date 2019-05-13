// Default
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';

// Utils
import Cell from './Cell';
import { CATEGORY_JSON, ICON_JSON } from './MockJson';
import { ScreenWidth, ScreenHeight, StreamColor, TitleColor, BackDefaultColor } from '../../utils/index';

class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentItem: undefined,
    }
  }
  changeItem(item) {
    this.setState({
      currentItem: item
    })
  }
  data = () => {
    let arr = [];
    let item = CATEGORY_JSON[this.props.currentSelect]
    for (let y = 0; y < item.length; y++) {
      var name = item[y].name;
      var icon = ICON_JSON[item[y].icon].icon;
      if (this.state.currentItem && name == this.state.currentItem.name) {
        icon = ICON_JSON[item[y].icon].iconS;
      } else {
        icon = ICON_JSON[item[y].icon].icon;
      }
      arr.push({
        key: y,
        name: name,
        icon: icon,
      });
    }

    return arr;
  }
  scrollTo(y) {
    this.refs.flatList.scrollToOffset({
      offset: y,
      animated: true
    })
  }

  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.8}>
        <View style={styles.cell}>
          <Image style={styles.icon} source={item.icon} />
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ref={'flatList'}
          data={this.data()}
          renderItem={this._renderItem}
          numColumns={4}
          onScroll={this.props.onScroll}
          getItemLayout={(data, index) => ({
            length: ScreenWidth / 4 / 5 * 3 + 20 + 23,
            offset: (ScreenWidth / 4 / 5 * 3 + 20 + 23) * parseInt(index / 4),
            index: index
          })}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: 'white',
  },
  icon: {
    width: ScreenWidth / 4 / 5 * 3,
    height: ScreenWidth / 4 / 5 * 3,
  },
  name: {
    fontWeight: '300',
    fontSize: 11,
    color: TitleColor,
    height: 20,
    marginTop: 5,
  }
});

Table.defaultProps = {
  onPress: () => { },
  onScroll: () => { },
}
Table.propTypes = {
  onPress: PropTypes.func,
  onScroll: PropTypes.func,
}

export default Table;