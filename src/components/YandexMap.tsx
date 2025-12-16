import { useEffect, useRef } from 'react';

interface TestCenter {
  id: number;
  name: string;
  address: string;
  distance: string;
  phone: string;
  schedule: string;
  coordinates: [number, number];
}

interface YandexMapProps {
  centers: TestCenter[];
  selectedCenter?: TestCenter | null;
  onCenterClick?: (center: TestCenter) => void;
  height?: string;
}

declare global {
  interface Window {
    ymaps: any;
  }
}

const YandexMap = ({ centers, selectedCenter, onCenterClick, height = '256px' }: YandexMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const initMap = () => {
      if (!window.ymaps) {
        setTimeout(initMap, 100);
        return;
      }

      window.ymaps.ready(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.destroy();
        }

        const centerCoords = selectedCenter 
          ? selectedCenter.coordinates 
          : [55.753544, 37.622504];
        
        const zoom = selectedCenter ? 15 : 11;

        const map = new window.ymaps.Map(mapRef.current, {
          center: centerCoords,
          zoom: zoom,
          controls: ['zoomControl', 'geolocationControl']
        });

        mapInstanceRef.current = map;

        const centersToShow = selectedCenter ? [selectedCenter] : centers;

        centersToShow.forEach(center => {
          const placemark = new window.ymaps.Placemark(
            center.coordinates,
            {
              balloonContentHeader: `<strong>${center.name}</strong>`,
              balloonContentBody: `
                <div style="padding: 8px;">
                  <p style="margin: 4px 0;"><strong>Адрес:</strong> ${center.address}</p>
                  <p style="margin: 4px 0;"><strong>Телефон:</strong> ${center.phone}</p>
                  <p style="margin: 4px 0;"><strong>Режим:</strong> ${center.schedule}</p>
                  <p style="margin: 4px 0;"><strong>Расстояние:</strong> ${center.distance}</p>
                </div>
              `,
              hintContent: center.name
            },
            {
              preset: 'islands#redSportIcon',
              iconColor: '#ef4444'
            }
          );

          if (onCenterClick && !selectedCenter) {
            placemark.events.add('click', () => {
              onCenterClick(center);
            });
          }

          map.geoObjects.add(placemark);
        });

        if (!selectedCenter && centers.length > 1) {
          map.setBounds(map.geoObjects.getBounds(), {
            checkZoomRange: true,
            zoomMargin: 50
          });
        }
      });
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
    };
  }, [centers, selectedCenter, onCenterClick]);

  return (
    <div 
      ref={mapRef} 
      style={{ width: '100%', height }} 
      className="rounded-lg overflow-hidden"
    />
  );
};

export default YandexMap;
