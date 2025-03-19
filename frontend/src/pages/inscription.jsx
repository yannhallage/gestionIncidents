import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
 // Import ajouté explicitement

const Inscription = () => {
    const navigate = useNavigate();
    const matriculeRef = useRef(null);
    const passwordRef = useRef(null);

    const [matricule, setMatricule] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleClick = () => {
        navigate('/'); // Retour à la page d'accueil
    };

    const handleRegister = (e) => {
        e.preventDefault();

        // Validation du matricule
        if (!matricule.trim()) {
            setError("Veuillez entrer votre matricule");
            matriculeRef.current.focus();
            Swal.fire({
                icon: "error",
                title: "Vérifiez les champs",
                text: "Le matricule est requis",
                footer: '<a href="#">Pourquoi ce problème ?</a>'
            });
            return;
        }

        // Validation du mot de passe
        if (!password.trim()) {
            setError("Veuillez entrer votre mot de passe");
            passwordRef.current.focus();
            Swal.fire({
                icon: "error",
                title: "Vérifiez les champs",
                text: "Le mot de passe est requis",
                footer: '<a href="#">Pourquoi ce problème ?</a>'
            });
            return;
        }

        if (password.length < 6) {
            setError("Le mot de passe doit contenir au moins 6 caractères");
            passwordRef.current.focus();
            Swal.fire({
                icon: "error",
                title: "Vérifiez les champs",
                text: "Le mot de passe doit contenir au moins 6 caractères",
                footer: '<a href="#">Pourquoi ce problème ?</a>'
            });
            return;
        }

        // Envoi au backend
        setError("");
        const user = {
            matricule: matricule,
            motdepasse: password
        };

        fetch('http://localhost:8081/api/register/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => {
                        try {
                            const errorData = JSON.parse(text);
                            throw new Error(errorData.message || "Erreur inconnue");
                        } catch {
                            throw new Error(`Erreur HTTP ${response.status}: ${text || "Aucune information supplémentaire"}`);
                        }
                    });
                }
                return response.json();
            })
            .then(data => {
                Swal.fire({
                    title: "Compte créé avec succès !",
                    text: "Vous pouvez maintenant vous connecter.",
                    icon: "success"
                }).then(() => {
                    navigate('/login');
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Erreur lors de l'inscription",
                    text: error.message || "Une erreur est survenue",
                    footer: '<a href="#">Pourquoi ce problème ?</a>'
                });
            });
    };

    return (
        <div className="flex h-screen bg-gray-900 text-white font-sans">
            <div className="flex flex-col justify-center p-12 ml-10 md:ml-20 lg:ml-32">
                <h1 className="text-6xl font-bold text-blue-400 mb-4">Créer un <br /> compte</h1>
                <p className="text-lg text-gray-300">Nous sommes ravis de vous accueillir !</p>
            </div>

            <div className="flex-1 flex flex-col justify-center p-12 bg-gray-800">
                <div className="mb-6 relative text-2xl">
                    <span>Créer Votre compte</span>
                </div>
                <div>
                    <span className="text-[14px] text-[#ccc]">
                        Créez votre compte pour avoir accès aux fonctionnalités
                    </span>
                </div>

                {error && (
                    <div className="mb-4 text-red-500 text-sm">
                        {error}
                    </div>
                )}

                <div className="mb-6 relative space-y-2">
                    <label className="block text-sm text-gray-400 mb-1">
                        Matricule
                    </label>
                    <input
                        type="text"
                        ref={matriculeRef}
                        value={matricule}
                        onChange={(e) => setMatricule(e.target.value)}
                        placeholder="Matricule"
                        className="w-full max-w-md p-2 hover:border-blue-400 rounded-md border bg-gray-700 border-gray-600 text-white"
                    />
                    <label className="block text-sm text-gray-400 mb-1">
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        ref={passwordRef}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mot de passe"
                        className="w-full max-w-md p-2 hover:border-blue-400 rounded-md border bg-gray-700 border-gray-600 text-white"
                    />
                </div>

                <div className="w-full max-w-md">
                    <button
                        className="bg-gray-700 border-gray-600 cursor-pointer text-white py-2 px-4 rounded mr-2 hover:bg-gray-600"
                        onClick={handleClick}
                    >
                        Retour
                    </button>
                    <button
                        className="bg-blue-400 text-white py-2 cursor-pointer px-4 rounded hover:bg-blue-500"
                        onClick={handleRegister}
                    >
                        S'inscrire
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Inscription;