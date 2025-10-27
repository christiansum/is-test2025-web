import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function FilesTable({
  rows,
  page,
  pageSize,
  total,
  loading,
  onPageChange,
}) {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "extractor", headerName: "Extractor", flex: 1, minWidth: 120 },
    { field: "kind", headerName: "Kind", flex: 1, minWidth: 110 },
    { field: "filename", headerName: "Filename", flex: 1.2, minWidth: 160 },
    {
      field: "filepath",
      headerName: "Filepath",
      flex: 1.6,
      minWidth: 200,
      renderCell: (p) => (
        <span style={{ wordBreak: "break-all" }}>{p.value}</span>
      ),
    },
    { field: "inserted_at", headerName: "Inserted At", width: 180 },
  ];

  const paginationModel = { page: Math.max(0, page - 1), pageSize };

  return (
    <div style={{ height: 520, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pagination
        paginationMode="server"
        rowCount={total}
        pageSizeOptions={[5, 10, 25, 50]}
        paginationModel={paginationModel}
        onPaginationModelChange={({ page: p, pageSize: ps }) => {
          if (ps !== pageSize) {
            onPageChange(1, ps);
          } else {
            onPageChange(p + 1, pageSize);
          }
        }}
        loading={loading}
        disableRowSelectionOnClick
      />
    </div>
  );
}
