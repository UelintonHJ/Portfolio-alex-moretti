function sendMail() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(!name||!email||!message) return false;

    const subject = encodeURIComponent ('Contato via portfólio - ' + name);
    const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);

    window.location.href = 'mailto:uelinton.h@gmail.com?subject=' + subject + '&body=' + body;

    const alert = document.getElementById('formAlert');
    alert.style.display='block';
    alert.className='alert alert-sucess mt-3';
    alert.textContent='Janela de e-mail aberta. Caso não funcione, envie diretamente para uelinton.h@gmail.com';
    return false;
}

document.querySelectorAll('.zoom-img').forEach(img => {
    img.addEventListener('click', () => {
        const modalImg = document.getElementById('modalImage');
        modalImg.src = img.src;

        const myModal = new bootstrap.Modal(document.getElementById('imgModal'));
        myModal.show();
    });
});