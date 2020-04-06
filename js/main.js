
(() => {
    const vm = new Vue({
        el: '#app',
        data: {
            message: "how are ya"
        },

        created: function() {
            console.log("parent is live");
        },

        methods: {
            openMovie() {
                document.querySelector(".movie-lightbox").classList.add('show-lightbox');
            }, 

            openTv() {
                document.querySelector(".tv-lightbox").classList.add('show-lightbox');
            }, 

            openMusic() {
                document.querySelector(".music-lightbox").classList.add('show-lightbox');
            }, 

            closeLightbox() {
                document.querySelector(".lightbox").classList.remove('show-lightbox');
            },

            closeMovie() {
                document.querySelector(".movie-lightbox").classList.remove('show-lightbox');
            },

            closeTv() {
                document.querySelector(".tv-lightbox").classList.remove('show-lightbox');
            },

            closeMusic() {
                document.querySelector(".music-lightbox").classList.remove('show-lightbox');
            },
        }
    });
})();