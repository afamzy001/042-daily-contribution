import logoimg from "../assets/logo.png";

function Loader() {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">

            <div className="relative flex h-24 w-24 items-center justify-center">
                <div className="absolute inset-0 animate-spin rounded-full border-4 border-green-800 border-t-transparent"></div>

                <img
                    src={logoimg}
                    alt="padi save Logo"
                    className="h-16 w-14 rounded-md object-contain"
                />
            </div>

            <h1 className="mt-6 text-3xl font-bold text-[#067c25]">
                Padi-Save
            </h1>

            <p className="text-green-800">
                Daily Contributions
            </p>

        </div>
    );
}

export default Loader;