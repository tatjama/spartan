//utils
import { createListOfPages, createListOfPagesHuge } from '../../utils/helper';
//styles
import { PaginationStyles } from './PaginationStyles';

const Pagination = ({ movies, handlePageClick, nextPage }) => {

    const p = movies?.Search?.length >0 ? Math.ceil(movies.totalResults / movies.Search.length): 1
    
    return(
        p < 2
        ? <p className="pagination-placeholder"></p>
        : <PaginationStyles>
            { p >= 10
            ? createListOfPagesHuge(p, nextPage).map(page =>
                <span 
                    className ={!nextPage? "page" : page.toString().includes(".") ? "page disable" : Number(nextPage) === page ? "page active": "page"} 
                    key = {page} 
                    id = {page} 
                    onClick={handlePageClick}>
                        {page}
                </span>)
            : createListOfPages(p).map(page => 
                 <span 
                    className ={ Number(nextPage) === page ? "page active": "page"} 
                    key = {page} 
                    id = {page} 
                    onClick={handlePageClick}>
                        {page}
                </span>)}
        </PaginationStyles>
    )
}

export default Pagination;