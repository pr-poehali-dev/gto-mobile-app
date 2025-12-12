import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface NewsTabProps {
  news: Array<{
    id: number;
    title: string;
    date: string;
    description: string;
    image: string;
  }>;
}

const NewsTab = ({ news }: NewsTabProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold">Новости ГТО</h2>

      <div className="space-y-6">
        {news.map(item => (
          <Card key={item.id} className="overflow-hidden hover-scale cursor-pointer">
            <div className="w-full h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-2 mb-3">
                <Icon name="Calendar" size={14} />
                {item.date}
              </p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsTab;
