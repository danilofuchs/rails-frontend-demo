import * as React from "react";
import { Row, Col } from "antd";

import { IColumnConfig, ITableConfig } from "./Table";

import PaymentMethodBadge from "./PaymentMethodBadge";
import PaymentStatusBadge from "./PaymentStatusBadge";
import FormattedCurrency from "./FormattedCurrency";
import CountryFlagBadge from "./CountryFlagBadge";
import FormattedDate from "./FormattedDate";

interface ITableRowProps {
  tableConfig: ITableConfig;
  columnsConfig: IColumnConfig[];
  rowData: {};
}
function TableRow(props: ITableRowProps) {
  const { rowData, columnsConfig, tableConfig } = props;

  return (
    <a
      className={
        tableConfig.redirectUrlIndex
          ? "react-table__row-link"
          : "react-table__row-link-disabled"
      }
      href={
        tableConfig.redirectUrlIndex
          ? rowData[tableConfig.redirectUrlIndex]
          : undefined
      }
      onClick={tableConfig.redirectUrlIndex ? undefined : () => false}
    >
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
                ) : columnConfig.dataType === "payment_status_badge" ? (
                  <PaymentStatusBadge status={data} />
                ) : columnConfig.dataType === "currency" ? (
                  <FormattedCurrency value={data} />
                ) : columnConfig.dataType === "country_flag" ? (
                  <CountryFlagBadge countryCode={data} />
                ) : columnConfig.dataType === "date" ? (
                  <FormattedDate date={data} />
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
    </a>
  );
}
export default TableRow;
