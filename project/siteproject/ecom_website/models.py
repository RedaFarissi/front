from django.db import models

class Cart(models.Model):
    user = models.ForeignKey('Users', on_delete=models.CASCADE)
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    quantity = models.IntegerField()
    added_on = models.DateTimeField(auto_now_add=True)

class Massages(models.Model):
    user = models.ForeignKey('Users', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    number = models.IntegerField()
    message = models.TextField(max_length=200)
    sent_on = models.DateTimeField(auto_now_add=True)

class Product(models.Model):
    name = models.CharField(max_length=200)
    details = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image_01 = models.ImageField()
    image_02 = models.ImageField(blank=True, null=True)
    image_03 = models.ImageField(blank=True, null=True)

class Order(models.Model):
    cart = models.ForeignKey('Cart', on_delete=models.CASCADE)
    user = models.ForeignKey('Users', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    number = models.IntegerField()
    email = models.EmailField()
    METHOD_CHOICES = [
        ('C', 'Cash on Delivery'),
        ('O', 'Online Payment'),
    ]
    method = models.CharField(max_length=1, choices=METHOD_CHOICES)
    address = models.TextField(max_length=100)
    total_products = models.IntegerField()
    total_price = models.DecimalField(max_digits=6, decimal_places=2)
    placed_on = models.DateTimeField(auto_now_add=True)
    PAYMENT_STATUS_CHOICES = [
        ('P', 'Pending'),
        ('C', 'Completed'),
        ('F', 'Failed'),
    ]
    payment_status = models.CharField(max_length=1, choices=PAYMENT_STATUS_CHOICES)

class Users(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=20)

class Wishlist(models.Model):
    user = models.ForeignKey('Users', on_delete=models.CASCADE)
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    added_on = models.DateTimeField(auto_now_add=True)
