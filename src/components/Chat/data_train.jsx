import { a } from "./adolecente";
const q_pairs = [
  {
    id: 21,
    pregunta: "Hola",
    respuesta: "Hola como estas",
    video: null,
  },
  {
    id: 22,
    pregunta: "¿Qué es la sexualidad?",
    respuesta:
      "La sexualidad abarca los aspectos físicos, emocionales, sociales y psicológicos relacionados con el sexo y las relaciones interpersonales",
    video: "https://youtube.com/watch?v=6tzFBm0M2XQ",
  },
  {
    id: 23,
    pregunta:
      "¿Cuál es la edad adecuada para comenzar a tener relaciones sexuales?",
    respuesta:
      "No hay una edad correcta. Lo importante es esperar hasta sentirte emocionalmente preparado/a, tener información sobre anticoncepción y enfermedades de transmisión sexual (ETS) y estar en una relación saludable",
    video: null,
  },
  {
    id: 24,
    pregunta: "¿Qué es la pubertad y cuándo comienza?",
    respuesta:
      "La pubertad es el período de cambios físicos y hormonales que preparan al cuerpo para la reproducción. Suele comenzar entre los 8 y los 13 años, pero puede variar de persona a persona",
    video: null,
  },
  {
    id: 25,
    pregunta: "¿Cómo puedo hablar con mis padres sobre la sexualidad?",
    respuesta:
      "Es importante elegir un momento adecuado y hablar con honestidad y respeto. Puedes comenzar con preguntas sobre su experiencia y luego compartir tus inquietudes y preguntas",
    video: null,
  },
  {
    id: 26,
    pregunta: "¿Es normal masturbarse?",
    respuesta:
      "Sí, la masturbación es una práctica común y saludable que permite explorar el propio cuerpo y descubrir qué se siente bien",
    video: null,
  },
  {
    id: 27,
    pregunta: "¿Qué es el consentimiento sexual y por qué es importante?",
    respuesta:
      "El consentimiento sexual es cuando ambas personas están de acuerdo en participar en una actividad sexual. Es fundamental para relaciones saludables y respetuosas",
    video: null,
  },
  {
    id: 28,
    pregunta: "¿Cómo puedo prevenir el embarazo?",
    respuesta:
      "Utilizando métodos anticonceptivos como preservativos, píldoras anticonceptivas, DIU, entre otros, y teniendo en cuenta que ningún método es 100% efectivo",
    video: null,
  },
  {
    id: 29,
    pregunta:
      "¿Qué son las enfermedades de transmisión sexual (ETS) y cómo puedo protegerme?",
    respuesta:
      "Son infecciones que se transmiten durante el contacto sexual. Puedes protegerte utilizando preservativos, limitando el número de parejas sexuales y haciéndote pruebas regularmente",
    video: null,
  },
  {
    id: 30,
    pregunta: "¿Qué es la orientación sexual y cómo descubro la mía?",
    respuesta:
      "La orientación sexual se refiere a quién te sientes atraído/a emocional, romántica o sexualmente. Puedes descubrirla explorando tus sentimientos y atracciones a lo largo del tiempo",
    video: null,
  },

  {
    id: 31,
    pregunta:
      "¿Qué debo hacer si tengo una pregunta embarazosa sobre mi cuerpo?",
    respuesta:
      "Buscar información en fuentes confiables como libros o sitios web especializados, o hablar con un médico de confianza",
    video: null,
  },
  {
    id: 32,
    pregunta: "¿Qué es la menstruación y cuánto dura?",
    respuesta:
      "La menstruación es el sangrado mensual que experimentan las mujeres cuando no hay embarazo. Suele durar de 3 a 7 días, pero puede variar",
    video: null,
  },
  {
    id: 33,
    pregunta: "¿Es normal tener cambios de humor durante la adolescencia?",
    respuesta:
      "Sí, los cambios hormonales pueden afectar el estado de ánimo. Es importante buscar apoyo si te sientes abrumado",
    video: null,
  },
  {
    id: 34,
    pregunta: "¿Qué debo hacer si creo que soy gay, lesbiana o bisexual?",
    respuesta:
      "Lo más importante es aceptarte a ti mismo/a y buscar apoyo en amigos, familiares o grupos de apoyo LGBTQ+ si lo necesitas",
    video: null,
  },
  {
    id: 35,
    pregunta: "¿Cómo puedo hablar con mi pareja sobre el sexo?",
    respuesta:
      "La comunicación abierta y honesta es clave. Elige un momento adecuado y un lugar tranquilo, y expresa tus deseos y preocupaciones con respeto",
    video: null,
  },
  {
    id: 36,
    pregunta: "¿Qué es el sexo seguro?",
    respuesta:
      "El sexo seguro implica usar métodos anticonceptivos y protegerse contra las ETS durante las relaciones sexuales",
    video: null,
  },
  {
    id: 37,
    pregunta: "¿Qué es el acoso sexual y cómo puedo evitarlo?",
    respuesta:
      "El acoso sexual es cualquier forma de conducta sexual no deseada o no consensuada. Es importante establecer límites claros y buscar ayuda si te sientes acosado/a",
    video: null,
  },
  {
    id: 38,
    pregunta:
      "¿Qué puedo hacer si tengo disfunción eréctil o problemas de erección?",
    respuesta:
      "Hablar con un médico puede ayudarte a identificar la causa y explorar opciones de tratamiento, que pueden incluir cambios en el estilo de vida o medicamentos",
    video: null,
  },
  {
    id: 39,
    pregunta: "¿Es normal tener dudas sobre mi identidad de género?",
    respuesta:
      "Sí, muchas personas experimentan dudas sobre su identidad de género durante la adolescencia. Buscar apoyo de un terapeuta o grupo de apoyo puede ser útil",
    video: null,
  },
  {
    id: 40,
    pregunta: "¿Qué es el sexting y cómo puedo proteger mi privacidad?",
    respuesta:
      "El sexting es el envío de mensajes sexuales o imágenes a través de dispositivos electrónicos. Es importante proteger tu privacidad y solo compartir contenido con personas de confianza",
    video: null,
  },
  {
    id: 41,
    pregunta:
      "¿Cuáles son los riesgos de tener relaciones sexuales a temprana edad?",
    respuesta:
      "Los riesgos incluyen embarazo no deseado, enfermedades de transmisión sexual, presión social y consecuencias emocionales. Es importante esperar hasta estar listo/a y protegido/a",
    video: null,
  },
  {
    id: 42,
    pregunta: "¿Qué es la abstinencia sexual y cómo puedo practicarla?",
    respuesta:
      "La abstinencia sexual es la decisión de no tener relaciones sexuales. Puedes practicarla estableciendo límites personales y comunicándolos claramente a tu pareja",
    video: null,
  },
  {
    id: 43,
    pregunta:
      "¿Cómo puedo saber si estoy listo/a para tener relaciones sexuales?",
    respuesta:
      "Estar listo/a implica sentirse emocionalmente preparado/a, tener información sobre anticoncepción y enfermedades de transmisión sexual, y estar en una relación saludable y consensuada",
    video: null,
  },
  {
    id: 44,
    pregunta: "¿Es normal tener curiosidad sobre el sexo opuesto?",
    respuesta:
      "Sí, es normal sentir curiosidad y atracción hacia personas del sexo opuesto durante la adolescencia",
    video: null,
  },
  {
    id: 45,
    pregunta: "¿Qué es la eyaculación femenina?",
    respuesta:
      "La eyaculación femenina es la expulsión de líquido a través de la uretra durante el orgasmo. No todas las mujeres experimentan esto y su causa exacta aún no está clara",
    video: null,
  },
  {
    id: 46,
    pregunta: "¿Qué es la eyaculación precoz y cómo se trata?",
    respuesta:
      "La eyaculación precoz es cuando un hombre eyacula antes de lo deseado durante el sexo. El tratamiento puede incluir terapia, ejercicios y técnicas de respiración",
    video: null,
  },
  {
    id: 47,
    pregunta: "¿Qué es el orgasmo y cómo se alcanza?",
    respuesta:
      "El orgasmo es la liberación de tensiones sexuales acumuladas y se caracteriza por sensaciones placenteras en el cuerpo. Se alcanza a través de estimulación sexual y puede variar de persona a persona",
    video: null,
  },
  {
    id: 48,
    pregunta:
      "¿Qué es la pornografía y cómo puede afectar mi percepción del sexo?",
    respuesta:
      "La pornografía es material sexualmente explícito diseñado para excitar. Puede influir en las expectativas y actitudes hacia el sexo, pero es importante recordar que no refleja la realidad",
    video: null,
  },
  {
    id: 49,
    pregunta:
      "¿Qué son los métodos anticonceptivos de emergencia y cuándo debo usarlos?",
    respuesta:
      "Son métodos que se utilizan después de una relación sexual sin protección o cuando la protección falla. Deben usarse lo antes posible y no como método anticonceptivo regular",
    video: null,
  },
  {
    id: 50,
    pregunta: "¿Qué es la virginidad y cómo se define?",
    respuesta:
      "La virginidad se define de manera diferente para cada persona y cultura. Puede referirse a la ausencia de experiencia sexual o a la preservación del himen en mujeres, pero no tiene un significado universal",
    video: null,
  },
  {
    id: 51,
    pregunta:
      "¿Cómo puedo hablar con un médico sobre problemas sexuales o de salud reproductiva?",
    respuesta:
      "Es importante elegir un médico de confianza y expresar tus preocupaciones con honestidad. Recuerda que los médicos están capacitados para tratar estos temas de manera profesional y confidencial",
    video: null,
  },
  {
    id: 52,
    pregunta: "¿Qué es la educación sexual y por qué es importante?",
    respuesta:
      "La educación sexual es la provisión de información precisa y relevante sobre la sexualidad y las relaciones interpersonales. Es importante para tomar decisiones informadas y saludables sobre la sexualidad",
    video: null,
  },
  {
    id: 53,
    pregunta: "¿Qué es la penetración y cómo puede ser segura y placentera?",
    respuesta:
      "La penetración es la inserción del pene en la vagina, ano o boca durante el sexo. Es importante practicarla de manera consensuada, utilizando lubricante si es necesario y comunicando cualquier incomodidad o dolor",
    video: null,
  },
  {
    id: 54,
    pregunta: "¿Qué es el amor y cómo sé si estoy enamorado/a?",
    respuesta:
      "El amor es un sentimiento profundo de afecto y conexión emocional hacia otra persona. Puedes saber si estás enamorado/a por cómo te sientes cuando estás con esa persona y cómo te preocupas por su bienestar",
    video: null,
  },
  {
    id: 55,
    pregunta: "¿Es normal tener fantasías sexuales?",
    respuesta:
      "Sí, es normal tener fantasías sexuales. Son una parte natural de la sexualidad y pueden ayudar a explorar deseos y preferencias",
    video: null,
  },
  {
    id: 56,
    pregunta: "¿Qué es la anorgasmia y cómo se trata?",
    respuesta:
      "La anorgasmia es la dificultad para alcanzar el orgasmo. El tratamiento puede incluir terapia sexual, técnicas de relajación y exploración de fantasías y deseos",
    video: null,
  },
  {
    id: 57,
    pregunta: "¿Qué es el sexo seguro y cómo puedo practicarlo?",
    respuesta:
      "El sexo seguro implica protegerse contra el embarazo y las ETS. Puedes practicarlo utilizando preservativos, limitando el número de parejas sexuales y haciéndote pruebas regularmente",
    video: null,
  },
  {
    id: 58,
    pregunta: "¿Qué es la depresión postparto y cómo se trata?",
    respuesta:
      "La depresión postparto es una afección que afecta a algunas mujeres después del parto. El tratamiento puede incluir terapia, medicamentos y apoyo emocional",
    video: null,
  },
  {
    id: 59,
    pregunta: "¿Qué es la dispareunia y cómo se trata?",
    respuesta:
      "La dispareunia es el dolor durante el sexo. El tratamiento puede incluir terapia física, cambios en la técnica sexual y exploración de las causas subyacentes",
    video: null,
  },
  {
    id: 60,
    pregunta:
      "¿Qué es la excitación sexual y cómo se manifiesta en hombres y mujeres?",
    respuesta:
      "La excitación sexual es el estado de respuesta fisiológica y emocional al estímulo sexual. En hombres, puede incluir erección y lubricación, mientras que en mujeres puede incluir lubricación vaginal y dilatación del clítoris",
    video: null,
  },
  {
    id: 61,
    pregunta:
      "¿Qué es la identidad de género y cómo se diferencia de la orientación sexual?",
    respuesta:
      "La identidad de género es cómo una persona se identifica en términos de masculinidad o feminidad. Se diferencia de la orientación sexual, que se refiere a la atracción hacia otros",
    video: null,
  },
  {
    id: 62,
    pregunta:
      "¿Cómo puedo hablar con mi pareja sobre el uso de métodos anticonceptivos?",
    respuesta:
      "Es importante tener una conversación abierta y honesta sobre tus preocupaciones y preferencias. Pueden explorar juntos las opciones disponibles y tomar decisiones que funcionen para ambos",
    video: null,
  },
  {
    id: 63,
    pregunta:
      "¿Qué es el virus del papiloma humano (VPH) y cómo puedo protegerme?",
    respuesta:
      "El VPH es una infección de transmisión sexual común que puede causar verrugas genitales y cáncer cervical. Puedes protegerte utilizando preservativos y vacunándote si aún no lo has hecho",
    video: null,
  },
  {
    id: 64,
    pregunta: "¿Qué es el amor propio y por qué es importante?",
    respuesta:
      "El amor propio es el respeto y la valoración de uno mismo. Es importante porque influye en la autoestima, las relaciones interpersonales y el bienestar emocional",
    video: null,
  },
  {
    id: 65,
    pregunta: "¿Qué es la menopausia y cómo afecta a las mujeres?",
    respuesta:
      "La menopausia es el cese permanente de la menstruación y la fertilidad en las mujeres. Puede causar síntomas como sofocos, cambios de humor y sequedad vaginal",
    video: null,
  },
  {
    id: 66,
    pregunta: "¿Qué es la educación sexual integral y por qué es importante?",
    respuesta:
      "La educación sexual integral es un enfoque holístico que aborda aspectos biológicos, psicológicos y sociales de la sexualidad. Es importante para promover la salud sexual y prevenir problemas como el embarazo no deseado y las ETS",
    video: null,
  },
  {
    id: 67,
    pregunta: "¿Qué es el orgasmo femenino y cómo se alcanza?",
    respuesta:
      "El orgasmo femenino es la liberación de tensión sexual acumulada y se caracteriza por sensaciones placenteras en el cuerpo. Se alcanza a través de estimulación sexual del clítoris, la vagina o el punto G",
    video: null,
  },
  {
    id: 68,
    pregunta: "¿Qué es la eyaculación retrógrada y cómo se trata?",
    respuesta:
      "La eyaculación retrógrada es cuando el semen ingresa a la vejiga en lugar de salir del pene durante la eyaculación. El tratamiento puede incluir medicamentos y técnicas de manejo del estrés",
    video: null,
  },
  {
    id: 69,
    pregunta: "¿Qué es el sexo tántrico y cómo se practica?",
    respuesta:
      "El sexo tántrico es una forma de intimidad sexual que se enfoca en la conexión emocional y espiritual entre las parejas. Se practica a través de la respiración consciente, el contacto físico y la comunicación abierta",
    video: null,
  },
  {
    id: 70,
    pregunta: "¿Qué es el poliamor y cómo funciona en las relaciones?",
    respuesta:
      "El poliamor es la práctica de tener relaciones románticas o sexuales con múltiples personas de manera consensuada. Funciona mediante la comunicación abierta, la confianza y el respeto mutuo",
    video: null,
  },
];
const data_entire =
  "Utiliza esta información para responder los mensajes de los usuarios de manera estricta. Solo responde si la pregunta se parece a alguna de las preguntas proporcionadas en el conjunto de datos en caso de que la pregunta no se parece responde con 'No entiendo la pregunta, por favor intenta de nuevo.', Si la pregunta se parece a alguna pregunta en el conjunto de datos, responde específicamente con las respuestas correspondientes. Si la pregunta no se parece a ninguna de las preguntas del conjunto de datos, responde con un mensaje genérico como 'No entiendo la pregunta, por favor intenta de nuevo.' si y si solo esas palabra nada mas ni menos debe ser : 'No entiendo la pregunta, por favor intenta de nuevo.'.Cuando una pregunta es muy similar a una pregunta del conjunto de datos, intenta buscar una respuesta mezclando las respuestas.Pero solo si se parece en un buen porcentaje";
const data_train_adolecente =
  data_entire +
  '[{"id":21,"pregunta":"Hola","respuesta":"Hola como estas","video":null},{"id":22,"pregunta":"¿Qué es la sexualidad?","respuesta":"La sexualidad abarca los aspectos físicos, emocionales, sociales y psicológicos relacionados con el sexo y las relaciones interpersonales","video":"https://youtube.com/watch?v=6tzFBm0M2XQ"},{"id":23,"pregunta":"¿Cuál es la edad adecuada para comenzar a tener relaciones sexuales?","respuesta":"No hay una edad correcta. Lo importante es esperar hasta sentirte emocionalmente preparado/a, tener información sobre anticoncepción y enfermedades de transmisión sexual (ETS) y estar en una relación saludable","video":null},{"id":24,"pregunta":"¿Qué es la pubertad y cuándo comienza?","respuesta":"La pubertad es el período de cambios físicos y hormonales que preparan al cuerpo para la reproducción. Suele comenzar entre los 8 y los 13 años, pero puede variar de persona a persona","video":null},{"id":25,"pregunta":"¿Cómo puedo hablar con mis padres sobre la sexualidad?","respuesta":"Es importante elegir un momento adecuado y hablar con honestidad y respeto. Puedes comenzar con preguntas sobre su experiencia y luego compartir tus inquietudes y preguntas","video":null},{"id":26,"pregunta":"¿Es normal masturbarse?","respuesta":"Sí, la masturbación es una práctica común y saludable que permite explorar el propio cuerpo y descubrir qué se siente bien","video":null},{"id":27,"pregunta":"¿Qué es el consentimiento sexual y por qué es importante?","respuesta":"El consentimiento sexual es cuando ambas personas están de acuerdo en participar en una actividad sexual. Es fundamental para relaciones saludables y respetuosas","video":null},{"id":28,"pregunta":"¿Cómo puedo prevenir el embarazo?","respuesta":"Utilizando métodos anticonceptivos como preservativos, píldoras anticonceptivas, DIU, entre otros, y teniendo en cuenta que ningún método es 100% efectivo","video":null},{"id":29,"pregunta":"¿Qué son las enfermedades de transmisión sexual (ETS) y cómo puedo protegerme?","respuesta":"Son infecciones que se transmiten durante el contacto sexual. Puedes protegerte utilizando preservativos, limitando el número de parejas sexuales y haciéndote pruebas regularmente","video":null},{"id":30,"pregunta":"¿Qué es la orientación sexual y cómo descubro la mía?","respuesta":"La orientación sexual se refiere a quién te sientes atraído/a emocional, romántica o sexualmente. Puedes descubrirla explorando tus sentimientos y atracciones a lo largo del tiempo","video":null},{"id":31,"pregunta":"¿Qué debo hacer si tengo una pregunta embarazosa sobre mi cuerpo?","respuesta":"Buscar información en fuentes confiables como libros o sitios web especializados, o hablar con un médico de confianza","video":null},{"id":32,"pregunta":"¿Qué es la menstruación y cuánto dura?","respuesta":"La menstruación es el sangrado mensual que experimentan las mujeres cuando no hay embarazo. Suele durar de 3 a 7 días, pero puede variar","video":null},{"id":33,"pregunta":"¿Es normal tener cambios de humor durante la adolescencia?","respuesta":"Sí, los cambios hormonales pueden afectar el estado de ánimo. Es importante buscar apoyo si te sientes abrumado","video":null},{"id":34,"pregunta":"¿Qué debo hacer si creo que soy gay, lesbiana o bisexual?","respuesta":"Lo más importante es aceptarte a ti mismo/a y buscar apoyo en amigos, familiares o grupos de apoyo LGBTQ+ si lo necesitas","video":null},{"id":35,"pregunta":"¿Cómo puedo hablar con mi pareja sobre el sexo?","respuesta":"La comunicación abierta y honesta es clave. Elige un momento adecuado y un lugar tranquilo, y expresa tus deseos y preocupaciones con respeto","video":null},{"id":36,"pregunta":"¿Qué es el sexo seguro?","respuesta":"El sexo seguro implica usar métodos anticonceptivos y protegerse contra las ETS durante las relaciones sexuales","video":null},{"id":37,"pregunta":"¿Qué es el acoso sexual y cómo puedo evitarlo?","respuesta":"El acoso sexual es cualquier forma de conducta sexual no deseada o no consensuada. Es importante establecer límites claros y buscar ayuda si te sientes acosado/a","video":null},{"id":38,"pregunta":"¿Qué puedo hacer si tengo disfunción eréctil o problemas de erección?","respuesta":"Hablar con un médico puede ayudarte a identificar la causa y explorar opciones de tratamiento, que pueden incluir cambios en el estilo de vida o medicamentos","video":null},{"id":39,"pregunta":"¿Es normal tener dudas sobre mi identidad de género?","respuesta":"Sí, muchas personas experimentan dudas sobre su identidad de género durante la adolescencia. Buscar apoyo de un terapeuta o grupo de apoyo puede ser útil","video":null},{"id":40,"pregunta":"¿Qué es el sexting y cómo puedo proteger mi privacidad?","respuesta":"El sexting es el envío de mensajes sexuales o imágenes a través de dispositivos electrónicos. Es importante proteger tu privacidad y solo compartir contenido con personas de confianza","video":null},{"id":41,"pregunta":"¿Cuáles son los riesgos de tener relaciones sexuales a temprana edad?","respuesta":"Los riesgos incluyen embarazo no deseado, enfermedades de transmisión sexual, presión social y consecuencias emocionales. Es importante esperar hasta estar listo/a y protegido/a","video":null},{"id":42,"pregunta":"¿Qué es la abstinencia sexual y cómo puedo practicarla?","respuesta":"La abstinencia sexual es la decisión de no tener relaciones sexuales. Puedes practicarla estableciendo límites personales y comunicándolos claramente a tu pareja","video":null},{"id":43,"pregunta":"¿Cómo puedo saber si estoy listo/a para tener relaciones sexuales?","respuesta":"Estar listo/a implica sentirse emocionalmente preparado/a, tener información sobre anticoncepción y enfermedades de transmisión sexual, y estar en una relación saludable y consensuada","video":null},{"id":44,"pregunta":"¿Es normal tener curiosidad sobre el sexo opuesto?","respuesta":"Sí, es normal sentir curiosidad y atracción hacia personas del sexo opuesto durante la adolescencia","video":null},{"id":45,"pregunta":"¿Qué es la eyaculación femenina?","respuesta":"La eyaculación femenina es la expulsión de líquido a través de la uretra durante el orgasmo. No todas las mujeres experimentan esto y su causa exacta aún no está clara","video":null},{"id":46,"pregunta":"¿Qué es la eyaculación precoz y cómo se trata?","respuesta":"La eyaculación precoz es cuando un hombre eyacula antes de lo deseado durante el sexo. El tratamiento puede incluir terapia, ejercicios y técnicas de respiración","video":null},{"id":47,"pregunta":"¿Qué es el orgasmo y cómo se alcanza?","respuesta":"El orgasmo es la liberación de tensiones sexuales acumuladas y se caracteriza por sensaciones placenteras en el cuerpo. Se alcanza a través de estimulación sexual y puede variar de persona a persona","video":null},{"id":48,"pregunta":"¿Qué es la pornografía y cómo puede afectar mi percepción del sexo?","respuesta":"La pornografía es material sexualmente explícito diseñado para excitar. Puede influir en las expectativas y actitudes hacia el sexo, pero es importante recordar que no refleja la realidad","video":null},{"id":49,"pregunta":"¿Qué son los métodos anticonceptivos de emergencia y cuándo debo usarlos?","respuesta":"Son métodos que se utilizan después de una relación sexual sin protección o cuando la protección falla. Deben usarse lo antes posible y no como método anticonceptivo regular","video":null},{"id":50,"pregunta":"¿Qué es la virginidad y cómo se define?","respuesta":"La virginidad se define de manera diferente para cada persona y cultura. Puede referirse a la ausencia de experiencia sexual o a la preservación del himen en mujeres, pero no tiene un significado universal","video":null},{"id":51,"pregunta":"¿Cómo puedo hablar con un médico sobre problemas sexuales o de salud reproductiva?","respuesta":"Es importante elegir un médico de confianza y expresar tus preocupaciones con honestidad. Recuerda que los médicos están capacitados para tratar estos temas de manera profesional y confidencial","video":null},{"id":52,"pregunta":"¿Qué es la educación sexual y por qué es importante?","respuesta":"La educación sexual es la provisión de información precisa y relevante sobre la sexualidad y las relaciones interpersonales. Es importante para tomar decisiones informadas y saludables sobre la sexualidad","video":null},{"id":53,"pregunta":"¿Qué es la penetración y cómo puede ser segura y placentera?","respuesta":"La penetración es la inserción del pene en la vagina, ano o boca durante el sexo. Es importante practicarla de manera consensuada, utilizando lubricante si es necesario y comunicando cualquier incomodidad o dolor","video":null},{"id":54,"pregunta":"¿Qué es el amor y cómo sé si estoy enamorado/a?","respuesta":"El amor es un sentimiento profundo de afecto y conexión emocional hacia otra persona. Puedes saber si estás enamorado/a por cómo te sientes cuando estás con esa persona y cómo te preocupas por su bienestar","video":null},{"id":55,"pregunta":"¿Es normal tener fantasías sexuales?","respuesta":"Sí, es normal tener fantasías sexuales. Son una parte natural de la sexualidad y pueden ayudar a explorar deseos y preferencias","video":null},{"id":56,"pregunta":"¿Qué es la anorgasmia y cómo se trata?","respuesta":"La anorgasmia es la dificultad para alcanzar el orgasmo. El tratamiento puede incluir terapia sexual, técnicas de relajación y exploración de fantasías y deseos","video":null},{"id":57,"pregunta":"¿Qué es el sexo seguro y cómo puedo practicarlo?","respuesta":"El sexo seguro implica protegerse contra el embarazo y las ETS. Puedes practicarlo utilizando preservativos, limitando el número de parejas sexuales y haciéndote pruebas regularmente","video":null},{"id":58,"pregunta":"¿Qué es la depresión postparto y cómo se trata?","respuesta":"La depresión postparto es una afección que afecta a algunas mujeres después del parto. El tratamiento puede incluir terapia, medicamentos y apoyo emocional","video":null},{"id":59,"pregunta":"¿Qué es la dispareunia y cómo se trata?","respuesta":"La dispareunia es el dolor durante el sexo. El tratamiento puede incluir terapia física, cambios en la técnica sexual y exploración de las causas subyacentes","video":null},{"id":60,"pregunta":"¿Qué es la excitación sexual y cómo se manifiesta en hombres y mujeres?","respuesta":"La excitación sexual es el estado de respuesta fisiológica y emocional al estímulo sexual. En hombres, puede incluir erección y lubricación, mientras que en mujeres puede incluir lubricación vaginal y dilatación del clítoris","video":null},{"id":61,"pregunta":"¿Qué es la identidad de género y cómo se diferencia de la orientación sexual?","respuesta":"La identidad de género es cómo una persona se identifica en términos de masculinidad o feminidad. Se diferencia de la orientación sexual, que se refiere a la atracción hacia otros","video":null},{"id":62,"pregunta":"¿Cómo puedo hablar con mi pareja sobre el uso de métodos anticonceptivos?","respuesta":"Es importante tener una conversación abierta y honesta sobre tus preocupaciones y preferencias. Pueden explorar juntos las opciones disponibles y tomar decisiones que funcionen para ambos","video":null},{"id":63,"pregunta":"¿Qué es el virus del papiloma humano (VPH) y cómo puedo protegerme?","respuesta":"El VPH es una infección de transmisión sexual común que puede causar verrugas genitales y cáncer cervical. Puedes protegerte utilizando preservativos y vacunándote si aún no lo has hecho","video":null},{"id":64,"pregunta":"¿Qué es el amor propio y por qué es importante?","respuesta":"El amor propio es el respeto y la valoración de uno mismo. Es importante porque influye en la autoestima, las relaciones interpersonales y el bienestar emocional","video":null},{"id":65,"pregunta":"¿Qué es la menopausia y cómo afecta a las mujeres?","respuesta":"La menopausia es el cese permanente de la menstruación y la fertilidad en las mujeres. Puede causar síntomas como sofocos, cambios de humor y sequedad vaginal","video":null},{"id":66,"pregunta":"¿Qué es la educación sexual integral y por qué es importante?","respuesta":"La educación sexual integral es un enfoque holístico que aborda aspectos biológicos, psicológicos y sociales de la sexualidad. Es importante para promover la salud sexual y prevenir problemas como el embarazo no deseado y las ETS","video":null},{"id":67,"pregunta":"¿Qué es el orgasmo femenino y cómo se alcanza?","respuesta":"El orgasmo femenino es la liberación de tensión sexual acumulada y se caracteriza por sensaciones placenteras en el cuerpo. Se alcanza a través de estimulación sexual del clítoris, la vagina o el punto G","video":null},{"id":68,"pregunta":"¿Qué es la eyaculación retrógrada y cómo se trata?","respuesta":"La eyaculación retrógrada es cuando el semen ingresa a la vejiga en lugar de salir del pene durante la eyaculación. El tratamiento puede incluir medicamentos y técnicas de manejo del estrés","video":null},{"id":69,"pregunta":"¿Qué es el sexo tántrico y cómo se practica?","respuesta":"El sexo tántrico es una forma de intimidad sexual que se enfoca en la conexión emocional y espiritual entre las parejas. Se practica a través de la respiración consciente, el contacto físico y la comunicación abierta","video":null},{"id":70,"pregunta":"¿Qué es el poliamor y cómo funciona en las relaciones?","respuesta":"El poliamor es la práctica de tener relaciones románticas o sexuales con múltiples personas de manera consensuada. Funciona mediante la comunicación abierta, la confianza y el respeto mutuo","video":null}]';

const data_train_joven =
  data_entire +
  '[{"id":21,"pregunta":"Hola","respuesta":"Hola como estas","video":null},{"id":22,"pregunta":"¿Qué es la sexualidad?","respuesta":"La sexualidad abarca los aspectos físicos, emocionales, sociales y psicológicos relacionados con el sexo y las relaciones interpersonales","video":"https://youtube.com/watch?v=6tzFBm0M2XQ"},{"id":23,"pregunta":"¿Cuál es la edad adecuada para comenzar a tener relaciones sexuales?","respuesta":"No hay una edad correcta. Lo importante es esperar hasta sentirte emocionalmente preparado/a, tener información sobre anticoncepción y enfermedades de transmisión sexual (ETS) y estar en una relación saludable","video":null},{"id":24,"pregunta":"¿Qué es la pubertad y cuándo comienza?","respuesta":"La pubertad es el período de cambios físicos y hormonales que preparan al cuerpo para la reproducción. Suele comenzar entre los 8 y los 13 años, pero puede variar de persona a persona","video":null},{"id":25,"pregunta":"¿Cómo puedo hablar con mis padres sobre la sexualidad?","respuesta":"Es importante elegir un momento adecuado y hablar con honestidad y respeto. Puedes comenzar con preguntas sobre su experiencia y luego compartir tus inquietudes y preguntas","video":null},{"id":26,"pregunta":"¿Es normal masturbarse?","respuesta":"Sí, la masturbación es una práctica común y saludable que permite explorar el propio cuerpo y descubrir qué se siente bien","video":null},{"id":27,"pregunta":"¿Qué es el consentimiento sexual y por qué es importante?","respuesta":"El consentimiento sexual es cuando ambas personas están de acuerdo en participar en una actividad sexual. Es fundamental para relaciones saludables y respetuosas","video":null},{"id":28,"pregunta":"¿Cómo puedo prevenir el embarazo?","respuesta":"Utilizando métodos anticonceptivos como preservativos, píldoras anticonceptivas, DIU, entre otros, y teniendo en cuenta que ningún método es 100% efectivo","video":null},{"id":29,"pregunta":"¿Qué son las enfermedades de transmisión sexual (ETS) y cómo puedo protegerme?","respuesta":"Son infecciones que se transmiten durante el contacto sexual. Puedes protegerte utilizando preservativos, limitando el número de parejas sexuales y haciéndote pruebas regularmente","video":null},{"id":30,"pregunta":"¿Qué es la orientación sexual y cómo descubro la mía?","respuesta":"La orientación sexual se refiere a quién te sientes atraído/a emocional, romántica o sexualmente. Puedes descubrirla explorando tus sentimientos y atracciones a lo largo del tiempo","video":null},{"id":31,"pregunta":"¿Qué debo hacer si tengo una pregunta embarazosa sobre mi cuerpo?","respuesta":"Buscar información en fuentes confiables como libros o sitios web especializados, o hablar con un médico de confianza","video":null},{"id":32,"pregunta":"¿Qué es la menstruación y cuánto dura?","respuesta":"La menstruación es el sangrado mensual que experimentan las mujeres cuando no hay embarazo. Suele durar de 3 a 7 días, pero puede variar","video":null},{"id":33,"pregunta":"¿Es normal tener cambios de humor durante la adolescencia?","respuesta":"Sí, los cambios hormonales pueden afectar el estado de ánimo. Es importante buscar apoyo si te sientes abrumado","video":null},{"id":34,"pregunta":"¿Qué debo hacer si creo que soy gay, lesbiana o bisexual?","respuesta":"Lo más importante es aceptarte a ti mismo/a y buscar apoyo en amigos, familiares o grupos de apoyo LGBTQ+ si lo necesitas","video":null},{"id":35,"pregunta":"¿Cómo puedo hablar con mi pareja sobre el sexo?","respuesta":"La comunicación abierta y honesta es clave. Elige un momento adecuado y un lugar tranquilo, y expresa tus deseos y preocupaciones con respeto","video":null},{"id":36,"pregunta":"¿Qué es el sexo seguro?","respuesta":"El sexo seguro implica usar métodos anticonceptivos y protegerse contra las ETS durante las relaciones sexuales","video":null},{"id":37,"pregunta":"¿Qué es el acoso sexual y cómo puedo evitarlo?","respuesta":"El acoso sexual es cualquier forma de conducta sexual no deseada o no consensuada. Es importante establecer límites claros y buscar ayuda si te sientes acosado/a","video":null},{"id":38,"pregunta":"¿Qué puedo hacer si tengo disfunción eréctil o problemas de erección?","respuesta":"Hablar con un médico puede ayudarte a identificar la causa y explorar opciones de tratamiento, que pueden incluir cambios en el estilo de vida o medicamentos","video":null},{"id":39,"pregunta":"¿Es normal tener dudas sobre mi identidad de género?","respuesta":"Sí, muchas personas experimentan dudas sobre su identidad de género durante la adolescencia. Buscar apoyo de un terapeuta o grupo de apoyo puede ser útil","video":null},{"id":40,"pregunta":"¿Qué es el sexting y cómo puedo proteger mi privacidad?","respuesta":"El sexting es el envío de mensajes sexuales o imágenes a través de dispositivos electrónicos. Es importante proteger tu privacidad y solo compartir contenido con personas de confianza","video":null},{"id":41,"pregunta":"¿Cuáles son los riesgos de tener relaciones sexuales a temprana edad?","respuesta":"Los riesgos incluyen embarazo no deseado, enfermedades de transmisión sexual, presión social y consecuencias emocionales. Es importante esperar hasta estar listo/a y protegido/a","video":null},{"id":42,"pregunta":"¿Qué es la abstinencia sexual y cómo puedo practicarla?","respuesta":"La abstinencia sexual es la decisión de no tener relaciones sexuales. Puedes practicarla estableciendo límites personales y comunicándolos claramente a tu pareja","video":null},{"id":43,"pregunta":"¿Cómo puedo saber si estoy listo/a para tener relaciones sexuales?","respuesta":"Estar listo/a implica sentirse emocionalmente preparado/a, tener información sobre anticoncepción y enfermedades de transmisión sexual, y estar en una relación saludable y consensuada","video":null},{"id":44,"pregunta":"¿Es normal tener curiosidad sobre el sexo opuesto?","respuesta":"Sí, es normal sentir curiosidad y atracción hacia personas del sexo opuesto durante la adolescencia","video":null},{"id":45,"pregunta":"¿Qué es la eyaculación femenina?","respuesta":"La eyaculación femenina es la expulsión de líquido a través de la uretra durante el orgasmo. No todas las mujeres experimentan esto y su causa exacta aún no está clara","video":null},{"id":46,"pregunta":"¿Qué es la eyaculación precoz y cómo se trata?","respuesta":"La eyaculación precoz es cuando un hombre eyacula antes de lo deseado durante el sexo. El tratamiento puede incluir terapia, ejercicios y técnicas de respiración","video":null},{"id":47,"pregunta":"¿Qué es el orgasmo y cómo se alcanza?","respuesta":"El orgasmo es la liberación de tensiones sexuales acumuladas y se caracteriza por sensaciones placenteras en el cuerpo. Se alcanza a través de estimulación sexual y puede variar de persona a persona","video":null},{"id":48,"pregunta":"¿Qué es la pornografía y cómo puede afectar mi percepción del sexo?","respuesta":"La pornografía es material sexualmente explícito diseñado para excitar. Puede influir en las expectativas y actitudes hacia el sexo, pero es importante recordar que no refleja la realidad","video":null},{"id":49,"pregunta":"¿Qué son los métodos anticonceptivos de emergencia y cuándo debo usarlos?","respuesta":"Son métodos que se utilizan después de una relación sexual sin protección o cuando la protección falla. Deben usarse lo antes posible y no como método anticonceptivo regular","video":null},{"id":50,"pregunta":"¿Qué es la virginidad y cómo se define?","respuesta":"La virginidad se define de manera diferente para cada persona y cultura. Puede referirse a la ausencia de experiencia sexual o a la preservación del himen en mujeres, pero no tiene un significado universal","video":null},{"id":51,"pregunta":"¿Cómo puedo hablar con un médico sobre problemas sexuales o de salud reproductiva?","respuesta":"Es importante elegir un médico de confianza y expresar tus preocupaciones con honestidad. Recuerda que los médicos están capacitados para tratar estos temas de manera profesional y confidencial","video":null},{"id":52,"pregunta":"¿Qué es la educación sexual y por qué es importante?","respuesta":"La educación sexual es la provisión de información precisa y relevante sobre la sexualidad y las relaciones interpersonales. Es importante para tomar decisiones informadas y saludables sobre la sexualidad","video":null},{"id":53,"pregunta":"¿Qué es la penetración y cómo puede ser segura y placentera?","respuesta":"La penetración es la inserción del pene en la vagina, ano o boca durante el sexo. Es importante practicarla de manera consensuada, utilizando lubricante si es necesario y comunicando cualquier incomodidad o dolor","video":null},{"id":54,"pregunta":"¿Qué es el amor y cómo sé si estoy enamorado/a?","respuesta":"El amor es un sentimiento profundo de afecto y conexión emocional hacia otra persona. Puedes saber si estás enamorado/a por cómo te sientes cuando estás con esa persona y cómo te preocupas por su bienestar","video":null},{"id":55,"pregunta":"¿Es normal tener fantasías sexuales?","respuesta":"Sí, es normal tener fantasías sexuales. Son una parte natural de la sexualidad y pueden ayudar a explorar deseos y preferencias","video":null},{"id":56,"pregunta":"¿Qué es la anorgasmia y cómo se trata?","respuesta":"La anorgasmia es la dificultad para alcanzar el orgasmo. El tratamiento puede incluir terapia sexual, técnicas de relajación y exploración de fantasías y deseos","video":null},{"id":57,"pregunta":"¿Qué es el sexo seguro y cómo puedo practicarlo?","respuesta":"El sexo seguro implica protegerse contra el embarazo y las ETS. Puedes practicarlo utilizando preservativos, limitando el número de parejas sexuales y haciéndote pruebas regularmente","video":null},{"id":58,"pregunta":"¿Qué es la depresión postparto y cómo se trata?","respuesta":"La depresión postparto es una afección que afecta a algunas mujeres después del parto. El tratamiento puede incluir terapia, medicamentos y apoyo emocional","video":null},{"id":59,"pregunta":"¿Qué es la dispareunia y cómo se trata?","respuesta":"La dispareunia es el dolor durante el sexo. El tratamiento puede incluir terapia física, cambios en la técnica sexual y exploración de las causas subyacentes","video":null},{"id":60,"pregunta":"¿Qué es la excitación sexual y cómo se manifiesta en hombres y mujeres?","respuesta":"La excitación sexual es el estado de respuesta fisiológica y emocional al estímulo sexual. En hombres, puede incluir erección y lubricación, mientras que en mujeres puede incluir lubricación vaginal y dilatación del clítoris","video":null},{"id":61,"pregunta":"¿Qué es la identidad de género y cómo se diferencia de la orientación sexual?","respuesta":"La identidad de género es cómo una persona se identifica en términos de masculinidad o feminidad. Se diferencia de la orientación sexual, que se refiere a la atracción hacia otros","video":null},{"id":62,"pregunta":"¿Cómo puedo hablar con mi pareja sobre el uso de métodos anticonceptivos?","respuesta":"Es importante tener una conversación abierta y honesta sobre tus preocupaciones y preferencias. Pueden explorar juntos las opciones disponibles y tomar decisiones que funcionen para ambos","video":null},{"id":63,"pregunta":"¿Qué es el virus del papiloma humano (VPH) y cómo puedo protegerme?","respuesta":"El VPH es una infección de transmisión sexual común que puede causar verrugas genitales y cáncer cervical. Puedes protegerte utilizando preservativos y vacunándote si aún no lo has hecho","video":null},{"id":64,"pregunta":"¿Qué es el amor propio y por qué es importante?","respuesta":"El amor propio es el respeto y la valoración de uno mismo. Es importante porque influye en la autoestima, las relaciones interpersonales y el bienestar emocional","video":null},{"id":65,"pregunta":"¿Qué es la menopausia y cómo afecta a las mujeres?","respuesta":"La menopausia es el cese permanente de la menstruación y la fertilidad en las mujeres. Puede causar síntomas como sofocos, cambios de humor y sequedad vaginal","video":null},{"id":66,"pregunta":"¿Qué es la educación sexual integral y por qué es importante?","respuesta":"La educación sexual integral es un enfoque holístico que aborda aspectos biológicos, psicológicos y sociales de la sexualidad. Es importante para promover la salud sexual y prevenir problemas como el embarazo no deseado y las ETS","video":null},{"id":67,"pregunta":"¿Qué es el orgasmo femenino y cómo se alcanza?","respuesta":"El orgasmo femenino es la liberación de tensión sexual acumulada y se caracteriza por sensaciones placenteras en el cuerpo. Se alcanza a través de estimulación sexual del clítoris, la vagina o el punto G","video":null},{"id":68,"pregunta":"¿Qué es la eyaculación retrógrada y cómo se trata?","respuesta":"La eyaculación retrógrada es cuando el semen ingresa a la vejiga en lugar de salir del pene durante la eyaculación. El tratamiento puede incluir medicamentos y técnicas de manejo del estrés","video":null},{"id":69,"pregunta":"¿Qué es el sexo tántrico y cómo se practica?","respuesta":"El sexo tántrico es una forma de intimidad sexual que se enfoca en la conexión emocional y espiritual entre las parejas. Se practica a través de la respiración consciente, el contacto físico y la comunicación abierta","video":null},{"id":70,"pregunta":"¿Qué es el poliamor y cómo funciona en las relaciones?","respuesta":"El poliamor es la práctica de tener relaciones románticas o sexuales con múltiples personas de manera consensuada. Funciona mediante la comunicación abierta, la confianza y el respeto mutuo","video":null}]';

export { q_pairs, data_train_joven, data_train_adolecente };
