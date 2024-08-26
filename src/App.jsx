import { useEffect, useState } from "react";
import banner1 from "./Banners/banner1.jpg";
import banner2 from "./Banners/banner2.jpg";
import banner3 from "./Banners/banner3.jpg";
import banner4 from "./Banners/banner4.jpg";
import banner5 from "./Banners/banner5.jpg";
import axios from "axios";
import "./App.css";

function App() {
  const [authorQuotes, setAuthorQuotes] = useState([]);
  const [quotesId, setQuotesId] = useState(1);
  const [language, setLanguage] = useState("En");
  const [quotesBanner, setQuotesBanner] = useState();
  const banners = [banner1, banner2, banner3, banner4, banner5];
  const [quotesTextColor, setQuotesTextColor] = useState("black");

  //! JSON Server'dan verileri çekip, bunları bileşenimizde işlediğimiz yer.
  useEffect(() => {
    async function fetchQuotes() {
      try {
        const response = await axios.get(
          `http://localhost:3000/quotes${language}?id=${quotesId}`
        );
        setAuthorQuotes(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    quotesTextColorFunc();
    setQuotesBanner(banners[quotesId - 1]);
    fetchQuotes();
  }, [quotesId, language]);

  //! Fonksiyon isminden de anlaşılcağı gibi, oluşturduğumuz random id'nin karşılığına göre bir alıntı görüntülüyoruz.
  let randomIdForQuotesFunc = () => {
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    setQuotesId(randomNumber);
  };

  //! Bazen beyaz bir arka planda alıntıları görüntülemek zorunda kalabiliyoruz, bu da yazının okunabilirliğini azaltıyor. Bu fonksiyon, bu durumu düzeltmeme yardımcı oluyor.
  let quotesTextColorFunc = () => {
    if (quotesId == 1) {
      setQuotesTextColor("white");
    } else {
      setQuotesTextColor("black");
    }
  };

  return (
    <div className="container">
      <div className="languageChangeSection">
        <label onClick={() => setLanguage("En")}>En </label>/
        <label onClick={() => setLanguage("Tr")}> Tr</label>
      </div>
      <span style={{ color: "gray", fontSize: "10px" }}>
        "Yazıları değiştirmek istediğin dilin üzerine bas"
      </span>

      <div className="quoteSection">
        <div
          className="quote"
          style={{
            backgroundImage: `url(${quotesBanner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: `${quotesTextColor}`,
          }}
        >
              {authorQuotes.length > 0 ? (
                <div>
                  {authorQuotes.map((quote) => (
                    <div key={quote.id}>
                      {quote.author}; {quote.text}
                    </div>
                  ))}
                </div>
              ) : (
                <div>Sonuç bulunamadı..</div>
              )}
        </div>
      </div>

      <div className="choiceSection">
        <div className="multipleChoiceSection">
          <label>
            Pick a Author:
            <select
              name="selectedAuthor"
              style={{ marginLeft: "20px" }}
              onChange={(e) => setQuotesId(e.target.value)}
            >
              <option value="1">Albert Einstein</option>
              <option value="2">Mahatma Gandhi</option>
              <option value="3">Friedrich Nietzsche</option>
              <option value="4">Elie Wiesel</option>
              <option value="5">Nicolas Chamfort</option>
            </select>
          </label>
        </div>

        <div className="randomButtonSection">
          <button onClick={randomIdForQuotesFunc}>Random</button>
        </div>
      </div>
    </div>
  );
}

export default App;
