/*
    Coincide si el día está entre el "x" y el "z" y estamos en el mes "j"
    coincide: (diaciclo, totalDias, faseName, mesidx) => diaciclo >= x && diaciclo <= z && mesidx === j
*/

const festivales = [
    {
        nombre: "Hekate's Deipnon",
        descripcion: `
            <p>
                Con la llegada de la luna nueva, llega el último día del mes.
            </p>
            <p>
                Este día se le dedica a la diosa <b>Hécate Phosphorus/Lampadophoros</b>, aquella quién nos trae la luz en la noche más oscura.
            </p>
            <p>
                Históricamente ha habido mucho debate sobre la reconstrucción de esta práctica, pues se desconoce cuál era el propósito general de la cena que se hacía en su honor.
            </p>
            <p>
                La obra <i>Plutus</i> tiene el siguiente extracto:
            </p>
            <blockquote>
                Pregúntale a Hécate si prefiere al rico o al pobre; ella te dirá:
                «El rico manda comida cada mes, mientras que el pobre la hará
                desaparecer antes de ser servida.»
            </blockquote>
            <p>
                Por lo que mucha gente opta por celebrar esta fecha donando comida para aquellos que lo necesitan; otros prefieren hacer una cena en
                su honor y ofrendarle parte de la comida. Ambas formas de celebración son válidas en la práctica.
            </p>
            <p>
                El Deipnon también es una fecha para limpiar física y espiritualmente, invocando el nombre de Hécate para deshacerse de todo lo malo y así
                hacer espacio para las bendiciones del nuevo mes.
            </p>
        `,
        coincide: (diaciclo, totalDias) => diaciclo === totalDias
    },
    {
        nombre: "Noumenia",
        descripcion: `
            <p>
                <i>Noumenia</i> es una festividad el primer día de la luna visible, celebrada en honor a los Dioses del hogar. 
            <p>

            <p>
                Tradicionalmente, los dioses del hogar consisten de <b>Hestia</b>,<b> Zeus Ktesios</b> y <b>Zeus Erkeios</b>, al igual que dioses que protegen al hogar, como <b>Hermes</b>, <b>Hécate</b> y <b>Apollon Agyieus</b>. Notablemente, pueden incluir como protectores del hogar a <b>daimones</b> del hogar y cualquier <b>ancestro</b> o <b>héroe</b> que quieras honrar.
            <p>

            <p>
                En este día, llamamos a los Dioses para que protejan nuestro hogar y hacerles saber que su presencia es bienvenida en nuestras vidas.
            <p>
        `,
        coincide: (diaciclo) => diaciclo === 1
    },
    {
        nombre: "Agathos Daimon",
        descripcion: `
        <p>
            <i>Agathos Daimon</i> es el segundo día del mes, día dedicado a los buenos daimones: espíritus benevolentes que bendicen nuestro hogar.
        <p>
        <p>
            Algunos honran a los buenos espíritus ofreciéndoles una libación y pidiéndoles que sigan bendiciendo a la familia. Si se considera que la familia necesita ayuda en algún asunto en particular, se suele ofrendar adicionalmente a su espíritu protector.
        <p>
        <p>
            Se considera que los Agathoi Daimones son intermediarios útiles entre los dioses y los hombres, por lo que—aunque a menudo podemos acercarnos directamente a los dioses—es bueno honrar a los espíritus que nos cuidan.
        <p>
        <p>
            El "daimon" <i>no</i> es el demonio maligno del cristianismo, sino que se creía que era un aspecto de <b>Zeus</b>, como <b>Zeus Ktesios</b>, <b>Charitodotes</b> y <b>Epikarpios</b>, epitetos que lo identifican como dador de abundancia y alegría.
        <p>
        <p>
            El buen daimon era usualmente asociado con serpientes, toros (gracias al Himno Órfico #9, el cual describe a la luna como cuernos) y vino. Se le asociaba también a los dioses <b>Selene</b>, <b>Hermes</b> y <b>Dionisio</b>.
        <p>
        `,
        coincide: (diaciclo) => diaciclo === 2
    },

    {
        nombre: "Tercer día: Athene",
        descripcion: `
        <p>
            Cada mes, el tercer día del calendario es dedicado a la diosa Athene (Atenea). 
        <p>
        <p>
            Debido a su conexión con Tritón en los mitos antiguos (y el cómo este la crió junto a Pallas), muchas locaciones —como Creta, Tesalia, Beocia, Arcadia y Egipto— afirmaban que la diosa había nacido en uno de sus ríos (o pozos) llamado Triton, de allí llamándola <b>Tritonis</b> o <b>Tritogeneia</b>, que puede ser explicado de diversas maneras; algunos dicen que proviene de <i>tritô</i>, que significa "cabeza" y lo relaciona con su nacimiento, y otros dicen que tenía intención de conmemorar que nació en el tercer día del mes. 
        <p>
        `,
        coincide: (diaciclo) => diaciclo === 3
    },
    {
        nombre: "Día de Afrodita, Hermes y Heracles",
        descripcion: "Consagrado a Afrodita, Hermes, Heracles y Eros.",
        coincide: (diaciclo) => diaciclo === 4
    },
    {
        nombre: "Artemisa",
        descripcion: "Consagrado a la diosa Artemisa.",
        coincide: (diaciclo) => diaciclo === 6
    },
    {
        nombre: "Séptimo día: Apollon",
        descripcion: `
        <p>
            Cada mes, el séptimo día del calendario es dedicado al dios Apollon.
        <p>
        <p>
            Autores antiguos como Hesíodo marcaron el séptimo día como un día santo, fijando su cumpleaños; el mes exacto variaba según la región, pues era celebrado el 7.º de Targelión en Delos, pero un 7.º de Býsios en Delfos. Independientemente de esto, el número siete es grandemente consagrado hacia él, dándole el epíteto <b>Hebdomagenes</b>, que significa "Nacido en el séptimo".
        <p>
        `,
        coincide: (diaciclo) => diaciclo === 7
    },
    {
        nombre: "Día de Poseidón y Teseo",
        descripcion: "Consagrado al dios y al héroe Teseo.",
        coincide: (diaciclo) => diaciclo === 8
    },
    {
        nombre: "Día de las Musas, Helios y Rea",
        descripcion: "Consagrado a las Musas, a Helios y a la madre Rea.",
        coincide: (diaciclo) => diaciclo === 9
    },
    {
        nombre: "Arreforia",
        descripcion: "Procesión anual de ofrendas (Arreforia).",
        coincide: (diaciclo, totalDias, faseName, mesidx) => diaciclo === 3 && mesidx === 11
    }
];

// Función para obtener el PRIMER resultado que coincida
function obtenerFestival(diaciclo, totalDias, faseName, mesidx) {
    return festivales.find(item => item.coincide(diaciclo, totalDias, faseName, mesidx)) || null;
}