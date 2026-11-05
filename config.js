/*
  НАСТРОЙКИ БАРБЕРШОПА
  Всё, что относится к конкретному клиенту, — только здесь.
  Движок приложения (index.html) под клиента не меняется.

  Правила:
  - Внутри фигурных скобок — строгий JSON: ключи и строки в двойных кавычках, без запятой после последнего элемента.
  - Фото кладутся в папку images/ и указываются как "images/имя.jpg" (можно и полной ссылкой https://...). Если фото нет — пишите null, будет заглушка.
  - "photoStyle": "toned" — все фото ч/б с оттенком акцента, "bw" — чистое ч/б, "original" — фото как есть.
  - У услуги можно указать: "priceTo" (цена «от–до»), "price": 0 (Бесплатно), "category" (раздел на странице услуг),
    "bookable": false (без кнопки записи, например бесплатные допуслуги), "icon": null и "photo": null (карточка без картинки).
  - "showDuration": false — длительность услуг клиентам не показывается (но учитывается при подборе времени записи).
  - Необязательно: "colors.text/muted/card/line" (цвета текста и карточек), "colors.texture" (фактура для кнопок, напр. дерево),
    "fonts": {"display": "Jost"} (шрифт заголовков из Google Fonts), "gallery": [{"photo","caption"}] (лента фото на главной),
    "contacts.photo" (фото входа вместо схемы карты).
  - После изменений запустите: python3 tools/build.py  (обновит иконки, манифест и кеш).

  Клиент: барбершоп «Лагом», Воронеж, Плехановская ул., 19. Цены — из карточки 2ГИС (05.11.2026), фото — из карточек 2ГИС и Яндекс Карт. Мастера — вымышленные, для примера.
*/
window.BH_CONFIG = {
  "brand": {
    "name": "LÁGOM",
    "shortName": "Лагом",
    "monogram": "L",
    "tagline": "Men's haircut · Воронеж",
    "city": "Воронеж"
  },
  "colors": {
    "background": "#0a0a0a",
    "card": "#151515",
    "line": "#2a2a2a",
    "text": "#f4f4f2",
    "muted": "#9d9d9d",
    "accent": "#e8e4dc",
    "accentLight": "#ffffff"
  },
  "photoStyle": "original",
  "showDuration": false,
  "hero": {
    "title": "Ровно так, как нужно",
    "text": "Мужские и детские стрижки, борода и уход в центре Воронежа. Кофе, своя парковка и мастера, которые слышат, что вы хотите.",
    "photo": "images/hero.jpg"
  },
  "services": [
    {
      "id": "cut",
      "name": "Мужская стрижка",
      "price": 1800,
      "duration": 60,
      "description": "Начинается с подробной консультации: мастер подберёт стрижку под форму лица, тип волос и ваш образ жизни.",
      "icon": "scissors",
      "photo": "images/cut.jpg",
      "category": "Стрижки",
      "popular": true,
      "priceTo": 2500
    },
    {
      "id": "cut-beard",
      "name": "Стрижка + моделирование бороды",
      "price": 2800,
      "duration": 90,
      "description": "Стрижка и полное моделирование бороды: распаривание, форма, контур и уход.",
      "icon": "scissors",
      "photo": "images/cut-beard.jpg",
      "category": "Стрижки",
      "popular": true,
      "priceTo": 4000
    },
    {
      "id": "clipper",
      "name": "Стрижка машинкой",
      "price": 1000,
      "duration": 30,
      "description": "Стрижка машинкой, до 3 насадок, без ножниц. Два мытья головы.",
      "icon": "scissors",
      "photo": "images/clipper.jpg",
      "category": "Стрижки",
      "popular": false,
      "priceTo": 1500
    },
    {
      "id": "clipper-beard",
      "name": "Стрижка машинкой + борода",
      "price": 2000,
      "duration": 60,
      "description": "Стрижка машинкой до 3 насадок, два мытья головы и моделирование бороды.",
      "icon": "scissors",
      "photo": "images/clipper-beard.jpg",
      "category": "Стрижки",
      "popular": false,
      "priceTo": 3000
    },
    {
      "id": "beard",
      "name": "Моделирование бороды",
      "price": 1000,
      "duration": 45,
      "description": "Комплексная процедура: распаривание, качественный гель, форма и чёткий контур.",
      "icon": "scissors",
      "photo": "images/beard.jpg",
      "category": "Стрижки",
      "popular": true,
      "priceTo": 1500
    },
    {
      "id": "kids",
      "name": "Детская стрижка (до 10 лет)",
      "price": 1400,
      "duration": 45,
      "description": "Аккуратная стрижка для маленьких джентльменов — быстро и спокойно.",
      "icon": "scissors",
      "photo": "images/kids.jpg",
      "category": "Стрижки",
      "popular": false,
      "priceTo": 1900
    },
    {
      "id": "face",
      "name": "Уход за лицом от Volcano",
      "price": 1200,
      "duration": 30,
      "description": "Премиальная процедура: глубокое очищение, детоксикация и обновление кожи.",
      "icon": null,
      "photo": null,
      "category": "Дополнительные услуги",
      "popular": false
    },
    {
      "id": "camo-head",
      "name": "Камуфляж головы",
      "price": 1200,
      "duration": 30,
      "description": "Тонирование волос — ровный, естественный тон.",
      "icon": null,
      "photo": null,
      "category": "Дополнительные услуги",
      "popular": false
    },
    {
      "id": "camo-beard",
      "name": "Камуфляж бороды",
      "price": 1000,
      "duration": 30,
      "description": "Тонирование бороды — ровный тон и более чёткая окантовка.",
      "icon": null,
      "photo": null,
      "category": "Дополнительные услуги",
      "popular": false
    },
    {
      "id": "wax",
      "name": "Удаление воском",
      "price": 0,
      "duration": 10,
      "description": "Бесплатно при любой услуге.",
      "icon": null,
      "photo": null,
      "category": "Дополнительные услуги",
      "popular": false,
      "bookable": false
    },
    {
      "id": "brows",
      "name": "Коррекция бровей",
      "price": 0,
      "duration": 10,
      "description": "Бесплатно при любой услуге.",
      "icon": null,
      "photo": null,
      "category": "Дополнительные услуги",
      "popular": false,
      "bookable": false
    }
  ],
  "barbers": [
    {
      "id": "m1",
      "name": "Максим",
      "role": "Старший барбер",
      "description": "Классические и современные мужские стрижки, точные переходы.",
      "tags": [
        "Фейд",
        "Классика"
      ],
      "photo": null
    },
    {
      "id": "m2",
      "name": "Артём",
      "role": "Барбер",
      "description": "Борода и усы: форма, контур, камуфляж.",
      "tags": [
        "Борода",
        "Камуфляж"
      ],
      "photo": null
    },
    {
      "id": "m3",
      "name": "Егор",
      "role": "Барбер",
      "description": "Терпеливо стрижёт детей и подростков.",
      "tags": [
        "Детские стрижки",
        "Машинка"
      ],
      "photo": null
    }
  ],
  "advantages": [
    [
      "Лучший барбершоп по версии 2ГИС",
      "Рейтинг 5,0 и сотни отзывов"
    ],
    [
      "Подарок к стрижке",
      "Воск и коррекция бровей — бесплатно"
    ],
    [
      "Кофе, чай и своя парковка",
      "Wi-Fi, можно прийти с собакой"
    ],
    [
      "Стрижём и детей",
      "Детская стрижка до 10 лет"
    ]
  ],
  "contacts": {
    "address": "Воронеж, Плехановская ул., 19, 1 этаж",
    "phone": "+7 (473) 300-34-33",
    "telegram": "lagom_voronezh1",
    "whatsapp": null,
    "vk": "https://vk.com/lagom_voronezh",
    "mapUrl": "https://yandex.ru/maps/org/lagom/179953687466/",
    "photo": "images/facade.jpg"
  },
  "schedule": {
    "mon": [
      "10:00",
      "22:00"
    ],
    "tue": [
      "10:00",
      "22:00"
    ],
    "wed": [
      "10:00",
      "22:00"
    ],
    "thu": [
      "10:00",
      "22:00"
    ],
    "fri": [
      "10:00",
      "22:00"
    ],
    "sat": [
      "10:00",
      "22:00"
    ],
    "sun": [
      "10:00",
      "22:00"
    ]
  },
  "booking": {
    "mode": "external",
    "externalUrl": "https://b795444.yclients.com/company/746297/personal/menu?o=m-1",
    "externalName": "YCLIENTS",
    "slotStep": 30,
    "daysAhead": 14
  },
  "demoNote": "Демо-версия приложения для барбершопа «Лагом», подготовлена как предложение. Не является официальным сайтом. Мастера указаны для примера.",
  "fonts": {
    "display": "Jost",
    "fallback": "system-ui,sans-serif"
  },
  "gallery": [
    {
      "photo": "images/g-crop.jpg",
      "caption": "Кроп с плавным фейдом"
    },
    {
      "photo": "images/g-kid.jpg",
      "caption": "Детская стрижка"
    },
    {
      "photo": "images/g-teen.jpg",
      "caption": "Работа ножницами"
    },
    {
      "photo": "images/g-camo.jpg",
      "caption": "Камуфляж бороды"
    },
    {
      "photo": "images/g-mask.jpg",
      "caption": "Уход за лицом"
    },
    {
      "photo": "images/g-lounge.jpg",
      "caption": "Зона ожидания"
    },
    {
      "photo": "images/g-clay.jpg",
      "caption": "Собственная косметика LÁGOM"
    },
    {
      "photo": "images/g-street.jpg",
      "caption": "Плехановская, 19"
    }
  ],
  "galleryTitle": "Работы и атмосфера",
  "buttons": "glass"
};
