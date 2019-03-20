import * as React from "react";
import { Row, Col } from "antd";
import { IColumnConfig } from "./Table";
import PaymentMethodBadge from "./PaymentMethodBadge";

interface ITableRowProps {
  columnsConfig: IColumnConfig[];
  rowData: {};
}
function TableRow(props: ITableRowProps) {
  const { rowData, columnsConfig } = props;

  return (
    <Row className="react-table__row" type="flex" align="middle">
      {columnsConfig.map(columnConfig => {
        const data = rowData[columnConfig.dataIndex];
        return (
          <Col
            className="react-table__row-item"
            span={columnConfig.bootstrapWidth * 2}
            key={columnConfig.key ? columnConfig.key : columnConfig.dataIndex}
          >
            {data ? (
              columnConfig.dataType === "payment_method_badge" ? (
                <PaymentMethodBadge method={data} />
              ) : (
                data
              )
            ) : (
              <span>{"-"}</span>
            )}
          </Col>
        );
      })}
    </Row>
  );
}
export default TableRow;
