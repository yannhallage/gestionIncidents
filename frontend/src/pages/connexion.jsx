import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function LoginPage() {
    const navigate = useNavigate();
    const matriculeRef = useRef(null);
    const motdepasseRef = useRef(null);
    const [email, setEmail] = useState("");
    const [matricule, setMatricule] = useState("");
    const [motdepasse, setMotdepasse] = useState("");
    const [error, setError] = useState("");

    // Vérifier la session au chargement
    useEffect(() => {
        const userRole = Cookies.get('userRole');
        if (userRole) {
            redirectBasedOnRole(userRole);
        }
    }, [navigate]);

    const redirectBasedOnRole = (role) => {
        switch (role) {
            case 'admin':
                navigate('/admin');
                break;
            case 'utilisateur':
                navigate('/utilisateur');
                break;
            case 'technicien':
                navigate('/technicien');
                break;
            default:
                setError("Rôle non reconnu");
        }
    };

    const handleClick = () => {
        navigate('/'); // Retour
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email.trim()) {
            setError("Veuillez entrer votre email");
            return;
        }
        if (!matricule.trim()) {
            setError("Veuillez entrer votre matricule");
            matriculeRef.current.focus();
            return;
        }
        if (!motdepasse.trim()) {
            setError("Veuillez entrer votre mot de passe");
            motdepasseRef.current.focus();
            return;
        }
        if (motdepasse.length < 6) {
            setError("Le mot de passe doit contenir au moins 6 caractères");
            motdepasseRef.current.focus();
            return;
        }

        const user = { email, matricule, motdepasse };
        console.log("Envoi de la requête :", JSON.stringify(user));

        try {
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
                credentials: 'include', // Inclure les cookies dans la requête
            });

            console.log("Statut de la réponse :", response.status);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Réponse du backend :", data);

            if (data.message === "Connexion réussie !") {
                redirectBasedOnRole(data.role);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Erreur de connexion",
                    text: data || "Erreur inconnue",
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Erreur",
                text: "Une erreur est survenue : " + error.message,
            });
            console.error('Erreur lors de la connexion:', error);
        }
    };

    return (
        <div className="flex h-screen bg-gray-900 text-white font-sans">
            <div className="flex flex-col justify-center p-12 ml-10 md:ml-20 lg:ml-32">
                <h1 className="text-5xl font-bold text-blue-400 mb-4">Connexion</h1>
                <p className="text-lg text-gray-300">Entrez votre email, matricule et mot de passe</p>
            </div>

            <div className="flex-1 flex flex-col justify-center p-12 bg-gray-800">
                <div className="mb-6 relative text-2xl">
                    <span>Accéder à votre interface utilisateur</span>
                </div>
                <div>
                    <span className="text-[14px] text-[#ccc]">
                        Application de gestion d'incident IT
                    </span>
                </div>

                {error && (
                    <div className="mb-4 text-red-500 text-sm">
                        {error}
                    </div>
                )}

                <div className="mb-6 relative">
                    <label className="block text-sm text-gray-400 mb-1">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full max-w-md p-2 bg-gray-700 hover:border-blue-400 border border-gray-600 rounded text-white"
                    />
                </div>

                <div className="mb-6 relative space-y-1">
                    <label className="block text-sm text-gray-400 mb-1">Matricule</label>
                    <input
                        type="text"
                        ref={matriculeRef}
                        value={matricule}
                        onChange={(e) => setMatricule(e.target.value)}
                        placeholder="Matricule"
                        className="w-full max-w-md p-2 bg-gray-700 hover:border-blue-400 border border-gray-600 rounded text-white"
                    />
                    <label className="block text-sm text-gray-400 mb-1">Mot de passe</label>
                    <input
                        type="password"
                        ref={motdepasseRef}
                        value={motdepasse}
                        onChange={(e) => setMotdepasse(e.target.value)}
                        placeholder="Mot de passe"
                        className="w-full max-w-md p-2 bg-gray-700 hover:border-blue-400 border border-gray-600 rounded text-white"
                    />
                </div>

                <div className="w-full max-w-md">
                    <button
                        className="bg-gray-700 border-gray-600 cursor-pointer text-white py-2 px-4 rounded mr-2"
                        onClick={handleClick}
                    >
                        Retour
                    </button>
                    <button
                        className="bg-blue-400 text-white py-2 cursor-pointer px-4 rounded hover:bg-blue-500"
                        onClick={handleLogin}
                    >
                        Connexion
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;