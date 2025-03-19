import InfoAlert from "../infoAlert";
import { tickets } from "../../api/apiDataFirste";
const Sidebar = () => {

    const searchBarStyle = {
        width: '100%',
        padding: '4px',
        marginBottom: '10px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '',
        color: '#e9edec',
    };

    const tabsStyle = {
        display: 'flex',
        gap: '5px',
        marginBottom: '10px',
    };

    const tabStyle = {
        backgroundColor: '#fff',
        border: 'none',
        padding: '4px',
        color: '#e9edec',
        cursor: 'pointer',
    };

    const activeTabStyle = {
        ...tabStyle,
        backgroundColor: '#075e54',
    };

    return (
        <>
            <div className="">
                <div className='mt-2 text-2xl text-black font-bold'>
                    <h2 >interface utilisateur</h2>
                </div>
                <div className='mt-7'>
                    <input type="text" placeholder="Rechercher" className='bg-gray-700' style={searchBarStyle} />
                </div>
                <div className=''>
                    <div style={tabsStyle}>
                        <button style={activeTabStyle}>Tout</button>
                        <button style={tabStyle}>Non lus</button>
                        <button style={tabStyle}>Favoris</button>
                        <button style={tabStyle}>Groupes</button>
                    </div>
                </div>

                {/* <div className='flex flex-col  flex-1 flex flex-col items-center justify-center'>
                    <InfoAlert
                    sms="Vous verrez les Tikets que vous avez creer ici."
                    />
                </div> */}

                <div className="flex flex-col md:p-7 overflow-y space-y-2 text-[13px] mt-7 flex-1 items-center justify-center">

                    <div className="w-full  font-serif text-[14px] border border-none bg-white rounded-lg overflow-hidden">
                        <div className="text-[18px] text-black  p-5">
                            <span>
                                vous avez effectuer <br/> une demande de panne
                            </span>
                            <span className={'float-end mt-2'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                                </svg>
                            </span>
                            <span className={'text-[14px] ml-11'}>
                                ticket:ouvert
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;