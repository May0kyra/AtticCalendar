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
                Este día se le dedica a la diosa Hécate <b>Phosphorus / Lampadophoros</b>, aquella quién nos trae la luz en la noche más oscura.
            </p>
            <p>
                Históricamente ha habido mucho debate sobre la reconstrucción de esta práctica, pues se desconoce cuál era el propósito general de la cena que se hacía en su honor.
            </p>
            <p>
                La obra <i>Plutus</i> tiene el siguiente extracto:
            </p>
            <blockquote>
                Pregúntale a Hécate si prefiere al rico o al pobre; ella te dirá:
                <i>« El rico manda comida cada mes, mientras que el pobre la hará
                desaparecer antes de ser servida. »</i>
            </blockquote>
            <p>
                Por lo que mucha gente opta por celebrar esta fecha donando comida para aquellos que lo necesitan; otros prefieren hacer una cena en
                su honor y ofrendarle parte de la comida. Ambas formas de celebración son válidas en la práctica.
            </p>
            <p>
                El Deipnon también es una fecha para limpiar física y espiritualmente, invocando el nombre de Hécate para deshacerse de todo lo malo y así
                hacer espacio para las bendiciones del nuevo mes.
            </p>
            <hr class="separador-nota">
            <p class="nota-autor">
                <b>Autor:</b> Nanna.
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
                Tradicionalmente, los dioses del hogar consisten de Hestia,Zeus <b>Ktesios</b> y Zeus <b>Erkeios</b>, al igual que dioses que protegen al hogar, como Hermes, Hécate y Apollon <b>Agyieus</b>. Notablemente, pueden incluir como protectores del hogar a <b>daimones</b> del hogar y cualquier <b>ancestro</b> o <b>héroe</b> que quieras honrar.
            <p>

            <p>
                En este día, llamamos a los Dioses para que protejan nuestro hogar y hacerles saber que su presencia es bienvenida en nuestras vidas.
            <p>
            <hr class="separador-nota">
            <p class="nota-autor">
                <b>Autor:</b> Nanna.
            </p>
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
        <hr class="separador-nota">
            <p class="nota-autor">
                <b>Autor:</b> Nanna.
            </p>
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
        <hr class="separador-nota">
            <p class="nota-autor">
                <b>Autor:</b> Max León.
            </p>
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
        <hr class="separador-nota">
            <p class="nota-autor">
                <b>Autor:</b> Max León.
            </p>
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
        <p>
        <hr class="separador-nota">
            <p class="nota-autor">
                <b>Autor:</b> Max León.
            </p>
        `,
        
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
        <hr class="separador-nota">
            <p class="nota-autor">
                <b>Autor:</b> Nanna.
            </p>
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
            <hr class="separador-nota">
            <p class="nota-autor">
                <b>Autor:</b> Nanna.
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
            <hr class="separador-nota">
            <p class="nota-autor">
                <b>Autor:</b> Nanna.
            </p>
        `,
        coincide: (diaciclo) => diaciclo === 9
    },
    //-------------------------------------Metageitnion
    {
        nombre: "Herakleia",
        descripcion: `
        <p>
            La <i>Herakleia</i> era un festival en honor al héroe y dios griego Heracles. En la antigua Atenas se celebraba este festival para conmemorar la muerte de Heracles en el gimnasio Cinosargo, situado a las afueras de las murallas de Atenas, que además era un santuario para el héroe, para su esposa Hebe y su madre Alcmena. Este festival es notoriamente conocido por recibir personas que no eran ciudadanas. Sus sacerdotes eran seleccionados de una lista de jóvenes y recibían el nombre de <i>nothoi</i> ("hijos ilegítimos") o, según otras fuentes, <i>parasitoi</i> (raíz de la palabra "parásitos"). Para entrenar, eran considerados acompañantes de la divinidad al festín.
        </p>
        <p>
            Heracles a veces es adorado como héroe y otras como dios. En Tebas, el centro del culto a Heracles, los festivales duraban varios días y consistían en varios certámenes de atletismo y música junto con sacrificios de toros.
        </p>
        <p>
            En el culto moderno se suele rendir culto a Heracles durante esta fiesta, a través del ejercicio físico y las ofrendas como libaciones, una corona de olivo, quemando inciensos o recitando himnos homéricos.
        </p>
        <hr class="separador-nota">
        <p class="nota-autor">
                <b>Autor:</b> Nanna.
        </p>
        `,
        coincide: (diaciclo, totalDias, faseName, mesidx) => diaciclo === 2 && mesidx === 1
    },
    {
        nombre: "Eleusinia",
        descripcion: ` 
        <p>
            La <i>Eleusinia</i> es una festividad de 4 días en honor a la diosa Demetra (Deméter), dándole las gracias por el regalo del grano y la cosecha. 
        </p>
        <p>
            Cabe destacar que, antiguamente, no era una festividad que se celebrase todos los años. Cuando se celebraba, era en un evento mayor llamado <i>Gran Eleusinia</i> o como una celebración menor cada segundo año del calendario ático. 
        </p>
        <p>
            Consistía en una procesión, juegos tradicionales y sacrificios en honor a la diosa. A pesar de su nombre, ese evento no tomaba lugar en Eleusis, sino en Ática; aunque sus similitudes en el nombre lo sugieren, no es un reemplazo para los <i>Misterios Eleusinios.</i>
        </p>
        <p>
            En la práctica moderna, tomamos esta festividad de forma anual, dándole gracias a Demetra por el trigo y el pan.
        </p>
        <hr class="separador-nota">
        <p class="nota-autor">
            <b>Autor:</b> Nanna.
        </p>
        `,
        coincide: (diaciclo, totalDias, faseName, mesidx) => diaciclo >= 15 && diaciclo <= 18 && mesidx === 1
    },
    {
        nombre: "Las Heroínas",
        descripcion: `      
        <p>
            El festival de <ii>Las Heroínas</i> tiene escritos históricos provenientes de Erquia. Hay dos entradas sobre sacrificios, el <i>19.º Metageitnion</i> y el <i>14.º Pyanepsion</i>, pero con evidencia escasa. Las inscripciones nos dan la fecha y las ofrendas, pero no sobre el origen de este festival, la identidad de las heroínas o detalles sobre el ritual completo. Razonablemente, académicos asumen que principalmente debieron ser honradas heroínas erquianas locales, junto a otro tipo de heroínas cuyo culto se había expandido a lo largo de Grecia.
        </p>
        <hr class="separador-nota">
        <p class="nota-autor">
            <b>Autor:</b> Nanna.
        </p>
        `,
        coincide: (diaciclo, totalDias, faseName, mesidx) => diaciclo === 19 && mesidx === 1
    },
    {
        nombre: "Hera Telkhina",
        descripcion: `      
        <p>
            En este día honramos a la diosa Hera como diosa del matrimonio y el hogar. 
        </p>
        <p>
            El título <i>thelkhinia</i>, que es el utilizado en escritos que relatan esta ceremonia, parece ser un error de ortografía al epíteto, pues la palabra <i>thelkhinia</i> no existe. Algunos escritores y académicos prefieren usar la palabra <i>thelxinoos</i> ("La que cautiva el corazón"), pero se cree que el epíteto más acorde es <i>Telkhina</i>, el cual, según LJS, indica una conexión con los habitantes de Telkhis, Creta. Considerados los primeros herreros y, pronto después, los primeros "hechiceros". 
        </p>
        <p>
            Este evento era considerado un evento menor, pero cualquiera con una conexión particular a la diosa Hera puede darle honores como reina de los cielos.
        </p>
        <hr class="separador-nota">
        <p class="nota-autor">
            <b>Autor:</b> Nanna.
        </p>
        `,
        coincide: (diaciclo, totalDias, faseName, mesidx) => diaciclo === 20 && mesidx === 1
    },
    {
        nombre: "Zeus Epoptes",
        descripcion: `       
        <p>
            Se trataba de un ritual ctónico dedicado a Zeus, durante el cual los habitantes de Erchia sacrificaban un cerdo entero en una pira en honor a Zeus <i>Epoptes</i>, sin consumir ninguna parte del animal. Los registros de esta festividad también especifican que no se realizaban libaciones de vino.
        </p>
        <p>
            Las piras constituían una forma específica de sacrificio asociada únicamente a las deidades ctónicas. El epíteto <i>Epoptes</i> puede traducirse como «supervisor», «observador» o «vigilante». En este contexto, se invocaba a Zeus como una figura encargada de vigilar las fuerzas relacionadas con la muerte y de proteger a la comunidad frente a lo que estaba por venir.
        </p>
        <p>
            Según Sarah Iles Johnston, en el verso inicial de <i>Las coéforas</i>, Orestes invoca a Hermes Ctonio—un dios vinculado al control de los muertos—mediante la expresión <i>patrōi’ epopteuon kratē</i>, que puede entenderse como « tú que supervisas [mis] poderes ancestrales ». A partir de este paralelismo, es posible que el papel de <i>Epops</i> o <i>Epopeus</i> en Erchia estuviera relacionado con la supervisión o el control de los muertos. Así, la festividad podría haber tenido como fin contener, controlar o alejar a los muertos considerados peligrosos para la comunidad.
        </p>
        <hr class="separador-nota">
        <p class="nota-autor">
            <b>Autor:</b> Nanna.
        </p>
        `,
        coincide: (diaciclo, totalDias, faseName, mesidx) => diaciclo === 25 && mesidx === 1
    },
    //--------------------------------------Boedromion
    //--------------------------------------Pyanepsion
    //--------------------------------------Maimakterion
    //--------------------------------------Poseideon
     //--------------------------------------Poseideon2
    //--------------------------------------Gamelion
    //--------------------------------------Anthesterion
    //--------------------------------------Elaphebolion
    //--------------------------------------Mounykhion
    //--------------------------------------Thargelion
     //-------------------------------------Skirophorion
    {
        nombre: "Arrephoria",
        descripcion: `
        <p>
            La Arreforia es una celebración dedicada a Atenea <i>Ergane</i>. Antiguamente, eran seleccionadas dos muchachas en blanco, las cuales cargaban con "cosas innombrables" (posiblemente telares) que se habían comenzado a tejer para Hefesto meses atrás; y eran llevadas al jardín sagrado (Conocido como <i>temenos</i>) de Afrodite.
        <p>
        <p>
            Se cree que este festival se fue mezclando con otro dedicado a la diosa Erse (Diosa del rocío), por lo cual se convirtió en un festival de iniciación femenina hacia la adultez, donde las muchachas llevaban rocío en manos hacia el jardín de Afrodite. También se dice que es un festival que da inicio al verano.
        <p>
        <p>
            En la práctica moderna, este mes es utilizado para terminar con asuntos/tareas/trabajos pendientes, utilizando este día para comunicarle a los dioses con qué cosas quieres cumplir.
        <p>
        <hr class="separador-nota">
            <p class="nota-autor">
                <b>Autor:</b> Nanna.
            </p>
        `,
        coincide: (diaciclo, totalDias, faseName, mesidx) => diaciclo === 3 && mesidx === 11
    },
    {
        nombre:"Skira",
        descripcion: `
        <p>
            La Skira es un festival dedicado a Demetra, Perséfone, Helios, Poseidón Pater y Atenea Skiras.
        <p>
        <p>
            Marca la disolución del año viejo y proteger la tierra del calor veraniego.
        <p>
        <p>
            <i>Esciroforión</i> era el mes de la última cosecha de grano y, por lo tanto, otro importante festival agrícola tenía lugar durante este mes. Se sabe que era parte de un ritual que conmemora la victoria de Atenea sobre Poseidón en favor de la ciudad (festividad necesaria para la <i>Panateneas</i>, el siguiente mes). Dado que el sacerdote de Helios acompaña en procesión a la sacerdotisa de Atenea y a otras mujeres al lugar sagrado para el ritual, es probable que el festival esté relacionado con asegurar las condiciones climáticas para la cosecha.
        <p>
        <p>
            Las mujeres abandonaban sus hogares, realizaban ayuno, comían ajo juntas y celebraban ritos alejadas de los hombres. Incluía una carrera hasta un santuario de Dioniso en la que jóvenes llevaban ramas de vid.
        <p> 
        <hr class="separador-nota">
            <p class="nota-autor">
                <b>Autor:</b> Nanna.
            </p>
        `,
        coincide: (diaciclo, totalDias, faseName, mesidx) => diaciclo === 12 && mesidx === 11
    },
    {
        nombre:"Bouphonia and Dipoleia",
        descripcion: `
        <p>
            Este festival se celebraba en honor a Zeus Polieus, implicaba el sacrificio de un buey por la profanación del altar de Zeus en la Acrópolis, según <i>Pausanias</i>. Al parecer, el festival era antiguo y "anticuado" incluso en la época clásica. 
        <p>
        <p>
            Su rito central era el sacrificio de un buey, un ritual raro y controvertido en la religión griega antigua porque implicaba el sacrificio de un animal que generalmente se consideraba demasiado valioso para tal uso, por lo que matar uno era considerado asesinato. El rito parece expresar la idea de que el asesinato conlleva culpa incluso cuando se comete por las mejores razones.
        <p>
        <hr class="separador-nota">
            <p class="nota-autor">
                Para el ritual se hacía un juicio. El culpable era <i>el hacha</i> con el que se había sacrificado al buey, culminando con que arrojaban el hacha al mar.
            </p>
            <p class="nota-autor">
                <b>Autor:</b> Nanna.
            </p>
        `,
        coincide: (diaciclo, totalDias, faseName, mesidx) => diaciclo === 14 && mesidx === 11
    },
];

// Función para obtener TODOS los festivales que coincidan ese día
function obtenerFestival(diaciclo, totalDias, faseName, mesidx) {
    const encontrados = festivales.filter(item => item.coincide(diaciclo, totalDias, faseName, mesidx));
    return encontrados.length > 0 ? encontrados : null;
}