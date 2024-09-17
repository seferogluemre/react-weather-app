import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [inputValue, setValue] = useState(null);

  const apiKey = "ca289ef8be4db0b41bda25fdcf4b6232";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const userFetchData = async () => {
      if (!url) return; // URL boşsa veri çekme

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const userData = await response.json();
        setData(userData);
      } catch (error) {
        setError(error.message);
      }
    };

    userFetchData();
  }, [url]); // URL değiştiğinde veri çek

  console.log(inputValue);

  return (
    <>
      <div className="title">
        <h1>Hava Durumu</h1>
      </div>

      <div className="form-section">
        <div className="form">
          <div>
            <label className="label" htmlFor="input">
              Şehir adı giriniz
            </label>
          </div>
          <div>
            <input
              placeholder="Şehrin Adını giriniz...."
              type="text"
              name="cityName"
              onChange={handleInputChange}
              value={inputValue}
              id="input"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
