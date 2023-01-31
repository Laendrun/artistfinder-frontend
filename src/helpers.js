const limit = (string, limit) => {
	let newStr
	if (string == null)
		string = ''
	if (string.length >= limit)
	{
		limit -= 3
		newStr = string.substring(0, limit) + '...'
	}
	else
		newStr = string.substring(0, limit)
	return newStr
}

module.exports = {
	limit
}