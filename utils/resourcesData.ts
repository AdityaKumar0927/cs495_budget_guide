export type ResourceCategory = 'Food' | 'Clothing' | 'Health' | 'Housing';
export type BudgetLevel = 'low' | 'average' | 'high';

export interface ResourceItem {
  name: string;
  description: string;
  price: string;
  budgetLevel: BudgetLevel;
}

export const resourceData: Record<ResourceCategory, ResourceItem[]> = {
  Food: [
    { name: "All Access Plan", description: "Unlimited meals, 35 meal exchanges, 10 guest meals, $100 bonus points per semester", price: "$4,153/semester", budgetLevel: "high" },
    { name: "Flex 300 Plan", description: "300 meals, 30 meal exchanges, $50 bonus points per semester", price: "$3,978/semester", budgetLevel: "high" },
    { name: "Block 230 Plan", description: "230 meals, 23 meal exchanges, $75 bonus points per semester", price: "$3,172/semester", budgetLevel: "average" },
    { name: "Block 150 Plan", description: "150 meals, 15 meal exchanges, $125 bonus points per semester", price: "$2,268/semester", budgetLevel: "average" },
    { name: "Block 50 Plan", description: "50 meals, 25 meal exchanges, $200 bonus points per semester", price: "$990/semester", budgetLevel: "low" },
    { name: "Ghareeb Nawaz", description: "Cheap Indian/Pakistani cuisine", price: "Varies", budgetLevel: "low" },
    { name: "Sfera Sicilian Street Food", description: "Moderately priced Sicilian food", price: "Varies", budgetLevel: "average" },
    { name: "Au Cheval", description: "Gourmet burgers", price: "$8.95 - $9.95", budgetLevel: "average" },
    { name: "Rosie's Sidekick", description: "Large muffuletta sandwich (feeds two people)", price: "$12.95", budgetLevel: "low" },
    { name: "Piggie Smalls", description: "Pork gyro", price: "$7.99", budgetLevel: "low" },
    { name: "Joe's Pizza", description: "Classic New York-style pizza", price: "$3.50/slice", budgetLevel: "low" },
    { name: "Eataly Chicago", description: "Italian marketplace offering gourmet meals", price: "Varies", budgetLevel: "high" },
  ],
  Clothing: [
    { name: "Unique Thrift Store", description: "50% discount on Mondays", price: "Varies", budgetLevel: "low" },
    { name: "Village Discount Outlet", description: "Offers frequent promotions", price: "Varies", budgetLevel: "low" },
    { name: "Goodwill on 47th Street", description: "Second-hand clothing", price: "Varies", budgetLevel: "low" },
    { name: "Buffalo Exchange", description: "Mid-range second-hand clothing", price: "Varies", budgetLevel: "average" },
    { name: "Crossroads Trading Co.", description: "Mid-range second-hand clothing", price: "Varies", budgetLevel: "average" },
    { name: "Burlington on Roosevelt", description: "Discounted brand-name clothing", price: "Varies", budgetLevel: "average" },
    { name: "Akira", description: "Trendy fashion with student-friendly sales", price: "Varies", budgetLevel: "high" },
    { name: "Fashion Outlets of Chicago", description: "Outlet mall with various brands", price: "Varies", budgetLevel: "high" },
    { name: "Zara", description: "High-street fashion store", price: "Varies", budgetLevel: "high" },
    { name: "H&M", description: "Affordable and trendy clothing", price: "Varies", budgetLevel: "average" },
    { name: "Target", description: "Everyday clothing at affordable prices", price: "Varies", budgetLevel: "low" },
  ],
  Health: [
    { name: "Student Health and Wellness Center", description: "Covered services for students", price: "Included in tuition", budgetLevel: "low" },
    { name: "Walgreens", description: "Over-the-counter medications and essentials", price: "Varies", budgetLevel: "average" },
    { name: "CVS Pharmacy", description: "Over-the-counter medications and essentials", price: "Varies", budgetLevel: "average" },
    { name: "Blue Cross and Blue Shield of Illinois", description: "Student health plans through AcademicBlue program", price: "Varies", budgetLevel: "high" },
    { name: "Planned Parenthood", description: "Affordable health services", price: "Free or low-cost", budgetLevel: "low" },
    { name: "Chicago Health Clinic", description: "General health services", price: "$40 - $150/visit", budgetLevel: "average" },
    { name: "Whole Foods Market", description: "Healthy groceries and essentials", price: "Varies", budgetLevel: "high" },
    { name: "24 Hour Fitness", description: "Gym memberships with student discounts", price: "Varies", budgetLevel: "average" },
  ],
  Housing: [
    { name: "Infinite Chicago", description: "Student apartments", price: "From $949/month", budgetLevel: "low" },
    { name: "Letterman Chicago", description: "Student apartments", price: "From $1,055/month", budgetLevel: "low" },
    { name: "Lake Meadows Apartments", description: "Studio to 3 bedrooms", price: "$1,030 - $3,390", budgetLevel: "average" },
    { name: "Prairie Shores", description: "Studio to 3 bedrooms", price: "$1,031 - $14,104", budgetLevel: "average" },
    { name: "2101 S Michigan", description: "Apartment complex", price: "From $1,584/month", budgetLevel: "average" },
    { name: "The Shelby", description: "1-2 bedrooms", price: "$2,012 - $3,136", budgetLevel: "high" },
    { name: "Arrive LEX", description: "1-3 bedrooms", price: "$1,900 - $3,955", budgetLevel: "high" },
    { name: "The Lofts at Roosevelt Collection", description: "Luxury apartments with great amenities", price: "From $2,200/month", budgetLevel: "high" },
    { name: "University Center Chicago", description: "Shared and private student housing", price: "$1,000 - $1,500/month", budgetLevel: "low" },
  ],
};