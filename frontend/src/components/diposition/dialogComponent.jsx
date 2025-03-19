import {extendedChats} from '../../api/apiDataFirste'
import React, { useContext } from 'react';
import { SecondContext } from '../../context/FirsContext';
const DialogComponent = ({ donnee }) => {
    const { historiqueData, setHistoriqueData } = useContext(SecondContext);

    if (historiqueData){
        console.log(historiqueData[donnee].matriculeUtilisateur)
    }
    return (
        <>
            <div className="w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <div className="">
                    <div className="">
                        <span className="text-2xl">
                            DESCRIPTION DE LA PANNE SIGNALER
                        </span>
                        <br /> <br />
                        <span className="text-xl font-bold">
                            Reference ticket :
                        </span>
                    </div>
                    <div className="mt-11 text-xl">
                        <span>
                            {historiqueData[donnee].message}
                        </span>
                    </div>
                    {/* description de l'utilisateur */}
                    <div className="mt-11">
                        <span>
                            Une forme de données inattendue a provoqué des plantages dans certains de nos pods. Nous avons atténué l'incident agesattendue et amélioré la résilience globale de notre service face à de tels incidents.
                        </span>
                    </div>
                    {/* mot de l'equipe */}
                    <div className="mt-11 font-bold">
                        <span>
                            Bonjour, <br />vous recevez se message car vous avez signaler une panne recemment a votre bureau <br />
                            suite a votre pleinte nos equipes se sont charger a resoudre votre probleme <br />
                            ce message vous informe que la panne detecter recemment a été resolu ,vous pouvez continuer vos service tout en gardant en tete que l'Equipe IT se charge de veiller a votre attente 
                            <br /><br />
                            Merci , Equipe IT
                        </span>
                    </div>
                    {/*  */}
                    <div className="mt-9 text-[15px]">
                        <span>
                           date de creation ticket :  {historiqueData[donnee].dateCreation} <br />
                           type de panne : {historiqueData[donnee].typePanne} <br />
                           panne resolu :  15/03/2024 <br />
                           Assistance : {historiqueData[donnee].matriculeTechnicien}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DialogComponent;