document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.itc-slider').forEach((el) => {
    ItcSlider.getOrCreateInstance(el);
    });
});

ItcSlider.getOrCreateInstance('.itc-slider', {
    loop: false, // без зацикливания
    swipe: false // без свайпа
});



ItcSubmitForm.getOrCreateInstance('form');

ItcSubmitForm.getOrCreateInstance('form', {
    isCheckValidationOnClient: false, // проверять форму перед отправкой на сервер
    attachMaxItems: 5, // максимальное количество файлов, которые можно добавить к форме
    attachMaxFileSize: 512, // 512 Кбайт - максимальный размер файла
    attachExt: ['jpg', 'jpeg', 'bmp', 'gif', 'png'] // допустимые расширения файлов
});