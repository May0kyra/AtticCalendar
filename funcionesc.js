//Referencias al DOM
let DOM = {};
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

const MONTH_NAMES = ["Hekatombaion","Metageitnion","Boedromion","Pyanepsion","Maimakterion","Poseideon","Gamelion","Anthesterion","Elaphebolion","Mounichion","Thargelion","Skirophorion"];
const FECHA_BASE = new Date(2026, 6, 16);
const CICLO_LUNAR = 29.53058867;

//Estados
let currentMonthIdx = 0;
let currentYear = 1;
let selectedDate = null;

function getLunarDay(date) {
    const tempDate = new Date(date);

    // Días transcurridos tras el 15 de Julio de 2026
    const diffDays = (tempDate - FECHA_BASE) / (1000 * 60 * 60 * 24);
    let lunarDay = diffDays % CICLO_LUNAR;
    if (lunarDay < 0) lunarDay += CICLO_LUNAR;

    // Si ya pasaron las 18:00 hrs, en el calendario ático ya es el siguiente día
    if (tempDate.getHours() >= 18) {
        lunarDay += 1;
    }

    return lunarDay;
}
//Días y Fases
function FaseLunar(lunarday) {
    const fase = lunarday / CICLO_LUNAR;
    if (fase >= 0.97) return { name: 'New Moon', icon: '🌑' };
    if (fase < 0.22) return { name: 'Waxing Crescent', icon: '🌒' };
    if (fase < 0.28) return { name: 'First Quarter', icon: '🌓' };
    if (fase < 0.47) return { name: 'Waxing Gibbous', icon: '🌔' };
    if (fase < 0.53) return { name: 'Full Moon', icon: '🌕' };
    if (fase < 0.72) return { name: 'Waning Gibbous', icon: '🌖' };
    if (fase < 0.78) return { name: 'Third Quarter', icon: '🌗' };
    if (fase < 0.95) return { name: 'Waning Crescent', icon: '🌘' };
    return { name: 'New Moon', icon: '🌑' };
}

function ProxNew(date) {
    const diffDays = (date - FECHA_BASE) / (1000 * 60 * 60 * 24);
    let lunarDay = diffDays % CICLO_LUNAR;
    if (lunarDay < 0) lunarDay += CICLO_LUNAR;
    
    let daysUntilNewMoon = lunarDay > 0 ? CICLO_LUNAR - lunarDay : 0;
    
    const nextNewMoon = new Date(date);
    nextNewMoon.setDate(nextNewMoon.getDate() + Math.ceil(daysUntilNewMoon));
    return nextNewMoon;
}

// Calcula el inicio exacto del mes (Año, Mes)
function InicioMes(year, mesidx) {
    const totalMeses = (year - 1) * 12 + mesidx;
    const totalDays = Math.round(totalMeses * CICLO_LUNAR);
    
    const startDate = new Date(FECHA_BASE);
    startDate.setDate(startDate.getDate() + totalDays);
    return startDate;
}

// Calcula los días de un mes restando la fecha de inicio del SIGUIENTE mes
function Mes(year, mesidx) {
    const inicioActual = InicioMes(year, mesidx);
    
    // Determinamos el año y mes del ciclo siguiente
    let nextYear = year;
    let nextMes = mesidx + 1;
    if (nextMes > 11) {
        nextMes = 0;
        nextYear++;
    }
    
    const inicioSiguiente = InicioMes(nextYear, nextMes);
    
    // La diferencia en días entre ambos inicios es la duración exacto del mes (29 o 30 días)
    const diffTime = inicioSiguiente - inicioActual;
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
}

//Obtener Fecha
function fechadia(year, mesidx, day) {
    const inicio = InicioMes(year, mesidx);
    const date = new Date(inicio);
    date.setDate(inicio.getDate() + day - 1);
    return date;
}

//Actualizar info
function Update(date) {
    if (!date) {
        if (DOM.selectedDate) DOM.selectedDate.textContent = '';
        if (DOM.selectedPhaseIcon) DOM.selectedPhaseIcon.textContent = '🌒';
        if (DOM.selectedPhaseName) DOM.selectedPhaseName.textContent = 'Luna';
        if (DOM.selectedLunarDay) DOM.selectedLunarDay.textContent = '1';
        return;
    }

    const lunarDay = getLunarDay(date);
    const fase = FaseLunar(lunarDay);
    const diaciclo = Math.floor(lunarDay) + 1;

    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    const iniciodia = date.toLocaleDateString(undefined, options);

    if (DOM.selectedDate) DOM.selectedDate.textContent = iniciodia;
    if (DOM.selectedPhaseIcon) DOM.selectedPhaseIcon.textContent = fase.icon;
    if (DOM.selectedPhaseName) DOM.selectedPhaseName.textContent = fase.name;
    if (DOM.selectedLunarDay) DOM.selectedLunarDay.textContent = diaciclo;
}

//Render
function renderCalendar() {
    if (!DOM.daysGrid) {
        console.error('DOM no inicializado.');
        return;
    }

    const fechainicio = InicioMes(currentYear, currentMonthIdx);
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

    if (!selectedDate) {
        selectedDate = new Date(fechainicio);
        Update(selectedDate);
    }

    let html = '';
    for (let i = 0; i < primer_dia_semana; i++) {
        html += `<div class="day-cell empty"></div>`;
    }

    for (let day = 1; day <= dias_en_el_Mes; day++) {
        const currentDate = new Date(fechainicio);
        currentDate.setDate(fechainicio.getDate() + day - 1);

        // Calculamos el día lunar para esta celda
        const dayLunar = getLunarDay(currentDate);
        const dayPhase = FaseLunar(dayLunar);
        const isNewMoon = dayPhase.name === 'New Moon';

        // Comparamos el día del ciclo lunar de 'today' con el de la casilla
        const todayLunar = getLunarDay(today);
        const isToday = Math.floor(dayLunar) === Math.floor(todayLunar) && 
                        currentDate.getMonth() === today.getMonth() &&
                        currentDate.getFullYear() === today.getFullYear();

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

//Seleccionar día
function DiaSeleccionado(dia) {
    const fechainicio = InicioMes(currentYear, currentMonthIdx);
    const date = new Date(fechainicio);
    date.setDate(fechainicio.getDate() + dia - 1);
    selectedDate = date;
    Update(selectedDate);
    renderCalendar();
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
    const fechainicio = InicioMes(currentYear, currentMonthIdx);
    selectedDate = new Date(fechainicio);
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
    const fechainicio = InicioMes(currentYear, currentMonthIdx);
    selectedDate = new Date(fechainicio);
    Update(selectedDate);
}

//Inicialización
function initCalendar() {
    initDOM();
    
    const today = new Date();
    let found = false;

    for (let year = 1; year < 100 && !found; year++) {
        for (let mes = 0; mes < 12 && !found; mes++) {
            const fechainicial = InicioMes(year, mes);
            const fechafinal = new Date(fechainicial);
            fechafinal.setDate(fechafinal.getDate() + Mes(year, mes) - 1);

            if (today >= fechainicial && today <= fechafinal) {
                currentYear = year;
                currentMonthIdx = mes;
                selectedDate = today;
                found = true;
            }
        }
    }

    if (!found) {
        currentYear = 1;
        currentMonthIdx = 0;
        const fechainicio = InicioMes(1, 0);
        selectedDate = new Date(fechainicio);
    }

    //Eventos
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

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') MesAnt();
        if (e.key === 'ArrowRight') MesSig();
    });

    renderCalendar();
    Update(selectedDate);
}

// Exportar funciones y getters para window si se requiere usarlos desde fuera
window.MesAnt = MesAnt;
window.MesSig = MesSig;
window.renderCalendar = renderCalendar;
window.Update = Update;
window.initCalendar = initCalendar;
Object.defineProperty(window, 'selectedDate', { get: () => selectedDate });
Object.defineProperty(window, 'currentYear', { get: () => currentYear });