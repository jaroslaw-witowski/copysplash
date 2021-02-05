import "./landingPage.css";

const LandingPage: React.FC = () => {
  return (
    <main id="main-section">
      <div className="main-page">
        <h1 className="main-page-header">Copysplash</h1>
        <div className="main-page-content">
          <p className="main-page-content-text text-part1">
            The internet’s source of{" "}
            <a
              className="main-page-content-link"
              target="/"
              href="https://unsplash.com/"
            >
              freely-usable images
            </a>
            .
          </p>
          <p className="main-page-content-text text-part2">
            Powered by creators everywhere
          </p>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
