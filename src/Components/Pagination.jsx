import React from "react";
import { Pagination } from "react-bootstrap";

export const PaginationComponent = ({
  totalItems,
  itemsPerPage,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [
    ...Array(Math.ceil(totalItems / itemsPerPage)).keys(),
  ].map((number) => number + 1);

  return (
    <Pagination className="d-flex justify-content-center">
      {pageNumbers.map((number) => (
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => paginate(number)}
        >
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};
