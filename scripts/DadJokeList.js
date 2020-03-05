import DadJokeHtml from "./DadJoke.js"
import { useDadJokes } from "./DadJokeDataProvider.js"

const contentTarget = document.querySelector(".flexbox")

const DadJokeList = () => {
  const arrayOfDadJokes = useDadJokes()

  for (const DadJokeObject of arrayOfDadJokes) {
    const HtmlRepresentationOfDadJoke = DadJokeHtml(DadJokeObject)
    contentTarget.innerHTML += HtmlRepresentationOfDadJoke
  }
}

export default DadJokeList
