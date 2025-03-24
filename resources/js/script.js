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

      material.uniforms.uOffset.value = 0.5;
    material.uniforms.uRotation.value = 50;
    material.uniforms.uApplyBlur.value = 1;
    material.uniforms.uAnimateNoise.value = 0.3;

      var blotter = new Blotter(material, {
        texts : text
      });

      var elem = document.getElementById("distortion-text");
      var scope = blotter.forText(text);

      scope.appendTo(elem);
      document.onmousemove = moveIt;
    function moveIt(event) {
      material.uniforms.uRotation.value = (event.clientX * .25);
      material.uniforms.uOffset.value = (event.clientY * 0.00025);
    }

};

