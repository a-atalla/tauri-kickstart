import { createFileRoute } from "@tanstack/solid-router";
import userGroupIcon from "../assets/icons/user-group.svg?inline";
import { ColumnDef } from "@tanstack/solid-table";
import TableView from "../components/table";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div class="p-2">
      <TableView data={data} columns={columns} />
    </div>
  );
}

type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  active: boolean;
};

const data: Product[] = [
  {
    id: "1",
    name: "Product 1",
    price: 10.99,
    stock: 100,
    category: "Category 1",
    active: true,
  },
  {
    id: "2",
    name: "Product 2",
    price: 20.99,
    stock: 50,
    category: "Category 2",
    active: false,
  },
  {
    id: "3",
    name: "Product 3",
    price: 15.99,
    stock: 75,
    category: "Category 1",
    active: true,
  },
];

const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "active",
    header: "#",
    cell: (info) => {
      return (
        <span class="px-1" style={{ "font-size": "0.6rem" }}>
          {info.getValue() ? "🟢" : "🔴"}
        </span>
      );
    },
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
];
