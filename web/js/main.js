const toggleBtn = document.querySelector(".navbar-toggler");
const navbarNav = document.querySelector(".navbar-nav");
const navCloseBtn = document.querySelector(".btn-nav-close");
const noProdDiv = document.getElementById("noItemsFound");

toggleBtn.addEventListener("click", () => {
    navbarNav.classList.toggle("active");
});
navCloseBtn.addEventListener("click", () => {
    navbarNav.classList.remove("active");
});




/* Add icon on .nav-item if dropdown exists */
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
    const hasDropdowns = item.querySelector(".dropdown") !== null;
    if (hasDropdowns) {
        item.classList.add("icon");
    }
});


$('.carousel').carousel({
    interval: 3000
})

$(document).ready(function() {
    $('.my-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 300,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
});



(function($) {

    $('#search-button').on('click', function(e) {
        if ($('#search-input-container').hasClass('hdn')) {
            e.preventDefault();
            $('#search-input-container').removeClass('hdn')
            return false;
        }
    });

    $('#hide-search-input-container').on('click', function(e) {
        e.preventDefault();
        $('#search-input-container').addClass('hdn')
        return false;
    });

})(jQuery);

function showHeader() {
    let toptogButton = document.getElementById("top-toggler");
    let headerTop = document.getElementById("header-top");

    if (headerTop.style.opacity == "1") {
        toptogButton.style.fontSize = "36px";
        headerTop.style.opacity = "0";
    } else {
        toptogButton.style.fontSize = "30px";
        headerTop.style.opacity = "1";
    }
}

const navbar = document.getElementById('nav-head');
const headerHeight = document.querySelector('header').offsetHeight;

window.addEventListener('scroll', () => {
    if (window.pageYOffset > headerHeight) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

    $('html, body').animate({ scrollTop: 0 }, 'slow');
}


// Get all the radio buttons
const radioButtons = document.querySelectorAll('input[type="radio"]');
const checkoutput = document.getElementById('selectedItems');
const selectedDropdown = document.getElementById('select_drop_box');

// Get the div where we will display the selected item
const selectedValueDiv = document.getElementById('selectedValue');

// Add a click event listener to each radio button
radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('click', () => {
        // Find the selected radio button
        const selectedRadioButton = Array.from(radioButtons).find(
            (rb) => rb.checked
        );

        // Display the selected item in the selectedValueDiv
        if (selectedRadioButton) {
            checkoutput.style.display = "block"
            selectedDropdown.style.display = "block"
            selectedValueDiv.textContent = selectedRadioButton.value;
        } else {
            selectedValueDiv.textContent = ''; // No selection
            selectedDropdown.style.display = "none"
            checkoutput.style.display = "none";
        }
    });
});

function closeProducts() {
    radioButtons.forEach((radioButton) => {
        radioButton.checked = false;
    });

    selectedDropdown.style.display = "none"
    checkoutput.style.display = "none";
    $(".card-item").show(500);
    noProdDiv.style.display = "none";
}

function filterCards() {


    let selectedTags = [];

    // Collect the selected tags
    $(".tag-filter:checked").each(function() {
        selectedTags.push($(this).data("tag"));
    });

    // Hide all card items
    $(".card-item").hide(500);

    // Show or hide cards based on selected tags
    let matchingCards = $(".card-item").filter(function() {
        let cardTags = $(this).data("tags");
        return selectedTags.length === 0 || selectedTags.includes(cardTags);
    });

    if (matchingCards.length === 0) {
        $("#noItemsFound").show(500);
    } else {
        $("#noItemsFound").hide(500);
        matchingCards.show(300);
    }
}

$(document).ready(function() {
    // Attach a change event handler to the checkboxes
    $(".tag-filter").on("change", function() {
        filterCards();
    });
});




// JavaScript to update selectedValue2 div when the select changes
function updateSelectedValue() {
    const select = document.getElementById('prod-sub-cat');
    const selectedValue2 = document.getElementById('selectedValue2');
    const selectedItems2 = document.getElementById('selectedItems2');
    const selectedOption = select.options[select.selectedIndex];
    selectedItems2.style.display = "block";


    selectedValue2.innerText = selectedOption.innerText;
}

function closeProducts2() {
    document.getElementById("selectedItems2").style.display = "none";
}


// Accordion Color Change