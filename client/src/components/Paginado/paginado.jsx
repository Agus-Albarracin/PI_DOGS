import React from "react";
import "./paginado.style.css"
import pageFirst from "../Paginado/imgpag/pageFirst.png"
import pagePrev from "../Paginado/imgpag/pagePrev.png"
import pageNext from "../Paginado/imgpag/pageNext.png"
import pageLast from "../Paginado/imgpag/pageLast.png"

function Pagination({ selecttotaldogs, totalDogs, navtotalDogs, page, currentPage, setCurrentPage }) {

  const totalPages = Math.ceil(totalDogs? totalDogs / page :  navtotalDogs ? navtotalDogs / page : selecttotaldogs / page);

  const pageNumbers = [];
  const maxPagesView = 5
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesView/2))
  let endPage = Math.min(totalPages, startPage + maxPagesView - 1)

  if(endPage - startPage + 1 < maxPagesView) startPage = Math.max(1, endPage - maxPagesView + 1)

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  
  // Specific page - Setea el estado a la pagina que le pasamos
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // Prev page
  const handlePrevPage = () => {
    if (currentPage > 1) pagination(currentPage - 1);
  };

  // Next page
  const handleNextPage = () => {
    if (currentPage < totalPages) pagination(currentPage + 1);
  };

  // First Page
  const handleFirstPage = () => {
    if(currentPage !== 1) pagination(1)
  }

  // Last Page
  const handleLastPage = () => {
    if(currentPage !== totalPages) pagination(totalPages)
  }


  return (
    <div className="paginationContainer">
    <div className="div_space"/>
          <button className="button_pag prev" onClick={handleFirstPage} disabled={currentPage === 1}>
            <img className="buttonpage" src={pageFirst} alt="First"/>
          </button>
        

        
          <button className="button_pag prev" onClick={handlePrevPage} disabled={currentPage === 1}>
            <img className="buttonpage" src={pagePrev} alt="Prev"/>
          </button>
        

        {pageNumbers?.map((page) => (
            <li className="lipage" key={page} >
            <button className={(page === currentPage ? "paginationBtnActive" : "paginationBtn")} onClick={() => pagination(page)}>
              {page}
            </button>
            </li>
        ))}

        
          <button className="button_pag next" onClick={handleNextPage} disabled={currentPage === totalPages}>
            <img className="buttonpage" src={pageNext} alt="Next"/>
          </button>
        

        
          <button className="button_pag next" onClick={handleLastPage} disabled={currentPage === totalPages}>
            <img className="buttonpage" src={pageLast} alt="Last"/>
          </button>
<div className="div_space"/>       
</div>
      
  );
}

export default Pagination;