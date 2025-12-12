import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface ProfileTabProps {
  userData: {
    name: string;
    birthDate: string;
    age: number;
    stage: { number: number; name: string; ageRange: string };
    uin: string;
    gender: string;
    badges: string[];
    appointments: Array<{
      id: number;
      discipline: string;
      date: string;
      time: string;
      center: string;
    }>;
  };
}

const ProfileTab = ({ userData }: ProfileTabProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <Card className="p-4">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" />
            <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
              {userData.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="w-full text-center">
            <h2 className="text-xl font-bold mb-3">{userData.name}</h2>
            <div className="font-semibold text-primary bg-primary/10 px-3 py-2 rounded-lg mb-4 inline-block">
              {userData.stage.name} ({userData.stage.ageRange})
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-1.5 border-b">
                <span className="text-muted-foreground">Дата рождения:</span>
                <span className="font-medium">{userData.birthDate}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b">
                <span className="text-muted-foreground">Возраст:</span>
                <span className="font-medium">{userData.age} лет</span>
              </div>
              <div className="flex justify-between py-1.5 border-b">
                <span className="text-muted-foreground">Пол:</span>
                <span className="font-medium">{userData.gender}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-muted-foreground">УИН:</span>
                <span className="font-medium">{userData.uin}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Icon name="Calendar" size={20} className="text-primary" />
          Записи на испытания
        </h3>
        <div className="space-y-3">
          {userData.appointments.map(app => (
            <div key={app.id} className="p-3 bg-muted/50 rounded-lg">
              <div className="flex justify-between items-start mb-1">
                <p className="font-medium text-sm">{app.discipline}</p>
                <Badge variant="secondary" className="text-xs">{app.date}</Badge>
              </div>
              <p className="text-xs text-muted-foreground">{app.time} • {app.center}</p>
            </div>
          ))}
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
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-400 flex items-center gap-1">
              🥇 Золото
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Подтягивание</span>
            <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-400 flex items-center gap-1">
              🥈 Серебро
            </Badge>
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
    </div>
  );
};

export default ProfileTab;