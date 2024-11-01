import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDB";
import Book from "../Book/Book";

const ListedBook = () => {
    const [readBook, setReadBook] = useState([]);
    const allBooks = useLoaderData();

    useEffect(()=>{
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadBook(readBookList)
    },[])
  return (
    <div className="my-16">
      <h1 className="font-bold text-xl my-8">Listed Book</h1>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I Read: {readBook.length}</h2>
          <div className="grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-5">
            {
                readBook.map(book => <Book key={book.bookId} book={book}></Book>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My WishList</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
