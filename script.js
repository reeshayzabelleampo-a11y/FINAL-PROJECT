
document.querySelectorAll('.section-title').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;

        
        content.style.display = 
            content.style.display === 'block' ? 'none' : 'block';
    });
});


document.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;

        content.style.display =
            content.style.display === 'block' ? 'none' : 'block';
    });
});


document.getElementById("signOut").addEventListener("click", function () {
    localStorage.removeItem("loggedIn");
    window.location.href = "signin.html";
});

