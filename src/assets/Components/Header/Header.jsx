import profile from "../../images/profile.png"

const Header = () => {
    return (
        <div>
            <div className="flex items-center justify-between p-4">
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;