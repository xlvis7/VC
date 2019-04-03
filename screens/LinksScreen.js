import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { WebBrowser } from 'expo';
import Touchable from 'react-native-platform-touchable';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: '服务',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.optionsTitleText}>
            搜索引擎
          </Text>

          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePressBaidu}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
              <Image
                  source={require('../assets/images/baidu_favicon.png')}
                  resizeMode="contain"
                  fadeDuration={0}
                  style={{ width: 20, height: 20, marginTop: 1 }}
                />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>
                  百度 - 百度一下，你就知道
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePressSogou}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
              <Image
                  source={require('../assets/images/sogou_favicon.png')}
                  resizeMode="contain"
                  fadeDuration={0}
                  style={{ width: 20, height: 20, marginTop: 1 }}
                />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>
                  搜狗 - 上网从搜狗开始
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePress360}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
              <Image
                  source={require('../assets/images/360so_favicon.png')}
                  resizeMode="contain"
                  fadeDuration={0}
                  style={{ width: 20, height: 20, marginTop: 1 }}
                />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>
                  360搜索 - SO靠谱
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePressGoogle}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Image
                  source={require('../assets/images/google_favicon.png')}
                  resizeMode="contain"
                  fadeDuration={0}
                  style={{ width: 20, height: 20, marginTop: 1 }}
                />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>
                  Google - 谷歌
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            background={Touchable.Ripple('#ccc', false)}
            style={styles.option}
            onPress={this._handlePressBing}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Image
                  source={require('../assets/images/bing_favicon.png')}
                  fadeDuration={0}
                  style={{ width: 20, height: 20 }}
                />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>
                  Bing - 微软
                </Text>
              </View>
            </View>
          </Touchable>

        </View>
      </ScrollView>
    );
  }

  _handlePressGoogle = () => {
    WebBrowser.openBrowserAsync('https://www.google.com/');
  };

  _handlePressBing = () => {
    WebBrowser.openBrowserAsync('https://www.bing.com/');
  };

  _handlePressBaidu = () => {
    WebBrowser.openBrowserAsync('https://www.baidu.com/');
  };

  _handlePressSogou = () => {
    WebBrowser.openBrowserAsync('https://www.sogou.com/');
  };

  _handlePress360 = () => {
    WebBrowser.openBrowserAsync('https://www.so.com/');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});
