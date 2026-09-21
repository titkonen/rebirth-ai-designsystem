import { useState, type ButtonHTMLAttributes, type HTMLAttributes } from "react";

export interface PaginationProps extends HTMLAttributes<HTMLElement> {
  totalPages: number;
  page?: number;
  defaultPage?: number;
  onPageChange?: (page: number) => void;
}

interface PaginationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  page: number;
  selected?: boolean;
  onPageSelect: (page: number) => void;
}

function PaginationButton({ page, selected = false, onPageSelect, ...props }: PaginationButtonProps) {
  return <button className={`rb-pagination__item${selected ? " rb-pagination__item--active" : ""}`} type="button" aria-current={selected ? "page" : undefined} aria-label={`Go to page ${page}`} onClick={() => onPageSelect(page)} {...props}>{page}</button>;
}

export function Pagination({ totalPages, page, defaultPage = 1, onPageChange, ...props }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(page ?? defaultPage);
  const selectedPage = page ?? currentPage;
  const boundedPage = Math.min(totalPages, Math.max(1, selectedPage));

  const selectPage = (nextPage: number) => {
    const nextSelectedPage = Math.min(totalPages, Math.max(1, nextPage));
    if (page === undefined) setCurrentPage(nextSelectedPage);
    onPageChange?.(nextSelectedPage);
  };

  return <nav className="rb-pagination" aria-label="Pagination" {...props}>
    <button className="rb-pagination__control" type="button" aria-label="Previous page" onClick={() => selectPage(boundedPage - 1)} disabled={boundedPage === 1}>&larr;</button>
    {Array.from({ length: totalPages }, (_, index) => {
      const pageNumber = index + 1;
      return <PaginationButton key={pageNumber} page={pageNumber} selected={pageNumber === boundedPage} onPageSelect={selectPage} />;
    })}
    <button className="rb-pagination__control" type="button" aria-label="Next page" onClick={() => selectPage(boundedPage + 1)} disabled={boundedPage === totalPages}>&rarr;</button>
  </nav>;
}
