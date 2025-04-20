const urlList = [
    { url: '/access', page: 'access.html', class: 'page page_access page-access'},
    { url: '/courses-and-fees', page: 'courses-and-fees.html' , class: 'page page_courses-and-fees page-courses-and-fees'},
    { url: '/career', page: 'career.html', class: 'page page_career page-career' },
    { url: '/instructors', page: 'instructors.html', class: 'page page_instructors page-instructors' },
    { url: '/faq', page: 'faq.html', class: 'page page_faq page-faq' },
    { url: '/sushi-owners', page: 'sushi-owners.html', class: 'page page_sushi-owners page-sushi-owners' },
    { url: '/company', page: 'company.html', class: 'page page_company page-company' },
    { url: '/contact', page: 'contact.html', class: 'page page_contact page-contact' },
    { url: '/', page: 'index.html', class: ''},
    { url: '/courses-and-fees/intensive', page: 'courses-and-fees/intensive.html', class: 'page page_intensive page-intensive' },
    { url: '/maintenance', page: 'maintenance.html', class: '' },
    { url: '/terms', page: 'terms.html', class: 'page page_terms page-terms'},
];
  
const pageConfigs = {
    'index.html': {
      scripts: ['js/top.js'],
      init: 'initTopPage'
    },
    'access.html': {
      scripts: ['js/table.js'],
      init: 'initTable'
    },
    'intensive.html': {
      scripts: ['js/table.js'],
      init: 'initTable'
    },
    'faq.html': {
      scripts: ['js/faq.js'],
      init: 'initFaq'
    },
    'contact.html': {
        scripts: ['js/contact.js'],
        init: 'initContact'
    }
};

$(document).ready(function() {
    // Mặc định ngôn ngữ là tiếng nhật
    let lang = 'ja';

    const currentPath = window.location.pathname;
    const basePath = currentPath.replace(/\/[^\/]*$/, ''); // ví dụ /tssa

    function bindLanguageEvents() {
        $('a').on('click', function (e) {
            if (lang == 'en') {
                localStorage.setItem("showLanguageEn", "true");
            }
    
            const href = $(this).attr('href'); // ví dụ: contact.html/#tab03
            const urlParts = href.split('#');
    
            // 🛠 Xóa dấu '/' nếu có ở cuối
            let pathOnly = urlParts[0].replace(/\/$/, '');
            const hash = urlParts[1] ? `#${urlParts[1]}` : '';
    
            const matched = urlList.find(item =>
                pathOnly === item.url || pathOnly.endsWith(item.page)
            );
    
            if (matched) {
                e.preventDefault();
                const newUrl = basePath + matched.url + hash;
                history.pushState(null, null, newUrl);
                loadPage(matched, hash);
            }
        });
    }
    

    // function bindLanguageEvents() {
    //     $('a').on('click', function (e) {
    //         if (lang == 'en') {
    //             localStorage.setItem("showLanguageEn", "true");
    //         }
    
    //         const href = $(this).attr('href'); // ví dụ: contact.html/#tab03
    //         const urlParts = href.split('#');
    //         const pathOnly = urlParts[0]; // contact.html/
    //         const hash = urlParts[1] ? `#${urlParts[1]}` : '';
    
    //         const matched = urlList.find(item =>
    //             pathOnly === item.url || pathOnly.endsWith(item.page)
    //         );
    
    //         if (matched) {
    //             e.preventDefault();
    //             const newUrl = basePath + matched.url + hash;
    //             history.pushState(null, null, newUrl);
    //             loadPage(matched, hash);
    //         }
    //     });
    // }
    

    // function bindLanguageEvents() {
    //     $('a').on('click', function (e) {
    //         if(lang == 'en'){
    //             localStorage.setItem("showLanguageEn", "true");
    //         }
    
    //         const href = $(this).attr('href'); // access.html
    //         console.log('HREF:', href);
    //         // const matched = urlList.find(item => item.page === href);
    //          // Tìm trang tương ứng dựa vào href
    //          const matched = urlList.find(item => href === item.url || href.endsWith(item.page));
    //          console.log('MATCHED:', matched);
    //         if (matched) {
    //             e.preventDefault(); // Ngăn không cho load trang thật
    //             const newUrl = basePath + matched.url;
    //             history.pushState(null, null, newUrl);
    //             loadPage(matched);
    //         }
            
    //     });
    // }

    function loadPage(item) {
        const baseUrl = window.location.origin + window.location.pathname.replace(/[^\/]*$/, '');
        const fullUrl = baseUrl + item.page;
        $.ajax({
            url: fullUrl,
            success: function (response) {
                const html = $('<div>').append($.parseHTML(response));
                const content = html.find('#wrapper').html();
                console.log('LOADED CONTENT:', content);
                //add class body
                $('body').removeClass();
                $('body').addClass(item.class);

                $('#wrapper').html(content);
                changeLanguage();
                bindLanguageEvents();
            },
            error: function () {
                $('#wrapper').html('<p style="color:red;">❌ Lỗi tải trang!</p>');
            }
        });
    }

    if (localStorage.getItem("showLanguageEn") === "true") {
        // Cập nhật selected option
        $('.selected-option').html(`<img src="img/language/en.png" alt=""> English`);
        lang = 'en';
        // Xóa trạng thái để không ảnh hưởng lần tải sau
        localStorage.removeItem("showLanguageEn");
    }
    // Cập nhật văn bản khi trang được tải
    changeLanguage();
    bindLanguageEvents();
});


