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
                Pregúntale a Hécate si prefiere al rico o al pobre; ella te dirá:<br>
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
            El daimon <i>no</i> es el demonio maligno del cristianismo, sino que se creía que era un aspecto de Zeus, como Zeus <b>Ktesios</b>, <b>Charitodotes</b> y <b>Epikarpios</b>, epitetos que lo identifican como dador de abundancia y alegría.
        <p>
        <p>
            El buen daimon era usualmente asociado con serpientes, toros (gracias al noveno Himno Órfico, el cual describe a la luna como cuernos) y vino. Se le asociaba también a los dioses Selene, Hermes y Dionisio.
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
            Cada mes, el séptimo día del calendario es dedicado al dios Apollon (Apolo).
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
    //Hekatombaion //0

    //-------------------------------------Metageitnion //1
    {
        nombre: "Herakleia",
        descripcion: `
        <p>Las Herakleia eran los antiguos festivales en honor al héroe y dios griego Heracles. En la antigua Atenas se celebraba este festival para conmemorar la muerte de Heracles en el gimnasio Cinosargo —situado a las afueras de las murallas de Atenas— que además era un santuario para el héroe, para su esposa Hebe y su madre Alcmena. Este festival era notoriamente conocido por recibir personas que no eran ciudadanas. Sus sacerdotes eran seleccionados de una lista de jóvenes y recibían el nombre de <i>nothoi</i> ("hijos ilegítimos") o, según otras fuentes, <i>parasitoi</i> (raíz de la palabra "parásitos"). Para entrenar, eran considerados acompañantes de la divinidad al festín.</p>
        <p>Heracles a veces es adorado como héroe y otras como dios. En Tebas, el centro del culto a Heracles, los festivales duraban varios días y consistían en diversos certámenes de atletismo y música junto con sacrificios de toros.</p>
        <p>En el culto moderno se suele rendir culto a Heracles durante esta fiesta, a través del ejercicio físico y las ofrendas como libaciones, una corona de olivo, inciensos encendidos o himnos homéricos recitados.</p>
        <hr class="separador-nota">
        <p class="nota-autor">
            <b>Autor:</b> Nanna. <br><b>Editor:</b> Max León.
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
        <p>El festival de <i>Las Heroínas</i> tiene escritos históricos provenientes de Erquia. Hay dos entradas sobre sacrificios, el <i>19.º Metageitnion</i> y el <i>14.º Pyanepsion</i>, pero con evidencia escasa. Las inscripciones nos dan la fecha y las ofrendas, pero nada sobre el origen de este festival, la identidad de las heroínas o los detalles sobre el ritual completo. Razonablemente, académicos asumen que principalmente debieron ser honradas heroínas erquianas locales, junto a otro tipo de heroínas cuyo culto se había expandido a lo largo de la Antigua Grecia.</p>
        <hr class="separador-nota">
        <p class="nota-autor">
            <b>Autor:</b> Nanna. <br><b>Editor:</b> Max León.
        </p>
        `,
        coincide: (diaciclo, totalDias, faseName, mesidx) => (diaciclo === 19 && mesidx === 1) ^ (diaciclo === 14 && mesidx === 3)
    },
    {
        nombre: "Hera Telkhina",
        descripcion: `      
        <p>
            En este día honramos a la reina Hera como diosa del matrimonio y el hogar. 
        </p>
        <p>
            El título <i>thelkhinia</i>, que es el utilizado en escritos que relatan esta ceremonia, parece ser un error de ortografía al epíteto, pues la palabra <i>thelkhinia</i> no existe. Algunos escritores y académicos prefieren usar la palabra <i>thelxinoos</i> ("La que cautiva el corazón"), pero se cree que el epíteto más acorde es <i>Telkhina</i>, el cual —según LJS— indica una conexión con los habitantes de Telkhis, Creta. Considerados los primeros herreros y, pronto después, los primeros "hechiceros". 
        </p>
        <p>
            Este evento era considerado un evento menor, pero cualquiera con una conexión particular a la diosa Hera puede darle honores como reina de los cielos.
        </p>
        <hr class="separador-nota">
        <p class="nota-autor">
            <b>Autor:</b> Nanna. <br><b>Editor:</b> Max León.
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
            Las piras constituían una forma específica de sacrificio asociada únicamente a las deidades ctónicas. El epíteto <b>Epoptes</b> puede traducirse como «supervisor», «observador» o «vigilante». En este contexto, se invocaba a Zeus como una figura encargada de vigilar las fuerzas relacionadas con la muerte y de proteger a la comunidad frente a lo que estaba por venir.
        </p>
        <p>
            Según Sarah Iles Johnston, en el verso inicial de <i>Las coéforas</i>, Orestes invoca a Hermes Ctonio—un dios vinculado al control de los muertos—mediante la expresión <i>patrōi’ epopteuon kratē</i>, que puede entenderse como « tú que supervisas [mis] poderes ancestrales ». A partir de este paralelismo, es posible que el papel de <b>Epops</b> o <b>Epopeus</b> en Erchia estuviera relacionado con la supervisión o el control de los muertos. Así, la festividad podría haber tenido como fin contener, controlar o alejar a los muertos considerados peligrosos para la comunidad.
        </p>
        <hr class="separador-nota">
        <p class="nota-autor">
            <b>Autor:</b> Nanna.
        </p>
        `,
        coincide: (diaciclo, totalDias, faseName, mesidx) => diaciclo === 25 && mesidx === 1
    },
    //--------------------------------------Boedromion //2
    //--------------------------------------Pyanepsion //3
    {
        nombre: "Proerosia",
        descripcion: `      
        <p>
            La <i>Proerosia</i> era un festival agrícola en honor a la diosa Demetra y su hija Perséfone, celebrado antes de arar y sembrar, durante el cual se ofrecían oraciones para una cosecha abundante. 
        </p>
        <p>
            Este festival era también llamado bajo el nombre de <i>Proarktouria</i>, lo que indicaba que tenía lugar antes de la salida helíaca de la estrella Arturo. La arqueóloga Efrosyni Boutsikas afirma que la salida de Arturo, la estrella más brillante de la constelación Bootes, era usada como guía de referencia cuando el calendario parecía desfasarse, pues la celebración de la Proerosia debía ser exacta para el comienzo de las cosechas.
        </p>
        <p>
            Se dice que Proerosia se celebró por primera vez después de una plaga que afectó a toda Grecia, cuando el oráculo de Delfos dijo que Apollon había ordenado una ofrenda, la primera cosecha, a la diosa Demetra. Posteriormente, excepto por disrupciones de guerra, ofrendas llegaban anualmente de alrededores de Grecia para ganar la gracia de la diosa durante las cosechas.
        </p>
        <p>
            Sabemos que la festividad iniciaba con un sacrificio de agradecimiento por la liberación de la "gran plaga". Era celebrado en cinco demos de Ática, pero bajo diversos nombres y fechas, siendo la más conocida la de Eleusis, donde se convirtió en un festival comunitario de Ática.
        </p> 
        <hr class="separador-nota">
        <p class="nota-autor">
            <b>Autor:</b> Nanna.
        </p>
        `,
        coincide: (diaciclo, totalDias, faseName, mesidx) => diaciclo === 6 && mesidx === 3
    },
    {
        nombre: "Pyanepsia",
        descripcion: `      
        <p>
            La <i>Pyanepsia</i> es un festival dedicado al dios Apollon y al héroe y fundador de Atenas, Teseo. En cierta medida, también se celebraba al dios Helios y a las Horai (diosas de las estaciones). 
        </p><p>
            Este festival es antiguo, siendo el registro más antiguo de este en la era micénica. Se celebraba alrededor de una <i>panspermia</i>, que era un tipo de estofado de frijoles, trigo y diversas semillas. Este evento era un festín contando leyendas y, probablemente, mitos relacionados con Teseo. 
        </p><p>
            Se dice que el día que Teseo volvió de matar al minotauro, deseaba cumplir sus votos a Apollon. Los jóvenes que lo recibieron tomaron el resto de sus provisiones, cocinándolas en un festín y ofrendándoselas a Apollon como agradecimiento por traerlo a salvo de Delos a Ática. De ahí la explicación de la panspermia.
        </p><p>
            Otra práctica del festival era cargar una <i>iresiona</i> (una rama de olivo o laurel) alrededor de la ciudad mientras cantaban las canciones iresionas de casa en casa. Plutarco describe las iras como:
        </p><blockquote>
            « Una rama de olivo adornada con lana, como la que Teseo empleó al hacer su súplica, y cargada de toda clase de ofrendas frutales para señalar que la escasez había llegado a su fin ».
        </blockquote><p>
            Parke dice que también presentaba piezas de repostería con formas de arpas, copas, sarmientos y otros elementos.
        </p><p>
            Para la época clásica, se colgaba una guirnalda sobre prácticamente todas las puertas de Atenas, la cual conservaba su lugar durante todo el año y se renovaba con motivo de las fiestas de las Pyanepsias y las Targelias.
        </p><p>
            La canción de Iresionas, según Plutarco en <i>La vida de Teseo (22.5)</i>:
        </p>
        <blockquote>
            <i>Iresiona trae<br>Toda suerte de bienes:<br>Higos y panes sustanciosos,<br>Aceite suave y dulce miel.<br>Y una copa rebosante de vino.<br>Para que ella beba y duerma.</i>
        </blockquote>
        <hr class="separador-nota">
        <p class="nota-autor">
            <b>Autor:</b> Nanna.
        </p>
        `,
        coincide: (diaciclo, totalDias, faseName, mesidx) => diaciclo === 7 && mesidx === 3
    },
    {
        nombre: "Oskhophoria",
        descripcion: `      
        <p>
            La <i>Oskhophoria</i> es una celebración celebrada el mismo día que la Pyanepsia, pero en honor a Dionisio y Athene <b>Skiras</b>, quienes protegían la cosecha de uvas. 
        </p><p>
            La celebración consistía mayormente en una procesión de un—ahora desconocido—templo de Dionisio hacia el templo de Atenea en Skiras. Dos hombres jóvenes vestidos como mujeres llevaban ramos de <i>oskhoi</i> (uvas) de un templo al otro, simbolizando los eventos de las leyendas de Teseo. 
        </p><p>
            Según la leyenda, Teseo debía avisar a su padre de que regresaba a salvo; sin embargo, embargado por la emoción, olvidó izar las velas blancas que señalaban tal hecho, y el anciano se arrojó al vacío y murió al creer que su hijo había fallecido. El heraldo que viajó desde el puerto hasta Atenas para comunicar al rey el regreso de Teseo fue recibido con alegría y coronas de flores; no obstante, debido a la muerte del monarca, las colocó sobre su vara de heraldo en lugar de sobre su propia cabeza.
        </p><p>
            En el contexto de esta festividad en honor a Dioniso, resulta interesante el detalle mítico de que fue Teseo quien abandonó a Ariadna en la isla donde, con el tiempo, Dioniso la encontraría y la convertiría en inmortal.
        </p>
        <hr class="separador-nota">
        <p class="nota-autor">
            <b>Autor:</b> Nanna.
        </p>
        `,
        coincide: (diaciclo, totalDias, faseName, mesidx) => diaciclo === 7 && mesidx === 3
    },
    {
        nombre: "Theseia",
        descripcion: `      
        <p>
            La <i>Theseia</i> es la celebración del retorno de los (supuestos) huesos de Teseo de Atenas a su lugar original de sepultura en Skyros, como fue comandado por el oráculo de Delfos.
        </p><p>
            Los atenienses crearon un temenos cerca de la ágora (posiblemente en el templo de Hefesto) para reinsertar los restos e instituir el festival en honor al héroe. La celebración se convirtió en un festival importante que, según Parke, incluía una procesión, competiciones deportivas y el consumo de carne de animales sacrificados. Otro rasgo distintivo de este festival era el consumo de <i>athara</i>, un "pudin" especial elaborado con leche.
        </p>
        <hr class="separador-nota">
        <p class="nota-autor">
            <b>Autor:</b> Nanna.
        </p>
        `,
        coincide: (diaciclo, totalDias, faseName, mesidx) => diaciclo === 8 && mesidx === 3
    },
    {
        nombre: "Stenia",
        descripcion: `      
        <p>
            La <i>Stenia</i> era una festividad en honor a Demetra y Perséfone que se celebraba tres días antes de las Thesmophoria. 
        </p><p>
            Se sabe poco sobre esta festividad, salvo que eran celebradas exclusivamente por mujeres y que en ellas desempeñaban un papel destacado las rituales, las obscenidades fingidas e insultos. Probablemente coincidían con el inicio de la purificación ritual de las mujeres que iban a celebrar las Thesmophoria. Se cree que era también el momento en que otras mujeres, conocidas como <i>«las Achicadoras»</i>, recuperaban las ofrendas para las Thesmophoria de las fosas donde habían sido depositadas durante las Esciroforias (Skira).
        </p>
        <hr class="separador-nota">
        <p class="nota-autor">
            <b>Autor:</b> Nanna.
        </p>
        `,
        coincide: (diaciclo, totalDias, faseName, mesidx) => diaciclo === 9 && mesidx === 3
    },
    {
        nombre: "Thesmophoria",
        descripcion: `      
        <p>
            La <i>Tesmoforia</i> era un festival celebrado en primavera en honor a la diosa Demetra <b>Tesmóforos</b> y protagonizado exclusivamente por mujeres. El nombre Demetra Thesmophoros sigue siendo un tema de debate en el mundo académico. Como una posible traducción tenemos <i>«portadora de tesoro o riqueza»</i>, el cual era considerado un término obsoleto de thesmos; pero, por otro lado, otros creen que puede ser un epíteto original, significando <i>«la que transporta objetos depositados».</i>
        </p><p>
            Las participantes eran mujeres libres que, al parecer, estaban casadas. Se abstenían de mantener relaciones sexuales por días, igualmente evitando el consumo de ciertos alimentos. La festividad duraba tres días, aunque en Ática se prolongaba hasta cinco. 
        </p><p>
            El primer día se llamaba <i>anodos</i> (o <i>kathodos</i>), donde las mujeres subían en procesión hacia el santuario de la diosa cargando provisiones para acampar allí.
        </p><p>
            El segundo día se llamaba <i>nēsteia</i>, un día de luto estricto en el que imitaban la tristeza de Deméter al perder a su hija. Se sentaban en el suelo y ayunaban para purificarse.
        </p><p>
            El tercer día se llamaba <i>Kalligeneia</i>; consistía en una jornada de alegría, banquetes y bromas rituales que celebraba el regreso de la fertilidad y las buenas cosechas. Gran parte de las Tesmoforias se celebraba a la luz de las antorchas e iba acompañada de una ceremonia donde las mujeres intercambiaban insultos y bromas soeces, una práctica habitual para propiciar la fertilidad.
        </p><p>
            Durante esta celebración, unas mujeres que habían guardado castidad durante tres días extraían los restos del lechón arrojado durante las Stenias. Estas mujeres también portaban ciertos símbolos de fertilidad bien conocidos, tales como piñas y figuras de masa con forma de serpiente o de hombre. Los restos de los cerdos se depositaban sobre un altar, agregando unas semillas para garantizar una próspera cosecha.
        </p><p>
            En el pasado intentaron interpretar estos actos como una conmemoración del rapto de Perséfone, hija de Deméter; sin embargo, lo cierto es que fueron las leyendas las que surgieron a partir de un ritual cuyo significado original ya se había perdido.
        </p>
        <hr class="separador-nota">
        <p class="nota-autor">
            <b>Autor:</b> Nanna.
        </p>
        `,
        coincide: (diaciclo, totalDias, faseName, mesidx) => diaciclo >=11 && diaciclo <=13 && mesidx === 3
    },
    {
        nombre: "Apatouria",
        descripcion: `      
        <p>
            Parke dice que la familia de festividades de Apaturias no tenía una fecha exacta debido a que las festividades eran manejadas por las autoridades centrales, pero que varias <i>fratrías</i> (que eran el intermedio entre un clan familiar y una tribu) de Atenas. Estas fratrías determinaban cuándo comenzaba la apatouria en cualquier momento del mes de Pianepsión.
        </p><p>
            El festival duraba tres días, el primero siendo la <i>Dorpia</i>, un evento de cena, donde hombres venían de alrededor de Ática para realizar la comida tradicional local. 
        </p><p>
            El segundo día era el <i>Anarrhysis</i>; un evento de sacrificio. La palabra anarrhysis es la acción de echar hacia atrás el cuello de la víctima para degollarla.
        </p><p>
            El tercer día era <i>Koureotis</i>. En este día, los niños nacidos entre la apatouria anterior y esta eran presentados a la fratría. Los niños, posteriormente, se presentarían frente a la fratría una vez habían llegado a la adultez y era ahí donde se les daba un corte de cabello. En ambas ocasiones, el padre presentaría un sacrificio a la fratría. 
        </p><p>
            De acuerdo a los registros de una de las fraternidades, también se presentaban pasteles planos, vino y un pago de dracmas de plata para el sacerdote. Presuntamente, la carne que no se presentaba con el sacerdote era posteriormente llevada a la cena de las familias. 
        </p><p>
            Hombres recién casados también hacían un sacrificio en la apatouria. Se desconoce si las niñas o esposas de estos hombres asistían a estos eventos.
        </p><p>
            Las deidades a las que se les daba honores en este evento eran Zeus <b>Phratrios</b>, Atenea <b>Phratria</b> y Dionisio, por el cual se emborrachaban, dando como resultado el cuarto día del festival, llamado <i>Ephibda</i> ("El día después", bajo el contexto de una resaca). 
            El atractivo de este festival hoy en día radica en que constituye la ocasión ideal para celebrar nacimientos, matrimonios, compromisos, graduaciones y alistamientos recientes. Es el momento perfecto para una reunión familiar organizada en torno a hitos importantes de la familia.
        </p>
        <hr class="separador-nota">
        <p class="nota-autor">
            <b>Autor:</b> Nanna.
        </p>
        `,
        coincide: (diaciclo, totalDias, faseName, mesidx) => diaciclo === 13 && mesidx === 3
    },
    {
        nombre: "Khalkeia",
        descripcion: `      
        <p>
            La <i>Khalkeia</i> es una festividad en honor a Atenea <b>Ergane</b> y Hefesto, dioses asociadas principalmente a los artesanos para la época clásica. 
        </p><p>
            Pocas deidades estaban tan estrechamente vinculadas en Atenas como Atenea y Hefesto; no solo eran considerados los padres de Erictonio, el primer rey de Atenas, sino que Atenea también recibía en la ciudad el título de <b>Hephaisteia</b> ("Atenea de Hefesto"). 
        </p><p>
            Al parecer, la celebración incluía una procesión de trabajadores que portaban cestas de grano como ofrenda, así como sacrificios de animales. 
        </p><p>
            Según Parke, los talleres permanecieran cerrados ese día, siendo una versión de lo que nosotros conocemos como el Día del Trabajo. Asimismo, en esta época se preparaba el telar para tejer el <i>peplo</i> que se ofrecería a Atenea durante las Panateneas, nueve meses más tarde, en el mes de Hekatombaion.
        </p>
        <hr class="separador-nota">
        <p class="nota-autor">
            <b>Autor:</b> Nanna.
        </p>
        `,
        coincide: (diaciclo, totalDias, faseName, mesidx) => diaciclo === 29 && mesidx === 3
    },
    //--------------------------------------Maimakterion //4
    //--------------------------------------Poseideon //5
     //--------------------------------------Poseideon2 
    //--------------------------------------Gamelion //6
    //--------------------------------------Anthesterion //7
    //--------------------------------------Elaphebolion //8
    //--------------------------------------Mounykhion //9
    //--------------------------------------Thargelion //10
     //-------------------------------------Skirophorion //11
    {
        nombre: "Arrephoria",
        descripcion: `
        <p>
            La Arreforia es una celebración dedicada a Atenea <b>Ergane</b>. Antiguamente, eran seleccionadas dos muchachas en blanco, las cuales cargaban con "cosas innombrables" (posiblemente telares) que se habían comenzado a tejer para Hefesto meses atrás; y eran llevadas al jardín sagrado (Conocido como <i>temenos</i>) de Afrodite.
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
        <p>La <i>Esciraforia</i> (Esquiraforia/Esquira) es un festival dedicado a Demetra, Perséfone, Helios, Poseidón <b>Pater</b> y Atenea <b>Skiras</b> para marcar la disolución del año viejo y proteger la tierra del calor veraniego.</p>
        <p>Esciroforión era el mes de la última cosecha de grano y, por lo tanto, otro importante festival agrícola tenía lugar durante este mes. Se sabe que era parte de un ritual que conmemora la victoria de Atenea sobre Poseidón en favor de la ciudad de Atenas (festividad necesaria para la <i>Panateneas</i>, el siguiente mes). Dado que el sacerdote de Helios acompaña en procesión a la sacerdotisa de Atenea y a otras mujeres al lugar sagrado para el ritual, es probable que el festival esté relacionado con asegurar las condiciones climáticas para la cosecha.</p>
        <p>Las mujeres abandonaban sus hogares, realizaban ayuno, comían ajo juntas y celebraban ritos alejadas de los hombres; incluía una carrera hasta un santuario de Dioniso en la que jóvenes llevaban ramas de vid.</p>
            <hr class="separador-nota">
            <p class="nota-autor">
                <b>Autor:</b> Nanna. <br><b>Editor:</b> Max León.
            </p>
        `,
        coincide: (diaciclo, totalDias, faseName, mesidx) => diaciclo === 12 && mesidx === 11
    },
    {
        nombre:"Bouphonia and Dipoleia",
        descripcion: `
        <p>Este festival se celebraba en honor a Zeus <b>Polieus</b>, e implicaba el sacrificio de un buey por la profanación del altar de Zeus en la Acrópolis, según Pausanias. Al parecer, el festival era antiguo incluso en la época clásica. </p>
        <p>Su rito central era el sacrificio de un buey, un ritual raro y controvertido en la religión griega antigua porque implicaba el sacrificio de un animal que generalmente se consideraba demasiado valioso para tal uso, por lo que matar uno era considerado asesinato. El rito parece expresar la idea de que el asesinato conlleva culpa incluso cuando se comete por las mejores razones.</p>
        <hr class="separador-nota">
            <p class="nota-autor">
                Para el ritual se hacía un juicio. El culpable era <i>el hacha</i> con el que se había sacrificado al buey, culminando con que arrojaban el hacha al mar.
            </p>
            <p class="nota-autor">
                <b>Autor:</b> Nanna. <br><b>Editor:</b> Max León.
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