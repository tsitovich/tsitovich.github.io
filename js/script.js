document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.itc-slider').forEach((el) => {
    ItcSlider.getOrCreateInstance(el);
    });
});

ItcSlider.getOrCreateInstance('.itc-slider', {
    loop: false, // без зацикливания
    swipe: false // без свайпа
});



document.addEventListener('DOMContentLoaded', function () {

    $('.contacts__form').validate({
        rules: {
            name: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email: true
            }, 
            checkbox: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите своё имя",
                minlength: jQuery.validator.format("Не менее {0} символов!")
            },
            email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введён адрес почты"
            },
            checkbox: {
                required: "Поставьте галочку"
            }
        }
    });


    $('form').submit(function (e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('form').trigger('reset');
        });
        return false;
    });
});