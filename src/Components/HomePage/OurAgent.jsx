import SectionTitle from "../Shared/SectionTitle/SectionTitle";



const OurAgent = () => {
    return (
        <div className="mb-10">
            <SectionTitle title="Our Agents"></SectionTitle>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">

                <div className="border-x border-[#152475] border-t border-t-slate-300 text-center shadow-md px-2 py-4 space-y-1">
                    <img className="w-10 mx-auto" src="https://i.ibb.co/802Cw3R/helal.jpg" alt="" />
                    <h1 className="text-sm font-bold text-[#152475]">Md Siddique</h1>
                    <p className="text-xs">Works from 2020</p>
                </div>
                <div className="border-x border-[#152475] border-t border-t-slate-300 text-center shadow-md px-2 py-4 space-y-1">
                    <img className="w-10 mx-auto" src="https://i.ibb.co/kc7vQ78/masud.jpg" alt="" />
                    <h1 className="text-sm font-bold text-[#152475]">Masud Rana</h1>
                    <p className="text-xs">Works from 2023</p>
                </div>
                <div className="border-x border-[#152475] border-t border-t-slate-300 text-center shadow-md px-2 py-4 space-y-1">
                    <img className="w-10 mx-auto" src="https://i.ibb.co/rbByMjp/pinki.jpg" alt="" />
                    <h1 className="text-sm font-bold text-[#152475]">Pinki Saha</h1>
                    <p className="text-xs">Works from 2018</p>
                </div>
                <div className="border-x border-[#152475] border-t border-t-slate-300 text-center shadow-md px-2 py-4 space-y-1">
                    <img className="w-10 mx-auto" src="https://i.ibb.co/G51ZD13/sagol.jpg" alt="" />
                    <h1 className="text-sm font-bold text-[#152475]">Jon Dal</h1>
                    <p className="text-xs">Works from 2015</p>
                </div>
                <div className="border-x border-[#152475] border-t border-t-slate-300 text-center shadow-md px-2 py-4 space-y-1">
                    <img className="w-10 mx-auto" src="https://i.ibb.co/JQzpkBK/siddik.jpg" alt="" />
                    <h1 className="text-sm font-bold text-[#152475]">Yarn Kal</h1>
                    <p className="text-xs">Works from 2020</p>
                </div>
                <div className="border-x border-[#152475] border-t border-t-slate-300 text-center shadow-md px-2 py-4 space-y-1">
                    <img className="w-10 mx-auto" src="https://i.ibb.co/CM4c1wj/sinha.jpg" alt="" />
                    <h1 className="text-sm font-bold text-[#152475]">Ibn Sinha.</h1>
                    <p className="text-xs">Works from 2013.</p>
                </div>

            </div>

        </div>
    );
};

export default OurAgent;