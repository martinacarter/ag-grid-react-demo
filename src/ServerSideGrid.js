import React, { useState, useEffect } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import GridConfig from "./config/GridConfig";
import axios from "axios";

const ServerSideGrid = () => {
  const [gridApi, setGridApi] = useState(null);

  const getGridData = () => {
    let rowData;
    return {
      getRows(params) {
        axios
          .get(`${process.env.PUBLIC_URL}/data/grid-data.json`)
          .then((result) => {
            rowData = result.data.gridData;
          })
          .catch((error) => {
            console.log(error);
          });
        console.log("row data: ", rowData);
        params.successCallback(rowData, 3);
      },
    };
  };
  const onGridReady = (params) => {
    setGridApi(params.api);
    const datasource = getGridData();
    params.api.setServerSideDatasource(datasource);
  };
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 500 }}>
      <AgGridReact
        onGridReady={onGridReady}
        gridOptions={GridConfig.gridConfig}
        rowModelType="serverSide"
        cacheBlockSize={3}
      ></AgGridReact>
    </div>
  );
};

export default ServerSideGrid;
