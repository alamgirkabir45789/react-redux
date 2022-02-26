import { Document, Image, Page, StyleSheet, Text } from "@react-pdf/renderer";
import React from "react";
import myImg from "../../assets/images/AlamgirSmallSizePP.jpg";
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
      }
});
const PDFView = () => {
  return (
    <Document>
      <Page style={styles.body} size="a4" orientation="landscape">
        <Text style={styles.header} fixed>
          <h2>Hello World</h2>
        </Text>
        <Image style={styles.image} src={myImg} />
        <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, minima temporibus odit consequatur est natus aliquam aliquid nesciunt voluptates perspiciatis nostrum at laudantium possimus nemo distinctio repellat, similique veniam consectetur.</Text>
        <Text style={styles.pageNumber} render={({pageNumber,totalPages})=>`${pageNumber}/${totalPages}`} fixed/>
      </Page>
    </Document>
  );
};

export default PDFView;
