// document.addEventListener('DOMContentLoaded', () => {
// 	const tabs = document.querySelectorAll('.tab_contact a');
// 	const tabContents = document.querySelectorAll('.tab_contents');

// 	tabs.forEach(tab => {
// 		tab.addEventListener('click', (e) => {
// 			e.preventDefault();

// 			// Remove 'current' class from all tabs and contents
// 			tabs.forEach(tab => tab.classList.remove('current'));
// 			tabContents.forEach(content => content.classList.remove('current'));

// 			// Add 'current' class to the clicked tab
// 			tab.classList.add('current');

// 			// Find the associated content and add 'current' class
// 			const targetId = tab.getAttribute('href').substring(1);
// 			const targetContent = document.getElementById(targetId);
// 			if (targetContent) {
// 				targetContent.classList.add('current');
// 			}
// 		});
// 	});
// });

	
// $(document).ready(function(){
// 	$('zip', '', 'pref', 'addr').zipaddr();
// 	Zip.x();   // 最後にzipaddrを呼び出す。
// });

// $(document).ready(function(){
// 	$('zip2', '', 'pref22', 'addr2').zipaddr();
// 	Zip.x();   // 最後にzipaddrを呼び出す。
// });

function initContact(){
	$(document).ready(function () {
		$('.tab_contact a').on('click', function (e) {
		  e.preventDefault();
	  
		  // Remove 'current' class from all tabs and contents
		  $('.tab_contact a').removeClass('current');
		  $('.tab_contents').removeClass('current');
	  
		  // Add 'current' class to the clicked tab
		  $(this).addClass('current');
	  
		  // Get target content by ID from href
		  const targetId = $(this).attr('href').substring(1);
		  $('#' + targetId).addClass('current');
		});
	  });
}