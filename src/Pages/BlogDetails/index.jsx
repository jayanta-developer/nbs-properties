import React, { useState } from 'react';
import "./style.css";

//images
import blogDImgk from "../../assets/Images/blogDImg.png";
import BlogBanner from "../../assets/Images/BlogCoverPhoto.png"
import postImg from "../../assets/Images/blogImg1.png";
import postImg from "../../assets/Images/blogImg1.png";
import postImg from "../../assets/Images/blogImg1.png";

//components
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { BlackBtn, PropertiesSmallCard } from "../../Components/Tools"


//data
//data
import { PropertiesData } from "../../assets/Data";

export default function BlogDetails() {
  const [propertyData, setPropertyData] = useState(PropertiesData)



  return (
    <>
      <NavBar />
      <div className="blogDetailPage">
        <div className="MainBlogSection">
          <div className="blogLSection">
            <div className="blogImgBox">
              <img src={blogDImgk} />
            </div>

            <p className='blogDTitle'>Et quae dicta perferendis facere. A saepe a mollitia omnis at soluta ut. Eveniet veniam est at consequatur.</p>
            <p className='blogDSubTitle'>Sequi dolor aut adipisci Perferendis blanditiis pariatur incidunt modi eaque. Alias ab nisi fuga. Dolorum minus similique aut sit culpa. Qui quia et Optio facilis nulla quas doloribus. Est maiores rem dolores rerum. Molestias quaerat iusto molestiae Voluptas natus deserunt dolorem autem nam Excepturi id sint Ea sit et rerum optio natus Ea vero ut odio Sequi unde adipisci rem pariatur.</p>

            <p className='blogDTitle'>Et minima eligendi minima sint. Placeat enim saepe exercitationem ipsam</p>
            <p className="blogDSubTitle">Sequi dolor aut adipisci Perferendis blanditiis pariatur incidunt modi eaque. Alias ab nisi fuga. Dolorum minus similique aut sit culpa. Qui quia et Optio facilis nulla quas doloribus. Est maiores rem dolores rerum. Molestias quaerat iusto molestiae Voluptas natus deserunt dolorem autem nam Excepturi id sint Ea sit et rerum optio natus Ea vero ut odio Sequi unde adipisci rem pariatur quidem nostrum. Ipsa sed officia facilis Aspernatur nesciunt esse porro Sed in consequatur minus blanditiis natus. Dolorum provident laborum dolor cumque quia. Numquam rerum soluta eaque Voluptatem excepturi molestiae et eos quidem. Temporibus placeat unde dolor. Reiciendis magni corrupti expedita ut porro. quae sed consequatur similique.</p>

            <div className="noteBox">
              <p>Voluptate dolor vero facilis non voluptatum aperiam. Eum optio omnis voluptas eius. Consequatur aut ex id laudantium vel. Incidunt ut ut repellendus natus molestias. Autem a ipsa distinctio omnis aut rerum. Qui quia cumque consequatur ratione repellat.</p>
            </div>

            <p className='blogDTitle'>Dolore optio ipsa ab qui. Qui provident qui sapiente fugiat. Non sint culpa molestiae eveniet assumenda</p>


            <div className="liBox">
              <div className="liPoint">
                <div className="BDot"></div>
                <p>Asperiores nihil quia sit distinctio quisquam</p>
              </div>
              <div className="liPoint">
                <div className="BDot"></div>
                <p>Dolor ea quia</p>
              </div>
              <div className="liPoint">
                <div className="BDot"></div>
                <p>Blanditiis vel praesentium molestias quaerat</p>
              </div>
              <div className="liPoint">
                <div className="BDot"></div>
                <p>Nihil odio sit unde</p>
              </div>
              <div className="liPoint">
                <div className="BDot"></div>
                <p>Quia sit explicabo saepe fugit</p>
              </div>
              <div className="liPoint">
                <div className="BDot"></div>
                <p>Ut voluptate qui delectus itaque</p>
              </div>
              <div className="liPoint">
                <div className="BDot"></div>
                <p>Cupiditate soluta autem labore repellat eum</p>
              </div>
            </div>
          </div>
          <div className="blogRAdeSection">
            <div className="blogDTitle">Recent Posts</div>

          </div>
        </div>

        <div className="blogDMainBottomSection">
          <img src={BlogBanner} className='propertyCoverImg' />


          <div className="AbelPropt">
            <p className='SectionHeader'>Available Properties Near You</p>
            <p className='sectionSubText'>Industrial development is our main line of business. We do Factory Construction, Warehouse and others</p>
            <div className="propertieCardBox">
              {
                propertyData?.splice(0, 4).map((el, i) => (
                  <PropertiesSmallCard el={el} key={i} />
                ))
              }
            </div>
          </div>


        </div>
      </div>
      <Footer />
    </>
  )
}
