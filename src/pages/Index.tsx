import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [selectedAge, setSelectedAge] = useState<number | null>(null);
  const [selectedGender, setSelectedGender] = useState<'male' | 'female'>('male');

  const getStageByAge = (age: number): { number: number; name: string; ageRange: string } => {
    const stages = [
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

    const stage = stages.find(s => age >= s.minAge && age <= s.maxAge);
    return stage || stages[8];
  };

  const userData = {
    name: 'Иванов Иван Иванович',
    birthDate: '15.03.1995',
    age: 29,
    stage: getStageByAge(29),
    uin: '1234567890',
    gender: 'Мужской',
    badges: ['Золото 2023', 'Серебро 2022'],
    progress: 75,
  };

  const currentStage = isAuthorized ? userData.stage : (selectedAge ? getStageByAge(selectedAge) : null);

  const getStandardsByStage = (stageNumber: number, gender: 'male' | 'female') => {
    const standardsMap: Record<number, any> = {
      9: {
        required: [
          {
            name: 'Скоростные возможности',
            type: 'Обязательное',
            options: [
              {
                discipline: 'Бег 60 м',
                gold: gender === 'male' ? '8.1 сек' : '9.6 сек',
                silver: gender === 'male' ? '9.0 сек' : '10.5 сек',
                bronze: gender === 'male' ? '9.6 сек' : '11.0 сек'
              },
              {
                discipline: 'Бег 100 м',
                gold: gender === 'male' ? '13.6 сек' : '16.0 сек',
                silver: gender === 'male' ? '14.6 сек' : '17.1 сек',
                bronze: gender === 'male' ? '15.3 сек' : '18.0 сек'
              }
            ]
          },
          {
            name: 'Силовые возможности',
            type: 'Обязательное',
            options: [
              {
                discipline: gender === 'male' ? 'Подтягивание' : 'Отжимание',
                gold: gender === 'male' ? '13 раз' : '14 раз',
                silver: gender === 'male' ? '10 раз' : '11 раз',
                bronze: gender === 'male' ? '7 раз' : '8 раз'
              },
              {
                discipline: 'Рывок гири 16 кг',
                gold: gender === 'male' ? '35 раз' : '25 раз',
                silver: gender === 'male' ? '25 раз' : '18 раз',
                bronze: gender === 'male' ? '18 раз' : '12 раз'
              }
            ]
          },
          {
            name: 'Выносливость',
            type: 'Обязательное',
            options: [
              {
                discipline: 'Бег 2 км',
                gold: gender === 'male' ? '8:10 мин' : '10:20 мин',
                silver: gender === 'male' ? '9:20 мин' : '11:35 мин',
                bronze: gender === 'male' ? '10:00 мин' : '12:40 мин'
              },
              {
                discipline: 'Бег 3 км',
                gold: gender === 'male' ? '13:00 мин' : '—',
                silver: gender === 'male' ? '14:30 мин' : '—',
                bronze: gender === 'male' ? '15:40 мин' : '—'
              }
            ]
          }
        ],
        choice: [
          {
            name: 'Гибкость',
            type: 'По выбору',
            options: [
              {
                discipline: 'Наклон вперед',
                gold: gender === 'male' ? '+13 см' : '+16 см',
                silver: gender === 'male' ? '+8 см' : '+11 см',
                bronze: gender === 'male' ? '+6 см' : '+8 см'
              }
            ]
          },
          {
            name: 'Скоростно-силовые',
            type: 'По выбору',
            options: [
              {
                discipline: 'Прыжок в длину',
                gold: gender === 'male' ? '230 см' : '195 см',
                silver: gender === 'male' ? '215 см' : '180 см',
                bronze: gender === 'male' ? '200 см' : '170 см'
              },
              {
                discipline: 'Метание мяча',
                gold: gender === 'male' ? '37 м' : '23 м',
                silver: gender === 'male' ? '33 м' : '20 м',
                bronze: gender === 'male' ? '30 м' : '17 м'
              }
            ]
          },
          {
            name: 'Прикладные навыки',
            type: 'По выбору',
            options: [
              {
                discipline: 'Плавание 50 м',
                gold: gender === 'male' ? '50 сек' : '1:05 мин',
                silver: gender === 'male' ? '1:00 мин' : '1:15 мин',
                bronze: gender === 'male' ? '1:10 мин' : '1:28 мин'
              }
            ]
          }
        ]
      }
    };

    return standardsMap[stageNumber] || standardsMap[9];
  };

  const testCenters = [
    { id: 1, name: 'СК "Олимпийский"', address: 'ул. Ленина, 45', distance: '1.2 км' },
    { id: 2, name: 'Спортивный центр "Энергия"', address: 'пр. Победы, 12', distance: '2.5 км' },
    { id: 3, name: 'Стадион "Локомотив"', address: 'ул. Спортивная, 8', distance: '3.8 км' },
  ];

  const news = [
    { id: 1, title: 'Открытие нового центра тестирования', date: '10.12.2024', image: '🏃' },
    { id: 2, title: 'Изменения в нормативах с 2025 года', date: '08.12.2024', image: '📋' },
    { id: 3, title: 'Массовая сдача ГТО 15 декабря', date: '05.12.2024', image: '🎯' },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-card border-b border-border sticky top-0 z-10 shadow-sm">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">ГТО</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">ГТО России</h1>
                <p className="text-xs text-muted-foreground">Готов к труду и обороне</p>
              </div>
            </div>
            {!isAuthorized && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsAuthorized(true)}
                className="flex items-center gap-2"
              >
                <Icon name="LogIn" size={16} />
                Войти
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="px-4 py-6">
        {activeTab === 'home' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-6 text-white shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Добро пожаловать!</h2>
              <p className="text-sm opacity-90">
                {isAuthorized 
                  ? 'Вы авторизованы через Госуслуги'
                  : 'Войдите через Госуслуги для полного доступа'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Card 
                className="p-4 hover-scale cursor-pointer"
                onClick={() => setActiveTab('centers')}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium">Центры</span>
                </div>
              </Card>

              <Card 
                className="p-4 hover-scale cursor-pointer"
                onClick={() => setActiveTab('standards')}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon name="Target" size={24} className="text-secondary" />
                  </div>
                  <span className="text-sm font-medium">Нормативы</span>
                </div>
              </Card>

              <Card 
                className="p-4 hover-scale cursor-pointer"
                onClick={() => setActiveTab('booking')}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Calendar" size={24} className="text-accent" />
                  </div>
                  <span className="text-sm font-medium">Запись</span>
                </div>
              </Card>

              <Card 
                className="p-4 hover-scale cursor-pointer"
                onClick={() => setActiveTab('news')}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Newspaper" size={24} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium">Новости</span>
                </div>
              </Card>
            </div>

            <Card className="p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="TrendingUp" size={20} className="text-primary" />
                Последние новости
              </h3>
              <div className="space-y-3">
                {news.slice(0, 2).map(item => (
                  <div key={item.id} className="flex gap-3 pb-3 border-b last:border-0">
                    <div className="text-3xl">{item.image}</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="space-y-4 animate-fade-in">
            {isAuthorized ? (
              <>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                        {userData.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold">{userData.name}</h2>
                      <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <p>Дата рождения: {userData.birthDate}</p>
                        <p>Возраст: {userData.age} лет</p>
                        <p className="font-medium text-primary">{userData.stage.name} ({userData.stage.ageRange})</p>
                        <p>УИН: {userData.uin}</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Award" size={20} className="text-primary" />
                    Знаки отличия
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {userData.badges.map((badge, i) => (
                      <Badge key={i} variant="secondary" className="px-4 py-2">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Activity" size={20} className="text-primary" />
                    Прогресс выполнения
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Выполнено испытаний</span>
                      <span className="font-semibold">{userData.progress}%</span>
                    </div>
                    <Progress value={userData.progress} className="h-2" />
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Icon name="FileText" size={20} className="text-primary" />
                    Результаты испытаний
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Бег 100м</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Выполнено
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Подтягивание</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Выполнено
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Прыжок в длину</span>
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        В процессе
                      </Badge>
                    </div>
                  </div>
                </Card>
              </>
            ) : (
              <Card className="p-8 text-center">
                <Icon name="User" size={48} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="font-semibold text-lg mb-2">Личный кабинет</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Войдите через Госуслуги для доступа к личному кабинету
                </p>
                <Button onClick={() => setIsAuthorized(true)} className="gap-2">
                  <Icon name="LogIn" size={18} />
                  Войти через Госуслуги
                </Button>
              </Card>
            )}
          </div>
        )}

        {activeTab === 'centers' && (
          <div className="space-y-4 animate-fade-in">
            <div className="relative">
              <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
                <Icon name="Map" size={48} className="text-muted-foreground" />
              </div>
            </div>

            <Card className="p-4">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="MapPin" size={20} className="text-primary" />
                Ближайшие центры
              </h3>
              <div className="space-y-3">
                {testCenters.map(center => (
                  <div key={center.id} className="p-4 bg-muted/50 rounded-lg hover-scale cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{center.name}</h4>
                      <Badge variant="secondary">{center.distance}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="MapPin" size={14} />
                      {center.address}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'standards' && (
          <div className="space-y-4 animate-fade-in">
            {!isAuthorized && (
              <Card className="p-4">
                <h3 className="font-semibold mb-3">Выберите возраст и пол</h3>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Возраст</label>
                    <Select value={selectedAge?.toString() || ''} onValueChange={(v) => setSelectedAge(parseInt(v))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Ваш возраст" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 65 }, (_, i) => i + 6).map(age => (
                          <SelectItem key={age} value={age.toString()}>
                            {age} {age === 1 ? 'год' : age < 5 ? 'года' : 'лет'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Пол</label>
                    <Select value={selectedGender} onValueChange={(v: 'male' | 'female') => setSelectedGender(v)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Мужской</SelectItem>
                        <SelectItem value="female">Женский</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>
            )}

            {currentStage && (
              <>
                <Card className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Target" size={20} className="text-primary" />
                    <h3 className="font-semibold">{currentStage.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Возраст: {currentStage.ageRange}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Для получения знака отличия необходимо выполнить все обязательные испытания и 2 по выбору
                  </p>
                </Card>

                {(() => {
                  const standards = getStandardsByStage(currentStage.number, isAuthorized ? 'male' : selectedGender);
                  return (
                    <>
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm flex items-center gap-2">
                          <Icon name="AlertCircle" size={16} className="text-primary" />
                          Обязательные испытания
                        </h4>
                        {standards.required.map((category: any, i: number) => (
                          <Card key={i} className="p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h4 className="font-medium">{category.name}</h4>
                                <Badge variant="outline" className="mt-1 text-xs bg-red-50 text-red-700 border-red-200">
                                  {category.type}
                                </Badge>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground mb-3">Выберите одну дисциплину:</p>
                            {category.options.map((option: any, j: number) => (
                              <div key={j} className="mb-3 last:mb-0">
                                <p className="text-sm font-medium mb-2">{option.discipline}</p>
                                <div className="grid grid-cols-3 gap-2 text-xs">
                                  <div className="bg-yellow-50 rounded p-2 border border-yellow-200">
                                    <p className="text-yellow-700 font-medium mb-1">🥇 Золото</p>
                                    <p className="font-semibold text-yellow-900">{option.gold}</p>
                                  </div>
                                  <div className="bg-gray-50 rounded p-2 border border-gray-300">
                                    <p className="text-gray-700 font-medium mb-1">🥈 Серебро</p>
                                    <p className="font-semibold text-gray-900">{option.silver}</p>
                                  </div>
                                  <div className="bg-orange-50 rounded p-2 border border-orange-200">
                                    <p className="text-orange-700 font-medium mb-1">🥉 Бронза</p>
                                    <p className="font-semibold text-orange-900">{option.bronze}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </Card>
                        ))}
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-medium text-sm flex items-center gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-secondary" />
                          Испытания по выбору (выберите 2)
                        </h4>
                        {standards.choice.map((category: any, i: number) => (
                          <Card key={i} className="p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h4 className="font-medium">{category.name}</h4>
                                <Badge variant="outline" className="mt-1 text-xs bg-blue-50 text-blue-700 border-blue-200">
                                  {category.type}
                                </Badge>
                              </div>
                            </div>
                            {category.options.map((option: any, j: number) => (
                              <div key={j} className="mb-3 last:mb-0">
                                <p className="text-sm font-medium mb-2">{option.discipline}</p>
                                <div className="grid grid-cols-3 gap-2 text-xs">
                                  <div className="bg-yellow-50 rounded p-2 border border-yellow-200">
                                    <p className="text-yellow-700 font-medium mb-1">🥇 Золото</p>
                                    <p className="font-semibold text-yellow-900">{option.gold}</p>
                                  </div>
                                  <div className="bg-gray-50 rounded p-2 border border-gray-300">
                                    <p className="text-gray-700 font-medium mb-1">🥈 Серебро</p>
                                    <p className="font-semibold text-gray-900">{option.silver}</p>
                                  </div>
                                  <div className="bg-orange-50 rounded p-2 border border-orange-200">
                                    <p className="text-orange-700 font-medium mb-1">🥉 Бронза</p>
                                    <p className="font-semibold text-orange-900">{option.bronze}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </Card>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </>
            )}

            {!isAuthorized && !selectedAge && (
              <Card className="p-8 text-center">
                <Icon name="Target" size={48} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="font-semibold text-lg mb-2">Нормативы ГТО</h3>
                <p className="text-sm text-muted-foreground">
                  Выберите возраст и пол для просмотра нормативов
                </p>
              </Card>
            )}
          </div>
        )}

        {activeTab === 'booking' && (
          <div className="space-y-4 animate-fade-in">
            {isAuthorized ? (
              <>
                <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Calendar" size={20} className="text-primary" />
                    Запись на тестирование
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Выберите центр тестирования и удобное время
                  </p>
                </Card>

                <div className="space-y-3">
                  {testCenters.map(center => (
                    <Card key={center.id} className="p-4">
                      <h4 className="font-medium mb-2">{center.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{center.address}</p>
                      <Button className="w-full" variant="outline">
                        Записаться через Госуслуги
                      </Button>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <Card className="p-8 text-center">
                <Icon name="Calendar" size={48} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="font-semibold text-lg mb-2">Запись на тестирование</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Для записи необходимо войти через Госуслуги
                </p>
                <Button onClick={() => setIsAuthorized(true)} className="gap-2">
                  <Icon name="LogIn" size={18} />
                  Войти через Госуслуги
                </Button>
              </Card>
            )}
          </div>
        )}

        {activeTab === 'news' && (
          <div className="space-y-4 animate-fade-in">
            <Card className="p-4">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Newspaper" size={20} className="text-primary" />
                Новости ГТО
              </h3>
            </Card>

            <div className="space-y-3">
              {news.map(item => (
                <Card key={item.id} className="p-4 hover-scale cursor-pointer">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                      {item.image}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Icon name="Calendar" size={12} />
                        {item.date}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg">
        <div className="flex justify-around items-center h-16 px-2">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'home' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <Icon name="Home" size={22} />
            <span className="text-xs font-medium">Главная</span>
          </button>

          <button
            onClick={() => setActiveTab('centers')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'centers' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <Icon name="MapPin" size={22} />
            <span className="text-xs font-medium">Центры</span>
          </button>

          <button
            onClick={() => setActiveTab('standards')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'standards' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <Icon name="Target" size={22} />
            <span className="text-xs font-medium">Нормативы</span>
          </button>

          <button
            onClick={() => setActiveTab('booking')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'booking' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <Icon name="Calendar" size={22} />
            <span className="text-xs font-medium">Запись</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'profile' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <Icon name="User" size={22} />
            <span className="text-xs font-medium">Профиль</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Index;
