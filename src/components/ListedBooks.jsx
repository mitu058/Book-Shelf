import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList,getStoredWishList } from "./utilities/MarkAsRead";
import Book from "./Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([])
  const [sort,setSort] = useState('')
  const allBooks = useLoaderData();
  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    console.log(storedReadList, storedReadListInt, allBooks);
    const ReadBookList = allBooks.filter((book) =>
        storedReadListInt.includes(book.bookId)
    );

 setReadList(ReadBookList);
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    // console.log(storedReadList, storedReadListInt, allBooks);
    const addWishList = allBooks.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );
    setWishList(addWishList);
  }, []);

  const handelSort = sortType =>{
    setSort(sortType)
  if(sortType === 'Number of pages'){
    const sortedReadList = [...readList].sort((a,b) =>a.totalPages - b.totalPages)
    setReadList(sortedReadList)
  }
if(sortType === 'Ratings'){
    const sortedReadList = [...readList].sort((a,b)=>b.rating - a.rating)
    setReadList(sortedReadList)
}
// sorted wish list
  if(sortType === 'Number of pages'){
    const sortedWishList = [...wishList].sort((a,b) =>a.totalPages - b.totalPages)
    setWishList(sortedWishList)
  }
if(sortType === 'Ratings'){
    const sortedWishList = [...wishList].sort((a,b)=>b.rating - a.rating)
    setWishList(sortedWishList)
}
  }
 

  return (
    <div className="">
      
      <div className=" text-center">
      <h2 className="text-3xl my-4 font-bold bg-gray-100 p-4 rounded-xl">Books</h2>
      <div className="dropdown ">
       <div className=" ">
       <div tabIndex={0} role="button" className="btn text-base font-bold m-1 bg-[#23BE0A] text-white px-5">
         {
            sort ? `sort by : ${sort}`: 'sort by'
         }
        </div>
       </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={()=> handelSort('Ratings')}>
            <a>Ratings</a>
          </li>
          <li onClick={()=> handelSort('Number of pages')}>
            <a>Number Of Page</a>
          </li>
        </ul>
      </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-lg font-bold">Books I read: {readList.length}</h2>
       <div className="grid grid-cols-3 my-4">
      {readList.map((book) => (
            <Book key={book.bookid} book={book}></Book>
          ))}
       </div>
        </TabPanel>

        <TabPanel>
          <h2 className="text-lg font-bold">Added wishlist : {wishList.length}</h2>
          <div className="grid grid-cols-3">
       {wishList.map((book) => (
            <Book key={book.bookid} book={book}></Book>
          ))}
       </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
