export default function getDayOfTheMonth(iso8601: string) {
    return (new Date(iso8601)).getUTCDate()
}