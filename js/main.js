(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    // JavaScript to handle popup
document.addEventListener("DOMContentLoaded", function () {
    const popupModal = document.getElementById("project-popup");
    const openPopupButtons = document.querySelectorAll(".open-popup");
    const closePopupButton = document.querySelector(".close-popup");
    const repoLink = document.getElementById("popup-repo-link");

    // Project details (you can customize this data)
    const projectDetails = {
        "todo": {
            name: "Todo Application",
            date: "January 2023",
            technology: "React, Node.js, MongoDB",
            description: "A simple todo application to manage daily tasks.",
            repo: "https://github.com/Uththara15/todo-app.git"
        },
        "real-estate": {
            name: "Real Estate Website",
            date: "March 2023",
            technology: "HTML, CSS, JavaScript, PHP",
            description: "A website for listing and searching real estate properties.",
            repo: "https://github.com/Uththara15/real-state.git"
        },
        "iot": {
            name: "IoT Project",
            date: "May 2023",
            technology: "Arduino, Raspberry Pi, MQTT",
            description: "An IoT-based home automation system.",
            repo: "#"
        },
        "book-catalog": {
            name: "Book Review Web UI",
            date: "July 2023",
            technology: "React, Bootstrap, REST API",
            description: "A web UI for reviewing and cataloging books.",
            repo: "#"
        },
        "data-structure": {
            name: "Data Structure Project",
            date: "September 2023",
            technology: "Python, Algorithms",
            description: "A project demonstrating various data structures and algorithms.",
            repo: "#"
        },
        "expense tracker": {
            name: "Web Application",
            date: "November 2023",
            technology: "Angular, Firebase",
            description: "A modern web application with real-time database integration.",
            repo: "https://github.com/Uththara15/expense-tracker"
        },

        "titanic-analysis": {
        name: "Titanic Data Analysis",
        date: "March 2025",
        technology: "Python, Pandas, Seaborn, Scikit-learn",
        description: "Performed EDA, feature engineering, and built classification models (kNN, Random Forest) to predict Titanic passenger survival.",
        repo: "https://github.com/Uththara15/ML-DA-Project-with-Titanic-Data"
    },
    };

    // Open popup
    openPopupButtons.forEach(button => {
        button.addEventListener("click", function () {
            const projectId = this.getAttribute("data-project");
            const project = projectDetails[projectId];

            document.getElementById("popup-project-name").textContent = project.name;
            document.getElementById("popup-date").textContent = project.date;
            document.getElementById("popup-technology").textContent = project.technology;
            document.getElementById("popup-description").textContent = project.description;
            repoLink.href = project.repo;

            popupModal.style.display = "block";
        });
    });

    // Close popup
    closePopupButton.addEventListener("click", function () {
        popupModal.style.display = "none";
    });

    // Close popup when clicking outside the modal
    window.addEventListener("click", function (event) {
        if (event.target === popupModal) {
            popupModal.style.display = "none";
        }
    });
});
})(jQuery);

