import React from "react";
import "./App.css"
import Characters from "./components/Characters/index";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

const data = [
  {name:"Iron-man", url:"https://i.pinimg.com/originals/e1/12/f8/e112f875d7f05db887f3d7750474fb1a.jpg"},{name:"Captain America", url:"https://qph.cf2.quoracdn.net/main-qimg-e56cc46bc7700ef7320133d2b7d66781-pjlq"},{name:"Hulk", url:"http://img.xooimage.com/files110/3/4/a/open-uri20150608-...be64ca1b-4dc8c53.png"},{name:"Thor", url:"https://freepngimg.com/save/84335-character-fictional-thor-foster-sif-jane-fiction/571x750"},{name:"Black Panther", url:"https://i.pinimg.com/736x/27/ed/8f/27ed8f60d1737c1fb2671beacf6fba05.jpg"},{name:"Spider-Man", url:"https://www.closeupshop.fr/media/oart_0/oart_s/oart_73346/thumbs/744940_2723101.jpg"},{name:"Doctor Strange", url:"https://i.pinimg.com/originals/ed/c0/e3/edc0e3beeecf921727df4ff063ec1aa3.jpg"},{name:"Falcon", url:"https://www.seekpng.com/png/detail/3-31672_the-rise-of-the-black-superhero-marvel-captain.png"}
]


  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="Title">
      <h1>Your Characters Here !!</h1>
      </div>
      {data !== null ? <Characters data={data} /> : null}
      <Footer />
      <div className="link">
        <p><img src="https://www.pngplay.com/wp-content/uploads/12/Instagram-Logo-Background-PNG.png"></img>Instagram</p>
        <p>Facebook</p>
        <p>Twitch</p>
        <p>Discord</p>
    </div>
    </div>
  );
}

export default App;