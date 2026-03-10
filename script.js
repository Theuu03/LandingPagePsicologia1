gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
    smooth: 1.5,
    effects: true
})

function animarPagina(){
    // ANIMAÇÕES HERO

    gsap.from(".hero", {
        opacity: 0,
        duration: 1
    })

    // ANIMAÇÕES FOOTER

    gsap.from("footer", {
        y: "-30%",
        immediateRender: false,
        scrollTrigger: {
            trigger: "footer",
            scrub: true,
            markers: false,
            invalidateOnRefresh: true,
            end: "100% 100%"
        }
    })

    // ANIMAÇÕES CARDS

    gsap.from(".card-depoimento", {
        opacity: 0,
        y: 20,
        duration: 1,
        filter: "blur(10px)",
        stagger: 0.3, // Faz um elemento ser animado após o outro, com atraso
        scrollTrigger: { // Faz só rodar a animação quando chegar no objetp
            trigger: ".depoimentos-cards", // O que deve ser alcançado pra animação acontecer
            markers: false, // Serve pra mostrar as marcações de onde a animação começa
            start: "0% 75%", // Define os dois pontos que vão definir quando a animação acontece. O primeirpo diz que está no começo da div. O segundo diz que está em 70% da barra lateral de rolagem. Quando eles se encontram, a animação roda
        }
    })

    gsap.from(".card-duvida", {
        opacity: 0,
        y: 20,
        duration: 1,
        filter: "blur(10px)",
        stagger: 0.3, // Faz um elemento ser animado após o outro, com atraso
        scrollTrigger: { // Faz só rodar a animação quando chegar no objetp
            trigger: ".duvidas-frequentes-cards", // O que deve ser alcançado pra animação acontecer
            markers: false, // Serve pra mostrar as marcações de onde a animação começa
            start: "0% 80%", // Define os dois pontos que vão definir quando a animação acontece. O primeirpo diz que está no começo da div. O segundo diz que está em 70% da barra lateral de rolagem. Quando eles se encontram, a animação roda
        }
    })
}

animarPagina()

document.querySelectorAll("#button-sobre-mim").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    gsap.to(window, {duration: 1, scrollTo:{y:"#sobre-mim", offsetY:0}});
  });
});

document.querySelectorAll("#button-depoimentos").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    gsap.to(window, {duration: 1, scrollTo:{y:"#depoimentos-anonimos", offsetY:0}});
  });
});

document.querySelectorAll("#button-duvidas").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    gsap.to(window, {duration: 1, scrollTo:{y:"#duvidas-frequentes", offsetY:0}});
  });
});

document.querySelectorAll("#button-fale-comigo").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    gsap.to(window, {duration: 1, scrollTo:{y:"#contato", offsetY:0}});
  });
});