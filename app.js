const bars = document.querySelector('.fa-bars');
const navbar = document.querySelector('.navbar');

bars.addEventListener('click',()=>{
    bars.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

$(window).on('scroll load',function(){

    if($(window).scrollTop() > 30){
        $('header').addClass('header-active');
    }else{
        $('header').removeClass('header-active');
    }

    $('section').each(function(){
        let top = $(window).scrollTop();
        let id = $(this).attr('id');
        let height = $(this).height();
        let offset = $(this).offset().top - 200;

        if(top >= offset && top < (height + offset) ){
            $('.navbar ul li a').removeClass('active');
            $('.navbar').find('[href="#' + id + '"]').addClass('active');
        }
    });

});