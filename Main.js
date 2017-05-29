define(['http://worldwindserver.net/webworldwind/worldwindlib.js',
    'http://worldwindserver.net/webworldwind/examples/LayerManager.js','Crosshair'],
    function (ww,LayerManager,crosshair) {
        "use strict";

       
        var wwd = new WorldWind.WorldWindow("canvasOne");

        var layers = [
           // {layer: new WorldWind.BMNGLayer(), enabled: true},
           // {layer: new WorldWind.BMNGLandsatLayer(), enabled: false},
           // {layer: new WorldWind.BingAerialLayer(null), enabled: false},
            {layer: new WorldWind.BingAerialWithLabelsLayer(null), enabled: true},
            {layer: new WorldWind.BingRoadsLayer(null), enabled: false},
            {layer: new WorldWind.CompassLayer(), enabled: true},
            {layer: new WorldWind.CoordinatesDisplayLayer(wwd), enabled: true},
            {layer: new WorldWind.ViewControlsLayer(wwd), enabled: true}
           // {layer: new WorldWind.BingImageryUrlBuilder(),enabled:true}

        ];

        for (var l = 0; l < layers.length; l++) {
            layers[l].layer.enabled = layers[l].enabled;
            wwd.addLayer(layers[l].layer);
        }

        // Create a layer manager for controlling layer visibility.
        var layerManger = new LayerManager(wwd);

    /*   // Adjust the Navigator to place Alaska in the center of the
        // World Window.
        //var wwd = new WorldWind.WorldWindow("canvasOne");
        wwd.navigator.lookAtLocation.latitude = 11.081700 ;
        wwd.navigator.lookAtLocation.longitude = 76.997908;
        wwd.navigator.range = 8e6; // 2 million meters above the ellipsoid

        // Redraw the World Window.
        wwd.redraw();
 
*/
      wwd.navigator.lookAtLocation = new WorldWind.Location(11.084853, 76.998029);
      // Zoom in from the default range of 10,000km
      wwd.navigator.range = 0.5e6; // meters
      // Add some tilt to view the elevation
      wwd.navigator.tilt = 0;






     
    });

/*
    var imageOffset = new Offset(WorldWind.OFFSET_FRACTION, 0.5, WorldWind.OFFSET_FRACTION, 0.5),
        imagePath = WorldWind.configuration.baseUrl + "images/32x32-crosshair-outline.png";
    this.crosshairImage = new ScreenImage(imageOffset, imagePath);
    // Register user input event listeners on the World Window.
    var thisLayer = this;
    function eventListener(event) {
        thisLayer.handleUIEvent(event);
        }
*/
 