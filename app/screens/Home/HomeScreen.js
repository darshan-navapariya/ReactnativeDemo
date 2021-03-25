import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import styles from './HomeScreenStyle';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeAction from '../../Actions/homeAction';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ['https://source.unsplash.com/1024x768/?nature'],
      data: [],
    };
  }
  componentDidMount() {
    this.fetchHomeData();
  }
  fetchHomeData() {
    try {
      this.props.action.HOMEACTION().then((res) => {
        if (res.results) {
          console.log(res, 'Home Data get Successfully');
          this.setState({data: res.results});
        } else {
          alert('Check Api call', res.status_message);
        }
      });
    } catch (error) {
      console.log('error_', error);
    }
  }
  renderPackage({item}) {
    let Image_url = `https://image.tmdb.org/t/p/w200${item.poster_path}`;
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('DetailScreen', {
            id: item.id,
          })
        }
        style={styles.itemView}>
        <Image source={{uri: Image_url}} style={{height: 150, width: 120}} />
        <View style={styles.marginView}>
          <Text style={styles.titleText}>{item.original_title}</Text>
          <Text style={styles.dateText}>{item.release_date}</Text>
          <Text style={styles.descText}>{item.overview}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#222e42'}}>
        <ScrollView>
          <View style={styles.headerView}>
            <Text style={styles.nameText}>Movie List</Text>
          </View>
          <View>
            <FlatList
              data={this.state.data}
              keyExtractor={(item) => item.title}
              renderItem={(item) => this.renderPackage(item)}></FlatList>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
function mapStateToProps(state) {
  if (state) {
    return {};
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(homeAction, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
