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
  - После изменений запустите: python3 tools/build.py  (обновит иконки, манифест и кеш).

  Клиент: барбершоп «Лагом», Воронеж, Плехановская ул., 19. Данные и цены — из карточки 2ГИС (05.11.2026).
*/
window.BH_CONFIG = {
  "brand": {
    "name": "LAGOM",
    "shortName": "Лагом",
    "monogram": "L",
    "tagline": "Барбершоп в Воронеже",
    "city": "Воронеж"
  },
  "colors": {
    "background": "#0c0c0c",
    "accent": "#a47148",
    "accentLight": "#f1ece4"
  },
  "photoStyle": "bw",
  "showDuration": false,
  "hero": {
    "title": "Стрижка в самый раз",
    "text": "Мужские и детские стрижки, моделирование бороды и уход за лицом в центре Воронежа. Рейтинг 5,0 в 2ГИС.",
    "photo": "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=75"
  },
  "services": [
    {
      "id": "cut",
      "name": "Мужская стрижка",
      "price": 1800,
      "duration": 60,
      "description": "Начинается с подробной консультации: мастер подберёт стрижку под форму лица, тип волос и ваш образ жизни.",
      "icon": "scissors",
      "photo": "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?auto=format&fit=crop&w=1200&q=75",
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
      "photo": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=75",
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
      "photo": "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=75",
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
      "photo": "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=75",
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
      "photo": "https://images.unsplash.com/photo-1599011176306-4a96f1516d4d?auto=format&fit=crop&w=1200&q=75",
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
      "photo": "https://images.unsplash.com/photo-1657105052497-f996284ffff8?auto=format&fit=crop&w=1200&q=75",
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
      "id": "dmitry",
      "name": "Дмитрий",
      "role": "Барбер",
      "description": "",
      "tags": [],
      "photo": null
    },
    {
      "id": "alena",
      "name": "Алёна",
      "role": "Барбер",
      "description": "",
      "tags": [],
      "photo": null
    },
    {
      "id": "victoria",
      "name": "Виктория",
      "role": "Барбер",
      "description": "",
      "tags": [],
      "photo": null
    },
    {
      "id": "andrey",
      "name": "Андрей",
      "role": "Барбер",
      "description": "",
      "tags": [],
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
    "mapUrl": "https://yandex.ru/maps/org/lagom/179953687466/"
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
  "demoNote": "Демо-версия приложения для барбершопа «Лагом», подготовлена как предложение. Не является официальным сайтом. Фото: Unsplash."
};
