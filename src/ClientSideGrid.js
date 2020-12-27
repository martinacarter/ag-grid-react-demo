import React, { useState, useEffect } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import GridConfig from "./config/GridConfig";
import axios from "axios";

const ClientSideGrid = () => {
  const [gridApi, setGridApi] = useState(null);
  const [rowData, setRowData] = useState(null);
  const onGridReady = (params) => {
    setGridApi(params.api);
  };
  const getGridData = () => {
    axios
      .get(`${process.env.PUBLIC_URL}/data/grid-data.json`)
      .then((result) => {
        setRowData(result.data.gridData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getGridData();
  }, []);
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 500 }}>
      <AgGridReact
        onGridReady={onGridReady}
        gridOptions={GridConfig.gridConfig}
        rowData={rowData}
      />
    </div>
  );
};

export default ClientSideGrid;
