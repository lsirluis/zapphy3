
�׈X�
  �               @   s�   d  d l  m Z d  d l m Z e j d d � d  d l m Z m Z m Z d  d l	 m
 Z
 m Z m Z m Z Gd d �  d e j � Z Gd	 d
 �  d
 e j � Z Gd d �  d e j � Z d S)�    )�forms)�partial�formatz%m/%d/%Y)�HttpResponse�HttpResponseRedirect�HttpRequest)�Recibo�Detalle�RecibosPagos�CuotaExtraordinariac               @   sn   e  Z d  Z e j d d d d d d d d g d	 e j d
 d d d d d d i � � Z Gd d �  d � Z d S)�
ReciboForm�label�fecha_vencimiento�initialN�requiredT�input_formatsz%d/%m/%Y�widgetr   �attrs�classzdatepicker mdinput�placeholderu   Dia / Mes / Año"c            .   @   s$  e  Z d  Z e Z d d d d g Z d d d d i Z d e j d d d	 i � d
 e j d d d	 i � d e j d d d	 i � d e j d d d	 i � d e j d d d	 i � d e j	 d d d	 i � d e j d d d	 i � d e j d d d	 i � d e j
 d d d d d d d i � i	 Z d S)zReciboForm.Meta�descripcion�unidad�fecha_cobradar   zFecha a cobrar�nombrer   r   