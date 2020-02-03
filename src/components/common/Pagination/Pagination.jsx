import React, {useState} from 'react';
import "./Pagination.css";

let Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for(let i=1;i<=pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <>
            <div className="pagination-holder flex-center-x flex-center-y">
                { portionNumber > 1 &&
                <button className={"pagination-prev pagination-btn"} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }
                <ul className="pagination">
                    {pages
                        .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                        .map((p) => {
                            return <li className={parseInt(currentPage) === parseInt(p) ? "selected" : ""} key={p} onClick={(e) => {onPageChanged(p)}}>{p}</li>
                        })}
                </ul>
                { portionCount > portionNumber &&
                <button className={"pagination-next pagination-btn"} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
            </div>
        </>
    )
}
export default Pagination;