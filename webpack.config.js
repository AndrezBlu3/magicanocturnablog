const path = require('path');

module.exports = {
  entry: ['./src/assets/vendor/jquery/jquery.min.js','./src/assets/vendor/gsap/gsap.min.js','./src/assets/vendor/gsap/ScrollToPlugin.min.js','./src/assets/vendor/gsap/ScrollTrigger.min.js','./src/assets/vendor/smooth-scrollbar.js','./src/assets/vendor/swiper/js/swiper-bundle.min.js','./src/assets/vendor/isotope/imagesloaded.pkgd.min.js','./src/assets/vendor/isotope/isotope.pkgd.min.js','./src/assets/vendor/isotope/packery-mode.pkgd.min.js','./src/assets/vendor/lightgallery/js/lightgallery-all.min.js','./src/assets/vendor/jquery.mousewheel.min.js', './src/assets/scripts/index.js', './src/assets/js/theme.js',''],
  output: {
    path: path.resolve(__dirname, 'src/assets/scripts'),
    filename: 'bundle.min.js'
  },
}
