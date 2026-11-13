import './style.css';
import { TERRAKION_GUIDE } from './data/terrakionGuide.js';

const getSpriteUrls = (slug) => ({
    anim: `https://img.pokemondb.net/sprites/black-white/anim/normal/${slug}.gif`,
    static: `https://img.pokemondb.net/sprites/black-white/normal/${slug}.png`
});

window.handleSpriteError = function(img) {
    if (img.dataset.fallbackTried === 'true') {
        img.style.display = 'none';
        return;
    }
    img.dataset.fallbackTried = 'true';
    if (img.dataset.fallback) {
        img.src = img.dataset.fallback;
    }
};

function createSpriteMarkup(slug, label, sizeClasses = 'w-12 h-12 sm:w-14 sm:h-14') {
    if (!slug) return '';
    const { anim, static: fallback } = getSpriteUrls(slug);
    return `
        <img
            src="${anim}"
            data-fallback="${fallback}"
            alt="${label}"
            title="${label}"
            class="poke-sprite ${sizeClasses} shrink-0"
            loading="lazy"
            onerror="handleSpriteError(this)"
        >
    `;
}

const TYPE_PILL_CLASSES = {
    fire: 'bg-orange-500/12 text-orange-600 dark:text-orange-400 border-orange-500/30',
    water: 'bg-sky-500/12 text-sky-600 dark:text-sky-400 border-sky-500/30',
    grass: 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    fighting: 'bg-rose-500/12 text-rose-600 dark:text-rose-400 border-rose-500/30',
    psychic: 'bg-fuchsia-500/12 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-500/30',
    ground: 'bg-amber-600/12 text-amber-700 dark:text-amber-400 border-amber-600/30',
    flying: 'bg-indigo-500/12 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
    steel: 'bg-slate-500/12 text-slate-600 dark:text-slate-300 border-slate-500/30',
    ghost: 'bg-purple-500/12 text-purple-600 dark:text-purple-400 border-purple-500/30',
    dark: 'bg-zinc-700/15 text-zinc-700 dark:text-zinc-300 border-zinc-500/35',
    normal: 'bg-stone-500/12 text-stone-600 dark:text-stone-300 border-stone-500/30'
};

function renderPokepasteSection() {
    const grid = document.getElementById('pokepaste-grid');
    grid.innerHTML = TERRAKION_GUIDE.pokepastes.map(paste => `
        <div class="card-surface rounded-2xl p-5 flex flex-col justify-between hover:border-terracotta-500/60">
            <div class="space-y-3">
                <div class="flex items-center justify-between gap-2">
                    <span class="px-2.5 py-1 rounded-lg text-xs font-extrabold border ${paste.badgeClass}">
                        ${paste.player}
                    </span>
                    <span class="text-[11px] font-mono font-medium" style="color: var(--text-muted);">
                        ${paste.role}
                    </span>
                </div>
                <div class="px-3 py-2 rounded-xl elevated-surface font-mono text-xs truncate" style="color: var(--text-secondary);">
                    ${paste.url}
                </div>
            </div>

            <div class="flex items-center gap-2 mt-4">
                <a
                    href="${paste.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 py-2.5 px-3 rounded-xl bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                    <i class="fa-solid fa-arrow-up-right-from-square text-[11px]"></i>
                    <span>Abrir Pokepaste</span>
                </a>
                <button
                    type="button"
                    onclick="copyText('${paste.url}', 'Enlace de ${paste.player} copiado')"
                    class="p-2.5 rounded-xl elevated-surface hover:border-terracotta-500 transition-colors cursor-pointer"
                    style="color: var(--text-secondary);"
                    title="Copiar URL"
                >
                    <i class="fa-regular fa-copy"></i>
                </button>
            </div>
        </div>
    `).join('');
}

let activeFilter = 'all';

function renderTurnsTable() {
    const tbody = document.getElementById('turns-tbody');
    const completedTurns = JSON.parse(localStorage.getItem('terrakion_done_turns') || '[]');

    const renderActionCell = (action, playerNum) => {
        if (action.isKO) {
            return `
                <td class="py-3.5 px-4 border-r last:border-r-0 transition-opacity" data-col="${playerNum}" style="border-color: var(--border-color);">
                    <div class="flex items-center justify-center sm:justify-start">
                        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-extrabold tracking-widest uppercase bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/35 shadow-sm" title="KO">
                            <i class="fa-solid fa-skull"></i> KO
                        </span>
                    </div>
                </td>
            `;
        }

        const pillStyle = TYPE_PILL_CLASSES[action.type] || TYPE_PILL_CLASSES.normal;

        return `
            <td class="py-3.5 px-4 border-r last:border-r-0 transition-opacity" data-col="${playerNum}" style="border-color: var(--border-color);">
                <div class="flex items-center gap-3">
                    <div class="sprite-stage" title="${action.pokemon}">
                        ${createSpriteMarkup(action.slug, action.pokemon, 'w-12 h-12 sm:w-14 sm:h-14')}
                    </div>
                    <div class="flex flex-col gap-1 min-w-0">
                        <span class="text-[11px] font-mono font-semibold uppercase tracking-wide" style="color: var(--text-muted);">
                            ${action.pokemon}
                        </span>
                        <span class="move-pill inline-flex items-center px-3 py-1 rounded-xl text-xs sm:text-sm font-bold border w-fit ${pillStyle}">
                            ${action.move}
                        </span>
                    </div>
                </div>
            </td>
        `;
    };

    const rowsHtml = TERRAKION_GUIDE.turns.map(row => {
        const isDone = completedTurns.includes(row.turn);

        return `
            <tr class="hover:bg-terracotta-500/[0.03] transition-colors ${isDone ? 'turn-done' : ''}" data-turn="${row.turn}">
                <td class="py-3 px-3 text-center border-r font-mono select-none" style="border-color: var(--border-color);">
                    <label class="inline-flex flex-col items-center justify-center gap-1.5 cursor-pointer group" title="Marcar Turno ${row.turn}">
                        <input
                            type="checkbox"
                            class="sr-only"
                            ${isDone ? 'checked' : ''}
                            onchange="toggleTurnDone(${row.turn})"
                        >
                        <span class="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm border transition-all ${
                            isDone
                                ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                                : 'bg-terracotta-500/12 text-terracotta-600 dark:text-terracotta-400 border-terracotta-500/25 group-hover:bg-terracotta-600 group-hover:text-white'
                        }">
                            ${isDone ? '<i class="fa-solid fa-check text-xs"></i>' : `T${row.turn}`}
                        </span>
                        <span class="text-[10px] font-semibold" style="color: var(--text-muted);">
                            ${isDone ? 'Listo' : 'Pendiente'}
                        </span>
                    </label>
                </td>
                ${renderActionCell(row.p1, 1)}
                ${renderActionCell(row.p2, 2)}
                ${renderActionCell(row.p3, 3)}
                ${renderActionCell(row.p4, 4)}
            </tr>
        `;
    }).join('');

    const finishRowHtml = `
        <tr class="bg-gradient-to-r from-terracotta-500/15 via-amber-500/15 to-emerald-500/15 border-t-2" style="border-color: var(--accent);">
            <td colspan="5" class="py-4 px-6 text-center">
                <div class="inline-flex items-center justify-center gap-3 px-6 py-2 rounded-2xl bg-terracotta-600 text-white font-mono text-base sm:text-lg font-extrabold tracking-[0.25em] uppercase shadow-md">
                    <i class="fa-solid fa-trophy text-amber-300"></i>
                    <span>FIN</span>
                    <i class="fa-solid fa-trophy text-amber-300"></i>
                </div>
            </td>
        </tr>
    `;

    tbody.innerHTML = rowsHtml + finishRowHtml;
    applyColumnFilter(activeFilter);
}

function applyColumnFilter(filterVal) {
    activeFilter = filterVal;

    document.querySelectorAll('#player-filter-group .filter-btn').forEach(btn => {
        const selected = btn.dataset.filter === filterVal;
        if (selected) {
            btn.className = 'filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-terracotta-600 text-white shadow-sm transition-all cursor-pointer';
            btn.style.color = '';
        } else {
            btn.className = 'filter-btn px-3 py-1.5 rounded-xl text-xs font-semibold hover:bg-terracotta-500/10 transition-all cursor-pointer';
            btn.style.color = 'var(--text-secondary)';
        }
    });

    document.querySelectorAll('#raid-turns-table [data-col]').forEach(cell => {
        const colId = cell.dataset.col;
        cell.classList.remove('col-dimmed', 'col-focused');
        if (filterVal !== 'all') {
            if (colId === filterVal) {
                cell.classList.add('col-focused');
            } else {
                cell.classList.add('col-dimmed');
            }
        }
    });
}

window.toggleTurnDone = function(turnNum) {
    const stored = JSON.parse(localStorage.getItem('terrakion_done_turns') || '[]');
    const idx = stored.indexOf(turnNum);
    if (idx > -1) {
        stored.splice(idx, 1);
    } else {
        stored.push(turnNum);
    }
    localStorage.setItem('terrakion_done_turns', JSON.stringify(stored));
    renderTurnsTable();
};

function triggerToast(message) {
    const container = document.getElementById('toast-container');
    const el = document.createElement('div');
    el.className = 'pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-xl shadow-xl text-xs font-bold bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 border border-terracotta-500/40 transition-all duration-300 translate-y-3 opacity-0';
    el.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-500"></i> <span>${message}</span>`;
    container.appendChild(el);

    requestAnimationFrame(() => el.classList.remove('translate-y-3', 'opacity-0'));
    setTimeout(() => {
        el.classList.add('translate-y-3', 'opacity-0');
        setTimeout(() => el.remove(), 300);
    }, 2500);
}

window.copyText = function(text, feedbackMsg) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
        document.execCommand('copy');
        triggerToast(feedbackMsg);
    } catch (e) {
        triggerToast('No se pudo copiar');
    }
    document.body.removeChild(textarea);
};

function setupTheme() {
    const root = document.documentElement;
    const toggleBtn = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    const label = document.getElementById('theme-text');

    const setTheme = (mode) => {
        root.setAttribute('data-theme', mode);
        localStorage.setItem('terrakion_ui_theme', mode);
        if (mode === 'dark') {
            icon.className = 'fa-solid fa-sun text-amber-400 text-sm';
            label.textContent = 'Tema Claro';
        } else {
            icon.className = 'fa-solid fa-moon text-terracotta-600 text-sm';
            label.textContent = 'Tema Oscuro';
        }
    };

    const saved = localStorage.getItem('terrakion_ui_theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(saved);

    toggleBtn.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setTheme(next);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupTheme();
    renderPokepasteSection();
    renderTurnsTable();

    document.querySelectorAll('#player-filter-group .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => applyColumnFilter(btn.dataset.filter));
    });

    document.getElementById('reset-progress-btn').addEventListener('click', () => {
        localStorage.removeItem('terrakion_done_turns');
        renderTurnsTable();
        triggerToast('Progreso reiniciado');
    });
});
