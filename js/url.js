$(document).ready(function () {
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
        { url: '/courses-and-fees/intensive', page: 'intensive.html', class: 'page page_intensive page-intensive' },
        { url: '/maintenance', page: 'maintenance.html', class: '' },
        { url: '/terms', page: 'terms.html', class: 'page page_terms page-terms'},
    ];

    const currentPath = window.location.pathname;
    const basePath = currentPath.replace(/\/[^\/]*$/, ''); // ví dụ /tssa

    // Trường hợp user truy cập thẳng /access, /faq,...
    const matchOnLoad = urlList.find(item => currentPath.endsWith(item.url));
    if (matchOnLoad) {
        console.log('matchOnLoad');
        loadPage(matchOnLoad);
    }

    // Bắt sự kiện click vào các link
    $('a').on('click', function (e) {
        console.log('matched', matched);
        const href = $(this).attr('href'); // access.html
        const matched = urlList.find(item => item.page === href);
        
        if (matched) {
            e.preventDefault(); // Ngăn không cho load trang thật
            const newUrl = basePath + matched.url;
            history.pushState(null, null, newUrl);
            loadPage(matched.page);
        }
    });

    // Khi user nhấn nút Back/Forward trên trình duyệt
    window.addEventListener('popstate', function () {
        console.log('matched');
        const newPath = window.location.pathname;
        const matched = urlList.find(item => newPath.endsWith(item.url));
        if (matched) {
            loadPage(matched);
        }
    });

    // Hàm load nội dung qua AJAX
    function loadPage(item) {
        console.log('loadPage',item);
        $.ajax({
            url: item.page,
            success: function (response) {
                const html = $('<div>').append($.parseHTML(response));
                const content = html.find('#wrapper').html();
                //add class body
                $('body').removeClass();
                $('body').addClass(item.class);

                if(item.page == 'index.html'){
                    console.log('loadPage index');
                    $("link[href='css/content.css']").remove();
                    $("<link>", {rel: "stylesheet",href: "css/top.css"}).appendTo("head");
                    $('<script>', {src: 'js/top.js',type: 'text/javascript'}).appendTo('head');
                }else{
                    $("link[href='css/top.css']").remove();
                    $("<link>", {rel: "stylesheet",href: "css/content.css"}).appendTo("head");
                    $('script[src="js/top.js"]').remove();
                    if( item.page == 'access.html' ){
                        $('<script>', {src: 'js/table.js',type: 'text/javascript'}).appendTo('head');
                    }
                    if( item.page == 'faq.html' ){
                        $('<script>', {src: 'js/faq.js',type: 'text/javascript'}).appendTo('head');
                    }
                    if( item.page == 'contact.html' ){
                        $('<script>', {src: 'js/contact.js',type: 'text/javascript'}).appendTo('head');
                    }
                    if( item.page == 'intensive.html' ){
                        $('<script>', {src: 'js/table.js',type: 'text/javascript'}).appendTo('head');
                    }
                }
                $('#wrapper').html(content);
            },            
            error: function () {
                $('#wrapper').html('<p style="color:red;">❌ Lỗi tải trang!</p>');
            }
        });
    }
});
