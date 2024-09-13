

const Loading = () => {
    return (
        <div className="loading-screen">
            <h1 className="loading-text text-[25px] md:text-[50px]">Loading</h1>
            <div className="dots">
                <span className="dot z"></span>
                <span className="dot f"></span>
                <span className="dot s"></span>
                <span className="dot t">
                    <span className="dot l"></span>
                </span>
            </div>
        </div>
    );
};

export default Loading;