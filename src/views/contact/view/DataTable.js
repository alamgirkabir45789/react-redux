import { Text, View } from "@react-pdf/renderer";
import React from "react";

const DataTable = ({ data }) => {
  return (
    <div>
      <View>
        <View>
          <Text>Name</Text>
          <Text>Age</Text>
        </View>
        {data.map((item) => (
          <View key={item.id}>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
          </View>
        ))}
      </View>
    </div>
  );
};

export default DataTable;
