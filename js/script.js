document.addEventListener("DOMContentLoaded", () => {
    // ===== MENU MOBILE =====
    const menuBtn = document.querySelector(".menu-mobile");
    const nav = document.querySelector("nav");
    const menuIcon = menuBtn?.querySelector("i");
  
    if (menuBtn && nav && menuIcon) {
      menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
  
        if (nav.classList.contains("active")) {
          menuIcon.classList.replace("fa-bars", "fa-times");
        } else {
          menuIcon.classList.replace("fa-times", "fa-bars");
        }
      });
  
      // Fecha o menu ao clicar em um link
      nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          nav.classList.remove("active");
          menuIcon.classList.replace("fa-times", "fa-bars");
        });
      });
    }
  
    // ===== FORMULÁRIO DE CONTATO =====
    const formContato = document.getElementById("form-contato");
    
    if (formContato) {
      // Garante que o formulário comece limpo após recarregar a página
      formContato.reset();
  
      formContato.addEventListener("submit", (e) => {
        e.preventDefault();
  
        emailjs.init({ publicKey: "62N72y9tWZrFkp2y6" });
  
        emailjs.sendForm("service_iip854w", "template_roy0hmt", formContato)
          .then(() => {
            alert("Mensagem enviada com sucesso!");
            formContato.reset(); // limpa os campos após enviar
          })
          .catch(() => {
            alert("Erro ao enviar mensagem. Tente novamente!");
          });
      });
    }
  });
  