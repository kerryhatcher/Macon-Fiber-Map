           var map;

            var links = {

            "About":
                {"data": "Coming Soon"},

            "Contact":
                {"data": "Kerry Hatcher </br> Kerry.hatcher@macon.ga.us"},

            }

            var layers = {
  
             "LocalLoop":
             {"url": "https://maps.google.com/maps/ms?authuser=0&vps=2&ie=UTF8&msa=0&output=kml&msid=216496306373642223874.0004ac6f58b60f202649a", 
            "name": "Current in use fiber"},             
              
             "FireStation109B":
             {"url": "https://maps.google.com/maps/ms?authuser=0&vps=3&ie=UTF8&msa=0&output=kml&msid=216496306373642223874.0004ce01df563def044a3", 
            "name": "Proposed Northwest Fiber Project Route B"},     

             "FireStation109A":
             {"url": "https://maps.google.com/maps/ms?authuser=0&vps=4&ie=UTF8&msa=0&output=kml&msid=216496306373642223874.0004ce01bafd2d8a425e9", 
            "name": "Proposed Northwest Fiber Project Route A"},      
              
             "Southwest":
             {"url": "https://maps.google.com/maps/ms?authuser=0&vps=3&ie=UTF8&msa=0&output=kml&msid=216496306373642223874.0004c729e0742344b359e", 
            "name": "Proposed Southwest Fiber Project"},             
              
             "Northeast":
             {"url": "https://maps.google.com/maps/ms?authuser=0&vps=4&ie=UTF8&msa=0&output=kml&msid=216496306373642223874.0004c729a104bc08d5a50", 
            "name": "Proposed Northeast Fiber Project"}, 

             "CityTowers":
             {"url": "https://maps.google.com/maps/ms?authuser=0&vps=2&ie=UTF8&msa=0&output=kml&msid=216496306373642223874.0004ac701d121cc2c02f7", 
            "name": "City Towers"},    

             "CityBuildings":
             {"url": "https://maps.google.com/maps/ms?authuser=0&vps=5&ie=UTF8&msa=0&output=kml&msid=216496306373642223874.0004ac700457d1dea1f53", 
            "name": "City Buildings"},    

             "PoliceStations":
             {"url": "https://maps.google.com/maps/ms?authuser=0&vps=6&ie=UTF8&msa=0&output=kml&msid=216496306373642223874.0004ac700998f6aebfcc3", 
            "name": "Police Stations"},    

             "FireStations":
             {"url": "https://maps.google.com/maps/ms?authuser=0&vps=5&ie=UTF8&msa=0&output=kml&msid=216496306373642223874.0004ac7008a319bb2bbec", 
            "name": "Fire Stations"},    

             "Bibbcounty":
             {"url": "https://maps.google.com/maps/ms?authuser=0&vps=3&ie=UTF8&msa=0&output=kml&msid=216496306373642223874.0004c0293046e6a4d6b0e", 
            "name": "Bibb County Outline"},   
              
           
               
            };
            
          function initialize() {
            var macon = new google.maps.LatLng(32.834722, -83.651667);
            var mapOptions = {
              center: macon,
              zoom: 11,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

              	for(var layer in layers) {
                addOptionItem(layer, layers[layer].img, layers[layer].name);
                document.getElementById(layer).checked = true;
                toggleGeoXML(layer, true);

                }

          	for(var link in links) {
                addLinkItem(link);
                }


          }

            function addOptionItem(id) {
              var layerOptions = document.createElement("div");

              var inputTD = document.createElement("div");
              inputTD.id = id + "div";
              inputTD.className = "OptionInputDiv";
              var input = document.createElement("input");
              input.type = "checkbox";
              input.id = id;
              input.className = "optioninput";
              input.onclick = function () { toggleGeoXML(this.id, this.checked) };
              inputTD.appendChild(input);

              var nameTD = document.createElement("div");
              nameTD.className = "optionnamediv";
              var nameA = document.createElement("a");
              nameA.href = layers[id].url;
              nameA.className = "optionnameLink";
              var name = document.createTextNode(layers[id].name);
              nameA.appendChild(name);
              nameTD.appendChild(nameA);
             

              layerOptions.appendChild(inputTD);
              layerOptions.appendChild(nameTD);
              document.getElementById("OptionMenu").appendChild(layerOptions);
            }

            function zoomToGeoXML(geoXml) {
              var center = geoXml.getDefaultCenter();
              var span = geoXml.getDefaultSpan();
              var sw = new GLatLng(center.lat() - span.lat() / 2,
                                   center.lng() - span.lng() / 2);
              var ne = new GLatLng(center.lat() + span.lat() / 2,
                                   center.lng() + span.lng() / 2);
              var bounds = new GLatLngBounds(sw, ne);
              map.setCenter(center);
              map.setZoom(map.getBoundsZoomLevel(bounds));
            }

            function toggleGeoXML(id, checked) {
              if (checked) {
                            if (!layers[id].geoxml) {
		
                              var geoXml = new google.maps.KmlLayer(layers[id].url, {preserveViewport: true})
                              layers[id].geoXml = geoXml;
	                          geoXml.setMap(map);
                            //map.addOverlay(layers[id].geoXml);
                            }
                
              
              } else  {	
                layers[id].geoXml.setMap(null);
                

              }
            }


          


            

              $(document).ready(function() {
              	
              	
              			$.getJSON("/js/main.json", function(json) {
					   			 alert("JSON Data: " + kml["LocalLoop"].name);
					    });

  
                
                        $('#hero-unit').collapse('hide')
                        
                        $('#hero-unit').addClass('Hidden');

                        HideAllHeros ();
                        
                    
                        $("#hero-unit").click(function () {

                            $('#hero-unit').addClass('Hidden')

                        });

                        $(".home-link").click(function () {
                            HideAllHeros ();


                            $('#hero-unit').addClass('Hidden')

                            

                        });

                        

                        $(".about-link").click(function () {
                            HideAllHeros ();

                            $('#hero-unit').removeClass('Hidden')


                            $('.about').removeClass('Hidden')

                            $('#hero-unit').collapse('show')

                        });

                        $(".northwest-link").click(function () {
                            HideAllHeros ();

                            $('#hero-unit').removeClass('Hidden')

                            $('.northwest').removeClass('Hidden')
                            
                            $('#hero-unit').collapse('show')

                        });

                        $(".northeast-link").click(function () {
                            HideAllHeros();

                            $('#hero-unit').removeClass('Hidden')

                            $('.northeast').removeClass('Hidden')

                            $('#hero-unit').collapse('show')

                        });

                        $(".southwest-link").click(function () {
                            HideAllHeros ();

                            $('#hero-unit').removeClass('Hidden')

                            $('.southwest').removeClass('Hidden')

                            $('#hero-unit').collapse('show')

                        });
                   

                    

                    
                
             

              });


        function HideAllHeros ()
{

                        $('.about').addClass('Hidden')
                        $('.northwest').addClass('Hidden')
                        $('.northeast').addClass('Hidden')
                        $('.southwest').addClass('Hidden')

}

