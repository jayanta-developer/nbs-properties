import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

//images
import BgImg from "../../assets/Images/aboutBg.png";
import Arrow from "../../assets/Images/Arrow.png";
import bookingBaner from "../../assets/Images/bookingBaner.png";

//components
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { BlogCard } from "../../Components/Tools";

import { useDispatch, useSelector } from "react-redux";
import { FetchBlog } from "../../Store/BlogSlice";

export default function Blogs() {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.blog);
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  const Navigate = useNavigate();
  const ary = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  ///Table Pagination
  const itemsPerPage = 6; // Number of items per page
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderPaginationButtons = () => {
    const maxVisiblePages = 5;
    const pageButtons = [];

    // Add the first few pages or until the maxVisiblePages
    for (let i = 1; i <= Math.min(totalPages, maxVisiblePages); i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }

    // If more than maxVisiblePages, show "..." and the last page
    if (totalPages > maxVisiblePages) {
      pageButtons.push(<span key="dots">...</span>);
      pageButtons.push(
        <button
          key={totalPages}
          onClick={() => handlePageClick(totalPages)}
          className={currentPage === totalPages ? "active" : ""}
        >
          {totalPages}
        </button>
      );
    }
    return pageButtons;
  };



  useEffect(() => {
    dispatch(FetchBlog());
    if (data?.length < 0) {
      dispatch(FetchBlog());
    }
  }, []);

  return (
    <>
      <NavBar />
      <div className="blogPage">
        <div className="bgPanal">
          <img src={BgImg} />
          <p>Our Blog</p>
        </div>

        <div className="aboutMainSection">
          <p className="blogMainHeader">Our informative Blogs</p>
          <div className="blogCardBox">
            {currentData?.map((el, i) => (
              <BlogCard key={i} {...el} onClick={() => Navigate("/blog-details")} />
            ))}
          </div>
          <div className="pagination">
            <img
              style={{ rotate: "180deg" }}
              src={currentPage === 1 ? Arrow : Arrow}
              className={
                currentPage === 1
                  ? "paginationBtn paginationBtnDisable"
                  : "paginationBtn"
              }
              onClick={() => handlePageClick(currentPage - 1)}
            />
            {renderPaginationButtons()}
            <img
              style={{ rotate: "0deg" }}
              src={currentPage === totalPages ? Arrow : Arrow}
              className={
                currentPage === totalPages
                  ? "paginationBtn paginationBtnDisable"
                  : "paginationBtn"
              }
              onClick={() => handlePageClick(currentPage + 1)}
            />
          </div>

          <img src={bookingBaner} className="bookingBaner" />
        </div>
      </div>
      <Footer />
    </>
  );
}
