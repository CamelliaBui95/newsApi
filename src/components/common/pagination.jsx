/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { paginate } from "../../utilities/paginate";

function Pagination({ currentPage, itemsCount, onPageChange, pageSize }) {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return;

  const pages = [];
  for (let i = 0; i < pagesCount; i++) pages[i] = i + 1;

  const disablePrevious = currentPage === 1 ? "disabled" : "";
  const disableNext =
    currentPage === Math.ceil(itemsCount / pageSize) ? "disabled" : "";

  return (
    <nav style={{ marginTop: "10px" }}>
      <ul className="pagination justify-content-center">
        <li className={"page-item " + disablePrevious}>
          <a
            onClick={() => onPageChange(currentPage - 1)}
            className="page-link"
            tabpage="-1"
          >
            Previous
          </a>
        </li>
        {pages.map((page) => {
          return (
            <li
              className={
                currentPage === page ? "page-item active" : "page-item"
              }
              key={page}
            >
              <a onClick={() => onPageChange(page)} className="page-link">
                {page}
              </a>
            </li>
          );
        })}

        <li className={"page-item " + disableNext}>
          <a
            onClick={() => onPageChange(currentPage + 1)}
            className="page-link"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
