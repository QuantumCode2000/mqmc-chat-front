import { useState } from "react";
const Questions = ({ setIsJoven }) => {
    const [respuestas, setRespuestas] = useState({
        redSocial: "",
        pelicula: "",
        musica: "",
        actividad: "",
        contenidoInternet: "",
        serieTV: "",
        comunicacionAmigos: "",
        videojuegos: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const values = Object.values(respuestas);
        const joven = values.filter((value) => value === "b").length;
        if (joven > 4) {
            setIsJoven(true);
        } else {
            setIsJoven(false);
            alert("Gracias por llenar el formulario");
        }

        setRespuestas({
            redSocial: "",
            pelicula: "",
            musica: "",
            actividad: "",
            contenidoInternet: "",
            serieTV: "",
            comunicacionAmigos: "",
            videojuegos: "",
        });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRespuestas({ ...respuestas, [name]: value });
    };
    return (
        <div className="questions-filter">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        ¿Cuál de estas redes sociales prefieres?
                        <br />
                        <select
                            name="redSocial"
                            value={respuestas.redSocial}
                            onChange={handleChange}
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="a">Tik Tok</option>
                            <option value="b">Facebook</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        ¿Cuál de estas películas te llama más la atención?
                        <br />
                        <select
                            name="pelicula"
                            value={respuestas.pelicula}
                            onChange={handleChange}
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="a">Spider-Man: Homecoming</option>
                            <option value="b">El Padrino</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        ¿Qué tipo de música sueles escuchar más?
                        <br />
                        <select
                            name="musica"
                            value={respuestas.musica}
                            onChange={handleChange}
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="a">Pop y música electrónica</option>
                            <option value="b">Reguetón actual</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        ¿Cuál de estas actividades prefieres hacer en tu tiempo libre?
                        <br />
                        <select
                            name="actividad"
                            value={respuestas.actividad}
                            onChange={handleChange}
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="a">Salir con amigos</option>
                            <option value="b">Ver películas en casa</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        ¿Qué tipo de contenido consumes más en internet?
                        <br />
                        <select
                            name="contenidoInternet"
                            value={respuestas.contenidoInternet}
                            onChange={handleChange}
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="a">
                                Videos de YouTubers famosos y/o videos musicales
                            </option>
                            <option value="b">
                                Videos en los que los jugadores narran y comentan mientras
                                juegan
                            </option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        ¿Cuál de estas series de televisión te gusta más?
                        <br />
                        <select
                            name="serieTV"
                            value={respuestas.serieTV}
                            onChange={handleChange}
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="a">Stranger Things</option>
                            <option value="b">Juego de tronos</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        ¿Cómo prefieres comunicarte con tus amigos?
                        <br />
                        <select
                            name="comunicacionAmigos"
                            value={respuestas.comunicacionAmigos}
                            onChange={handleChange}
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="a">Mensajes de texto y redes sociales</option>
                            <option value="b">
                                Llamadas telefónicas y encuentros en persona
                            </option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        ¿Qué tipo de videojuegos prefieres jugar?
                        <br />
                        <select
                            name="videojuegos"
                            value={respuestas.videojuegos}
                            onChange={handleChange}
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="a">Fortnite y Minecraft</option>
                            <option value="b">Super Mario, Ajedrez</option>
                        </select>
                    </label>
                </div>
                <button type="submit">Enviar</button>
                
            </form>
        </div>
    );
};

export default Questions;
