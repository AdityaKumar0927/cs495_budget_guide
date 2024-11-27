'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { resourceData, ResourceCategory, BudgetLevel } from '@/utils/resourcesData';

export default function ResourcesPage() {
  const [openCategories, setOpenCategories] = useState<ResourceCategory[]>([]);
  const [selectedBudgetLevels, setSelectedBudgetLevels] = useState<Record<ResourceCategory, BudgetLevel>>({
    Food: 'average',
    Clothing: 'average',
    Health: 'average',
    Housing: 'average',
  });

  const toggleCategory = (category: ResourceCategory) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const changeBudgetLevel = (category: ResourceCategory, level: BudgetLevel) => {
    setSelectedBudgetLevels((prev) => ({ ...prev, [category]: level }));
  };

  return (
    <div className="min-h-screen bg-pink-50 pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#8B3A3D] mb-12">Resources {'>'}</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {(Object.keys(resourceData) as ResourceCategory[]).map((category) => (
            <Collapsible
              key={category}
              open={openCategories.includes(category)}
              onOpenChange={() => toggleCategory(category)}
            >
              <CollapsibleTrigger asChild>
                <Button
                  className="w-full border-2 border-[#8B3A3D] hover:border-[#8B3A3D] hover:bg-[#8B3A3D] hover:text-white p-6 text-xl font-normal justify-between"
                >
                  {category}
                  <ChevronDown className={`h-6 w-6 transition-transform ${openCategories.includes(category) ? 'transform rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4 space-y-4">
                <div className="bg-black text-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between mb-4">
                    <h3 className="font-semibold">Budget Level:</h3>
                    <div className="space-x-2">
                      {['low', 'average', 'high'].map((level) => (
                        <Button
                          key={level}
                          className={`${selectedBudgetLevels[category] === level ? "bg-black text-white border border-white rounded-lg" : "bg-black border text-white border-white rounded-lg"} h-8 rounded-md px-3 text-sm font-medium`}
                          onClick={() => changeBudgetLevel(category, level as BudgetLevel)}
                        >
                          {level}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {resourceData[category]
                      .filter((item) => item.budgetLevel === selectedBudgetLevels[category])
                      .map((item, index) => (
                        <li key={index} className="border-b pb-2">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                          <p className="text-sm font-semibold">{item.price}</p>
                        </li>
                      ))}
                  </ul>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </div>
  );
}