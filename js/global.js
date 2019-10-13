//Share 
$('.btn-share').on('click', function (e) {

    var currentUrl = window.location.href;
    var urlToShare = '';

    switch ($(this).data('type')) {
        case 'twitter':

            var hashtags = 'VRMDisplay,VRM';
            urlToShare = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(currentUrl) + '&hashtags=' + encodeURIComponent(hashtags);

            break;
    
        case 'facebook':

            break;
    }
    
    window.open(urlToShare, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
});