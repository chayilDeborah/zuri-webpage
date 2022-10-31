import profile_img from "../assets/profile_img.svg";
import slack from "../assets/slack.svg";
import share from "../assets/share.svg";
import github from "../assets/github.svg";
import zuri from "../assets/zuri.svg";
import I4G from "../assets/I4G.svg";
import dots from '../assets/dots.svg';
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="img-flex">
          <img className="profile_img" src={profile_img} alt="profile_img" />
          <div className="share-div">
            <img className="share-img" src={share} alt="share-svg" />
            <img className="dots-img" src={dots} alt='dots'/>
          </div>
        </div>
        <div className="name">Olamide Deborah</div>
        <div className="links-section">
          <div className="link-background">
            <a
              href="https://twitter.com/OlamideTehillah"
              className="links"
              id="twitter"
            >
              Olamide Tehillah
            </a>
          </div>
          <div id="slack">
            Aniyikaye Olamide Mary
          </div>
          <button className="link-background">
            <a
              href="https://training.zuri.team/"
              className="links"
              id="btn__zuri"
            >
              Zuri Team
            </a>
          </button>
          <button className="link-background">
            <a href=" http://books.zuri.team" className="links" id="books">
              Zuri Books
            </a>
          </button>
          <button className="link-background">
            <a
              href=" https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
              className="links"
              id="book__python"
            >
              Python Books
            </a>
          </button>
          <button className="link-background">
            <a href="https://background.zuri.team" className="links" id="pitch">
              Background Check for Coders
            </a>
          </button>
          <button className="link-background">
            <a
              href="https://books.zuri.team/design-rules"
              className="links"
              id="book__design"
              hh
            >
              Design Books
            </a>
          </button>
          <div className="logo-div">
            <div className="logo-section">
              <a href="https://app.slack.com/client/T042F7V19Q8/D04919NJGL9/rimeto_profile/U048845K3PZ">
                <img src={slack} alt="slack_img" className="slack" />
              </a>
              <a href="https://github.com/chayilDeborah/zuri-webpage">
              <img src={github} alt="github_img" className="github" />
              </a>
            </div>
          </div>
          <div className="footer">
            <div className="footer-div">
              <div className="footer-items">
                <img src={zuri} alt="zuri" className="zuri-svg" />
                <div className="hng-text">
                  <div>HNG Internship 9 Frontend Task</div>
                </div>
                <img src={I4G} alt="i4g" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
