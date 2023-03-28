from django.shortcuts import render

from django.shortcuts import render, redirect, get_object_or_404
from .models import Cart, Massages, Product, Order, Users, Wishlist
#from .forms import MassagesForm, OrderForm, UsersForm, WishlistForm
#dding/removing items from the cart (add_to_cart)
def index(request):
    products = Product.objects.all()
    return render(request, 'index.html', {'products': products})

def add_to_cart(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    cart, created = Cart.objects.get_or_create(user=request.user, product=product)
    if not created:
        cart.quantity += 1
        cart.save()
    return redirect('cart')

def remove_from_cart(request, cart_id):
    cart = get_object_or_404(Cart, id=cart_id, user=request.user)
    cart.delete()
    return redirect('cart')

def view_cart(request):
    cart_items = Cart.objects.filter(user=request.user)
    return render(request, 'cart.html', {'cart_items': cart_items})

def clear_cart(request):
    Cart.objects.filter(user=request.user).delete()
    return redirect('cart')

def checkout(request):
    if request.method == 'POST':
        form = OrderForm(request.POST)
        if form.is_valid():
            cart_items = Cart.objects.filter(user=request.user)
            total_products = 0
            total_price = 0
            for item in cart_items:
                total_products += item.quantity
                total_price += item.product.price * item.quantity
            order = form.save(commit=False)
            order.user = request.user
            order.total_products = total_products
            order.total_price = total_price
            order.save()
            for item in cart_items:
                Order.objects.create(cart=item, user=request.user, name=order.name,
                                     number=order.number, email=order.email,
                                     method=order.method, address=order.address,
                                     total_products=total_products, total_price=total_price,
                                     payment_status='P')
            cart_items.delete()
            return redirect('thank_you')
    else:
        form = OrderForm()
    return render(request, 'checkout.html', {'form': form})

def thank_you(request):
    return render(request, 'thank_you.html')

def contact(request):
    if request.method == 'POST':
        form = MassagesForm(request.POST)
        if form.is_valid():
            message = form.save(commit=False)
            message.user = request.user
            message.save()
            return redirect('thank_you')
    else:
        form = MassagesForm()
    return render(request, 'contact.html', {'form': form})

def wishlist(request):
    wishlist_items = Wishlist.objects.filter(user=request.user)
    return render(request, 'wishlist.html', {'wishlist_items': wishlist_items})

def add_to_wishlist(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    wishlist, created = Wishlist.objects.get_or_create(user=request.user, product=product)
    return redirect('wishlist')

def remove_from_wishlist(request, wishlist_id):
    wishlist_item = get_object_or_404(Wishlist, id=wishlist_id, user=request.user)
    wishlist_item.delete()
    return redirect('wishlist')

def register(request):
    if request.method == 'POST':
        form = UsersForm(request.POST)
        if form.is_valid():
            user = form.save()
            return redirect('login')
    else:
        form = UsersForm()
    return render(request, 'register.html', {'form': form})
