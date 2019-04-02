function showbio() {
    $('nav').on('click', '.js-bio', function(event) {
        $('header').css('display', 'none');
        $('.home-nav').addClass('new-top-nav');
        $('.home-nav').html(`${DATA[0].navBio}`);
        $('.js-side-y').animate({height:'70px', 'padding-top': '20px'});
        $('.js-side-c').animate({height:'70px', 'padding-top': '20px'});
        $('.js-side-m').animate({height:'160px', 'padding-top': '104px'});
        $('main').hide().html(`${DATA[0].mainBio}`).fadeIn('slow');
    })
}

function showprojects() {
    $('nav').on('click', '.js-projects', function(event) {
        $('header').css('display', 'none');
        $('.home-nav').addClass('new-top-nav');
        $('.home-nav').html(`${DATA[0].navProjects}`);
        $('.js-side-m').animate({height:'70px', 'padding-top': '20px'});
        $('.js-side-c').animate({height:'70px', 'padding-top': '20px'});
        $('.js-side-y').animate({height:'160px', 'padding-top': '104px'});
        $('main').hide().html(`${DATA[0].mainProjects}`).fadeIn('slow');
    })
}

function showcontact() {
    $('nav').on('click', '.js-contact', function(event) {
        $('header').css('display', 'none');
        $('.home-nav').addClass('new-top-nav');
        $('.home-nav').html(`${DATA[0].navContact}`);
        $('.js-side-m').animate({height:'70px', 'padding-top': '20px'});
        $('.js-side-y').animate({height:'70px', 'padding-top': '20px'});
        $('.js-side-c').animate({height:'160px', 'padding-top': '104px'});
        $('main').hide().html(`${DATA[0].mainContact}`).fadeIn('slow');
    })
}

function showhome() {
    $('nav').on('click', '.js-home', function(event) {
        $('main').css('display', 'none');
        $('header').css('display', 'block');
        $('.home-nav').html(`
        <nav class="home-nav" role="navigation">
            <ul>
                <li><button class="js-bio"><h3 class="magenta">bio</h3></button></li>
                <li><button class="js-projects"><h3 class="yellow">projects</h3></button></li>
                <li><button class="js-contact"><h3 class="cyan">contact</h3></button></li>
            </ul>
        </nav>`);
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