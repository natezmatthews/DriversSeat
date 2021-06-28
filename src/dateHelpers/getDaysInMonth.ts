// https://www.w3resource.com/javascript-exercises/javascript-date-exercise-3.php

export default function getDaysInMonth(month: number, year: number): number {
   return new Date(year, month+1, 0).getDate();
};