import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import YandexMap from '@/components/YandexMap';

interface TestCenter {
  id: number;
  name: string;
  address: string;
  distance: string;
  phone: string;
  schedule: string;
  coordinates: [number, number];
}

interface BookingTabProps {
  isAuthorized: boolean;
  setIsAuthorized: (value: boolean) => void;
  centerSearch: string;
  setCenterSearch: (value: string) => void;
  selectedCenter: number | null;
  setSelectedCenter: (id: number | null) => void;
  testCenters: TestCenter[];
}

const BookingTab = ({
  isAuthorized,
  setIsAuthorized,
  centerSearch,
  setCenterSearch,
  selectedCenter,
  setSelectedCenter,
  testCenters,
}: BookingTabProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
        <h3 className="font-semibold mb-2 flex items-center gap-2">
          <Icon name="Calendar" size={20} className="text-primary" />
          Центры тестирования ГТО
        </h3>
        <p className="text-sm text-muted-foreground">
          {isAuthorized 
            ? "Выберите центр тестирования и удобное время" 
            : "Просмотрите доступные центры тестирования"}
        </p>
      </Card>

      <div className="mb-4">
        <div className="relative">
          <Icon name="Search" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Поиск по названию или адресу..."
            value={centerSearch}
            onChange={(e) => setCenterSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {!selectedCenter && (
        <Card className="overflow-hidden mb-4">
          <YandexMap 
            centers={testCenters.filter(center => 
              center.name.toLowerCase().includes(centerSearch.toLowerCase()) ||
              center.address.toLowerCase().includes(centerSearch.toLowerCase())
            )}
            onCenterClick={(center) => setSelectedCenter(center.id)}
            height="256px"
          />
        </Card>
      )}

      {selectedCenter ? (
        <div className="space-y-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setSelectedCenter(null)}
            className="flex items-center gap-2"
          >
            <Icon name="ArrowLeft" size={18} />
            Назад к списку
          </Button>
          {(() => {
            const center = testCenters.find(c => c.id === selectedCenter);
            if (!center) return null;
            return (
              <>
                <Card className="overflow-hidden mb-4">
                  <YandexMap 
                    centers={[center]}
                    selectedCenter={center}
                    height="256px"
                  />
                </Card>
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{center.name}</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Адрес</p>
                        <p className="text-sm text-muted-foreground">{center.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Телефон</p>
                        <p className="text-sm text-muted-foreground">{center.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Режим работы</p>
                        <p className="text-sm text-muted-foreground">{center.schedule}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Navigation" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Расстояние</p>
                        <p className="text-sm text-muted-foreground">{center.distance}</p>
                      </div>
                    </div>
                  </div>
                  
                  {isAuthorized ? (
                    <Button className="w-full">
                      Записаться через Госуслуги
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <div className="text-center p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          Для записи необходимо войти через Госуслуги
                        </p>
                      </div>
                      <Button onClick={() => setIsAuthorized(true)} className="w-full gap-2">
                        <Icon name="LogIn" size={18} />
                        Войти через Госуслуги
                      </Button>
                    </div>
                  )}
                </Card>
              </>
            );
          })()}
        </div>
      ) : (
        <div className="space-y-3">
          {testCenters
            .filter(center => 
              center.name.toLowerCase().includes(centerSearch.toLowerCase()) ||
              center.address.toLowerCase().includes(centerSearch.toLowerCase())
            )
            .map(center => (
              <Card 
                key={center.id} 
                className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSelectedCenter(center.id)}
              >
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{center.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{center.address}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="Navigation" size={14} />
                        {center.distance}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {center.schedule.split(',')[0]}
                      </span>
                    </div>
                  </div>
                  <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                </div>
              </Card>
            ))}
        </div>
      )}
    </div>
  );
};

export default BookingTab;