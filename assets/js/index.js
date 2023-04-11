$(".form")
    .find("input, textarea")
    .on("keyup blur focus", function(e) {
        var $this = $(this),
            label = $this.prev("label");

        if (e.type === "keyup") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.addClass("active highlight");
            }
        } else if (e.type === "blur") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.removeClass("highlight");
            }
        } else if (e.type === "focus") {
            if ($this.val() === "") {
                label.removeClass("highlight");
            } else if ($this.val() !== "") {
                label.addClass("highlight");
            }
        }
    });

$(".tab a").on("click", function(e) {
    e.preventDefault();

    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");

    target = $(this).attr("href");

    $(".tab-content > div").not(target).hide();

    $(target).fadeIn(600);
});

const registerContent = document.querySelector('.signUpDiv');
const afterRegisterContent = document.querySelector('#afterSignUp');
const registerButton = document.querySelector('#registerBtn');

// Check if the registration state is saved in local storage
const registrationState = localStorage.getItem('registrationState');
afterRegisterContent.style.display = 'none'
registerButton.addEventListener('click', () => {
    registerContent.style.display = 'none';
    afterRegisterContent.style.display = 'block';
})

// if (registrationState === 'after') {
//     // Show the after-registration component
//     registerContent.style.display = 'none';
//     afterRegisterContent.style.display = 'block';
// }

// // Bind a click event handler to the register button
// registerButton.addEventListener('click', function() {
//     // Hide the registration component
//     registerContent.style.display = 'none';

//     // Show the after-registration component
//     afterRegisterContent.style.display = 'block';

//     // Save the registration state to local storage
//     localStorage.setItem('registrationState', 'after');
// });