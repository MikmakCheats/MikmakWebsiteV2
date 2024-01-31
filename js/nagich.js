window.interdeal = {
	sitekey   : "61e80793ce4056963d1813a6f0c20ba4",
	Position  : "Left",
	Menulang  : "HE",
	domains	 : {
	  js  : "https://js.nagich.co.il/",
	  acc : "https://access.nagich.co.il/"
	},	
	isPartial : true,
	   btnStyle  : {
			color : {
			    main   : "#F3F3F3",
			    second : "#226ADE"
			},
			vPosition : ["0px","90%"], //Y-axis position of the widget, left side is reffering to the desktop version, the right side is for mobile.
			scale	  : ["0.5","0.5"], //Size of the widget, the left side is referring to the desktop version, the right side is for mobile.
			icon	  : { 
				type	: 10, //You can choose between 1- 14 icons, or set value as string like "Accessibility".
				shape	: "circle", //You can choose the following shapes: "circle", "rectangle", "rounded", "semicircle".
				outline	:  false //true / false.
			}
		}
};
(function(doc, head, body){
	var coreCall             = doc.createElement('script');
	coreCall.src             = 'https://js.nagich.co.il/core/4.4.0/accessibility.js';
	coreCall.defer           = true;
	coreCall.integrity       = 'sha512-3lGJBcuai1J0rGJHJj4e4lYOzm7K08oEHsg1Llt7x24OOsa/Ca0wwbSi9HhWUn92FKN3fylaq9xmIKVZnUsT3Q==';
	coreCall.crossOrigin     = 'anonymous';
	coreCall.setAttribute('data-cfasync', true );
	body? body.appendChild(coreCall) : head.appendChild(coreCall);
})(document, document.head, document.body);
