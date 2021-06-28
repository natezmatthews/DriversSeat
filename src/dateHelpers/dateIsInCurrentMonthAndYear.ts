export default function dateIsInCurrentMonthAndYear(iso8601: string): boolean {
 const now = new Date();
 const passedIn = new Date(iso8601);
 return (passedIn.getFullYear() == now.getFullYear()) && (passedIn.getMonth() == now.getMonth())
}