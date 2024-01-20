export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Saurabh Kumar</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Tech Enthusiast</span>{" "}
            <br />
            Ex-Accenture
          </h1>
          <p className="hero--section-description">
          With a 2-year tenure at Accenture, where I contributed to Analytics and Software projects addressing the energy crisis in Europe, 
            <br /> solved over 300 LeetCode problems
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
