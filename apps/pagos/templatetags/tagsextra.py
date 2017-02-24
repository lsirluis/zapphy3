from django import template
register = template.Library()

def phonenumber(value):
	tel = str(value)
	if value == "Tel no-registrado":
		return value
	phone = '%s-%s' %(tel[0:3],tel[3:])
	# phone = '(%s) %s - %s' %(tel[0:3],tel[3:6],tel[6:10])
	return phone

def celnumber(value):
	cel = str(value)
	if value == "Cel no-registrado":
		return value
	phone = '%s-%s-%s' %(cel[0:3],cel[3:6],cel[6:])
	# phone = '(%s) %s - %s' %(tel[0:3],tel[3:6],tel[6:10])
	return phone

register.filter('phonenumber', phonenumber)
register.filter('celnumber', celnumber)