const tabs = () => {
    const buttons = document.querySelectorAll(".question__header__text")



    function showTabs() {

        buttons.forEach(btn => {
            btn.addEventListener('click', function () {
                this.classList.toggle('active-style');
                this.nextElementSibling.classList.toggle('active-content');

                if (this.classList.contains('active-style')) {
                    this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
                } else {
                    this.nextElementSibling.style.maxHeight = '0px';
                }
            });
        });

    }

    showTabs();



};

export default tabs;