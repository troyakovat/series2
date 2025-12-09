const subscriptions = [
    {
        img: "./pics/netflix.jpg",
        title: "Netflix (Premium)",
        price: "1000₽/мес",
        desc: "Netflix Premium — это высший тариф подписки Netflix, предлагающий максимальное качество видео до 4K Ultra HD с поддержкой HDR и Dolby Vision. Он позволяет одновременно смотреть контент на 4 устройствах без рекламы и с полным доступом ко всему каталогу фильмов, сериалов и шоу.",
        art: "150307"
    },
    {
        img: "./pics/disney.jpeg",
        title: "Disney+",
        price: "1200₽/мес",
        desc: "Disney+ Premium включает просмотр в 4K UHD с HDR и Dolby Atmos без рекламы, до 4 одновременных стримов, оффлайн-загрузку на 10 устройств и полный доступ к контенту Disney, Marvel, Pixar, Star Wars.",
        art: "150498"
    },
    {
        img: "./pics/hulu.jpeg",
        title: "Hulu",
        price: "900₽/мес",
        desc: "Hulu Premium (No Ads) включает просмотр без рекламы в высоком разрешении до 4K, оффлайн-загрузки контента, до 2 одновременных стримов и полный доступ к библиотеке сериалов, фильмов и оригиналов Hulu.",
        art: "161004"
    },
    {
        img: "./pics/amazon.jpeg",
        title: "Amazon Prime Video",
        price: "700₽/мес",
        desc: "Amazon Prime Video входит в подписку Amazon Prime, которая предоставляет стриминг в HD/4K UHD с HDR и Dolby Atmos, до 3 одновременных стримов, оффлайн-загрузки, плюс бонусы вроде быстрой доставки Amazon и Prime Music.",
        art: "150206"
    },
    {
        img: "./pics/apple.jpeg",
        title: "Apple TV+",
        price: "500₽/мес",
        desc: "Apple TV+ включает эксклюзивные оригинальные сериалы, фильмы и шоу Apple Originals в 4K HDR с Dolby Atmos без рекламы, оффлайн-загрузки и семейный доступ до 6 человек.",
        art: "151006"
    }
];

const container = document.getElementById('items');

subscriptions.forEach(sub => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
        <img src="${sub.img}" alt="${sub.title}">
        <h3>${sub.title}</h3>
        <div class="price">${sub.price}</div>
        <div class="desc">${sub.desc}</div>
        <div class="art" onclick="alert('Артикул: ${sub.art}')">${sub.art}</div>
    `;
    container.appendChild(div);
});
