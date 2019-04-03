import * as React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";

class MyTextInput extends React.Component {
  state = {
    isFocused: false,
  };

  handleFocus = event => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlur = event => {
    this.setState({ isFocused: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  render() {
    const { isFocused } = this.state;
    const { onFocus, onBlur, ...otherProps } = this.props;
    return (
        <View style={styles.textInputContainer}>
            <TextInput
                placeholder={this.props.placeholder}
                selectionColor={BLUE}
                underlineColorAndroid={
                isFocused ? BLUE : LIGHT_GRAY
                }
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                style={styles.textInput}
                {...otherProps}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    textInputContainer: {
        alignItems: "center",
    },
    textInput: {
        height: 50,
        width: 300,
        padding: 6,
        margin: 6,
    }
});

export default MyTextInput;