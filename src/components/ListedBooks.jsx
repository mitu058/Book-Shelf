import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "./utilities/MarkAsRead";
import Book from "./Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
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
  }
 

  return (
    <div>
      <h2 className="text-3xl my-8">Listed Books</h2>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
         {
            sort ? `sort by : ${sort}`: 'sort by'
         }
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

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2>Books I read: {readList.length}</h2>
          {readList.map((book) => (
            <Book key={book.bookid} book={book}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
