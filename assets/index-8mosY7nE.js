(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();const c={pokepastes:[{player:"Player 1",role:"Soporte Pantallas & Remate",url:"https://pokepast.es/142487b4f36c1e70",badgeClass:"bg-terracotta-500/15 text-terracotta-600 dark:text-terracotta-400 border-terracotta-500/30"},{player:"Player 2",role:"Conjuro, Espacio Raro & Setup",url:"https://pokepast.es/eaf73ef4505e6395",badgeClass:"bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30"},{player:"Player 3",role:"Trick, Presión Física & Tierra",url:"https://pokepast.es/d0618f432dde0ad9",badgeClass:"bg-stone-500/15 text-stone-700 dark:text-stone-300 border-stone-500/30"},{player:"Player 4",role:"Velocidad, Debuff SpD & Daño",url:"https://pokepast.es/dc2b6edd02226fd6",badgeClass:"bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"}],turns:[{turn:1,p1:{pokemon:"Gyarados",slug:"gyarados",move:"Reflejo",type:"psychic"},p2:{pokemon:"Cofagrigus",slug:"cofagrigus",move:"Conjuro",type:"normal"},p3:{pokemon:"Exeggutor",slug:"exeggutor",move:"Truco",type:"psychic"},p4:{pokemon:"Pelipper",slug:"pelipper",move:"Viento afín",type:"flying"}},{turn:2,p1:{pokemon:"Suicune",slug:"suicune",move:"Hidrobomba",type:"water"},p2:{pokemon:"Exeggutor",slug:"exeggutor",move:"Gravedad",type:"psychic"},p3:{pokemon:"Suicune",slug:"suicune",move:"Hidrobomba",type:"water"},p4:{pokemon:"Shaymin",slug:"shaymin",move:"Fogonazo (bajar def.esp)",type:"grass"}},{turn:3,p1:{pokemon:"Suicune",slug:"suicune",move:"Hidrobomba",type:"water"},p2:{pokemon:"Suicune",slug:"suicune",move:"Hidrobomba",type:"water"},p3:{pokemon:"Exeggutor",slug:"exeggutor",move:"Lluevehojas",type:"grass"},p4:{pokemon:"Shaymin",slug:"shaymin",move:"Fogonazo",type:"grass"}},{turn:4,p1:{pokemon:"Suicune",slug:"suicune",move:"Hidrobomba",type:"water"},p2:{pokemon:"Cofagrigus",slug:"cofagrigus",move:"Espacio raro",type:"psychic"},p3:{pokemon:"Conkeldurr",slug:"conkeldurr",move:"Patada baja",type:"fighting"},p4:{pokemon:"Shaymin",slug:"shaymin",move:"Fogonazo",type:"grass"}},{turn:5,p1:{pokemon:"Ferrothorn",slug:"ferrothorn",move:"Giro bola",type:"steel"},p2:{pokemon:"Cofagrigus",slug:"cofagrigus",move:"Tinieblas",type:"ghost"},p3:{pokemon:"Conkeldurr",slug:"conkeldurr",move:"Patada baja",type:"fighting"},p4:{pokemon:"Sableye",slug:"sableye",move:"Cosquillas",type:"normal"}},{turn:6,p1:{pokemon:"Sableye",slug:"sableye",move:"Último lugar",type:"dark"},p2:{pokemon:"Cofagrigus",slug:"cofagrigus",move:"Fuego fatuo",type:"fire"},p3:{pokemon:"Conkeldurr",slug:"conkeldurr",move:"Patada baja",type:"fighting"},p4:{pokemon:"Ferrothorn",slug:"ferrothorn",move:"Giro bola",type:"steel"}},{turn:7,p1:{pokemon:"Sableye",slug:"sableye",move:"Cosquillas",type:"normal"},p2:{pokemon:"Conkeldurr",slug:"conkeldurr",move:"Corpulencia",type:"fighting"},p3:{pokemon:"Staraptor",slug:"staraptor",move:"Pájaro osado",type:"flying"},p4:{pokemon:"Gallade",slug:"gallade",move:"Psico-corte",type:"psychic"}},{turn:8,p1:{pokemon:"Sableye",slug:"sableye",move:"Cosquillas",type:"normal"},p2:{pokemon:"Conkeldurr",slug:"conkeldurr",move:"Patada baja",type:"fighting"},p3:{pokemon:"Excadrill",slug:"excadrill",move:"Terremoto",type:"ground"},p4:{pokemon:"Excadrill",slug:"excadrill",move:"Terremoto",type:"ground"}},{turn:9,p1:{pokemon:"Crobat",slug:"crobat",move:"Viento afín",type:"flying"},p2:{pokemon:"Conkeldurr",slug:"conkeldurr",move:"Patada baja",type:"fighting"},p3:{pokemon:"Medicham",slug:"medicham",move:"Patada baja",type:"fighting"},p4:{pokemon:"Medicham",slug:"medicham",move:"Psico-corte",type:"psychic"}},{turn:10,p1:{pokemon:"Lucario",slug:"lucario",move:"Esfera aural",type:"fighting"},p2:{pokemon:"Excadrill",slug:"excadrill",move:"Terremoto",type:"ground"},p3:{pokemon:"Excadrill",slug:"excadrill",move:"Terremoto",type:"ground"},p4:{isKO:!0}}]},g=t=>({anim:`https://img.pokemondb.net/sprites/black-white/anim/normal/${t}.gif`,static:`https://img.pokemondb.net/sprites/black-white/normal/${t}.png`});window.handleSpriteError=function(t){if(t.dataset.fallbackTried==="true"){t.style.display="none";return}t.dataset.fallbackTried="true",t.dataset.fallback&&(t.src=t.dataset.fallback)};function f(t,e,o="w-12 h-12 sm:w-14 sm:h-14"){if(!t)return"";const{anim:n,static:a}=g(t);return`
        <img
            src="${n}"
            data-fallback="${a}"
            alt="${e}"
            title="${e}"
            class="poke-sprite ${o} shrink-0"
            loading="lazy"
            onerror="handleSpriteError(this)"
        >
    `}const d={fire:"bg-orange-500/12 text-orange-600 dark:text-orange-400 border-orange-500/30",water:"bg-sky-500/12 text-sky-600 dark:text-sky-400 border-sky-500/30",grass:"bg-emerald-500/12 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",fighting:"bg-rose-500/12 text-rose-600 dark:text-rose-400 border-rose-500/30",psychic:"bg-fuchsia-500/12 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-500/30",ground:"bg-amber-600/12 text-amber-700 dark:text-amber-400 border-amber-600/30",flying:"bg-indigo-500/12 text-indigo-600 dark:text-indigo-400 border-indigo-500/30",steel:"bg-slate-500/12 text-slate-600 dark:text-slate-300 border-slate-500/30",ghost:"bg-purple-500/12 text-purple-600 dark:text-purple-400 border-purple-500/30",dark:"bg-zinc-700/15 text-zinc-700 dark:text-zinc-300 border-zinc-500/35",normal:"bg-stone-500/12 text-stone-600 dark:text-stone-300 border-stone-500/30"};function y(){const t=document.getElementById("pokepaste-grid");t.innerHTML=c.pokepastes.map(e=>`
        <div class="card-surface rounded-2xl p-5 flex flex-col justify-between hover:border-terracotta-500/60">
            <div class="space-y-3">
                <div class="flex items-center justify-between gap-2">
                    <span class="px-2.5 py-1 rounded-lg text-xs font-extrabold border ${e.badgeClass}">
                        ${e.player}
                    </span>
                    <span class="text-[11px] font-mono font-medium" style="color: var(--text-muted);">
                        ${e.role}
                    </span>
                </div>
                <div class="px-3 py-2 rounded-xl elevated-surface font-mono text-xs truncate" style="color: var(--text-secondary);">
                    ${e.url}
                </div>
            </div>

            <div class="flex items-center gap-2 mt-4">
                <a
                    href="${e.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 py-2.5 px-3 rounded-xl bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                    <i class="fa-solid fa-arrow-up-right-from-square text-[11px]"></i>
                    <span>Abrir Pokepaste</span>
                </a>
                <button
                    type="button"
                    onclick="copyText('${e.url}', 'Enlace de ${e.player} copiado')"
                    class="p-2.5 rounded-xl elevated-surface hover:border-terracotta-500 transition-colors cursor-pointer"
                    style="color: var(--text-secondary);"
                    title="Copiar URL"
                >
                    <i class="fa-regular fa-copy"></i>
                </button>
            </div>
        </div>
    `).join("")}let p="all";function l(){const t=document.getElementById("turns-tbody"),e=JSON.parse(localStorage.getItem("terrakion_done_turns")||"[]"),o=(r,s)=>{if(r.isKO)return`
                <td class="py-3.5 px-4 border-r last:border-r-0 transition-opacity" data-col="${s}" style="border-color: var(--border-color);">
                    <div class="flex items-center justify-center sm:justify-start">
                        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-extrabold tracking-widest uppercase bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/35 shadow-sm" title="KO">
                            <i class="fa-solid fa-skull"></i> KO
                        </span>
                    </div>
                </td>
            `;const m=d[r.type]||d.normal;return`
            <td class="py-3.5 px-4 border-r last:border-r-0 transition-opacity" data-col="${s}" style="border-color: var(--border-color);">
                <div class="flex items-center gap-3">
                    <div class="sprite-stage" title="${r.pokemon}">
                        ${f(r.slug,r.pokemon,"w-12 h-12 sm:w-14 sm:h-14")}
                    </div>
                    <div class="flex flex-col gap-1 min-w-0">
                        <span class="text-[11px] font-mono font-semibold uppercase tracking-wide" style="color: var(--text-muted);">
                            ${r.pokemon}
                        </span>
                        <span class="move-pill inline-flex items-center px-3 py-1 rounded-xl text-xs sm:text-sm font-bold border w-fit ${m}">
                            ${r.move}
                        </span>
                    </div>
                </div>
            </td>
        `},n=c.turns.map(r=>{const s=e.includes(r.turn);return`
            <tr class="hover:bg-terracotta-500/[0.03] transition-colors ${s?"turn-done":""}" data-turn="${r.turn}">
                <td class="py-3 px-3 text-center border-r font-mono select-none" style="border-color: var(--border-color);">
                    <label class="inline-flex flex-col items-center justify-center gap-1.5 cursor-pointer group" title="Marcar Turno ${r.turn}">
                        <input
                            type="checkbox"
                            class="sr-only"
                            ${s?"checked":""}
                            onchange="toggleTurnDone(${r.turn})"
                        >
                        <span class="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm border transition-all ${s?"bg-emerald-600 text-white border-emerald-500 shadow-sm":"bg-terracotta-500/12 text-terracotta-600 dark:text-terracotta-400 border-terracotta-500/25 group-hover:bg-terracotta-600 group-hover:text-white"}">
                            ${s?'<i class="fa-solid fa-check text-xs"></i>':`T${r.turn}`}
                        </span>
                        <span class="text-[10px] font-semibold" style="color: var(--text-muted);">
                            ${s?"Listo":"Pendiente"}
                        </span>
                    </label>
                </td>
                ${o(r.p1,1)}
                ${o(r.p2,2)}
                ${o(r.p3,3)}
                ${o(r.p4,4)}
            </tr>
        `}).join(""),a=`
        <tr class="bg-gradient-to-r from-terracotta-500/15 via-amber-500/15 to-emerald-500/15 border-t-2" style="border-color: var(--accent);">
            <td colspan="5" class="py-4 px-6 text-center">
                <div class="inline-flex items-center justify-center gap-3 px-6 py-2 rounded-2xl bg-terracotta-600 text-white font-mono text-base sm:text-lg font-extrabold tracking-[0.25em] uppercase shadow-md">
                    <i class="fa-solid fa-trophy text-amber-300"></i>
                    <span>FIN</span>
                    <i class="fa-solid fa-trophy text-amber-300"></i>
                </div>
            </td>
        </tr>
    `;t.innerHTML=n+a,u(p)}function u(t){p=t,document.querySelectorAll("#player-filter-group .filter-btn").forEach(e=>{e.dataset.filter===t?(e.className="filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-terracotta-600 text-white shadow-sm transition-all cursor-pointer",e.style.color=""):(e.className="filter-btn px-3 py-1.5 rounded-xl text-xs font-semibold hover:bg-terracotta-500/10 transition-all cursor-pointer",e.style.color="var(--text-secondary)")}),document.querySelectorAll("#raid-turns-table [data-col]").forEach(e=>{const o=e.dataset.col;e.classList.remove("col-dimmed","col-focused"),t!=="all"&&(o===t?e.classList.add("col-focused"):e.classList.add("col-dimmed"))})}window.toggleTurnDone=function(t){const e=JSON.parse(localStorage.getItem("terrakion_done_turns")||"[]"),o=e.indexOf(t);o>-1?e.splice(o,1):e.push(t),localStorage.setItem("terrakion_done_turns",JSON.stringify(e)),l()};function i(t){const e=document.getElementById("toast-container"),o=document.createElement("div");o.className="pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-xl shadow-xl text-xs font-bold bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 border border-terracotta-500/40 transition-all duration-300 translate-y-3 opacity-0",o.innerHTML=`<i class="fa-solid fa-circle-check text-emerald-500"></i> <span>${t}</span>`,e.appendChild(o),requestAnimationFrame(()=>o.classList.remove("translate-y-3","opacity-0")),setTimeout(()=>{o.classList.add("translate-y-3","opacity-0"),setTimeout(()=>o.remove(),300)},2500)}window.copyText=function(t,e){const o=document.createElement("textarea");o.value=t,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.focus(),o.select();try{document.execCommand("copy"),i(e)}catch{i("No se pudo copiar")}document.body.removeChild(o)};function x(){const t=document.documentElement,e=document.getElementById("theme-toggle"),o=document.getElementById("theme-icon"),n=document.getElementById("theme-text"),a=s=>{t.setAttribute("data-theme",s),localStorage.setItem("terrakion_ui_theme",s),s==="dark"?(o.className="fa-solid fa-sun text-amber-400 text-sm",n.textContent="Tema Claro"):(o.className="fa-solid fa-moon text-terracotta-600 text-sm",n.textContent="Tema Oscuro")},r=localStorage.getItem("terrakion_ui_theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");a(r),e.addEventListener("click",()=>{const s=t.getAttribute("data-theme")==="dark"?"light":"dark";a(s)})}document.addEventListener("DOMContentLoaded",()=>{x(),y(),l(),document.querySelectorAll("#player-filter-group .filter-btn").forEach(t=>{t.addEventListener("click",()=>u(t.dataset.filter))}),document.getElementById("reset-progress-btn").addEventListener("click",()=>{localStorage.removeItem("terrakion_done_turns"),l(),i("Progreso reiniciado")})});
