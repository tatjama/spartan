export const setStorage = data => localStorage.setItem('loginData', JSON.stringify({token: data}));
export const getStorage = () => JSON.parse(localStorage.getItem('loginData'));

export const createListOfPages = (pages) => Array.from( Array(pages),(e,i)=> i + 1)
export const createListOfPagesHuge = (pages, nextPage) => (Number(nextPage) <= 4) 
? [...Array.from( Array(5), (e,i)=> i + 1), "...", pages]
: (Number(nextPage) <= Number(pages) - 3) 
    ? [1, 2 ,"...",...Array.from( Array(3), (e,i)=> i + Number(nextPage) - 1), "....", pages]
    : [1, 2, "...", ...Array.from( Array(4), (e,i)=> Number(pages) - 3 + i )]
