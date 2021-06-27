export enum Category {
    'Rent and utilities' = 'Rent and utilities',
    'Food and drinks' = 'Food and drinks',
    'Home' = 'Home',
    'Transportation' = 'Transportation',
    'Personal care' = 'Personal care',
    'Entertainment' = 'Entertainment',
    'Giving' = 'Giving',
    'Software' = 'Software',
    'Health' = 'Health',
    'Fees' = 'Fees',
    'Clothing' = 'Clothing',
    'Travel' = 'Travel',
}

export interface Expense {
    name: string,
    date: string,
    cost: number,
    category: Category
}