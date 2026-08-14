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
        nombre: "Cuarto día: Aphrodite, Eros, Hermes y Herakles",
        descripcion: `
        <p>
            Cada mes, el cuarto día del calendario es dedicado a la diosa Aphrodite (Afrodita) y su hijo Eros, así como a los dioses Hermes y Herakles (Heracles).
        <p>
        <p>
            En la tradición antigua, el cuarto día de <i>Hekatombaion</i> era en honor al rol de Afrodita en la unificación de Ática, así como por su cumpleaños.
        <p>
        <p>
            Se dice que Eros está asociado al cuarto día gracias a su madre Afrodita, debido a que estuvo presente el día de su nacimiento (basándonos en el mito donde ella sale del mar dando a luz a Eros e Himeros). Sin embargo, en los mitos más antiguos, Eros fue el cuarto dios en existir y era visto como uno de los dioses primordiales. Siglos después Parminedes escribió que Eros era un hijo de la diosa Nyx, hasta llegar a la versión que conocemos hoy (hijo de Ares y Afrodita).
        <p>
        <p>
            El número 4 es el número sagrado de Hermes; en el Himno Homérico 4, se nos cuenta que él nació en un día cuatro. Aparte de eso, es el dios "del cruce de los cuatro caminos".
        <p>
        <p>
            El cumpleaños de Heracles era conmemorado el cuarto día de cada mes, día en el que también se le pedía que alejara la mala suerte de las puertas del hogar.
        <p>
        `,
        coincide: (diaciclo) => diaciclo === 4
    },
    {
        nombre: "Sexto día: Artemis",
        descripcion: `
        <p>
            Cada mes, el sexto día del calendario es dedicado a la diosa Artemis (Artemisa).
        <p>
        <p>
            La tradición antigua puso su día de nacimiento en el día sexto para que la diosa pudiera ser un poco mayor que su hermano gemelo, Apollon; así es como ella pudo ayudar a su madre (Leto) a dar a luz a su hermano, quien es celebrado en el día séptimo de cada mes.
        <p>`,
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
        nombre: "Octavo día: Poseidón y Teseo",
        descripcion: `
            <p>
                Cada mes, el octavo día del calendario es consagrado al dios Poseidón y su hijo mortal—el héroe Teseo.
            </p>
            <p>
                En la tradición griega, el número ocho era el número sagrado de Poseidón por ser el primer número cúbico, símbolo de estabilidad, solidez y firmeza, cualidades atribuidas al dios como sostén de la tierra, adquiriendo así el epíteto <b>Ennosigaios</b>, el cual significa "El que sacude la tierra".
            </p>
            <p>
                En este día, se conmemora el regreso triunfal del héroe Teseo a Atenas tras derrotar al Minotauro en Creta. Teseo era hijo de Poseidón y rey de Atenas. Se le recuerda como un héroe que defendió a su ciudad y a su gente, y se le honra por su valentía y astucia.
            </p>
        `,
        coincide: (diaciclo) => diaciclo === 8
    },
    {
        nombre: "Noveno día: Helius, Rheia y las Musas",
        descripcion: `
            <p>
                Cada mes, el noveno día del calendario es dedicado a los dioses Helius (Helios), Rheia (Rhea) y las Musas.
            <p>
            <p>
            La única cita que se puede encontrar al respecto es una mención en el libro de <i>LABRYS: Household Worship</i>, pero no pudimos encontrar el extracto exacto de las citas.
            <p>
            <p>
                De todos modos, en la práctica moderna, es una fecha usada para reverenciar a los dioses.
            </p>
        `,
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
