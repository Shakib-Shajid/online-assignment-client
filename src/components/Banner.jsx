
const Banner = () => {
    return (
        <div className="mt-10">
            <div className="hero w-full min-h-[300px] md:min-h-[600px] " style={{ backgroundImage: 'url("public/edu1 (4).jpg")' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl md:text-5xl font-bold">Online Education Group</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;