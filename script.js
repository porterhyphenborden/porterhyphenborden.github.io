function showbio() {
    $('nav').on('click', '.js-bio', function(event) {
        event.preventDefault();
        $('header').css('display', 'none');
        $('.js-home').css('display', 'block');
        $('.home-nav').addClass('top-nav');
        $('.home-nav').html(`${DATA[0].navBio}`);
        $('.js-side-y').animate({height:'70px', 'padding-top': '20px'});
        $('.js-side-c').animate({height:'70px', 'padding-top': '20px'});
        $('.js-side-m').animate({height:'160px', 'padding-top': '104px'});
        $('main').hide().html(`${DATA[0].mainBio}`).fadeIn('slow');
    })
}

function showprojects() {
    $('nav').on('click', '.js-projects', function(event) {
        event.preventDefault();
        $('header').css('display', 'none');
        $('.js-home').css('display', 'block');
        $('.home-nav').addClass('top-nav');
        $('.home-nav').html(`${DATA[0].navProjects}`);
        $('.js-side-m').animate({height:'70px', 'padding-top': '20px'});
        $('.js-side-c').animate({height:'70px', 'padding-top': '20px'});
        $('.js-side-y').animate({height:'160px', 'padding-top': '104px'});
        $('main').hide().html(`${DATA[0].mainProjects}`).fadeIn('slow');
    })
}

function showcontact() {
    $('nav').on('click', '.js-contact', function(event) {
        event.preventDefault();
        $('header').css('display', 'none');
        $('.js-home').css('display', 'block');
        $('.home-nav').addClass('top-nav');
        $('.home-nav').html(`${DATA[0].navContact}`);
        $('.js-side-m').animate({height:'70px', 'padding-top': '20px'});
        $('.js-side-y').animate({height:'70px', 'padding-top': '20px'});
        $('.js-side-c').animate({height:'160px', 'padding-top': '104px'});
        $('main').hide().html(`${DATA[0].mainContact}`).fadeIn('slow');
    })
}

function showhome() {
    $('nav').on('click', '.js-home', function(event) {
        event.preventDefault();
        $('main').css('display', 'none');
        $('header').css('display', 'block').fadeIn('slow');
        $('.js-home').css('display', 'none');
        $('.home-nav').html(`${DATA[0].navHome}`);
        $('.js-side-m').animate({height:'160px', 'padding-top': '104px'});
        $('.js-side-y').animate({height:'160px', 'padding-top': '104px'});
        $('.js-side-c').animate({height:'160px', 'padding-top': '104px'});
    });
}

function loadpage() {
    showbio();
    showprojects();
    showcontact();
    showhome();
}

$(loadpage);