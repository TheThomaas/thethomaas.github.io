let language;
let userLang = (navigator.language || navigator.userLanguage).substr(0, 2);

function getLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage(userLang) : false;
    $.ajax({
        url:  '/language/' +  localStorage.getItem('language') + '.json', 
        dataType: 'json', async: false, dataType: 'json', 
        success: function (lang) { language = lang } });
}

function setLanguage(lang) {
    console.log("Set language to : " + lang);
    localStorage.setItem('language', lang);
}

function init() {
    getLanguage();
    $(document).ready(function(){
        $('#my_projects').text(language.my_projects);
        $('#my_projects_description').text(language.my_projects_description);
        $('#personnal_projects').text(language.personnal_projects);
        $('#personnal_projects_description').text(language.personnal_projects_description);
        $('.view-project').text(language.view_project);
        $('.site-link').text(language.site_link);
        $('#umbra_description').text(language.umbra_description);
        $('#qrcode_description').text(language.qrcode_description);
        $('#school_projects').text(language.school_projects);
        $('#school_projects_description').text(language.school_projects_description);
        $('#cancre_sim_description').text(language.cancre_sim_description);
        $('#sigfox_description').text(language.sigfox_description);
        $('#snake_description').text(language.snake_description);
        $('#ldap_description').text(language.ldap_description);
        $('#guess_who_title').text(language.guess_who_title);
        $('#guess_who_description').text(language.guess_who_description);
        $('.selected-language').text(language.name);
    });
}

function changeLanguage(lang) {
    setLanguage(lang);
    init();
}