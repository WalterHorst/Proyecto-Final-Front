const Pagination = (props) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li
          className={`page-item ${props.currentPage === 0 ? "disabled" : ""}`}
        >
          <button
            className="page-link"
            onClick={props.prevHandler}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li className="page-item">
          <span className="page-link">{props.currentPage + 1}</span>
        </li>
        <li
          className={`page-item ${
            props.items.length < props.itemsPerPage ? "disabled" : ""
          }`}
        >
          <button
            className="page-link "
            onClick={props.nextHandler}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  )
};

export default Pagination;