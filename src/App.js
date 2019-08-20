import React, { useState } from "react";
import "./App.css";

const data = [
  {},
  {
    image: "show some image of evaporation"
  },
  {
    title: "evaporation",
    content:
      "when the sun evaporates a liquid,it is the proccess of tearning a liquid into vapour.The vapuor stays in the atmosphear untill the vapuor cools down,and condenses into a cloud.",
    top: "20vh",
    left: "30vw"
  },
  {
    image: "show some image of evaporation"
  },
  {
    title: "condensation",
    content:
      "when humid air comes in contact with a cold surfus,or cold air,it becomes little droplets of water.Sometimes the droplets of water condence into cloud, this is called condensation.Often when you use hot water the steam that comes off the water,can fog up a window or room ",
    top: "20vh",
    left: "30vw"
  },
  {
    image: "show some image of evaporation"
  },
  {
    title: "runoff",
    content:
      "A runoff is a small river or chanle of water that usualy appears when it rains alot.A runoff runs to the sea or alarge body of water such as a lake.Sometimes runoffs appear it is because the earth cant take enymore water.But sometimes runoffs are more perminant.",
    top: "20vh",
    left: "30vw"
  },
  {
    image: "show some image of evaporation"
  },
  {
    title: "Precipitation",
    content:
      "precipatation,is when the vapor in the sky condenses so much " +
      "it becomes hevy enogh it fall. This often is in the form of rain, " +
      "snow, hail or sleet.",
    top: "20vh",
    left: "30vw"
  },
  {
    title: "Ground water",
    content:
      "ounce it rains water soaks into the ground ,this is ground water." +
      "Under the earth, there are lakes and rivers, that store water for meany years," +
      "untill thay resurfus. Small rocks and pebbles help form the pools underground," +
      "these pools are called aquifers.",
    top: "20vh",
    left: "30vw"
  },
  {
    image: "show some image of evaporation"
  },
  {
    title: "Respiration",
    content:
      "Respiration is when a livng being  such as a plant,an animal or a person," +
      "ctombind oxegen and glucose to make carbon dioxide, water and heatenergy.",
    top: "20vh",
    left: "30vw"
  },
  {
    image: ""
  }
];

const Card = ({ title, content, top, left }) => (
  <div className="card" style={{ width: "18rem", top, left }}>
    {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{content}</p>
      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    </div>
  </div>
);

const Sky = ({ clouds }) => (
  <div className="sky">
    <div className="rail-1">
      <img
        src="/cloud_1.png"
        className={`cloud ${clouds[1] && "App-cloud-1"}`}
        alt="logo"
      />
    </div>
    <div className="rail-2">
      <img
        src="/cloud_2.png"
        className={`cloud ${clouds[2] && "App-cloud-2"}`}
        alt="logo"
      />
    </div>
    <div className="rail-3">
      <img
        src="/cloud_3.png"
        className={`cloud ${clouds[3] && "App-cloud-3"}`}
        alt="logo"
      />
    </div>
  </div>
);

function App() {
  const [clouds] = useState({ 1: true, 2: true, 3: true });
  const [index, setIndex] = useState(0);

  const handleKeyPress = event => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      let localIndex = index;
      if (event.key === "ArrowRight") {
        localIndex = index + 1;
        if (data.length <= localIndex) {
          localIndex = 0;
        }
      }
      if (event.key === "ArrowLeft") {
        localIndex = index - 1;
        if (localIndex < 0) {
          localIndex = 0;
        }
      }
      setIndex(localIndex);
    }
  };

  return (
    <div
      className="App w-100 h-100 mx-auto"
      onKeyDown={handleKeyPress}
      autoFocus
      tabIndex="0"
    >
      <Sky clouds={clouds} />
      <div>
        <div>{index}</div>
        {data[index].title ? <Card {...data[index]} /> : <div />}
      </div>
    </div>
  );
}

export default App;
