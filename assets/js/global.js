//Share 
$('.btn-share').on('click', function (e) {

    var currentUrl = window.location.href;
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

function getLastVersion() {
    $.ajax({
        type: 'GET',
        url: 'https://api.github.com/repos/Akarimichi/vrm-display-releases/releases/latest',
        success: function (response) {
            $('.git-tag-version').text(response.tag_name);
            $('.btn-download').attr('href', 'https://github.com/Akarimichi/vrm-display-releases/releases/download/' + response.tag_name + '/VRM.Display.Setup.' + response.name+'.exe');
        }
    });
}
getLastVersion();

//Change language

$('.language-selector .lang[data-lang="' + $('html').attr('lang') + '"]').addClass('active');

$(document).on('click', '.language-selector .lang', function (event) {
    var url = document.location.href;
    var locale = $('.language-selector .lang.active').data('lang');
    var newSelectedLanguage = $(this).data('lang');

    var newUrl = url.replace('/' + locale + '/', '/' + newSelectedLanguage + '/');

    window.location.href = newUrl;
});