import Button from '@mui/material/Button';

const phrasing_parameters = {
  websiteName: "Esoteric Crow",
  ownerName: "Mehdi `Arcanite` OUESLATI",
}

const phrases = {
  websiteName:(props) =>  phrasing_parameters.websiteName,
  ownerName: (props) => phrasing_parameters.ownerName,
  websiteDescription: (props) => <span> {phrasing_parameters.websiteName} is <Button variant="text" onClick={() => props.changePage("aboutme")}> {phrasing_parameters.ownerName}</Button>'s personal blog. </span>,
  navArticle: (props) => "Articles",
  navAboutMe: (props) => "About Me",
  navContactMe: (props) => "Contact Me",
  navSignUp: (props) => "Sign Up",
  navLogIn: (props) => "Log IN",
  navSecret: (props) => "Chamber of Secrets",
  logoAlt: (props) => "A minimalistic shape of crow with neurons composing the body.",
  share: (props) => "Share",
  read: (props) => "Read",
}

export default phrases;