//close risk box
$(document).ready(function() {
    $("#risk").click(function() {
        $(".risk-warning").addClass("display");
    });

});
$(document).ready(function() {
    $(".open-risk").click(function() {
        $(".risk-warning").removeClass("display");
    });

});

//scroll
$(".nav-taget").click(function() {
    var id = $(this).attr('data-id')
    $('html, body').animate({
        scrollTop: $('#' + id).offset().top
    }, 1000);
});


$(document).ready(function() {

    $('#form-submit').click(function() {
        event.preventDefault();
        var formData = $('#form').serializeArray();
        var postData = {
            "name": formData[0].value,
            "email": formData[1].value,
            "message": formData[2].value
        };
        console.log(postData);
        $.ajax({
                type: 'POST',
                url: 'ec2-35-180-34-120.eu-west-3.compute.amazonaws.com:8080/newsLetter/subscribe',
                data: postData,
                dataType: 'json',
                encode: true,
                headers: {
                    'Access-Control-Allow-Headers': '*'
                },
            })
            .done(function(data) {
                console.log(data);
            });

    });

});