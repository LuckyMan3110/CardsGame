import logo from "../../Assets/images/logo/taggy-black.gif"

const StorePlan = () => {
    return (
        <div className="bg-white flex flex-col px-2 text-center items-center p-12 min-h-[87vh] max-sm:p-4 max-sm:justify-center">
            {/*<img className="rounded-full" src={logo} width={100} height={100} />*/}
            <section className="max-w-7xl max-sm:max-w-full">
                <p className="text-2xl font-bold m-4 max-sm:text-sm max-sm:m-2">
                    Pricing plans
                </p>
                <p className="text-xl font-bold m-4 max-sm:text-sm max-sm:m-2">
                    Choose and get exactly what you need.
                </p>
                <div className="mt-4 pt-4 flex flex-row mx-auto max-sm:block">
                    <div className="w-1/4 mx-4 max-sm:w-fit">
                        <article className="my-4">
                            <p className="font-bold">FREE</p>
                            <p>+ 3% Sales Commission</p>
                        </article>
                        <input className="text-2xl text-center px-8 py-3 bg-stone-200 rounded-xl rounded-t-3xl w-[180px] border-t-2 outline-none" value="Lite" readOnly={true}></input>
                        <div className="-mt-5 pl-12 pr-4 py-8 bg-meta-9 rounded-2xl shadow-2xl">
                            <ul className="list-disc text-left">
                                <li className="my-1">Integrate with App</li>
                                <li className="my-1">Shoppable Store Page</li>
                                <li className="my-1 text-stone-300">Products Streamed to Discovery Feed</li>
                                <li className="my-1 text-stone-300">Host Live Spree Events</li>
                                <li className="my-1 text-stone-300">Market to Users Who RSVP to Live Events</li>
                                <li className="my-1 text-stone-300">Post Additional Product Features to Discovery Feed</li>
                                <li className="my-1 text-stone-300">Featured in Trending Stores</li>
                                <li className="my-1 text-stone-300">Access to Analytics</li>
                            </ul>
                        </div>
                        <a href="/home"><input className="mt-6 text-xl text-center px-4 py-3 bg-meta-3 bg-opacity-40 text-stone-50 rounded-xl w-[150px] outline-none hover:shadow-2xl" value="Free" readOnly={true}></input></a>
                    </div>
                    <div className="w-1/4 mx-4 max-sm:w-fit">
                        <article className="my-4">
                            <p className="font-bold">$19/month</p>
                            <p>+ 3% Sales Commission</p>
                        </article>
                        <input className="text-2xl text-center px-8 py-3 bg-stone-200 rounded-xl rounded-t-3xl w-[180px] border-t-2 outline-none" value="STARTER" readOnly={true}></input>
                        <div className="-mt-5 pl-12 pr-4 py-8 bg-meta-9 rounded-2xl shadow-2xl">
                            <ul className="list-disc text-left">
                                <li className="my-1">Integrate with App</li>
                                <li className="my-1">Shoppable Store Page</li>
                                <li className="my-1">Products Streamed to Discovery Feed</li>
                                <li className="my-1 text-stone-300">Host Live Spree Events</li>
                                <li className="my-1 text-stone-300">Market to Users Who RSVP to Live Events</li>
                                <li className="my-1 text-stone-300">Post Additional Product Features to Discovery Feed</li>
                                <li className="my-1 text-stone-300">Featured in Trending Stores</li>
                                <li className="my-1 text-stone-300">Access to Analytics</li>
                            </ul>
                        </div>
                        <a href="/home"><input className="mt-6 text-xl text-center px-4 py-3 bg-stone-900 text-stone-50 rounded-xl w-[150px] outline-none hover:shadow-2xl" value="Get Starter" readOnly={true}></input></a>
                    </div>
                    <div className="w-1/4 mx-4 max-sm:w-fit">
                        <article className="my-4">
                            <p className="font-bold">$59/month</p>
                            <p>+ 2% Sales Commission</p>
                        </article>
                        <input className="text-2xl text-center px-8 py-3 bg-stone-200 rounded-xl rounded-t-3xl w-[180px] border-t-2 outline-none" value="PRO" readOnly={true}></input>
                        <div className="-mt-5 pl-12 pr-4 py-8 bg-meta-9 rounded-2xl shadow-2xl">
                            <ul className="list-disc text-left">
                                <li className="my-1">Integrate with App</li>
                                <li className="my-1">Shoppable Store Page</li>
                                <li className="my-1">Products Streamed to Discovery Feed</li>
                                <li className="my-1">Host Live Spree Events</li>
                                <li className="my-1">Market to Users Who RSVP to Live Events</li>
                                <li className="my-1">Post Additional Product Features to Discovery Feed</li>
                                <li className="my-1 text-stone-300">Featured in Trending Stores</li>
                                <li className="my-1">Access to Analytics</li>
                            </ul>
                        </div>
                        <a href="/home"><input className="mt-6 text-xl text-center px-4 py-3 bg-stone-900 text-stone-50 rounded-xl w-[150px] outline-none hover:shadow-2xl" value="Get Pro" readOnly={true}></input></a>
                    </div>
                    <div className="w-1/4 mx-4 max-sm:w-fit">
                        <article className="my-4">
                            <p className="font-bold">$199/month</p>
                            <p>+ 5% Sales Commission</p>
                        </article>
                        <input className="text-2xl text-center px-8 py-3 bg-stone-200 rounded-xl rounded-t-3xl w-[180px] border-t-2 outline-none" value="ELEVATE" readOnly={true}></input>
                        <div className="-mt-5 pl-12 pr-4 py-8 bg-meta-9 rounded-2xl shadow-2xl">
                            <ul className="list-disc text-left">
                                <li className="my-1">Integrate with App</li>
                                <li className="my-1">Shoppable Store Page</li>
                                <li className="my-1">Products Streamed to Discovery Feed</li>
                                <li className="my-1">Host Live Spree Events</li>
                                <li className="my-1">Market to Users Who RSVP to Live Events</li>
                                <li className="my-1">Post Additional Product Features to Discovery Feed</li>
                                <li className="my-1">Featured in Trending Stores</li>
                                <li className="my-1">Access to Analytics</li>
                            </ul>
                        </div>
                        <a href="/home"><input className="mt-6 text-xl text-center px-4 py-3 bg-stone-900 text-stone-50 rounded-xl w-[150px] outline-none hover:shadow-2xl" value="Get Elevate" readOnly={true}></input></a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StorePlan;