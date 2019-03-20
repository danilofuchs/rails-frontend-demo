import * as React from "react";
import { Row, Col } from "antd";
import { IColumnConfig } from "./Table";

interface ITableHeaderProps {
  columnsConfig: IColumnConfig[];
}
function TableHeader(props: ITableHeaderProps) {
  const { columnsConfig } = props;
  return (
    <Row className="react-table__header-container">
      {columnsConfig.map(columnConfig => (
        <Col
          span={columnConfig.bootstrapWidth * 2}
          key={columnConfig.key ? columnConfig.key : columnConfig.dataIndex}
        >
          <label className="react-table__header-title">
            {columnConfig.title}
          </label>
        </Col>
      ))}
    </Row>
  );
}
export default TableHeader;
