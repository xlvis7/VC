import React from 'react';
import {
  Image,
  ImageBackground,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import MyTextInput from '../components/MyTextInput'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  servicesLabel = ['Stratergy', 'SEO', 'SEM', 'Forums', 'Sponsorship', 'EDMs', 'Mass Messanging', 'Display Ads'];
  servicesDesc = [];

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground 
          source={
              require('../assets/images/bg.png')
          }
          style={styles.backgroundImage}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                require('../assets/images/logo_small.png')
              }
              style={styles.logoImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
              {/* {this._maybeRenderDevelopmentModeWarning()} */}
              <Text style={styles.getStartedText}>
                亚洲尖端行业提供全方位服务营销机构
              </Text>

              <Button
                style={styles.contactUsButton}
                onPress={this._handleContactUsPress}
                title="  联系  "
              />
          </View>
          <View style={styles.skewLine}></View>
          <View style={styles.skewLine1}></View>
          <View style={styles.skewLine2}></View>
        </ImageBackground>

          
        <ScrollView style={styles.scrollContainer}>

          <MyTextInput style={styles.textInput} placeholder={"Website Url"}/>

          <View style={styles.servicesContainer}>
            <TouchableOpacity style={styles.servicesLink} onLongPress={this._handleServicePress}>
              <Text style={styles.servicesLinkText}>策略</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.servicesLink} onLongPress={this._handleServicePress}>
              <Text style={styles.servicesLinkText}>SEO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.servicesLink}>
              <Text style={styles.servicesLinkText}>搜索引擎营销</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.servicesLink}>
              <Text style={styles.servicesLinkText}>论坛</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.servicesLink}>
              <Text style={styles.servicesLinkText}>赞助</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.servicesLink}>
              <Text style={styles.servicesLinkText}>电子文件管理系统</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.servicesLink}>
              <Text style={styles.servicesLinkText}>大众传播</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.servicesLink}>
              <Text style={styles.servicesLinkText}>展示广告</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  _handleContactUsPress = () => {
    WebBrowser.openBrowserAsync('http://viceclicks.com/#contact');
  };

  _handleServicePress = () => {

  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    paddingTop: 30,
    width: '100%',
    height: 300,
    top: 0,
  },
  skewLine: {
    backgroundColor: '#d92031',
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: -30,
    left: 0,
    transform: [{ skewY: '-2deg' }],
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  contactUsButton: {
    backgroundColor: '#00b7f0',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  logoImage: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    marginBottom: 30,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  servicesContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  servicesLink: {
    paddingVertical: 15,
  },
  servicesLinkText: {
    fontSize: 14,
    color: 'rgba(96,100,109, 1)',
  },
});
