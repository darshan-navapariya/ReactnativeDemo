import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './DetailScreenStyle';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeAction from '../../Actions/homeAction';

export class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.route.params?.id,
      data: [],
      genres: [],
      production: [],
    };
  }
  componentDidMount() {
    this.fetchDetails();
  }
  fetchDetails() {
    try {
      this.props.action.MOVIEDETAILS(this.state.id).then((res) => {
        if (res) {
          console.log(res, 'Home Data get Successfully');
          this.setState({
            data: res,
            genres: res.genres,
            production: res.production_companies,
          });
        } else {
          alert('Check Api call', res.status_message);
        }
      });
    } catch (error) {
      console.log('error_', error);
    }
  }
  render() {
    let MainImage = `https://image.tmdb.org/t/p/w200${this.state.data.poster_path}`;
    let BackgroundImage = `https://image.tmdb.org/t/p/w200${this.state.data.backdrop_path}`;
    let result = this.state.genres.map(({name}) => name);
    let genres = result.toString();
    let result2 = this.state.production.map(({name}) => name);
    let production = result2.toString();

    console.log(genres);

    return (
      <SafeAreaView style={styles.mainView}>
        <View style={styles.headerView}>
          <Text numberOfLines={1} style={styles.nameText}>
            {this.state.data.title}
          </Text>
          <TouchableOpacity
            style={{position: 'absolute', left: 10}}
            onPress={() => this.props.navigation.goBack()}>
            <Image
              source={require('../../assets/back.png')}
              style={styles.backIcon}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.imageUpperView}>
          <ImageBackground
            source={{uri: BackgroundImage}}
            style={styles.imageBack}></ImageBackground>
        </View>
        <View style={styles.marginViewImage}>
          <Image
            resizeMode="contain"
            source={{uri: MainImage}}
            style={styles.posterImage}></Image>
          <View>
            <Text style={styles.mainTitleText}>{this.state.data.title}</Text>
            <Text style={styles.taglineText}>{this.state.data.tagline}</Text>
          </View>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.marginTH}>
            <Text style={styles.headName}>Overview</Text>
            <Text style={styles.desc}>{this.state.data.overview}</Text>
            <Text style={styles.headName}>Genres</Text>
            <Text style={styles.desc}>{genres}</Text>
            <Text style={styles.headName}>Duration</Text>
            <Text style={styles.desc}>{this.state.data.runtime} Minutes</Text>
            <Text style={styles.headName}>Release Date</Text>
            <Text style={styles.desc}>{this.state.data.release_date}</Text>
            <Text style={styles.headName}>Production Companies</Text>
            <Text style={styles.desc}>{production}</Text>
            <Text style={styles.headName}>Budget</Text>
            <Text style={styles.desc}>{this.state.data.budget} $</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
