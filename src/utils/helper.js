
/*=============================================
=            Pagination for search            =
=============================================*/

export const createListOfPages = (pages) => Array.from( Array(pages),(e,i)=> i + 1)
export const createListOfPagesHuge = (pages, nextPage) => (Number(nextPage) <= 4) 
? [...Array.from( Array(5), (e,i)=> i + 1), "...", pages]
: (Number(nextPage) <= Number(pages) - 3) 
    ? [1, 2 ,"...",...Array.from( Array(3), (e,i)=> i + Number(nextPage) - 1), "....", pages]
    : [1, 2, "...", ...Array.from( Array(4), (e,i)=> Number(pages) - 3 + i )];



/*=====  End of Pagination for search  ======*/


/*=============================================
=            Algorithm result function            =
=============================================*/

export const algorithmResult  = (arr) => {
    const dic = {};
    
    arr.forEach(el => {
        const [key, value] = el.split(":");
        dic[key] = dic[key] ? dic[key] + parseInt(value) : parseInt(value);
    })
    return Object.keys(dic).map(el => el + "=" + dic[el]).sort().join(', ');
            
}

/*=====  End of Algorithm result function  ======*/
