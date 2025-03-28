const arrLang = {
    ja: {
        languageJa:"日本語",
        languageEn:"英語",
        schoolGuide: "学校案内",
        courseInformation: "コース案内",
        lecturerIntroduction:"講師紹介",
        employmentSupport:"就職サポート",
        faq:"よくある質問",
        sushiRestaurants:"寿司店様へ"
    },
    en: {
        languageJa:"Japanese",
        languageEn:"English",
        schoolGuide: "School Guide",
        courseInformation: "Course information",
        lecturerIntroduction:"Lecturer Introduction",
        employmentSupport:"Employment Support",
        faq:"FAQ",
        sushiRestaurants:"To Sushi Restaurants"
    }
};


$(document).ready(function() {
    // Mặc định ngôn ngữ là tiếng Anh
    let lang = 'ja';

    // Hàm thay đổi ngôn ngữ
    function changeLanguage() {
        // Lặp qua các phần tử có thuộc tính 'key'
        $('[key]').each(function() {
            let key = $(this).attr('key');
            // Thay đổi nội dung văn bản theo ngôn ngữ
            $(this).text(arrLang[lang][key]);
        });
    }

     $("#languageSelect").change(function() {
         lang = $('#languageSelect').find(":selected").val();
          // Cập nhật văn bản với ngôn ngữ mới
          changeLanguage();
    }).change(); 

    // Cập nhật văn bản khi trang được tải
    changeLanguage();
});