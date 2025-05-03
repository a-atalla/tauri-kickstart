import { For } from "solid-js";

import {
  ColumnDef,
  createSolidTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/solid-table";

type Props<T> = {
  columns: ColumnDef<T>[];
  data: T[];
};

const TableView = <T extends {}>(props: Props<T>) => {
  const table = createSolidTable({
    get data() {
      return props.data;
    },
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div
      class="bg-stone-100 border border-stone-300 rounded-md overflow-auto mb-4"
      style={{ height: `calc(100vh - 90px)` }}
    >
      <table class="w-full table-auto">
        <thead class="bg-stone-200 font-black  border-1 border-stone-300">
          <For each={table.getHeaderGroups()}>
            {(headerGroup) => (
              <tr>
                <For each={headerGroup.headers}>
                  {(header) => (
                    <td>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </td>
                  )}
                </For>
              </tr>
            )}
          </For>
        </thead>
        <tbody>
          <For each={table.getRowModel().rows}>
            {(row) => (
              <tr class="hover:bg-stone-300">
                <For each={row.getVisibleCells()}>
                  {(cell) => (
                    <td class="py-1">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
