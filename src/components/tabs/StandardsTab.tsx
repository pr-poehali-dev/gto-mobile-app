import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface StandardsTabProps {
  isAuthorized: boolean;
  selectedAge: number | null;
  setSelectedAge: (age: number | null) => void;
  selectedGender: 'male' | 'female';
  setSelectedGender: (gender: 'male' | 'female') => void;
  currentStage: { number: number; name: string; ageRange: string } | null;
  getStandardsByStage: (stageNumber: number, gender: 'male' | 'female') => any;
  ageRanges: Array<{ label: string; minAge: number; maxAge: number }>;
  selectedStageNumber?: number | null;
  setSelectedStageNumber?: (stage: number | null) => void;
}

const StandardsTab = ({
  isAuthorized,
  selectedAge,
  setSelectedAge,
  selectedGender,
  setSelectedGender,
  currentStage,
  getStandardsByStage,
  ageRanges,
  selectedStageNumber,
  setSelectedStageNumber,
}: StandardsTabProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <Card className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        {isAuthorized ? (
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="flex items-center gap-2">
                  <Icon name="Target" size={20} className="text-primary" />
                  <h3 className="font-semibold">Выберите ступень</h3>
                </div>
                <Select 
                  value={selectedStageNumber?.toString() || currentStage?.number.toString() || ''} 
                  onValueChange={(v) => {
                    if (setSelectedStageNumber) {
                      setSelectedStageNumber(parseInt(v));
                    }
                  }}
                >
                  <SelectTrigger className="w-full max-w-xs bg-background">
                    <SelectValue placeholder="Выберите ступень" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">I ступень (6-7 лет)</SelectItem>
                    <SelectItem value="2">II ступень (8-9 лет)</SelectItem>
                    <SelectItem value="3">III ступень (10-11 лет)</SelectItem>
                    <SelectItem value="4">IV ступень (12-13 лет)</SelectItem>
                    <SelectItem value="5">V ступень (14-15 лет)</SelectItem>
                    <SelectItem value="6">VI ступень (16-17 лет)</SelectItem>
                    <SelectItem value="7">VII ступень (18-19 лет)</SelectItem>
                    <SelectItem value="8">VIII ступень (20-24 лет)</SelectItem>
                    <SelectItem value="9">IX ступень (25-29 лет)</SelectItem>
                    <SelectItem value="10">X ступень (30-34 лет)</SelectItem>
                    <SelectItem value="11">XI ступень (35-39 лет)</SelectItem>
                    <SelectItem value="12">XII ступень (40-44 лет)</SelectItem>
                    <SelectItem value="13">XIII ступень (45-49 лет)</SelectItem>
                    <SelectItem value="14">XIV ступень (50-54 лет)</SelectItem>
                    <SelectItem value="15">XV ступень (55-59 лет)</SelectItem>
                    <SelectItem value="16">XVI ступень (60-64 лет)</SelectItem>
                    <SelectItem value="17">XVII ступень (65-69 лет)</SelectItem>
                    <SelectItem value="18">XVIII ступень (70+ лет)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="flex items-center gap-2">
                  <Icon name="Target" size={20} className="text-primary" />
                  <h3 className="font-semibold">Выберите параметры</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Возраст</label>
                    <Select value={selectedAge?.toString() || ''} onValueChange={(v) => setSelectedAge(parseInt(v))}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Ваш возраст" />
                      </SelectTrigger>
                      <SelectContent>
                        {ageRanges.map((range, idx) => (
                          <SelectItem key={idx} value={range.minAge.toString()}>
                            {range.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Пол</label>
                    <Select value={selectedGender} onValueChange={(v: 'male' | 'female') => setSelectedGender(v)}>
                      <SelectTrigger className="bg-background">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Мужской</SelectItem>
                        <SelectItem value="female">Женский</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                {selectedAge && currentStage && (
                  <p className="text-sm text-muted-foreground">
                    {currentStage.name}
                  </p>
                )}
              </div>
            )}
          </Card>

      {currentStage && (
        <>
          {(() => {
            const standards = getStandardsByStage(currentStage.number, isAuthorized ? 'male' : selectedGender);
            return (
              <>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-orange-100 via-amber-100 to-yellow-100 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-bold text-base flex items-center gap-2 text-amber-900">
                      <Icon name="Star" size={20} className="text-amber-600" />
                      Обязательные испытания
                    </h4>
                    <p className="text-xs text-amber-700 mt-1.5 ml-7">
                      Одна дисциплина из каждой категории на выбор
                    </p>
                  </div>
                  {standards.required.map((category: any, i: number) => (
                    <Card key={i} className="p-4 border-l-4 border-amber-400 bg-gradient-to-r from-amber-50/50 to-yellow-50/30">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium">{category.name}</h4>
                        </div>
                      </div>
                      {category.options.length > 1 && (
                        <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-2">
                          <Icon name="Info" size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-blue-700">
                            Необходимо выбрать одно из {category.options.length} испытаний
                          </p>
                        </div>
                      )}
                      {category.options.map((option: any, j: number) => (
                        <div key={j} className="mb-3 last:mb-0">
                          <p className="text-sm font-medium mb-2">{option.discipline}</p>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="bg-yellow-50 rounded p-2 border-2 border-yellow-400 shadow-sm">
                              <p className="text-yellow-700 font-medium mb-1 whitespace-nowrap">🥇 Золото</p>
                              <p className="font-semibold text-yellow-900">{option.gold}</p>
                            </div>
                            <div className="bg-gray-50 rounded p-2 border border-gray-300">
                              <p className="text-gray-700 font-medium mb-1 whitespace-nowrap">🥈 Серебро</p>
                              <p className="font-semibold text-gray-900">{option.silver}</p>
                            </div>
                            <div className="bg-orange-50 rounded p-2 border border-orange-200">
                              <p className="text-orange-700 font-medium mb-1 whitespace-nowrap">🥉 Бронза</p>
                              <p className="font-semibold text-orange-900">{option.bronze}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Card>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 p-4 rounded-lg border border-cyan-200">
                    <h4 className="font-bold text-base flex items-center gap-2 text-cyan-900">
                      <Icon name="CheckCircle2" size={20} className="text-cyan-600" />
                      Испытания по выбору
                    </h4>
                    <p className="text-xs text-cyan-700 mt-1.5 ml-7">
                      Необходимо выполнить 2 испытания из предложенных
                    </p>
                  </div>
                  {standards.choice.map((category: any, i: number) => (
                    <Card key={i} className="p-4 border-l-4 border-cyan-400 bg-gradient-to-r from-cyan-50/50 to-teal-50/30">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium">{category.name}</h4>
                        </div>
                      </div>
                      {category.options.length > 1 && (
                        <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-2">
                          <Icon name="Info" size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-blue-700">
                            Необходимо выбрать одно из {category.options.length} испытаний
                          </p>
                        </div>
                      )}
                      {category.options.map((option: any, j: number) => (
                        <div key={j} className="mb-3 last:mb-0">
                          <p className="text-sm font-medium mb-2">{option.discipline}</p>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="bg-yellow-50 rounded p-2 border-2 border-yellow-400 shadow-sm">
                              <p className="text-yellow-700 font-medium mb-1 whitespace-nowrap">🥇 Золото</p>
                              <p className="font-semibold text-yellow-900">{option.gold}</p>
                            </div>
                            <div className="bg-gray-50 rounded p-2 border border-gray-300">
                              <p className="text-gray-700 font-medium mb-1 whitespace-nowrap">🥈 Серебро</p>
                              <p className="font-semibold text-gray-900">{option.silver}</p>
                            </div>
                            <div className="bg-orange-50 rounded p-2 border border-orange-200">
                              <p className="text-orange-700 font-medium mb-1 whitespace-nowrap">🥉 Бронза</p>
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
    </div>
  );
};

export default StandardsTab;