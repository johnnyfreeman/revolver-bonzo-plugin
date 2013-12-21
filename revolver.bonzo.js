(function (bonzo) {
  bonzo.aug({
    revolver: function (options) {
      return this.each(function () {
        if (!this.data('revolver')) {
          _.merge(options, {container: this});
          this.data(this, 'revolver', new Revolver(options));
        }
      });
    }
  });
}(bonzo));
