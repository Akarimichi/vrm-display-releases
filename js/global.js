//Share 
$('.btn-share').on('click', function (e) {

    var currentUrl = 'https://akarimichi.github.io/vrm-display-releases/';
    var hashtags = 'VRMDisplay,VRM';
    var urlToShare = '';

    switch ($(this).data('type')) {
        case 'twitter':

            urlToShare = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(currentUrl) + '&hashtags=' + encodeURIComponent(hashtags);

            break;
    
        case 'facebook':

            urlToShare = 'https://www.facebook.com/sharer.php?u=' + encodeURIComponent(currentUrl) ;
            break;
    }
    
    window.open(urlToShare, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
});