import { DataGrid, GridToolbar } from "app/ui";
import { Topic } from "../courseApi";
import { formatDateTime } from "utils/dates";

interface TopicsTableProps {
  topics: Topic[];
  loading: boolean;
  onSort: () => void;
  onFilter: () => void;
}

export default function TopicsTable({
  topics,
  loading,
  onSort,
  onFilter
}: TopicsTableProps) {
  return (
    <DataGrid
      columns={[
        { field: "title", headerName: "Title", width: 200 },
        { field: "excerpt", headerName: "Description", width: 300 },
        { field: "type", headerName: "Type" },
        {
          field: "plannedOn",
          headerName: "Date",
          valueFormatter: ({ value }) => formatDateTime(value),
          minWidth: 200
        },
        {
          field: "status",
          headerName: "Status",
          valueGetter: (params) => {
            return new Date(params.row.plannedOn);
          },
          valueFormatter: ({ value }) =>
            new Date(value) > new Date() ? "upcoming" : "passed"
        }
      ]}
      rows={topics}
      sortingMode="server"
      filterMode="server"
      onFilterModelChange={onFilter}
      onSortModelChange={onSort}
      loading={loading}
      slots={{ toolbar: GridToolbar }}
      disableColumnFilter
      disableColumnSelector
      disableDensitySelector
      disableColumnMenu
      disableRowSelectionOnClick
      pagination={undefined}
      slotProps={{
        toolbar: {
          csvOptions: { disableToolbarButton: true },
          printOptions: { disableToolbarButton: true },
          showQuickFilter: true,
          quickFilterProps: { debounceMs: 250 }
        }
      }}
    />
  );
}
