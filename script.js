const themeSelect = document.getElementById('theme-select');
const availableThemes = ['purple', 'blue', 'red'];
const savedTheme = localStorage.getItem('ivanhoe-theme');
const initialTheme = availableThemes.includes(savedTheme) ? savedTheme : 'purple';

document.body.dataset.theme = initialTheme;
themeSelect.value = initialTheme;

themeSelect.addEventListener('change', () => {
    document.body.dataset.theme = themeSelect.value;
    localStorage.setItem('ivanhoe-theme', themeSelect.value);
});

const factButton = document.getElementById('fact-button');
const factText = document.getElementById('fact-text');

const facts = [
    '«Айвенго» був опублікований у 1819 році.',
    'Автор роману — шотландський письменник Вальтер Скотт.',
    'Спочатку роман вийшов анонімно, як і попередні романи циклу «Уеверлі».',
    'Події твору відбуваються в Англії наприкінці XII століття.',
    'У романі протистояння саксів і норманів є важливим тлом для особистої історії героїв.',
    'Повне ім’я Айвенго — Вілфред, син Седріка.',
    'Айвенго підтримує короля Річарда I, відомого як Річард Левове Серце.',
    'На початку роману Річард перебуває далеко від Англії після хрестового походу.',
    'Брат Річарда, принц Джон, прагне скористатися відсутністю короля.',
    'На турнірі в Ашбі Айвенго виступає під ім’ям Лицаря, позбавленого спадку.',
    'Щит Айвенго на турнірі несе напис «Позбавлений спадку».',
    'Леді Ровена — кохана Айвенго та вихованка Седріка Сакса.',
    'Седрік мріє про відновлення колишньої слави саксів.',
    'Ребекка — дочка Ісаака з Йорка, заможного єврейського купця.',
    'Ісаак допомагає пораненому Айвенго після турніру.',
    'Ребекка доглядає за Айвенго, коли той потребує допомоги.',
    'Ребекка — одна з найсміливіших і наймилосердніших героїнь роману.',
    'Бріан де Буагільбер — храмовник і один із головних супротивників Айвенго.',
    'У романі є персонаж на ім’я Вамба — блазень у домі Седріка.',
    'Гурт — свинопас, який служить Седріку та залишається відданим своєму господарю.',
    'Локслі — ім’я, під яким у романі діє вправний лучник Робін Гуд.',
    'Робін Гуд та його лісові товариші допомагають героям у скрутну хвилину.',
    'Одна з важливих пригод роману відбувається в замку Торкілстон.',
    'Замок Торкілстон належить лицарю Фрон-де-Бефу.',
    'Після нападу на замок полонених визволяють за допомогою лісових союзників.',
    'У романі є випробування Ребекки судом через поєдинок.',
    'Ребекка просить дозволити захисникові виступити за неї в судовому поєдинку.',
    'Айвенго, попри поранення, стає захисником Ребекки.',
    'Роман поєднує вигаданих героїв із постатями, пов’язаними з англійською історією.',
    'Вальтер Скотт вважається одним із творців популярного історичного роману.',
    'У творі порушено теми релігійних упереджень і нетерпимості.',
    'Одна з головних тем роману — примирення ворогуючих народів.',
    'Айвенго показує, як особиста честь випробовується конфліктами та небезпекою.',
    'Річард Левове Серце зображений хоробрим, але часом імпульсивним правителем.',
    'Турнір в Ашбі дає змогу Айвенго повернутися до лицарського життя та заявити про себе.',
    'У романі лицарські турніри поєднані з небезпеками поза турнірним полем.',
    'Значна частина подій роману розгортається в Йоркширі та його околицях.',
    'Назва роману походить від лицарського титулу головного героя — Айвенго.',
    'Роман завершується весіллям Айвенго та Ровени.',
    'Історичний сюжет роману показує, як змінюються стосунки між саксами й норманами.'
];

let remainingFacts = [];
let lastFact = -1;

function shuffleFacts() {
    remainingFacts = facts.map((_, index) => index);

    for (let index = remainingFacts.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [remainingFacts[index], remainingFacts[randomIndex]] = [remainingFacts[randomIndex], remainingFacts[index]];
    }

    if (remainingFacts.length > 1 && remainingFacts[remainingFacts.length - 1] === lastFact) {
        [remainingFacts[0], remainingFacts[remainingFacts.length - 1]] = [remainingFacts[remainingFacts.length - 1], remainingFacts[0]];
    }
}

factButton.addEventListener('click', () => {
    if (remainingFacts.length === 0) shuffleFacts();

    lastFact = remainingFacts.pop();
    factText.textContent = facts[lastFact];
    factText.hidden = false;
    factButton.setAttribute('aria-expanded', 'true');
    factButton.textContent = 'Ще один факт';

    factText.classList.remove('fact-reveal');
    void factText.offsetWidth;
    factText.classList.add('fact-reveal');
});
