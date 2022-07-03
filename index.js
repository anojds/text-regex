exports.checkEmail = function (text) {
	if (!text) throw new Error('text-regex: please enter data');
	var emailreg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return emailreg.test(text);
}

exports.checkDate = function (text) {
	if (!text) throw new Error('text-regex: please enter data');
	var datereg = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/
	return datereg.test(text);
}

exports.checkUrl = function (text) {
	if (!text) throw new Error('text-regex: please enter data');
	var urlreg = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
	return urlreg.test(text);
}

exports.checkNumber = function (text) {
	if (!text) throw new Error('text-regex: please enter data');
	var numberreg = /^([0-8]).{0,100}$/
	return numberreg.test(text);
}

exports.checkLatitude = function (text) {
	if (!text) throw new Error('text-regex: please enter data');
	var latitudereg = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,15}/
	return latitudereg.test(text);
}

exports.checkLongitude = function (text) {
	if (!text) throw new Error('text-regex: please enter data');
	var longitudereg = /^-?(([-+]?)([\d]{1,3})((\.)(\d+))?)/
	return longitudereg.test(text);
}