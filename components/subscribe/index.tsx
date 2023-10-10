const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div style={{backgroundImage: 'url(https://th.bing.com/th/id/R.9a078ade67a577783af89602ffab5acb?rik=9MHYmcKJtKInVg&riu=http%3a%2f%2fnanodairy.com%2fimages%2fbackground%2fimage-1.jpg&ehk=KgbZK46vnM4Us0osDYHcsZ9IOIlyXjnCWipCs0MZo28%3d&risl=&pid=ImgRaw&r=0)'}} className="subscribe__content">
          <h4>Stop worrying about technology problems. Focus on your business.
Let us provide the support you deserve.</h4>

          <form className="subscribe__form">
            <input type="email" placeholder="Email address" />
            <button type="submit" className="btn btn--rounded btn--yellow">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
};


export default Subscribe