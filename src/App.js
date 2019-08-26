import React, { useState } from "react";
import "./App.css";

const Evapo = () => (
  <div style={{ position: "absolute", top: "63vh", left: "68vw" }}>
    {[...Array(20).keys()].map(() => 
      <img alt="evaporation ray" src="/evapo.png" style={{ width: "30px" }} />
    )}
  </div>
);

const Clouds = () => (
  <div className="sky">
    <div className="rail-1">
      <img src="/cloud_1.png" className="cloud App-cloud-1" alt="cloud 1" />
    </div>
    <div className="rail-2">
      <img src="/cloud_2.png" className="cloud App-cloud-2" alt="cloud 2" />
    </div>
    <div className="rail-3">
      <img src="/cloud_3.png" className="cloud App-cloud-3" alt="cloud 3" />
    </div>
  </div>
);

const Percipitation = () => (
  <div style={{ position: "absolute", top: "18vh", left: "22vw" }}>
    <img
      src="/cloud_1.png"
      className="rain-cloud"
      alt="cloud 1"
      style={{ left: "0px" }}
    />
    <img
      src="/cloud_2.png"
      className="rain-cloud"
      alt="cloud 2"
      style={{ left: "200px" }}
    />
    <img
      src="/cloud_3.png"
      className="rain-cloud"
      alt="cloud 3"
      style={{ left: "400px" }}
    />
    <img alt="rain" src="/rain.png" style={{ position: "absolute", top: "120px" }} />
  </div>
);
const Runoff = () => <div>
    <img alt="falls" src="/falls.png" style={{ position: "absolute", top: "58vh", left: '19vw', width: '60px' }} />
    <img alt="falls" src="/falls.png" style={{ position: "absolute", top: "68vh", left: '21vw', width: '96px' }} />
    <img alt="falls" src="/falls.png" style={{ position: "absolute", top: "45vh", left: '15vw', width: '60px' }} />
    <img alt="falls" src="/falls.png" style={{ position: "absolute", top: "58vh", left: '39vw', width: '31px' }} />
    <img alt="falls" src="/falls.png" style={{ position: "absolute", top: "71vh", left: '41vw', width: '60px' }} />
</div>;

const data = [
  {},
  {
    show: Evapo
  },
  {
    title: "Evaporation",
    content:
      "When the sun heats water, it provides the energy required to " +
      "evaporate liquid water into a gas or vapor. " +
      "The water vapor or gas stays in the atmosphear until the vapuor cools " +
      "down, and condenses into a cloud.",
    top: "6vh",
    left: "58vw",
    show: Evapo
  },
  {
    show: Clouds
  },
  {
    title: "Condensation",
    content:
      "When humid air comes in contact with a cold surface, or cold air, it " +
      "becomes little droplets of water' this is called condensation. Sometimes " +
      "the droplets of water can form a cloud. Often when you use hot water the " +
      "steam that comes off the water, can fog up a window or room, this is also " +
      "condensation.",
    top: "20vh",
    left: "30vw",
    show: Clouds
  },
  {
    show: Percipitation
  },
  {
    title: "Precipitation",
    content:
      "Precipatation, is when the vapor in the sky condenses so much " +
      "it becomes hevy enogh it falls. This often is in the form of rain, " +
      "snow, hail or sleet.",
    top: "30vh",
    left: "54vw",
    show: Percipitation
  },
  {
    show: Runoff
  },
  {
    title: "Runoff",
    content:
      "A runoff is a small river or chanle of water that usualy appears when it " +
      "rains a lot. A runoff runs to the sea or alarge body of water such as a " +
      "lake, Sometimes runoffs appear because the earth can't take anymore " +
      "water. But sometimes runoffs are more perminant.",
    top: "20vh",
    left: "30vw",
    show: Runoff
  },
  {
    title: "Ground water",
    content:
      "Ounce it rains water soaks into the ground ,this is ground water." +
      "Under the earth, there are lakes and rivers, that store water for " +
      "meany years, untill thay resurfus. Small rocks and pebbles help form " +
      "the pools underground, these pools are called aquifers.",
    top: "20vh",
    left: "30vw",
  },
  {
    title: "Respiration",
    content:
      "Respiration is when a livng being  such as a plant,an animal or a person," +
      "ctombind oxegen and glucose to make carbon dioxide, water and heatenergy.",
    top: "20vh",
    left: "30vw",
  }
];

const Card = ({ title, content, top, left }) => (
  <div className="card" style={{ width: "42rem", top, left }}>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{content}</p>
      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    </div>
  </div>
);

function App() {
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

  const handleClick = event => {
    let localIndex = index + 1;
    if (data.length <= localIndex) {
      localIndex = 0;
    }
    setIndex(localIndex);
  };

  return (
    <div
      id='water-cycle'
      className="App w-100 h-100 mx-auto"
      onKeyDown={handleKeyPress}
      onClick={handleClick}
      autoFocus
      tabIndex="0"
    >
      <div>
        <div>{index}</div>
        {data[index].show && data[index].show()}
        {data[index].title ? <Card {...data[index]} /> : <div />}
      </div>
      <div className="instructions">click and after clicking use left and right arrows</div>
    </div>
  );
}

export default App;
