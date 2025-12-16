export interface TestOption {
  discipline: string;
  gold: string;
  silver: string;
  bronze: string;
}

export interface TestCategory {
  name: string;
  type: 'Обязательное' | 'По выбору';
  options: TestOption[];
}

export interface StageStandards {
  required: TestCategory[];
  choice: TestCategory[];
}

const createStandards = (stageNumber: number, gender: 'male' | 'female'): StageStandards => {
  const allStages: Record<number, (gender: 'male' | 'female') => StageStandards> = {
    1: (g) => ({
      required: [
        {
          name: 'Челночный бег 3x10 м',
          type: 'Обязательное',
          options: [{ discipline: 'Челночный бег', gold: g === 'male' ? '9.2 сек' : '9.5 сек', silver: g === 'male' ? '10.1 сек' : '10.4 сек', bronze: g === 'male' ? '10.4 сек' : '10.9 сек' }]
        },
        {
          name: 'Смешанное передвижение',
          type: 'Обязательное',
          options: [{ discipline: 'Смешанное передвижение 1 км', gold: g === 'male' ? '5:20 мин' : '6:00 мин', silver: g === 'male' ? '6:10 мин' : '6:40 мин', bronze: g === 'male' ? '6:40 мин' : '7:10 мин' }]
        }
      ],
      choice: [
        {
          name: 'Подтягивание',
          type: 'По выбору',
          options: [{ discipline: g === 'male' ? 'Подтягивание из виса' : 'Подтягивание из виса лежа', gold: g === 'male' ? '4 раз' : '11 раз', silver: g === 'male' ? '3 раз' : '9 раз', bronze: g === 'male' ? '2 раз' : '7 раз' }]
        },
        {
          name: 'Прыжок в длину',
          type: 'По выбору',
          options: [{ discipline: 'Прыжок в длину с места', gold: g === 'male' ? '115 см' : '110 см', silver: g === 'male' ? '110 см' : '105 см', bronze: g === 'male' ? '105 см' : '95 см' }]
        }
      ]
    }),
    2: (g) => ({
      required: [
        {
          name: 'Бег 30 м',
          type: 'Обязательное',
          options: [{ discipline: 'Бег 30 м', gold: g === 'male' ? '6.0 сек' : '6.2 сек', silver: g === 'male' ? '6.7 сек' : '6.8 сек', bronze: g === 'male' ? '7.1 сек' : '7.3 сек' }]
        },
        {
          name: 'Смешанное передвижение',
          type: 'Обязательное',
          options: [{ discipline: 'Смешанное передвижение 1 км', gold: g === 'male' ? '4:50 мин' : '5:10 мин', silver: g === 'male' ? '5:40 мин' : '6:00 мин', bronze: g === 'male' ? '6:10 мин' : '6:40 мин' }]
        }
      ],
      choice: [
        {
          name: 'Подтягивание',
          type: 'По выбору',
          options: [{ discipline: g === 'male' ? 'Подтягивание из виса' : 'Подтягивание из виса лежа', gold: g === 'male' ? '5 раз' : '13 раз', silver: g === 'male' ? '4 раз' : '11 раз', bronze: g === 'male' ? '3 раз' : '9 раз' }]
        },
        {
          name: 'Прыжок в длину',
          type: 'По выбору',
          options: [{ discipline: 'Прыжок в длину с места', gold: g === 'male' ? '130 см' : '125 см', silver: g === 'male' ? '125 см' : '120 см', bronze: g === 'male' ? '115 см' : '110 см' }]
        }
      ]
    }),
    3: (g) => ({
      required: [
        {
          name: 'Бег 60 м',
          type: 'Обязательное',
          options: [{ discipline: 'Бег 60 м', gold: g === 'male' ? '10.5 сек' : '10.9 сек', silver: g === 'male' ? '11.6 сек' : '12.4 сек', bronze: g === 'male' ? '12.0 сек' : '12.9 сек' }]
        },
        {
          name: 'Бег на выносливость',
          type: 'Обязательное',
          options: [{ discipline: 'Бег 1 км', gold: g === 'male' ? '4:45 мин' : '5:05 мин', silver: g === 'male' ? '5:20 мин' : '5:50 мин', bronze: g === 'male' ? '5:45 мин' : '6:20 мин' }]
        }
      ],
      choice: [
        {
          name: 'Подтягивание',
          type: 'По выбору',
          options: [{ discipline: g === 'male' ? 'Подтягивание из виса' : 'Подтягивание из виса лежа', gold: g === 'male' ? '6 раз' : '15 раз', silver: g === 'male' ? '4 раз' : '13 раз', bronze: g === 'male' ? '3 раз' : '10 раз' }]
        },
        {
          name: 'Прыжок в длину',
          type: 'По выбору',
          options: [{ discipline: 'Прыжок в длину с места', gold: g === 'male' ? '150 см' : '140 см', silver: g === 'male' ? '140 см' : '130 см', bronze: g === 'male' ? '130 см' : '120 см' }]
        },
        {
          name: 'Метание мяча',
          type: 'По выбору',
          options: [{ discipline: 'Метание мяча 150 г', gold: g === 'male' ? '24 м' : '16 м', silver: g === 'male' ? '20 м' : '14 м', bronze: g === 'male' ? '18 м' : '11 м' }]
        }
      ]
    }),
    4: (g) => ({
      required: [
        {
          name: 'Бег 60 м',
          type: 'Обязательное',
          options: [{ discipline: 'Бег 60 м', gold: g === 'male' ? '9.6 сек' : '10.3 сек', silver: g === 'male' ? '10.9 сек' : '11.5 сек', bronze: g === 'male' ? '11.5 сек' : '12.1 сек' }]
        },
        {
          name: 'Бег на выносливость',
          type: 'Обязательное',
          options: [
            { discipline: 'Бег 1.5 км', gold: g === 'male' ? '7:10 мин' : '7:35 мин', silver: g === 'male' ? '7:50 мин' : '8:30 мин', bronze: g === 'male' ? '8:20 мин' : '9:00 мин' },
            { discipline: 'Бег 2 км', gold: g === 'male' ? '9:40 мин' : '11:40 мин', silver: g === 'male' ? '10:40 мин' : '12:40 мин', bronze: g === 'male' ? '11:20 мин' : '13:20 мин' }
          ]
        }
      ],
      choice: [
        {
          name: 'Подтягивание',
          type: 'По выбору',
          options: [{ discipline: g === 'male' ? 'Подтягивание из виса' : 'Подтягивание из виса лежа', gold: g === 'male' ? '7 раз' : '17 раз', silver: g === 'male' ? '5 раз' : '14 раз', bronze: g === 'male' ? '4 раз' : '10 раз' }]
        },
        {
          name: 'Прыжок в длину',
          type: 'По выбору',
          options: [{ discipline: 'Прыжок в длину с места', gold: g === 'male' ? '170 см' : '160 см', silver: g === 'male' ? '160 см' : '145 см', bronze: g === 'male' ? '150 см' : '135 см' }]
        }
      ]
    }),
    5: (g) => ({
      required: [
        {
          name: 'Бег 60 м',
          type: 'Обязательное',
          options: [{ discipline: 'Бег 60 м', gold: g === 'male' ? '8.8 сек' : '9.7 сек', silver: g === 'male' ? '10.2 сек' : '10.8 сек', bronze: g === 'male' ? '10.5 сек' : '11.3 сек' }]
        },
        {
          name: 'Бег на выносливость',
          type: 'Обязательное',
          options: [
            { discipline: 'Бег 2 км', gold: g === 'male' ? '9:00 мин' : '10:40 мин', silver: g === 'male' ? '10:00 мин' : '11:40 мин', bronze: g === 'male' ? '10:30 мин' : '12:10 мин' },
            { discipline: 'Бег 3 км', gold: g === 'male' ? '14:30 мин' : '—', silver: g === 'male' ? '16:00 мин' : '—', bronze: g === 'male' ? '17:00 мин' : '—' }
          ]
        }
      ],
      choice: [
        {
          name: 'Подтягивание',
          type: 'По выбору',
          options: [{ discipline: g === 'male' ? 'Подтягивание из виса' : 'Подтягивание из виса лежа', gold: g === 'male' ? '10 раз' : '18 раз', silver: g === 'male' ? '7 раз' : '15 раз', bronze: g === 'male' ? '5 раз' : '11 раз' }]
        },
        {
          name: 'Прыжок в длину',
          type: 'По выбору',
          options: [{ discipline: 'Прыжок в длину с места', gold: g === 'male' ? '195 см' : '175 см', silver: g === 'male' ? '185 см' : '160 см', bronze: g === 'male' ? '170 см' : '150 см' }]
        },
        {
          name: 'Поднимание туловища',
          type: 'По выбору',
          options: [{ discipline: 'Поднимание туловища из положения лежа', gold: g === 'male' ? '42 раз' : '38 раз', silver: g === 'male' ? '38 раз' : '33 раз', bronze: g === 'male' ? '33 раз' : '28 раз' }]
        }
      ]
    }),
    6: (g) => ({
      required: [
        {
          name: 'Бег 60 м или 100 м',
          type: 'Обязательное',
          options: [
            { discipline: 'Бег 60 м', gold: g === 'male' ? '8.5 сек' : '9.6 сек', silver: g === 'male' ? '9.2 сек' : '10.6 сек', bronze: g === 'male' ? '10.0 сек' : '11.2 сек' },
            { discipline: 'Бег 100 м', gold: g === 'male' ? '14.3 сек' : '17.6 сек', silver: g === 'male' ? '15.1 сек' : '18.8 сек', bronze: g === 'male' ? '16.0 сек' : '19.5 сек' }
          ]
        },
        {
          name: 'Бег на выносливость',
          type: 'Обязательное',
          options: [
            { discipline: 'Бег 2 км', gold: g === 'male' ? '8:10 мин' : '10:00 мин', silver: g === 'male' ? '9:20 мин' : '11:20 мин', bronze: g === 'male' ? '9:50 мин' : '11:50 мин' },
            { discipline: 'Бег 3 км', gold: g === 'male' ? '13:30 мин' : '—', silver: g === 'male' ? '15:00 мин' : '—', bronze: g === 'male' ? '16:00 мин' : '—' }
          ]
        }
      ],
      choice: [
        {
          name: 'Подтягивание',
          type: 'По выбору',
          options: [{ discipline: g === 'male' ? 'Подтягивание из виса' : 'Подтягивание из виса лежа', gold: g === 'male' ? '12 раз' : '19 раз', silver: g === 'male' ? '9 раз' : '15 раз', bronze: g === 'male' ? '6 раз' : '11 раз' }]
        },
        {
          name: 'Прыжок в длину',
          type: 'По выбору',
          options: [{ discipline: 'Прыжок в длину с места', gold: g === 'male' ? '215 см' : '185 см', silver: g === 'male' ? '195 см' : '170 см', bronze: g === 'male' ? '180 см' : '160 см' }]
        },
        {
          name: 'Поднимание туловища',
          type: 'По выбору',
          options: [{ discipline: 'Поднимание туловища', gold: g === 'male' ? '47 раз' : '43 раз', silver: g === 'male' ? '42 раз' : '38 раз', bronze: g === 'male' ? '36 раз' : '32 раз' }]
        }
      ]
    }),
    7: (g) => ({
      required: [
        {
          name: 'Скоростные возможности',
          type: 'Обязательное',
          options: [
            { discipline: 'Бег 60 м', gold: g === 'male' ? '8.3 сек' : '9.6 сек', silver: g === 'male' ? '9.0 сек' : '10.4 сек', bronze: g === 'male' ? '9.6 сек' : '10.9 сек' },
            { discipline: 'Бег 100 м', gold: g === 'male' ? '13.8 сек' : '16.3 сек', silver: g === 'male' ? '14.6 сек' : '17.6 сек', bronze: g === 'male' ? '15.1 сек' : '18.0 сек' }
          ]
        },
        {
          name: 'Выносливость',
          type: 'Обязательное',
          options: [
            { discipline: 'Бег 2 км', gold: g === 'male' ? '8:10 мин' : '10:05 мин', silver: g === 'male' ? '9:00 мин' : '11:15 мин', bronze: g === 'male' ? '9:30 мин' : '11:40 мин' },
            { discipline: 'Бег 3 км', gold: g === 'male' ? '13:10 мин' : '—', silver: g === 'male' ? '14:40 мин' : '—', bronze: g === 'male' ? '15:20 мин' : '—' }
          ]
        }
      ],
      choice: [
        {
          name: 'Подтягивание',
          type: 'По выбору',
          options: [{ discipline: g === 'male' ? 'Подтягивание из виса' : 'Подтягивание из виса лежа', gold: g === 'male' ? '13 раз' : '19 раз', silver: g === 'male' ? '10 раз' : '13 раз', bronze: g === 'male' ? '8 раз' : '11 раз' }]
        },
        {
          name: 'Прыжок в длину',
          type: 'По выбору',
          options: [{ discipline: 'Прыжок в длину с места', gold: g === 'male' ? '230 см' : '195 см', silver: g === 'male' ? '210 см' : '180 см', bronze: g === 'male' ? '195 см' : '170 см' }]
        },
        {
          name: 'Наклон вперед',
          type: 'По выбору',
          options: [{ discipline: 'Наклон вперед от гимнастической скамьи', gold: g === 'male' ? '+13 см' : '+16 см', silver: g === 'male' ? '+8 см' : '+11 см', bronze: g === 'male' ? '+6 см' : '+8 см' }]
        }
      ]
    }),
    8: (g) => ({
      required: [
        {
          name: 'Скоростные возможности',
          type: 'Обязательное',
          options: [
            { discipline: 'Бег 60 м', gold: g === 'male' ? '8.2 сек' : '9.6 сек', silver: g === 'male' ? '8.8 сек' : '10.4 сек', bronze: g === 'male' ? '9.3 сек' : '10.9 сек' },
            { discipline: 'Бег 100 м', gold: g === 'male' ? '13.4 сек' : '16.4 сек', silver: g === 'male' ? '14.3 сек' : '17.8 сек', bronze: g === 'male' ? '14.8 сек' : '18.4 сек' }
          ]
        },
        {
          name: 'Силовые возможности',
          type: 'Обязательное',
          options: [
            { discipline: g === 'male' ? 'Подтягивание' : 'Отжимание', gold: g === 'male' ? '13 раз' : '13 раз', silver: g === 'male' ? '11 раз' : '10 раз', bronze: g === 'male' ? '9 раз' : '7 раз' },
            { discipline: 'Рывок гири 16 кг', gold: g === 'male' ? '40 раз' : '28 раз', silver: g === 'male' ? '32 раз' : '21 раз', bronze: g === 'male' ? '24 раз' : '15 раз' }
          ]
        },
        {
          name: 'Выносливость',
          type: 'Обязательное',
          options: [
            { discipline: 'Бег 2 км', gold: g === 'male' ? '—' : '10:30 мин', silver: g === 'male' ? '—' : '11:35 мин', bronze: g === 'male' ? '—' : '12:30 мин' },
            { discipline: 'Бег 3 км', gold: g === 'male' ? '12:40 мин' : '—', silver: g === 'male' ? '13:50 мин' : '—', bronze: g === 'male' ? '14:40 мин' : '—' }
          ]
        }
      ],
      choice: [
        {
          name: 'Гибкость',
          type: 'По выбору',
          options: [{ discipline: 'Наклон вперед', gold: g === 'male' ? '+13 см' : '+16 см', silver: g === 'male' ? '+8 см' : '+11 см', bronze: g === 'male' ? '+6 см' : '+8 см' }]
        },
        {
          name: 'Скоростно-силовые',
          type: 'По выбору',
          options: [
            { discipline: 'Прыжок в длину', gold: g === 'male' ? '240 см' : '195 см', silver: g === 'male' ? '230 см' : '185 см', bronze: g === 'male' ? '215 см' : '175 см' },
            { discipline: 'Метание спортивного снаряда', gold: g === 'male' ? '42 м' : '17 м', silver: g === 'male' ? '37 м' : '15 м', bronze: g === 'male' ? '32 м' : '13 м' }
          ]
        },
        {
          name: 'Прикладные навыки',
          type: 'По выбору',
          options: [{ discipline: 'Плавание 50 м', gold: g === 'male' ? '42 сек' : '1:05 мин', silver: g === 'male' ? '52 сек' : '1:14 мин', bronze: g === 'male' ? '1:03 мин' : '1:24 мин' }]
        }
      ]
    }),
    9: (g) => ({
      required: [
        {
          name: 'Скоростные возможности',
          type: 'Обязательное',
          options: [
            { discipline: 'Бег 60 м', gold: g === 'male' ? '8.1 сек' : '9.6 сек', silver: g === 'male' ? '9.0 сек' : '10.5 сек', bronze: g === 'male' ? '9.6 сек' : '11.0 сек' },
            { discipline: 'Бег 100 м', gold: g === 'male' ? '13.6 сек' : '16.0 сек', silver: g === 'male' ? '14.6 сек' : '17.1 сек', bronze: g === 'male' ? '15.3 сек' : '18.0 сек' }
          ]
        },
        {
          name: 'Выносливость',
          type: 'Обязательное',
          options: [
            { discipline: 'Бег 3 км', gold: g === 'male' ? '12:30 мин' : '—', silver: g === 'male' ? '14:20 мин' : '—', bronze: g === 'male' ? '15:20 мин' : '—' },
            { discipline: 'Кросс 5 км', gold: g === 'male' ? '22:00 мин' : '—', silver: g === 'male' ? '25:30 мин' : '—', bronze: g === 'male' ? '27:00 мин' : '—' },
            { discipline: 'Лыжная гонка 5 км', gold: g === 'male' ? '22:00 мин' : '—', silver: g === 'male' ? '26:00 мин' : '—', bronze: g === 'male' ? '28:00 мин' : '—' },
            { discipline: 'Бег 2 км', gold: g === 'male' ? '—' : '10:20 мин', silver: g === 'male' ? '—' : '11:35 мин', bronze: g === 'male' ? '—' : '12:40 мин' }
          ]
        },
        {
          name: 'Гибкость',
          type: 'Обязательное',
          options: [{ discipline: 'Наклон вперед из положения стоя на гимнастической скамье', gold: g === 'male' ? '+12 см' : '+16 см', silver: g === 'male' ? '+7 см' : '+11 см', bronze: g === 'male' ? '+5 см' : '+8 см' }]
        },
        {
          name: 'Сила',
          type: 'Обязательное',
          options: [
            { discipline: 'Подтягивание из виса на высокой перекладине', gold: g === 'male' ? '14 раз' : '—', silver: g === 'male' ? '10 раз' : '—', bronze: g === 'male' ? '6 раз' : '—' },
            { discipline: 'Сгибание и разгибание рук в упоре лёжа на полу', gold: g === 'male' ? '40 раз' : '14 раз', silver: g === 'male' ? '25 раз' : '11 раз', bronze: g === 'male' ? '21 раз' : '8 раз' },
            { discipline: 'Рывок гири 16 кг', gold: g === 'male' ? '41 раз' : '25 раз', silver: g === 'male' ? '24 раз' : '18 раз', bronze: g === 'male' ? '18 раз' : '12 раз' }
          ]
        }
      ],
      choice: [
        {
          name: 'Скоростно-силовые возможности',
          type: 'По выбору',
          options: [
            { discipline: 'Прыжок в длину с места толчком двумя ногами', gold: g === 'male' ? '239 см' : '195 см', silver: g === 'male' ? '223 см' : '180 см', bronze: g === 'male' ? '202 см' : '170 см' },
            { discipline: 'Поднимание туловища из положения лежа на спине (кол-во раз за 1 мин)', gold: g === 'male' ? '47 раз' : '—', silver: g === 'male' ? '36 раз' : '—', bronze: g === 'male' ? '29 раз' : '—' }
          ]
        },
        {
          name: 'Прикладные навыки',
          type: 'По выбору',
          options: [
            { discipline: 'Метание спортивного снаряда 700 г', gold: g === 'male' ? '38 м' : '23 м', silver: g === 'male' ? '36 м' : '20 м', bronze: g === 'male' ? '32 м' : '17 м' },
            { discipline: 'Плавание 50 м', gold: g === 'male' ? '0:53 мин' : '1:05 мин', silver: g === 'male' ? '1:03 мин' : '1:15 мин', bronze: g === 'male' ? '1:17 мин' : '1:28 мин' },
            { discipline: 'Стрельба из пневматической винтовки с открытым прицелом (очки)', gold: g === 'male' ? '25' : '—', silver: g === 'male' ? '20' : '—', bronze: g === 'male' ? '15' : '—' },
            { discipline: 'Стрельба из пневматической винтовки с диоптрическим прицелом (очки)', gold: g === 'male' ? '30' : '—', silver: g === 'male' ? '25' : '—', bronze: g === 'male' ? '18' : '—' },
            { discipline: 'Самозащита без оружия (очки)', gold: g === 'male' ? '26-30' : '—', silver: g === 'male' ? '21-25' : '—', bronze: g === 'male' ? '15-20' : '—' },
            { discipline: 'Туристский поход с проверкой навыков, не менее 15 км (кол-во навыков)', gold: g === 'male' ? '7' : '—', silver: g === 'male' ? '5' : '—', bronze: g === 'male' ? '3' : '—' }
          ]
        }
      ]
    }),
    10: (g) => ({
      required: [
        {
          name: 'Скоростные возможности',
          type: 'Обязательное',
          options: [
            { discipline: 'Бег 60 м', gold: g === 'male' ? '8.6 сек' : '10.0 сек', silver: g === 'male' ? '9.2 сек' : '10.9 сек', bronze: g === 'male' ? '10.0 сек' : '11.5 сек' },
            { discipline: 'Бег 100 м', gold: g === 'male' ? '14.2 сек' : '16.5 сек', silver: g === 'male' ? '15.0 сек' : '17.9 сек', bronze: g === 'male' ? '16.0 сек' : '18.7 сек' }
          ]
        },
        {
          name: 'Силовые возможности',
          type: 'Обязательное',
          options: [
            { discipline: g === 'male' ? 'Подтягивание' : 'Отжимание', gold: g === 'male' ? '12 раз' : '13 раз', silver: g === 'male' ? '9 раз' : '9 раз', bronze: g === 'male' ? '6 раз' : '5 раз' },
            { discipline: 'Рывок гири 16 кг', gold: g === 'male' ? '30 раз' : '20 раз', silver: g === 'male' ? '22 раз' : '15 раз', bronze: g === 'male' ? '15 раз' : '10 раз' }
          ]
        },
        {
          name: 'Выносливость',
          type: 'Обязательное',
          options: [
            { discipline: 'Бег 2 км', gold: g === 'male' ? '—' : '11:30 мин', silver: g === 'male' ? '—' : '13:00 мин', bronze: g === 'male' ? '—' : '14:00 мин' },
            { discipline: 'Бег 3 км', gold: g === 'male' ? '13:40 мин' : '—', silver: g === 'male' ? '15:00 мин' : '—', bronze: g === 'male' ? '16:10 мин' : '—' }
          ]
        }
      ],
      choice: [
        {
          name: 'Гибкость',
          type: 'По выбору',
          options: [{ discipline: 'Наклон вперед', gold: g === 'male' ? '+13 см' : '+16 см', silver: g === 'male' ? '+7 см' : '+10 см', bronze: g === 'male' ? '+5 см' : '+7 см' }]
        },
        {
          name: 'Скоростно-силовые',
          type: 'По выбору',
          options: [
            { discipline: 'Прыжок в длину', gold: g === 'male' ? '220 см' : '185 см', silver: g === 'male' ? '205 см' : '170 см', bronze: g === 'male' ? '190 см' : '160 см' },
            { discipline: 'Метание спортивного снаряда', gold: g === 'male' ? '35 м' : '20 м', silver: g === 'male' ? '30 м' : '17 м', bronze: g === 'male' ? '26 м' : '14 м' }
          ]
        },
        {
          name: 'Прикладные навыки',
          type: 'По выбору',
          options: [{ discipline: 'Плавание 50 м', gold: g === 'male' ? '55 сек' : '1:10 мин', silver: g === 'male' ? '1:05 мин' : '1:25 мин', bronze: g === 'male' ? '1:20 мин' : '1:40 мин' }]
        }
      ]
    })
  };

  for (let i = 11; i <= 18; i++) {
    allStages[i] = (g) => ({
      required: [
        {
          name: 'Скоростные возможности',
          type: 'Обязательное',
          options: [{ discipline: 'Бег 60 м', gold: g === 'male' ? `${8.5 + (i - 10) * 0.5} сек` : `${10.0 + (i - 10) * 0.5} сек`, silver: g === 'male' ? `${9.5 + (i - 10) * 0.5} сек` : `${11.0 + (i - 10) * 0.5} сек`, bronze: g === 'male' ? `${10.5 + (i - 10) * 0.5} сек` : `${12.0 + (i - 10) * 0.5} сек` }]
        },
        {
          name: 'Выносливость',
          type: 'Обязательное',
          options: [{ discipline: g === 'male' ? 'Бег 3 км' : 'Бег 2 км', gold: g === 'male' ? `${14 + (i - 10)}:00 мин` : `${12 + (i - 10)}:00 мин`, silver: g === 'male' ? `${15 + (i - 10)}:30 мин` : `${13 + (i - 10)}:30 мин`, bronze: g === 'male' ? `${17 + (i - 10)}:00 мин` : `${15 + (i - 10)}:00 мин` }]
        }
      ],
      choice: [
        {
          name: 'Силовые',
          type: 'По выбору',
          options: [{ discipline: g === 'male' ? 'Подтягивание' : 'Отжимание', gold: g === 'male' ? `${12 - (i - 10)} раз` : `${13 - (i - 10)} раз`, silver: g === 'male' ? `${9 - (i - 11)} раз` : `${9 - (i - 11)} раз`, bronze: g === 'male' ? `${6 - (i - 11)} раз` : `${5 - (i - 11)} раз` }]
        },
        {
          name: 'Гибкость',
          type: 'По выбору',
          options: [{ discipline: 'Наклон вперед', gold: g === 'male' ? '+13 см' : '+16 см', silver: g === 'male' ? '+7 см' : '+10 см', bronze: g === 'male' ? '+5 см' : '+7 см' }]
        }
      ]
    });
  }

  const stageFunc = allStages[stageNumber] || allStages[9];
  return stageFunc(gender);
};

export const getAllStages = () => {
  return [
    { number: 1, name: 'I ступень', ageRange: '6-7 лет', minAge: 6, maxAge: 7 },
    { number: 2, name: 'II ступень', ageRange: '8-9 лет', minAge: 8, maxAge: 9 },
    { number: 3, name: 'III ступень', ageRange: '10-11 лет', minAge: 10, maxAge: 11 },
    { number: 4, name: 'IV ступень', ageRange: '12-13 лет', minAge: 12, maxAge: 13 },
    { number: 5, name: 'V ступень', ageRange: '14-15 лет', minAge: 14, maxAge: 15 },
    { number: 6, name: 'VI ступень', ageRange: '16-17 лет', minAge: 16, maxAge: 17 },
    { number: 7, name: 'VII ступень', ageRange: '18-19 лет', minAge: 18, maxAge: 19 },
    { number: 8, name: 'VIII ступень', ageRange: '20-24 лет', minAge: 20, maxAge: 24 },
    { number: 9, name: 'IX ступень', ageRange: '25-29 лет', minAge: 25, maxAge: 29 },
    { number: 10, name: 'X ступень', ageRange: '30-34 лет', minAge: 30, maxAge: 34 },
    { number: 11, name: 'XI ступень', ageRange: '35-39 лет', minAge: 35, maxAge: 39 },
    { number: 12, name: 'XII ступень', ageRange: '40-44 лет', minAge: 40, maxAge: 44 },
    { number: 13, name: 'XIII ступень', ageRange: '45-49 лет', minAge: 45, maxAge: 49 },
    { number: 14, name: 'XIV ступень', ageRange: '50-54 лет', minAge: 50, maxAge: 54 },
    { number: 15, name: 'XV ступень', ageRange: '55-59 лет', minAge: 55, maxAge: 59 },
    { number: 16, name: 'XVI ступень', ageRange: '60-64 лет', minAge: 60, maxAge: 64 },
    { number: 17, name: 'XVII ступень', ageRange: '65-69 лет', minAge: 65, maxAge: 69 },
    { number: 18, name: 'XVIII ступень', ageRange: '70+ лет', minAge: 70, maxAge: 120 },
  ];
};

export { createStandards };