import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import InfoAlert from "./infoAlert";
const Notification = () => {
    const [notifications, setNotifications] = useState([]);
    const matricule = Cookies.get('matricule');


    const containerStyle = {
        display: 'flex',
        height: '100vh',
        backgroundColor: '#111b21',
        color: 'black',
        fontFamily: 'Arial, sans-serif',
    };

    const chatListStyle = {
        flexGrow: 1,
        overflowY: 'auto',
    };

    const chatItemStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: '18px',
        borderBottom: '1px solid',
    };

    const chatImageStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        marginRight: '10px',
    };

    const chatDetailsStyle = {
        flexGrow: 1,
    };

    const chatNameStyle = {
        fontWeight: 'bold',
        color: 'black'
    };

    const chatMessageStyle = {
        color: '#8696a0',
        fontSize: '14px',
    };

    const chatTimeStyle = {
        fontSize: '12px',
        color: '#8696a0',
        marginLeft: '10px',
    };

    const chatUnreadStyle = {
        backgroundColor: '#075e54',
        color: 'white',
        padding: '2px 8px',
        borderRadius: '50%',
        fontSize: '12px',
    };

    // Données des discussions (vous pouvez les récupérer depuis une API ou un état)
    useEffect(() => {
        if (!matricule) return;

        const fetchNotifications = async () => {
            try {
                const response = await fetch(`http://localhost:8081/api/notifications/${matricule}`, {
                    credentials: 'include',
                });
                if (response.ok) {
                    const data = await response.json();
                    setNotifications(data);
                } else {
                    console.error('Erreur HTTP:', response.status);
                }
            } catch (error) {
                console.error('Erreur lors du chargement des notifications:', error);
            }
        };

        fetchNotifications();
    }, [matricule]);
    return (
        <>
            <div className="">
                <div className='mt-2 text-xl text-black font-bold'>
                    <h2 >Notifications</h2>
                </div>
                <p className="text-gray-400 text-[14px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique sint quia, neque debitis fugiat dolores id eligendi perspiciatis voluptatibus, deserunt ullam excepturi, vitae at reiciendis quibusdam cupiditate adipisci nostrum aliquid?
                </p>
                <div className="mt-5">
                    <hr />
                    <div className=" flex-col bg-white items-center justify-center ">
                        {notifications.length === 0 ?(
                            <p className="text-gray-400">Aucune notification disponible pour le moment.</p>
                        ):(
                            <div style={chatListStyle}  className={''}>
                                {notifications.map((notif) => (
                                    <div key={notif.id} style={chatItemStyle}>
                                        <span className="text-[#ccc]">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>
                                        </span>
                                        <div style={chatDetailsStyle}>
                                            <div style={chatNameStyle} className='flex space-x-3'>
                                                <span className="text-[14px]">Notification #{notif.id}</span>
                                            </div>
                                            <div style={chatMessageStyle}>{notif.message}</div>
                                        </div>
                                        <div style={chatTimeStyle}>{new Date().toLocaleDateString()}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notification;