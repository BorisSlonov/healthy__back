const tabs = () => {
    const buttons = document.querySelectorAll(".question__header__text")



    function showTabs() {

        buttons.forEach(btn => {
            btn.addEventListener('click', function () {
                this.classList.toggle('active-style');
                this.nextElementSibling.classList.toggle('active-content');

                if (this.classList.contains('active-style')) {
                    this.nextElementSibling.classList.add('animate__animated');
                    this.nextElementSibling.classList.remove('animate__fadeOut');
                    this.nextElementSibling.classList.add('animate__fadeIn');
                    this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";

                } else {
                    this.nextElementSibling.style.maxHeight = '0px';
                    this.nextElementSibling.classList.remove('animate__fadeIn');
                    this.nextElementSibling.classList.add('animate__fadeOut');
                }
            });
        });

    }

    showTabs();



};

export default tabs;