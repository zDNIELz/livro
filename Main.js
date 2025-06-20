// NAV FUNCTIONS
function pageView(id, btn) {
    document.querySelectorAll('section').forEach(sec => {
        sec.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');

    document.querySelectorAll('footer button').forEach(button => {
        button.classList.remove('activeBtn');
    });

    if (btn) btn.classList.add('activeBtn');
}