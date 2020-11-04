export const handleDateUTC = (date: Date): string => new Date(`${date} UTC`).toLocaleString('vi-VN')

export const handlePrice = (price: number | string): string => Number(price).toLocaleString('vi') + ' đ'
