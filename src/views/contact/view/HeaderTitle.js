import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import React, { Fragment } from "react";
import logo from "../../../assets/images/AlamgirSmallSizePP.jpg";

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
    position: "absolute",
    left: 100,
    top: 5,
  },
});
const HeaderTitle = () => {
  return (
    <Fragment>
      <View>
        <Image style={styles.logo} src={logo} />
        <Text>Hello World</Text>
      </View>
    </Fragment>
  );
};

export default HeaderTitle;
