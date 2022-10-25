import profile_img from '../assets/profile_img.svg';

const Home = () => {
    return (
        <>
        <div className="home">
            <img className="profile_img" src={profile_img} alt="profile_img" />
            <div className='name'>Olamide Deborah</div>
        </div>
        </>
    )
}
export default Home;