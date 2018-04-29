import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  render() {
    const { id, title } = this.props.library;
    return (
      <TouchableOpacity
        onPress={() => this.props.selectLibrary(id)}
      >
          <CardSection>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text>{this.props.library.title}</Text>
          </CardSection>
      </TouchableOpacity>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }
};

export default connect(null, actions)(ListItem);
