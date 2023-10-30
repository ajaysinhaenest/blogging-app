// Function to generate a random date within a given range
export function getRandomDate(
    startDate = '2023-01-01',
    endDate = '2023-12-31',
) {
    const start = new Date(startDate).getTime()
    const end = new Date(endDate).getTime()
    const randomTime = start + Math.random() * (end - start)
    return new Date(randomTime)
}
