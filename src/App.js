import { useState, useEffect, useContext } from "react";
import { ThemeContext, ThemeContextUpdater } from "./Themecontext";
function App(props) {
  const [tran, settran] = useState();
  const [source, setSource] = useState();
  const [target, setTarget] = useState();
  const [activeLanguage, setActiveLanguage] = useState("");
  const [translation, setTranslation] = useState();

  const theme = useContext(ThemeContext);
  const themeUpdater = useContext(ThemeContextUpdater);

  // let values = tran.matches[0].target;
  const handleSource = (langValue) => {
    if (langValue === "eng") {
      themeUpdater("red");
      setSource("en-GB");
      {
        document.getElementById("eng").style.backgroundColor = "red";
      }
      console.log("english");
    } else if (langValue === "fre") {
      themeUpdater("blue");

      setSource("fr-FR");
      console.log("french");
    }
  };
  const handleTarget = (Value) => {
    if (Value === "eng") {
      setTarget("en-GB");

      console.log("english");
    } else if (Value === "fre") {
      setTarget("fr-FR");
      console.log("french");
    }
  };
  const translate = () => {
    if (target === "fr-FR" && source === "en-GB") {
      setTranslation();
      console.log("source is english");
    } else if (target === "en-GB" && source === "fr-FR") {
      console.log("source is french");
    }
  };
  useEffect(() => {
    fetch(
      "https://api.mymemory.translated.net/get?q=Hello,%20how%20are%20you?!&langpair=en|fr"
    )
      .then((response) => response.json())
      .then((data) => {
        settran(data);
        console.log(tran);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(theme);
  return (
    <div className="flex justify-center">
      <div className="bg-red-800 w-[40%] mx-auto rounded-xl">
        <div className="flex text-white justify-between ">
          <button>Detect lang</button>
          <div id="eng" className="bg-blue-400 rounded w-[60px] text-center">
            <button value="eng" onClick={() => handleSource("eng")}>
              English
            </button>
          </div>
          <div id="eng" className="bg-blue-400 rounded w-[60px] text-center">
            <button value="fre" onClick={() => handleSource("fre")}>
              French
            </button>
          </div>
          <button value="spa">Spanish</button>
        </div>
        <hr></hr>
        <form>
          <textarea className="w-[60%] "></textarea>
        </form>
        <div>
          <button>bl</button>

          <button className="" onClick={translate}>
            Translate
          </button>
        </div>
      </div>
      <div className="bg-red-800 w-[40%] mx-auto bg-gradient-to-l from-cyan-500 to-blue-500 rounded-xl">
        <div className="flex text-white justify-between">
          <button>Detect lang</button>
          <button value="eng" onClick={() => handleTarget("eng")}>
            English
          </button>
          <button value="fre" onClick={() => handleTarget("fre")}>
            French
          </button>
          <button value="spa">Spanish</button>
        </div>
        <hr></hr>
        <form>
          <textarea className="w-[60%] "></textarea>
        </form>
        <div>
          <button className="w-[30px] h-[30px] bg-red-300 border-solid border-slate-500">
            <i className="bi bi-copy"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
