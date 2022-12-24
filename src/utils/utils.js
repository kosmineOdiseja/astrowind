/** */
export const getFormattedDate = (date) =>
	date
		? new Date(date).toLocaleDateString('lt-LT', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		})
		: '';