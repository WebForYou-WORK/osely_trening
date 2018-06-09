$(window).on('load', function(){ // вешаем скрипт на load ибо при ready chrome криво достаёт размеры
    var hh = $("#hea").height(); // берем высоту шапки и суем в переменную hh
    var fh = $("#foo").height(); // то же самое с подвалом
    var wh = $(window).height(); // высота всего окна
    var ch = wh - hh - fh; // считаем оптимальную высоту для блока с контентом
    $("#art").css('min-height', ch); // применяем посчитанную высоту
});

