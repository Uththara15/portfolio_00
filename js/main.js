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
    
    
    // Back to top button (UPDATED)
    var $backToTop = $('.back-to-top');
    
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            // add .show class so CSS handles opacity / transform
            $backToTop.addClass('show');
        } else {
            $backToTop.removeClass('show');
        }
    });
    
    $backToTop.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
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

        // Updated Project details with 8 new projects
        const projectDetails = {
            "ai-detection": {
                name: "AI vs Human Text Detection (Deep Learning)",
                date: "2025",
                technology: "LSTM, CNN, GCU, Transformer",
                description: "Compared LSTM, CNN, GCU and Transformer models to classify 10k texts as AI-generated or human-written.",
                repo: "https://gitlab.labranet.jamk.fi/project-showcase/ai-human-text-detection"
            },
            "voice-analysis": {
                name: "Voice Analysis (Machine Learning)",
                date: "2024",
                technology: "Machine Learning, Audio Processing",
                description: "Built ML models on audio features to classify and analyse human voice recordings.",
                repo: "https://gitlab.labranet.jamk.fi/project-showcase/voice-analysis-ml-project"
            },
            "expense-tracker": {
                name: "Expense Tracker (Fullstack)",
                date: "2025",
                technology: "Node.js, PostgreSQL, React, JWT",
                description: "Secure JWT-based expense tracking app with budgets, recurring expenses, and currency conversion.",
                repo: "https://gitlab.labranet.jamk.fi/project-showcase/expense-tracker-project"
            },
            "todo-app": {
                name: "Todo App",
                date: "2024",
                technology: "Fullstack Web Development",
                description: "Simple CRUD Todo application demonstrating clean API design and basic frontend interaction.",
                repo: "https://gitlab.labranet.jamk.fi/project-showcase/todo"
            },
            "pathfinding": {
                name: "A* Pathfinding (Algorithms)",
                date: "2025",
                technology: "Data Structures & Algorithms, Python",
                description: "Implemented the A* algorithm to find shortest paths in grid mazes using Manhattan heuristic.",
                repo: "https://gitlab.labranet.jamk.fi/project-showcase/a-star-pathfinding"
            },
            "library-ui": {
                name: "Jamk Library UI (Figma Prototype)",
                date: "2025",
                technology: "Figma, UI/UX Design",
                description: "Designed an improved JAMK library interface focusing on search, navigation, and mobile usability.",
                repo: "https://www.figma.com/proto/HqIk4nXKpLrBPf67QrrAjq/Library-Jamk?node-id=72-952&p=f&t=wtTKXIyBpj1ZE9NV-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2"
            },
            "future-factory": {
                name: "Future Factory Project (Group)",
                date: "2025",
                technology: "Project Management, Teamwork",
                description: "Planned and delivered a real client-facing development project, including project plan, sustainable development aspects, and teamwork in a diverse customer-focused team.",
                repo: "https://it-ff-2025-t09.pages.labranet.jamk.fi/site/"
            },
            "used-car": {
                name: "Used Car Price Prediction (Group)",
                date: "2025",
                technology: "Python, Data Analytics, ML",
                description: "End-to-end Python data project: preprocessing a large used car dataset, exploratory analysis, building and comparing multiple ML models, and evaluating prediction accuracy with clear result analysis.",
                repo: "https://gitlab.labranet.jamk.fi/project-showcase/used-car-project"
            }
        };

        // Open popup
        openPopupButtons.forEach(button => {
            button.addEventListener("click", function () {
                const projectId = this.getAttribute("data-project");
                if (projectDetails[projectId]) {
                    const project = projectDetails[projectId];

                    document.getElementById("popup-project-name").textContent = project.name;
                    document.getElementById("popup-date").textContent = project.date;
                    document.getElementById("popup-technology").textContent = project.technology;
                    document.getElementById("popup-description").textContent = project.description;
                    repoLink.href = project.repo;

                    popupModal.style.display = "block";
                }
            });
        });

        // Close popup
        if (closePopupButton) {
            closePopupButton.addEventListener("click", function () {
                popupModal.style.display = "none";
            });
        }

        // Close popup when clicking outside the modal
        window.addEventListener("click", function (event) {
            if (event.target === popupModal) {
                popupModal.style.display = "none";
            }
        });
    });
})(jQuery);
