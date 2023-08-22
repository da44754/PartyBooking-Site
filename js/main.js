$(document).ready(function () {
    // open the sidepar
    $(".openNav").click(function () {
        let y = $("#sidpar").width();
        $("#sidpar").animate({ left: 0 }, 300, function () {
            $(".openNav").animate({ marginLeft: -y }, 50);
        });
    });
    //close the sidepar
    $(".closebtn").click(function () {
        let y = $("#sidpar").width();
        $("#sidpar").animate({ left: -y }, 300);
        $(".openNav").animate({ marginLeft: '0px' }, 50);
    });
    // scroll to the pages
    $("a[href^='#']").click(function (e) {
        let x = e.target.getAttribute('href');
        if (x != '#') {
            let xoffset = $(x).offset().top;
            $("body,html").animate({ scrollTop: xoffset }, 1000);
        }
    });
    // slide down only the inner content of the clicked class
    $('.outer').click(function () {
        $(this).next('.innercontainent').slideToggle(300);
        $(this).siblings('.innercontainent').not($(this).next('.innercontainent')).slideUp(300);
    });
    // the count down timer
    (function () {
        // Set the date we're counting down to
        var countDownDate = new Date("10 october 2021 9:56:00");
        countDownDate = (countDownDate.getTime() / 1000);
        // Update the count down every 1 second
        var x = setInterval(function () {
            // Get today's date and time
            let now = new Date();
            now = (now.getTime() / 1000);
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (60 * 60 * 24));
            let hours = Math.floor((distance - (days * (24 * 60 * 60))) / 3600);
            let mins = Math.floor((distance - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
            let secs = Math.floor((distance - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))
            // Display the result in the element with id="demo"
            $(".days").html(`${days} D`);
            $(".hours").html(`${hours} h`);
            $(".minutes").html(`${mins} m`);
            $('.seconds').html(`${secs} s`)
        }, 1000);
    }
    )();
    // count input chars down 
    function updateCharCount() {
        const maxLength = 100; // Maximum character length
        const input = document.getElementById("myInput");
        const countSpan = document.getElementById("chars");
        const remainingChars = maxLength - input.value.length;
        countSpan.textContent = remainingChars;
        if(remainingChars<0){
            {
                $("#chars").text("your available character finished");
        }
        }
    }
    const inputField = document.getElementById("myInput");
    inputField.addEventListener("input", updateCharCount);
});