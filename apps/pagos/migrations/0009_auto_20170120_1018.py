
�ɗX�  �               @   sO   d  d l  m Z d  d l m Z m Z d  d l Z Gd d �  d e j � Z d S)�    )�unicode_literals)�
migrations�modelsNc               @   sy   e  Z d  Z d g Z e j d d d d � e j d d d d d e j d	 d
 d e	 j
 j j j d d � d d � g Z d S)�	Migration�pagos�)0013_cuotaextraordinaria_cuotaextraunidad�
model_name�abono�name�detalle�recibo�field�default�   �	on_delete�tozpagos.Recibo�preserve_defaultFN)zpagosz)0013_cuotaextraordinaria_cuotaextraunidad)�__name__�
__module__�__qualname__�dependenciesr   �RemoveField�AddFieldr   �
ForeignKey�django�db�deletion�CASCADE�
operations� r   r   �VC:\Entornos Virtuales\zappytest\zappy\apps\pagos\migrations\0014_auto_20170205_1957.pyr   	   s   			*r   )�
__future__r   �	django.dbr   r   �django.db.models.deletionr   r   r   r   r   r    �<module>   s                                                                                       vvu�u�?
u�u�u�H�u:u,ut�ut�t�t�t�tvtZtLt>t"tts�s�s�s�s�s�szEbsls^sPs4ss
r�r�Erpr�r�r�r~D�D�rTrFr8r*rr?�H�q�H�q�q�q�q�q�q�q�qtqJqXq<q.q qqp