import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NotificationsViewProps {
  userData: {
    notifications: Array<{
      id: number;
      text: string;
      date: string;
      read: boolean;
    }>;
  };
  onBack: () => void;
}

const NotificationsView = ({ userData, onBack }: NotificationsViewProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <Button 
        variant="ghost" 
        size="sm"
        onClick={onBack}
        className="flex items-center gap-2 mb-2"
      >
        <Icon name="ArrowLeft" size={20} />
        Назад
      </Button>
      <h2 className="text-xl font-bold mb-4">Уведомления</h2>
      
      <div className="space-y-3">
        {userData.notifications.map(notif => (
          <Card key={notif.id} className={`p-4 ${
            notif.read ? 'bg-muted/30 border-muted' : 'bg-blue-50 border-blue-200'
          }`}>
            <div className="flex items-start gap-2">
              {!notif.read && (
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
              )}
              <div className="flex-1">
                <p className="text-sm">{notif.text}</p>
                <p className="text-xs text-muted-foreground mt-1">{notif.date}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NotificationsView;
