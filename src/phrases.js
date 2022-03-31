import Button from '@mui/material/Button';

const phrasing_parameters = {
  websiteName: "Esoteric Crow",
  ownerName: "Mehdi `Arcanite` OUESLATI",
}

const phrases = {
  websiteName: phrasing_parameters.websiteName,
  ownerName: phrasing_parameters.ownerName,
  websiteDescription: <span> {phrasing_parameters.websiteName} is <Button variant="text"> {phrasing_parameters.ownerName}</Button>'s personal blog. </span>,
  navArticle: "Articles",
  navAboutMe: "About Me",
  navContactMe: "Contact Me",
  navSignUp: "Sign Up",
  navLogIn: "Log IN",
  logoAlt: "A minimalistic shape of crow with neurons composing the body."
}

export default phrases;