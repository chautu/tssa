$(document).ready(function () {
    $('#trang-chu').click(function() {
        history.pushState(null, null, '/trang-chu');
        loadPage('index.html');  // Tải nội dung trang index.html
    });

    function loadPage(url) {
        $.ajax({
            url: url,
            success: function(response) {
                $('#content').html($(response).find('#content').html());  // Cập nhật nội dung trong phần tử #content
            }
        });
    }
});