import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { createStandards, getAllStages } from '@/data/gtoStandards';
import MainTab from '@/components/tabs/MainTab';
import ProfileTab from '@/components/tabs/ProfileTab';
import StandardsTab from '@/components/tabs/StandardsTab';
import BookingTab from '@/components/tabs/BookingTab';
import NotificationsView from '@/components/tabs/NotificationsView';
import NewsTab from '@/components/tabs/NewsTab';

const Index = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [selectedAge, setSelectedAge] = useState<number | null>(null);
  const [selectedGender, setSelectedGender] = useState<'male' | 'female'>('male');
  const [userGender, setUserGender] = useState<'male' | 'female'>('male');
  const [selectedStageNumber, setSelectedStageNumber] = useState<number | null>(null);
  const [showAllStages, setShowAllStages] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [previousTab, setPreviousTab] = useState('news');
  const [centerSearch, setCenterSearch] = useState('');
  const [selectedCenter, setSelectedCenter] = useState<number | null>(null);

  const ageRanges = [
    { label: '6-7 лет', minAge: 6, maxAge: 7 },
    { label: '8-9 лет', minAge: 8, maxAge: 9 },
    { label: '10-11 лет', minAge: 10, maxAge: 11 },
    { label: '12-13 лет', minAge: 12, maxAge: 13 },
    { label: '14-15 лет', minAge: 14, maxAge: 15 },
    { label: '16-17 лет', minAge: 16, maxAge: 17 },
    { label: '18-19 лет', minAge: 18, maxAge: 19 },
    { label: '20-24 лет', minAge: 20, maxAge: 24 },
    { label: '25-29 лет', minAge: 25, maxAge: 29 },
    { label: '30-34 лет', minAge: 30, maxAge: 34 },
    { label: '35-39 лет', minAge: 35, maxAge: 39 },
    { label: '40-44 лет', minAge: 40, maxAge: 44 },
    { label: '45-49 лет', minAge: 45, maxAge: 49 },
    { label: '50-54 лет', minAge: 50, maxAge: 54 },
    { label: '55-59 лет', minAge: 55, maxAge: 59 },
    { label: '60-64 лет', minAge: 60, maxAge: 64 },
    { label: '65-69 лет', minAge: 65, maxAge: 69 },
    { label: '70 лет и старше', minAge: 70, maxAge: 120 },
  ];

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
    gender: userGender === 'male' ? 'Мужской' : 'Женский',
    badges: ['Золото 2023', 'Серебро 2022'],
    progress: 75,
    appointments: [
      { id: 1, discipline: 'Бег 100м', date: '20.12.2024', time: '10:00', center: 'СЦ Энергия' },
      { id: 2, discipline: 'Подтягивание', date: '22.12.2024', time: '14:00', center: 'СК Олимпийский' },
    ],
    notifications: [
      { id: 1, text: 'Запись на испытание "Бег 100м" подтверждена', date: '10.12.2024', read: false },
      { id: 2, text: 'Результаты испытания "Подтягивание" загружены', date: '08.12.2024', read: true },
      { id: 3, text: 'Новый центр тестирования открыт рядом с вами', date: '05.12.2024', read: true },
    ]
  };

  const currentStage = isAuthorized 
    ? (selectedStageNumber ? getStageByAge(selectedStageNumber * 3 + 6) : userData.stage)
    : (showAllStages && selectedStageNumber 
      ? getAllStages().find(s => s.number === selectedStageNumber)!
      : (selectedAge ? getStageByAge(selectedAge) : null));

  const getStandardsByStage = (stageNumber: number, gender: 'male' | 'female') => {
    return createStandards(stageNumber, gender);
  };

  const testCenters = [
    { 
      id: 1, 
      name: 'СК "Олимпийский"', 
      address: 'Олимпийский просп., 16, Москва', 
      distance: '1.2 км',
      phone: '+7 (495) 645-01-11',
      schedule: 'Пн-Пт: 8:00-20:00, Сб-Вс: 9:00-18:00',
      coordinates: [55.787448, 37.599194] as [number, number]
    },
    { 
      id: 2, 
      name: 'Спортивный центр "Лужники"', 
      address: 'Лужнецкая наб., 24, Москва', 
      distance: '2.5 км',
      phone: '+7 (495) 780-08-08',
      schedule: 'Ежедневно: 7:00-22:00',
      coordinates: [55.715765, 37.553604] as [number, number]
    },
    { 
      id: 3, 
      name: 'Стадион "Локомотив"', 
      address: 'Большая Черкизовская ул., 125, Москва', 
      distance: '3.8 км',
      phone: '+7 (495) 161-26-26',
      schedule: 'Пн-Вс: 6:00-23:00',
      coordinates: [55.812075, 37.736275] as [number, number]
    },
  ];

  const news = [
    { id: 1, title: 'Судейский состав ГТО становится сильнее!', date: '10.12.2024', description: 'В городе открылся новый современный центр тестирования ГТО с полным набором спортивного оборудования', image: 'https://cdn.poehali.dev/files/b34ecrs0f7fp3miayivbbacd5ccahjiy.jpg' },
    { id: 2, title: 'Развитие всероссийского комплекса ГТО в ХМАО', date: '08.12.2024', description: 'Министерство спорта утвердило новые нормативы для всех возрастных категорий', image: 'https://cdn.poehali.dev/files/agk82qxgmm71j9uiv07dpr0js223b02p.jpg' },
    { id: 3, title: 'Комплекс ГТО- путь к здоровью и успеху', date: '05.12.2024', description: 'Приглашаем всех желающих принять участие в массовом мероприятии по сдаче норм ГТО', image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80' },
  ];

  const handleNotificationsClick = () => {
    setPreviousTab(activeTab);
    setShowNotifications(true);
  };

  const handleBackFromNotifications = () => {
    setShowNotifications(false);
    setActiveTab(previousTab);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto pb-20">
        <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <img src="https://cdn.poehali.dev/files/24.06.png" alt="ГТО" className="h-10 ml-2" />
            </div>
            {!isAuthorized ? (
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsAuthorized(true)}
                  className="text-xs px-3"
                >
                  Войти
                </Button>
                <Button 
                  size="sm"
                  onClick={() => setIsAuthorized(true)}
                  className="text-xs px-3"
                >
                  Регистрация
                </Button>
              </div>
            ) : (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={handleNotificationsClick}
                className="relative h-20 w-20"
              >
                <Icon name="Bell" size={80} />
                {userData.notifications.filter(n => !n.read).length > 0 && (
                  <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
                    {userData.notifications.filter(n => !n.read).length}
                  </span>
                )}
              </Button>
            )}
          </div>
        </header>

        <main className="p-4">
          {showNotifications ? (
            <NotificationsView 
              userData={userData}
              onBack={handleBackFromNotifications}
            />
          ) : activeTab === 'news' ? (
            <NewsTab news={news} />
          ) : activeTab === 'main' ? (
            <MainTab isAuthorized={isAuthorized} news={news} />
          ) : activeTab === 'profile' ? (
            isAuthorized ? (
              <ProfileTab 
                userData={userData} 
                onLogout={() => setIsAuthorized(false)} 
                onGenderChange={(gender) => setUserGender(gender)}
              />
            ) : (
              <div className="text-center p-8">
                <Icon name="User" size={48} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="font-semibold text-lg mb-2">Профиль</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Для просмотра профиля необходимо войти через Госуслуги
                </p>
                <Button onClick={() => setIsAuthorized(true)} className="gap-2">
                  <Icon name="LogIn" size={18} />
                  Войти через Госуслуги
                </Button>
              </div>
            )
          ) : activeTab === 'standards' ? (
            <StandardsTab
              isAuthorized={isAuthorized}
              selectedAge={selectedAge}
              setSelectedAge={setSelectedAge}
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
              currentStage={currentStage}
              getStandardsByStage={getStandardsByStage}
              ageRanges={ageRanges}
              selectedStageNumber={selectedStageNumber}
              setSelectedStageNumber={setSelectedStageNumber}
              userGender={userGender}
            />
          ) : activeTab === 'booking' ? (
            <BookingTab
              isAuthorized={isAuthorized}
              setIsAuthorized={setIsAuthorized}
              centerSearch={centerSearch}
              setCenterSearch={setCenterSearch}
              selectedCenter={selectedCenter}
              setSelectedCenter={setSelectedCenter}
              testCenters={testCenters}
            />
          ) : null}
        </main>

        <nav className="fixed bottom-0 left-0 right-0 bg-background border-t">
          <div className="max-w-2xl mx-auto flex justify-around items-center p-2">
            <button
              onClick={() => setActiveTab('news')}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                activeTab === 'news' ? 'text-primary bg-primary/10' : 'text-muted-foreground'
              }`}
            >
              <Icon name="Newspaper" size={24} />
              <span className="text-xs">Новости</span>
            </button>
            <button
              onClick={() => setActiveTab('standards')}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                activeTab === 'standards' ? 'text-primary bg-primary/10' : 'text-muted-foreground'
              }`}
            >
              <Icon name="Trophy" size={24} />
              <span className="text-xs">Нормативы</span>
            </button>
            <button
              onClick={() => setActiveTab('booking')}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                activeTab === 'booking' ? 'text-primary bg-primary/10' : 'text-muted-foreground'
              }`}
            >
              <Icon name="Calendar" size={24} />
              <span className="text-xs">Запись</span>
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                activeTab === 'profile' ? 'text-primary bg-primary/10' : 'text-muted-foreground'
              }`}
            >
              <Icon name="User" size={24} />
              <span className="text-xs">Профиль</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Index;