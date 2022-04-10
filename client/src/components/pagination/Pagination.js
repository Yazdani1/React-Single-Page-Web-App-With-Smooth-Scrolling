import React from 'react'
import ReactPaginate from "react-paginate";

const Pagination = ({pageCount,handlePageClick}) => {
    return (
        <div>
          <ReactPaginate
            breakLabel="..."
            breakClassName="break-class"
            nextLabel="Next"
            pageClassName={"pagination-design"}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            activeClassName={"pagination__link--active"}
            activeLinkClassName={"active-link-text"}
            pageCount={pageCount}
            disabledClassName={"pagination__link--disabled"}
            previousLabel="Previous"
            previousClassName={"previous-button"}
            nextClassName={"next-button"}
            pageRangeDisplayed={3}
            pageLinkClassName={"selected-page"}
          />
        </div>
      );
}

export default Pagination