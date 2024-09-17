import { useState } from "react";
import fetchData from "./fetchData";

function App() {
  const [inputValue, setInputValue] = useState(null);
  // const apiKey = `10dce54d3ebb7918252869cf5ca2da5c`;

  const { data, error } = fetchData(
    `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=10dce54d3ebb7918252869cf5ca2da5c`
  );

  console.log(data);

  if (error) return <p>Hay Aksi bi hata oluştu yav</p>;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  // const items = Array.isArray(data) ? data : [];
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
          <div>
            <ul>
              {data && (
                <div
                  className="card"
                  key={data.id}
                  style={{
                    width: "250px",
                    height: "350px",
                  }}
                >
                  <div className="card-body">
                    <p className="card-text py-3">
                      Şehir: <strong>{data.name || "Bilinmiyor"}</strong>
                    </p>
                    <p className="card-text py-3">
                      Durum:
                      <strong>
                        {data.weather?.[0]?.description || "Bilinmiyor"}
                      </strong>
                    </p>
                    <p className="card-text py-3">
                      Açıklama
                      <strong>{data.sys?.country || "Bilinmiyor"}</strong>
                    </p>
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
