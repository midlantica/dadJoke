const DadJokeHtml = DadJokeObject => {
  return `
    <section class="dadJoke">
      <h3>${DadJokeObject.question}</h3>
      <h3><em>${DadJokeObject.answer}</em></h3>
    </section>
  `
}

export default DadJokeHtml
