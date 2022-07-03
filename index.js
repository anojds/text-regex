exports.checkEmail = function (text) {
	if (!text) throw new Error('text-regex: please enter data');
	var emailreg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return emailreg.test(text);
}

exports.checkPassword = function (text) {
	if (!text) throw new Error('text-regex: please enter data');
	var passwordreg = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/
    return passwordreg.test(text);
}

exports.checkDate = function (text) {
	if (!text) throw new Error('text-regex: please enter data');
	var datereg = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/
	return datereg.test(text);
}

exports.checkUrl = function (text) {
	if (!text) throw new Error('text-regex: please enter data');
	var urlreg = /^(((http(s?))\:\/\/)?)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?$/
	return urlreg.test(text);
}

exports.checkUrlHaveProtocol = function (text) {
	if (!text) throw new Error('text-regex: please enter data');
	var urlreg = /^((http(s?))\:\/\/)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?$/
	return urlreg.test(text);
}
exports.checkUrlNotProtocol = function (text) {
	if (!text) throw new Error('text-regex: please enter data');
	var urlreg = /^[^((http(s?))\:\/\/)]([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?$/
	return urlreg.test(text);
}

exports.checkUrlAdvance = function (text) {
	if (!text) throw new Error('text-regex: please enter data');
	var urlreg = /^(file|gopher|news|nntp|telnet|https?|ftps?|sftp):\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}.*$/
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

exports.checkHexcode = function (text) {
	if (!text) throw new Error('text-regex: please enter data');
	var hexreg = /#?([A-Fa-f0-9]){3}(([A-Fa-f0-9]){3})?/
	return hexreg.test(text);
}

exports.checkIsImageFile = function (text) {
	if (!text) throw new Error('text-regex: please enter data');
	var imgreg = /([^\s]+(?=\.(jpg|gif|png))\.\2)/
	return imgreg.test(text);
}