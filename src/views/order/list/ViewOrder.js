import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});
const ViewOrder = ({ data }) => {
  console.log("data", data);
  return (
    <Document>
      <Page style={styles.body} size="a4">
        <View style={{ border: "1px solid black" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              borderBottom: "1px solid black",
            }}
          >
            <Text
              style={{
                borderRight: "1px solid black",
                width: "33.34%",
                textAlign: "center",
              }}
            >
              sdfdfd
            </Text>
            <Text
              style={{
                width: "33.34%",
                textAlign: "center",
              }}
            >
              sdfdfd
            </Text>
            <Text
              style={{
                borderRight: "1px solid black",
                width: "33.34%",
                textAlign: "center",
              }}
            >
              sdfdfd
            </Text>
          </View>
          {data.map((item) => (
            <View
              key={item.id}
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <Text
                style={{
                  borderRight: "1px solid black",
                  borderBottom: "1px solid black",
                  width: "33.34%",
                  paddingLeft: 10,
                }}
              >
                {item.customerName}
              </Text>
              <Text
                style={{
                  borderRight: "1px solid black",
                  borderBottom: "1px solid black",
                  width: "33.34%",
                  paddingLeft: 10,
                }}
              >
                {item.contactNumber}
              </Text>
              <Text
                style={{
                  borderBottom: "1px solid black",
                  width: "33.34%",
                  paddingLeft: 10,
                }}
              >
                {item.email}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default ViewOrder;
