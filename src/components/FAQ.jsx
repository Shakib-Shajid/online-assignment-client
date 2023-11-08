

const FAQ = () => {
    return (
        <div>
            <h3 className="text-2xl lg:text-4xl font-bold text-center my-2 md:my-5">Most Frequently Asked Questions</h3>
            <div className="collapse collapse-plus ">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    We will add questions after some days....
                </div>
                <div className="collapse-content">
                    <p>Coming soon</p>
                </div>
            </div>
            <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    We will add questions after some days....
                </div>
                <div className="collapse-content">
                    <p>Coming soon</p>
                </div>
            </div>
            <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    We will add questions after some days....
                </div>
                <div className="collapse-content">
                    <p>Coming soon</p>
                </div>
            </div>

        </div>
    );
};

export default FAQ;