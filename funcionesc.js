// Referencias al DOM: guardará los elementos seleccionados del HTML
let DOM = {};

/*
 Captura todos los elementos HTML necesarios por su ID 
 y los almacena en el objeto 'DOM' para evitar consultas repetidas.
 */
function initDOM() {
    DOM = {
        monthTitle: document.getElementById('monthTitle'),
        daysGrid: document.getElementById('daysGrid'),
        daysCountEl: document.getElementById('daysCount'),
        monthNumberEl: document.getElementById('monthNumber'),
        newMoonDayEl: document.getElementById('newMoonDay'),
        phaseIcon: document.getElementById('phaseIcon'),
        phaseName: document.getElementById('phaseName'),
        selectedDate: document.getElementById('selectedDate'),
        selectedPhaseIcon: document.getElementById('selectedPhaseIcon'),
        selectedPhaseName: document.getElementById('selectedPhaseName'),
        selectedLunarDay: document.getElementById('selectedLunarDay')
    };
}

// Constantes globales del calendario
const MONTH_NAMES = ["Hekatombaion","Metageitnion","Boedromion","Pyanepsion","Maimakterion","Poseideon","Gamelion","Anthesterion","Elaphebolion","Mounichion","Thargelion","Skirophorion"];
const FECHA_BASE = new Date(2026, 6, 15); // 15 de Julio de 2026 (Punto de referencia base)
const CICLO_LUNAR = 29.53058867; // Duración promedio de un mes lunar en días

// Variables de estado global
let currentMonthIdx = 0;
let currentYear = 1;     
let selectedDate = null;  

//Calcula el día exacto dentro del ciclo lunar (0 a 29.53) para una fecha dada.

function getLunarDay(date) {
    const tempDate = new Date(date);

    // Diferencia en días enteros/decimales
    const diffDays = (tempDate - FECHA_BASE) / (1000 * 60 * 60 * 24);
    let lunarDay = diffDays % CICLO_LUNAR;
    if (lunarDay < 0) lunarDay += CICLO_LUNAR;
    return lunarDay;
}

function FaseLunar(lunarday) {
    const fase = lunarday / CICLO_LUNAR; // Porcentaje de avance del ciclo (0.0 a 1.0)
    if (fase >= 0.97) return { name: 'New Moon', icon: '🌑' };
    if (fase < 0.22) return { name: 'Waxing Crescent', icon: '🌒' };
    if (fase < 0.28) return { name: 'First Quarter', icon: '🌓' };
    if (fase < 0.47) return { name: 'Waxing Gibbous', icon: '🌔' };
    if (fase < 0.50) return { name: 'Full Moon', icon: '🌕' };
    if (fase < 0.70) return { name: 'Waning Gibbous', icon: '🌖' };
    if (fase < 0.74) return { name: 'Third Quarter', icon: '🌗' };
    if (fase < 0.95) return { name: 'Waning Crescent', icon: '🌘' };
    return { name: 'New Moon', icon: '🌑' };
}

 // Calcula la fecha estimada en la que ocurrirá la siguiente Luna Nueva

function ProxNew(date) {
    const diffDays = (date - FECHA_BASE) / (1000 * 60 * 60 * 24);
    let lunarDay = diffDays % CICLO_LUNAR;
    if (lunarDay < 0) lunarDay += CICLO_LUNAR;
    
    let daysUntilNewMoon = lunarDay > 0 ? CICLO_LUNAR - lunarDay : 0;
    
    const nextNewMoon = new Date(date);
    nextNewMoon.setDate(nextNewMoon.getDate() + Math.ceil(daysUntilNewMoon));
    return nextNewMoon;
}

/// Calcula la fecha real gregoriana en la que inicia un determinado año y mes del calendario ático partiendo de la fecha base 

function InicioDelMesGregoriano(year, mesidx) {
    const totalMeses = (year - 1) * 12 + mesidx;
    const totalDays = Math.round(totalMeses * CICLO_LUNAR);
    const startDate = new Date(FECHA_BASE);
    startDate.setDate(startDate.getDate() + totalDays);
    return startDate;
}

  // Calcula la duración exacta de un mes específico (29 o 30 días)
function Mes(year, mesidx) {
    const inicioActual = InicioDelMesGregoriano(year, mesidx);
    
    // Determinamos el año y mes del ciclo siguiente
    let nextYear = year;
    let nextMes = mesidx + 1;
    if (nextMes > 11) {
        nextMes = 0;
        nextYear++;
    }
    const inicioSiguiente = InicioDelMesGregoriano(nextYear, nextMes);
    
    // La diferencia en días entre ambos inicios es la duración exacta del mes (29 o 30 días)
    const diffTime = inicioSiguiente - inicioActual;
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

/*Esta mierda lo que hace es que si yo le mando una información que está en el formato 
del calendario ático, lo regresa al gregoriano*/
function FechaDelDiaNormal(year, mesidx, day) {
    const inicio = InicioDelMesGregoriano(year, mesidx);
    const date = new Date(inicio);
    date.setDate(inicio.getDate() + day - 1);
    return date;
}
//Actualiza el panel de arriba el cosito de la luna
function Update(date, opcion = null) {
    if (!date) {
        if (DOM.selectedDate) DOM.selectedDate.textContent = '';
        if (DOM.selectedPhaseIcon) DOM.selectedPhaseIcon.textContent = '⭐';
        if (DOM.selectedPhaseName) DOM.selectedPhaseName.textContent = 'Select a date';
        if (DOM.selectedLunarDay) DOM.selectedLunarDay.textContent = '';
    } else {
        const RealDate = new Date(); // La fecha real del dispositivo
        
        let effectiveToday = new Date(RealDate);
        if (RealDate.getHours() >= 19) {
            effectiveToday.setDate(effectiveToday.getDate() + 1);
        }
        // Comparamos si la casilla seleccionada es la casilla marcada como "hoy"
        const esMismoDiaAticoQuestion = date.toDateString() === effectiveToday.toDateString();
        
        let fechadeCesar;

        if (esMismoDiaAticoQuestion) {
            fechadeCesar = RealDate; 
        } else if (opcion && opcion instanceof Date && !isNaN(opcion)) {
            fechadeCesar = opcion;
        } else {
            fechadeCesar = date;
        }

        const lunarDaySeleccionado = getLunarDay(date);
        const fase = FaseLunar(lunarDaySeleccionado);
        const diaciclo = Math.floor(lunarDaySeleccionado) + 1;

        const options = {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        };

        const textoFechaReal = fechadeCesar.toLocaleDateString(undefined, options);
        if (DOM.selectedDate) DOM.selectedDate.textContent = textoFechaReal;
        if (DOM.selectedPhaseIcon) DOM.selectedPhaseIcon.textContent = fase.icon;
        if (DOM.selectedPhaseName) DOM.selectedPhaseName.textContent = fase.name;
        if (DOM.selectedLunarDay) DOM.selectedLunarDay.textContent = diaciclo;
    }
}
/*
    Dibuja la cuadrícula del calendario en el HTML (`daysGrid`) e inserta celdas vacías de desfase, 
    asigna los días, detecta si es el día actual, si es luna nueva o si está seleccionado, y construye las celdas que se pueden tocar.
 */
function renderCalendar() {
    if (!DOM.daysGrid) {
        console.error('DOM no inicializado.');
        return;
    }
    const fechainicio = InicioDelMesGregoriano(currentYear, currentMonthIdx);
    const dias_en_el_Mes = Mes(currentYear, currentMonthIdx);
    const primer_dia_semana = fechainicio.getDay();
    const today = new Date();
    const todayStr = today.toDateString();
    if (DOM.monthTitle) DOM.monthTitle.textContent = MONTH_NAMES[currentMonthIdx];
    if (DOM.monthNumberEl) DOM.monthNumberEl.textContent = currentMonthIdx + 1;
    if (DOM.daysCountEl) DOM.daysCountEl.textContent = dias_en_el_Mes;

    if (DOM.newMoonDayEl) DOM.newMoonDayEl.textContent = 1;

    const lunarday = getLunarDay(fechainicio);
    const fase = FaseLunar(lunarday);

    if (DOM.phaseIcon) DOM.phaseIcon.textContent = fase.icon;
    if (DOM.phaseName) DOM.phaseName.textContent = fase.name;
    
    /*if (!selectedDate) {
        Update(null,null);
    }*/

    let html = '';
    // Agrega casillas transparentes/vacías según el día de la semana en que inicia el mes
    for (let i = 0; i < primer_dia_semana; i++) {
        html += `<div class="day-cell empty"></div>`;
    }
    
    // Genera las celdas de días válidos del mes
    for (let day = 1; day <= dias_en_el_Mes; day++) {
        const currentDate = FechaDelDiaNormal(currentYear, currentMonthIdx, day);

        // Calcula el día lunar para esta celda
        const dayLunar = getLunarDay(currentDate);
        const dayPhase = FaseLunar(dayLunar);
        const isNewMoon = dayPhase.name === 'New Moon';

        // Compara el día del ciclo lunar de 'today' con el de la casilla
        const today = new Date();
        let effectiveToday = new Date(today);
        //si "hoy" en el calendario normal es mayor que las 7 pm entonces pasa al otro día.
        if (today.getHours() >= 19) {
            effectiveToday.setDate(effectiveToday.getDate() + 1);
        }
        const todayLunar = getLunarDay(today);
        const isToday = currentDate.toDateString() === effectiveToday.toDateString();
        const isSelected = selectedDate && currentDate.toDateString() === selectedDate.toDateString();


        let classes = 'day-cell';
        if (isToday) classes += ' today';
        if (isNewMoon) classes += ' new-moon';
        if (isSelected) classes += ' selected';

        html += `
            <div class="${classes}" data-day="${day}" data-date="${currentDate.toISOString()}" title="Fase: ${dayPhase.name} ${dayPhase.icon}">
                ${day}
                <span class="mini-moon">${dayPhase.icon}</span>
            </div>
        `;
    }
    DOM.daysGrid.innerHTML = html;
}

function DiaSeleccionado(dia) {
    const date = FechaDelDiaNormal(currentYear, currentMonthIdx, dia);
    selectedDate = date;
    let effeciveToday = new Date(dia);

    Update(selectedDate);
    renderCalendar();
    return selectedDate;
}

function MesAnt() {
    if (currentMonthIdx === 0) {
        currentMonthIdx = 11;
        currentYear--;
    } else {
        currentMonthIdx--;
    }
    selectedDate = null;
    renderCalendar();
    const fechainicio = InicioDelMesGregoriano(currentYear, currentMonthIdx);
    /*selectedDate = new Date(fechainicio);*/
    Update(selectedDate);
}

function MesSig() {
    if (currentMonthIdx === 11) {
        currentMonthIdx = 0;
        currentYear++;
    } else {
        currentMonthIdx++;
    }
    selectedDate = null;
    renderCalendar();
    const fechainicio = InicioDelMesGregoriano(currentYear, currentMonthIdx);
    /*selectedDate = new Date(fechainicio);*/
    Update(selectedDate);
}

/* Inicializa las referencias del DOM.
   Encuentra en qué mes/año ático cae la fecha real de hoy.
   Hace funcionar los botones con sus eventos, a las casillas del grid y a las teclas de dirección.
   Renderiza la interfaz por primera vez.
 */
function initCalendar() {
    initDOM();
    
    const today = new Date();
    let found = false;
    let effectiveToday = new Date(today);
    if (today.getHours() >= 19) {
        effectiveToday.setDate(effectiveToday.getDate()+1);
    }
    // Búsqueda iterativa para sincronizar la fecha actual del sistema con el ciclo ático
    for (let year = 1; year < 100 && !found; year++) {
        for (let mes = 0; mes < 12 && !found; mes++) {
            const fechainicial = InicioDelMesGregoriano(year, mes);
            const fechafinal = new Date(fechainicial);
            fechafinal.setDate(fechafinal.getDate() + Mes(year, mes) - 1);
            if (effectiveToday >= fechainicial && effectiveToday <= fechafinal) {
                fechafinal.setDate(fechafinal.getDate() + Mes(year, mes) - 1);
                const diffTime = effectiveToday - fechainicial;
                const dayNum = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
                currentYear = year;
                currentMonthIdx = mes;
                selectedDate = FechaDelDiaNormal(currentYear, currentMonthIdx, dayNum);
                found = true;
            }
        }
    }

    // Si la fecha actual sobrepasa el rango de 100 años del bucle, vuelve al inicio
    if (!found) {
        currentYear = 1;
        currentMonthIdx = 0;
        const fechainicio = InicioDelMesGregoriano(1, 0);
        selectedDate = new Date(fechainicio);
    }

    // Escuchadores de eventos para los botones e interacciones de usuario
    const prevBtn = document.getElementById('prevMonth');
    const nextBtn = document.getElementById('nextMonth');
    
    if (prevBtn) prevBtn.addEventListener('click', MesAnt);
    if (nextBtn) nextBtn.addEventListener('click', MesSig);
    if (DOM.daysGrid) {
        DOM.daysGrid.addEventListener('click', function(e) {
            const cell = e.target.closest('.day-cell');
            if (cell && !cell.classList.contains('empty')) {
                const day = parseInt(cell.dataset.day);
                DiaSeleccionado(day);
            }
        });
    }

    // Permite cambiar de mes con las flechas del teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') MesAnt();
        if (e.key === 'ArrowRight') MesSig();
    });

    renderCalendar();
    Update(selectedDate,today);
}

document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('Close');
    const secondaryContainer = document.querySelector('.secondary-container');

    closeBtn.addEventListener('click', () => {
        secondaryContainer.classList.toggle('collapsed');
        if (secondaryContainer.classList.contains('collapsed')) {
            closeBtn.textContent = '⏷'; 
        } else {
            closeBtn.textContent = '≡'; 
        }
    });
});
window.MesAnt = MesAnt;
window.MesSig = MesSig;
window.renderCalendar = renderCalendar;
window.Update = Update;
window.initCalendar = initCalendar;
Object.defineProperty(window, 'selectedDate', { get: () => selectedDate });
Object.defineProperty(window, 'currentYear', { get: () => currentYear });
