udas'
	def __str__(self): #forma 2
		return '{}-{}'.format(self.tipo,self.IdReciboDeuda)	


class Interes(models.Model):
	id = models.AutoField(primary_key=True)
	idRecibo = models.ForeignKey(Recibo, on_delete= models.CASCADE)
	interesAplicado = models.PositiveIntegerField()
	valorinteres = models.BigIntegerField(blank=False, null=False)
	fecha_generacion = models.DateTimeField(auto_now_add=True)
	fecha_actualizacion = models.DateTimeField(auto_now=True)

class Noticia(models.Model):
	#el estado indica si fue vista(1),si no(0) y 2 si pasaron 7 dias sin verlo.
	# el estado pasara a 2 cuando pasen 7 dias,sin ser visto
	# el estado pasara a visto cuando administrador presione sobre el boton visto
	# la descripcion es para saber si se genero automaticamente
	id = models.AutoField(primary_key=True)
	administrador = models.ForeignKey(Administrador, on_delete=models.CASCADE)
	ESTADONOTICIA_choose = ((0,'No visto'),(1,'Visto'),(3,'No visto 7 Dias'))
	estado = models.PositiveIntegerField(choices=ESTADONOTICIA_choose,default = 0, null=False, blank=False)
	descripcion = models.CharField(max_length = 120, null=True, blank=True)
	fecha_generacion = models.DateTimeField(auto_now_add=True)
	propiedad= models.ForeignKey(Propiedad, on_delete=models.CASCADE)
	class Meta:
		verbose_name='Noticia'
		verbose_name_plural='Noticias'
	def __str__(self): #forma 2
		return '{}-{}'.format(self.propiedad,self.estado)	

class DeNoticia(models.Model):
	id = models.AutoField(primary_key=True)
	idNoticia = models.ForeignKey(Noticia, on_delete= models.CASCADE)
	unidad = models.ForeignKey(Unidad, on_delete=models.CASCADE)
	idRecibo = models.ForeignKey(Recibo, on_delete= models.CASCADE)
	class Meta:
		verbose_name='Detalle noticia'
		verbose_name_plural='Detalles noticias'
	def __str__(self): #forma 2
		return '{}{}'.format(self.idNoticia,self.unidad)	


class CuotaExtraordinaria(models.Model):
	id = models.AutoField(primary_key=True)
	valor = models.BigIntegerField()
	propiedad = models.ForeignKey(Propiedad, on_delete = models.CASCADE)
	cuotas = models.IntegerField()
	TIPOCUOTA_choose = ((0,'igualitaria'),(1,'Coeficiente'))
	tipo_cuota = models.IntegerField(choices=TIPOCUOTA_choose, default=1)
	ESTADO_choose = ((0,'finalizada'),(1,'activa'))
	estado = models.IntegerField(choices=ESTADO_choose, default=0)
	fecha_generacion = models.DateTimeField(auto_now_add=True)
	fecha_actualizacion = models.DateTimeField(auto_now=True)


class CuotaExtraUnidad(models.Model):
	id = models.AutoField(primary_key=True)
	idExtraordinaria= models.ForeignKey(CuotaExtraordinaria, on_delete=models.CASCADE)
	unidad = models.ForeignKey(Unidad, on_delete=models.CASCADE)
	valor = models.BigIntegerField()
# contador de cuota, por cual cuota va
	cont_cuota = models.PositiveIntegerField()                                      