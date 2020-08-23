import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  NativeModules,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {PDF_LICENSE_KEY_IOS} from 'react-native-dotenv';

const PSPDFKit = NativeModules.PSPDFKit;

PSPDFKit.setLicenseKey(PDF_LICENSE_KEY_IOS);

// Change 'YourApp' to your app's name.
export default class PspdfkitReactNativeExample extends Component<Props> {
  _onPressButton() {
    PSPDFKit.present('tatto pdf.pdf', {});
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton}>
          <Text style={styles.text}>Tap to Open Document</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

// Change both 'YourApp's to your app's name.
AppRegistry.registerComponent('PspdfkitReactNativeExample', () => PspdfkitReactNativeExample);
