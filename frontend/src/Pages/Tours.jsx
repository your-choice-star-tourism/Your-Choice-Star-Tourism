import React, { useContext, useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { categories } from "../assets/data";
import { LuSettings2 } from "react-icons/lu";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Item";
import Footer from "../components/Footer";

const Tours = () => {
  const { books } = useContext(ShopContext);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [filterBooks, setFilterBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [visibleItems, setVisibleItems] = useState(25); // Number of initially visible items
  const itemsPerPage = 25; // Number of items to load on "Load More"

  const toggleFilter = (value, setState) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applyFilters = () => {
    let filtered = [...books];

    if (search) {
      filtered = filtered.filter((book) =>
        book.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length) {
      filtered = filtered.filter((book) => category.includes(book.category));
    }
    return filtered;
  };

  const applySorting = (bookList) => {
    switch (sortType) {
      case "low":
        return bookList.sort((a, b) => a.price - b.price);
      case "high":
        return bookList.sort((a, b) => b.price - a.price);
      default:
        return bookList; // default that is relevant
    }
  };

  useEffect(() => {
    let filtered = applyFilters();
    let sorted = applySorting(filtered);
    setFilterBooks(sorted);
    setVisibleItems(25); // Reset visible items when filters change
  }, [category, sortType, books, search]);

  // get tours to display
  const getVisibleBooks = () => filterBooks.slice(0, visibleItems);

  // Load more books
  const loadMoreBooks = () => setVisibleItems((prev) => prev + itemsPerPage);

  return (
    <section className="max-padd-container bg-white" id="tours">
      <div className="pt-40">
        {/* search box */}
        <div className="w-full max-w-2xl flexCenter">
          <div className="inline-flex items-center justify-center bg-primary overflow-hidden w-full rounded-full p-4 px-5">
            <div className="text-lg cursor-pointer">
              <RiSearch2Line />
            </div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value, setCategory)}
              type="text"
              placeholder="Search here..."
              className="border-none outline-none w-full text-sm pl-4 bg-primary"
            />
            <div className="flexCenter cursor-pointer text-lg border-l pl-2">
              <LuSettings2 />
            </div>
          </div>
        </div>

        {/* categories filter */}
        <div className="my-16 xxs:my-14 w-100">
          <h4 className="h4 mb-6 sm:flex">Categories:</h4>
          <div className="custom-scrollbar overflow-x-scroll w-auto">
            <div className="flex sm:flexStart flex-nowrap gap-x-6">
              {categories.map((cat) => (
                <label key={cat.name} className="shrink-0">
                  <div className="flexCenter flex-col gap-1 cursor-pointer">
                    <div
                      className="bg-primary h-10 flexCenter rounded-md mb-3 px-3 cursor-pointer"
                      onClick={() => toggleFilter(cat.name, setCategory)}
                    >
                      <label className="flex items-center w-full cursor-pointer">
                        <input
                          type="checkbox"
                          value={cat.name}
                          onChange={(e) =>
                            toggleFilter(e.target.value, setCategory)
                          }
                          className="w-4 h-4 mr-2 cat-check cursor-pointer"
                        />
                        <span className="medium-14 cat-check-name">
                          {cat.name}
                        </span>
                      </label>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* book container */}
        <div className="mt-24">
          {/* title and sort */}
          <div className="flexBetween !items-start gap-7 flex-wrap pb-16 max-sm:flexCenter text-center">
            <Title
              title1={"Our "}
              title2={"Services"}
              titleStyles={"pb-0 text-start"}
              para3Styles={"!block"}
            />
            <div className="flexCenter gap-x-2">
              <span className="hidden sm:flex medium-16">Sort by:</span>
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="text-sm p-2.5 outline-none bg-primary text-gray-30 rounded"
              >
                <option value="relevant">Relevant</option>
                <option value="low">Low Price</option>
                <option value="high">High Price</option>
              </select>
            </div>
          </div>
          {/* tours */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {getVisibleBooks().length > 0 ? (
              getVisibleBooks().map((book) => (
                <Item book={book} key={book._id} />
              ))
            ) : (
              <p>No Tours found for selected filters</p>
            )}
          </div>
        </div>

        {/* Load More Button */}
        {visibleItems < filterBooks.length && (
          <div className="flexCenter mt-14 mb-10">
            <button
              onClick={loadMoreBooks}
              className="flex gap-2 items-center text-white px-6 py-2 rounded-md item-detail-btn"
            >
              Load More
            </button>
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Tours;
