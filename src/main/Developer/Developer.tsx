import { InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";



const DeveloperInfo = () => {
    return (
        <div className="min-h-screen bg-[#d1d1d1] flex flex-col items-center mt-24 p-4">

            {/* Title */}
            <h1 className="text-2xl font-bold mt-6 mb-6">About</h1>

            {/* App Info Card */}
            <div className="w-full max-w-md bg-[#020f8369] text-white rounded-2xl shadow-lg p-6 text-center">
                <div className="flex justify-center mb-3">

                    <Avatar alt="Eemy Sharp" src="https://i.ibb.co/23QxcgFb/b.jpg" size={'large'} />

                </div>
                <h2 className="text-xl font-semibold">DARULHIKAM</h2>
                <p className="text-sm mt-1">SECONDARY MADRASA</p>
            </div>

            {/* Developer Card */}
            <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-5 mt-6 text-center">
                <h3 className="text-lg font-bold border-b pb-2">Developer</h3>
                <p className="mt-3">Muhammed Fayis Thangal</p>
                <p className="text-sm text-gray-600">
                    muhammedfayisthangal@gmail.com
                </p>
            </div>

            {/* Follow Us */}
            <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-5 mt-6 text-center">
                <h3 className="text-lg font-bold border-b pb-2">Follow us</h3>

                <div className=" mt-4 flex items-center justify-center gap-3">
                    {/* <button className="flex items-center justify-center gap-3 w-full bg-gray-100 p-3 rounded-xl shadow hover:bg-gray-200 transition">
                        <FaYoutube className="text-red-600" size={22} />
                        Youtube
                    </button> */}

                    {/* <button  className="flex items-center justify-center gap-3 w-full bg-gray-100 p-3 rounded-xl shadow hover:bg-gray-200 transition"> */}
                    {/* <FaInstagram className="text-pink-500" size={22} />
                        Instagram */}
                    <Button href="https://www.instagram.com/fayis_elm?igsh=YTgxeGk0NWlqZjNw" size="large"><InstagramOutlined style={{ color: 'red' }} /> Instagram</Button>
                    {/* </button> */}

                    {/* <button className="flex items-center justify-center gap-3 w-full p-3 rounded-xl hover:bg-gray-200 transition"> */}


                    <Button href="https://wa.me/918086860760?text=AssalamualikkuM%20I%20want%20to%20know%20more" size="large"><WhatsAppOutlined style={{ color: 'green' }} />whatsapp</Button>
                    {/* </button> */}
                </div>
            </div>

            {/* Feedback */}
            <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-5 mt-6 text-center">
                <h3 className="text-lg font-bold border-b pb-2">Feedback</h3>
                <p className="mt-4 text-sm leading-relaxed">
                    വെബ്സൈറ്റിനെ കുറിച്ചുള്ള അഭിപ്രായങ്ങളും നിർദേശങ്ങളും നൽകാൻ
                    ദയവായി  ബന്ധപ്പെടുക.
                </p>
            </div>

            {/* Credits */}
            {/* <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-5 mt-6 text-center mb-10">
                <h3 className="text-lg font-bold border-b pb-2">Credits</h3>
                <div className="mt-4 text-sm space-y-1">
                    <p>Zainul Abid</p>
                    <p>Ahmad kutti Rahmani Pullamcheri</p>
                    <p>G.P Darimi</p>
                    <p>SMP Thangal</p>
                    <p>Faaz Designs</p>
                    <p className="mt-2 text-gray-600">www.freepik.com</p>
                    <p className="text-gray-600">www.vecteezy.com</p>
                </div>
            </div> */}

        </div>
    );
};

export default DeveloperInfo;