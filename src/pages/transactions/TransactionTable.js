import React, { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const TransactionsTable = ({ headers, data, dataLoading }) => {
  const columns = useMemo(
    () => [
      {
        header: headers[0],
        accessorKey: "stripe_payment_intent_id",
      },
      {
        header: headers[1],
        accessorKey: "stripe_plan_id",
      },
      {
        header: headers[2],
        accessorKey: "amount",
      },
      {
        header: headers[3],
        accessorKey: "status",
      },
      {
        header: headers[4],
        accessorKey: "created_at",
      },
    ],
    [headers]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (dataLoading) {
    return <div>Loading...</div>;
  }

  const tableStyle = {
    // width: "100%",
    borderCollapse: "collapse",
    margin: "20px auto",
    fontSize: "16px",
    textAlign: "left",
    maxWidth: "1200px",
  };

  const thStyle = {
    padding: "12px 15px",
    borderBottom: "2px solid #ddd",
    backgroundColor: "#f4f4f4",
    fontWeight: "bold",
  };

  const tdStyle = {
    padding: "12px 15px",
    borderBottom: "1px solid #ddd",
  };

  const trStyle = {
    backgroundColor: "#f9f9f9",
  };

  const trHoverStyle = {
    backgroundColor: "#f1f1f1",
  };

  return (
    <table style={tableStyle}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} style={thStyle}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            style={trStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style = { ...trStyle, ...trHoverStyle })
            }
            onMouseOut={(e) => (e.currentTarget.style = trStyle)}
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} style={tdStyle}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTable;
