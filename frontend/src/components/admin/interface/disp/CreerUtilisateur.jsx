import React from 'react';

const UserProfile = () => {


    const utilisateur = [
        { id: 1, name: "Yann hallage", email: "john.doe@example" },
        { id: 2, name: "Yann hallage", email: "john.doe@example" },
        { id: 3, name: "Yann hallage", email: "john.doe@example" },
        { id: 4, name: "Yann hallage", email: "john.doe@example" },
        { id: 5, name: "Yann hallage", email: "john.doe@example" },
        { id: 5, name: "Yann hallage", email: "john.doe@example" },
        { id: 5, name: "Yann hallage", email: "john.doe@example" },
        { id: 5, name: "Yann hallage", email: "john.doe@example" },
        { id: 5, name: "Yann hallage", email: "john.doe@example" },
        { id: 5, name: "Yann hallage", email: "john.doe@example" },
        { id: 5, name: "Yann hallage", email: "john.doe@example" },
    ]

    return (
        <div className="flex min-h-screen font-sans">
            {/* Menu latéral */}
            <aside className="w-64 bg-white border-r border-gray-200 h-100 overflow-y-auto mt-7">
                <nav className="p-4">
                    <ul className="space-y-2">
                        {utilisateur && utilisateur.length > 0 ? (
                            utilisateur.map((user, index) => (
                                <li
                                    key={index}
                                    className="flex items-center space-x-2 text-gray-700 text-sm py-2 px-4 rounded hover:bg-gray-100 cursor-pointer"
                                >
                                    <span>
                                        <svg
                                            viewBox="0 0 212 212"
                                            height="24"
                                            width="24"
                                            preserveAspectRatio="xMidYMid meet"
                                            className="xh8yej3 x5yr21d"
                                            version="1.1"
                                            x="0px"
                                            y="0px"
                                            enableBackground="new 0 0 212 212"
                                        >
                                            <title>default-user</title>
                                            <path
                                                fill="#DFE5E7"
                                                d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"
                                                className="xl21vc0"
                                            />
                                            <g>
                                                <path
                                                    fill="#FFFFFF"
                                                    d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"
                                                    className="x1d6ck0k"
                                                />
                                                <path
                                                    fill="#FFFFFF"
                                                    d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"
                                                    className="x1d6ck0k"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                    <span className="mt-1">{user.name}</span>
                                </li>
                            ))
                        ) : (
                            <li className="text-gray-500 text-sm py-2 px-4">
                                Aucun utilisateur disponible
                            </li>
                        )}
                    </ul>
                </nav>
            </aside>

            {/* Contenu principal */}
            <main className="flex-1 p-6 overflow-y-auto">
                <div className=''>
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6">Utilisateur</h1>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Identifiant</label>
                            <input
                                type="text"
                                value=""
                                className="block w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Actif</label>
                            <select
                                className="block w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                defaultValue="Oui"
                            >
                                <option>Oui</option>
                                <option>Non</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Nom de famille</label>
                            <input
                                type="text"
                                value=""
                                className="block w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Valide depuis</label>
                            <input
                                type="text"
                                value=""
                                className="block w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Prénom</label>
                            <input
                                type="text"
                                value=""
                                className="block w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Téléphone</label>
                            <input
                                type="text"
                                value=""
                                className="block w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Bureau</label>
                            <input
                                type="text"
                                value=""
                                className="block w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Adresse mail</label>
                            <input
                                type="text"
                                value=""
                                className="block w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="mt-4 text-red-600 text-xs leading-relaxed">
                        L'utilisation des fuseaux horaires n'a pas été activée. Exécutez la commande 'php bin/console database:enable_timezones' pour l'activer.
                    </div>

                    <div className="mt-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                            Enregistrer
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UserProfile;