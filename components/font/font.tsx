const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
    var fontA = new FontFaceObserver('CoHealdineBold');
    var fontB = new FontFaceObserver('CoHealdineRegular');
    Promise.all([fontA.load(), fontB.load()]).then(function () {
        console.log('Family A & B have loaded');
      });
}

export default Fonts