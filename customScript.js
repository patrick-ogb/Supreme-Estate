$(document).ready(function() {
    var btnSubmit = $('#btnSubmit');
    btnSubmit.click(function(e) {
        var firstN = $('#firstName');
        var lastN = $('#lastName');
        var phoneN = $('#phoneNumber');
        var emailN = $('#emailAddress');
        var commentN = $('#comment');
        var displayValue = $('#btndisplay');

        var firstName = firstN.val();
        var lastName = lastN.val();
        var phoneNumber = phoneN.val();
        var emailAddress = emailN.val();
        var comment = commentN.val();

        if (
            firstName.length > 0 &&
            lastName.length > 0 &&
            phoneNumber.length > 0 &&
            emailAddress.length > 0 &&
            comment.length > 0
        ) {
            const supreme = {
                FirstName: firstName,
                LastName: lastName,
                Phone: phoneNumber,
                Email: emailAddress,
                Comments: comment
            };
            const option = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(supreme)
            };
            fetch('https://localhost:44344/api/supreme', option).then(
                response => {
                    console.log(response);

                    response.json().then(myJson => {
                        console.log(myJson);
                        $(myJson).each(function(index, item) {
                            displayValue.val(`Your Id = ${item.Id}`).css({
                                'background-color': 'green',
                                color: 'white'
                            });
                        });
                    });
                }
            );
            firstN.val('');
            lastN.val('');
            phoneN.val('');
            emailN.val('');
            commentN.val('');
        } /* else {
            if (firstName.length <= 0) {
                // firstN.val("First name can't be empty");
                $('.firstNamev').addClass('valid-tooltip');
                firstN.focus(function() {
                    firstN.val('');
                });
            }
            if (lastName.length <= 0) {
                // lastN.val("Last name can't be empty");
                $('.lastNamev').val("Last name can't be empty");
                lastN.focus(function() {
                    lastN.val('');
                });
            }
            if (phoneNumber.length <= 0) {
                phoneN.val("Phone number can't be emepty");
                phoneN.focus(function() {
                    phoneN.val('');
                });
            }
            if (emailAddress.length <= 0) {
                emailN.val('Email number is required');
                emailN.focus(function() {
                    emailN.val('');
                });
            }
            if (comment.length <= 0) {
                commentN.val('Please Comment');
                commentN.focus(function() {
                    commentN.val('');
                });
                btnSubmit.blur(function() {
                    commentN.val('');
                });
            }
        } */
    });
});

function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('muteYouTubeVideoPlayer', {
        videoId: 'll4HbFTbn2E', // YouTube Video ID
        width: 560, // Player width (in px)
        height: 316, // Player height (in px)
        playerVars: {
            autoplay: 1, // Auto-play the video on load
            controls: 1, // Show pause/play buttons in player
            showinfo: 0, // Hide the video title
            modestbranding: 1, // Hide the Youtube Logo
            loop: 1, // Run the video in a loop
            fs: 0, // Hide the full screen button
            cc_load_policy: 0, // Hide closed captions
            iv_load_policy: 3, // Hide the Video Annotations
            autohide: 0 // Hide video controls when playing
        },
        events: {
            onReady: function(e) {
                e.target.mute();
            }
        }
    });
}

// $('body').scrollspy({target: '#navbarsExampleDefault', offset: 146});
// font-awesome kit code

src = 'https://kit.fontawesome.com/47cb33fe4d.js';
crossorigin = 'anonymous';
