import React from "react";
import {Pagination} from "@nextui-org/react";

export default function PaginationControl() {
  return (
    <Pagination showShadow color="warning" total={10} initialPage={1} />
  );
}