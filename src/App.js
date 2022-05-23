import React from "react";
import "./App.css"
import Characters from "./components/Characters/index";
import Hero from "./components/Myhero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modale from "./components/Modale";

function App() {

const data = [
  {name:"Iron-man", url:"https://i.pinimg.com/originals/e1/12/f8/e112f875d7f05db887f3d7750474fb1a.jpg"},{name:"Captain America", url:"https://qph.cf2.quoracdn.net/main-qimg-e56cc46bc7700ef7320133d2b7d66781-pjlq"},
  {name:"Hulk", url:"http://img.xooimage.com/files110/3/4/a/open-uri20150608-...be64ca1b-4dc8c53.png"},{name:"Thor", url:"https://freepngimg.com/save/84335-character-fictional-thor-foster-sif-jane-fiction/571x750"},
  {name:"Black Panther", url:"https://i.pinimg.com/736x/27/ed/8f/27ed8f60d1737c1fb2671beacf6fba05.jpg"},{name:"Spider-Man", url:"https://www.closeupshop.fr/media/oart_0/oart_s/oart_73346/thumbs/744940_2723101.jpg"},
  {name:"Doctor Strange", url:"https://i.pinimg.com/originals/ed/c0/e3/edc0e3beeecf921727df4ff063ec1aa3.jpg"},{name:"Falcon", url:"https://www.seekpng.com/png/detail/3-31672_the-rise-of-the-black-superhero-marvel-captain.png"}
]


  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="Title">
      <h1>Your Characters Here !!</h1>
      </div>
      {data !== null ? <Characters data={data} /> : null}
      <Modale />
      <Footer />
      <div className="link">
        <p><img src="https://www.pngplay.com/wp-content/uploads/12/Instagram-Logo-Background-PNG.png"></img>Instagram</p>
        <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEU8Wpn///8xUpWYpcUmS5LS1eUhSJDV2efx8vja3ekuUJShq8mrttD5+/02VpZPaqSCk7srUJc3WZzp7PO1wNtxhrfJ0eRpgLOWocOJmLxFYJxfdahugK/Gy90fRo9bcaa/xtrf4+53ibQAPIpofa1LY58b23fTAAAEDUlEQVR4nO3c23aiMACF4SQFQVoDCJ6rtp3p+7/i4Gl0qR05mLCT2f/0Ym60+VbCoaAI+beizFLhQ2lWFmeWOP0nmuVK9z22J6VVPouuhPEk94V3SOeT+FIYjv3y7dLj8Cyc5n0Px0j59CQM/QRWxPAgjMd9j8RY43gvnPi3DZ7Sk53Q2zW6q1qnQs78ncJqEmdSFD5PYTWJhShV34MwmipF5vMirZZpJvw42f45332MMcYYY4wx5ndaa7Uv+Sl3L01olQSBSFfvWTafz19/bO4kUSeDZPWyjoqRfNio78E2T23U4q14TDsW9z3ehumByIY1Zs5VoQ6260Y814TBNmzIc0uo9Edzn0vCzaLp+nRLqIN1K58zQrWsf3hwUqi27VaoM0K1be1zQ6iX7WfQDWEQdwC6INy03Yu6IlSLTkB8oRZdNkIXhEGrUzWHhLrLgcIJ4aDFXxNOCbtPIbqw81YIL1SdgeBCNfddGHTez4AL9bI7EFz45bsw6b4nBRduPn0Xisfjd1uo330Xdv3L0AHh21OEwN8SCaLH479tdFUBfIe02RWoeLpYpVqppPq3+1FJsrv1rZC/Shg0uH5RZEGgNDDmbkl9YBkAr8V/VBu43vQ91FbpVV3gSLi2PA/VP+/+CPoea7vqC9/dnMIGpzSp78KRo0ChXmoKi6TvobastvDT0R1NfeGQQtRqCyMKUaOQQvwo/I+EIYWoUUghfhRSiJ9nQhXctKl7JWr96/bFF2Fcp1Lzz+F1Yd0vIIzCm9deFC37xu1LnnIz9L6/b9shg0KQa40GhdGgb9w+g8I1xp7WoLD0fpW+YtwdNigEeZKeQeFv74XfvgtRbi4aFGLsaAwKUW4umhOGGIdDg0KQA75B4Yv32yHIAd+g8Mt7IcgpjTnh6Ltv2jFjwhhkR2NOiHLANyeE+ayNMeHUe+EbyCmNOSHM8+iMCWE+PmxMuPVeiHLANyYEuWkhzAlxvtZlSjhEOVgYE65hhGoxjK5rcIf05rXHhjCHw4o4uKnBXe7bFx/DAd7Ls08q3IlCCvGjkEL8KKQQPwopxI9CCvGjkEL8KKQQPwopxI9CCvGjkEL8KKQQPwopxI9CCvGjkEL8KKQQPwopxI9CCvGjkEL8KKQQPwopxI9CCvGjkEL8KKQQPwopxI9CCvGjkEL8KKSwcelz3qZ+loWpsP5QZbtCnYnS9lOl7ApVKYr8Ce/T6HdaFeaFkDPLy9SqUM+kkKHlSbQqzMNKKCd2J9GmUE/kThiPnzDu+tkUjuO90PI6tSis1uhBKKc2ifaE+VSehDIc29sWbQn1OJRnoYwniS2jHaFOJrG8FEoZzXJlBWlBqFU+i05vI87vWJSZjdNwNR/FtWr9oNk0Ky+eAvsHAqtRSTqQypUAAAAASUVORK5CYII="></img>Facebook</p>
        <p><img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c540.png"></img>Twitch</p>
    </div>
    </div>
  );
}

export default App;