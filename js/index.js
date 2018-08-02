//close risk box
$(document).ready(function() {
    $("#risk").click(function() {
        $(".risk-warning").addClass("display");
        localStorage.setItem('value', 'true');
    });

    var val = localStorage.getItem('value')
    console.log(val);
    if (val) {
        $(".risk-warning").addClass("display");
    }

    $(".open-risk").click(function() {
        $(".risk-warning").removeClass("display");
    });



    //scroll
    $(".scroll").click(function() {
        var id = $(this).attr('data-id')
        $('html, body').animate({
            scrollTop: $('#' + id).offset().top - 60
        }, 1000);
    });



    $('#form-submit').click(function() {
        event.preventDefault();
        var formData = $('#form').serializeArray();
        var postData = {
            "name": formData[0].value,
            "email": formData[1].value,
            "message": formData[2].value
        };
        if (formData[0].value == "") {
            $(".error-name").removeClass("display");
        } else if (formData[1].value == "") {
            $(".error-name").addClass("display");
            $(".error-email").removeClass("display");
        } else {
            console.log(postData);
            $(".error-name").addClass("display");
            $(".error-email").addClass("display");
            $.ajax({
                    url: "http://ec2-35-180-34-120.eu-west-3.compute.amazonaws.com:8080/newsLetter/subscribe/",
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(postData),
                })
                .done(function(data) {
                    console.log(data);
                });
        }

    });

});