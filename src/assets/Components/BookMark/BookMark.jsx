

const BookMark = ({bookMark}) => {
    const {title}=bookMark;
    return (
        <div>
            <div className="w-full mt-3 ">
                <h2 className="bg-gray-100 p-3 rounded-md shadow-lg text-xl font-semibold">{title}</h2>
            </div>
        </div>
    );
};

export default BookMark;