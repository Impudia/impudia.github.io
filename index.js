(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,700,596,158],[0,0,454,348],[456,0,454,348],[0,350,454,348],[456,350,454,348]]}
];


// symbols:



(lib.CachedBmp_45 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.viewAnswer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_45();
	this.instance.setTransform(-220.45,-48.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220.4,-48.4,298,79);


(lib.Preguntas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_41();
	this.instance.setTransform(-0.5,-87.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_42();
	this.instance_1.setTransform(-0.5,-87.05,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_43();
	this.instance_2.setTransform(-0.5,-87.05,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_44();
	this.instance_3.setTransform(-0.5,-87.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-87,227,174);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.viewAnswer.addEventListener("click", ViewAnswer.bind(this));
		
		
		this.questions.gotoAndStop(0);
		this.answers.gotoAndStop(4);
		
		
		
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		////////////////GET URL VARIABLES//////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		var mytext = getUrlParam('text','Empty');
		console.log(getUrlParam('test','Empty'));
		
		
		
		function getUrlParam(parameter, defaultvalue){
		    var urlparameter = defaultvalue;
		    if(window.location.href.indexOf(parameter) > -1){
		        urlparameter = getUrlVars()[parameter];
		        }
		    return urlparameter;
		}
		
		function getUrlVars() {
		    var vars = {};
		    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		        vars[key] = value;
		    });
		    return vars;
		}
		///////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////
		
		
		
		
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		////////////////GET GOOGLESHEET////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		//https://stackoverflow.com/questions/16485255/how-do-you-import-data-from-a-google-sheets
		
		loadData();
		
		function loadData() {
		  //var url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFDodtd7OPg8iAwyk0eeWVsEOoRqpHGnHH8blBc3VgrySMF574sCQCjCo8HisAV5_KDHUhUWLFK3ss/pubhtml?gid=843569305&single=true&range=A1:B10&output=csv";
		  var url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSFDodtd7OPg8iAwyk0eeWVsEOoRqpHGnHH8blBc3VgrySMF574sCQCjCo8HisAV5_KDHUhUWLFK3ss/pub?gid=843569305&single=true&range=A1:E1000&output=csv";
		  /////////https://docs.google.com/spreadsheets/d/e/2PACX-1vSFDodtd7OPg8iAwyk0eeWVsEOoRqpHGnHH8blBc3VgrySMF574sCQCjCo8HisAV5_KDHUhUWLFK3ss/pubhtml
			
		
		  xmlhttp=new XMLHttpRequest();
		  xmlhttp.onreadystatechange = function() {
		    if(xmlhttp.readyState == 4 && xmlhttp.status==200){
		     
				//document.getElementById("display").innerHTML = xmlhttp.responseText;
				console.log(xmlhttp.responseText);
				var csv= xmlhttp.responseText;
				//https://stackoverflow.com/questions/33155999/converting-a-csv-file-into-a-2d-array
				var data = csv.split("\n").map(function(row){return row.split(",");})
				console.log("Result :"+data[18][0]);
		    }
		  };
		  xmlhttp.open("GET",url,true);
		  xmlhttp.send(null);
		}
		
		
		
		
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		
		
		
		function ViewAnswer(){
			console.log("Hello World!");
			postAnswer(1,32,23,5);
			this.answers.gotoAndStop(this.questions.currentFrame);
		}
		
		
		
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		////////////////POST TO GOOGLE FORM////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		
		function postAnswer(uid, qid, result, effort) {
			
			
			
			var finalUrl = "https://docs.google.com/forms/d/1NYNAvpe7-BjTP12gRwLEZ_lvm1xqrp8J-_CbbqczuC8/formResponse"; 
		  
		  
		             
		    finalUrl+="?entry.1577449213="+uid;
		    finalUrl+="&entry.137246807="+qid;
		    finalUrl+="&entry.712061633="+result;
		    finalUrl+="&entry.1646931880="+effort;
			
			console.log(finalUrl)
			
			
		
			//'https://docs.google.com/forms/d/1NYNAvpe7-BjTP12gRwLEZ_lvm1xqrp8J-_CbbqczuC8/formResponse?entry.1577449213=1&entry.137246807=2&entry.712061633=3&entry.1646931880=4'
			
			$.ajax({
		   url: finalUrl,
		   success: function(response) {
			console.log("Success")
		   }
			});
		
		
		
		
		}
		
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.viewAnswer = new lib.viewAnswer();
	this.viewAnswer.setTransform(383.5,342.25);
	new cjs.ButtonHelper(this.viewAnswer, 0, 1, 1);

	this.answers = new lib.Preguntas();
	this.answers.setTransform(471.7,154.5,1,1,0,0,0,112.9,0);

	this.questions = new lib.Preguntas();
	this.questions.setTransform(152,154.5,1,1,0,0,0,112.9,0);

	this.answer = new cjs.Text("Pregunta", "bold 26px 'Berlin Sans FB Demi'", "#3399CC");
	this.answer.name = "answer";
	this.answer.textAlign = "center";
	this.answer.lineHeight = 31;
	this.answer.lineWidth = 253;
	this.answer.parent = this;
	this.answer.setTransform(487.3,15.2);

	this.question = new cjs.Text("Pregunta", "bold 26px 'Berlin Sans FB Demi'", "#3399CC");
	this.question.name = "question";
	this.question.textAlign = "center";
	this.question.lineHeight = 31;
	this.question.lineWidth = 253;
	this.question.parent = this;
	this.question.setTransform(150.25,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.question},{t:this.answer},{t:this.questions},{t:this.answers},{t:this.viewAnswer}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(341.8,253.2,273.99999999999994,119.60000000000002);
// library properties:
lib.properties = {
	id: '6B3B855A65D0B64D8E58E0EDCE93F65D',
	width: 640,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1591656471577", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6B3B855A65D0B64D8E58E0EDCE93F65D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;