import React from "react";
import "./App.css"
import Characters from "./components/Characters/index";
import Hero from "./components/Myhero";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {

const data = [
  {name:"Iron-man", url:"https://i.pinimg.com/originals/e1/12/f8/e112f875d7f05db887f3d7750474fb1a.jpg",
    biographie:"Anthony « Tony » Stark, alias Iron Man (litt. « l'Homme de fer ») est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par le scénariste Stan Lee, développé par Larry Lieber et conçu par les dessinateurs Don Heck et Jack Kirby, le personnage de fiction apparaît pour la première fois dans le comic book Tales of Suspense (vol. 1) #39 en mars 1963, scénarisé par Larry Lieber et dessiné par Don Heck. "},
  {name:"Captain America", url:"https://qph.cf2.quoracdn.net/main-qimg-e56cc46bc7700ef7320133d2b7d66781-pjlq", 
    biographie:"Steven « Steve » Rogers, alias Captain America est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par le scénariste Joe Simon et le dessinateur Jack Kirby, le personnage de fiction apparaît pour la première fois dans le comic book Captain America Comics #1, paru en décembre 1940n 3 mais avec la date de mars 1941 inscrite sur la couverture2. Conçu à l'origine comme une figure patriotique américaine en réaction au régime nazi, le personnage devient actif avant même l\'entrée en guerre officielle des États-Unis dans la Seconde Guerre mondiale, en décembre 1941. Dès le début de sa publication, il est perçu comme le porte-drapeau des valeurs démocratiques de son pays et comme un défenseur du monde libre contre les totalitarismes, notamment le Troisième Reich3. "},
  {name:"Hulk", url:"http://img.xooimage.com/files110/3/4/a/open-uri20150608-...be64ca1b-4dc8c53.png", 
    biographie:"Le docteur Robert Bruce Banner (souvent nommé Bruce Banner, son deuxième prénom), alias Hulk est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par le scénariste Stan Lee et le dessinateur Jack Kirby, le personnage de fiction apparaît pour la première fois dans le comic book The Incredible Hulk (vol. 1) #1 en mai 1962. Hulk, surnommé le « Titan vert », est devenu l'un des super-héros les plus forts et les plus résistants de l'univers Marvel à la suite d'une exposition accidentelle de Banner aux rayons gamma lors d'une explosion atomique. Il est aussi l'un des membres fondateurs du groupe de super-héros les Vengeurs."},
  {name:"Thor", url:"https://freepngimg.com/save/84335-character-fictional-thor-foster-sif-jane-fiction/571x750", 
    biographie:"Thor Odinson, alias Thor est une divinité et un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par l'éditeur Stan Lee, le scénariste Larry Lieber et le dessinateur Jack Kirby, le personnage de fiction apparaît pour la première fois dans le comic book Journey into Mystery (vol. 1) #83 en août 1962. Le personnage de Thor est basé sur son homologue de la mythologie nordique. L'asgardien est connu pour être l'un des membres fondateurs et équipier récurrent des Vengeurs. Il a été le personnage titre de trois séries régulières ainsi que de séries limitées. "},
  {name:"Black Panther", url:"https://i.pinimg.com/736x/27/ed/8f/27ed8f60d1737c1fb2671beacf6fba05.jpg", 
    biographie:"T'Challa, alias la Panthère noire (« Black Panther » en version originale) est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par le scénariste Stan Lee et le dessinateur Jack Kirby, le personnage de fiction apparaît pour la première fois dans le comic book Fantastic Four (vol. 1) #52 en juillet 1966. Premier super-héros noir dépeint dans les comics, la Panthère noire précède de quelques années des super-héros afro-américains comme le Faucon (1969), Luke Cage (1972), le Green Lantern John Stewart (1971) ou Black Lightning (1977). Le personnage est généralement représenté comme le roi et le protecteur du Wakanda, une nation africaine fictive. Il vit ses propres aventures dans les comics Jungle Action (en) en 1972, avant d'obtenir sa série personnelle Black Panther en 1977. Il porta pendant quelque temps le nom de Black Leopard, avant de retrouver son nom de code original. "},
  {name:"Spider-Man", url:"https://www.closeupshop.fr/media/oart_0/oart_s/oart_73346/thumbs/744940_2723101.jpg", 
    biographie:"Peter Parker, alias Spider-Man (souvent écrit « Spiderman » de façon erronée1) est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par le scénariste Stan Lee et le dessinateur Steve Ditko, le personnage de fiction apparaît pour la première fois dans le comic book Amazing Fantasy (vol. 1) #15 en août 1962.Lors de sa première apparition dans Amazing Fantasy, Spider-Man est l'identité que se choisit le jeune Peter Parker après avoir été mordu par une araignée radioactive et découvert qu'il avait à cette occasion développé des super-pouvoirs. Le succès de ce numéro permet à Spider-Man d'avoir dès 1963 sa propre série, The Amazing Spider-Man. "},
  {name:"Doctor Strange", url:"https://i.pinimg.com/originals/ed/c0/e3/edc0e3beeecf921727df4ff063ec1aa3.jpg", 
    biographie:"Stephen Strange, alias le Docteur Strange (« Doctor Strange » en VO) est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par le scénariste Stan Lee3 et le dessinateur Steve Ditko, le personnage de fiction apparaît pour la première fois dans le comic book Strange Tales 110 en juillet 1963. Avant la première apparition du personnage de Stephen Strange, le nom de « Dr Strange » fut utilisé par un autre personnage de Marvel, deux mois avant la sortie de Strange Tales 1101. Le Docteur Strange est le « Maître des arts mystiques », auquel tous les autres super-héros font appel quand ils ont affaire à des adversaires utilisant des pouvoirs occultes. Il est aussi connu pour avoir été pendant un temps le Sorcier suprême de la dimension terrestre. "},
  {name:"Falcon", url:"https://www.seekpng.com/png/detail/3-31672_the-rise-of-the-black-superhero-marvel-captain.png", 
    biographie:"Samuel « Sam » Wilson, alias le Faucon (« Falcon » en VO) est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par le scénariste Stan Lee et le dessinateur Gene Colan, le personnage de fiction apparaît pour la première fois dans le comic book Captain America 117 en septembre 1969. Le personnage est le premier super-héros afro-américain de l'histoire des comics grand-publica. Il devance ainsi Luke Cage de trois ans et Tornade (la première héroïne noire) de six ans1. Il est également le premier super-héros d’origine africaine n’ayant pas le mot « noir » dans son nom de super-héros, précédant ainsi John Stewart (Green Lantern) de DC Comics de plus de deux ans1,b. Le personnage est pendant un temps la nouvelle incarnation du héros Captain America, remplaçant alors Steve Rogers, mais reprend ensuite le costume du Faucon. "}
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
        <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEU8Wpn///8xUpWYpcUmS5LS1eUhSJDV2efx8vja3ekuUJShq8mrttD5+/02VpZPaqSCk7srUJc3WZzp7PO1wNtxhrfJ0eRpgLOWocOJmLxFYJxfdahugK/Gy90fRo9bcaa/xtrf4+53ibQAPIpofa1LY58b23fTAAAEDUlEQVR4nO3c23aiMACF4SQFQVoDCJ6rtp3p+7/i4Gl0qR05mLCT2f/0Ym60+VbCoaAI+beizFLhQ2lWFmeWOP0nmuVK9z22J6VVPouuhPEk94V3SOeT+FIYjv3y7dLj8Cyc5n0Px0j59CQM/QRWxPAgjMd9j8RY43gvnPi3DZ7Sk53Q2zW6q1qnQs78ncJqEmdSFD5PYTWJhShV34MwmipF5vMirZZpJvw42f45332MMcYYY4wx5ndaa7Uv+Sl3L01olQSBSFfvWTafz19/bO4kUSeDZPWyjoqRfNio78E2T23U4q14TDsW9z3ehumByIY1Zs5VoQ6260Y814TBNmzIc0uo9Edzn0vCzaLp+nRLqIN1K58zQrWsf3hwUqi27VaoM0K1be1zQ6iX7WfQDWEQdwC6INy03Yu6IlSLTkB8oRZdNkIXhEGrUzWHhLrLgcIJ4aDFXxNOCbtPIbqw81YIL1SdgeBCNfddGHTez4AL9bI7EFz45bsw6b4nBRduPn0Xisfjd1uo330Xdv3L0AHh21OEwN8SCaLH479tdFUBfIe02RWoeLpYpVqppPq3+1FJsrv1rZC/Shg0uH5RZEGgNDDmbkl9YBkAr8V/VBu43vQ91FbpVV3gSLi2PA/VP+/+CPoea7vqC9/dnMIGpzSp78KRo0ChXmoKi6TvobastvDT0R1NfeGQQtRqCyMKUaOQQvwo/I+EIYWoUUghfhRSiJ9nQhXctKl7JWr96/bFF2Fcp1Lzz+F1Yd0vIIzCm9deFC37xu1LnnIz9L6/b9shg0KQa40GhdGgb9w+g8I1xp7WoLD0fpW+YtwdNigEeZKeQeFv74XfvgtRbi4aFGLsaAwKUW4umhOGGIdDg0KQA75B4Yv32yHIAd+g8Mt7IcgpjTnh6Ltv2jFjwhhkR2NOiHLANyeE+ayNMeHUe+EbyCmNOSHM8+iMCWE+PmxMuPVeiHLANyYEuWkhzAlxvtZlSjhEOVgYE65hhGoxjK5rcIf05rXHhjCHw4o4uKnBXe7bFx/DAd7Ls08q3IlCCvGjkEL8KKQQPwopxI9CCvGjkEL8KKQQPwopxI9CCvGjkEL8KKQQPwopxI9CCvGjkEL8KKQQPwopxI9CCvGjkEL8KKQQPwopxI9CCvGjkEL8KKQQPwopxI9CCvGjkEL8KKSwcelz3qZ+loWpsP5QZbtCnYnS9lOl7ApVKYr8Ce/T6HdaFeaFkDPLy9SqUM+kkKHlSbQqzMNKKCd2J9GmUE/kThiPnzDu+tkUjuO90PI6tSis1uhBKKc2ifaE+VSehDIc29sWbQn1OJRnoYwniS2jHaFOJrG8FEoZzXJlBWlBqFU+i05vI87vWJSZjdNwNR/FtWr9oNk0Ky+eAvsHAqtRSTqQypUAAAAASUVORK5CYII="></img>Facebook</p>
        <p><img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c540.png"></img>Twitch</p>
    </div>
    </div>
  );
}

export default App;