import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface MainTabProps {
  isAuthorized: boolean;
  news: Array<{
    id: number;
    title: string;
    date: string;
    description: string;
    image: string;
  }>;
}

const MainTab = ({ isAuthorized, news }: MainTabProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Добро пожаловать!</h2>
        <p className="text-sm opacity-90">
          {isAuthorized 
            ? 'Вы авторизованы через Госуслуги'
            : 'Войдите через Госуслуги для полного доступа'}
        </p>
      </div>

      <Card className="p-4">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Icon name="TrendingUp" size={20} className="text-primary" />
          Последние новости
        </h3>
        <div className="space-y-3">
          {news.slice(0, 2).map((item, index) => (
            <div key={item.id} className="flex gap-3 pb-3 border-b last:border-0">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-xl" 
                   style={{background: index === 0 ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>
                {item.image}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default MainTab;
