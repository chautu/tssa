function initFaq() {
    // Gán trạng thái đầu
    const firstDD = $('.faq_wrap dl:first-child dt');
    const firstDT = firstDD.next('dd');
    firstDD.addClass('active');
    firstDT.show();

    // Gỡ toàn bộ sự kiện cũ trước khi gắn lại
    $('.faq_wrap dt').off('click').on('click', function () {
        const $this = $(this);
        const $dt = $this.next('dd');

        if ($this.hasClass('active')) {
            $this.removeClass('active');
            $dt.slideUp();
        } else {
            $this.addClass('active');
            $dt.slideDown();
        }
    });
}
