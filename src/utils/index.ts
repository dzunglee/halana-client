import dayjs, { Dayjs } from 'dayjs'

export const getDateNameInRange = (
  start: Dayjs,
  end: Dayjs,
  format?: string,
): string[] => {
  const results: string[] = []

  let current = start

  while (current.diff(end, 'd') <= 0) {
    results.push(current.format(format ?? 'DD/MM/YYYY'))

    current = current.add(1, 'day')
  }

  return results
}

export const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

export const formatDate = (date?: string) => {
  return date ? dayjs(date).format('DD/MM/YYYY') : ''
}
