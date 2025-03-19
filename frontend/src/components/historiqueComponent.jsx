import React, { useEffect, useState, useContext } from 'react';
import InfoAlert from './infoAlert';
import DialogComponent from './diposition/dialogComponent';
import { SecondContext } from '../context/FirsContext';
import '../styles/styles';
import Cookies from "js-cookie";

const HistoriqueComponent = () => {
    const [apiC, setApiC] = useState(null);
    const matricule = Cookies.get('matricule');
    const { ticket, setTicket, historiqueData, setHistoriqueData } = useContext(SecondContext); // Utilisation du contexte

    const chatListStyle = {
        flexGrow: 1,
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 150px)',
    };

    const chatItemStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid',
    };

    const chatDetailsStyle = {
        flexGrow: 1,
    };

    const chatNameStyle = {
        fontWeight: 'bold',
        color: 'black',
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

    useEffect(() => {
        if (!matricule) {
            console.error("Matricule non trouvé dans les cookies !");
            return;
        }

        const fetchHistoriqueData = async () => {
            try {
                const response = await fetch(`http://localhost:8082/api/historique/${matricule}`);
                console.log("Statut de la réponse :", response.status);

                if (!response.ok) {
                    const text = await response.text();
                    throw new Error(`Erreur HTTP: ${response.status} - ${text}`);
                }

                const data = await response.json();
                console.log("Données reçues :", data);
                setHistoriqueData(data); // Stocke dans le contexte
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
                setHistoriqueData([]); // Stocke une liste vide en cas d'erreur
            }
        };

        fetchHistoriqueData();
    }, [matricule, setHistoriqueData]);

    useEffect(() => {
        if (apiC !== null) {
            setTicket(<DialogComponent donnee={apiC} />);
        }
    }, [apiC, setTicket]);

    return (
        <div className="historique-container">
            <div className="mt-2 text-xl text-black font-bold">
                <h2>Historique</h2>
            </div>
            <p className="text-gray-400 text-[14px]">
                ique sint quia, neque debitis fugiat dolores id eligendi perspiciatis voluptatibus,
                deserunt ullam excepturi, vitae at reiciendis quibusdam cupiditate adipisci nostrum
                aliquid?
            </p>
            <div className="mt-5">
                <hr />
            </div>
            <div className="flex flex-col bg-white flex-1 items-center justify-center">
                {historiqueData.length === 0 ? (
                    <InfoAlert message={'Aucune historique à consulter.'} />
                ) : (
                    <div style={chatListStyle} >
                        {historiqueData.map((chat, index) => (
                            <div key={index} style={chatItemStyle} className='hover:bg-[#F5F7F8]'>
                                <span className="text-[#ccc]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-7"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 13.5H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                                        />
                                    </svg>
                                </span>
                                <div style={chatDetailsStyle} className="ml-2 mt-2">
                                    <div style={chatNameStyle} className="flex space-x-3">
                                        <span
                                            className="text-[14px] cursor-pointer"
                                            onClick={() => setApiC(index)} // Correction : passe l'élément cliqué
                                        >
                                            TicketD00{index + 1}
                                        </span>
                                    </div>
                                    <div style={chatMessageStyle}>{chat.message}</div>
                                </div>
                                <div style={chatTimeStyle}>{chat.dateCreation}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HistoriqueComponent;