'use client'

import { useState, useMemo } from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  expenseData,
  filterData,
  convertCurrency,
  expenseCategories,
  accommodationTypes,
  seasons,
  months,
  currencyCodes,
  ExpenseCategory,
  AccommodationType,
  Season
} from '@/utils/expenseData'

export default function ExpenseChart() {
  const [accommodationType, setAccommodationType] = useState<AccommodationType>('On-Campus')
  const [season, setSeason] = useState<Season>('Fall')
  const [month, setMonth] = useState('September')
  const [selectedCategories, setSelectedCategories] = useState<ExpenseCategory[]>(expenseCategories)
  const [currency, setCurrency] = useState('USD')
  const [showAverage, setShowAverage] = useState(false)

  const filteredData = useMemo(() => {
    return filterData(expenseData, {
      accommodationType,
      season,
      month,
      categories: selectedCategories,
    })
  }, [accommodationType, season, month, selectedCategories])

  const chartData = useMemo(() => {
    const data = filteredData.reduce((acc, item) => {
      const amount = convertCurrency(item.amount, 'USD', currency)
      if (!acc[item.category]) {
        acc[item.category] = { category: item.category, amount, count: 1 }
      } else {
        acc[item.category].amount += amount
        acc[item.category].count += 1
      }
      return acc
    }, {} as Record<string, { category: string, amount: number, count: number }>)

    return Object.values(data).map(item => ({
      category: item.category,
      amount: showAverage ? item.amount / item.count : item.amount
    }))
  }, [filteredData, currency, showAverage])

  const handleCategoryChange = (category: ExpenseCategory) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const totalExpense = useMemo(() => {
    return chartData.reduce((sum, item) => sum + item.amount, 0).toFixed(2)
  }, [chartData])

  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-xl sm:text-2xl">Expense Breakdown for Students in Chicago</CardTitle>
        <CardDescription className="text-sm sm:text-base">Filter and analyze expenses for college students near Illinois Tech</CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <Label htmlFor="accommodationType" className="text-sm font-medium">Accommodation Type</Label>
            <Select
              value={accommodationType}
              onValueChange={(value: AccommodationType) => setAccommodationType(value)}
            >
              <SelectTrigger id="accommodationType" className="w-full">
                <SelectValue placeholder="Select accommodation type" />
              </SelectTrigger>
              <SelectContent>
                {accommodationTypes.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="season" className="text-sm font-medium">Season</Label>
            <Select
              value={season}
              onValueChange={(value: Season) => setSeason(value)}
            >
              <SelectTrigger id="season" className="w-full">
                <SelectValue placeholder="Select season" />
              </SelectTrigger>
              <SelectContent>
                {seasons.map(s => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="month" className="text-sm font-medium">Month</Label>
            <Select
              value={month}
              onValueChange={setMonth}
            >
              <SelectTrigger id="month" className="w-full">
                <SelectValue placeholder="Select month" />
              </SelectTrigger>
              <SelectContent>
                {months.map(m => (
                  <SelectItem key={m} value={m}>{m}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="currency" className="text-sm font-medium">Currency</Label>
            <Select
              value={currency}
              onValueChange={setCurrency}
            >
              <SelectTrigger id="currency" className="w-full">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {currencyCodes.map(code => (
                  <SelectItem key={code} value={code}>{code}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
          {expenseCategories.map(category => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => handleCategoryChange(category)}
              />
              <Label htmlFor={category} className="text-xs sm:text-sm">{category}</Label>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-2 mb-6">
          <Checkbox
            id="showAverage"
            checked={showAverage}
            onCheckedChange={() => setShowAverage(!showAverage)}
          />
          <Label htmlFor="showAverage" className="text-sm">Show Average</Label>
        </div>
        <ChartContainer
          config={{
            amount: {
              label: `Amount (${currency})`,
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[400px] w-full overflow-x-auto"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
              layout="vertical"
            >
              <XAxis type="number" />
              <YAxis
                dataKey="category"
                type="category"
                width={120}
                tick={{ fontSize: 12 }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend wrapperStyle={{ fontSize: '12px', marginTop: '10px' }} />
              <Bar
                dataKey="amount"
                fill="var(--color-amount)"
                name={showAverage ? "Average Amount" : "Total Amount"}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-4 text-right">
          <p className="text-sm sm:text-base font-semibold">
            Total Expense: {Number(totalExpense).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} {currency}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

