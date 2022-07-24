import { Document, Page } from "@react-pdf/renderer";
import React from "react";
import DataTable from "./DataTable";
import HeaderTitle from "./HeaderTitle";
const PDFView = ({ data }) => {
  return (
    <Document>
      <Page>
        <HeaderTitle />
        <DataTable data={data} />
      </Page>
    </Document>
  );
};

export default PDFView;
