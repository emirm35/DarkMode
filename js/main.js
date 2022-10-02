const darkMode = document.getElementById('darkCheck');
// karanlık mod checkbox'ı tanımlandı



darkMode.addEventListener('change', () => { 
//darkMode checkboxu değiştirildiğinde bu fonksiyon çalışacak
//

    document.body.classList.toggle('darkTheme');
   
    // body classlardan darkTheme ile değişecek.
})

