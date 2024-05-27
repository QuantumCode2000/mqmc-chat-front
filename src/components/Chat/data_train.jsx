// const prompt = `Devuelve un JSON con el siguiente formato:
// {
//   respuesta: "aqui estara la respuesta a la pregunta que te hizo e usuario",
//   video: "aqui estara el enlace del video o null si no hay video"
// }

// las respuestas deben ser si y solo si la pregunta existe en los siguientes datos , si la pregunta no existe la respuesta debe ser "No entiendo la pregunta, por favor intenta de nuevo." y el video debe ser null ademas debes de darle espacio a las palabras por que estas vienen sin espacio en la respuesta
// `;
const prompt = `Devuelve siempre si o si un JSON con el siguiente formato:
{
  respuesta: "aqui estara la respuesta a la pregunta que te hizo el usuario",
  video: "aqui estara el enlace del video o null si no hay video"
}

Las respuestas deben ser si y solo si la pregunta existe en los siguientes datos. Si la pregunta no existe, la respuesta en el JSON debe ser "No entiendo la pregunta, por favor intenta de nuevo." y el video debe ser null. Además, debes de dar espacio entre las palabras en las respuestas, ya que estas vienen sin espacio originalmente.
`;

const data_train_adolecente =
  '{id:21,pregunta:"Hola",respuesta:"Holacomoestas",video:null},{"id":23,"pregunta":"¿Cuáleslaedadadecuadaparacomenzaratenerrelacionessexuales?","respuesta":"Nohayunaedadcorrecta.Loimportanteesesperarhastasentirteemocionalmentepreparado/a,tenerinformaciónsobreanticoncepciónyenfermedadesdetransmisiónsexual(ETS)yestarenunarelaciónsaludable","video":null},{"id":24,"pregunta":"¿Quéeslapubertadycuándocomienza?","respuesta":"Lapubertadeselperíododecambiosfísicosyhormonalesquepreparanalcuerpoparalareproducción.Suelecomenzarentrelos8ylos13años,peropuedevariardepersonaapersona","video":null}';

const data_train_joven =
  '{id:21,pregunta:"Hola",respuesta:"Holacomoestas",video:null},{id:22,pregunta:"¿Quéeslasexualidad?",respuesta:"Lasexualidadabarcalosaspectosfísicos,emocionales,socialesypsicológicosrelacionadosconelsexoylasrelacionesinterpersonales",video:"https://drive.google.com/file/d/1g3wYeQJN7Tuu9tbI1ACqlW1kDuuV9xCL/view?usp=sharing"}';

export { prompt, data_train_joven, data_train_adolecente };
