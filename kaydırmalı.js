const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselImages = document.querySelector('.carousel-images');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    if (currentIndex < carouselImages.children.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

window.onload = function() {
    window.scrollTo(0, 0); // Sayfa yüklendiğinde en üste kaydır
};

// Tarayıcı kaydırma konumunu korumayı devre dışı bırak
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.onload = function() {
    window.scrollTo(0, 0); // Sayfa yüklendiğinde en üste kaydır
};

// Buton elemanını seç
var scrollTopBtn = document.getElementById("scrollTopBtn");

// Sayfa kaydırıldığında butonu göster/gizle
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block"; // Butonu göster
    } else {
        scrollTopBtn.style.display = "none"; // Butonu gizle
    }
};

// Butona tıklandığında sayfanın en üstüne kaydır
scrollTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Yumuşak kaydırma efekti
    });
};

// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.querySelector('.dropdown');
    var dropbtn = document.querySelector('.dropbtn');
    var dropdownContent = document.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', function () {
        dropdown.classList.toggle('show');
    });

    // Menü dışında bir yere tıklanırsa menüyü kapat
    window.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
});

 
  document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cart = [];

    // Sepeti güncelleme fonksiyonu
    function updateCart() {
        cartItems.innerHTML = ''; // Sepeti temizle
        let total = 0; // Toplam fiyatı hesaplamak için

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} TL`;
            cartItems.appendChild(li);
            total += item.price; // Fiyatı toplamaya ekle
        });

        // Toplam fiyatı güncelle
        cartTotal.textContent = `Toplam: ${total.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} TL`;
    }

    // Sepete ekleme fonksiyonu
    function addToCart(event) {
        if (event.target.classList.contains('add-to-cart')) {
            const button = event.target;
            const productName = button.getAttribute('data-description-name');
            const productPrice = parseFloat(button.getAttribute('data-description-price').replace(',', '.'));

            // Sepete ürünü ekle
            cart.push({ name: productName, price: productPrice });
            updateCart(); // Sepeti güncelle
        }
    }

    // "Sepete Ekle" butonlarına event listener ekle
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
});


