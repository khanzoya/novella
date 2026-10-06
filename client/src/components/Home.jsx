import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeBookCards from "./HomeBookCards";
import "../css/homepage.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [genre, setGenre] = useState("Nonfiction");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/book/bookCollection")
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //
  useEffect(() => {
    if (books.length > 0) {
      const filtered = books.filter((book) => book.genre_br === genre);
      setFilteredBooks(filtered);
    }
  }, [books, genre]);
  //
  const handleGenreChange = (event) => {
    setGenre(event.target.checked ? "Fiction" : "Nonfiction");
  };

  //search handle
  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);

    // Filter books based on the search value
    const filtered = books.filter((book) =>
      book.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  //

  //
  return (
    <div className='container-fluid m-5 p-2 rounded mx-auto bg-light shadow'>
      <Helmet>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        />
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We'
          crossorigin='anonymous'
        />
      </Helmet>

      <div className='bg' id='home'>
        <div className='srchsec'>
          <form action=''>
            <input
              id='searchbar'
              type='text'
              name='search'
              placeholder='search books..'
              value={searchValue}
              onChange={handleSearchChange}
            />
            <i className='fa fa-search' id='searchicon'></i>
          </form>
          {suggestions.length > 0 && (
            <ul>
              {suggestions.map((book) => (
                <li key={book._id}>
                  <Link to={`/book/${book._id}`}>{book.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className='container'>
        <blockquote style={{ fontSize: "2vw", textAlign: "center" }}>
          "Old Books are best------how Tale and rhyme
          <br />
          Float with us down the stream of time!"
          <br />
          --Clarency Urmy,<cite>Old songs are best</cite>
        </blockquote>
        <label className='switch'>
          <input type='checkbox' onChange={handleGenreChange} />
          <span className='slider round'>
            {genre === "Fiction" ? "Fiction" : "Non-Fiction"}
          </span>
        </label>

        {genre === "Fiction" ? (
          <Fiction books={books} genre={genre} />
        ) : (
          <NonFiction books={books} genre={genre} />
        )}

        <footer>
          Last updated: April 9th, 2023
          <br />
          webmaster: Team Novella
          <div id='footer'>&copy; copyright 2023 Novella</div>
        </footer>
      </div>
    </div>
  );
};

const NonFiction = ({ books, genre }) => {
  const filteredBooks = books
    ? books.filter((book) =>
        [
          "self-help",
          "autobiographies",
          "true-crime",
          "sports",
          "biographies",
        ].includes(book.genre_nr)
      )
    : [];

  return (
    <div id='NonFiction'>
      {" "}
      {/*style={{ display: genre === "non-fiction" ? "block" : "none" }}*/}
      {/* Fiction books content */}
      <h1>Non-Fiction Books</h1>
      <div className='accordion' id='non_fic_genre_card'>
        <div className='nfic_box'>
          <a href='#Self-help'>
            <h4>Self-help</h4>
          </a>
        </div>
        <div className='nfic_box'>
          <a href='#Autobiographies'>
            <h4>Autobiographies</h4>
          </a>
        </div>
        <div className='nfic_box'>
          <a href='#True-Crime'>
            <h4>True-Crime</h4>
          </a>
        </div>
        <div className='nfic_box'>
          <a href='#Sports'>
            <h4>Sports</h4>
          </a>
        </div>
        <div className='nfic_box'>
          <a href='#Biographies'>
            <h4>Biographies</h4>
          </a>
        </div>
      </div>
      {/* <!-- SELF-HELP --> */}
      <div
        className='container-fluid m-3 p-2 rounded mx-auto bg-light shadow'
        id='Self-help'
      >
        <h1>Self-help</h1>
        <h4>
          <a href='#non_fic_genre_card'>Genre Options</a>
        </h4>
        {filteredBooks.map(
          (book) =>
            book.genre_nr === "self-help" && (
              <HomeBookCards key={book._id} book={book} />
            )
        )}
      </div>
      {/* <!--AUTOBIOGRAPHIES  --> */}
      <div
        className='container-fluid m-3 p-2 rounded mx-auto bg-light shadow'
        id='Autobiographies'
      >
        <h1>Autobiographies</h1>
        <h4>
          <a href='#non_fic_genre_card'>Genre Options</a>
        </h4>
        {filteredBooks.map(
          (book) =>
            book.genre_nr === "autobiographies" && (
              <HomeBookCards key={book._id} book={book} />
            )
        )}
      </div>
      {/* <!-- TRUE CRIME --> */}
      <div
        className='container-fluid m-3 p-2 rounded mx-auto bg-light shadow'
        id='True-Crime'
      >
        <h1>True-crime</h1>
        <h4>
          <a href='#non_fic_genre_card'>Genre Options</a>
        </h4>
        {filteredBooks.map(
          (book) =>
            book.genre_nr === "true-crime" && (
              <HomeBookCards key={book._id} book={book} />
            )
        )}
      </div>
      {/* SPORTS */}
      <div
        className='container-fluid m-3 p-2 rounded mx-auto bg-light shadow'
        id='Sports'
      >
        <h1>Sports</h1>
        <h4>
          <a href='#non_fic_genre_card'>Genre Options</a>
        </h4>
        {filteredBooks.map(
          (book) =>
            book.genre_nr === "sports" && (
              <HomeBookCards key={book._id} book={book} />
            )
        )}
      </div>
      {/* BIOGRAPHIES */}
      <div
        className='container-fluid m-3 p-2 rounded mx-auto bg-light shadow'
        id='Biographies'
      >
        <h1>Biographies</h1>
        <h4>
          <a href='#non_fic_genre_card'>Genre Options</a>
        </h4>
        {filteredBooks.map(
          (book) =>
            book.genre_nr === "biographies" && (
              <HomeBookCards key={book._id} book={book} />
            )
        )}
      </div>
    </div>
  );
};

const Fiction = ({ books, genre }) => {
  const filteredBooks = books
    ? books.filter((book) =>
        [
          "fantasy",
          "young-love",
          "classic",
          "mystery-suspense",
          "horror",
        ].includes(book.genre_nr)
      )
    : [];

  return (
    <div id='Fiction'>
      <h1>Fiction Books</h1>

      <div className='fiction' id='Fiction'>
        <div className='accordion' id='fic_genre_card'>
          <div className='box'>
            <a href='#fantasy'>
              <h4>Fantasy</h4>
            </a>
          </div>
          <div className='box'>
            <a href='#young_romance'>
              <h4>Young-love</h4>
            </a>
          </div>
          <div className='box'>
            <a href='#classic'>
              <h4>Classic</h4>
            </a>
          </div>
          <div className='box'>
            <a href='#crime_and_thriller'>
              <h4>Mystery-suspense</h4>
            </a>
          </div>
          <div className='box'>
            <a href='#horror'>
              <h4>Horror</h4>
            </a>
          </div>
        </div>

        <div
          className='container-fluid m-2 p-3 rounded mx-auto bg-light shadow'
          id='fantasy'
        >
          <h1>FANTASY</h1>
          <h4>
            <a href='#fic_genre_card'>Genre Options</a>
          </h4>
          {filteredBooks.map(
            (book) =>
              book.genre_nr === "fantasy" && (
                <HomeBookCards key={book._id} book={book} />
              )
          )}
          {/* Fantasy books content */}
        </div>

        <div
          className='container-fluid m-3 p-3 rounded mx-auto bg-light shadow'
          id='young_romance'
        >
          <h1>YOUNG LOVE</h1>
          <h4>
            <a href='#fic_genre_card'>Genre Options</a>
          </h4>
          {filteredBooks.map(
            (book) =>
              book.genre_nr === "young-love" && (
                <HomeBookCards key={book._id} book={book} />
              )
          )}
          {/* Young love books content */}
        </div>

        <div
          className='container-fluid m-3 p-5 rounded mx-auto bg-light shadow'
          id='classic'
        >
          <h1>CLASSIC</h1>
          <h4>
            <a href='#fic_genre_card'>Genre Options</a>
          </h4>
          {filteredBooks.map(
            (book) =>
              book.genre_nr === "classic" && (
                <HomeBookCards key={book._id} book={book} />
              )
          )}
          {/* Classic books content */}
        </div>

        <div
          className='container-fluid m-3 p-5 rounded mx-auto bg-light shadow'
          id='crime_and_thriller'
        >
          <h1>MYSTERY & SUSPENSE</h1>
          <h4>
            <a href='#fic_genre_card'>Genre Options</a>
          </h4>
          {filteredBooks.map(
            (book) =>
              book.genre_nr === "mystery-suspense" && (
                <HomeBookCards key={book._id} book={book} />
              )
          )}
          {/* Mystery & suspense books content */}
        </div>

        <div
          className='container-fluid m-3 p-5 rounded mx-auto bg-light shadow'
          id='horror'
        >
          <h1>HORROR</h1>
          <h4>
            <a href='#fic_genre_card'>Genre Options</a>
          </h4>
          {/* Horror books content */}
          {filteredBooks.map(
            (book) =>
              book.genre_nr === "horror" && (
                <HomeBookCards key={book._id} book={book} />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <span className="book_cover"><a href="FICTION_PDF/WFTS_PD.pdf" target="_blank"><img src="FIC_IMG/FANTASY_IMG/We_Free_the_Stars_CP.webp"/></a></span>
          <span className="book_cover"><a href="FICTION_PDF/WHTF_PD.pdf" target="_blank"><img src="FIC_IMG/FANTASY_IMG/WHTF_CP.jpg"/></a></span>
          <span className="book_cover"><a href="FICTION_PDF/ACORAT_PD.pdf" target="_blank"><img src="FIC_IMG/FANTASY_IMG/ACORAT.jpg"/></a></span>
        <span className="book_cover"><a href="FICTION_PDF/ACOAF_PD.pdf" target="_blank"><img src="FIC_IMG/FANTASY_IMG/ACOMAF.jpg"/></a></span>
        <span className="book_cover"><a href="FICTION_PDF/ACOWAR_PD.pdf" target="_blank"><img src="FIC_IMG/FANTASY_IMG/ACOWAR.jpg"/></a></span>
        <span className="book_cover"><a href="FICTION_PDF/ACOFAS_PD.pdf" target="_blank"><img src="FIC_IMG/FANTASY_IMG/ACOFAS.webp"/></a></span>
        <span className="book_cover"><a href="FICTION_PDF/F_SHATTERME_PDF.pdf" target="_blank"><img src="FIC_IMG/FANTASY_IMG/F_SHATTERME.jpg"/></a></span>
        <span className="book_cover"><a href="FICTION_PDF/F_DESTROYME_PDF.pdf" target="_blank"><img src="FIC_IMG/FANTASY_IMG/F_DESTROYME.jpg"/></a></span>
        <span className="book_cover"><a href="FICTION_PDF/F_UNRAVELME_PDF.pdf" target="_blank"><img src="FIC_IMG/FANTASY_IMG/F_UNRAVELME.jpg"/></a></span>
        <span className="book_cover"><a href="FICTION_PDF/F_FRACTUREME_PDF.pdf" target="_blank"><img src="FIC_IMG/FANTASY_IMG/F_FTRACTUREME.jpg"/></a></span>
        <span className="book_cover"><a href="FICTION_PDF/F_IGNITEME_PDF.pdf" target="_blank"><img src="FIC_IMG/FANTASY_IMG/F_IGNITEME.jpg"/></a></span>
        <span className="book_cover"><a href="FICTION_PDF/F_RESTOREME_PDF.pdf" target="_blank"><img src="FIC_IMG/FANTASY_IMG/F_RESTOREME.jpg"/></a></span>
        <span className="book_cover"><a href="FICTION_PDF/F_SHADOWME_PDF.pdf" target="_blank"><img src="FIC_IMG/FANTASY_IMG/F_SHADOWME.jpg"/></a></span>
        <span className="book_cover"><a href="FICTION_PDF/F_DEFYME_PDF.pdf" target="_blank"><img src="FIC_IMG/FANTASY_IMG/F_DEFYME.jpg"/></a></span>
        <span className="book_cover"><a href="FICTION_PDF/F_REVEALME_PDF.pdf" target="_blank"><img src="FIC_IMG/FANTASY_IMG/F_REVEALME.jpg"/></a></span>
        <span className="book_cover"><a href="FICTION_PDF/F_IMAGINEME_PDF.pdf" target="_blank"><img src="FIC_IMG/FANTASY_IMG/F_IMAGINEME.png"/></a></span>
        */
}

{
  /* <span className="book_cover"><a href="FICTION_PDF/IEWU_PD.pdf" target="_blank"><img src="FIC_IMG/YOUNG_LOVE/IEWU_CP.jpg"/></a></span>
        <span className="book_cover"><a href="FICTION_PDF/ISWU_PD.pdf" target="_blank"><img src="FIC_IMG/YOUNG_LOVE/ISWU_CP.jpg" /></a></span>
        <span className="book_cover"><a href="FICTION_PDF/R_TAR_PD.pdf" target="_blank"><img src="FIC_IMG/YOUNG_LOVE/R_TAR_CP.jpg"/></a></span>
        <span className="book_cover"><a href="FICTION_PDF/R_TNF_PD.pdf" target="_blank"><img src="FIC_IMG/YOUNG_LOVE/R_TNF_CP.jpg"/></a></span>
        <span className="book_cover"><a href="FICTION_PDF/CYKAS_PD.pdf" target="_blank"><img src="FIC_IMG/YOUNG_LOVE/CYKAS_CP.jpg"/></a></span>
        <span className="book_cover"><a href="FICTION_PDF/R_BL_PD.pdf" target="_blank"><img src="FIC_IMG/YOUNG_LOVE/R_BL_CP.jpg"/></a></span>
        <span className="book_cover"><a href="FICTION_PDF/R_THG_PD.pdf" target="_blank"><img src="FIC_IMG/YOUNG_LOVE/RC_THG_CP.jpg"/></a></span>
        <span className="book_cover"><a href="FICTION_PDF/R_FNOL_PD.pdf" target="_blank"><img src="FIC_IMG/YOUNG_LOVE/R_FNOL_CP.jpg"/></a></span>
        <span className="book_cover"><a href="FICTION_PDF/TLH_PD.pdf" target="_blank"><img src="FIC_IMG/YOUNG_LOVE/R_TLH_CP.jpg"/></a></span>
        */
}

{
  /* <span className="book_cover"><a href="FICTION_PDF/TM_PD.pdf" target="_blank"><img src="FIC_IMG/MYSTERY/TM_CP.jpg"/> </a></span>
          <span className="book_cover"><a href="FICTION_PDF/A Prisoner of Birth.pdf" target="_blank"><img src="FIC_IMG/MYSTERY/POB.jpg"/></a></span>  
          <span className="book_cover"><a href="FICTION_PDF/S_TSP_PD.pdf" target="_blank"><img src="FIC_IMG/MYSTERY/S_TSP_CP.jpg"/></a></span>
          <span className="book_cover"><a href="FICTION_PDF/S_TFU_PD.pdf" target="_blank"><img src="FIC_IMG/MYSTERY/S_TFU_CP.jpg"/></a></span>
    */
}
{
  /* <span className="book_cover"><a href="FICTION_PDF/H_EVYB_PD.pdf" target="_blank"><img src="FIC_IMG/HORROR_IMG/H_EVYB_CP.jpg"/></a></span>
          <span className="book_cover"><a href="FICTION_PDF/H_FG_PD.pdf" target="_blank"><img src="FIC_IMG/HORROR_IMG/H_FG_CP.jpg" /></a></span>
          <span className="book_cover"><a href="FICTION_PDF/H_HBD_PD.pdf" target="_blank"><img src="FIC_IMG/HORROR_IMG/H_HBD_CP.jpg"/></a></span>
          <span className="book_cover"><a href="FICTION_PDF/H_NE_PD.pdf" target="_blank"><img src="FIC_IMG/HORROR_IMG/H_NE_CP.jpg" /></a></span>
          <span className="book_cover"><a href="FICTION_PDF/H_TNH_PD.pdf" target="_blank"><img src="FIC_IMG/HORROR_IMG/H_TNH_CP.webp" /></a></span>
          <span className="book_cover"><a href="FICTION_PDF/H_TOTK_PD.pdf" target="_blank"><img src="FIC_IMG/HORROR_IMG/H_TOTK_CP.webp" /></a></span>
          <span className="book_cover"><a href="FICTION_PDF/H_EVYB_PD.pdf" target="_blank"><img src="FIC_IMG/HORROR_IMG/H_EVYB_CP.jpg" /></a></span>
          <span className="book_cover"><a href="FICTION_PDF/H_TPC_PD.pdf" target="_blank"><img src="FIC_IMG/HORROR_IMG/H_TPC_CP.webp" /></a></span>
         */
}
{
  /* <span className="book_cover"><a href="FICTION_PDF/C_JE_PD.pdf" target="_blank"><img src="FIC_IMG/CLASSIC/C_JE_CP.jpg"/></a></span>
          <span className="book_cover"><a href="FICTION_PDF/TKR_PD.pdf" target="_blank"><img src="FIC_IMG//CLASSIC/TKR_CP.jpg"/></a></span>
          <span className="book_cover"><a href="FICTION_PDF/C_LW_PD.pdf" target="_blank"><img src="FIC_IMG/CLASSIC/C_LW_CP.jpg"/></a></span>
          <span className="book_cover"><a href="FICTION_PDF/C_PAP_PD.pdf" target="_blank"><img src="FIC_IMG/CLASSIC/C_PAP_CP.jpg"/></a></span>
           */
}
