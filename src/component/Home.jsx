import profile_img from "../assets/profile_img.svg";

const Home = () => {
  return (
    <>
      <div className="home">
        <img className="profile_img" src={profile_img} alt="profile_img" />
        <div className="name">Olamide Deborah</div>
        <div className="links-section">
          <div className="link-background">
            <a href="https://twitter.com/OlamideTehillah" id="twitter">
              Twitter Link
            </a>
          </div>
          <button className="link-background">
            <a href="https://twitter.com/OlamideTehillah" id="btn__zuri">
              Zuri Team
            </a>
          </button>

        </div>
      </div>
    </>
  );
};
export default Home;
