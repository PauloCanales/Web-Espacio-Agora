 if ($(window).width() < 768) {
    
     
     
}else{
    window.sr = ScrollReveal();
    
    sr.reveal('.mapa', {
          duration: 1000,
          origin:'left',
          distance:'200px',
    });
    sr.reveal('.direccion-derecha', {
          duration: 1000,
          origin:'right',
          distance:'200px',
          
    });
    sr.reveal('.btn-instagram', {
          duration: 2000,
          opacity:0 ,
          
    });
    sr.reveal('.heading', {
          duration: 1000,
          origin:'top',
          distance:'30px',
          
    });
    
    sr.reveal('.subtitulo', {
          delay: 400,
          duration: 1000,
          
        
    });
    sr.reveal('.blur', {
          delay: 400,
          duration: 1000,
          
        
    });
    sr.reveal('.galeria-sub', {
          duration: 1500,
          origin: 'right',
          distance: '300px',
          reset:true,
        
    });
    sr.reveal('.titulo-nosotros', {
          delay: 300,
          duration: 1200,
          origin: 'right',
          distance: '300px',         
        
    });    
    
}   





