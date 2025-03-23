window.onload = function() {

      var text = new Blotter.Text("OFF LIMITS", {
         family : "'Montserrat', serif",
         fill : "#000",
         size : 150,
         weight : 800,
         spacing : 10,
         paddingLeft : 100,
         paddingRight : 100,
         leading : 1,

        });

      var material = new Blotter.ChannelSplitMaterial();

      material.uniforms.uApplyBlur.value = 1.0;
      material.uniforms.uAnimateNoise.value = 1.0;
      material.uniforms.uOffset.value = 0.5;
      material.uniforms.uRotation.value = 180;

      var blotter = new Blotter(material, {
        texts : text
      });

      var elem = document.getElementById("distortion-text");
      var scope = blotter.forText(text);

      scope.appendTo(elem);
};
