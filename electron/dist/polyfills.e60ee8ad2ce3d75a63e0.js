/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		1:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + "e60ee8ad2ce3d75a63e0" + ".chunk.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(415);
	__webpack_require__(660);
	__webpack_require__(701);
	if (true) {
	}
	else {
	    // Development
	    Error['stackTraceLimit'] = Infinity;
	    require('zone.js/dist/long-stack-trace-zone');
	}


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(416);
	__webpack_require__(465);
	__webpack_require__(466);
	__webpack_require__(467);
	__webpack_require__(468);
	__webpack_require__(470);
	__webpack_require__(473);
	__webpack_require__(474);
	__webpack_require__(475);
	__webpack_require__(476);
	__webpack_require__(477);
	__webpack_require__(478);
	__webpack_require__(479);
	__webpack_require__(480);
	__webpack_require__(481);
	__webpack_require__(483);
	__webpack_require__(485);
	__webpack_require__(487);
	__webpack_require__(489);
	__webpack_require__(492);
	__webpack_require__(493);
	__webpack_require__(494);
	__webpack_require__(498);
	__webpack_require__(500);
	__webpack_require__(502);
	__webpack_require__(505);
	__webpack_require__(506);
	__webpack_require__(507);
	__webpack_require__(508);
	__webpack_require__(510);
	__webpack_require__(511);
	__webpack_require__(512);
	__webpack_require__(513);
	__webpack_require__(514);
	__webpack_require__(515);
	__webpack_require__(516);
	__webpack_require__(518);
	__webpack_require__(519);
	__webpack_require__(520);
	__webpack_require__(522);
	__webpack_require__(523);
	__webpack_require__(524);
	__webpack_require__(526);
	__webpack_require__(527);
	__webpack_require__(528);
	__webpack_require__(529);
	__webpack_require__(530);
	__webpack_require__(531);
	__webpack_require__(532);
	__webpack_require__(533);
	__webpack_require__(534);
	__webpack_require__(535);
	__webpack_require__(536);
	__webpack_require__(537);
	__webpack_require__(538);
	__webpack_require__(539);
	__webpack_require__(544);
	__webpack_require__(545);
	__webpack_require__(549);
	__webpack_require__(550);
	__webpack_require__(551);
	__webpack_require__(552);
	__webpack_require__(554);
	__webpack_require__(555);
	__webpack_require__(556);
	__webpack_require__(557);
	__webpack_require__(558);
	__webpack_require__(559);
	__webpack_require__(560);
	__webpack_require__(561);
	__webpack_require__(562);
	__webpack_require__(563);
	__webpack_require__(564);
	__webpack_require__(565);
	__webpack_require__(566);
	__webpack_require__(567);
	__webpack_require__(568);
	__webpack_require__(569);
	__webpack_require__(570);
	__webpack_require__(572);
	__webpack_require__(573);
	__webpack_require__(579);
	__webpack_require__(580);
	__webpack_require__(582);
	__webpack_require__(583);
	__webpack_require__(584);
	__webpack_require__(588);
	__webpack_require__(589);
	__webpack_require__(590);
	__webpack_require__(591);
	__webpack_require__(592);
	__webpack_require__(594);
	__webpack_require__(595);
	__webpack_require__(596);
	__webpack_require__(597);
	__webpack_require__(600);
	__webpack_require__(602);
	__webpack_require__(603);
	__webpack_require__(604);
	__webpack_require__(606);
	__webpack_require__(608);
	__webpack_require__(610);
	__webpack_require__(611);
	__webpack_require__(612);
	__webpack_require__(614);
	__webpack_require__(615);
	__webpack_require__(616);
	__webpack_require__(617);
	__webpack_require__(624);
	__webpack_require__(627);
	__webpack_require__(628);
	__webpack_require__(630);
	__webpack_require__(631);
	__webpack_require__(634);
	__webpack_require__(635);
	__webpack_require__(637);
	__webpack_require__(638);
	__webpack_require__(639);
	__webpack_require__(640);
	__webpack_require__(641);
	__webpack_require__(642);
	__webpack_require__(643);
	__webpack_require__(644);
	__webpack_require__(645);
	__webpack_require__(646);
	__webpack_require__(647);
	__webpack_require__(648);
	__webpack_require__(649);
	__webpack_require__(650);
	__webpack_require__(651);
	__webpack_require__(652);
	__webpack_require__(653);
	__webpack_require__(654);
	__webpack_require__(655);
	__webpack_require__(657);
	__webpack_require__(658);
	__webpack_require__(659);
	module.exports = __webpack_require__(422);

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(417)
	  , has            = __webpack_require__(418)
	  , DESCRIPTORS    = __webpack_require__(419)
	  , $export        = __webpack_require__(421)
	  , redefine       = __webpack_require__(431)
	  , META           = __webpack_require__(435).KEY
	  , $fails         = __webpack_require__(420)
	  , shared         = __webpack_require__(436)
	  , setToStringTag = __webpack_require__(437)
	  , uid            = __webpack_require__(432)
	  , wks            = __webpack_require__(438)
	  , wksExt         = __webpack_require__(439)
	  , wksDefine      = __webpack_require__(440)
	  , keyOf          = __webpack_require__(442)
	  , enumKeys       = __webpack_require__(455)
	  , isArray        = __webpack_require__(458)
	  , anObject       = __webpack_require__(425)
	  , toIObject      = __webpack_require__(445)
	  , toPrimitive    = __webpack_require__(429)
	  , createDesc     = __webpack_require__(430)
	  , _create        = __webpack_require__(459)
	  , gOPNExt        = __webpack_require__(462)
	  , $GOPD          = __webpack_require__(464)
	  , $DP            = __webpack_require__(424)
	  , $keys          = __webpack_require__(443)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(463).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(457).f  = $propertyIsEnumerable;
	  __webpack_require__(456).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(441)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(423)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 417 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 418 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(420)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 420 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(417)
	  , core      = __webpack_require__(422)
	  , hide      = __webpack_require__(423)
	  , redefine  = __webpack_require__(431)
	  , ctx       = __webpack_require__(433)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 422 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(424)
	  , createDesc = __webpack_require__(430);
	module.exports = __webpack_require__(419) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(425)
	  , IE8_DOM_DEFINE = __webpack_require__(427)
	  , toPrimitive    = __webpack_require__(429)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(419) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(426);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 426 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(419) && !__webpack_require__(420)(function(){
	  return Object.defineProperty(__webpack_require__(428)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(426)
	  , document = __webpack_require__(417).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(426);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 430 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(417)
	  , hide      = __webpack_require__(423)
	  , has       = __webpack_require__(418)
	  , SRC       = __webpack_require__(432)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(422).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 432 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(434);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 434 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(432)('meta')
	  , isObject = __webpack_require__(426)
	  , has      = __webpack_require__(418)
	  , setDesc  = __webpack_require__(424).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(420)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(417)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(424).f
	  , has = __webpack_require__(418)
	  , TAG = __webpack_require__(438)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(436)('wks')
	  , uid        = __webpack_require__(432)
	  , Symbol     = __webpack_require__(417).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(438);

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(417)
	  , core           = __webpack_require__(422)
	  , LIBRARY        = __webpack_require__(441)
	  , wksExt         = __webpack_require__(439)
	  , defineProperty = __webpack_require__(424).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 441 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(443)
	  , toIObject = __webpack_require__(445);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(444)
	  , enumBugKeys = __webpack_require__(454);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(418)
	  , toIObject    = __webpack_require__(445)
	  , arrayIndexOf = __webpack_require__(449)(false)
	  , IE_PROTO     = __webpack_require__(453)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(446)
	  , defined = __webpack_require__(448);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(447);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 447 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 448 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(445)
	  , toLength  = __webpack_require__(450)
	  , toIndex   = __webpack_require__(452);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(451)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 451 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(451)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(436)('keys')
	  , uid    = __webpack_require__(432);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 454 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(443)
	  , gOPS    = __webpack_require__(456)
	  , pIE     = __webpack_require__(457);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 456 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 457 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(447);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(425)
	  , dPs         = __webpack_require__(460)
	  , enumBugKeys = __webpack_require__(454)
	  , IE_PROTO    = __webpack_require__(453)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(428)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(461).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(424)
	  , anObject = __webpack_require__(425)
	  , getKeys  = __webpack_require__(443);

	module.exports = __webpack_require__(419) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(417).document && document.documentElement;

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(445)
	  , gOPN      = __webpack_require__(463).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(444)
	  , hiddenKeys = __webpack_require__(454).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(457)
	  , createDesc     = __webpack_require__(430)
	  , toIObject      = __webpack_require__(445)
	  , toPrimitive    = __webpack_require__(429)
	  , has            = __webpack_require__(418)
	  , IE8_DOM_DEFINE = __webpack_require__(427)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(419) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(421)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(459)});

/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(421);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(419), 'Object', {defineProperty: __webpack_require__(424).f});

/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(421);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(419), 'Object', {defineProperties: __webpack_require__(460)});

/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(445)
	  , $getOwnPropertyDescriptor = __webpack_require__(464).f;

	__webpack_require__(469)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(421)
	  , core    = __webpack_require__(422)
	  , fails   = __webpack_require__(420);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(471)
	  , $getPrototypeOf = __webpack_require__(472);

	__webpack_require__(469)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(448);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 472 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(418)
	  , toObject    = __webpack_require__(471)
	  , IE_PROTO    = __webpack_require__(453)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 473 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(471)
	  , $keys    = __webpack_require__(443);

	__webpack_require__(469)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(469)('getOwnPropertyNames', function(){
	  return __webpack_require__(462).f;
	});

/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(426)
	  , meta     = __webpack_require__(435).onFreeze;

	__webpack_require__(469)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(426)
	  , meta     = __webpack_require__(435).onFreeze;

	__webpack_require__(469)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 477 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(426)
	  , meta     = __webpack_require__(435).onFreeze;

	__webpack_require__(469)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(426);

	__webpack_require__(469)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 479 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(426);

	__webpack_require__(469)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(426);

	__webpack_require__(469)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(421);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(482)});

/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(443)
	  , gOPS     = __webpack_require__(456)
	  , pIE      = __webpack_require__(457)
	  , toObject = __webpack_require__(471)
	  , IObject  = __webpack_require__(446)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(420)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 483 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(421);
	$export($export.S, 'Object', {is: __webpack_require__(484)});

/***/ },
/* 484 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(421);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(486).set});

/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(426)
	  , anObject = __webpack_require__(425);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(433)(Function.call, __webpack_require__(464).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(488)
	  , test    = {};
	test[__webpack_require__(438)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(431)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(447)
	  , TAG = __webpack_require__(438)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(421);

	$export($export.P, 'Function', {bind: __webpack_require__(490)});

/***/ },
/* 490 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(434)
	  , isObject   = __webpack_require__(426)
	  , invoke     = __webpack_require__(491)
	  , arraySlice = [].slice
	  , factories  = {};

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 491 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(424).f
	  , createDesc = __webpack_require__(430)
	  , has        = __webpack_require__(418)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';

	var isExtensible = Object.isExtensible || function(){
	  return true;
	};

	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(419) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 493 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(426)
	  , getPrototypeOf = __webpack_require__(472)
	  , HAS_INSTANCE   = __webpack_require__(438)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(424).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(421)
	  , $parseInt = __webpack_require__(495);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(417).parseInt
	  , $trim     = __webpack_require__(496).trim
	  , ws        = __webpack_require__(497)
	  , hex       = /^[\-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 496 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(421)
	  , defined = __webpack_require__(448)
	  , fails   = __webpack_require__(420)
	  , spaces  = __webpack_require__(497)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ },
/* 497 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 498 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(421)
	  , $parseFloat = __webpack_require__(499);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 499 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(417).parseFloat
	  , $trim       = __webpack_require__(496).trim;

	module.exports = 1 / $parseFloat(__webpack_require__(497) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 500 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(417)
	  , has               = __webpack_require__(418)
	  , cof               = __webpack_require__(447)
	  , inheritIfRequired = __webpack_require__(501)
	  , toPrimitive       = __webpack_require__(429)
	  , fails             = __webpack_require__(420)
	  , gOPN              = __webpack_require__(463).f
	  , gOPD              = __webpack_require__(464).f
	  , dP                = __webpack_require__(424).f
	  , $trim             = __webpack_require__(496).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(459)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(419) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(431)(global, NUMBER, $Number);
	}

/***/ },
/* 501 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(426)
	  , setPrototypeOf = __webpack_require__(486).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 502 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(421)
	  , toInteger    = __webpack_require__(451)
	  , aNumberValue = __webpack_require__(503)
	  , repeat       = __webpack_require__(504)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';

	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};

	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(420)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 503 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(447);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 504 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(451)
	  , defined   = __webpack_require__(448);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 505 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(421)
	  , $fails       = __webpack_require__(420)
	  , aNumberValue = __webpack_require__(503)
	  , $toPrecision = 1..toPrecision;

	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 506 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(421);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 507 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(421)
	  , _isFinite = __webpack_require__(417).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 508 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(421);

	$export($export.S, 'Number', {isInteger: __webpack_require__(509)});

/***/ },
/* 509 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(426)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 510 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(421);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 511 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(421)
	  , isInteger = __webpack_require__(509)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 512 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(421);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 513 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(421);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 514 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(421)
	  , $parseFloat = __webpack_require__(499);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 515 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(421)
	  , $parseInt = __webpack_require__(495);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 516 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(421)
	  , log1p   = __webpack_require__(517)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;

	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 517 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 518 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(421)
	  , $asinh  = Math.asinh;

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 519 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(421)
	  , $atanh  = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 520 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(421)
	  , sign    = __webpack_require__(521);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 521 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 522 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(421);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 523 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(421)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 524 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(421)
	  , $expm1  = __webpack_require__(525);

	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 525 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 526 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(421)
	  , sign      = __webpack_require__(521)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);

	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};


	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 527 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(421)
	  , abs     = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 528 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(421)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(420)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 529 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(421);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 530 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(421);

	$export($export.S, 'Math', {log1p: __webpack_require__(517)});

/***/ },
/* 531 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(421);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 532 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(421);

	$export($export.S, 'Math', {sign: __webpack_require__(521)});

/***/ },
/* 533 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(421)
	  , expm1   = __webpack_require__(525)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(420)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 534 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(421)
	  , expm1   = __webpack_require__(525)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 535 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(421);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 536 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(421)
	  , toIndex        = __webpack_require__(452)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 537 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(421)
	  , toIObject = __webpack_require__(445)
	  , toLength  = __webpack_require__(450);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 538 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(496)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 539 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(540)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(541)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 540 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(451)
	  , defined   = __webpack_require__(448);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 541 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(441)
	  , $export        = __webpack_require__(421)
	  , redefine       = __webpack_require__(431)
	  , hide           = __webpack_require__(423)
	  , has            = __webpack_require__(418)
	  , Iterators      = __webpack_require__(542)
	  , $iterCreate    = __webpack_require__(543)
	  , setToStringTag = __webpack_require__(437)
	  , getPrototypeOf = __webpack_require__(472)
	  , ITERATOR       = __webpack_require__(438)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 542 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 543 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(459)
	  , descriptor     = __webpack_require__(430)
	  , setToStringTag = __webpack_require__(437)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(423)(IteratorPrototype, __webpack_require__(438)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 544 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(421)
	  , $at     = __webpack_require__(540)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 545 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(421)
	  , toLength  = __webpack_require__(450)
	  , context   = __webpack_require__(546)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(548)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 546 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(547)
	  , defined  = __webpack_require__(448);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 547 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(426)
	  , cof      = __webpack_require__(447)
	  , MATCH    = __webpack_require__(438)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 548 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(438)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 549 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(421)
	  , context  = __webpack_require__(546)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(548)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 550 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(421);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(504)
	});

/***/ },
/* 551 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(421)
	  , toLength    = __webpack_require__(450)
	  , context     = __webpack_require__(546)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(548)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 552 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(553)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 553 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(421)
	  , fails   = __webpack_require__(420)
	  , defined = __webpack_require__(448)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 554 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(553)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 555 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(553)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 556 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(553)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 557 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(553)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 558 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(553)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 559 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(553)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 560 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(553)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 561 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(553)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 562 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(553)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 563 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(553)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 564 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(553)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 565 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(553)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 566 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(421);

	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 567 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(421)
	  , toObject    = __webpack_require__(471)
	  , toPrimitive = __webpack_require__(429);

	$export($export.P + $export.F * __webpack_require__(420)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 568 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(421)
	  , fails   = __webpack_require__(420)
	  , getTime = Date.prototype.getTime;

	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 569 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(431)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 570 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(438)('toPrimitive')
	  , proto        = Date.prototype;

	if(!(TO_PRIMITIVE in proto))__webpack_require__(423)(proto, TO_PRIMITIVE, __webpack_require__(571));

/***/ },
/* 571 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(425)
	  , toPrimitive = __webpack_require__(429)
	  , NUMBER      = 'number';

	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 572 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(421);

	$export($export.S, 'Array', {isArray: __webpack_require__(458)});

/***/ },
/* 573 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(433)
	  , $export        = __webpack_require__(421)
	  , toObject       = __webpack_require__(471)
	  , call           = __webpack_require__(574)
	  , isArrayIter    = __webpack_require__(575)
	  , toLength       = __webpack_require__(450)
	  , createProperty = __webpack_require__(576)
	  , getIterFn      = __webpack_require__(577);

	$export($export.S + $export.F * !__webpack_require__(578)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 574 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(425);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 575 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(542)
	  , ITERATOR   = __webpack_require__(438)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 576 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(424)
	  , createDesc      = __webpack_require__(430);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 577 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(488)
	  , ITERATOR  = __webpack_require__(438)('iterator')
	  , Iterators = __webpack_require__(542);
	module.exports = __webpack_require__(422).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 578 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(438)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 579 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(421)
	  , createProperty = __webpack_require__(576);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(420)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 580 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(421)
	  , toIObject = __webpack_require__(445)
	  , arrayJoin = [].join;

	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(446) != Object || !__webpack_require__(581)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 581 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(420);

	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 582 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(421)
	  , html       = __webpack_require__(461)
	  , cof        = __webpack_require__(447)
	  , toIndex    = __webpack_require__(452)
	  , toLength   = __webpack_require__(450)
	  , arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(420)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 583 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(421)
	  , aFunction = __webpack_require__(434)
	  , toObject  = __webpack_require__(471)
	  , fails     = __webpack_require__(420)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];

	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(581)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 584 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(421)
	  , $forEach = __webpack_require__(585)(0)
	  , STRICT   = __webpack_require__(581)([].forEach, true);

	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 585 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(433)
	  , IObject  = __webpack_require__(446)
	  , toObject = __webpack_require__(471)
	  , toLength = __webpack_require__(450)
	  , asc      = __webpack_require__(586);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 586 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(587);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 587 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(426)
	  , isArray  = __webpack_require__(458)
	  , SPECIES  = __webpack_require__(438)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 588 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(421)
	  , $map    = __webpack_require__(585)(1);

	$export($export.P + $export.F * !__webpack_require__(581)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 589 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(421)
	  , $filter = __webpack_require__(585)(2);

	$export($export.P + $export.F * !__webpack_require__(581)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 590 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(421)
	  , $some   = __webpack_require__(585)(3);

	$export($export.P + $export.F * !__webpack_require__(581)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 591 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(421)
	  , $every  = __webpack_require__(585)(4);

	$export($export.P + $export.F * !__webpack_require__(581)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 592 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(421)
	  , $reduce = __webpack_require__(593);

	$export($export.P + $export.F * !__webpack_require__(581)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 593 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(434)
	  , toObject  = __webpack_require__(471)
	  , IObject   = __webpack_require__(446)
	  , toLength  = __webpack_require__(450);

	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 594 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(421)
	  , $reduce = __webpack_require__(593);

	$export($export.P + $export.F * !__webpack_require__(581)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 595 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(421)
	  , $indexOf      = __webpack_require__(449)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(581)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 596 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(421)
	  , toIObject     = __webpack_require__(445)
	  , toInteger     = __webpack_require__(451)
	  , toLength      = __webpack_require__(450)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(581)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 597 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(421);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(598)});

	__webpack_require__(599)('copyWithin');

/***/ },
/* 598 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(471)
	  , toIndex  = __webpack_require__(452)
	  , toLength = __webpack_require__(450);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 599 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(438)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(423)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 600 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(421);

	$export($export.P, 'Array', {fill: __webpack_require__(601)});

	__webpack_require__(599)('fill');

/***/ },
/* 601 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(471)
	  , toIndex  = __webpack_require__(452)
	  , toLength = __webpack_require__(450);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 602 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(421)
	  , $find   = __webpack_require__(585)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(599)(KEY);

/***/ },
/* 603 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(421)
	  , $find   = __webpack_require__(585)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(599)(KEY);

/***/ },
/* 604 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(605)('Array');

/***/ },
/* 605 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(417)
	  , dP          = __webpack_require__(424)
	  , DESCRIPTORS = __webpack_require__(419)
	  , SPECIES     = __webpack_require__(438)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 606 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(599)
	  , step             = __webpack_require__(607)
	  , Iterators        = __webpack_require__(542)
	  , toIObject        = __webpack_require__(445);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(541)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 607 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 608 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(417)
	  , inheritIfRequired = __webpack_require__(501)
	  , dP                = __webpack_require__(424).f
	  , gOPN              = __webpack_require__(463).f
	  , isRegExp          = __webpack_require__(547)
	  , $flags            = __webpack_require__(609)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;

	if(__webpack_require__(419) && (!CORRECT_NEW || __webpack_require__(420)(function(){
	  re2[__webpack_require__(438)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(431)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(605)('RegExp');

/***/ },
/* 609 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(425);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 610 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(611);
	var anObject    = __webpack_require__(425)
	  , $flags      = __webpack_require__(609)
	  , DESCRIPTORS = __webpack_require__(419)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];

	var define = function(fn){
	  __webpack_require__(431)(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(420)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 611 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(419) && /./g.flags != 'g')__webpack_require__(424).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(609)
	});

/***/ },
/* 612 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(613)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 613 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(423)
	  , redefine = __webpack_require__(431)
	  , fails    = __webpack_require__(420)
	  , defined  = __webpack_require__(448)
	  , wks      = __webpack_require__(438);

	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 614 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(613)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 615 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(613)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 616 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(613)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(547)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 617 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(441)
	  , global             = __webpack_require__(417)
	  , ctx                = __webpack_require__(433)
	  , classof            = __webpack_require__(488)
	  , $export            = __webpack_require__(421)
	  , isObject           = __webpack_require__(426)
	  , aFunction          = __webpack_require__(434)
	  , anInstance         = __webpack_require__(618)
	  , forOf              = __webpack_require__(619)
	  , speciesConstructor = __webpack_require__(620)
	  , task               = __webpack_require__(621).set
	  , microtask          = __webpack_require__(622)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(438)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(623)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(437)($Promise, PROMISE);
	__webpack_require__(605)(PROMISE);
	Wrapper = __webpack_require__(422)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(578)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 618 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 619 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(433)
	  , call        = __webpack_require__(574)
	  , isArrayIter = __webpack_require__(575)
	  , anObject    = __webpack_require__(425)
	  , toLength    = __webpack_require__(450)
	  , getIterFn   = __webpack_require__(577)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 620 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(425)
	  , aFunction = __webpack_require__(434)
	  , SPECIES   = __webpack_require__(438)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 621 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(433)
	  , invoke             = __webpack_require__(491)
	  , html               = __webpack_require__(461)
	  , cel                = __webpack_require__(428)
	  , global             = __webpack_require__(417)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(447)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 622 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(417)
	  , macrotask = __webpack_require__(621).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(447)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 623 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(431);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 624 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(625);

	// 23.1 Map Objects
	module.exports = __webpack_require__(626)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 625 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(424).f
	  , create      = __webpack_require__(459)
	  , redefineAll = __webpack_require__(623)
	  , ctx         = __webpack_require__(433)
	  , anInstance  = __webpack_require__(618)
	  , defined     = __webpack_require__(448)
	  , forOf       = __webpack_require__(619)
	  , $iterDefine = __webpack_require__(541)
	  , step        = __webpack_require__(607)
	  , setSpecies  = __webpack_require__(605)
	  , DESCRIPTORS = __webpack_require__(419)
	  , fastKey     = __webpack_require__(435).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 626 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(417)
	  , $export           = __webpack_require__(421)
	  , redefine          = __webpack_require__(431)
	  , redefineAll       = __webpack_require__(623)
	  , meta              = __webpack_require__(435)
	  , forOf             = __webpack_require__(619)
	  , anInstance        = __webpack_require__(618)
	  , isObject          = __webpack_require__(426)
	  , fails             = __webpack_require__(420)
	  , $iterDetect       = __webpack_require__(578)
	  , setToStringTag    = __webpack_require__(437)
	  , inheritIfRequired = __webpack_require__(501);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 627 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(625);

	// 23.2 Set Objects
	module.exports = __webpack_require__(626)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 628 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(585)(0)
	  , redefine     = __webpack_require__(431)
	  , meta         = __webpack_require__(435)
	  , assign       = __webpack_require__(482)
	  , weak         = __webpack_require__(629)
	  , isObject     = __webpack_require__(426)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;

	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(626)('WeakMap', wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 629 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(623)
	  , getWeak           = __webpack_require__(435).getWeak
	  , anObject          = __webpack_require__(425)
	  , isObject          = __webpack_require__(426)
	  , anInstance        = __webpack_require__(618)
	  , forOf             = __webpack_require__(619)
	  , createArrayMethod = __webpack_require__(585)
	  , $has              = __webpack_require__(418)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 630 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(629);

	// 23.4 WeakSet Objects
	__webpack_require__(626)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 631 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(421)
	  , $typed       = __webpack_require__(632)
	  , buffer       = __webpack_require__(633)
	  , anObject     = __webpack_require__(425)
	  , toIndex      = __webpack_require__(452)
	  , toLength     = __webpack_require__(450)
	  , isObject     = __webpack_require__(426)
	  , ArrayBuffer  = __webpack_require__(417).ArrayBuffer
	  , speciesConstructor = __webpack_require__(620)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';

	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});

	$export($export.P + $export.U + $export.F * __webpack_require__(420)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});

	__webpack_require__(605)(ARRAY_BUFFER);

/***/ },
/* 632 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(417)
	  , hide   = __webpack_require__(423)
	  , uid    = __webpack_require__(432)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;

	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');

	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}

	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 633 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(417)
	  , DESCRIPTORS    = __webpack_require__(419)
	  , LIBRARY        = __webpack_require__(441)
	  , $typed         = __webpack_require__(632)
	  , hide           = __webpack_require__(423)
	  , redefineAll    = __webpack_require__(623)
	  , fails          = __webpack_require__(420)
	  , anInstance     = __webpack_require__(618)
	  , toInteger      = __webpack_require__(451)
	  , toLength       = __webpack_require__(450)
	  , gOPN           = __webpack_require__(463).f
	  , dP             = __webpack_require__(424).f
	  , arrayFill      = __webpack_require__(601)
	  , setToStringTag = __webpack_require__(437)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};

	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};

	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};

	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};

	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};

	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 634 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(421);
	$export($export.G + $export.W + $export.F * !__webpack_require__(632).ABV, {
	  DataView: __webpack_require__(633).DataView
	});

/***/ },
/* 635 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(636)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 636 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(419)){
	  var LIBRARY             = __webpack_require__(441)
	    , global              = __webpack_require__(417)
	    , fails               = __webpack_require__(420)
	    , $export             = __webpack_require__(421)
	    , $typed              = __webpack_require__(632)
	    , $buffer             = __webpack_require__(633)
	    , ctx                 = __webpack_require__(433)
	    , anInstance          = __webpack_require__(618)
	    , propertyDesc        = __webpack_require__(430)
	    , hide                = __webpack_require__(423)
	    , redefineAll         = __webpack_require__(623)
	    , toInteger           = __webpack_require__(451)
	    , toLength            = __webpack_require__(450)
	    , toIndex             = __webpack_require__(452)
	    , toPrimitive         = __webpack_require__(429)
	    , has                 = __webpack_require__(418)
	    , same                = __webpack_require__(484)
	    , classof             = __webpack_require__(488)
	    , isObject            = __webpack_require__(426)
	    , toObject            = __webpack_require__(471)
	    , isArrayIter         = __webpack_require__(575)
	    , create              = __webpack_require__(459)
	    , getPrototypeOf      = __webpack_require__(472)
	    , gOPN                = __webpack_require__(463).f
	    , getIterFn           = __webpack_require__(577)
	    , uid                 = __webpack_require__(432)
	    , wks                 = __webpack_require__(438)
	    , createArrayMethod   = __webpack_require__(585)
	    , createArrayIncludes = __webpack_require__(449)
	    , speciesConstructor  = __webpack_require__(620)
	    , ArrayIterators      = __webpack_require__(606)
	    , Iterators           = __webpack_require__(542)
	    , $iterDetect         = __webpack_require__(578)
	    , setSpecies          = __webpack_require__(605)
	    , arrayFill           = __webpack_require__(601)
	    , arrayCopyWithin     = __webpack_require__(598)
	    , $DP                 = __webpack_require__(424)
	    , $GOPD               = __webpack_require__(464)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';

	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });

	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };

	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };

	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };

	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };

	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };

	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };

	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };

	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };

	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };

	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };

	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });

	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }

	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });

	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });

	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});

	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 637 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(636)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 638 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(636)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 639 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(636)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 640 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(636)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 641 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(636)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 642 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(636)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 643 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(636)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 644 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(636)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 645 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(421)
	  , aFunction = __webpack_require__(434)
	  , anObject  = __webpack_require__(425)
	  , rApply    = (__webpack_require__(417).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(420)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 646 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(421)
	  , create     = __webpack_require__(459)
	  , aFunction  = __webpack_require__(434)
	  , anObject   = __webpack_require__(425)
	  , isObject   = __webpack_require__(426)
	  , fails      = __webpack_require__(420)
	  , bind       = __webpack_require__(490)
	  , rConstruct = (__webpack_require__(417).Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});

	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 647 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(424)
	  , $export     = __webpack_require__(421)
	  , anObject    = __webpack_require__(425)
	  , toPrimitive = __webpack_require__(429);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(420)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 648 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(421)
	  , gOPD     = __webpack_require__(464).f
	  , anObject = __webpack_require__(425);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 649 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(421)
	  , anObject = __webpack_require__(425);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(543)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});

	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 650 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(464)
	  , getPrototypeOf = __webpack_require__(472)
	  , has            = __webpack_require__(418)
	  , $export        = __webpack_require__(421)
	  , isObject       = __webpack_require__(426)
	  , anObject       = __webpack_require__(425);

	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 651 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(464)
	  , $export  = __webpack_require__(421)
	  , anObject = __webpack_require__(425);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 652 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(421)
	  , getProto = __webpack_require__(472)
	  , anObject = __webpack_require__(425);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 653 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(421);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 654 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(421)
	  , anObject      = __webpack_require__(425)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 655 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(421);

	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(656)});

/***/ },
/* 656 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(463)
	  , gOPS     = __webpack_require__(456)
	  , anObject = __webpack_require__(425)
	  , Reflect  = __webpack_require__(417).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 657 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(421)
	  , anObject           = __webpack_require__(425)
	  , $preventExtensions = Object.preventExtensions;

	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 658 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(424)
	  , gOPD           = __webpack_require__(464)
	  , getPrototypeOf = __webpack_require__(472)
	  , has            = __webpack_require__(418)
	  , $export        = __webpack_require__(421)
	  , createDesc     = __webpack_require__(430)
	  , anObject       = __webpack_require__(425)
	  , isObject       = __webpack_require__(426);

	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 659 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(421)
	  , setProto = __webpack_require__(486);

	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 660 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*! *****************************************************************************
	Copyright (C) Microsoft. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	var Reflect;
	(function (Reflect) {
	    "use strict";
	    // Load global or shim versions of Map, Set, and WeakMap
	    var functionPrototype = Object.getPrototypeOf(Function);
	    var _Map = typeof Map === "function" ? Map : CreateMapPolyfill();
	    var _Set = typeof Set === "function" ? Set : CreateSetPolyfill();
	    var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
	    // [[Metadata]] internal slot
	    var __Metadata__ = new _WeakMap();
	    /**
	      * Applies a set of decorators to a property of a target object.
	      * @param decorators An array of decorators.
	      * @param target The target object.
	      * @param targetKey (Optional) The property key to decorate.
	      * @param targetDescriptor (Optional) The property descriptor for the target key
	      * @remarks Decorators are applied in reverse order.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     C = Reflect.decorate(decoratorsArray, C);
	      *
	      *     // property (on constructor)
	      *     Reflect.decorate(decoratorsArray, C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     Reflect.decorate(decoratorsArray, C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     Object.defineProperty(C, "staticMethod",
	      *         Reflect.decorate(decoratorsArray, C, "staticMethod",
	      *             Object.getOwnPropertyDescriptor(C, "staticMethod")));
	      *
	      *     // method (on prototype)
	      *     Object.defineProperty(C.prototype, "method",
	      *         Reflect.decorate(decoratorsArray, C.prototype, "method",
	      *             Object.getOwnPropertyDescriptor(C.prototype, "method")));
	      *
	      */
	    function decorate(decorators, target, targetKey, targetDescriptor) {
	        if (!IsUndefined(targetDescriptor)) {
	            if (!IsArray(decorators)) {
	                throw new TypeError();
	            }
	            else if (!IsObject(target)) {
	                throw new TypeError();
	            }
	            else if (IsUndefined(targetKey)) {
	                throw new TypeError();
	            }
	            else if (!IsObject(targetDescriptor)) {
	                throw new TypeError();
	            }
	            targetKey = ToPropertyKey(targetKey);
	            return DecoratePropertyWithDescriptor(decorators, target, targetKey, targetDescriptor);
	        }
	        else if (!IsUndefined(targetKey)) {
	            if (!IsArray(decorators)) {
	                throw new TypeError();
	            }
	            else if (!IsObject(target)) {
	                throw new TypeError();
	            }
	            targetKey = ToPropertyKey(targetKey);
	            return DecoratePropertyWithoutDescriptor(decorators, target, targetKey);
	        }
	        else {
	            if (!IsArray(decorators)) {
	                throw new TypeError();
	            }
	            else if (!IsConstructor(target)) {
	                throw new TypeError();
	            }
	            return DecorateConstructor(decorators, target);
	        }
	    }
	    Reflect.decorate = decorate;
	    /**
	      * A default metadata decorator factory that can be used on a class, class member, or parameter.
	      * @param metadataKey The key for the metadata entry.
	      * @param metadataValue The value for the metadata entry.
	      * @returns A decorator function.
	      * @remarks
	      * If `metadataKey` is already defined for the target and target key, the
	      * metadataValue for that key will be overwritten.
	      * @example
	      *
	      *     // constructor
	      *     @Reflect.metadata(key, value)
	      *     class C {
	      *     }
	      *
	      *     // property (on constructor, TypeScript only)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         static staticProperty;
	      *     }
	      *
	      *     // property (on prototype, TypeScript only)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         property;
	      *     }
	      *
	      *     // method (on constructor)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         static staticMethod() { }
	      *     }
	      *
	      *     // method (on prototype)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         method() { }
	      *     }
	      *
	      */
	    function metadata(metadataKey, metadataValue) {
	        function decorator(target, targetKey) {
	            if (!IsUndefined(targetKey)) {
	                if (!IsObject(target)) {
	                    throw new TypeError();
	                }
	                targetKey = ToPropertyKey(targetKey);
	                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	            }
	            else {
	                if (!IsConstructor(target)) {
	                    throw new TypeError();
	                }
	                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, /*targetKey*/ undefined);
	            }
	        }
	        return decorator;
	    }
	    Reflect.metadata = metadata;
	    /**
	      * Define a unique metadata entry on the target.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param metadataValue A value that contains attached metadata.
	      * @param target The target object on which to define metadata.
	      * @param targetKey (Optional) The property key for the target.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     Reflect.defineMetadata("custom:annotation", options, C);
	      *
	      *     // property (on constructor)
	      *     Reflect.defineMetadata("custom:annotation", options, C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     Reflect.defineMetadata("custom:annotation", options, C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "method");
	      *
	      *     // decorator factory as metadata-producing annotation.
	      *     function MyAnnotation(options): Decorator {
	      *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
	      *     }
	      *
	      */
	    function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	    }
	    Reflect.defineMetadata = defineMetadata;
	    /**
	      * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.hasMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.hasMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.hasMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function hasMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryHasMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.hasMetadata = hasMetadata;
	    /**
	      * Gets a value indicating whether the target object has the provided metadata key defined.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function hasOwnMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.hasOwnMetadata = hasOwnMetadata;
	    /**
	      * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function getMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryGetMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.getMetadata = getMetadata;
	    /**
	      * Gets the metadata value for the provided metadata key on the target object.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getOwnMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function getOwnMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.getOwnMetadata = getOwnMetadata;
	    /**
	      * Gets the metadata keys defined on the target object or its prototype chain.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns An array of unique metadata keys.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getMetadataKeys(C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getMetadataKeys(C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getMetadataKeys(C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getMetadataKeys(C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getMetadataKeys(C.prototype, "method");
	      *
	      */
	    function getMetadataKeys(target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryMetadataKeys(target, targetKey);
	    }
	    Reflect.getMetadataKeys = getMetadataKeys;
	    /**
	      * Gets the unique metadata keys defined on the target object.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns An array of unique metadata keys.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getOwnMetadataKeys(C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getOwnMetadataKeys(C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getOwnMetadataKeys(C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getOwnMetadataKeys(C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getOwnMetadataKeys(C.prototype, "method");
	      *
	      */
	    function getOwnMetadataKeys(target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryOwnMetadataKeys(target, targetKey);
	    }
	    Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
	    /**
	      * Deletes the metadata entry from the target object with the provided key.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata entry was found and deleted; otherwise, false.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.deleteMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.deleteMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.deleteMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function deleteMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#deletemetadata-metadatakey-p-
	        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
	        if (IsUndefined(metadataMap)) {
	            return false;
	        }
	        if (!metadataMap.delete(metadataKey)) {
	            return false;
	        }
	        if (metadataMap.size > 0) {
	            return true;
	        }
	        var targetMetadata = __Metadata__.get(target);
	        targetMetadata.delete(targetKey);
	        if (targetMetadata.size > 0) {
	            return true;
	        }
	        __Metadata__.delete(target);
	        return true;
	    }
	    Reflect.deleteMetadata = deleteMetadata;
	    function DecorateConstructor(decorators, target) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            var decorated = decorator(target);
	            if (!IsUndefined(decorated)) {
	                if (!IsConstructor(decorated)) {
	                    throw new TypeError();
	                }
	                target = decorated;
	            }
	        }
	        return target;
	    }
	    function DecoratePropertyWithDescriptor(decorators, target, propertyKey, descriptor) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            var decorated = decorator(target, propertyKey, descriptor);
	            if (!IsUndefined(decorated)) {
	                if (!IsObject(decorated)) {
	                    throw new TypeError();
	                }
	                descriptor = decorated;
	            }
	        }
	        return descriptor;
	    }
	    function DecoratePropertyWithoutDescriptor(decorators, target, propertyKey) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            decorator(target, propertyKey);
	        }
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#getorcreatemetadatamap--o-p-create-
	    function GetOrCreateMetadataMap(target, targetKey, create) {
	        var targetMetadata = __Metadata__.get(target);
	        if (!targetMetadata) {
	            if (!create) {
	                return undefined;
	            }
	            targetMetadata = new _Map();
	            __Metadata__.set(target, targetMetadata);
	        }
	        var keyMetadata = targetMetadata.get(targetKey);
	        if (!keyMetadata) {
	            if (!create) {
	                return undefined;
	            }
	            keyMetadata = new _Map();
	            targetMetadata.set(targetKey, keyMetadata);
	        }
	        return keyMetadata;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasmetadata--metadatakey-o-p-
	    function OrdinaryHasMetadata(MetadataKey, O, P) {
	        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	        if (hasOwn) {
	            return true;
	        }
	        var parent = GetPrototypeOf(O);
	        if (parent !== null) {
	            return OrdinaryHasMetadata(MetadataKey, parent, P);
	        }
	        return false;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasownmetadata--metadatakey-o-p-
	    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
	        if (metadataMap === undefined) {
	            return false;
	        }
	        return Boolean(metadataMap.has(MetadataKey));
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetmetadata--metadatakey-o-p-
	    function OrdinaryGetMetadata(MetadataKey, O, P) {
	        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	        if (hasOwn) {
	            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
	        }
	        var parent = GetPrototypeOf(O);
	        if (parent !== null) {
	            return OrdinaryGetMetadata(MetadataKey, parent, P);
	        }
	        return undefined;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetownmetadata--metadatakey-o-p-
	    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
	        if (metadataMap === undefined) {
	            return undefined;
	        }
	        return metadataMap.get(MetadataKey);
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarydefineownmetadata--metadatakey-metadatavalue-o-p-
	    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ true);
	        metadataMap.set(MetadataKey, MetadataValue);
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarymetadatakeys--o-p-
	    function OrdinaryMetadataKeys(O, P) {
	        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
	        var parent = GetPrototypeOf(O);
	        if (parent === null) {
	            return ownKeys;
	        }
	        var parentKeys = OrdinaryMetadataKeys(parent, P);
	        if (parentKeys.length <= 0) {
	            return ownKeys;
	        }
	        if (ownKeys.length <= 0) {
	            return parentKeys;
	        }
	        var set = new _Set();
	        var keys = [];
	        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
	            var key = ownKeys_1[_i];
	            var hasKey = set.has(key);
	            if (!hasKey) {
	                set.add(key);
	                keys.push(key);
	            }
	        }
	        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
	            var key = parentKeys_1[_a];
	            var hasKey = set.has(key);
	            if (!hasKey) {
	                set.add(key);
	                keys.push(key);
	            }
	        }
	        return keys;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryownmetadatakeys--o-p-
	    function OrdinaryOwnMetadataKeys(target, targetKey) {
	        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
	        var keys = [];
	        if (metadataMap) {
	            metadataMap.forEach(function (_, key) { return keys.push(key); });
	        }
	        return keys;
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-undefined-type
	    function IsUndefined(x) {
	        return x === undefined;
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
	    function IsArray(x) {
	        return Array.isArray(x);
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-type
	    function IsObject(x) {
	        return typeof x === "object" ? x !== null : typeof x === "function";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
	    function IsConstructor(x) {
	        return typeof x === "function";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-symbol-type
	    function IsSymbol(x) {
	        return typeof x === "symbol";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
	    function ToPropertyKey(value) {
	        if (IsSymbol(value)) {
	            return value;
	        }
	        return String(value);
	    }
	    function GetPrototypeOf(O) {
	        var proto = Object.getPrototypeOf(O);
	        if (typeof O !== "function" || O === functionPrototype) {
	            return proto;
	        }
	        // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
	        // Try to determine the superclass constructor. Compatible implementations
	        // must either set __proto__ on a subclass constructor to the superclass constructor,
	        // or ensure each class has a valid `constructor` property on its prototype that
	        // points back to the constructor.
	        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
	        // This is the case when in ES6 or when using __proto__ in a compatible browser.
	        if (proto !== functionPrototype) {
	            return proto;
	        }
	        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
	        var prototype = O.prototype;
	        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
	        if (prototypeProto == null || prototypeProto === Object.prototype) {
	            return proto;
	        }
	        // if the constructor was not a function, then we cannot determine the heritage.
	        var constructor = prototypeProto.constructor;
	        if (typeof constructor !== "function") {
	            return proto;
	        }
	        // if we have some kind of self-reference, then we cannot determine the heritage.
	        if (constructor === O) {
	            return proto;
	        }
	        // we have a pretty good guess at the heritage.
	        return constructor;
	    }
	    // naive Map shim
	    function CreateMapPolyfill() {
	        var cacheSentinel = {};
	        function Map() {
	            this._keys = [];
	            this._values = [];
	            this._cache = cacheSentinel;
	        }
	        Map.prototype = {
	            get size() {
	                return this._keys.length;
	            },
	            has: function (key) {
	                if (key === this._cache) {
	                    return true;
	                }
	                if (this._find(key) >= 0) {
	                    this._cache = key;
	                    return true;
	                }
	                return false;
	            },
	            get: function (key) {
	                var index = this._find(key);
	                if (index >= 0) {
	                    this._cache = key;
	                    return this._values[index];
	                }
	                return undefined;
	            },
	            set: function (key, value) {
	                this.delete(key);
	                this._keys.push(key);
	                this._values.push(value);
	                this._cache = key;
	                return this;
	            },
	            delete: function (key) {
	                var index = this._find(key);
	                if (index >= 0) {
	                    this._keys.splice(index, 1);
	                    this._values.splice(index, 1);
	                    this._cache = cacheSentinel;
	                    return true;
	                }
	                return false;
	            },
	            clear: function () {
	                this._keys.length = 0;
	                this._values.length = 0;
	                this._cache = cacheSentinel;
	            },
	            forEach: function (callback, thisArg) {
	                var size = this.size;
	                for (var i = 0; i < size; ++i) {
	                    var key = this._keys[i];
	                    var value = this._values[i];
	                    this._cache = key;
	                    callback.call(this, value, key, this);
	                }
	            },
	            _find: function (key) {
	                var keys = this._keys;
	                var size = keys.length;
	                for (var i = 0; i < size; ++i) {
	                    if (keys[i] === key) {
	                        return i;
	                    }
	                }
	                return -1;
	            }
	        };
	        return Map;
	    }
	    // naive Set shim
	    function CreateSetPolyfill() {
	        var cacheSentinel = {};
	        function Set() {
	            this._map = new _Map();
	        }
	        Set.prototype = {
	            get size() {
	                return this._map.length;
	            },
	            has: function (value) {
	                return this._map.has(value);
	            },
	            add: function (value) {
	                this._map.set(value, value);
	                return this;
	            },
	            delete: function (value) {
	                return this._map.delete(value);
	            },
	            clear: function () {
	                this._map.clear();
	            },
	            forEach: function (callback, thisArg) {
	                this._map.forEach(callback, thisArg);
	            }
	        };
	        return Set;
	    }
	    // naive WeakMap shim
	    function CreateWeakMapPolyfill() {
	        var UUID_SIZE = 16;
	        var isNode = typeof global !== "undefined" && Object.prototype.toString.call(global.process) === '[object process]';
	        var nodeCrypto = isNode && function () { try {
	            return (void 0, __webpack_require__(661))("crypto");
	        }
	        catch (e) { } }();
	        var hasOwn = Object.prototype.hasOwnProperty;
	        var keys = {};
	        var rootKey = CreateUniqueKey();
	        function WeakMap() {
	            this._key = CreateUniqueKey();
	        }
	        WeakMap.prototype = {
	            has: function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                if (table) {
	                    return this._key in table;
	                }
	                return false;
	            },
	            get: function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                if (table) {
	                    return table[this._key];
	                }
	                return undefined;
	            },
	            set: function (target, value) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ true);
	                table[this._key] = value;
	                return this;
	            },
	            delete: function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                if (table && this._key in table) {
	                    return delete table[this._key];
	                }
	                return false;
	            },
	            clear: function () {
	                // NOTE: not a real clear, just makes the previous data unreachable
	                this._key = CreateUniqueKey();
	            }
	        };
	        function FillRandomBytes(buffer, size) {
	            for (var i = 0; i < size; ++i) {
	                buffer[i] = Math.random() * 255 | 0;
	            }
	        }
	        function GenRandomBytes(size) {
	            if (nodeCrypto) {
	                var data = nodeCrypto.randomBytes(size);
	                return data;
	            }
	            else if (typeof Uint8Array === "function") {
	                var data = new Uint8Array(size);
	                if (typeof crypto !== "undefined") {
	                    crypto.getRandomValues(data);
	                }
	                else if (typeof msCrypto !== "undefined") {
	                    msCrypto.getRandomValues(data);
	                }
	                else {
	                    FillRandomBytes(data, size);
	                }
	                return data;
	            }
	            else {
	                var data = new Array(size);
	                FillRandomBytes(data, size);
	                return data;
	            }
	        }
	        function CreateUUID() {
	            var data = GenRandomBytes(UUID_SIZE);
	            // mark as random - RFC 4122 § 4.4
	            data[6] = data[6] & 0x4f | 0x40;
	            data[8] = data[8] & 0xbf | 0x80;
	            var result = "";
	            for (var offset = 0; offset < UUID_SIZE; ++offset) {
	                var byte = data[offset];
	                if (offset === 4 || offset === 6 || offset === 8) {
	                    result += "-";
	                }
	                if (byte < 16) {
	                    result += "0";
	                }
	                result += byte.toString(16).toLowerCase();
	            }
	            return result;
	        }
	        function CreateUniqueKey() {
	            var key;
	            do {
	                key = "@@WeakMap@@" + CreateUUID();
	            } while (hasOwn.call(keys, key));
	            keys[key] = true;
	            return key;
	        }
	        function GetOrCreateWeakMapTable(target, create) {
	            if (!hasOwn.call(target, rootKey)) {
	                if (!create) {
	                    return undefined;
	                }
	                Object.defineProperty(target, rootKey, { value: Object.create(null) });
	            }
	            return target[rootKey];
	        }
	        return WeakMap;
	    }
	    // hook global Reflect
	    (function (__global) {
	        if (typeof __global.Reflect !== "undefined") {
	            if (__global.Reflect !== Reflect) {
	                for (var p in Reflect) {
	                    __global.Reflect[p] = Reflect[p];
	                }
	            }
	        }
	        else {
	            __global.Reflect = Reflect;
	        }
	    })(typeof window !== "undefined" ? window :
	        typeof WorkerGlobalScope !== "undefined" ? self :
	            typeof global !== "undefined" ? global :
	                Function("return this;")());
	})(Reflect || (Reflect = {}));
	//# sourceMappingURL=Reflect.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 661 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./CopyrightNotice.txt": 662,
		"./Reflect": 660,
		"./Reflect.js": 660,
		"./Reflect.ts": 666,
		"./spec/css/elements.css": 671,
		"./spec/index-out.html": 675,
		"./spec/index.html": 676,
		"./spec/typescript-out.html": 677,
		"./spec/typescript.html": 678,
		"./test/harness": 679,
		"./test/harness.ts": 679,
		"./test/reflect/reflect-decorate": 680,
		"./test/reflect/reflect-decorate.ts": 680,
		"./test/reflect/reflect-definemetadata": 686,
		"./test/reflect/reflect-definemetadata.ts": 686,
		"./test/reflect/reflect-deletemetadata": 687,
		"./test/reflect/reflect-deletemetadata.ts": 687,
		"./test/reflect/reflect-getmetadata": 688,
		"./test/reflect/reflect-getmetadata.ts": 688,
		"./test/reflect/reflect-getmetadatakeys": 689,
		"./test/reflect/reflect-getmetadatakeys.ts": 689,
		"./test/reflect/reflect-getownmetadata": 690,
		"./test/reflect/reflect-getownmetadata.ts": 690,
		"./test/reflect/reflect-getownmetadatakeys": 691,
		"./test/reflect/reflect-getownmetadatakeys.ts": 691,
		"./test/reflect/reflect-hasmetadata": 692,
		"./test/reflect/reflect-hasmetadata.ts": 692,
		"./test/reflect/reflect-hasownmetadata": 693,
		"./test/reflect/reflect-hasownmetadata.ts": 693,
		"./test/reflect/reflect-metadata": 694,
		"./test/reflect/reflect-metadata.ts": 694,
		"./test/run": 695,
		"./test/run.ts": 695,
		"./test/spec": 696,
		"./test/spec.ts": 696
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 661;


/***/ },
/* 662 */
/***/ function(module, exports) {

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved. 
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0  
	 
	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
	MERCHANTABLITY OR NON-INFRINGEMENT. 
	 
	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */



/***/ },
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*! *****************************************************************************
	Copyright (C) Microsoft. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	var Reflect;
	(function (Reflect) {
	    "use strict";
	    // Load global or shim versions of Map, Set, and WeakMap
	    var functionPrototype = Object.getPrototypeOf(Function);
	    var _Map = typeof Map === "function" ? Map : CreateMapPolyfill();
	    var _Set = typeof Set === "function" ? Set : CreateSetPolyfill();
	    var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
	    // [[Metadata]] internal slot
	    var __Metadata__ = new _WeakMap();
	    /**
	      * Applies a set of decorators to a property of a target object.
	      * @param decorators An array of decorators.
	      * @param target The target object.
	      * @param targetKey (Optional) The property key to decorate.
	      * @param targetDescriptor (Optional) The property descriptor for the target key
	      * @remarks Decorators are applied in reverse order.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     C = Reflect.decorate(decoratorsArray, C);
	      *
	      *     // property (on constructor)
	      *     Reflect.decorate(decoratorsArray, C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     Reflect.decorate(decoratorsArray, C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     Object.defineProperty(C, "staticMethod",
	      *         Reflect.decorate(decoratorsArray, C, "staticMethod",
	      *             Object.getOwnPropertyDescriptor(C, "staticMethod")));
	      *
	      *     // method (on prototype)
	      *     Object.defineProperty(C.prototype, "method",
	      *         Reflect.decorate(decoratorsArray, C.prototype, "method",
	      *             Object.getOwnPropertyDescriptor(C.prototype, "method")));
	      *
	      */
	    function decorate(decorators, target, targetKey, targetDescriptor) {
	        if (!IsUndefined(targetDescriptor)) {
	            if (!IsArray(decorators)) {
	                throw new TypeError();
	            }
	            else if (!IsObject(target)) {
	                throw new TypeError();
	            }
	            else if (IsUndefined(targetKey)) {
	                throw new TypeError();
	            }
	            else if (!IsObject(targetDescriptor)) {
	                throw new TypeError();
	            }
	            targetKey = ToPropertyKey(targetKey);
	            return DecoratePropertyWithDescriptor(decorators, target, targetKey, targetDescriptor);
	        }
	        else if (!IsUndefined(targetKey)) {
	            if (!IsArray(decorators)) {
	                throw new TypeError();
	            }
	            else if (!IsObject(target)) {
	                throw new TypeError();
	            }
	            targetKey = ToPropertyKey(targetKey);
	            return DecoratePropertyWithoutDescriptor(decorators, target, targetKey);
	        }
	        else {
	            if (!IsArray(decorators)) {
	                throw new TypeError();
	            }
	            else if (!IsConstructor(target)) {
	                throw new TypeError();
	            }
	            return DecorateConstructor(decorators, target);
	        }
	    }
	    Reflect.decorate = decorate;
	    /**
	      * A default metadata decorator factory that can be used on a class, class member, or parameter.
	      * @param metadataKey The key for the metadata entry.
	      * @param metadataValue The value for the metadata entry.
	      * @returns A decorator function.
	      * @remarks
	      * If `metadataKey` is already defined for the target and target key, the
	      * metadataValue for that key will be overwritten.
	      * @example
	      *
	      *     // constructor
	      *     @Reflect.metadata(key, value)
	      *     class C {
	      *     }
	      *
	      *     // property (on constructor, TypeScript only)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         static staticProperty;
	      *     }
	      *
	      *     // property (on prototype, TypeScript only)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         property;
	      *     }
	      *
	      *     // method (on constructor)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         static staticMethod() { }
	      *     }
	      *
	      *     // method (on prototype)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         method() { }
	      *     }
	      *
	      */
	    function metadata(metadataKey, metadataValue) {
	        function decorator(target, targetKey) {
	            if (!IsUndefined(targetKey)) {
	                if (!IsObject(target)) {
	                    throw new TypeError();
	                }
	                targetKey = ToPropertyKey(targetKey);
	                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	            }
	            else {
	                if (!IsConstructor(target)) {
	                    throw new TypeError();
	                }
	                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, /*targetKey*/ undefined);
	            }
	        }
	        return decorator;
	    }
	    Reflect.metadata = metadata;
	    /**
	      * Define a unique metadata entry on the target.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param metadataValue A value that contains attached metadata.
	      * @param target The target object on which to define metadata.
	      * @param targetKey (Optional) The property key for the target.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     Reflect.defineMetadata("custom:annotation", options, C);
	      *
	      *     // property (on constructor)
	      *     Reflect.defineMetadata("custom:annotation", options, C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     Reflect.defineMetadata("custom:annotation", options, C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "method");
	      *
	      *     // decorator factory as metadata-producing annotation.
	      *     function MyAnnotation(options): Decorator {
	      *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
	      *     }
	      *
	      */
	    function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	    }
	    Reflect.defineMetadata = defineMetadata;
	    /**
	      * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.hasMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.hasMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.hasMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function hasMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryHasMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.hasMetadata = hasMetadata;
	    /**
	      * Gets a value indicating whether the target object has the provided metadata key defined.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function hasOwnMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.hasOwnMetadata = hasOwnMetadata;
	    /**
	      * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function getMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryGetMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.getMetadata = getMetadata;
	    /**
	      * Gets the metadata value for the provided metadata key on the target object.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getOwnMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function getOwnMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.getOwnMetadata = getOwnMetadata;
	    /**
	      * Gets the metadata keys defined on the target object or its prototype chain.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns An array of unique metadata keys.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getMetadataKeys(C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getMetadataKeys(C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getMetadataKeys(C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getMetadataKeys(C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getMetadataKeys(C.prototype, "method");
	      *
	      */
	    function getMetadataKeys(target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryMetadataKeys(target, targetKey);
	    }
	    Reflect.getMetadataKeys = getMetadataKeys;
	    /**
	      * Gets the unique metadata keys defined on the target object.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns An array of unique metadata keys.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getOwnMetadataKeys(C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getOwnMetadataKeys(C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getOwnMetadataKeys(C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getOwnMetadataKeys(C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getOwnMetadataKeys(C.prototype, "method");
	      *
	      */
	    function getOwnMetadataKeys(target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryOwnMetadataKeys(target, targetKey);
	    }
	    Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
	    /**
	      * Deletes the metadata entry from the target object with the provided key.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata entry was found and deleted; otherwise, false.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.deleteMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.deleteMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.deleteMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function deleteMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#deletemetadata-metadatakey-p-
	        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
	        if (IsUndefined(metadataMap)) {
	            return false;
	        }
	        if (!metadataMap.delete(metadataKey)) {
	            return false;
	        }
	        if (metadataMap.size > 0) {
	            return true;
	        }
	        var targetMetadata = __Metadata__.get(target);
	        targetMetadata.delete(targetKey);
	        if (targetMetadata.size > 0) {
	            return true;
	        }
	        __Metadata__.delete(target);
	        return true;
	    }
	    Reflect.deleteMetadata = deleteMetadata;
	    function DecorateConstructor(decorators, target) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            var decorated = decorator(target);
	            if (!IsUndefined(decorated)) {
	                if (!IsConstructor(decorated)) {
	                    throw new TypeError();
	                }
	                target = decorated;
	            }
	        }
	        return target;
	    }
	    function DecoratePropertyWithDescriptor(decorators, target, propertyKey, descriptor) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            var decorated = decorator(target, propertyKey, descriptor);
	            if (!IsUndefined(decorated)) {
	                if (!IsObject(decorated)) {
	                    throw new TypeError();
	                }
	                descriptor = decorated;
	            }
	        }
	        return descriptor;
	    }
	    function DecoratePropertyWithoutDescriptor(decorators, target, propertyKey) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            decorator(target, propertyKey);
	        }
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#getorcreatemetadatamap--o-p-create-
	    function GetOrCreateMetadataMap(target, targetKey, create) {
	        var targetMetadata = __Metadata__.get(target);
	        if (!targetMetadata) {
	            if (!create) {
	                return undefined;
	            }
	            targetMetadata = new _Map();
	            __Metadata__.set(target, targetMetadata);
	        }
	        var keyMetadata = targetMetadata.get(targetKey);
	        if (!keyMetadata) {
	            if (!create) {
	                return undefined;
	            }
	            keyMetadata = new _Map();
	            targetMetadata.set(targetKey, keyMetadata);
	        }
	        return keyMetadata;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasmetadata--metadatakey-o-p-
	    function OrdinaryHasMetadata(MetadataKey, O, P) {
	        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	        if (hasOwn) {
	            return true;
	        }
	        var parent = GetPrototypeOf(O);
	        if (parent !== null) {
	            return OrdinaryHasMetadata(MetadataKey, parent, P);
	        }
	        return false;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasownmetadata--metadatakey-o-p-
	    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
	        if (metadataMap === undefined) {
	            return false;
	        }
	        return Boolean(metadataMap.has(MetadataKey));
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetmetadata--metadatakey-o-p-
	    function OrdinaryGetMetadata(MetadataKey, O, P) {
	        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	        if (hasOwn) {
	            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
	        }
	        var parent = GetPrototypeOf(O);
	        if (parent !== null) {
	            return OrdinaryGetMetadata(MetadataKey, parent, P);
	        }
	        return undefined;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetownmetadata--metadatakey-o-p-
	    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
	        if (metadataMap === undefined) {
	            return undefined;
	        }
	        return metadataMap.get(MetadataKey);
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarydefineownmetadata--metadatakey-metadatavalue-o-p-
	    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ true);
	        metadataMap.set(MetadataKey, MetadataValue);
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarymetadatakeys--o-p-
	    function OrdinaryMetadataKeys(O, P) {
	        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
	        var parent = GetPrototypeOf(O);
	        if (parent === null) {
	            return ownKeys;
	        }
	        var parentKeys = OrdinaryMetadataKeys(parent, P);
	        if (parentKeys.length <= 0) {
	            return ownKeys;
	        }
	        if (ownKeys.length <= 0) {
	            return parentKeys;
	        }
	        var set = new _Set();
	        var keys = [];
	        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
	            var key = ownKeys_1[_i];
	            var hasKey = set.has(key);
	            if (!hasKey) {
	                set.add(key);
	                keys.push(key);
	            }
	        }
	        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
	            var key = parentKeys_1[_a];
	            var hasKey = set.has(key);
	            if (!hasKey) {
	                set.add(key);
	                keys.push(key);
	            }
	        }
	        return keys;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryownmetadatakeys--o-p-
	    function OrdinaryOwnMetadataKeys(target, targetKey) {
	        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
	        var keys = [];
	        if (metadataMap) {
	            metadataMap.forEach(function (_, key) { return keys.push(key); });
	        }
	        return keys;
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-undefined-type
	    function IsUndefined(x) {
	        return x === undefined;
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
	    function IsArray(x) {
	        return Array.isArray(x);
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-type
	    function IsObject(x) {
	        return typeof x === "object" ? x !== null : typeof x === "function";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
	    function IsConstructor(x) {
	        return typeof x === "function";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-symbol-type
	    function IsSymbol(x) {
	        return typeof x === "symbol";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
	    function ToPropertyKey(value) {
	        if (IsSymbol(value)) {
	            return value;
	        }
	        return String(value);
	    }
	    function GetPrototypeOf(O) {
	        var proto = Object.getPrototypeOf(O);
	        if (typeof O !== "function" || O === functionPrototype) {
	            return proto;
	        }
	        // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
	        // Try to determine the superclass constructor. Compatible implementations
	        // must either set __proto__ on a subclass constructor to the superclass constructor,
	        // or ensure each class has a valid `constructor` property on its prototype that
	        // points back to the constructor.
	        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
	        // This is the case when in ES6 or when using __proto__ in a compatible browser.
	        if (proto !== functionPrototype) {
	            return proto;
	        }
	        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
	        var prototype = O.prototype;
	        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
	        if (prototypeProto == null || prototypeProto === Object.prototype) {
	            return proto;
	        }
	        // if the constructor was not a function, then we cannot determine the heritage.
	        var constructor = prototypeProto.constructor;
	        if (typeof constructor !== "function") {
	            return proto;
	        }
	        // if we have some kind of self-reference, then we cannot determine the heritage.
	        if (constructor === O) {
	            return proto;
	        }
	        // we have a pretty good guess at the heritage.
	        return constructor;
	    }
	    // naive Map shim
	    function CreateMapPolyfill() {
	        var cacheSentinel = {};
	        function Map() {
	            this._keys = [];
	            this._values = [];
	            this._cache = cacheSentinel;
	        }
	        Map.prototype = {
	            get size() {
	                return this._keys.length;
	            },
	            has: function (key) {
	                if (key === this._cache) {
	                    return true;
	                }
	                if (this._find(key) >= 0) {
	                    this._cache = key;
	                    return true;
	                }
	                return false;
	            },
	            get: function (key) {
	                var index = this._find(key);
	                if (index >= 0) {
	                    this._cache = key;
	                    return this._values[index];
	                }
	                return undefined;
	            },
	            set: function (key, value) {
	                this.delete(key);
	                this._keys.push(key);
	                this._values.push(value);
	                this._cache = key;
	                return this;
	            },
	            delete: function (key) {
	                var index = this._find(key);
	                if (index >= 0) {
	                    this._keys.splice(index, 1);
	                    this._values.splice(index, 1);
	                    this._cache = cacheSentinel;
	                    return true;
	                }
	                return false;
	            },
	            clear: function () {
	                this._keys.length = 0;
	                this._values.length = 0;
	                this._cache = cacheSentinel;
	            },
	            forEach: function (callback, thisArg) {
	                var size = this.size;
	                for (var i = 0; i < size; ++i) {
	                    var key = this._keys[i];
	                    var value = this._values[i];
	                    this._cache = key;
	                    callback.call(this, value, key, this);
	                }
	            },
	            _find: function (key) {
	                var keys = this._keys;
	                var size = keys.length;
	                for (var i = 0; i < size; ++i) {
	                    if (keys[i] === key) {
	                        return i;
	                    }
	                }
	                return -1;
	            }
	        };
	        return Map;
	    }
	    // naive Set shim
	    function CreateSetPolyfill() {
	        var cacheSentinel = {};
	        function Set() {
	            this._map = new _Map();
	        }
	        Set.prototype = {
	            get size() {
	                return this._map.length;
	            },
	            has: function (value) {
	                return this._map.has(value);
	            },
	            add: function (value) {
	                this._map.set(value, value);
	                return this;
	            },
	            delete: function (value) {
	                return this._map.delete(value);
	            },
	            clear: function () {
	                this._map.clear();
	            },
	            forEach: function (callback, thisArg) {
	                this._map.forEach(callback, thisArg);
	            }
	        };
	        return Set;
	    }
	    // naive WeakMap shim
	    function CreateWeakMapPolyfill() {
	        var UUID_SIZE = 16;
	        var isNode = typeof global !== "undefined" && Object.prototype.toString.call(global.process) === '[object process]';
	        var nodeCrypto = isNode && function () { try {
	            return (void 0, __webpack_require__(661))("crypto");
	        }
	        catch (e) { } }();
	        var hasOwn = Object.prototype.hasOwnProperty;
	        var keys = {};
	        var rootKey = CreateUniqueKey();
	        function WeakMap() {
	            this._key = CreateUniqueKey();
	        }
	        WeakMap.prototype = {
	            has: function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                if (table) {
	                    return this._key in table;
	                }
	                return false;
	            },
	            get: function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                if (table) {
	                    return table[this._key];
	                }
	                return undefined;
	            },
	            set: function (target, value) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ true);
	                table[this._key] = value;
	                return this;
	            },
	            delete: function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                if (table && this._key in table) {
	                    return delete table[this._key];
	                }
	                return false;
	            },
	            clear: function () {
	                // NOTE: not a real clear, just makes the previous data unreachable
	                this._key = CreateUniqueKey();
	            }
	        };
	        function FillRandomBytes(buffer, size) {
	            for (var i = 0; i < size; ++i) {
	                buffer[i] = Math.random() * 255 | 0;
	            }
	        }
	        function GenRandomBytes(size) {
	            if (nodeCrypto) {
	                var data = nodeCrypto.randomBytes(size);
	                return data;
	            }
	            else if (typeof Uint8Array === "function") {
	                var data = new Uint8Array(size);
	                if (typeof crypto !== "undefined") {
	                    crypto.getRandomValues(data);
	                }
	                else if (typeof msCrypto !== "undefined") {
	                    msCrypto.getRandomValues(data);
	                }
	                else {
	                    FillRandomBytes(data, size);
	                }
	                return data;
	            }
	            else {
	                var data = new Array(size);
	                FillRandomBytes(data, size);
	                return data;
	            }
	        }
	        function CreateUUID() {
	            var data = GenRandomBytes(UUID_SIZE);
	            // mark as random - RFC 4122 § 4.4
	            data[6] = data[6] & 0x4f | 0x40;
	            data[8] = data[8] & 0xbf | 0x80;
	            var result = "";
	            for (var offset = 0; offset < UUID_SIZE; ++offset) {
	                var byte = data[offset];
	                if (offset === 4 || offset === 6 || offset === 8) {
	                    result += "-";
	                }
	                if (byte < 16) {
	                    result += "0";
	                }
	                result += byte.toString(16).toLowerCase();
	            }
	            return result;
	        }
	        function CreateUniqueKey() {
	            var key;
	            do {
	                key = "@@WeakMap@@" + CreateUUID();
	            } while (hasOwn.call(keys, key));
	            keys[key] = true;
	            return key;
	        }
	        function GetOrCreateWeakMapTable(target, create) {
	            if (!hasOwn.call(target, rootKey)) {
	                if (!create) {
	                    return undefined;
	                }
	                Object.defineProperty(target, rootKey, { value: Object.create(null) });
	            }
	            return target[rootKey];
	        }
	        return WeakMap;
	    }
	    // hook global Reflect
	    (function (__global) {
	        if (typeof __global.Reflect !== "undefined") {
	            if (__global.Reflect !== Reflect) {
	                for (var p in Reflect) {
	                    __global.Reflect[p] = Reflect[p];
	                }
	            }
	        }
	        else {
	            __global.Reflect = Reflect;
	        }
	    })(typeof window !== "undefined" ? window :
	        typeof WorkerGlobalScope !== "undefined" ? self :
	            typeof global !== "undefined" ? global :
	                Function("return this;")());
	})(Reflect || (Reflect = {}));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 672 */,
/* 673 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 674 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 675 */
/***/ function(module, exports) {

	module.exports = "<!doctype html>\n<head><meta charset=\"utf8\">\n<title>Decorators</title>\n<link rel=\"stylesheet\" href=\"./css/elements.css\"> \n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/styles/github.min.css\"> \n</head><body><emu-biblio href=\"./biblio.json\"></emu-biblio> \n\n<h1>Decorators Proposal - ECMAScript</h1>\n<div><h2>Table of Contents</h2><ol class=\"toc\"><li><a href=\"#introduction\"><span class=\"secnum\"></span> Introduction</a></li><li><a href=\"#proposal-terms\"><span class=\"secnum\">1</span> Terms</a><ol class=\"toc\"><li><a href=\"#proposal-terms-decorator\"><span class=\"secnum\">1.1</span> Decorator</a></li><li><a href=\"#proposal-terms-classdecoratorfunction\"><span class=\"secnum\">1.2</span> Class Decorator Function</a></li><li><a href=\"#proposal-terms-propertydecoratorfunction\"><span class=\"secnum\">1.3</span> Property/Method Decorator Function</a></li><li><a href=\"#proposal-terms-decoratorfactory\"><span class=\"secnum\">1.4</span> Decorator Factory</a></li></ol></li><li><a href=\"#proposal-decoratortargets\"><span class=\"secnum\">2</span> Decorator Targets</a></li><li><a href=\"#proposal-decoratoreval\"><span class=\"secnum\">3</span> Decorator Evaluation and Application Order</a></li><li><a href=\"#operations\"><span class=\"secnum\">4</span> Abstract Operations</a><ol class=\"toc\"><li><a href=\"#operations-decoration\"><span class=\"secnum\">4.1</span> Decorator Operations</a><ol class=\"toc\"><li><a href=\"#operations-decoration-decorate\"><span class=\"secnum\">4.1.1</span> Decorate ( Decorators, O, P, desc )</a></li><li><a href=\"#operations-decoration-decorateconstructor\"><span class=\"secnum\">4.1.2</span> DecorateConstructor ( Decorators, F )</a></li><li><a href=\"#operations-decoration-decorateproperty\"><span class=\"secnum\">4.1.3</span> DecorateProperty ( Decorators, O, P, desc )</a></li></ol></li><li><a href=\"#operations-object\"><span class=\"secnum\">4.2</span> Operations on Objects</a><ol class=\"toc\"><li><a href=\"#createlistfromiterator\"><span class=\"secnum\">4.2.1</span> CreateListFromIterator ( iterator [, elementTypes] )</a></li><li><a href=\"#getorcreatemetadatamap\"><span class=\"secnum\">4.2.2</span> GetOrCreateMetadataMap ( O, P, Create )</a></li><li><a href=\"#hasmetadata\"><span class=\"secnum\">4.2.3</span> [[HasMetadata]] ( MetadataKey, P )</a></li><li><a href=\"#ordinaryhasmetadata\"><span class=\"secnum\">4.2.4</span> OrdinaryHasMetadata ( MetadataKey, O, P )</a></li><li><a href=\"#hasownmetadata\"><span class=\"secnum\">4.2.5</span> [[HasOwnMetadata]] ( MetadataKey, P )</a></li><li><a href=\"#ordinaryhasownmetadata\"><span class=\"secnum\">4.2.6</span> OrdinaryHasOwnMetadata ( MetadataKey, O, P )</a></li><li><a href=\"#getmetadata\"><span class=\"secnum\">4.2.7</span> [[GetMetadata]] ( MetadataKey, P )</a></li><li><a href=\"#ordinarygetmetadata\"><span class=\"secnum\">4.2.8</span> OrdinaryGetMetadata ( MetadataKey, O, P )</a></li><li><a href=\"#getownmetadata\"><span class=\"secnum\">4.2.9</span> [[GetOwnMetadata]] ( MetadataKey, P, ParamIndex )</a></li><li><a href=\"#ordinarygetownmetadata\"><span class=\"secnum\">4.2.10</span> OrdinaryGetOwnMetadata ( MetadataKey, O, P )</a></li><li><a href=\"#defineownmetadata\"><span class=\"secnum\">4.2.11</span> [[DefineOwnMetadata]] ( MetadataKey, MetadataValue, P )</a></li><li><a href=\"#ordinarydefineownmetadata\"><span class=\"secnum\">4.2.12</span> OrdinaryDefineOwnMetadata ( MetadataKey, MetadataValue, O, P )</a></li><li><a href=\"#metadatakeys\"><span class=\"secnum\">4.2.13</span> [[MetadataKeys]] ( P )</a></li><li><a href=\"#ordinarymetadatakeys\"><span class=\"secnum\">4.2.14</span> OrdinaryMetadataKeys ( O, P )</a></li><li><a href=\"#ownmetadatakeys\"><span class=\"secnum\">4.2.15</span> [[OwnMetadataKeys]] ( P )</a></li><li><a href=\"#ordinaryownmetadatakeys\"><span class=\"secnum\">4.2.16</span> OrdinaryOwnMetadataKeys ( O, P )</a></li><li><a href=\"#deletemetadata\"><span class=\"secnum\">4.2.17</span> [[DeleteMetadata]]( MetadataKey, P )</a></li></ol></li></ol></li><li><a href=\"#reflection\"><span class=\"secnum\">5</span> Reflection</a><ol class=\"toc\"><li><a href=\"#reflect\"><span class=\"secnum\">5.1</span> The Reflect Object</a><ol class=\"toc\"><li><a href=\"#reflect-metadatadecoratorfunctions\"><span class=\"secnum\">5.1.1</span> Metadata Decorator Functions</a></li><li><a href=\"#reflect-decorate\"><span class=\"secnum\">5.1.2</span> Reflect.decorate ( decorators, target, propertyKey, attributes )</a></li><li><a href=\"#reflect-metadata\"><span class=\"secnum\">5.1.3</span> Reflect.metadata ( metadataKey, metadataValue )</a></li><li><a href=\"#reflect-definemetadata\"><span class=\"secnum\">5.1.4</span> Reflect.defineMetadata ( metadataKey, metadataValue, target, propertyKey )</a></li><li><a href=\"#reflect-hasmetadata\"><span class=\"secnum\">5.1.5</span> Reflect.hasMetadata ( metadataKey, target, propertyKey )</a></li><li><a href=\"#reflect-hasownmetadata\"><span class=\"secnum\">5.1.6</span> Reflect.hasOwnMetadata ( metadataKey, target, propertyKey )</a></li><li><a href=\"#reflect-getmetadata\"><span class=\"secnum\">5.1.7</span> Reflect.getMetadata ( metadataKey, target, propertyKey )</a></li><li><a href=\"#reflect-getownmetadata\"><span class=\"secnum\">5.1.8</span> Reflect.getOwnMetadata ( metadataKey, target, propertyKey )</a></li><li><a href=\"#reflect-getmetadatakeys\"><span class=\"secnum\">5.1.9</span> Reflect.getMetadataKeys ( target, propertyKey )</a></li><li><a href=\"#reflect-getownmetadata\"><span class=\"secnum\">5.1.10</span> Reflect.getOwnMetadataKeys ( target, propertyKey )</a></li><li><a href=\"#reflect-deletemetadata\"><span class=\"secnum\">5.1.11</span> Reflect.deleteMetadata ( metadataKey, target, propertyKey )</a></li></ol></li></ol></li><li><a href=\"#grammar\"><span class=\"secnum\">A</span> Grammar</a><ol class=\"toc\"><li><a href=\"#grammar-expressions\"><span class=\"secnum\">A.1</span> Expressions</a></li><li><a href=\"#functions-and-classes\"><span class=\"secnum\">A.2</span> Functions and Classes</a></li><li><a href=\"#scripts-and-modules\"><span class=\"secnum\">A.3</span> Scripts and Modules</a></li></ol></li></ol></div><emu-intro id=\"introduction\">\n  <h1><span class=\"secnum\"></span>Introduction</h1>\n  <p>Proposal to add Decorators to ECMAScript.</p>\n  <p>For the TypeScript specific proposal, see <a href=\"typescript.html\">http://rbuckton.github.io/reflectdecorators/typescript.html</a></p>\n</emu-intro>\n\n<emu-clause id=\"proposal-terms\">\n  <h1><span class=\"secnum\">1</span>Terms</h1>\n  <emu-clause id=\"proposal-terms-decorator\">\n    <h1><span class=\"secnum\">1.1</span>Decorator</h1>\n    <emu-note><span class=\"note\">Note</span>This section is non-normative.</emu-note>\n    <p>A <em>decorator</em> is an expression that is evaluated after a class has been defined, that can be used to annotate or modify the class in some fashion. This expression must evaluate to a <code>function</code>, which is executed by the runtime to apply the decoration.</p>\n    <pre><code class=\"javascript hljs\">@decoratorExpression\n<span class=\"hljs-keyword\">class</span> C {\n}\n</code></pre>\n  </emu-clause>\n  <emu-clause id=\"proposal-terms-classdecoratorfunction\">\n    <h1><span class=\"secnum\">1.2</span>Class Decorator Function</h1>\n    <emu-note><span class=\"note\">Note</span>This section is non-normative.</emu-note>\n    <p>A <em>class decorator function</em> is a function that accepts a constructor function as its argument, and returns either <code>undefined</code>, the provided constructor function, or a new constructor function. Returning <code>undefined</code> is equivalent to returning the provided constructor function.</p>\n    <pre><code class=\"javascript hljs\"><span class=\"hljs-comment\">// A class decorator function</span>\n<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">dec</span><span class=\"hljs-params\">(target)</span> </span>{  \n <span class=\"hljs-comment\">// modify, annotate, or replace target...</span>\n}\n</code></pre>\n  </emu-clause>\n  <emu-clause id=\"proposal-terms-propertydecoratorfunction\">\n    <h1><span class=\"secnum\">1.3</span>Property/Method Decorator Function</h1>\n    <emu-note><span class=\"note\">Note</span>This section is non-normative.</emu-note>\n    <p>A <em>property decorator function</em> is a function that accepts three arguments: The object that owns the property, the key for the property (a <code>string</code> or a <code>symbol</code>), and optionally the property descriptor of the property. The function must return either <code>undefined</code>, the provided property descriptor, or a new property descriptor. Returning <code>undefined</code> is equivalent to returning the provided property descriptor.</p>\n    <pre><code class=\"javascript hljs\"><span class=\"hljs-comment\">// A property (or method/accessor) decorator function</span>\n<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">dec</span><span class=\"hljs-params\">(target, key, descriptor)</span> </span>{\n  <span class=\"hljs-comment\">// annotate the target and key; or modify or replace the descriptor...</span>\n}\n    </code></pre>\n  </emu-clause>\n  <emu-clause id=\"proposal-terms-decoratorfactory\">\n    <h1><span class=\"secnum\">1.4</span>Decorator Factory</h1>\n    <emu-note><span class=\"note\">Note</span>This section is non-normative.</emu-note>\n    <p>A <em>decorator factory</em> is a function that can accept any number of arguments, and must return one of the above types of decorator function.</p>\n    <pre><code class=\"javascript hljs\"><span class=\"hljs-comment\">// a class decorator factory function</span>\n<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">dec</span><span class=\"hljs-params\">(x, y)</span> </span>{\n  <span class=\"hljs-comment\">// the class decorator function</span>\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(target)</span> </span>{\n      <span class=\"hljs-comment\">// modify, annotate, or replace target...</span>\n  }\n}\n</code></pre>\n  </emu-clause>\n</emu-clause>\n<emu-clause id=\"proposal-decoratortargets\">\n  <h1><span class=\"secnum\">2</span>Decorator Targets</h1>\n  <emu-note><span class=\"note\">Note</span>This section is non-normative.</emu-note>\n  <p>A <em>decorator</em> <strong>can</strong> be legally applied to any of the following:</p>\n  <ul>\n    <li>A class declaration</li>\n    <li>A class property initializer (static or prototype)</li>\n    <li>A class method declaration (static or prototype)</li>\n    <li>A class get or set accessor declaration (static or prototype)</li>\n  </ul>\n  <p>Please note that a <em>decorator</em> currently <strong>cannot</strong> be legally applied to any of the following:</p>\n  <ul>\n    <li>A class constructor - This is to reduce ambiguity between where you can apply a decorator (on the class or on its constructor) and which of the above decorator function forms is called.</li>\n    <li>A function declaration - Decorators on a function declaration would introduce a TDZ (Temporal Dead Zone), which would make the function unreachable until its declaration is executed. This could cause confusion as an undecorated function declaration is hoisted and can be used in a statement preceeding the declaration.</li>\n    <li>A function expression - This is to reduce confusion and maintain parity with disallowing decorators on a function declaration.</li>\n    <li>An arrow function - This is to reduce confusion and maintain parity with disallowing decorators on a function expression.</li>\n  </ul>\n  <p>This list may change in the future.</p>\n</emu-clause>\n<emu-clause id=\"proposal-decoratoreval\">\n  <h1><span class=\"secnum\">3</span>Decorator Evaluation and Application Order</h1>\n  <emu-note><span class=\"note\">Note</span>This section is non-normative.</emu-note>\n  <p>Decorators are <em>evaluated</em> in the order they appear preceeding their target declaration, to preserve side-effects due to evaluation order. Decorators are <em>applied</em> to their target declaration in reverse order, starting with the decorator closest to the declaration. This behavior is specified to preserve the expected behavior of decorators without a declarative syntax.</p>\n  <pre><code class=\"javascript hljs\">@F\n@G\n<span class=\"hljs-keyword\">class</span> C {   \n}\n</code></pre>\n  <p>For example, the above listing could be approximately written without decorators in the following fashion:</p>\n  <pre><code class=\"javascript hljs\">C = F(G(C))</code></pre>\n  <p>In the above example, the expression <code>F</code> is evaluated first, followed by the expression <code>G</code>. <code>G</code> is then called with the constructor function as its argument, followed by calling <code>F</code> with the result. The actual process of applying decorators is more complex than the above example however, though you may still imperatively apply decorators with a reflection API.</p>\n  <p>If a class declaration has decorators on both the class and any of its members or parameters, the decorators are applied using the following pseudocode:</p>\n  <pre>for each member M of class C\n  if M is an accessor then\n      let accessor = first accessor (get or set, in declaration order) of M\n      let memberDecorators = decorators of accessor\n      for each parameter of accessor\n          let paramDecorators = decorators of parameter           \n          let paramIndex = ordinal index of parameter\n          Reflect.decorate(paramDecorators, accessor, paramIndex)\n      next parameter\n\n      let accessor = second accessor (get or set, in declaration order) of M\n      if accessor then\n          let memberDecorators = memberDecorators + decorators of accessor\n          for each parameter of accessor\n              let paramDecorators = decorators of parameter           \n              let paramIndex = ordinal index of parameter\n              Reflect.decorate(paramDecorators, accessor, paramIndex)\n          next parameter\n      end if\n  else if M is a method\n      let memberDecorators = decorators of M\n      for each parameter of M\n          let paramDecorators = decorators of parameter           \n          let paramIndex = ordinal index of parameter\n          Reflect.decorate(paramDecorators, M, paramIndex)\n      next parameter\n  else\n      let memberDecorators = decorators of M\n  end if\n\n  let name = name of M\n  let target = C.prototype if M is on the prototype; otherwise, C if M is static  \n  Reflect.decorate(memberDecorators, C, name)\nnext member\n\nfor each parameter of C\n  let paramDecorators = decorators of parameter\n  let paramIndex = ordinal index of parameter\n  Reflect.decorate(paramDecorators, C, paramIndex)\nnext parameter\n\nlet classDecorators = decorators of C\nlet C = Reflect.decorate(classDecorators, C)\n  </pre>\n</emu-clause>\n\n<emu-clause id=\"operations\">\n  <h1><span class=\"secnum\">4</span>Abstract Operations</h1>\n  <emu-clause id=\"operations-decoration\">\n    <h1><span class=\"secnum\">4.1</span>Decorator Operations</h1>\n    <emu-clause id=\"operations-decoration-decorate\">\n      <h1><span class=\"secnum\">4.1.1</span>Decorate ( Decorators, O, P, desc )</h1>\n      <p>When the abstract operation Decorate is called with ECMAScript language value <var>Decorators</var>, Object <var>O</var>, property key <var>P</var>, and property descriptor <var>desc</var>, the following steps are taken:</p>\n      <emu-alg aoid=\"Decorate\" id=\"ao-Decorate\"><ol>\n  <li>If <var>P</var> is <emu-val>undefined</emu-val> and <var>desc</var> is <emu-val>undefined</emu-val>, then\n    <ol>\n      <li>If <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iscallable\">IsCallable</a>(<var>O</var>) is not <emu-val>true</emu-val>, throw a <emu-val>TypeError</emu-val> exception.</li>\n      <li>Return <a href=\"#ao-DecorateConstructor\">DecorateConstructor</a>(<var>Decorators</var>, <var>O</var>).</li>\n    </ol>\n  </li>\n  <li>Else\n    <ol>\n      <li>Return <a href=\"#ao-DecorateProperty\">DecorateProperty</a>(<var>Decorators</var>, <var>O</var>, <var>P</var>, <var>desc</var>).</li>\n    </ol>\n  </li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"operations-decoration-decorateconstructor\">\n      <h1><span class=\"secnum\">4.1.2</span>DecorateConstructor ( Decorators, F )</h1>\n      <p>When the abstract operation DecorateConstructor is called with ECMAScript language value <var>Decorators</var> and Object <var>F</var>, the following steps are taken:</p>\n      <emu-alg aoid=\"DecorateConstructor\" id=\"ao-DecorateConstructor\"><ol>\n  <li>Let <var>result</var> be <var>F</var>.</li>\n  <li>Let <var>iterator</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-getiterator\">GetIterator</a>(<var>Decorators</var>). </li>\n  <li>Let <var>list</var> be <a href=\"#ao-CreateListFromIterator\">CreateListFromIterator</a>(<var>iterator</var>, «Object»).</li>\n  <li>For each <var>decorator</var> in <var>list</var> in reverse order\n    <ol>\n      <li>Let <var>decorated</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args\">Call</a>(<var>decorator</var>, <emu-val>null</emu-val>, <var>result</var>).</li>\n      <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>decorated</var>).</li>\n      <li>If <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iscallable\">IsCallable</a>(<var>decorated</var>), then\n        <ol>\n          <li>Set <var>result</var> to be <var>decorated</var>.</li>\n        </ol>\n      </li>\n      <li>Else if <var>decorated</var> is not <emu-val>undefined</emu-val>, throw a <emu-val>TypeError</emu-val> exception.</li>\n    </ol>\n  </li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"operations-decoration-decorateproperty\">\n      <h1><span class=\"secnum\">4.1.3</span>DecorateProperty ( Decorators, O, P, desc )</h1>\n      <p>When the abstract operation DecorateProperty is called with ECMAScript language value <var>Decorators</var>, Object <var>O</var>, property key <var>P</var>, and property descriptor <var>desc</var>, the following steps are taken:</p>\n      <emu-alg aoid=\"DecorateProperty\" id=\"ao-DecorateProperty\"><ol>\n  <li>Let <var>result</var> be <var>desc</var>.</li>\n  <li>Let <var>key</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey\">ToPropertyKey</a>(<var>P</var>).</li>\n  <li>Let <var>iterator</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-getiterator\">GetIterator</a>(<var>Decorators</var>). </li>\n  <li>Let <var>list</var> be <a href=\"#ao-CreateListFromIterator\">CreateListFromIterator</a>(<var>iterator</var>, «Object»).</li>\n  <li>For each <var>decorator</var> in <var>list</var> in reverse order\n    <ol start=\"6\">\n      <li>Let <var>decorated</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args\">Call</a>(<var>decorator</var>, <emu-val>null</emu-val>, <var>O</var>, <var>key</var>, <var>result</var>).</li>\n      <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>decorated</var>).</li>\n      <li>If <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-data-types-and-values\">Type</a>(<var>decorated</var>) is Object, then\n        <ol>\n          <li>Set <var>result</var> to be <var>decorated</var>.</li>\n        </ol>\n      </li>\n      <li>Else if <var>decorated</var> is not <emu-val>undefined</emu-val>, throw a <emu-val>TypeError</emu-val> exception.</li>\n    </ol>\n  </li>\n</ol></emu-alg>\n    </emu-clause>\n  </emu-clause>\n  <emu-clause id=\"operations-object\">\n    <h1><span class=\"secnum\">4.2</span>Operations on Objects</h1>  \n    <emu-clause id=\"createlistfromiterator\">\n      <h1><span class=\"secnum\">4.2.1</span>CreateListFromIterator ( iterator [, elementTypes] )</h1>\n      <p>When the abstract operation CreateListFromIterator is called with ECMAScript language value <var>iterator</var>, the following steps are taken:</p>\n      <emu-alg aoid=\"CreateListFromIterator\" id=\"ao-CreateListFromIterator\"><ol>\n  <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>iterator</var>).</li>\n  <li>If <var>elementTypes</var> was not passed, let <var>elementTypes</var> be (Undefined, Null, Boolean, String, Symbol, Number, Object).</li>\n  <li>Let <var>list</var> be an empty List.</li>\n  <li>Repeat\n    <ol>\n      <li>Let <var>next</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iteratorstep\">IteratorStep</a>(<var>iterator</var>).</li>\n      <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>next</var>).</li>\n      <li>If <var>next</var> is <emu-val>false</emu-val>, return <var>list</var>.</li>\n      <li>Let <var>nextValue</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iteratorvalue\">IteratorValue</a>(<var>next</var>).</li>\n      <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>nextValue</var>).</li>\n      <li>If <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-data-types-and-values\">Type</a>(<var>nextValue</var>) is not an element of <var>elementTypes</var>, then\n        <ol>\n          <li>Return <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iteratorclose\">IteratorClose</a>(<var>iterator</var>, Completion{[[type]]: throw, [[value]]: a newly created <emu-val>TypeError</emu-val> object, [[target]: empty}).</li>\n        </ol>\n      </li>\n      <li>Append <var>nextValue</var> as the last element of <var>list</var>.</li>\n    </ol>\n  </li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"getorcreatemetadatamap\">\n      <h1><span class=\"secnum\">4.2.2</span>GetOrCreateMetadataMap ( O, P, Create )</h1>\n      <p>When the abstract operation GetOrCreateMetadataMap is called with Object <var>O</var>, property key <var>P</var>, and Boolean <var>Create</var> the following steps are taken:</p>\n      <emu-alg aoid=\"GetOrCreateMetadataMap\" id=\"ao-GetOrCreateMetadataMap\"><ol>\n  <li>Assert: <var>P</var> is <emu-val>undefined</emu-val> or <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey\">IsPropertyKey</a>(<var>P</var>) is <emu-val>true</emu-val>.</li>\n  <li>Let <var>metadataMap</var> be <emu-val>undefined</emu-val>.</li>\n  <li>Let <var>succeeded</var> be <emu-val>true</emu-val>.</li>\n  <li>Let <var>targetMetadata</var> be the value of <var>O</var>'s [[Metadata]] internal slot.</li>\n  <li>If <var>targetMetadata</var> is <emu-val>undefined</emu-val>, then\n    <ol>\n      <li>If <var>Create</var> is <emu-val>false</emu-val>, return <emu-val>undefined</emu-val>.</li>\n      <li>Set <var>targetMetadata</var> to be a newly created <emu-val>Map</emu-val> object.</li>\n      <li>Set the [[Metadata]] internal slot of <var>O</var> to <var>targetMetadata</var>.</li>\n    </ol>\n  </li>\n  <li>Let <var>metadataMap</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-invoke\">Invoke</a>(<var>targetMetadata</var>, <code>\"get\"</code>, <var>P</var>).</li>\n  <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>metadataMap</var>).</li>\n  <li>If <var>metadataMap</var> is <emu-val>undefined</emu-val>, then\n    <ol>\n      <li>If <var>Create</var> is <emu-val>false</emu-val>, return <emu-val>undefined</emu-val>.</li>\n      <li>Set <var>metadataMap</var> to be a newly created <emu-val>Map</emu-val> object.</li>\n      <li>Let <var>setStatus</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-invoke\">Invoke</a>(<var>targetMetadata</var>, <code>\"set\"</code>, <var>P</var>, <var>metadataMap</var>).</li>\n      <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>setStatus</var>).</li>\n    </ol>\n  </li>\n  <li>Return <var>metadataMap</var>.</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"hasmetadata\">\n      <h1><span class=\"secnum\">4.2.3</span>[[HasMetadata]] ( MetadataKey, P )</h1>\n      <p>When the [[HasMetadata]] internal method of <var>O</var> is called with ECMAScript language value <var>MetadataKey</var> and property key <var>P</var>, the following steps are taken:</p>\n      <emu-alg><ol>\n  <li>Return <a href=\"#ao-OrdinaryHasMetadata\">OrdinaryHasMetadata</a>(<var>MetadataKey</var>, <var>O</var>, <var>P</var>).</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"ordinaryhasmetadata\">\n      <h1><span class=\"secnum\">4.2.4</span>OrdinaryHasMetadata ( MetadataKey, O, P )</h1>\n      <p>When the abstract operation OrdinaryHasMetadata is called with ECMAScript language value <var>MetadataKey</var>, Object <var>O</var>, and property key <var>P</var>, the following steps are taken:</p>\n      <emu-alg aoid=\"OrdinaryHasMetadata\" id=\"ao-OrdinaryHasMetadata\"><ol>\n  <li>Assert: <var>P</var> is <emu-val>undefined</emu-val> or <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey\">IsPropertyKey</a>(<var>P</var>) is <emu-val>true</emu-val>.</li>\n  <li>Let <var>hasOwn</var> be <a href=\"#ao-OrdinaryHasOwnMetadata\">OrdinaryHasOwnMetadata</a>(<var>MetadataKey</var>, <var>O</var>, <var>P</var>).</li>\n  <li>If <var>hasOwn</var> is <emu-val>true</emu-val>, return <emu-val>true</emu-val>.</li>\n  <li>Let <var>parent</var> be <var>O</var>.[[GetPrototypeOf]]().</li>\n  <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>parent</var>).</li>\n  <li>If <var>parent</var> is not <emu-val>null</emu-val>, then\n    <ol>\n      <li>return <var>parent</var>.[[HasMetadata]](<var>MetadataKey</var>, <var>P</var>).</li>\n    </ol>\n  </li>\n  <li>Return <emu-val>false</emu-val>.</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"hasownmetadata\">\n      <h1><span class=\"secnum\">4.2.5</span>[[HasOwnMetadata]] ( MetadataKey, P )</h1>\n      <p>When the [[HasOwnMetadata]] internal method of <var>O</var> is called with ECMAScript language value <var>MetadataKey</var> and property key <var>P</var>, the following steps are taken:</p>\n      <emu-alg><ol>\n  <li>Return <a href=\"#ao-OrdinaryHasOwnMetadata\">OrdinaryHasOwnMetadata</a>(<var>MetadataKey</var>, <var>O</var>, <var>P</var>).</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"ordinaryhasownmetadata\">\n      <h1><span class=\"secnum\">4.2.6</span>OrdinaryHasOwnMetadata ( MetadataKey, O, P )</h1>\n      <p>When the abstract operation OrdinaryHasOwnMetadata is called with ECMAScript language value <var>MetadataKey</var>, Object <var>O</var>, and property key <var>P</var>, the following steps are taken:</p>\n      <emu-alg aoid=\"OrdinaryHasOwnMetadata\" id=\"ao-OrdinaryHasOwnMetadata\"><ol>\n  <li>Assert: <var>P</var> is <emu-val>undefined</emu-val> or <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey\">IsPropertyKey</a>(<var>P</var>) is <emu-val>true</emu-val>.</li>\n  <li>Let <var>metadataMap</var> be <a href=\"#ao-GetOrCreateMetadataMap\">GetOrCreateMetadataMap</a>(<var>O</var>, <var>P</var>, <emu-val>false</emu-val>).</li>\n  <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>metadataMap</var>).</li>\n  <li>If <var>metadataMap</var> is <emu-val>undefined</emu-val>, return <emu-val>false</emu-val>.</li>\n  <li>Return <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-invoke\">Invoke</a>(<var>metadataMap</var>, <code>\"has\"</code>, <var>MetadataKey</var>).</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"getmetadata\">\n      <h1><span class=\"secnum\">4.2.7</span>[[GetMetadata]] ( MetadataKey, P )</h1>\n      <p>When the [[GetMatadata]] internal method of <var>O</var> is called with ECMAScript language value <var>MetadataKey</var> and property key <var>P</var>, the following steps are taken:</p>\n      <emu-alg><ol>\n  <li>Return <a href=\"#ao-OrdinaryGetMetadata\">OrdinaryGetMetadata</a>(<var>MetadataKey</var>, <var>O</var>, <var>P</var>).</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"ordinarygetmetadata\">\n      <h1><span class=\"secnum\">4.2.8</span>OrdinaryGetMetadata ( MetadataKey, O, P )</h1>\n      <p>When the abstract operation OrdinaryGetMetadata is called with ECMAScript language value <var>MetadataKey</var>, Object <var>O</var>, and property key <var>P</var>, the following steps are taken:</p>\n      <emu-alg aoid=\"OrdinaryGetMetadata\" id=\"ao-OrdinaryGetMetadata\"><ol>\n  <li>Assert: <var>P</var> is <emu-val>undefined</emu-val> or <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey\">IsPropertyKey</a>(<var>P</var>) is <emu-val>true</emu-val>.</li>\n  <li>Let <var>hasOwn</var> be <a href=\"#ao-OrdinaryHasOwnMetadata\">OrdinaryHasOwnMetadata</a>(<var>MetadataKey</var>, <var>O</var>, <var>P</var>).</li>\n  <li>If <var>hasOwn</var> is <emu-val>true</emu-val>, then\n    <ol>\n      <li>return <a href=\"#ao-OrdinaryGetOwnMetadata\">OrdinaryGetOwnMetadata</a>(<var>MetadataKey</var>, <var>O</var>, <var>P</var>).</li>\n    </ol>\n  </li>\n  <li>Let <var>parent</var> be <var>O</var>.[[GetPrototypeOf]]().</li>\n  <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>parent</var>).</li>\n  <li>If <var>parent</var> is not <emu-val>null</emu-val>, then\n    <ol>\n      <li>return <var>parent</var>.[[GetMetadata]](<var>MetadataKey</var>, <var>P</var>).</li>\n    </ol>\n  </li>\n  <li>Return <emu-val>undefined</emu-val>.</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"getownmetadata\">\n      <h1><span class=\"secnum\">4.2.9</span>[[GetOwnMetadata]] ( MetadataKey, P, ParamIndex )</h1>\n      <p>When the [[GetOwnMetadata]] internal method of <var>O</var> is called with ECMAScript language value <var>MetadataKey</var> and property key <var>P</var>, the following steps are taken:</p>\n      <emu-alg><ol>\n  <li>Return <a href=\"#ao-OrdinaryGetOwnMetadata\">OrdinaryGetOwnMetadata</a>(<var>MetadataKey</var>, <var>O</var>, <var>P</var>).</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"ordinarygetownmetadata\">\n      <h1><span class=\"secnum\">4.2.10</span>OrdinaryGetOwnMetadata ( MetadataKey, O, P )</h1>\n      <p>When the abstract operation OrdinaryGetOwnMetadata is called with ECMAScript language value <var>MetadataKey</var>, Object <var>O</var>, and property key <var>P</var>, the following steps are taken:</p>\n      <emu-alg aoid=\"OrdinaryGetOwnMetadata\" id=\"ao-OrdinaryGetOwnMetadata\"><ol>\n  <li>Assert: <var>P</var> is <emu-val>undefined</emu-val> or <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey\">IsPropertyKey</a>(<var>P</var>) is <emu-val>true</emu-val>.</li>\n  <li>Let <var>metadataMap</var> be <a href=\"#ao-GetOrCreateMetadataMap\">GetOrCreateMetadataMap</a>(<var>O</var>, <var>P</var>, <emu-val>false</emu-val>).</li>\n  <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>metadataMap</var>).</li>\n  <li>If <var>metadataMap</var> is <emu-val>undefined</emu-val>, return <emu-val>undefined</emu-val>.</li>\n  <li>Return <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-invoke\">Invoke</a>(<var>metadataMap</var>, <code>\"get\"</code>, <var>MetadataKey</var>).</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"defineownmetadata\">\n      <h1><span class=\"secnum\">4.2.11</span>[[DefineOwnMetadata]] ( MetadataKey, MetadataValue, P )</h1>\n      <p>When the [[DefineOwnMetadata]] internal method of <var>O</var> is called with ECMAScript language value <var>MetadataKey</var>, ECMAScript language value <var>MetadataValue</var>, and property key <var>P</var>, the following steps are taken:</p>\n      <emu-alg><ol>\n  <li>Return <a href=\"#ao-OrdinaryDefineOwnMetadata\">OrdinaryDefineOwnMetadata</a>(<var>MetadataKey</var>, <var>MetadataValue</var>, <var>O</var>, <var>P</var>)</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"ordinarydefineownmetadata\">\n      <h1><span class=\"secnum\">4.2.12</span>OrdinaryDefineOwnMetadata ( MetadataKey, MetadataValue, O, P )</h1>\n      <p>When the abstract operation OrdinaryDefineOwnProperty is called with ECMAScript language value <var>MetadataKey</var>, ECMAScript language value <var>MetadataValue</var>, Object <var>O</var>, and property key <var>P</var>, the following steps are taken:</p>\n      <emu-alg aoid=\"OrdinaryDefineOwnMetadata\" id=\"ao-OrdinaryDefineOwnMetadata\"><ol>\n  <li>Assert: <var>P</var> is <emu-val>undefined</emu-val> or <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey\">IsPropertyKey</a>(<var>P</var>) is <emu-val>true</emu-val>.</li>\n  <li>Let <var>metadataMap</var> be <a href=\"#ao-GetOrCreateMetadataMap\">GetOrCreateMetadataMap</a>(<var>O</var>, <var>P</var>, <emu-val>true</emu-val>).</li>\n  <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>metadataMap</var>).</li>\n  <li>Return <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-invoke\">Invoke</a>(<var>metadataMap</var>, <code>\"set\"</code>, <var>MetadataKey</var>, <var>MetadataValue</var>).</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"metadatakeys\">\n      <h1><span class=\"secnum\">4.2.13</span>[[MetadataKeys]] ( P )</h1>\n      <p>When the [[MetadataKeys]] internal method of <var>O</var> is called with property key <var>P</var> the following steps are taken:</p>\n      <emu-alg><ol>\n  <li>Return <a href=\"#ao-OrdinaryMetadataKeys\">OrdinaryMetadataKeys</a>(<var>O</var>, <var>P</var>).</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"ordinarymetadatakeys\">\n      <h1><span class=\"secnum\">4.2.14</span>OrdinaryMetadataKeys ( O, P )</h1>\n      <p>When the abstract operation OrdinaryMetadataKeys is called with Object <var>O</var> and property key <var>P</var> the following steps are taken:</p>\n      <emu-alg aoid=\"OrdinaryMetadataKeys\" id=\"ao-OrdinaryMetadataKeys\"><ol>\n  <li>Assert: <var>P</var> is <emu-val>undefined</emu-val> or <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey\">IsPropertyKey</a>(<var>P</var>) is <emu-val>true</emu-val>.</li>\n  <li>Let <var>ownKeys</var> be <a href=\"#ao-OrdinaryOwnMetadataKeys\">OrdinaryOwnMetadataKeys</a>(<var>O</var>, <var>P</var>).</li>\n  <li>Let <var>parent</var> = <var>O</var>.[[GetPrototypeOf]]().</li>\n  <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>parent</var>).</li>\n  <li>If <var>parent</var> is <emu-val>null</emu-val>, then return <var>ownKeys</var>.</li>\n  <li>Let <var>parentKeys</var> be <var>O</var>.[[OrdinaryMetadataKeys]](<var>P</var>).</li>\n  <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>parentKeys</var>).</li>\n  <li>Let <var>ownKeysLen</var> = <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-o-p\">Get</a>(<var>ownKeys</var>, <code>\"length\"</code>).</li>\n  <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>ownKeysLen</var>).</li>\n  <li>If <var>ownKeysLen</var> is 0, return <var>parentKeys</var>.</li>\n  <li>Let <var>parentKeysLen</var> = <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-o-p\">Get</a>(<var>parentKeys</var>, <code>\"length\"</code>).</li>\n  <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>parentKeysLen</var>).</li>\n  <li>If <var>parentKeysLen</var> is 0, return <var>ownKeys</var>.</li>\n  <li>Let <var>set</var> be a newly created <emu-val>Set</emu-val> object.</li>\n  <li>Let <var>keys</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-arraycreate\">ArrayCreate</a>(0).</li>\n  <li>Let <var>k</var> be 0.</li>\n  <li>For each element <var>key</var> of <var>ownKeys</var>\n    <ol>\n      <li>Let <var>hasKey</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-invoke\">Invoke</a>(<var>set</var>, <code>\"has\"</code>, <var>key</var>).</li>\n      <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>hasKey</var>).</li>\n      <li>If <var>hasKey</var> is <emu-val>false</emu-val>, then\n        <ol>\n          <li>Let <var>Pk</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring\">ToString</a>(<var>k</var>).</li>\n          <li>Let <var>addStatus</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-invoke\">Invoke</a>(<var>set</var>, <code>\"add\"</code>, <var>key</var>).</li>\n          <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>addStatus</var>).</li>\n          <li>Let <var>defineStatus</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-createdatapropertyorthrow\">CreateDataPropertyOrThrow</a>(<var>keys</var>, <var>Pk</var>, <var>key</var>).</li>\n          <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>defineStatus</var>).</li>\n          <li>Increase <var>k</var> by 1.</li>\n        </ol>\n      </li>\n    </ol>\n  </li>\n  <li>For each element <var>key</var> of <var>parentKeys</var>\n    <ol>\n      <li>Let <var>hasKey</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-invoke\">Invoke</a>(<var>set</var>, <code>\"has\"</code>, <var>key</var>).</li>\n      <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>hasKey</var>).</li>\n      <li>If <var>hasKey</var> is <emu-val>false</emu-val>, then\n        <ol>\n          <li>Let <var>Pk</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring\">ToString</a>(<var>k</var>).</li>\n          <li>Let <var>addStatus</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-invoke\">Invoke</a>(<var>set</var>, <code>\"add\"</code>, <var>key</var>).</li>\n          <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>addStatus</var>).</li>\n          <li>Let <var>defineStatus</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-createdatapropertyorthrow\">CreateDataPropertyOrThrow</a>(<var>keys</var>, <var>Pk</var>, <var>key</var>).</li>\n          <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>defineStatus</var>).</li>\n          <li>Increase <var>k</var> by 1.</li>\n        </ol>\n      </li>\n    </ol>\n  </li>\n  <li>Let <var>setStatus</var> be Set(<var>keys</var>, <code>\"length\"</code>, <var>k</var>).</li>\n  <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>setStatus</var>).</li>\n  <li>return <var>keys</var>.</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"ownmetadatakeys\">\n      <h1><span class=\"secnum\">4.2.15</span>[[OwnMetadataKeys]] ( P )</h1>\n      <p>When the [[OwnMetadataKeys]] internal method of <var>O</var> is called with property key <var>P</var> the following steps are taken:</p>\n      <emu-alg><ol>\n  <li>Return <a href=\"#ao-OrdinaryOwnMetadataKeys\">OrdinaryOwnMetadataKeys</a>(<var>O</var>, <var>P</var>).</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"ordinaryownmetadatakeys\">\n      <h1><span class=\"secnum\">4.2.16</span>OrdinaryOwnMetadataKeys ( O, P )</h1>\n      <p>When the abstract operation OrdinaryOwnMetadataKeys is called with Object <var>O</var> and property key <var>P</var> the following steps are taken:</p>\n      <emu-alg aoid=\"OrdinaryOwnMetadataKeys\" id=\"ao-OrdinaryOwnMetadataKeys\"><ol>\n  <li>Assert: <var>P</var> is <emu-val>undefined</emu-val> or <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey\">IsPropertyKey</a>(<var>P</var>) is <emu-val>true</emu-val>.</li>\n  <li>Let <var>keys</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-arraycreate\">ArrayCreate</a>(0).</li>\n  <li>Let <var>metadataMap</var> be <a href=\"#ao-GetOrCreateMetadataMap\">GetOrCreateMetadataMap</a>(<var>O</var>, <var>P</var>, <emu-val>false</emu-val>).</li>\n  <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>metadataMap</var>).</li>\n  <li>If <var>metadataMap</var> is <emu-val>undefined</emu-val>, return <var>keys</var>.</li>\n  <li>Let <var>keysObj</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-invoke\">Invoke</a>(<var>metadataMap</var>, <code>\"keys\"</code>).</li>\n  <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>keysObj</var>).</li>\n  <li>Let <var>iterator</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-getiterator\">GetIterator</a>(<var>keysObj</var>).</li>\n  <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>iterator</var>).</li>\n  <li>Let <var>k</var> be 0.</li>\n  <li>Repeat\n    <ol>\n      <li>Let <var>Pk</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring\">ToString</a>(k).</li>\n      <li>Let <var>next</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iteratorstep\">IteratorStep</a>(<var>iterator</var>).</li>\n      <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>next</var>).</li>\n      <li>If <var>next</var> is <emu-val>false</emu-val>, then\n        <ol>\n          <li>Let <var>setStatus</var> be Set(<var>keys</var>, <code>\"length\"</code>, <var>k</var>, <var>true</var>).</li>\n          <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>setStatus</var>).</li>\n          <li>Return <var>keys</var>.</li>\n        </ol>\n      </li>\n      <li>Let <var>nextValue</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iteratorvalue\">IteratorValue</a>(<var>next</var>).</li>\n      <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>nextValue</var>).</li>\n      <li>Let <var>defineStatus</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-createdatapropertyorthrow\">CreateDataPropertyOrThrow</a>(<var>keys</var>, <var>Pk</var>, <var>nextValue</var>).</li>\n      <li>If <var>defineStatus</var> is an abrupt completion, return <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iteratorclose\">IteratorClose</a>(<var>iterator</var>, <var>defineStatus</var>).</li>\n      <li>Increase <var>k</var> by 1.</li>\n    </ol>\n  </li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"deletemetadata\">\n      <h1><span class=\"secnum\">4.2.17</span>[[DeleteMetadata]]( MetadataKey, P )</h1>\n      <p>When the [[DeleteMetadata]] internal method of <var>O</var> is called with ECMAScript language value <var>MetadataKey</var> and property key <var>P</var> the following steps are taken:</p>\n      <emu-alg><ol>\n  <li>Assert: <var>P</var> is <emu-val>undefined</emu-val> or <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey\">IsPropertyKey</a>(<var>P</var>) is <emu-val>true</emu-val>.</li>\n  <li>Let <var>metadataMap</var> be <a href=\"#ao-GetOrCreateMetadataMap\">GetOrCreateMetadataMap</a>(<var>O</var>, <var>P</var>, <emu-val>false</emu-val>).</li>\n  <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>metadataMap</var>).</li>\n  <li>If <var>metadataMap</var> is <emu-val>undefined</emu-val>, return <emu-val>false</emu-val>.</li>\n  <li>Return <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-invoke\">Invoke</a>(<var>metadataMap</var>, <code>\"delete\"</code>, <var>MetadataKey</var>).</li>\n</ol></emu-alg>\n    </emu-clause>  \n  </emu-clause>\n</emu-clause>\n\n<emu-clause id=\"reflection\">\n  <h1><span class=\"secnum\">5</span>Reflection</h1>\n  <emu-clause id=\"reflect\">\n    <h1><span class=\"secnum\">5.1</span>The Reflect Object</h1>\n    <p>This section contains amendments to the Reflect object.</p>\n    <emu-note><span class=\"note\">Note</span>A shim for this API can be found here: <a href=\"https://github.com/rbuckton/ReflectDecorators\">https://github.com/rbuckton/ReflectDecorators</a></emu-note>\n    <emu-clause id=\"reflect-metadatadecoratorfunctions\">\n      <h1><span class=\"secnum\">5.1.1</span>Metadata Decorator Functions</h1>\n      <p>A metadata decorator function is an anonymous built-in function that has [[MetadataKey]] and [[MetadataValue]] internal slots.</p>\n      <p>When a metadata decorator function <var>F</var> is called with arguments <var>target</var> and <var>key</var>, the following steps are taken:</p>\n      <emu-alg><ol>\n  <li>Assert: <var>F</var> has a [[MetadataKey]] internal slot whose value is an ECMAScript language value, or <emu-val>undefined</emu-val>.</li>\n  <li>Assert: <var>F</var> has a [[MetadataValue]] internal slot whose value is an ECMAScript language value, or <emu-val>undefined</emu-val>.</li>\n  <li>If <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-data-types-and-values\">Type</a>(<var>target</var>) is not Object, throw a <emu-val>TypeError</emu-val> exception.</li>\n  <li>If <var>key</var> is not <emu-val>undefined</emu-val> and <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey\">IsPropertyKey</a>(<var>key</var>) is <emu-val>false</emu-val>, throw a <emu-val>TypeError</emu-val> exception.</li>\n  <li>Let <var>metadataKey</var> be the value of <var>F</var>'s [[MetadataKey]] internal slot.</li>\n  <li>Let <var>metadataValue</var> be the value of <var>F</var>'s [[MetadataValue]] internal slot.</li>\n  <li>Return <var>target</var>.[[DefineMetadata]](<var>metadataKey</var>, <var>metadataValue</var>, <var>target</var>, <var>key</var>).</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"reflect-decorate\">\n      <h1><span class=\"secnum\">5.1.2</span>Reflect.decorate ( decorators, target, propertyKey, attributes )</h1>\n      <p>When the <code>decorator</code> function is called with arguments <var>decorators</var>, <var>target</var>, <var>propertyKey</var>, and <var>attributes</var>, the following steps are taken:</p>\n      <emu-alg><ol>\n  <li>If <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-data-types-and-values\">Type</a>(<var>decorators</var>) is not Object, throw a <emu-val>TypeError</emu-val> exception.</li>\n  <li>If <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-data-types-and-values\">Type</a>(<var>target</var>) is not Object, throw a <emu-val>TypeError</emu-val> exception.</li>\n  <li>Let <var>key</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey\">ToPropertyKey</a>(<var>propertyKey</var>).</li>\n  <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>propertyKey</var>).</li>\n  <li>Let <var>desc</var> be <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertydescriptor\">ToPropertyDescriptor</a>(<var>attributes</var>).</li>\n  <li><a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-returnifabrupt\">ReturnIfAbrupt</a>(<var>desc</var>).</li>\n  <li>Return <a href=\"#ao-Decorate\">Decorate</a>(<var>decorators</var>, <var>target</var>, <var>propertyKey</var>, <var>desc</var>).</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"reflect-metadata\">\n      <h1><span class=\"secnum\">5.1.3</span>Reflect.metadata ( metadataKey, metadataValue )</h1>\n      <p>When the <code>metadata</code> function is called with arguments <var>metadataKey</var> and <var>metadataValue</var>, the following steps are taken:</p>\n      <emu-alg><ol>\n  <li>Let <var>decorator</var> be a new built-in function object as defined in Metadata Decorator Functions.</li>\n  <li>Set the [[MetadataKey]] internal slot of <var>decorator</var> to <var>metadataKey</var>.</li>\n  <li>Set the [[MetadataValue]] internal slot of <var>decorator</var> to <var>metadataValue</var>.</li>\n  <li>return <var>decorator</var>.</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"reflect-definemetadata\">\n      <h1><span class=\"secnum\">5.1.4</span>Reflect.defineMetadata ( metadataKey, metadataValue, target, propertyKey )</h1>\n      <p>When the <code>defineMetadata</code> function is called with arguments <var>metadataKey</var>, <var>metadataValue</var>, <var>target</var>, and <var>propertyKey</var>, the following steps are taken:</p>\n      <emu-alg><ol>\n  <li>If <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-data-types-and-values\">Type</a>(<var>target</var>) is not Object, throw a <emu-val>TypeError</emu-val> exception.</li>\n  <li>return <var>target</var>.[[DefineMetadata]](<var>metadataKey</var>, <var>metadataValue</var>, <var>propertyKey</var>).</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"reflect-hasmetadata\">\n      <h1><span class=\"secnum\">5.1.5</span>Reflect.hasMetadata ( metadataKey, target, propertyKey )</h1>\n      <p>When the <code>hasMetadata</code> function is called with arguments <var>metadataKey</var>, <var>target</var>, and <var>propertyKey</var>, the following steps are taken:</p>\n      <emu-alg><ol>\n  <li>If <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-data-types-and-values\">Type</a>(<var>target</var>) is not Object, throw a <emu-val>TypeError</emu-val> exception.</li>\n  <li>return <var>target</var>.[[HasMetadata]](<var>metadataKey</var>, <var>propertyKey</var>).</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"reflect-hasownmetadata\">\n      <h1><span class=\"secnum\">5.1.6</span>Reflect.hasOwnMetadata ( metadataKey, target, propertyKey )</h1>\n      <p>When the <code>hasOwnMetadata</code> function is called with arguments <var>metadataKey</var>, <var>target</var>, and <var>propertyKey</var>, the following steps are taken:</p>\n      <emu-alg><ol>\n  <li>If <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-data-types-and-values\">Type</a>(<var>target</var>) is not Object, throw a <emu-val>TypeError</emu-val> exception.</li>\n  <li>return <var>target</var>.[[HasOwn]](<var>metadataKey</var>, <var>propertyKey</var>).</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"reflect-getmetadata\">\n      <h1><span class=\"secnum\">5.1.7</span>Reflect.getMetadata ( metadataKey, target, propertyKey )</h1>\n      <p>When the <code>getMetadata</code> function is called with arguments <var>metadataKey</var>, <var>target</var>, and <var>propertyKey</var>, the following steps are taken:</p>\n      <emu-alg><ol>\n  <li>If <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-data-types-and-values\">Type</a>(<var>target</var>) is not Object, throw a <emu-val>TypeError</emu-val> exception.</li>\n  <li>return <var>target</var>.[[GetMetadata]](<var>metadataKey</var>, <var>propertyKey</var>).</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"reflect-getownmetadata\">\n      <h1><span class=\"secnum\">5.1.8</span>Reflect.getOwnMetadata ( metadataKey, target, propertyKey )</h1>\n      <p>When the <code>getOwnMetadata</code> function is called with arguments <var>metadataKey</var>, <var>target</var>, and <var>propertyKey</var>, the following steps are taken:</p>\n      <emu-alg><ol>\n  <li>If <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-data-types-and-values\">Type</a>(<var>target</var>) is not Object, throw a <emu-val>TypeError</emu-val> exception.</li>\n  <li>return <var>target</var>.[[GetOwnMetadata]](<var>metadataKey</var>, <var>propertyKey</var>).</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"reflect-getmetadatakeys\">\n      <h1><span class=\"secnum\">5.1.9</span>Reflect.getMetadataKeys ( target, propertyKey )</h1>\n      <p>When the <code>getMetadataKeys</code> function is called with arguments <var>target</var> and <var>propertyKey</var>, the following steps are taken:</p>\n      <emu-alg><ol>\n  <li>If <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-data-types-and-values\">Type</a>(<var>target</var>) is not Object, throw a <emu-val>TypeError</emu-val> exception.</li>\n  <li>return <var>target</var>.[[GetMetadataKeys]](<var>propertyKey</var>).</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"reflect-getownmetadata\">\n      <h1><span class=\"secnum\">5.1.10</span>Reflect.getOwnMetadataKeys ( target, propertyKey )</h1>\n      <p>When the <code>getOwnMetadataKeys</code> function is called with arguments <var>target</var> and <var>propertyKey</var>, the following steps are taken:</p>\n      <emu-alg><ol>\n  <li>If <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-data-types-and-values\">Type</a>(<var>target</var>) is not Object, throw a <emu-val>TypeError</emu-val> exception.</li>\n  <li>return <var>target</var>.[[GetOwnMetadataKeys]](<var>propertyKey</var>).</li>\n</ol></emu-alg>\n    </emu-clause>\n    <emu-clause id=\"reflect-deletemetadata\">\n      <h1><span class=\"secnum\">5.1.11</span>Reflect.deleteMetadata ( metadataKey, target, propertyKey )</h1>\n      <p>When the <code>deleteMetadata</code> function is called with arguments <var>metadataKey</var>, <var>target</var>, and <var>propertyKey</var>, the following steps are taken:</p>\n      <emu-alg><ol>\n  <li>If <a href=\"https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-data-types-and-values\">Type</a>(<var>target</var>) is not Object, throw a <emu-val>TypeError</emu-val> exception.</li>\n  <li>return <var>target</var>.[[DeleteMetadata]](<var>metadataKey</var>, <var>propertyKey</var>).</li>\n</ol></emu-alg>\n    </emu-clause>\n  </emu-clause>\n</emu-clause>\n<emu-annex id=\"grammar\">\n  <h1><span class=\"secnum\">A</span>Grammar</h1>\n  <emu-annex id=\"grammar-expressions\">\n    <h1><span class=\"secnum\">A.1</span>Expressions</h1>\n    <emu-production id=\"grammar-memberexpression\" name=\"MemberExpression\" params=\"Yield, Decorator\">\n      <emu-nt>MemberExpression<emu-mods> [Yield, Decorator]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield\">PrimaryExpression<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs constraints=\"~Decorator\"><emu-constraints>[~Decorator]</emu-constraints><emu-nt params=\"?Yield, ?Decorator\">MemberExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt><emu-t>[</emu-t><emu-nt params=\"In, ?Yield\">Expression<emu-mods> [In, ?Yield]</emu-mods></emu-nt><emu-t>]</emu-t></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">MemberExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt><emu-t>.</emu-t><emu-nt>IdentifierName<emu-mods></emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">MemberExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt><emu-nt params=\"?Yield\">TemplateLiteral<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">SuperProperty<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt>MetaProperty<emu-mods></emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-t>new</emu-t><emu-nt params=\"?Yield, ?Decorator\">MemberExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt><emu-nt params=\"?Yield\">Arguments<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-superproperty\" name=\"SuperProperty\" params=\"Yield, Decorator\">\n      <emu-nt>SuperProperty<emu-mods> [Yield, Decorator]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs constraints=\"~Decorator\"><emu-constraints>[~Decorator]</emu-constraints><emu-t>super</emu-t><emu-t>[</emu-t><emu-nt params=\"In, ?Yield\">Expression<emu-mods> [In, ?Yield]</emu-mods></emu-nt><emu-t>]</emu-t></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-newexpression\" name=\"NewExpression\" params=\"Yield, Decorator\">\n      <emu-nt>NewExpression<emu-mods> [Yield, Decorator]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield, ?Decorator\">MemberExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-t>new</emu-t><emu-nt params=\"?Yield, ?Decorator\">NewExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-callexpression\" name=\"CallExpression\" params=\"Yield, Decorator\">\n      <emu-nt>CallExpression<emu-mods> [Yield, Decorator]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield, ?Decorator\">MemberExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt><emu-nt params=\"?Yield\">Arguments<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield\">SuperCall<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">CallExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt><emu-nt params=\"?Yield\">Arguments<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs constraints=\"~Decorator\"><emu-constraints>[~Decorator]</emu-constraints><emu-nt params=\"?Yield\">CallExpression<emu-mods> [?Yield]</emu-mods></emu-nt><emu-t>[</emu-t><emu-nt params=\"In, ?Yield\">Expression<emu-mods> [In, ?Yield]</emu-mods></emu-nt><emu-t>]</emu-t></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">CallExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt><emu-t>.</emu-t><emu-nt>IdentifierName<emu-mods></emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">CallExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt><emu-nt params=\"?Yield\">TemplateLiteral<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>      \n    </emu-production>\n    <emu-production id=\"grammar-lefthandsideexpression\" name=\"LeftHandSideExpression\" params=\"Yield, Decorator\">\n      <emu-nt>LeftHandSideExpression<emu-mods> [Yield, Decorator]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield, ?Decorator\">NewExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">CallExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n  </emu-annex>\n\n  <emu-annex id=\"functions-and-classes\">\n    <h1><span class=\"secnum\">A.2</span>Functions and Classes</h1>\n    <emu-production id=\"grammar-classdeclaration\" name=\"ClassDeclaration\" params=\"Yield, Default\">\n      <emu-nt>ClassDeclaration<emu-mods> [Yield, Default]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield\" optional=\"\">DecoratorList<emu-mods> [?Yield] opt</emu-mods></emu-nt><emu-t>class</emu-t><emu-nt params=\"?Yield\">BindingIdentifier<emu-mods> [?Yield]</emu-mods></emu-nt><emu-nt params=\"?Yield\">ClassTail<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs constraints=\"+Default\"><emu-constraints>[+Default]</emu-constraints><emu-nt params=\"?Yield\" optional=\"\">DecoratorList<emu-mods> [?Yield] opt</emu-mods></emu-nt><emu-t>class</emu-t><emu-nt params=\"?Yield\">ClassTail<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-classexpression\" name=\"ClassExpression\" params=\"Yield, GeneratorParameter\">\n      <emu-nt>ClassExpression<emu-mods> [Yield, GeneratorParameter]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield\" optional=\"\">DecoratorList<emu-mods> [?Yield] opt</emu-mods></emu-nt><emu-t>class</emu-t><emu-nt params=\"?Yield\" optional=\"\">BindingIdentifier<emu-mods> [?Yield] opt</emu-mods></emu-nt><emu-nt params=\"?Yield, ?GeneratorParameter\">ClassTail<emu-mods> [?Yield, ?GeneratorParameter]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-classelement\" name=\"ClassElement\" params=\"Yield\">\n      <emu-nt>ClassElement<emu-mods> [Yield]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield\" optional=\"\">DecoratorList<emu-mods> [?Yield] opt</emu-mods></emu-nt><emu-nt params=\"?Yield\">MethodDefinition<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield\" optional=\"\">DecoratorList<emu-mods> [?Yield] opt</emu-mods></emu-nt><emu-t>static</emu-t><emu-nt params=\"?Yield\">MethodDefinition<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-t>;</emu-t></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-decoratorlist\" name=\"DecoratorList\" params=\"Yield\">\n      <emu-nt>DecoratorList<emu-mods> [Yield]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield\" optional=\"\">DecoratorList<emu-mods> [?Yield] opt</emu-mods></emu-nt><emu-nt params=\"?Yield\">Decorator<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-decorator\" name=\"Decorator\" params=\"Yield\">\n      <emu-nt>Decorator<emu-mods> [Yield]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-t>@</emu-t><emu-nt params=\"Decorator, ?Yield\">LeftHandSideExpression<emu-mods> [Decorator, ?Yield]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n  </emu-annex>\n\n  <emu-annex id=\"scripts-and-modules\">\n    <h1><span class=\"secnum\">A.3</span>Scripts and Modules</h1>\n    <emu-production id=\"grammar-exportdeclaration\" name=\"ExportDeclaration\">\n      <emu-nt>ExportDeclaration<emu-mods></emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-t>export</emu-t><emu-t>*</emu-t><emu-nt>FromClause<emu-mods></emu-mods></emu-nt><emu-t>;</emu-t></emu-rhs>\n      <emu-rhs><emu-t>export</emu-t><emu-nt>ExportClause<emu-mods></emu-mods></emu-nt><emu-nt>FromClause<emu-mods></emu-mods></emu-nt><emu-t>;</emu-t></emu-rhs>\n      <emu-rhs><emu-t>export</emu-t><emu-nt>ExportClause<emu-mods></emu-mods></emu-nt><emu-t>;</emu-t></emu-rhs>\n      <emu-rhs><emu-t>export</emu-t><emu-nt>VariableStatement<emu-mods></emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-t>export</emu-t><emu-gann>[lookahead ≠ <emu-t>@</emu-t>]</emu-gann><emu-nt>Declaration<emu-mods></emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-t>export</emu-t><emu-t>default</emu-t><emu-nt params=\"Default\">HoistableDeclaration<emu-mods> [Default]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-t>export</emu-t><emu-t>default</emu-t><emu-gann>[lookahead ≠ <emu-t>@</emu-t>]</emu-gann><emu-nt params=\"Default\">ClassDeclaration<emu-mods> [Default]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-t>export</emu-t><emu-t>default</emu-t><emu-gann>[lookahead ∉ { <emu-t>function</emu-t>, <emu-t>class</emu-t>, <emu-t>@</emu-t> }]</emu-gann><emu-nt>AssignmentExpression<emu-mods></emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt>DecoratorList<emu-mods></emu-mods></emu-nt><emu-t>export</emu-t><emu-gann>[lookahead ≠ <emu-t>@</emu-t>]</emu-gann><emu-nt>ClassDeclaration<emu-mods></emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt>DecoratorList<emu-mods></emu-mods></emu-nt><emu-t>export</emu-t><emu-t>default</emu-t><emu-gann>[lookahead ≠ <emu-t>@</emu-t>]</emu-gann><emu-nt params=\"Default\">ClassDeclaration<emu-mods> [Default]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n  </emu-annex>\n</emu-annex></body>";

/***/ },
/* 676 */
/***/ function(module, exports) {

	module.exports = "<meta charset=\"utf8\">\r\n<title>Decorators</title>\r\n<link rel=\"stylesheet\" href=\"./css/elements.css\"> \r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/styles/github.min.css\"> \r\n<emu-biblio href=\"./biblio.json\"></emu-biblio> \r\n\r\n<h1>Decorators Proposal - ECMAScript</h1>\r\n<emu-intro id=\"introduction\">\r\n  <h1>Introduction</h1>\r\n  <p>Proposal to add Decorators to ECMAScript.</p>\r\n  <p>For the TypeScript specific proposal, see <a href=\"typescript.html\">http://rbuckton.github.io/reflectdecorators/typescript.html</a></p>\r\n</emu-intro>\r\n\r\n<emu-clause id=\"proposal-terms\">\r\n  <h1>Terms</h1>\r\n  <emu-clause id=\"proposal-terms-decorator\">\r\n    <h1>Decorator</h1>\r\n    <emu-note>This section is non-normative.</emu-note>\r\n    <p>A <em>decorator</em> is an expression that is evaluated after a class has been defined, that can be used to annotate or modify the class in some fashion. This expression must evaluate to a <code>function</code>, which is executed by the runtime to apply the decoration.</p>\r\n    <pre><code class=\"javascript\">@decoratorExpression\r\nclass C {\r\n}\r\n</code></pre>\r\n  </emu-clause>\r\n  <emu-clause id=\"proposal-terms-classdecoratorfunction\">\r\n    <h1>Class Decorator Function</h1>\r\n    <emu-note>This section is non-normative.</emu-note>\r\n    <p>A <em>class decorator function</em> is a function that accepts a constructor function as its argument, and returns either <code>undefined</code>, the provided constructor function, or a new constructor function. Returning <code>undefined</code> is equivalent to returning the provided constructor function.</p>\r\n    <pre><code class=\"javascript\">// A class decorator function\r\nfunction dec(target) {  \r\n // modify, annotate, or replace target...\r\n}\r\n</code></pre>\r\n  </emu-clause>\r\n  <emu-clause id=\"proposal-terms-propertydecoratorfunction\">\r\n    <h1>Property/Method Decorator Function</h1>\r\n    <emu-note>This section is non-normative.</emu-note>\r\n    <p>A <em>property decorator function</em> is a function that accepts three arguments: The object that owns the property, the key for the property (a <code>string</code> or a <code>symbol</code>), and optionally the property descriptor of the property. The function must return either <code>undefined</code>, the provided property descriptor, or a new property descriptor. Returning <code>undefined</code> is equivalent to returning the provided property descriptor.</p>\r\n    <pre><code class=\"javascript\">// A property (or method/accessor) decorator function\r\nfunction dec(target, key, descriptor) {\r\n  // annotate the target and key; or modify or replace the descriptor...\r\n}\r\n    </code></pre>\r\n  </emu-clause>\r\n  <emu-clause id=\"proposal-terms-decoratorfactory\">\r\n    <h1>Decorator Factory</h1>\r\n    <emu-note>This section is non-normative.</emu-note>\r\n    <p>A <em>decorator factory</em> is a function that can accept any number of arguments, and must return one of the above types of decorator function.</p>\r\n    <pre><code class=\"javascript\">// a class decorator factory function\r\nfunction dec(x, y) {\r\n  // the class decorator function\r\n  return function (target) {\r\n      // modify, annotate, or replace target...\r\n  }\r\n}\r\n</code></pre>\r\n  </emu-clause>\r\n</emu-clause>\r\n<emu-clause id=\"proposal-decoratortargets\">\r\n  <h1>Decorator Targets</h1>\r\n  <emu-note>This section is non-normative.</emu-note>\r\n  <p>A <em>decorator</em> <strong>can</strong> be legally applied to any of the following:</p>\r\n  <ul>\r\n    <li>A class declaration</li>\r\n    <li>A class property initializer (static or prototype)</li>\r\n    <li>A class method declaration (static or prototype)</li>\r\n    <li>A class get or set accessor declaration (static or prototype)</li>\r\n  </ul>\r\n  <p>Please note that a <em>decorator</em> currently <strong>cannot</strong> be legally applied to any of the following:</p>\r\n  <ul>\r\n    <li>A class constructor - This is to reduce ambiguity between where you can apply a decorator (on the class or on its constructor) and which of the above decorator function forms is called.</li>\r\n    <li>A function declaration - Decorators on a function declaration would introduce a TDZ (Temporal Dead Zone), which would make the function unreachable until its declaration is executed. This could cause confusion as an undecorated function declaration is hoisted and can be used in a statement preceeding the declaration.</li>\r\n    <li>A function expression - This is to reduce confusion and maintain parity with disallowing decorators on a function declaration.</li>\r\n    <li>An arrow function - This is to reduce confusion and maintain parity with disallowing decorators on a function expression.</li>\r\n  </ul>\r\n  <p>This list may change in the future.</p>\r\n</emu-clause>\r\n<emu-clause id=\"proposal-decoratoreval\">\r\n  <h1>Decorator Evaluation and Application Order</h1>\r\n  <emu-note>This section is non-normative.</emu-note>\r\n  <p>Decorators are <em>evaluated</em> in the order they appear preceeding their target declaration, to preserve side-effects due to evaluation order. Decorators are <em>applied</em> to their target declaration in reverse order, starting with the decorator closest to the declaration. This behavior is specified to preserve the expected behavior of decorators without a declarative syntax.</p>\r\n  <pre><code class=\"javascript\">@F\r\n@G\r\nclass C {   \r\n}\r\n</code></pre>\r\n  <p>For example, the above listing could be approximately written without decorators in the following fashion:</p>\r\n  <pre><code class=\"javascript\">C = F(G(C))</code></pre>\r\n  <p>In the above example, the expression <code>F</code> is evaluated first, followed by the expression <code>G</code>. <code>G</code> is then called with the constructor function as its argument, followed by calling <code>F</code> with the result. The actual process of applying decorators is more complex than the above example however, though you may still imperatively apply decorators with a reflection API.</p>\r\n  <p>If a class declaration has decorators on both the class and any of its members or parameters, the decorators are applied using the following pseudocode:</p>\r\n  <pre>\r\nfor each member M of class C\r\n  if M is an accessor then\r\n      let accessor = first accessor (get or set, in declaration order) of M\r\n      let memberDecorators = decorators of accessor\r\n      for each parameter of accessor\r\n          let paramDecorators = decorators of parameter           \r\n          let paramIndex = ordinal index of parameter\r\n          Reflect.decorate(paramDecorators, accessor, paramIndex)\r\n      next parameter\r\n\r\n      let accessor = second accessor (get or set, in declaration order) of M\r\n      if accessor then\r\n          let memberDecorators = memberDecorators + decorators of accessor\r\n          for each parameter of accessor\r\n              let paramDecorators = decorators of parameter           \r\n              let paramIndex = ordinal index of parameter\r\n              Reflect.decorate(paramDecorators, accessor, paramIndex)\r\n          next parameter\r\n      end if\r\n  else if M is a method\r\n      let memberDecorators = decorators of M\r\n      for each parameter of M\r\n          let paramDecorators = decorators of parameter           \r\n          let paramIndex = ordinal index of parameter\r\n          Reflect.decorate(paramDecorators, M, paramIndex)\r\n      next parameter\r\n  else\r\n      let memberDecorators = decorators of M\r\n  end if\r\n\r\n  let name = name of M\r\n  let target = C.prototype if M is on the prototype; otherwise, C if M is static  \r\n  Reflect.decorate(memberDecorators, C, name)\r\nnext member\r\n\r\nfor each parameter of C\r\n  let paramDecorators = decorators of parameter\r\n  let paramIndex = ordinal index of parameter\r\n  Reflect.decorate(paramDecorators, C, paramIndex)\r\nnext parameter\r\n\r\nlet classDecorators = decorators of C\r\nlet C = Reflect.decorate(classDecorators, C)\r\n  </pre>\r\n</emu-clause>\r\n\r\n<emu-clause id=\"operations\">\r\n  <h1>Abstract Operations</h1>\r\n  <emu-clause id=\"operations-decoration\">\r\n    <h1>Decorator Operations</h1>\r\n    <emu-clause id=\"operations-decoration-decorate\">\r\n      <h1>Decorate ( Decorators, O, P, desc )</h1>\r\n      <p>When the abstract operation Decorate is called with ECMAScript language value <var>Decorators</var>, Object <var>O</var>, property key <var>P</var>, and property descriptor <var>desc</var>, the following steps are taken:</p>\r\n      <emu-alg aoid=\"Decorate\">\r\n      1. If _P_ is *undefined* and _desc_ is *undefined*, then\r\n        1. If IsCallable(_O_) is not *true*, throw a *TypeError* exception.\r\n        2. Return DecorateConstructor(_Decorators_, _O_).\r\n      2. Else \r\n        1. Return DecorateProperty(_Decorators_, _O_, _P_, _desc_).\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"operations-decoration-decorateconstructor\">\r\n      <h1>DecorateConstructor ( Decorators, F )</h1>\r\n      <p>When the abstract operation DecorateConstructor is called with ECMAScript language value <var>Decorators</var> and Object <var>F</var>, the following steps are taken:</p>\r\n      <emu-alg aoid=\"DecorateConstructor\">\r\n      1. Let _result_ be _F_.\r\n      2. Let _iterator_ be GetIterator(_Decorators_).      \r\n      3. Let _list_ be CreateListFromIterator(_iterator_, «Object»).\r\n      4. For each _decorator_ in _list_ in reverse order\r\n        1. Let _decorated_ be Call(_decorator_, *null*, _result_).\r\n        2. ReturnIfAbrupt(_decorated_).\r\n        3. If IsCallable(_decorated_), then\r\n          1. Set _result_ to be _decorated_.\r\n        4. Else if _decorated_ is not *undefined*, throw a *TypeError* exception.\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"operations-decoration-decorateproperty\">\r\n      <h1>DecorateProperty ( Decorators, O, P, desc )</h1>\r\n      <p>When the abstract operation DecorateProperty is called with ECMAScript language value <var>Decorators</var>, Object <var>O</var>, property key <var>P</var>, and property descriptor <var>desc</var>, the following steps are taken:</p>\r\n      <emu-alg aoid=\"DecorateProperty\">\r\n      1. Let _result_ be _desc_.\r\n      2. Let _key_ be ToPropertyKey(_P_).\r\n      3. Let _iterator_ be GetIterator(_Decorators_).      \r\n      4. Let _list_ be CreateListFromIterator(_iterator_, «Object»).\r\n      5. For each _decorator_ in _list_ in reverse order\r\n        6. Let _decorated_ be Call(_decorator_, *null*, _O_, _key_, _result_).\r\n        7. ReturnIfAbrupt(_decorated_).\r\n        8. If Type(_decorated_) is Object, then\r\n          1. Set _result_ to be _decorated_.\r\n        9. Else if _decorated_ is not *undefined*, throw a *TypeError* exception.\r\n      </emu-alg>\r\n    </emu-clause>\r\n  </emu-clause>\r\n  <emu-clause id=\"operations-object\">\r\n    <h1>Operations on Objects</h1>  \r\n    <emu-clause id=\"createlistfromiterator\">\r\n      <h1>CreateListFromIterator ( iterator [, elementTypes] )</h1>\r\n      <p>When the abstract operation CreateListFromIterator is called with ECMAScript language value <var>iterator</var>, the following steps are taken:</p>\r\n      <emu-alg aoid=\"CreateListFromIterator\">\r\n      1. ReturnIfAbrupt(_iterator_).\r\n      2. If _elementTypes_ was not passed, let _elementTypes_ be (Undefined, Null, Boolean, String, Symbol, Number, Object).\r\n      3. Let _list_ be an empty List.\r\n      4. Repeat\r\n        1. Let _next_ be IteratorStep(_iterator_).\r\n        2. ReturnIfAbrupt(_next_).\r\n        3. If _next_ is *false*, return _list_.\r\n        4. Let _nextValue_ be IteratorValue(_next_).\r\n        5. ReturnIfAbrupt(_nextValue_).\r\n        6. If Type(_nextValue_) is not an element of _elementTypes_, then\r\n          1. Return IteratorClose(_iterator_, Completion{[[type]]: throw, [[value]]: a newly created *TypeError* object, [[target]: empty}).\r\n        7. Append _nextValue_ as the last element of _list_.\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"getorcreatemetadatamap\">\r\n      <h1>GetOrCreateMetadataMap ( O, P, Create )</h1>\r\n      <p>When the abstract operation GetOrCreateMetadataMap is called with Object <var>O</var>, property key <var>P</var>, and Boolean <var>Create</var> the following steps are taken:</p>\r\n      <emu-alg aoid=\"GetOrCreateMetadataMap\">\r\n      1. Assert: _P_ is *undefined* or IsPropertyKey(_P_) is *true*.\r\n      2. Let _metadataMap_ be *undefined*.\r\n      3. Let _succeeded_ be *true*.\r\n      4. Let _targetMetadata_ be the value of _O_'s [[Metadata]] internal slot.\r\n      5. If _targetMetadata_ is *undefined*, then\r\n        1. If _Create_ is *false*, return *undefined*.\r\n        2. Set _targetMetadata_ to be a newly created *Map* object.\r\n        3. Set the [[Metadata]] internal slot of _O_ to _targetMetadata_.\r\n      6. Let _metadataMap_ be Invoke(_targetMetadata_, \"get\", _P_).\r\n      7. ReturnIfAbrupt(_metadataMap_).\r\n      8. If _metadataMap_ is *undefined*, then\r\n        1. If _Create_ is *false*, return *undefined*.\r\n        2. Set _metadataMap_ to be a newly created *Map* object.\r\n        3. Let _setStatus_ be Invoke(_targetMetadata_, \"set\", _P_, _metadataMap_).\r\n        4. ReturnIfAbrupt(_setStatus_).\r\n      9. Return _metadataMap_.\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"hasmetadata\">\r\n      <h1>[[HasMetadata]] ( MetadataKey, P )</h1>\r\n      <p>When the [[HasMetadata]] internal method of _O_ is called with ECMAScript language value <var>MetadataKey</var> and property key <var>P</var>, the following steps are taken:</p>\r\n      <emu-alg>\r\n      1. Return OrdinaryHasMetadata(_MetadataKey_, _O_, _P_).\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"ordinaryhasmetadata\">\r\n      <h1>OrdinaryHasMetadata ( MetadataKey, O, P )</h1>\r\n      <p>When the abstract operation OrdinaryHasMetadata is called with ECMAScript language value <var>MetadataKey</var>, Object <var>O</var>, and property key <var>P</var>, the following steps are taken:</p>\r\n      <emu-alg aoid=\"OrdinaryHasMetadata\">\r\n      1. Assert: _P_ is *undefined* or IsPropertyKey(_P_) is *true*.\r\n      2. Let _hasOwn_ be OrdinaryHasOwnMetadata(_MetadataKey_, _O_, _P_).\r\n      3. If _hasOwn_ is *true*, return *true*.\r\n      4. Let _parent_ be _O_.[[GetPrototypeOf]]().\r\n      5. ReturnIfAbrupt(_parent_).\r\n      6. If _parent_ is not *null*, then\r\n        1. return <var>parent</var>.[[HasMetadata]](_MetadataKey_, _P_).\r\n      7. Return *false*.\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"hasownmetadata\">\r\n      <h1>[[HasOwnMetadata]] ( MetadataKey, P )</h1>\r\n      <p>When the [[HasOwnMetadata]] internal method of _O_ is called with ECMAScript language value <var>MetadataKey</var> and property key <var>P</var>, the following steps are taken:</p>\r\n      <emu-alg>\r\n      1. Return OrdinaryHasOwnMetadata(_MetadataKey_, _O_, _P_).\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"ordinaryhasownmetadata\">\r\n      <h1>OrdinaryHasOwnMetadata ( MetadataKey, O, P )</h1>\r\n      <p>When the abstract operation OrdinaryHasOwnMetadata is called with ECMAScript language value <var>MetadataKey</var>, Object <var>O</var>, and property key <var>P</var>, the following steps are taken:</p>\r\n      <emu-alg aoid=\"OrdinaryHasOwnMetadata\">\r\n      1. Assert: _P_ is *undefined* or IsPropertyKey(_P_) is *true*.\r\n      2. Let _metadataMap_ be GetOrCreateMetadataMap(_O_, _P_, *false*).\r\n      3. ReturnIfAbrupt(_metadataMap_).\r\n      4. If _metadataMap_ is *undefined*, return *false*.\r\n      5. Return Invoke(_metadataMap_, \"has\", _MetadataKey_).\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"getmetadata\">\r\n      <h1>[[GetMetadata]] ( MetadataKey, P )</h1>\r\n      <p>When the [[GetMatadata]] internal method of _O_ is called with ECMAScript language value <var>MetadataKey</var> and property key <var>P</var>, the following steps are taken:</p>\r\n      <emu-alg>\r\n      1. Return OrdinaryGetMetadata(_MetadataKey_, _O_, _P_).\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"ordinarygetmetadata\">\r\n      <h1>OrdinaryGetMetadata ( MetadataKey, O, P )</h1>\r\n      <p>When the abstract operation OrdinaryGetMetadata is called with ECMAScript language value <var>MetadataKey</var>, Object <var>O</var>, and property key <var>P</var>, the following steps are taken:</p>\r\n      <emu-alg aoid=\"OrdinaryGetMetadata\">\r\n      1. Assert: _P_ is *undefined* or IsPropertyKey(_P_) is *true*.\r\n      2. Let _hasOwn_ be OrdinaryHasOwnMetadata(_MetadataKey_, _O_, _P_).\r\n      3. If _hasOwn_ is *true*, then\r\n        1. return OrdinaryGetOwnMetadata(_MetadataKey_, _O_, _P_).\r\n      4. Let _parent_ be _O_.[[GetPrototypeOf]]().\r\n      5. ReturnIfAbrupt(_parent_).\r\n      6. If _parent_ is not *null*, then\r\n        1. return <var>parent</var>.[[GetMetadata]](_MetadataKey_, _P_).\r\n      7. Return *undefined*.\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"getownmetadata\">\r\n      <h1>[[GetOwnMetadata]] ( MetadataKey, P, ParamIndex )</h1>\r\n      <p>When the [[GetOwnMetadata]] internal method of _O_ is called with ECMAScript language value <var>MetadataKey</var> and property key <var>P</var>, the following steps are taken:</p>\r\n      <emu-alg>\r\n      1. Return OrdinaryGetOwnMetadata(_MetadataKey_, _O_, _P_).\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"ordinarygetownmetadata\">\r\n      <h1>OrdinaryGetOwnMetadata ( MetadataKey, O, P )</h1>\r\n      <p>When the abstract operation OrdinaryGetOwnMetadata is called with ECMAScript language value <var>MetadataKey</var>, Object <var>O</var>, and property key <var>P</var>, the following steps are taken:</p>\r\n      <emu-alg aoid=\"OrdinaryGetOwnMetadata\">\r\n      1. Assert: _P_ is *undefined* or IsPropertyKey(_P_) is *true*.\r\n      2. Let _metadataMap_ be GetOrCreateMetadataMap(_O_, _P_, *false*).\r\n      3. ReturnIfAbrupt(_metadataMap_).\r\n      4. If _metadataMap_ is *undefined*, return *undefined*.\r\n      5. Return Invoke(_metadataMap_, \"get\", _MetadataKey_).\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"defineownmetadata\">\r\n      <h1>[[DefineOwnMetadata]] ( MetadataKey, MetadataValue, P )</h1>\r\n      <p>When the [[DefineOwnMetadata]] internal method of _O_ is called with ECMAScript language value <var>MetadataKey</var>, ECMAScript language value <var>MetadataValue</var>, and property key <var>P</var>, the following steps are taken:</p>\r\n      <emu-alg>\r\n      1. Return OrdinaryDefineOwnMetadata(_MetadataKey_, _MetadataValue_, _O_, _P_)\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"ordinarydefineownmetadata\">\r\n      <h1>OrdinaryDefineOwnMetadata ( MetadataKey, MetadataValue, O, P )</h1>\r\n      <p>When the abstract operation OrdinaryDefineOwnProperty is called with ECMAScript language value <var>MetadataKey</var>, ECMAScript language value <var>MetadataValue</var>, Object <var>O</var>, and property key <var>P</var>, the following steps are taken:</p>\r\n      <emu-alg aoid=\"OrdinaryDefineOwnMetadata\">\r\n      1. Assert: _P_ is *undefined* or IsPropertyKey(_P_) is *true*.\r\n      2. Let _metadataMap_ be GetOrCreateMetadataMap(_O_, _P_, *true*).\r\n      3. ReturnIfAbrupt(_metadataMap_).\r\n      4. Return Invoke(_metadataMap_, \"set\", _MetadataKey_, _MetadataValue_).\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"metadatakeys\">\r\n      <h1>[[MetadataKeys]] ( P )</h1>\r\n      <p>When the [[MetadataKeys]] internal method of <var>O</var> is called with property key <var>P</var> the following steps are taken:</p>\r\n      <emu-alg>\r\n      1. Return OrdinaryMetadataKeys(_O_, _P_).\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"ordinarymetadatakeys\">\r\n      <h1>OrdinaryMetadataKeys ( O, P )</h1>\r\n      <p>When the abstract operation OrdinaryMetadataKeys is called with Object <var>O</var> and property key <var>P</var> the following steps are taken:</p>\r\n      <emu-alg aoid=\"OrdinaryMetadataKeys\">\r\n      1. Assert: _P_ is *undefined* or IsPropertyKey(_P_) is *true*.\r\n      2. Let _ownKeys_ be OrdinaryOwnMetadataKeys(_O_, _P_).\r\n      3. Let _parent_ = _O_.[[GetPrototypeOf]]().\r\n      4. ReturnIfAbrupt(_parent_).\r\n      5. If _parent_ is *null*, then return _ownKeys_.\r\n      6. Let _parentKeys_ be <var>O</var>.[[OrdinaryMetadataKeys]](_P_).\r\n      7. ReturnIfAbrupt(_parentKeys_).\r\n      8. Let _ownKeysLen_ = Get(_ownKeys_, \"length\").\r\n      9. ReturnIfAbrupt(_ownKeysLen_).\r\n      10. If _ownKeysLen_ is 0, return _parentKeys_.\r\n      11. Let _parentKeysLen_ = Get(_parentKeys_, \"length\").\r\n      12. ReturnIfAbrupt(_parentKeysLen_).\r\n      13. If _parentKeysLen_ is 0, return _ownKeys_.\r\n      14. Let _set_ be a newly created *Set* object.\r\n      15. Let _keys_ be ArrayCreate(0).\r\n      16. Let _k_ be 0.\r\n      17. For each element _key_ of _ownKeys_\r\n        1. Let _hasKey_ be Invoke(_set_, \"has\", _key_).\r\n        2. ReturnIfAbrupt(_hasKey_).\r\n        3. If _hasKey_ is *false*, then\r\n          1. Let _Pk_ be ToString(_k_).\r\n          2. Let _addStatus_ be Invoke(_set_, \"add\", _key_).\r\n          3. ReturnIfAbrupt(_addStatus_).\r\n          4. Let _defineStatus_ be CreateDataPropertyOrThrow(_keys_, _Pk_, _key_).\r\n          5. ReturnIfAbrupt(_defineStatus_).\r\n          6. Increase _k_ by 1.\r\n      18. For each element _key_ of _parentKeys_\r\n        1. Let _hasKey_ be Invoke(_set_, \"has\", _key_).\r\n        2. ReturnIfAbrupt(_hasKey_).\r\n        3. If _hasKey_ is *false*, then\r\n          1. Let _Pk_ be ToString(_k_).\r\n          2. Let _addStatus_ be Invoke(_set_, \"add\", _key_).\r\n          3. ReturnIfAbrupt(_addStatus_).\r\n          4. Let _defineStatus_ be CreateDataPropertyOrThrow(_keys_, _Pk_, _key_).\r\n          5. ReturnIfAbrupt(_defineStatus_).\r\n          6. Increase _k_ by 1.\r\n      19. Let _setStatus_ be Set(_keys_, \"length\", _k_).\r\n      20. ReturnIfAbrupt(_setStatus_).\r\n      21. return _keys_.\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"ownmetadatakeys\">\r\n      <h1>[[OwnMetadataKeys]] ( P )</h1>\r\n      <p>When the [[OwnMetadataKeys]] internal method of <var>O</var> is called with property key <var>P</var> the following steps are taken:</p>\r\n      <emu-alg>\r\n      1. Return OrdinaryOwnMetadataKeys(_O_, _P_).\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"ordinaryownmetadatakeys\">\r\n      <h1>OrdinaryOwnMetadataKeys ( O, P )</h1>\r\n      <p>When the abstract operation OrdinaryOwnMetadataKeys is called with Object <var>O</var> and property key <var>P</var> the following steps are taken:</p>\r\n      <emu-alg aoid=\"OrdinaryOwnMetadataKeys\">\r\n      1. Assert: _P_ is *undefined* or IsPropertyKey(_P_) is *true*.\r\n      2. Let _keys_ be ArrayCreate(0).\r\n      3. Let _metadataMap_ be GetOrCreateMetadataMap(_O_, _P_, *false*).\r\n      4. ReturnIfAbrupt(_metadataMap_).\r\n      5. If _metadataMap_ is *undefined*, return _keys_.\r\n      6. Let _keysObj_ be Invoke(_metadataMap_, \"keys\").\r\n      7. ReturnIfAbrupt(_keysObj_).\r\n      8. Let _iterator_ be GetIterator(_keysObj_).\r\n      9. ReturnIfAbrupt(_iterator_).\r\n      10. Let _k_ be 0.\r\n      11. Repeat\r\n        1. Let _Pk_ be ToString(k).\r\n        2. Let _next_ be IteratorStep(_iterator_).\r\n        3. ReturnIfAbrupt(_next_).\r\n        4. If _next_ is *false*, then\r\n          1. Let _setStatus_ be Set(_keys_, \"length\", _k_, _true_).\r\n          2. ReturnIfAbrupt(_setStatus_).\r\n          3. Return _keys_.\r\n        5. Let _nextValue_ be IteratorValue(_next_).\r\n        6. ReturnIfAbrupt(_nextValue_).\r\n        7. Let _defineStatus_ be CreateDataPropertyOrThrow(_keys_, _Pk_, _nextValue_).\r\n        8. If _defineStatus_ is an abrupt completion, return IteratorClose(_iterator_, _defineStatus_).\r\n        9. Increase _k_ by 1.\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"deletemetadata\">\r\n      <h1>[[DeleteMetadata]]( MetadataKey, P )</h1>\r\n      <p>When the [[DeleteMetadata]] internal method of <var>O</var> is called with ECMAScript language value <var>MetadataKey</var> and property key <var>P</var> the following steps are taken:</p>\r\n      <emu-alg>\r\n      1. Assert: _P_ is *undefined* or IsPropertyKey(_P_) is *true*.\r\n      2. Let _metadataMap_ be GetOrCreateMetadataMap(_O_, _P_, *false*).\r\n      3. ReturnIfAbrupt(_metadataMap_).\r\n      4. If _metadataMap_ is *undefined*, return *false*.\r\n      5. Return Invoke(_metadataMap_, \"delete\", _MetadataKey_).\r\n      </emu-alg>\r\n    </emu-clause>  \r\n  </emu-clause>\r\n</emu-clause>\r\n\r\n<emu-clause id=\"reflection\">\r\n  <h1>Reflection</h1>\r\n  <emu-clause id=\"reflect\">\r\n    <h1>The Reflect Object</h1>\r\n    <p>This section contains amendments to the Reflect object.</p>\r\n    <emu-note>A shim for this API can be found here: <a href=\"https://github.com/rbuckton/ReflectDecorators\">https://github.com/rbuckton/ReflectDecorators</a></emu-note>\r\n    <emu-clause id=\"reflect-metadatadecoratorfunctions\">\r\n      <h1>Metadata Decorator Functions</h1>\r\n      <p>A metadata decorator function is an anonymous built-in function that has [[MetadataKey]] and [[MetadataValue]] internal slots.</p>\r\n      <p>When a metadata decorator function <var>F</var> is called with arguments <var>target</var> and <var>key</var>, the following steps are taken:</p>\r\n      <emu-alg>\r\n      1. Assert: _F_ has a [[MetadataKey]] internal slot whose value is an ECMAScript language value, or *undefined*.\r\n      2. Assert: _F_ has a [[MetadataValue]] internal slot whose value is an ECMAScript language value, or *undefined*.\r\n      3. If Type(_target_) is not Object, throw a *TypeError* exception.\r\n      4. If _key_ is not *undefined* and IsPropertyKey(_key_) is *false*, throw a *TypeError* exception.\r\n      5. Let _metadataKey_ be the value of _F_'s [[MetadataKey]] internal slot.\r\n      6. Let _metadataValue_ be the value of _F_'s [[MetadataValue]] internal slot.\r\n      7. Return <var>target</var>.[[DefineMetadata]](_metadataKey_, _metadataValue_, _target_, _key_).\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"reflect-decorate\">\r\n      <h1>Reflect.decorate ( decorators, target, propertyKey, attributes )</h1>\r\n      <p>When the <code>decorator</code> function is called with arguments <var>decorators</var>, <var>target</var>, <var>propertyKey</var>, and <var>attributes</var>, the following steps are taken:</p>\r\n      <emu-alg>\r\n      1. If Type(_decorators_) is not Object, throw a *TypeError* exception.\r\n      2. If Type(_target_) is not Object, throw a *TypeError* exception.\r\n      3. Let _key_ be ToPropertyKey(_propertyKey_).\r\n      4. ReturnIfAbrupt(_propertyKey_).\r\n      5. Let _desc_ be ToPropertyDescriptor(_attributes_).\r\n      6. ReturnIfAbrupt(_desc_).\r\n      7. Return Decorate(_decorators_, _target_, _propertyKey_, _desc_).\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"reflect-metadata\">\r\n      <h1>Reflect.metadata ( metadataKey, metadataValue )</h1>\r\n      <p>When the <code>metadata</code> function is called with arguments <var>metadataKey</var> and <var>metadataValue</var>, the following steps are taken:</p>\r\n      <emu-alg>\r\n      1. Let _decorator_ be a new built-in function object as defined in Metadata Decorator Functions.\r\n      2. Set the [[MetadataKey]] internal slot of _decorator_ to _metadataKey_.\r\n      3. Set the [[MetadataValue]] internal slot of _decorator_ to _metadataValue_.\r\n      4. return _decorator_.\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"reflect-definemetadata\">\r\n      <h1>Reflect.defineMetadata ( metadataKey, metadataValue, target, propertyKey )</h1>\r\n      <p>When the <code>defineMetadata</code> function is called with arguments <var>metadataKey</var>, <var>metadataValue</var>, <var>target</var>, and <var>propertyKey</var>, the following steps are taken:</p>\r\n      <emu-alg>\r\n      1. If Type(_target_) is not Object, throw a *TypeError* exception.\r\n      2. return <var>target</var>.[[DefineMetadata]](_metadataKey_, _metadataValue_, _propertyKey_).\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"reflect-hasmetadata\">\r\n      <h1>Reflect.hasMetadata ( metadataKey, target, propertyKey )</h1>\r\n      <p>When the <code>hasMetadata</code> function is called with arguments <var>metadataKey</var>, <var>target</var>, and <var>propertyKey</var>, the following steps are taken:</p>\r\n      <emu-alg>\r\n      1. If Type(_target_) is not Object, throw a *TypeError* exception.\r\n      2. return <var>target</var>.[[HasMetadata]](_metadataKey_, _propertyKey_).\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"reflect-hasownmetadata\">\r\n      <h1>Reflect.hasOwnMetadata ( metadataKey, target, propertyKey )</h1>\r\n      <p>When the <code>hasOwnMetadata</code> function is called with arguments <var>metadataKey</var>, <var>target</var>, and <var>propertyKey</var>, the following steps are taken:</p>\r\n      <emu-alg>\r\n      1. If Type(_target_) is not Object, throw a *TypeError* exception.\r\n      2. return <var>target</var>.[[HasOwn]](_metadataKey_, _propertyKey_).\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"reflect-getmetadata\">\r\n      <h1>Reflect.getMetadata ( metadataKey, target, propertyKey )</h1>\r\n      <p>When the <code>getMetadata</code> function is called with arguments <var>metadataKey</var>, <var>target</var>, and <var>propertyKey</var>, the following steps are taken:</p>\r\n      <emu-alg>\r\n      1. If Type(_target_) is not Object, throw a *TypeError* exception.\r\n      2. return <var>target</var>.[[GetMetadata]](_metadataKey_, _propertyKey_).\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"reflect-getownmetadata\">\r\n      <h1>Reflect.getOwnMetadata ( metadataKey, target, propertyKey )</h1>\r\n      <p>When the <code>getOwnMetadata</code> function is called with arguments <var>metadataKey</var>, <var>target</var>, and <var>propertyKey</var>, the following steps are taken:</p>\r\n      <emu-alg>\r\n      1. If Type(_target_) is not Object, throw a *TypeError* exception.\r\n      2. return <var>target</var>.[[GetOwnMetadata]](_metadataKey_, _propertyKey_).\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"reflect-getmetadatakeys\">\r\n      <h1>Reflect.getMetadataKeys ( target, propertyKey )</h1>\r\n      <p>When the <code>getMetadataKeys</code> function is called with arguments <var>target</var> and <var>propertyKey</var>, the following steps are taken:</p>\r\n      <emu-alg>\r\n      1. If Type(_target_) is not Object, throw a *TypeError* exception.\r\n      2. return <var>target</var>.[[GetMetadataKeys]](_propertyKey_).\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"reflect-getownmetadata\">\r\n      <h1>Reflect.getOwnMetadataKeys ( target, propertyKey )</h1>\r\n      <p>When the <code>getOwnMetadataKeys</code> function is called with arguments <var>target</var> and <var>propertyKey</var>, the following steps are taken:</p>\r\n      <emu-alg>\r\n      1. If Type(_target_) is not Object, throw a *TypeError* exception.\r\n      2. return <var>target</var>.[[GetOwnMetadataKeys]](_propertyKey_).\r\n      </emu-alg>\r\n    </emu-clause>\r\n    <emu-clause id=\"reflect-deletemetadata\">\r\n      <h1>Reflect.deleteMetadata ( metadataKey, target, propertyKey )</h1>\r\n      <p>When the <code>deleteMetadata</code> function is called with arguments <var>metadataKey</var>, <var>target</var>, and <var>propertyKey</var>, the following steps are taken:</p>\r\n      <emu-alg>\r\n      1. If Type(_target_) is not Object, throw a *TypeError* exception.\r\n      2. return <var>target</var>.[[DeleteMetadata]](_metadataKey_, _propertyKey_).\r\n      </emu-alg>\r\n    </emu-clause>\r\n  </emu-clause>\r\n</emu-clause>\r\n<emu-annex id=\"grammar\">\r\n  <h1>Grammar</h1>\r\n  <emu-annex id=\"grammar-expressions\">\r\n    <h1>Expressions</h1>\r\n    <emu-production id=\"grammar-memberexpression\" name=\"MemberExpression\" params=\"Yield, Decorator\">\r\n      <emu-rhs><emu-nt params=\"?Yield\">PrimaryExpression</emu-nt></emu-rhs>\r\n      <emu-rhs constraints=\"~Decorator\"><emu-nt params=\"?Yield, ?Decorator\">MemberExpression</emu-nt><emu-t>[</emu-t><emu-nt params=\"In, ?Yield\">Expression</emu-nt><emu-t>]</emu-t></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">MemberExpression</emu-nt><emu-t>.</emu-t><emu-nt>IdentifierName</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">MemberExpression</emu-nt><emu-nt params=\"?Yield\">TemplateLiteral</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">SuperProperty</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt>MetaProperty</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-t>new</emu-t><emu-nt params=\"?Yield, ?Decorator\">MemberExpression</emu-nt><emu-nt params=\"?Yield\">Arguments</emu-nt></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-superproperty\" name=\"SuperProperty\" params=\"Yield, Decorator\">\r\n      <emu-rhs constraints=\"~Decorator\"><emu-t>super</emu-t><emu-t>[</emu-t><emu-nt params=\"In, ?Yield\">Expression</emu-nt><emu-t>]</emu-t></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-newexpression\" name=\"NewExpression\" params=\"Yield, Decorator\">\r\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">MemberExpression</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-t>new</emu-t><emu-nt params=\"?Yield, ?Decorator\">NewExpression</emu-nt></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-callexpression\" name=\"CallExpression\" params=\"Yield, Decorator\">\r\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">MemberExpression</emu-nt> <emu-nt params=\"?Yield\">Arguments</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield\">SuperCall</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">CallExpression</emu-nt> <emu-nt params=\"?Yield\">Arguments</emu-nt></emu-rhs>\r\n      <emu-rhs constraints=\"~Decorator\"><emu-nt params=\"?Yield\">CallExpression</emu-nt> <emu-t>[</emu-t> <emu-nt params=\"In, ?Yield\">Expression</emu-nt> <emu-t>]</emu-t></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">CallExpression</emu-nt> <emu-t>.</emu-t> <emu-nt>IdentifierName</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">CallExpression</emu-nt> <emu-nt params=\"?Yield\">TemplateLiteral</emu-nt></emu-rhs>      \r\n    </emu-production>\r\n    <emu-production id=\"grammar-lefthandsideexpression\" name=\"LeftHandSideExpression\" params=\"Yield, Decorator\">\r\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">NewExpression</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">CallExpression</emu-nt></emu-rhs>\r\n    </emu-production>\r\n  </emu-annex>\r\n\r\n  <emu-annex id=\"functions-and-classes\">\r\n    <h1>Functions and Classes</h1>\r\n    <emu-production id=\"grammar-classdeclaration\" name=\"ClassDeclaration\" params=\"Yield, Default\">\r\n      <emu-rhs><emu-nt params=\"?Yield\" optional>DecoratorList</emu-nt> <emu-t>class</emu-t> <emu-nt params=\"?Yield\">BindingIdentifier</emu-nt> <emu-nt params=\"?Yield\">ClassTail</emu-nt></emu-rhs>\r\n      <emu-rhs constraints=\"+Default\"><emu-nt params=\"?Yield\" optional>DecoratorList</emu-nt> <emu-t>class</emu-t> <emu-nt params=\"?Yield\">ClassTail</emu-nt></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-classexpression\" name=\"ClassExpression\" params=\"Yield, GeneratorParameter\">\r\n      <emu-rhs><emu-nt params=\"?Yield\" optional>DecoratorList</emu-nt> <emu-t>class</emu-t> <emu-nt params=\"?Yield\" optional>BindingIdentifier</emu-nt> <emu-nt params=\"?Yield, ?GeneratorParameter\">ClassTail</emu-nt></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-classelement\" name=\"ClassElement\" params=\"Yield\">\r\n      <emu-rhs><emu-nt params=\"?Yield\" optional>DecoratorList</emu-nt> <emu-nt params=\"?Yield\">MethodDefinition</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield\" optional>DecoratorList</emu-nt> <emu-t>static</emu-t> <emu-nt params=\"?Yield\">MethodDefinition</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-t>;</emu-t></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-decoratorlist\" name=\"DecoratorList\" params=\"Yield\">\r\n      <emu-rhs><emu-nt params=\"?Yield\" optional>DecoratorList</emu-nt> <emu-nt params=\"?Yield\">Decorator</emu-nt></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-decorator\" name=\"Decorator\" params=\"Yield\">\r\n      <emu-rhs><emu-t>@</emu-t> <emu-nt params=\"Decorator, ?Yield\">LeftHandSideExpression</emu-nt></emu-rhs>\r\n    </emu-production>\r\n  </emu-annex>\r\n\r\n  <emu-annex id=\"scripts-and-modules\">\r\n    <h1>Scripts and Modules</h1>\r\n    <emu-production id=\"grammar-exportdeclaration\" name=\"ExportDeclaration\">\r\n      <emu-rhs><emu-t>export</emu-t> <emu-t>*</emu-t> <emu-nt>FromClause</emu-nt> <emu-t>;</emu-t></emu-rhs>\r\n      <emu-rhs><emu-t>export</emu-t> <emu-nt>ExportClause</emu-nt> <emu-nt>FromClause</emu-nt> <emu-t>;</emu-t></emu-rhs>\r\n      <emu-rhs><emu-t>export</emu-t> <emu-nt>ExportClause</emu-nt> <emu-t>;</emu-t></emu-rhs>\r\n      <emu-rhs><emu-t>export</emu-t> <emu-nt>VariableStatement</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-t>export</emu-t> <emu-gann>lookahead ≠ <emu-t>@</emu-t></emu-gann> <emu-nt>Declaration</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-t>export</emu-t> <emu-t>default</emu-t> <emu-nt params=\"Default\">HoistableDeclaration</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-t>export</emu-t> <emu-t>default</emu-t> <emu-gann>lookahead ≠ <emu-t>@</emu-t></emu-gann> <emu-nt params=\"Default\">ClassDeclaration</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-t>export</emu-t> <emu-t>default</emu-t> <emu-gann>lookahead ∉ { <emu-t>function</emu-t>, <emu-t>class</emu-t>, <emu-t>@</emu-t> }</emu-gann> <emu-nt>AssignmentExpression</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt>DecoratorList</emu-nt> <emu-t>export</emu-t> <emu-gann>lookahead ≠ <emu-t>@</emu-t></emu-gann> <emu-nt>ClassDeclaration</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt>DecoratorList</emu-nt> <emu-t>export</emu-t> <emu-t>default</emu-t> <emu-gann>lookahead ≠ <emu-t>@</emu-t></emu-gann> <emu-nt params=\"Default\">ClassDeclaration</emu-nt></emu-rhs>\r\n    </emu-production>\r\n  </emu-annex>\r\n</emu-annex>";

/***/ },
/* 677 */
/***/ function(module, exports) {

	module.exports = "<!doctype html>\n<head><meta charset=\"utf8\">\n<title>Decorators</title>\n<link rel=\"stylesheet\" href=\"./css/elements.css\"> \n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/styles/github.min.css\"> \n</head><body><emu-biblio href=\"./biblio.json\"></emu-biblio> \n\n<h1>Decorators Proposal - TypeScript</h1>\n<div><h2>Table of Contents</h2><ol class=\"toc\"><li><a href=\"#introduction\"><span class=\"secnum\"></span> Introduction</a></li><li><a href=\"#proposal-terms\"><span class=\"secnum\">1</span> Terms</a><ol class=\"toc\"><li><a href=\"#proposal-terms-decorator\"><span class=\"secnum\">1.1</span> Decorator</a></li><li><a href=\"#proposal-terms-classdecoratorfunction\"><span class=\"secnum\">1.2</span> Class Decorator Function</a></li><li><a href=\"#proposal-terms-propertydecoratorfunction\"><span class=\"secnum\">1.3</span> Property/Method Decorator Function</a></li><li><a href=\"#proposal-terms-parameterdecoratorfunction\"><span class=\"secnum\">1.4</span> Parameter Decorator Function</a></li><li><a href=\"#proposal-terms-decoratorfactory\"><span class=\"secnum\">1.5</span> Decorator Factory</a></li></ol></li><li><a href=\"#proposal-decoratortargets\"><span class=\"secnum\">2</span> Decorator Targets</a></li><li><a href=\"#proposal-decoratoreval\"><span class=\"secnum\">3</span> Decorator Evaluation and Application Order</a></li><li><a href=\"#reflect\"><span class=\"secnum\">4</span> Reflect API</a></li><li><a href=\"#transpile\"><span class=\"secnum\">5</span> Transformation</a><ol class=\"toc\"><li><a href=\"#transpile-class\"><span class=\"secnum\">5.1</span> Class Declaration</a></li><li><a href=\"#transpile-exportclass\"><span class=\"secnum\">5.2</span> Class Declaration (Exported)</a></li><li><a href=\"#transpile-exportdefaultclass\"><span class=\"secnum\">5.3</span> Class Declaration (Default, Exported)</a></li><li><a href=\"#transpile-classmethod\"><span class=\"secnum\">5.4</span> Class Method Declaration</a></li><li><a href=\"#transpile-classaccessor\"><span class=\"secnum\">5.5</span> Class Accessor Declaration</a></li><li><a href=\"#transpile-classproperty\"><span class=\"secnum\">5.6</span> Class Property Declaration</a></li><li><a href=\"#transpile-classconstructorparameter\"><span class=\"secnum\">5.7</span> Class Constructor Parameter Declaration</a></li><li><a href=\"#transpile-classmethodparameter\"><span class=\"secnum\">5.8</span> Class Method Parameter Declaration</a></li><li><a href=\"#transpile-classaccessorparameter\"><span class=\"secnum\">5.9</span> Class Set Accessor Parameter Declaration</a></li></ol></li><li><a href=\"#grammar\"><span class=\"secnum\">A</span> Grammar</a><ol class=\"toc\"><li><a href=\"#grammar-expressions\"><span class=\"secnum\">A.1</span> Expressions</a></li><li><a href=\"#functions-and-classes\"><span class=\"secnum\">A.2</span> Functions and Classes</a></li><li><a href=\"#scripts-and-modules\"><span class=\"secnum\">A.3</span> Scripts and Modules</a></li></ol></li><li><a href=\"#typescript\"><span class=\"secnum\">B</span> TypeScript</a><ol class=\"toc\"><li><a href=\"#typescript-definitions\"><span class=\"secnum\">B.1</span> TypeScript Definitions</a></li></ol></li></ol></div><emu-intro id=\"introduction\">\n  <h1><span class=\"secnum\"></span>Introduction</h1>\n  <p>Proposal to add Decorators to TypeScript.</p>\n  <p>For the ECMAScript specific proposal, see <a href=\"index.html\">http://rbuckton.github.io/reflectdecorators/index.html</a></p>\n</emu-intro>\n\n<emu-clause id=\"proposal-terms\">\n  <h1><span class=\"secnum\">1</span>Terms</h1>\n  <emu-clause id=\"proposal-terms-decorator\">\n    <h1><span class=\"secnum\">1.1</span>Decorator</h1>\n    <emu-note><span class=\"note\">Note</span>This section is non-normative.</emu-note>\n    <p>A <em>decorator</em> is an expression that is evaluated after a class has been defined, that can be used to annotate or modify the class in some fashion. This expression must evaluate to a <code>function</code>, which is executed by the runtime to apply the decoration.</p>\n    <pre><code class=\"typescript hljs\">@decoratorExpression\n<span class=\"hljs-keyword\">class</span> C {\n}\n</code></pre>\n  </emu-clause>\n  <emu-clause id=\"proposal-terms-classdecoratorfunction\">\n    <h1><span class=\"secnum\">1.2</span>Class Decorator Function</h1>\n    <emu-note><span class=\"note\">Note</span>This section is non-normative.</emu-note>\n    <p>A <em>class decorator function</em> is a function that accepts a constructor function as its argument, and returns either <code>undefined</code>, the provided constructor function, or a new constructor function. Returning <code>undefined</code> is equivalent to returning the provided constructor function.</p>\n    <pre><code class=\"typescript hljs\"><span class=\"hljs-comment\">// A class decorator function</span>\n<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">dec</span><span class=\"hljs-params\">(target)</span> </span>{  \n <span class=\"hljs-comment\">// modify, annotate, or replace target...</span>\n}\n</code></pre>\n  </emu-clause>\n  <emu-clause id=\"proposal-terms-propertydecoratorfunction\">\n    <h1><span class=\"secnum\">1.3</span>Property/Method Decorator Function</h1>\n    <emu-note><span class=\"note\">Note</span>This section is non-normative.</emu-note>\n    <p>A <em>property decorator function</em> is a function that accepts three arguments: The object that owns the property, the key for the property (a <code>string</code> or a <code>symbol</code>), and optionally the property descriptor of the property. The function must return either <code>undefined</code>, the provided property descriptor, or a new property descriptor. Returning <code>undefined</code> is equivalent to returning the provided property descriptor.</p>\n    <pre><code class=\"typescript hljs\"><span class=\"hljs-comment\">// A property (or method/accessor) decorator function</span>\n<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">dec</span><span class=\"hljs-params\">(target, key, descriptor)</span> </span>{\n  <span class=\"hljs-comment\">// annotate the target and key; or modify or replace the descriptor...</span>\n}\n    </code></pre>\n  </emu-clause>\n  <emu-clause id=\"proposal-terms-parameterdecoratorfunction\">\n    <h1><span class=\"secnum\">1.4</span>Parameter Decorator Function</h1>\n    <emu-note><span class=\"note\">Note</span>This section is non-normative.</emu-note>\n    <p>A <em>parameter decorator function</em> is a function that accepts three arguments: The function that contains the decorated parameter, the property key of the member (or <code>undefined</code> for a parameter of the constructor), and the ordinal index of the parameter. The return value of this decorator is ignored.</p>\n    <pre><code class=\"typescript hljs\">\n<span class=\"hljs-comment\">// A parameter decorator</span>\n<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">dec</span><span class=\"hljs-params\">(target, paramIndex)</span> </span>{\n    <span class=\"hljs-comment\">// annotate the target and index</span>\n}\n</code></pre>\n  </emu-clause>\n  <emu-clause id=\"proposal-terms-decoratorfactory\">\n    <h1><span class=\"secnum\">1.5</span>Decorator Factory</h1>\n    <emu-note><span class=\"note\">Note</span>This section is non-normative.</emu-note>\n    <p>A <em>decorator factory</em> is a function that can accept any number of arguments, and must return one of the above types of decorator function.</p>\n    <pre><code class=\"typescript hljs\"><span class=\"hljs-comment\">// a class decorator factory function</span>\n<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">dec</span><span class=\"hljs-params\">(x, y)</span> </span>{\n  <span class=\"hljs-comment\">// the class decorator function</span>\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(target)</span> </span>{\n      <span class=\"hljs-comment\">// modify, annotate, or replace target...</span>\n  }\n}\n</code></pre>\n  </emu-clause>\n</emu-clause>\n<emu-clause id=\"proposal-decoratortargets\">\n  <h1><span class=\"secnum\">2</span>Decorator Targets</h1>\n  <emu-note><span class=\"note\">Note</span>This section is non-normative.</emu-note>\n  <p>A <em>decorator</em> <strong>can</strong> be legally applied to any of the following:</p>\n  <ul>\n    <li>A class declaration</li>\n    <li>A class property initializer (static or prototype)</li>\n    <li>A class method declaration (static or prototype)</li>\n    <li>A class get or set accessor declaration (static or prototype)</li>\n    <li>A parameter of a class constructor</li>\n    <li>A parameter of a class method (static or prototype)</li>\n    <li>A parameter of a class get or set accessor (static or prototype)</li>\n  </ul>\n  <p>Please note that a <em>decorator</em> currently <strong>cannot</strong> be legally applied to any of the following:</p>\n  <ul>\n    <li>A class constructor - This is to reduce ambiguity between where you can apply a decorator (on the class or on its constructor) and which of the above decorator function forms is called.</li>\n    <li>A function declaration - Decorators on a function declaration would introduce a TDZ (Temporal Dead Zone), which would make the function unreachable until its declaration is executed. This could cause confusion as an undecorated function declaration is hoisted and can be used in a statement preceeding the declaration.</li>\n    <li>A function expression - This is to reduce confusion and maintain parity with disallowing decorators on a function declaration.</li>\n    <li>An arrow function - This is to reduce confusion and maintain parity with disallowing decorators on a function expression.</li>\n  </ul>\n  <p>This list may change in the future.</p>\n</emu-clause>\n<emu-clause id=\"proposal-decoratoreval\">\n  <h1><span class=\"secnum\">3</span>Decorator Evaluation and Application Order</h1>\n  <emu-note><span class=\"note\">Note</span>This section is non-normative.</emu-note>\n  <p>Decorators are <em>evaluated</em> in the order they appear preceeding their target declaration, to preserve side-effects due to evaluation order. Decorators are <em>applied</em> to their target declaration in reverse order, starting with the decorator closest to the declaration. This behavior is specified to preserve the expected behavior of decorators without a declarative syntax.</p>\n  <pre><code class=\"typescript hljs\">@F\n@G\n<span class=\"hljs-keyword\">class</span> C {   \n}\n</code></pre>\n  <p>For example, the above listing could be approximately written without decorators in the following fashion:</p>\n  <pre><code class=\"typescript hljs\">C = F(G(C))</code></pre>\n  <p>In the above example, the expression <code>F</code> is evaluated first, followed by the expression <code>G</code>. <code>G</code> is then called with the constructor function as its argument, followed by calling <code>F</code> with the result. The actual process of applying decorators is more complex than the above example however, though you may still imperatively apply decorators with a reflection API.</p>\n  <p>If a class declaration has decorators on both the class and any of its members or parameters, the decorators are applied using the following pseudocode:</p>\n  <pre>for each member M of class C\n  if M is an accessor then\n      let accessor = first accessor (get or set, in declaration order) of M\n      let memberDecorators = decorators of accessor\n      for each parameter of accessor\n          let paramDecorators = decorators of parameter           \n          let paramIndex = ordinal index of parameter\n          Reflect.decorate(paramDecorators, accessor, paramIndex)\n      next parameter\n\n      let accessor = second accessor (get or set, in declaration order) of M\n      if accessor then\n          let memberDecorators = memberDecorators + decorators of accessor\n          for each parameter of accessor\n              let paramDecorators = decorators of parameter           \n              let paramIndex = ordinal index of parameter\n              Reflect.decorate(paramDecorators, accessor, paramIndex)\n          next parameter\n      end if\n  else if M is a method\n      let memberDecorators = decorators of M\n      for each parameter of M\n          let paramDecorators = decorators of parameter           \n          let paramIndex = ordinal index of parameter\n          Reflect.decorate(paramDecorators, M, paramIndex)\n      next parameter\n  else\n      let memberDecorators = decorators of M\n  end if\n\n  let name = name of M\n  let target = C.prototype if M is on the prototype; otherwise, C if M is static  \n  Reflect.decorate(memberDecorators, C, name)\nnext member\n\nfor each parameter of C\n  let paramDecorators = decorators of parameter\n  let paramIndex = ordinal index of parameter\n  Reflect.decorate(paramDecorators, C, paramIndex)\nnext parameter\n\nlet classDecorators = decorators of C\nlet C = Reflect.decorate(classDecorators, C)\n  </pre>\n</emu-clause>\n\n<emu-clause id=\"reflect\">\n  <h1><span class=\"secnum\">4</span>Reflect API</h1>\n  <emu-note><span class=\"note\">Note</span>This section is non-normative.</emu-note>\n  <p>In addition to a declarative approach to defining decorators, it is necessary to also include an imperative API capable of applying decorators, as well as defining, reflecting over, and removing decorator metadata from an object, property, or parameter.</p>\n  <p>A shim for this API can be found here: <a href=\"https://github.com/rbuckton/ReflectDecorators\">https://github.com/rbuckton/ReflectDecorators</a></p>\n  <pre><code class=\"typescript hljs\">Reflect.decorate(decorators, target, propertyKey?, descriptor?)</code></pre>  \n</emu-clause>\n\n<emu-clause id=\"transpile\">\n  <h1><span class=\"secnum\">5</span>Transformation</h1>\n  <p>The following are examples of how decorators can be desugared to ES6 (through a transpiler such as TypeScript). These examples levarage an imperative reflection API.</p>\n  <emu-clause id=\"transpile-class\">\n    <h1><span class=\"secnum\">5.1</span>Class Declaration</h1>\n    <h2>Syntax</h2>\n    <pre><code class=\"typescript hljs\">@F(<span class=\"hljs-string\">\"color\"</span>)\n@G\n<span class=\"hljs-keyword\">class</span> C {  \n}\n    </code></pre>\n    <h2>ES6 Transformation</h2>\n    <pre><code class=\"javascript hljs\"><span class=\"hljs-keyword\">let</span> C = <span class=\"hljs-keyword\">class</span> {\n}\n<span class=\"hljs-built_in\">Object</span>.defineProperty(C, <span class=\"hljs-string\">\"name\"</span>, { value: <span class=\"hljs-string\">\"C\"</span>, configurable: <span class=\"hljs-literal\">true</span> });\nC = __decorate([F(<span class=\"hljs-string\">\"color\"</span>), G], C);\n    </code></pre>\n  </emu-clause>\n\n  <emu-clause id=\"transpile-exportclass\">\n    <h1><span class=\"secnum\">5.2</span>Class Declaration (Exported)</h1>\n    <h2>Syntax</h2>\n    <pre><code class=\"typescript hljs\">@F(<span class=\"hljs-string\">\"color\"</span>)\n@G\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> C {\n}\n    </code></pre>\n    <h2>ES6 Transformation</h2>\n    <pre><code class=\"javascript hljs\">export <span class=\"hljs-keyword\">let</span> C = <span class=\"hljs-keyword\">class</span> {\n}\n<span class=\"hljs-built_in\">Object</span>.defineProperty(C, <span class=\"hljs-string\">\"name\"</span>, { value: <span class=\"hljs-string\">\"C\"</span>, configurable: <span class=\"hljs-literal\">true</span> });\nC = __decorate([F(<span class=\"hljs-string\">\"color\"</span>), G], C);\n    </code></pre>\n  </emu-clause>\n\n  <emu-clause id=\"transpile-exportdefaultclass\">\n    <h1><span class=\"secnum\">5.3</span>Class Declaration (Default, Exported)</h1>\n    <h2>Syntax</h2>\n    <pre><code class=\"typescript hljs\">@F(<span class=\"hljs-string\">\"color\"</span>)\n@G\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> C {\n}\n    </code></pre>\n    <h2>ES6 Transformation</h2>\n    <pre><code class=\"javascript hljs\"><span class=\"hljs-keyword\">let</span> C = <span class=\"hljs-keyword\">class</span> {\n}\n<span class=\"hljs-built_in\">Object</span>.defineProperty(C, <span class=\"hljs-string\">\"name\"</span>, { value: <span class=\"hljs-string\">\"C\"</span>, configurable: <span class=\"hljs-literal\">true</span> });\nC = __decorate([F(<span class=\"hljs-string\">\"color\"</span>), G], C);\nexport <span class=\"hljs-keyword\">default</span> C;\n    </code></pre>\n  </emu-clause>\n\n  <emu-clause id=\"transpile-classmethod\">\n    <h1><span class=\"secnum\">5.4</span>Class Method Declaration</h1>\n    <h2>Syntax</h2>\n    <pre><code class=\"typescript hljs\"><span class=\"hljs-keyword\">class</span> C {\n    @F(<span class=\"hljs-string\">\"color\"</span>)\n    @G\n    method() { }\n}\n    </code></pre>\n    <h2>ES6 Transformation</h2>\n    <pre><code class=\"javascript hljs\"><span class=\"hljs-keyword\">class</span> C {\n    method() { }\n}\n<span class=\"hljs-built_in\">Object</span>.defineProperty(C.prototype, <span class=\"hljs-string\">\"method\"</span>, \n    __decorate([F(<span class=\"hljs-string\">\"color\"</span>), G], C.prototype, <span class=\"hljs-string\">\"method\"</span>, <span class=\"hljs-built_in\">Object</span>.getOwnPropertyDescriptor(C.prototype, <span class=\"hljs-string\">\"method\"</span>)));\n    </code></pre>\n  </emu-clause>\n\n  <emu-clause id=\"transpile-classaccessor\">\n    <h1><span class=\"secnum\">5.5</span>Class Accessor Declaration</h1>\n    <h2>Syntax</h2>\n    <pre><code class=\"typescript hljs\"><span class=\"hljs-keyword\">class</span> C {\n    @F(<span class=\"hljs-string\">\"color\"</span>)\n    @G\n    <span class=\"hljs-keyword\">get</span> accessor() { }\n    <span class=\"hljs-keyword\">set</span> accessor(value) { }\n}\n    </code></pre>\n    <h2>ES6 Transformation</h2>\n    <pre><code class=\"javascript hljs\"><span class=\"hljs-keyword\">class</span> C {\n    get accessor() { }\n    set accessor(value) { }\n}\n<span class=\"hljs-built_in\">Object</span>.defineProperty(C.prototype, <span class=\"hljs-string\">\"accessor\"</span>, \n    __decorate([F(<span class=\"hljs-string\">\"color\"</span>), G], C.prototype, <span class=\"hljs-string\">\"accessor\"</span>, <span class=\"hljs-built_in\">Object</span>.getOwnPropertyDescriptor(C.prototype, <span class=\"hljs-string\">\"accessor\"</span>)));\n    </code></pre>\n  </emu-clause>\n\n  <emu-clause id=\"transpile-classproperty\">\n    <h1><span class=\"secnum\">5.6</span>Class Property Declaration</h1>\n    <h2>Syntax</h2>\n    <pre><code class=\"typescript hljs\"><span class=\"hljs-keyword\">class</span> C {\n    @F(<span class=\"hljs-string\">\"color\"</span>)\n    @G\n    property = <span class=\"hljs-number\">1</span>;\n}\n    </code></pre>\n    <h2>ES6 Transformation</h2>\n    <pre><code class=\"javascript hljs\"><span class=\"hljs-keyword\">class</span> C {\n    constructor() {\n        <span class=\"hljs-keyword\">this</span>.property = <span class=\"hljs-number\">1</span>;\n    }\n}\n__decorate([F(<span class=\"hljs-string\">\"color\"</span>), G], C.prototype, <span class=\"hljs-string\">\"property\"</span>);\n    </code></pre>\n  </emu-clause>\n\n  <emu-clause id=\"transpile-classconstructorparameter\">\n    <h1><span class=\"secnum\">5.7</span>Class Constructor Parameter Declaration</h1>\n    <h2>Syntax</h2>\n    <pre><code class=\"typescript hljs\"><span class=\"hljs-keyword\">class</span> C {\n    <span class=\"hljs-constructor\"><span class=\"hljs-keyword\">constructor</span>(@F(\"color\") @G p) </span>{ }\n}\n    </code></pre>\n    <h2>ES6 Transformation</h2>\n    <pre><code class=\"javascript hljs\"><span class=\"hljs-keyword\">class</span> C {\n    constructor(p) { }\n}\n__decorate([F(<span class=\"hljs-string\">\"color\"</span>), G], C, <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">0</span>);\n    </code></pre>\n  </emu-clause>\n\n  <emu-clause id=\"transpile-classmethodparameter\">\n    <h1><span class=\"secnum\">5.8</span>Class Method Parameter Declaration</h1>\n    <h2>Syntax</h2>\n    <pre><code class=\"typescript hljs\"><span class=\"hljs-keyword\">class</span> C {\n    method(@F(<span class=\"hljs-string\">\"color\"</span>) @G p) { }\n}\n    </code></pre>\n    <h2>ES6 Transformation</h2>\n    <pre><code class=\"javascript hljs\"><span class=\"hljs-keyword\">class</span> C {\n    method(p) { }\n}\n__decorate([F(<span class=\"hljs-string\">\"color\"</span>), G], C.prototype, <span class=\"hljs-string\">\"method\"</span>, <span class=\"hljs-number\">0</span>);\n    </code></pre>\n  </emu-clause>\n\n  <emu-clause id=\"transpile-classaccessorparameter\">\n    <h1><span class=\"secnum\">5.9</span>Class Set Accessor Parameter Declaration</h1>\n    <h2>Syntax</h2>\n    <pre><code class=\"typescript hljs\"><span class=\"hljs-keyword\">class</span> C {\n    <span class=\"hljs-keyword\">set</span> accessor(@F(<span class=\"hljs-string\">\"color\"</span>) @G p) { }\n}\n    </code></pre>\n    <h2>ES6 Transformation</h2>\n    <pre><code class=\"javascript hljs\"><span class=\"hljs-keyword\">class</span> C {\n    set accessor(p) { }\n}\n__decorate([F(<span class=\"hljs-string\">\"color\"</span>), G], C.prototype, <span class=\"hljs-string\">\"accessor\"</span>, <span class=\"hljs-number\">0</span>);\n    </code></pre>\n  </emu-clause>\n\n</emu-clause>\n\n<emu-annex id=\"grammar\">\n  <h1><span class=\"secnum\">A</span>Grammar</h1>\n  <emu-annex id=\"grammar-expressions\">\n    <h1><span class=\"secnum\">A.1</span>Expressions</h1>\n    <emu-production id=\"grammar-memberexpression\" name=\"MemberExpression\" params=\"Yield, Decorator\">\n      <emu-nt>MemberExpression<emu-mods> [Yield, Decorator]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield\">PrimaryExpression<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs constraints=\"~Decorator\"><emu-constraints>[~Decorator]</emu-constraints><emu-nt params=\"?Yield, ?Decorator\">MemberExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt><emu-t>[</emu-t><emu-nt params=\"In, ?Yield\">Expression<emu-mods> [In, ?Yield]</emu-mods></emu-nt><emu-t>]</emu-t></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">MemberExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt><emu-t>.</emu-t><emu-nt>IdentifierName<emu-mods></emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">MemberExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt><emu-nt params=\"?Yield\">TemplateLiteral<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">SuperProperty<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt>MetaProperty<emu-mods></emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-t>new</emu-t><emu-nt params=\"?Yield, ?Decorator\">MemberExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt><emu-nt params=\"?Yield\">Arguments<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-superproperty\" name=\"SuperProperty\" params=\"Yield, Decorator\">\n      <emu-nt>SuperProperty<emu-mods> [Yield, Decorator]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs constraints=\"~Decorator\"><emu-constraints>[~Decorator]</emu-constraints><emu-t>super</emu-t><emu-t>[</emu-t><emu-nt params=\"In, ?Yield\">Expression<emu-mods> [In, ?Yield]</emu-mods></emu-nt><emu-t>]</emu-t></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-newexpression\" name=\"NewExpression\" params=\"Yield, Decorator\">\n      <emu-nt>NewExpression<emu-mods> [Yield, Decorator]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield, ?Decorator\">MemberExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-t>new</emu-t><emu-nt params=\"?Yield, ?Decorator\">NewExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-callexpression\" name=\"CallExpression\" params=\"Yield, Decorator\">\n      <emu-nt>CallExpression<emu-mods> [Yield, Decorator]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield, ?Decorator\">MemberExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt><emu-nt params=\"?Yield\">Arguments<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield\">SuperCall<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">CallExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt><emu-nt params=\"?Yield\">Arguments<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs constraints=\"~Decorator\"><emu-constraints>[~Decorator]</emu-constraints><emu-nt params=\"?Yield\">CallExpression<emu-mods> [?Yield]</emu-mods></emu-nt><emu-t>[</emu-t><emu-nt params=\"In, ?Yield\">Expression<emu-mods> [In, ?Yield]</emu-mods></emu-nt><emu-t>]</emu-t></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">CallExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt><emu-t>.</emu-t><emu-nt>IdentifierName<emu-mods></emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">CallExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt><emu-nt params=\"?Yield\">TemplateLiteral<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>      \n    </emu-production>\n    <emu-production id=\"grammar-lefthandsideexpression\" name=\"LeftHandSideExpression\" params=\"Yield, Decorator\">\n      <emu-nt>LeftHandSideExpression<emu-mods> [Yield, Decorator]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield, ?Decorator\">NewExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">CallExpression<emu-mods> [?Yield, ?Decorator]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n  </emu-annex>\n\n  <emu-annex id=\"functions-and-classes\">\n    <h1><span class=\"secnum\">A.2</span>Functions and Classes</h1>\n    <emu-production id=\"grammar-strictformalparameters\" name=\"StrictFormalParameters\" params=\"Yield, GeneratorParameter, ClassParameter\">\n      <emu-nt>StrictFormalParameters<emu-mods> [Yield, GeneratorParameter, ClassParameter]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield, ?GeneratorParameter, ?ClassParameter\">FormalParameters<emu-mods> [?Yield, ?GeneratorParameter, ?ClassParameter]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-formalparameters\" name=\"FormalParameters\" params=\"Yield, GeneratorParameter, ClassParameter\">\n      <emu-nt>FormalParameters<emu-mods> [Yield, GeneratorParameter, ClassParameter]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-prose>[empty]</emu-prose></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield, ?GeneratorParameter, ?ClassParameter\">FormalParameterList<emu-mods> [?Yield, ?GeneratorParameter, ?ClassParameter]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-formalparameterlist\" name=\"FormalParameterList\" params=\"Yield, GeneratorParameter, ClassParameter\">\n      <emu-nt>FormalParameterList<emu-mods> [Yield, GeneratorParameter, ClassParameter]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield, ?ClassParameter\">FunctionRestParameter<emu-mods> [?Yield, ?ClassParameter]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield, ?GeneratorParameter, ?ClassParameter\">FormalsList<emu-mods> [?Yield, ?GeneratorParameter, ?ClassParameter]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield, ?GeneratorParameter, ?ClassParameter\">FormalsList<emu-mods> [?Yield, ?GeneratorParameter, ?ClassParameter]</emu-mods></emu-nt><emu-t>,</emu-t><emu-nt params=\"?Yield, ?ClassParameter\">FunctionRestParameter<emu-mods> [?Yield, ?ClassParameter]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-formalslist\" name=\"FormalsList\" params=\"Yield, GeneratorParameter, ClassParameter\">\n      <emu-nt>FormalsList<emu-mods> [Yield, GeneratorParameter, ClassParameter]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield, ?GeneratorParameter, ?ClassParameter\">FormalParameter<emu-mods> [?Yield, ?GeneratorParameter, ?ClassParameter]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield, ?GeneratorParameter, ?ClassParameter\">FormalsList<emu-mods> [?Yield, ?GeneratorParameter, ?ClassParameter]</emu-mods></emu-nt><emu-t>,</emu-t><emu-nt params=\"?Yield, ?GeneratorParameter, ?ClassParameter\">FormalParameter<emu-mods> [?Yield, ?GeneratorParameter, ?ClassParameter]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-functionrestparameter\" name=\"FunctionRestParameter\" params=\"Yield, ClassParameter\">\n      <emu-nt>FunctionRestParameter<emu-mods> [Yield, ClassParameter]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield\">BindingRestElement<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs constraints=\"+ClassParameter\"><emu-constraints>[+ClassParameter]</emu-constraints><emu-nt>DecoratorList<emu-mods></emu-mods></emu-nt><emu-nt params=\"?Yield\">BindingRestElement<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-formalparameter\" name=\"FormalParameter\" params=\"Yield, GeneratorParameter, ClassParameter\">\n      <emu-nt>FormalParameter<emu-mods> [Yield, GeneratorParameter, ClassParameter]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield, ?GeneratorParameter\">BindingElement<emu-mods> [?Yield, ?GeneratorParameter]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs constraints=\"+ClassParameter\"><emu-constraints>[+ClassParameter]</emu-constraints><emu-nt>DecoratorList<emu-mods></emu-mods></emu-nt><emu-nt params=\"?Yield, ?GeneratorParameter\">BindingElement<emu-mods> [?Yield, ?GeneratorParameter]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-methoddefinition\" name=\"MethodDefinition\" params=\"Yield, ClassParameter\">\n      <emu-nt>MethodDefinition<emu-mods> [Yield, ClassParameter]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield\">PropertyName<emu-mods> [?Yield]</emu-mods></emu-nt><emu-t>(</emu-t><emu-nt params=\"?ClassParameter\">StrictFormalParameters<emu-mods> [?ClassParameter]</emu-mods></emu-nt><emu-t>)</emu-t><emu-t>{</emu-t><emu-nt>FunctionBody<emu-mods></emu-mods></emu-nt><emu-t>}</emu-t></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield, ?ClassParameter\">GeneratorMethod<emu-mods> [?Yield, ?ClassParameter]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-t>get</emu-t><emu-nt params=\"?Yield\">PropertyName<emu-mods> [?Yield]</emu-mods></emu-nt><emu-t>(</emu-t><emu-t>)</emu-t><emu-t>{</emu-t><emu-nt>FunctionBody<emu-mods></emu-mods></emu-nt><emu-t>}</emu-t></emu-rhs>\n      <emu-rhs><emu-t>set</emu-t><emu-nt params=\"?Yield\">PropertyName<emu-mods> [?Yield]</emu-mods></emu-nt><emu-t>(</emu-t><emu-nt params=\"?ClassParameter\">PropertySetParameterList<emu-mods> [?ClassParameter]</emu-mods></emu-nt><emu-t>)</emu-t><emu-t>{</emu-t><emu-nt>FunctionBody<emu-mods></emu-mods></emu-nt><emu-t>}</emu-t></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-generatormethod\" name=\"GeneratorMethod\" params=\"Yield, ClassParameter\">\n      <emu-nt>GeneratorMethod<emu-mods> [Yield, ClassParameter]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-t>*</emu-t><emu-nt params=\"?Yield\">PropertyName<emu-mods> [?Yield]</emu-mods></emu-nt><emu-t>(</emu-t><emu-nt params=\"Yield, GeneratorParameter, ?ClassParameter\">StrictFormalParameters<emu-mods> [Yield, GeneratorParameter, ?ClassParameter]</emu-mods></emu-nt><emu-t>)</emu-t><emu-t>{</emu-t><emu-nt>GeneratorBody<emu-mods></emu-mods></emu-nt><emu-t>}</emu-t></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-classdeclaration\" name=\"ClassDeclaration\" params=\"Yield, Default\">\n      <emu-nt>ClassDeclaration<emu-mods> [Yield, Default]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield\" optional=\"\">DecoratorList<emu-mods> [?Yield] opt</emu-mods></emu-nt><emu-t>class</emu-t><emu-nt params=\"?Yield\">BindingIdentifier<emu-mods> [?Yield]</emu-mods></emu-nt><emu-nt params=\"?Yield\">ClassTail<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs constraints=\"+Default\"><emu-constraints>[+Default]</emu-constraints><emu-nt params=\"?Yield\" optional=\"\">DecoratorList<emu-mods> [?Yield] opt</emu-mods></emu-nt><emu-t>class</emu-t><emu-nt params=\"?Yield\">ClassTail<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-classexpression\" name=\"ClassExpression\" params=\"Yield, GeneratorParameter\">\n      <emu-nt>ClassExpression<emu-mods> [Yield, GeneratorParameter]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield\" optional=\"\">DecoratorList<emu-mods> [?Yield] opt</emu-mods></emu-nt><emu-t>class</emu-t><emu-nt params=\"?Yield\" optional=\"\">BindingIdentifier<emu-mods> [?Yield] opt</emu-mods></emu-nt><emu-nt params=\"?Yield, ?GeneratorParameter\">ClassTail<emu-mods> [?Yield, ?GeneratorParameter]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-classelement\" name=\"ClassElement\" params=\"Yield\">\n      <emu-nt>ClassElement<emu-mods> [Yield]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield\" optional=\"\">DecoratorList<emu-mods> [?Yield] opt</emu-mods></emu-nt><emu-nt params=\"ClassParameter, ?Yield\">MethodDefinition<emu-mods> [ClassParameter, ?Yield]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield\" optional=\"\">DecoratorList<emu-mods> [?Yield] opt</emu-mods></emu-nt><emu-t>static</emu-t><emu-nt params=\"ClassParameter, ?Yield\">MethodDefinition<emu-mods> [ClassParameter, ?Yield]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt params=\"?Yield\" optional=\"\">DecoratorList<emu-mods> [?Yield] opt</emu-mods></emu-nt><emu-t optional=\"\">static</emu-t><emu-nt>PropertyName<emu-mods></emu-mods></emu-nt><emu-nt params=\"In, ?Yield\" optional=\"\">Initializer<emu-mods> [In, ?Yield] opt</emu-mods></emu-nt><emu-t>;</emu-t></emu-rhs>\n      <emu-rhs><emu-t>;</emu-t></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-decoratorlist\" name=\"DecoratorList\" params=\"Yield\">\n      <emu-nt>DecoratorList<emu-mods> [Yield]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-nt params=\"?Yield\" optional=\"\">DecoratorList<emu-mods> [?Yield] opt</emu-mods></emu-nt><emu-nt params=\"?Yield\">Decorator<emu-mods> [?Yield]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n    <emu-production id=\"grammar-decorator\" name=\"Decorator\" params=\"Yield\">\n      <emu-nt>Decorator<emu-mods> [Yield]</emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-t>@</emu-t><emu-nt params=\"Decorator, ?Yield\">LeftHandSideExpression<emu-mods> [Decorator, ?Yield]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n  </emu-annex>\n\n  <emu-annex id=\"scripts-and-modules\">\n    <h1><span class=\"secnum\">A.3</span>Scripts and Modules</h1>\n    <emu-production id=\"grammar-exportdeclaration\" name=\"ExportDeclaration\">\n      <emu-nt>ExportDeclaration<emu-mods></emu-mods><emu-mods></emu-mods></emu-nt><emu-geq>:</emu-geq><emu-rhs><emu-t>export</emu-t><emu-t>*</emu-t><emu-nt>FromClause<emu-mods></emu-mods></emu-nt><emu-t>;</emu-t></emu-rhs>\n      <emu-rhs><emu-t>export</emu-t><emu-nt>ExportClause<emu-mods></emu-mods></emu-nt><emu-nt>FromClause<emu-mods></emu-mods></emu-nt><emu-t>;</emu-t></emu-rhs>\n      <emu-rhs><emu-t>export</emu-t><emu-nt>ExportClause<emu-mods></emu-mods></emu-nt><emu-t>;</emu-t></emu-rhs>\n      <emu-rhs><emu-t>export</emu-t><emu-nt>VariableStatement<emu-mods></emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-t>export</emu-t><emu-gann>[lookahead ≠ <emu-t>@</emu-t>]</emu-gann><emu-nt>Declaration<emu-mods></emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-t>export</emu-t><emu-t>default</emu-t><emu-nt params=\"Default\">HoistableDeclaration<emu-mods> [Default]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-t>export</emu-t><emu-t>default</emu-t><emu-gann>[lookahead ≠ <emu-t>@</emu-t>]</emu-gann><emu-nt params=\"Default\">ClassDeclaration<emu-mods> [Default]</emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-t>export</emu-t><emu-t>default</emu-t><emu-gann>[lookahead ∉ { <emu-t>function</emu-t>, <emu-t>class</emu-t>, <emu-t>@</emu-t> }]</emu-gann><emu-nt>AssignmentExpression<emu-mods></emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt>DecoratorList<emu-mods></emu-mods></emu-nt><emu-t>export</emu-t><emu-gann>[lookahead ≠ <emu-t>@</emu-t>]</emu-gann><emu-nt>ClassDeclaration<emu-mods></emu-mods></emu-nt></emu-rhs>\n      <emu-rhs><emu-nt>DecoratorList<emu-mods></emu-mods></emu-nt><emu-t>export</emu-t><emu-t>default</emu-t><emu-gann>[lookahead ≠ <emu-t>@</emu-t>]</emu-gann><emu-nt params=\"Default\">ClassDeclaration<emu-mods> [Default]</emu-mods></emu-nt></emu-rhs>\n    </emu-production>\n  </emu-annex>\n</emu-annex>\n<emu-annex id=\"typescript\">\n  <h1><span class=\"secnum\">B</span>TypeScript</h1>\n  <emu-annex id=\"typescript-definitions\">\n    <h1><span class=\"secnum\">B.1</span>TypeScript Definitions</h1>\n    <pre><code class=\"typescript hljs\"><span class=\"hljs-interface\"><span class=\"hljs-keyword\">interface</span> TypedPropertyDescriptor&lt;T&gt; </span>{  \n    enumerable?: <span class=\"hljs-built_in\">boolean</span>;  \n    configurable?: <span class=\"hljs-built_in\">boolean</span>;  \n    writable?: <span class=\"hljs-built_in\">boolean</span>;  \n    value?: T;  \n    <span class=\"hljs-keyword\">get</span>?: () =&gt; T;  \n    <span class=\"hljs-keyword\">set</span>?: (value: T) =&gt; <span class=\"hljs-built_in\">void</span>;  \n}  \n\ntype ClassDecorator = <span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">TFunction</span> <span class=\"hljs-attribute\">extends</span> <span class=\"hljs-attribute\">Function</span>&gt;</span>(target: TFunction): TFunction | void;\ntype MethodDecorator = <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">T</span>&gt;</span>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">T</span>&gt;</span>): TypedPropertyDescriptor<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">T</span>&gt;</span> | void;\ntype PropertyDecorator = (target: Object, propertyKey: string | symbol): void;\ntype ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number): void;\n</span></code></pre>\n  </emu-annex>  \n</emu-annex></body>";

/***/ },
/* 678 */
/***/ function(module, exports) {

	module.exports = "<meta charset=\"utf8\">\r\n<title>Decorators</title>\r\n<link rel=\"stylesheet\" href=\"./css/elements.css\"> \r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/styles/github.min.css\"> \r\n<emu-biblio href=\"./biblio.json\"></emu-biblio> \r\n\r\n<h1>Decorators Proposal - TypeScript</h1>\r\n<emu-intro id=\"introduction\">\r\n  <h1>Introduction</h1>\r\n  <p>Proposal to add Decorators to TypeScript.</p>\r\n  <p>For the ECMAScript specific proposal, see <a href=\"index.html\">http://rbuckton.github.io/reflectdecorators/index.html</a></p>\r\n</emu-intro>\r\n\r\n<emu-clause id=\"proposal-terms\">\r\n  <h1>Terms</h1>\r\n  <emu-clause id=\"proposal-terms-decorator\">\r\n    <h1>Decorator</h1>\r\n    <emu-note>This section is non-normative.</emu-note>\r\n    <p>A <em>decorator</em> is an expression that is evaluated after a class has been defined, that can be used to annotate or modify the class in some fashion. This expression must evaluate to a <code>function</code>, which is executed by the runtime to apply the decoration.</p>\r\n    <pre><code class=\"typescript\">@decoratorExpression\r\nclass C {\r\n}\r\n</code></pre>\r\n  </emu-clause>\r\n  <emu-clause id=\"proposal-terms-classdecoratorfunction\">\r\n    <h1>Class Decorator Function</h1>\r\n    <emu-note>This section is non-normative.</emu-note>\r\n    <p>A <em>class decorator function</em> is a function that accepts a constructor function as its argument, and returns either <code>undefined</code>, the provided constructor function, or a new constructor function. Returning <code>undefined</code> is equivalent to returning the provided constructor function.</p>\r\n    <pre><code class=\"typescript\">// A class decorator function\r\nfunction dec(target) {  \r\n // modify, annotate, or replace target...\r\n}\r\n</code></pre>\r\n  </emu-clause>\r\n  <emu-clause id=\"proposal-terms-propertydecoratorfunction\">\r\n    <h1>Property/Method Decorator Function</h1>\r\n    <emu-note>This section is non-normative.</emu-note>\r\n    <p>A <em>property decorator function</em> is a function that accepts three arguments: The object that owns the property, the key for the property (a <code>string</code> or a <code>symbol</code>), and optionally the property descriptor of the property. The function must return either <code>undefined</code>, the provided property descriptor, or a new property descriptor. Returning <code>undefined</code> is equivalent to returning the provided property descriptor.</p>\r\n    <pre><code class=\"typescript\">// A property (or method/accessor) decorator function\r\nfunction dec(target, key, descriptor) {\r\n  // annotate the target and key; or modify or replace the descriptor...\r\n}\r\n    </code></pre>\r\n  </emu-clause>\r\n  <emu-clause id=\"proposal-terms-parameterdecoratorfunction\">\r\n    <h1>Parameter Decorator Function</h1>\r\n    <emu-note>This section is non-normative.</emu-note>\r\n    <p>A <em>parameter decorator function</em> is a function that accepts three arguments: The function that contains the decorated parameter, the property key of the member (or <code>undefined</code> for a parameter of the constructor), and the ordinal index of the parameter. The return value of this decorator is ignored.</p>\r\n    <pre><code class=\"typescript\">\r\n// A parameter decorator\r\nfunction dec(target, paramIndex) {\r\n    // annotate the target and index\r\n}\r\n</code></pre>\r\n  </emu-clause>\r\n  <emu-clause id=\"proposal-terms-decoratorfactory\">\r\n    <h1>Decorator Factory</h1>\r\n    <emu-note>This section is non-normative.</emu-note>\r\n    <p>A <em>decorator factory</em> is a function that can accept any number of arguments, and must return one of the above types of decorator function.</p>\r\n    <pre><code class=\"typescript\">// a class decorator factory function\r\nfunction dec(x, y) {\r\n  // the class decorator function\r\n  return function (target) {\r\n      // modify, annotate, or replace target...\r\n  }\r\n}\r\n</code></pre>\r\n  </emu-clause>\r\n</emu-clause>\r\n<emu-clause id=\"proposal-decoratortargets\">\r\n  <h1>Decorator Targets</h1>\r\n  <emu-note>This section is non-normative.</emu-note>\r\n  <p>A <em>decorator</em> <strong>can</strong> be legally applied to any of the following:</p>\r\n  <ul>\r\n    <li>A class declaration</li>\r\n    <li>A class property initializer (static or prototype)</li>\r\n    <li>A class method declaration (static or prototype)</li>\r\n    <li>A class get or set accessor declaration (static or prototype)</li>\r\n    <li>A parameter of a class constructor</li>\r\n    <li>A parameter of a class method (static or prototype)</li>\r\n    <li>A parameter of a class get or set accessor (static or prototype)</li>\r\n  </ul>\r\n  <p>Please note that a <em>decorator</em> currently <strong>cannot</strong> be legally applied to any of the following:</p>\r\n  <ul>\r\n    <li>A class constructor - This is to reduce ambiguity between where you can apply a decorator (on the class or on its constructor) and which of the above decorator function forms is called.</li>\r\n    <li>A function declaration - Decorators on a function declaration would introduce a TDZ (Temporal Dead Zone), which would make the function unreachable until its declaration is executed. This could cause confusion as an undecorated function declaration is hoisted and can be used in a statement preceeding the declaration.</li>\r\n    <li>A function expression - This is to reduce confusion and maintain parity with disallowing decorators on a function declaration.</li>\r\n    <li>An arrow function - This is to reduce confusion and maintain parity with disallowing decorators on a function expression.</li>\r\n  </ul>\r\n  <p>This list may change in the future.</p>\r\n</emu-clause>\r\n<emu-clause id=\"proposal-decoratoreval\">\r\n  <h1>Decorator Evaluation and Application Order</h1>\r\n  <emu-note>This section is non-normative.</emu-note>\r\n  <p>Decorators are <em>evaluated</em> in the order they appear preceeding their target declaration, to preserve side-effects due to evaluation order. Decorators are <em>applied</em> to their target declaration in reverse order, starting with the decorator closest to the declaration. This behavior is specified to preserve the expected behavior of decorators without a declarative syntax.</p>\r\n  <pre><code class=\"typescript\">@F\r\n@G\r\nclass C {   \r\n}\r\n</code></pre>\r\n  <p>For example, the above listing could be approximately written without decorators in the following fashion:</p>\r\n  <pre><code class=\"typescript\">C = F(G(C))</code></pre>\r\n  <p>In the above example, the expression <code>F</code> is evaluated first, followed by the expression <code>G</code>. <code>G</code> is then called with the constructor function as its argument, followed by calling <code>F</code> with the result. The actual process of applying decorators is more complex than the above example however, though you may still imperatively apply decorators with a reflection API.</p>\r\n  <p>If a class declaration has decorators on both the class and any of its members or parameters, the decorators are applied using the following pseudocode:</p>\r\n  <pre>\r\nfor each member M of class C\r\n  if M is an accessor then\r\n      let accessor = first accessor (get or set, in declaration order) of M\r\n      let memberDecorators = decorators of accessor\r\n      for each parameter of accessor\r\n          let paramDecorators = decorators of parameter           \r\n          let paramIndex = ordinal index of parameter\r\n          Reflect.decorate(paramDecorators, accessor, paramIndex)\r\n      next parameter\r\n\r\n      let accessor = second accessor (get or set, in declaration order) of M\r\n      if accessor then\r\n          let memberDecorators = memberDecorators + decorators of accessor\r\n          for each parameter of accessor\r\n              let paramDecorators = decorators of parameter           \r\n              let paramIndex = ordinal index of parameter\r\n              Reflect.decorate(paramDecorators, accessor, paramIndex)\r\n          next parameter\r\n      end if\r\n  else if M is a method\r\n      let memberDecorators = decorators of M\r\n      for each parameter of M\r\n          let paramDecorators = decorators of parameter           \r\n          let paramIndex = ordinal index of parameter\r\n          Reflect.decorate(paramDecorators, M, paramIndex)\r\n      next parameter\r\n  else\r\n      let memberDecorators = decorators of M\r\n  end if\r\n\r\n  let name = name of M\r\n  let target = C.prototype if M is on the prototype; otherwise, C if M is static  \r\n  Reflect.decorate(memberDecorators, C, name)\r\nnext member\r\n\r\nfor each parameter of C\r\n  let paramDecorators = decorators of parameter\r\n  let paramIndex = ordinal index of parameter\r\n  Reflect.decorate(paramDecorators, C, paramIndex)\r\nnext parameter\r\n\r\nlet classDecorators = decorators of C\r\nlet C = Reflect.decorate(classDecorators, C)\r\n  </pre>\r\n</emu-clause>\r\n\r\n<emu-clause id=\"reflect\">\r\n  <h1>Reflect API</h1>\r\n  <emu-note>This section is non-normative.</emu-note>\r\n  <p>In addition to a declarative approach to defining decorators, it is necessary to also include an imperative API capable of applying decorators, as well as defining, reflecting over, and removing decorator metadata from an object, property, or parameter.</p>\r\n  <p>A shim for this API can be found here: <a href=\"https://github.com/rbuckton/ReflectDecorators\">https://github.com/rbuckton/ReflectDecorators</a></p>\r\n  <pre><code class=\"typescript\">Reflect.decorate(decorators, target, propertyKey?, descriptor?)</code></pre>  \r\n</emu-clause>\r\n\r\n<emu-clause id=\"transpile\">\r\n  <h1>Transformation</h1>\r\n  <p>The following are examples of how decorators can be desugared to ES6 (through a transpiler such as TypeScript). These examples levarage an imperative reflection API.</p>\r\n  <emu-clause id=\"transpile-class\">\r\n    <h1>Class Declaration</h1>\r\n    <h2>Syntax</h2>\r\n    <pre><code class=\"typescript\">@F(\"color\")\r\n@G\r\nclass C {  \r\n}\r\n    </code></pre>\r\n    <h2>ES6 Transformation</h2>\r\n    <pre><code class=\"javascript\">let C = class {\r\n}\r\nObject.defineProperty(C, \"name\", { value: \"C\", configurable: true });\r\nC = __decorate([F(\"color\"), G], C);\r\n    </code></pre>\r\n  </emu-clause>\r\n\r\n  <emu-clause id=\"transpile-exportclass\">\r\n    <h1>Class Declaration (Exported)</h1>\r\n    <h2>Syntax</h2>\r\n    <pre><code class=\"typescript\">@F(\"color\")\r\n@G\r\nexport class C {\r\n}\r\n    </code></pre>\r\n    <h2>ES6 Transformation</h2>\r\n    <pre><code class=\"javascript\">export let C = class {\r\n}\r\nObject.defineProperty(C, \"name\", { value: \"C\", configurable: true });\r\nC = __decorate([F(\"color\"), G], C);\r\n    </code></pre>\r\n  </emu-clause>\r\n\r\n  <emu-clause id=\"transpile-exportdefaultclass\">\r\n    <h1>Class Declaration (Default, Exported)</h1>\r\n    <h2>Syntax</h2>\r\n    <pre><code class=\"typescript\">@F(\"color\")\r\n@G\r\nexport default class C {\r\n}\r\n    </code></pre>\r\n    <h2>ES6 Transformation</h2>\r\n    <pre><code class=\"javascript\">let C = class {\r\n}\r\nObject.defineProperty(C, \"name\", { value: \"C\", configurable: true });\r\nC = __decorate([F(\"color\"), G], C);\r\nexport default C;\r\n    </code></pre>\r\n  </emu-clause>\r\n\r\n  <emu-clause id=\"transpile-classmethod\">\r\n    <h1>Class Method Declaration</h1>\r\n    <h2>Syntax</h2>\r\n    <pre><code class=\"typescript\">class C {\r\n    @F(\"color\")\r\n    @G\r\n    method() { }\r\n}\r\n    </code></pre>\r\n    <h2>ES6 Transformation</h2>\r\n    <pre><code class=\"javascript\">class C {\r\n    method() { }\r\n}\r\nObject.defineProperty(C.prototype, \"method\", \r\n    __decorate([F(\"color\"), G], C.prototype, \"method\", Object.getOwnPropertyDescriptor(C.prototype, \"method\")));\r\n    </code></pre>\r\n  </emu-clause>\r\n\r\n  <emu-clause id=\"transpile-classaccessor\">\r\n    <h1>Class Accessor Declaration</h1>\r\n    <h2>Syntax</h2>\r\n    <pre><code class=\"typescript\">class C {\r\n    @F(\"color\")\r\n    @G\r\n    get accessor() { }\r\n    set accessor(value) { }\r\n}\r\n    </code></pre>\r\n    <h2>ES6 Transformation</h2>\r\n    <pre><code class=\"javascript\">class C {\r\n    get accessor() { }\r\n    set accessor(value) { }\r\n}\r\nObject.defineProperty(C.prototype, \"accessor\", \r\n    __decorate([F(\"color\"), G], C.prototype, \"accessor\", Object.getOwnPropertyDescriptor(C.prototype, \"accessor\")));\r\n    </code></pre>\r\n  </emu-clause>\r\n\r\n  <emu-clause id=\"transpile-classproperty\">\r\n    <h1>Class Property Declaration</h1>\r\n    <h2>Syntax</h2>\r\n    <pre><code class=\"typescript\">class C {\r\n    @F(\"color\")\r\n    @G\r\n    property = 1;\r\n}\r\n    </code></pre>\r\n    <h2>ES6 Transformation</h2>\r\n    <pre><code class=\"javascript\">class C {\r\n    constructor() {\r\n        this.property = 1;\r\n    }\r\n}\r\n__decorate([F(\"color\"), G], C.prototype, \"property\");\r\n    </code></pre>\r\n  </emu-clause>\r\n\r\n  <emu-clause id=\"transpile-classconstructorparameter\">\r\n    <h1>Class Constructor Parameter Declaration</h1>\r\n    <h2>Syntax</h2>\r\n    <pre><code class=\"typescript\">class C {\r\n    constructor(@F(\"color\") @G p) { }\r\n}\r\n    </code></pre>\r\n    <h2>ES6 Transformation</h2>\r\n    <pre><code class=\"javascript\">class C {\r\n    constructor(p) { }\r\n}\r\n__decorate([F(\"color\"), G], C, void 0, 0);\r\n    </code></pre>\r\n  </emu-clause>\r\n\r\n  <emu-clause id=\"transpile-classmethodparameter\">\r\n    <h1>Class Method Parameter Declaration</h1>\r\n    <h2>Syntax</h2>\r\n    <pre><code class=\"typescript\">class C {\r\n    method(@F(\"color\") @G p) { }\r\n}\r\n    </code></pre>\r\n    <h2>ES6 Transformation</h2>\r\n    <pre><code class=\"javascript\">class C {\r\n    method(p) { }\r\n}\r\n__decorate([F(\"color\"), G], C.prototype, \"method\", 0);\r\n    </code></pre>\r\n  </emu-clause>\r\n\r\n  <emu-clause id=\"transpile-classaccessorparameter\">\r\n    <h1>Class Set Accessor Parameter Declaration</h1>\r\n    <h2>Syntax</h2>\r\n    <pre><code class=\"typescript\">class C {\r\n    set accessor(@F(\"color\") @G p) { }\r\n}\r\n    </code></pre>\r\n    <h2>ES6 Transformation</h2>\r\n    <pre><code class=\"javascript\">class C {\r\n    set accessor(p) { }\r\n}\r\n__decorate([F(\"color\"), G], C.prototype, \"accessor\", 0);\r\n    </code></pre>\r\n  </emu-clause>\r\n\r\n</emu-clause>\r\n\r\n<emu-annex id=\"grammar\">\r\n  <h1>Grammar</h1>\r\n  <emu-annex id=\"grammar-expressions\">\r\n    <h1>Expressions</h1>\r\n    <emu-production id=\"grammar-memberexpression\" name=\"MemberExpression\" params=\"Yield, Decorator\">\r\n      <emu-rhs><emu-nt params=\"?Yield\">PrimaryExpression</emu-nt></emu-rhs>\r\n      <emu-rhs constraints=\"~Decorator\"><emu-nt params=\"?Yield, ?Decorator\">MemberExpression</emu-nt><emu-t>[</emu-t><emu-nt params=\"In, ?Yield\">Expression</emu-nt><emu-t>]</emu-t></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">MemberExpression</emu-nt><emu-t>.</emu-t><emu-nt>IdentifierName</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">MemberExpression</emu-nt><emu-nt params=\"?Yield\">TemplateLiteral</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">SuperProperty</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt>MetaProperty</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-t>new</emu-t><emu-nt params=\"?Yield, ?Decorator\">MemberExpression</emu-nt><emu-nt params=\"?Yield\">Arguments</emu-nt></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-superproperty\" name=\"SuperProperty\" params=\"Yield, Decorator\">\r\n      <emu-rhs constraints=\"~Decorator\"><emu-t>super</emu-t><emu-t>[</emu-t><emu-nt params=\"In, ?Yield\">Expression</emu-nt><emu-t>]</emu-t></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-newexpression\" name=\"NewExpression\" params=\"Yield, Decorator\">\r\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">MemberExpression</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-t>new</emu-t><emu-nt params=\"?Yield, ?Decorator\">NewExpression</emu-nt></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-callexpression\" name=\"CallExpression\" params=\"Yield, Decorator\">\r\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">MemberExpression</emu-nt> <emu-nt params=\"?Yield\">Arguments</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield\">SuperCall</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">CallExpression</emu-nt> <emu-nt params=\"?Yield\">Arguments</emu-nt></emu-rhs>\r\n      <emu-rhs constraints=\"~Decorator\"><emu-nt params=\"?Yield\">CallExpression</emu-nt> <emu-t>[</emu-t> <emu-nt params=\"In, ?Yield\">Expression</emu-nt> <emu-t>]</emu-t></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">CallExpression</emu-nt> <emu-t>.</emu-t> <emu-nt>IdentifierName</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">CallExpression</emu-nt> <emu-nt params=\"?Yield\">TemplateLiteral</emu-nt></emu-rhs>      \r\n    </emu-production>\r\n    <emu-production id=\"grammar-lefthandsideexpression\" name=\"LeftHandSideExpression\" params=\"Yield, Decorator\">\r\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">NewExpression</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield, ?Decorator\">CallExpression</emu-nt></emu-rhs>\r\n    </emu-production>\r\n  </emu-annex>\r\n\r\n  <emu-annex id=\"functions-and-classes\">\r\n    <h1>Functions and Classes</h1>\r\n    <emu-production id=\"grammar-strictformalparameters\" name=\"StrictFormalParameters\" params=\"Yield, GeneratorParameter, ClassParameter\">\r\n      <emu-rhs><emu-nt params=\"?Yield, ?GeneratorParameter, ?ClassParameter\">FormalParameters</emu-nt></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-formalparameters\" name=\"FormalParameters\" params=\"Yield, GeneratorParameter, ClassParameter\">\r\n      <emu-rhs><emu-prose>[empty]</emu-prose></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield, ?GeneratorParameter, ?ClassParameter\">FormalParameterList</emu-nt></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-formalparameterlist\" name=\"FormalParameterList\" params=\"Yield, GeneratorParameter, ClassParameter\">\r\n      <emu-rhs><emu-nt params=\"?Yield, ?ClassParameter\">FunctionRestParameter</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield, ?GeneratorParameter, ?ClassParameter\">FormalsList</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield, ?GeneratorParameter, ?ClassParameter\">FormalsList</emu-nt><emu-t>,</emu-t><emu-nt params=\"?Yield, ?ClassParameter\">FunctionRestParameter</emu-nt></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-formalslist\" name=\"FormalsList\" params=\"Yield, GeneratorParameter, ClassParameter\">\r\n      <emu-rhs><emu-nt params=\"?Yield, ?GeneratorParameter, ?ClassParameter\">FormalParameter</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield, ?GeneratorParameter, ?ClassParameter\">FormalsList</emu-nt><emu-t>,</emu-t><emu-nt params=\"?Yield, ?GeneratorParameter, ?ClassParameter\">FormalParameter</emu-nt></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-functionrestparameter\" name=\"FunctionRestParameter\" params=\"Yield, ClassParameter\">\r\n      <emu-rhs><emu-nt params=\"?Yield\">BindingRestElement</emu-nt></emu-rhs>\r\n      <emu-rhs constraints=\"+ClassParameter\"><emu-nt>DecoratorList</emu-nt><emu-nt params=\"?Yield\">BindingRestElement</emu-nt></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-formalparameter\" name=\"FormalParameter\" params=\"Yield, GeneratorParameter, ClassParameter\">\r\n      <emu-rhs><emu-nt params=\"?Yield, ?GeneratorParameter\">BindingElement</emu-nt></emu-rhs>\r\n      <emu-rhs constraints=\"+ClassParameter\"><emu-nt>DecoratorList</emu-nt><emu-nt params=\"?Yield, ?GeneratorParameter\">BindingElement</emu-nt></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-methoddefinition\" name=\"MethodDefinition\" params=\"Yield, ClassParameter\">\r\n      <emu-rhs><emu-nt params=\"?Yield\">PropertyName</emu-nt> <emu-t>(</emu-t> <emu-nt params=\"?ClassParameter\">StrictFormalParameters</emu-nt> <emu-t>)</emu-t> <emu-t>{</emu-t> <emu-nt>FunctionBody</emu-nt> <emu-t>}</emu-t></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield, ?ClassParameter\">GeneratorMethod</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-t>get</emu-t><emu-nt params=\"?Yield\">PropertyName</emu-nt> <emu-t>(</emu-t> <emu-t>)</emu-t> <emu-t>{</emu-t> <emu-nt>FunctionBody</emu-nt> <emu-t>}</emu-t></emu-rhs>\r\n      <emu-rhs><emu-t>set</emu-t><emu-nt params=\"?Yield\">PropertyName</emu-nt> <emu-t>(</emu-t> <emu-nt params=\"?ClassParameter\">PropertySetParameterList</emu-nt> <emu-t>)</emu-t> <emu-t>{</emu-t> <emu-nt>FunctionBody</emu-nt> <emu-t>}</emu-t></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-generatormethod\" name=\"GeneratorMethod\" params=\"Yield, ClassParameter\">\r\n      <emu-rhs><emu-t>*</emu-t><emu-nt params=\"?Yield\">PropertyName</emu-nt> <emu-t>(</emu-t> <emu-nt params=\"Yield, GeneratorParameter, ?ClassParameter\">StrictFormalParameters</emu-nt> <emu-t>)</emu-t> <emu-t>{</emu-t> <emu-nt>GeneratorBody</emu-nt> <emu-t>}</emu-t></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-classdeclaration\" name=\"ClassDeclaration\" params=\"Yield, Default\">\r\n      <emu-rhs><emu-nt params=\"?Yield\" optional>DecoratorList</emu-nt> <emu-t>class</emu-t> <emu-nt params=\"?Yield\">BindingIdentifier</emu-nt> <emu-nt params=\"?Yield\">ClassTail</emu-nt></emu-rhs>\r\n      <emu-rhs constraints=\"+Default\"><emu-nt params=\"?Yield\" optional>DecoratorList</emu-nt> <emu-t>class</emu-t> <emu-nt params=\"?Yield\">ClassTail</emu-nt></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-classexpression\" name=\"ClassExpression\" params=\"Yield, GeneratorParameter\">\r\n      <emu-rhs><emu-nt params=\"?Yield\" optional>DecoratorList</emu-nt> <emu-t>class</emu-t> <emu-nt params=\"?Yield\" optional>BindingIdentifier</emu-nt> <emu-nt params=\"?Yield, ?GeneratorParameter\">ClassTail</emu-nt></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-classelement\" name=\"ClassElement\" params=\"Yield\">\r\n      <emu-rhs><emu-nt params=\"?Yield\" optional>DecoratorList</emu-nt> <emu-nt params=\"ClassParameter, ?Yield\">MethodDefinition</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield\" optional>DecoratorList</emu-nt> <emu-t>static</emu-t> <emu-nt params=\"ClassParameter, ?Yield\">MethodDefinition</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt params=\"?Yield\" optional>DecoratorList</emu-nt> <emu-t optional>static</emu-t> <emu-nt>PropertyName</emu-nt> <emu-nt params=\"In, ?Yield\" optional>Initializer</emu-nt> <emu-t>;</emu-t></emu-rhs>\r\n      <emu-rhs><emu-t>;</emu-t></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-decoratorlist\" name=\"DecoratorList\" params=\"Yield\">\r\n      <emu-rhs><emu-nt params=\"?Yield\" optional>DecoratorList</emu-nt> <emu-nt params=\"?Yield\">Decorator</emu-nt></emu-rhs>\r\n    </emu-production>\r\n    <emu-production id=\"grammar-decorator\" name=\"Decorator\" params=\"Yield\">\r\n      <emu-rhs><emu-t>@</emu-t> <emu-nt params=\"Decorator, ?Yield\">LeftHandSideExpression</emu-nt></emu-rhs>\r\n    </emu-production>\r\n  </emu-annex>\r\n\r\n  <emu-annex id=\"scripts-and-modules\">\r\n    <h1>Scripts and Modules</h1>\r\n    <emu-production id=\"grammar-exportdeclaration\" name=\"ExportDeclaration\">\r\n      <emu-rhs><emu-t>export</emu-t> <emu-t>*</emu-t> <emu-nt>FromClause</emu-nt> <emu-t>;</emu-t></emu-rhs>\r\n      <emu-rhs><emu-t>export</emu-t> <emu-nt>ExportClause</emu-nt> <emu-nt>FromClause</emu-nt> <emu-t>;</emu-t></emu-rhs>\r\n      <emu-rhs><emu-t>export</emu-t> <emu-nt>ExportClause</emu-nt> <emu-t>;</emu-t></emu-rhs>\r\n      <emu-rhs><emu-t>export</emu-t> <emu-nt>VariableStatement</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-t>export</emu-t> <emu-gann>lookahead ≠ <emu-t>@</emu-t></emu-gann> <emu-nt>Declaration</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-t>export</emu-t> <emu-t>default</emu-t> <emu-nt params=\"Default\">HoistableDeclaration</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-t>export</emu-t> <emu-t>default</emu-t> <emu-gann>lookahead ≠ <emu-t>@</emu-t></emu-gann> <emu-nt params=\"Default\">ClassDeclaration</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-t>export</emu-t> <emu-t>default</emu-t> <emu-gann>lookahead ∉ { <emu-t>function</emu-t>, <emu-t>class</emu-t>, <emu-t>@</emu-t> }</emu-gann> <emu-nt>AssignmentExpression</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt>DecoratorList</emu-nt> <emu-t>export</emu-t> <emu-gann>lookahead ≠ <emu-t>@</emu-t></emu-gann> <emu-nt>ClassDeclaration</emu-nt></emu-rhs>\r\n      <emu-rhs><emu-nt>DecoratorList</emu-nt> <emu-t>export</emu-t> <emu-t>default</emu-t> <emu-gann>lookahead ≠ <emu-t>@</emu-t></emu-gann> <emu-nt params=\"Default\">ClassDeclaration</emu-nt></emu-rhs>\r\n    </emu-production>\r\n  </emu-annex>\r\n</emu-annex>\r\n<emu-annex id=\"typescript\">\r\n  <h1>TypeScript</h1>\r\n  <emu-annex id=\"typescript-definitions\">\r\n    <h1>TypeScript Definitions</h1>\r\n    <pre><code class=\"typescript\">interface TypedPropertyDescriptor&lt;T&gt; {  \r\n    enumerable?: boolean;  \r\n    configurable?: boolean;  \r\n    writable?: boolean;  \r\n    value?: T;  \r\n    get?: () =&gt; T;  \r\n    set?: (value: T) =&gt; void;  \r\n}  \r\n\r\ntype ClassDecorator = &lt;TFunction extends Function&gt;(target: TFunction): TFunction | void;\r\ntype MethodDecorator = &lt;T&gt;(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor&lt;T&gt;): TypedPropertyDescriptor&lt;T&gt; | void;\r\ntype PropertyDecorator = (target: Object, propertyKey: string | symbol): void;\r\ntype ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number): void;\r\n</code></pre>\r\n  </emu-annex>  \r\n</emu-annex>";

/***/ },
/* 679 */
/***/ function(module, exports) {

	"use strict";
	function runTests(fixture) {
	    var results = { passed: [], failed: [] };
	    for (var testName in fixture) {
	        var test = fixture[testName];
	        if (typeof test === "function") {
	            try {
	                test();
	                results.passed.push(testName);
	            }
	            catch (e) {
	                results.failed.push([testName, e]);
	            }
	        }
	    }
	    return results;
	}
	exports.runTests = runTests;
	function printResults(results) {
	    for (var _i = 0, _a = results.failed; _i < _a.length; _i++) {
	        var _b = _a[_i], testName = _b[0], error = _b[1];
	        var message_1 = "stack" in error ? error.stack : String(error);
	        console.error(testName + " failed.\n" + message_1);
	    }
	    var passedCount = results.passed.length;
	    var failedCount = results.failed.length;
	    var totalCount = passedCount + failedCount;
	    var message = "Run " + (failedCount > 0 ? "failed" : "succeeded") + ": passed: " + passedCount + ", failed: " + failedCount + ", total: " + totalCount + ".";
	    if (results.failed.length) {
	        console.error(message);
	    }
	    else {
	        console.log(message);
	    }
	}
	exports.printResults = printResults;


/***/ },
/* 680 */
/***/ function(module, exports, __webpack_require__) {

	// Reflect.decorate ( decorators, target [, propertyKey [, descriptor] ] )
	"use strict";
	__webpack_require__(660);
	var assert = __webpack_require__(681);
	function ReflectDecorateThrowsIfDecoratorsArgumentNotArrayForFunctionOverload() {
	    var target = function () { };
	    assert.throws(function () { return Reflect.decorate(undefined, target, undefined, undefined); }, TypeError);
	}
	exports.ReflectDecorateThrowsIfDecoratorsArgumentNotArrayForFunctionOverload = ReflectDecorateThrowsIfDecoratorsArgumentNotArrayForFunctionOverload;
	function ReflectDecorateThrowsIfTargetArgumentNotFunctionForFunctionOverload() {
	    var decorators = [];
	    var target = {};
	    assert.throws(function () { return Reflect.decorate(decorators, target, undefined, undefined); }, TypeError);
	}
	exports.ReflectDecorateThrowsIfTargetArgumentNotFunctionForFunctionOverload = ReflectDecorateThrowsIfTargetArgumentNotFunctionForFunctionOverload;
	function ReflectDecorateThrowsIfDecoratorsArgumentNotArrayForPropertyOverload() {
	    var target = {};
	    var name = "name";
	    assert.throws(function () { return Reflect.decorate(undefined, target, name, undefined); }, TypeError);
	}
	exports.ReflectDecorateThrowsIfDecoratorsArgumentNotArrayForPropertyOverload = ReflectDecorateThrowsIfDecoratorsArgumentNotArrayForPropertyOverload;
	function ReflectDecorateThrowsIfTargetArgumentNotObjectForPropertyOverload() {
	    var decorators = [];
	    var target = 1;
	    var name = "name";
	    assert.throws(function () { return Reflect.decorate(decorators, target, name, undefined); }, TypeError);
	}
	exports.ReflectDecorateThrowsIfTargetArgumentNotObjectForPropertyOverload = ReflectDecorateThrowsIfTargetArgumentNotObjectForPropertyOverload;
	function ReflectDecorateThrowsIfDecoratorsArgumentNotArrayForPropertyDescriptorOverload() {
	    var target = {};
	    var name = "name";
	    var descriptor = {};
	    assert.throws(function () { return Reflect.decorate(undefined, target, name, descriptor); }, TypeError);
	}
	exports.ReflectDecorateThrowsIfDecoratorsArgumentNotArrayForPropertyDescriptorOverload = ReflectDecorateThrowsIfDecoratorsArgumentNotArrayForPropertyDescriptorOverload;
	function ReflectDecorateThrowsIfTargetArgumentNotObjectForPropertyDescriptorOverload() {
	    var decorators = [];
	    var target = 1;
	    var name = "name";
	    var descriptor = {};
	    assert.throws(function () { return Reflect.decorate(decorators, target, name, descriptor); }, TypeError);
	}
	exports.ReflectDecorateThrowsIfTargetArgumentNotObjectForPropertyDescriptorOverload = ReflectDecorateThrowsIfTargetArgumentNotObjectForPropertyDescriptorOverload;
	function ReflectDecorateExecutesDecoratorsInReverseOrderForFunctionOverload() {
	    var order = [];
	    var decorators = [
	        function (target) { order.push(0); },
	        function (target) { order.push(1); }
	    ];
	    var target = function () { };
	    Reflect.decorate(decorators, target);
	    assert.deepEqual(order, [1, 0]);
	}
	exports.ReflectDecorateExecutesDecoratorsInReverseOrderForFunctionOverload = ReflectDecorateExecutesDecoratorsInReverseOrderForFunctionOverload;
	function ReflectDecorateExecutesDecoratorsInReverseOrderForPropertyOverload() {
	    var order = [];
	    var decorators = [
	        function (target, name) { order.push(0); },
	        function (target, name) { order.push(1); }
	    ];
	    var target = {};
	    var name = "name";
	    Reflect.decorate(decorators, target, name, undefined);
	    assert.deepEqual(order, [1, 0]);
	}
	exports.ReflectDecorateExecutesDecoratorsInReverseOrderForPropertyOverload = ReflectDecorateExecutesDecoratorsInReverseOrderForPropertyOverload;
	function ReflectDecorateExecutesDecoratorsInReverseOrderForPropertyDescriptorOverload() {
	    var order = [];
	    var decorators = [
	        function (target, name) { order.push(0); },
	        function (target, name) { order.push(1); }
	    ];
	    var target = {};
	    var name = "name";
	    var descriptor = {};
	    Reflect.decorate(decorators, target, name, descriptor);
	    assert.deepEqual(order, [1, 0]);
	}
	exports.ReflectDecorateExecutesDecoratorsInReverseOrderForPropertyDescriptorOverload = ReflectDecorateExecutesDecoratorsInReverseOrderForPropertyDescriptorOverload;
	function ReflectDecoratorPipelineForFunctionOverload() {
	    var A = function A() { };
	    var B = function B() { };
	    var decorators = [
	        function (target) { return undefined; },
	        function (target) { return A; },
	        function (target) { return B; }
	    ];
	    var target = function () { };
	    var result = Reflect.decorate(decorators, target);
	    assert.strictEqual(result, A);
	}
	exports.ReflectDecoratorPipelineForFunctionOverload = ReflectDecoratorPipelineForFunctionOverload;
	function ReflectDecoratorPipelineForPropertyOverload() {
	    var A = {};
	    var B = {};
	    var decorators = [
	        function (target, name) { return undefined; },
	        function (target, name) { return A; },
	        function (target, name) { return B; }
	    ];
	    var target = {};
	    var result = Reflect.decorate(decorators, target, "name", undefined);
	    assert.strictEqual(result, undefined);
	}
	exports.ReflectDecoratorPipelineForPropertyOverload = ReflectDecoratorPipelineForPropertyOverload;
	function ReflectDecoratorPipelineForPropertyDescriptorOverload() {
	    var A = {};
	    var B = {};
	    var C = {};
	    var decorators = [
	        function (target, name) { return undefined; },
	        function (target, name) { return A; },
	        function (target, name) { return B; }
	    ];
	    var target = {};
	    var result = Reflect.decorate(decorators, target, "name", C);
	    assert.strictEqual(result, A);
	}
	exports.ReflectDecoratorPipelineForPropertyDescriptorOverload = ReflectDecoratorPipelineForPropertyDescriptorOverload;
	function ReflectDecoratorCorrectTargetInPipelineForFunctionOverload() {
	    var sent = [];
	    var A = function A() { };
	    var B = function B() { };
	    var decorators = [
	        function (target) { sent.push(target); return undefined; },
	        function (target) { sent.push(target); return undefined; },
	        function (target) { sent.push(target); return A; },
	        function (target) { sent.push(target); return B; }
	    ];
	    var target = function () { };
	    Reflect.decorate(decorators, target);
	    assert.deepEqual(sent, [target, B, A, A]);
	}
	exports.ReflectDecoratorCorrectTargetInPipelineForFunctionOverload = ReflectDecoratorCorrectTargetInPipelineForFunctionOverload;
	function ReflectDecoratorCorrectTargetInPipelineForPropertyOverload() {
	    var sent = [];
	    var decorators = [
	        function (target, name) { sent.push(target); },
	        function (target, name) { sent.push(target); },
	        function (target, name) { sent.push(target); },
	        function (target, name) { sent.push(target); }
	    ];
	    var target = {};
	    Reflect.decorate(decorators, target, "name");
	    assert.deepEqual(sent, [target, target, target, target]);
	}
	exports.ReflectDecoratorCorrectTargetInPipelineForPropertyOverload = ReflectDecoratorCorrectTargetInPipelineForPropertyOverload;
	function ReflectDecoratorCorrectNameInPipelineForPropertyOverload() {
	    var sent = [];
	    var decorators = [
	        function (target, name) { sent.push(name); },
	        function (target, name) { sent.push(name); },
	        function (target, name) { sent.push(name); },
	        function (target, name) { sent.push(name); }
	    ];
	    var target = {};
	    Reflect.decorate(decorators, target, "name");
	    assert.deepEqual(sent, ["name", "name", "name", "name"]);
	}
	exports.ReflectDecoratorCorrectNameInPipelineForPropertyOverload = ReflectDecoratorCorrectNameInPipelineForPropertyOverload;
	function ReflectDecoratorCorrectTargetInPipelineForPropertyDescriptorOverload() {
	    var sent = [];
	    var A = {};
	    var B = {};
	    var C = {};
	    var decorators = [
	        function (target, name) { sent.push(target); return undefined; },
	        function (target, name) { sent.push(target); return undefined; },
	        function (target, name) { sent.push(target); return A; },
	        function (target, name) { sent.push(target); return B; }
	    ];
	    var target = {};
	    Reflect.decorate(decorators, target, "name", C);
	    assert.deepEqual(sent, [target, target, target, target]);
	}
	exports.ReflectDecoratorCorrectTargetInPipelineForPropertyDescriptorOverload = ReflectDecoratorCorrectTargetInPipelineForPropertyDescriptorOverload;
	function ReflectDecoratorCorrectNameInPipelineForPropertyDescriptorOverload() {
	    var sent = [];
	    var A = {};
	    var B = {};
	    var C = {};
	    var decorators = [
	        function (target, name) { sent.push(name); return undefined; },
	        function (target, name) { sent.push(name); return undefined; },
	        function (target, name) { sent.push(name); return A; },
	        function (target, name) { sent.push(name); return B; }
	    ];
	    var target = {};
	    Reflect.decorate(decorators, target, "name", C);
	    assert.deepEqual(sent, ["name", "name", "name", "name"]);
	}
	exports.ReflectDecoratorCorrectNameInPipelineForPropertyDescriptorOverload = ReflectDecoratorCorrectNameInPipelineForPropertyDescriptorOverload;
	function ReflectDecoratorCorrectDescriptorInPipelineForPropertyDescriptorOverload() {
	    var sent = [];
	    var A = {};
	    var B = {};
	    var C = {};
	    var decorators = [
	        function (target, name, descriptor) { sent.push(descriptor); return undefined; },
	        function (target, name, descriptor) { sent.push(descriptor); return undefined; },
	        function (target, name, descriptor) { sent.push(descriptor); return A; },
	        function (target, name, descriptor) { sent.push(descriptor); return B; }
	    ];
	    var target = {};
	    Reflect.decorate(decorators, target, "name", C);
	    assert.deepEqual(sent, [C, B, A, A]);
	}
	exports.ReflectDecoratorCorrectDescriptorInPipelineForPropertyDescriptorOverload = ReflectDecoratorCorrectDescriptorInPipelineForPropertyDescriptorOverload;


/***/ },
/* 681 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
	// original notice:

	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	function compare(a, b) {
	  if (a === b) {
	    return 0;
	  }

	  var x = a.length;
	  var y = b.length;

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break;
	    }
	  }

	  if (x < y) {
	    return -1;
	  }
	  if (y < x) {
	    return 1;
	  }
	  return 0;
	}
	function isBuffer(b) {
	  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
	    return global.Buffer.isBuffer(b);
	  }
	  return !!(b != null && b._isBuffer);
	}

	// based on node assert, original notice:

	// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
	//
	// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
	//
	// Originally from narwhal.js (http://narwhaljs.org)
	// Copyright (c) 2009 Thomas Robinson <280north.com>
	//
	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the 'Software'), to
	// deal in the Software without restriction, including without limitation the
	// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
	// sell copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:
	//
	// The above copyright notice and this permission notice shall be included in
	// all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

	var util = __webpack_require__(682);
	var hasOwn = Object.prototype.hasOwnProperty;
	var pSlice = Array.prototype.slice;
	var functionsHaveNames = (function () {
	  return function foo() {}.name === 'foo';
	}());
	function pToString (obj) {
	  return Object.prototype.toString.call(obj);
	}
	function isView(arrbuf) {
	  if (isBuffer(arrbuf)) {
	    return false;
	  }
	  if (typeof global.ArrayBuffer !== 'function') {
	    return false;
	  }
	  if (typeof ArrayBuffer.isView === 'function') {
	    return ArrayBuffer.isView(arrbuf);
	  }
	  if (!arrbuf) {
	    return false;
	  }
	  if (arrbuf instanceof DataView) {
	    return true;
	  }
	  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
	    return true;
	  }
	  return false;
	}
	// 1. The assert module provides functions that throw
	// AssertionError's when particular conditions are not met. The
	// assert module must conform to the following interface.

	var assert = module.exports = ok;

	// 2. The AssertionError is defined in assert.
	// new assert.AssertionError({ message: message,
	//                             actual: actual,
	//                             expected: expected })

	var regex = /\s*function\s+([^\(\s]*)\s*/;
	// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
	function getName(func) {
	  if (!util.isFunction(func)) {
	    return;
	  }
	  if (functionsHaveNames) {
	    return func.name;
	  }
	  var str = func.toString();
	  var match = str.match(regex);
	  return match && match[1];
	}
	assert.AssertionError = function AssertionError(options) {
	  this.name = 'AssertionError';
	  this.actual = options.actual;
	  this.expected = options.expected;
	  this.operator = options.operator;
	  if (options.message) {
	    this.message = options.message;
	    this.generatedMessage = false;
	  } else {
	    this.message = getMessage(this);
	    this.generatedMessage = true;
	  }
	  var stackStartFunction = options.stackStartFunction || fail;
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, stackStartFunction);
	  } else {
	    // non v8 browsers so we can have a stacktrace
	    var err = new Error();
	    if (err.stack) {
	      var out = err.stack;

	      // try to strip useless frames
	      var fn_name = getName(stackStartFunction);
	      var idx = out.indexOf('\n' + fn_name);
	      if (idx >= 0) {
	        // once we have located the function frame
	        // we need to strip out everything before it (and its line)
	        var next_line = out.indexOf('\n', idx + 1);
	        out = out.substring(next_line + 1);
	      }

	      this.stack = out;
	    }
	  }
	};

	// assert.AssertionError instanceof Error
	util.inherits(assert.AssertionError, Error);

	function truncate(s, n) {
	  if (typeof s === 'string') {
	    return s.length < n ? s : s.slice(0, n);
	  } else {
	    return s;
	  }
	}
	function inspect(something) {
	  if (functionsHaveNames || !util.isFunction(something)) {
	    return util.inspect(something);
	  }
	  var rawname = getName(something);
	  var name = rawname ? ': ' + rawname : '';
	  return '[Function' +  name + ']';
	}
	function getMessage(self) {
	  return truncate(inspect(self.actual), 128) + ' ' +
	         self.operator + ' ' +
	         truncate(inspect(self.expected), 128);
	}

	// At present only the three keys mentioned above are used and
	// understood by the spec. Implementations or sub modules can pass
	// other keys to the AssertionError's constructor - they will be
	// ignored.

	// 3. All of the following functions must throw an AssertionError
	// when a corresponding condition is not met, with a message that
	// may be undefined if not provided.  All assertion methods provide
	// both the actual and expected values to the assertion error for
	// display purposes.

	function fail(actual, expected, message, operator, stackStartFunction) {
	  throw new assert.AssertionError({
	    message: message,
	    actual: actual,
	    expected: expected,
	    operator: operator,
	    stackStartFunction: stackStartFunction
	  });
	}

	// EXTENSION! allows for well behaved errors defined elsewhere.
	assert.fail = fail;

	// 4. Pure assertion tests whether a value is truthy, as determined
	// by !!guard.
	// assert.ok(guard, message_opt);
	// This statement is equivalent to assert.equal(true, !!guard,
	// message_opt);. To test strictly for the value true, use
	// assert.strictEqual(true, guard, message_opt);.

	function ok(value, message) {
	  if (!value) fail(value, true, message, '==', assert.ok);
	}
	assert.ok = ok;

	// 5. The equality assertion tests shallow, coercive equality with
	// ==.
	// assert.equal(actual, expected, message_opt);

	assert.equal = function equal(actual, expected, message) {
	  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
	};

	// 6. The non-equality assertion tests for whether two objects are not equal
	// with != assert.notEqual(actual, expected, message_opt);

	assert.notEqual = function notEqual(actual, expected, message) {
	  if (actual == expected) {
	    fail(actual, expected, message, '!=', assert.notEqual);
	  }
	};

	// 7. The equivalence assertion tests a deep equality relation.
	// assert.deepEqual(actual, expected, message_opt);

	assert.deepEqual = function deepEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
	  }
	};

	assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
	  }
	};

	function _deepEqual(actual, expected, strict, memos) {
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	  } else if (isBuffer(actual) && isBuffer(expected)) {
	    return compare(actual, expected) === 0;

	  // 7.2. If the expected value is a Date object, the actual value is
	  // equivalent if it is also a Date object that refers to the same time.
	  } else if (util.isDate(actual) && util.isDate(expected)) {
	    return actual.getTime() === expected.getTime();

	  // 7.3 If the expected value is a RegExp object, the actual value is
	  // equivalent if it is also a RegExp object with the same source and
	  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
	  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
	    return actual.source === expected.source &&
	           actual.global === expected.global &&
	           actual.multiline === expected.multiline &&
	           actual.lastIndex === expected.lastIndex &&
	           actual.ignoreCase === expected.ignoreCase;

	  // 7.4. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if ((actual === null || typeof actual !== 'object') &&
	             (expected === null || typeof expected !== 'object')) {
	    return strict ? actual === expected : actual == expected;

	  // If both values are instances of typed arrays, wrap their underlying
	  // ArrayBuffers in a Buffer each to increase performance
	  // This optimization requires the arrays to have the same type as checked by
	  // Object.prototype.toString (aka pToString). Never perform binary
	  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
	  // bit patterns are not identical.
	  } else if (isView(actual) && isView(expected) &&
	             pToString(actual) === pToString(expected) &&
	             !(actual instanceof Float32Array ||
	               actual instanceof Float64Array)) {
	    return compare(new Uint8Array(actual.buffer),
	                   new Uint8Array(expected.buffer)) === 0;

	  // 7.5 For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else if (isBuffer(actual) !== isBuffer(expected)) {
	    return false;
	  } else {
	    memos = memos || {actual: [], expected: []};

	    var actualIndex = memos.actual.indexOf(actual);
	    if (actualIndex !== -1) {
	      if (actualIndex === memos.expected.indexOf(expected)) {
	        return true;
	      }
	    }

	    memos.actual.push(actual);
	    memos.expected.push(expected);

	    return objEquiv(actual, expected, strict, memos);
	  }
	}

	function isArguments(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	}

	function objEquiv(a, b, strict, actualVisitedObjects) {
	  if (a === null || a === undefined || b === null || b === undefined)
	    return false;
	  // if one is a primitive, the other must be same
	  if (util.isPrimitive(a) || util.isPrimitive(b))
	    return a === b;
	  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
	    return false;
	  var aIsArgs = isArguments(a);
	  var bIsArgs = isArguments(b);
	  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
	    return false;
	  if (aIsArgs) {
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return _deepEqual(a, b, strict);
	  }
	  var ka = objectKeys(a);
	  var kb = objectKeys(b);
	  var key, i;
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length !== kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] !== kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
	      return false;
	  }
	  return true;
	}

	// 8. The non-equivalence assertion tests for any deep inequality.
	// assert.notDeepEqual(actual, expected, message_opt);

	assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
	  }
	};

	assert.notDeepStrictEqual = notDeepStrictEqual;
	function notDeepStrictEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
	  }
	}


	// 9. The strict equality assertion tests strict equality, as determined by ===.
	// assert.strictEqual(actual, expected, message_opt);

	assert.strictEqual = function strictEqual(actual, expected, message) {
	  if (actual !== expected) {
	    fail(actual, expected, message, '===', assert.strictEqual);
	  }
	};

	// 10. The strict non-equality assertion tests for strict inequality, as
	// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

	assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
	  if (actual === expected) {
	    fail(actual, expected, message, '!==', assert.notStrictEqual);
	  }
	};

	function expectedException(actual, expected) {
	  if (!actual || !expected) {
	    return false;
	  }

	  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
	    return expected.test(actual);
	  }

	  try {
	    if (actual instanceof expected) {
	      return true;
	    }
	  } catch (e) {
	    // Ignore.  The instanceof check doesn't work for arrow functions.
	  }

	  if (Error.isPrototypeOf(expected)) {
	    return false;
	  }

	  return expected.call({}, actual) === true;
	}

	function _tryBlock(block) {
	  var error;
	  try {
	    block();
	  } catch (e) {
	    error = e;
	  }
	  return error;
	}

	function _throws(shouldThrow, block, expected, message) {
	  var actual;

	  if (typeof block !== 'function') {
	    throw new TypeError('"block" argument must be a function');
	  }

	  if (typeof expected === 'string') {
	    message = expected;
	    expected = null;
	  }

	  actual = _tryBlock(block);

	  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
	            (message ? ' ' + message : '.');

	  if (shouldThrow && !actual) {
	    fail(actual, expected, 'Missing expected exception' + message);
	  }

	  var userProvidedMessage = typeof message === 'string';
	  var isUnwantedException = !shouldThrow && util.isError(actual);
	  var isUnexpectedException = !shouldThrow && actual && !expected;

	  if ((isUnwantedException &&
	      userProvidedMessage &&
	      expectedException(actual, expected)) ||
	      isUnexpectedException) {
	    fail(actual, expected, 'Got unwanted exception' + message);
	  }

	  if ((shouldThrow && actual && expected &&
	      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
	    throw actual;
	  }
	}

	// 11. Expected to throw an error:
	// assert.throws(block, Error_opt, message_opt);

	assert.throws = function(block, /*optional*/error, /*optional*/message) {
	  _throws(true, block, error, message);
	};

	// EXTENSION! This is annoying to write outside this module.
	assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
	  _throws(false, block, error, message);
	};

	assert.ifError = function(err) { if (err) throw err; };

	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    if (hasOwn.call(obj, key)) keys.push(key);
	  }
	  return keys;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 682 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = ({"ENV":"production"}).NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(684);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(685);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(683)))

/***/ },
/* 683 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 684 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 685 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 686 */
/***/ function(module, exports, __webpack_require__) {

	// Reflect.defineMetadata ( metadataKey, metadataValue, target, propertyKey )
	// - https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#reflectdefinemetadata--metadatakey-metadatavalue-target-propertykey-    
	"use strict";
	__webpack_require__(660);
	var assert = __webpack_require__(681);
	function ReflectDefineMetadataInvalidTarget() {
	    assert.throws(function () { return Reflect.defineMetadata("key", "value", undefined, undefined); }, TypeError);
	}
	exports.ReflectDefineMetadataInvalidTarget = ReflectDefineMetadataInvalidTarget;
	function ReflectDefineMetadataValidTargetWithoutTargetKey() {
	    assert.doesNotThrow(function () { return Reflect.defineMetadata("key", "value", {}, undefined); });
	}
	exports.ReflectDefineMetadataValidTargetWithoutTargetKey = ReflectDefineMetadataValidTargetWithoutTargetKey;
	function ReflectDefineMetadataValidTargetWithTargetKey() {
	    assert.doesNotThrow(function () { return Reflect.defineMetadata("key", "value", {}, "name"); });
	}
	exports.ReflectDefineMetadataValidTargetWithTargetKey = ReflectDefineMetadataValidTargetWithTargetKey;


/***/ },
/* 687 */
/***/ function(module, exports, __webpack_require__) {

	// Reflect.deleteMetadata ( metadataKey, target [, propertyKey] )
	// - https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#reflectdeletemetadata--metadatakey-target--propertykey-
	"use strict";
	__webpack_require__(660);
	var assert = __webpack_require__(681);
	function ReflectDeleteMetadataInvalidTarget() {
	    assert.throws(function () { return Reflect.deleteMetadata("key", undefined, undefined); }, TypeError);
	}
	exports.ReflectDeleteMetadataInvalidTarget = ReflectDeleteMetadataInvalidTarget;
	function ReflectDeleteMetadataWhenNotDefinedWithoutTargetKey() {
	    var obj = {};
	    var result = Reflect.deleteMetadata("key", obj, undefined);
	    assert.equal(result, false);
	}
	exports.ReflectDeleteMetadataWhenNotDefinedWithoutTargetKey = ReflectDeleteMetadataWhenNotDefinedWithoutTargetKey;
	function ReflectDeleteMetadataWhenDefinedWithoutTargetKey() {
	    var obj = {};
	    Reflect.defineMetadata("key", "value", obj, undefined);
	    var result = Reflect.deleteMetadata("key", obj, undefined);
	    assert.equal(result, true);
	}
	exports.ReflectDeleteMetadataWhenDefinedWithoutTargetKey = ReflectDeleteMetadataWhenDefinedWithoutTargetKey;
	function ReflectDeleteMetadataWhenDefinedOnPrototypeWithoutTargetKey() {
	    var prototype = {};
	    Reflect.defineMetadata("key", "value", prototype, undefined);
	    var obj = Object.create(prototype);
	    var result = Reflect.deleteMetadata("key", obj, undefined);
	    assert.equal(result, false);
	}
	exports.ReflectDeleteMetadataWhenDefinedOnPrototypeWithoutTargetKey = ReflectDeleteMetadataWhenDefinedOnPrototypeWithoutTargetKey;
	function ReflectHasOwnMetadataAfterDeleteMetadata() {
	    var obj = {};
	    Reflect.defineMetadata("key", "value", obj, undefined);
	    Reflect.deleteMetadata("key", obj, undefined);
	    var result = Reflect.hasOwnMetadata("key", obj, undefined);
	    assert.equal(result, false);
	}
	exports.ReflectHasOwnMetadataAfterDeleteMetadata = ReflectHasOwnMetadataAfterDeleteMetadata;


/***/ },
/* 688 */
/***/ function(module, exports, __webpack_require__) {

	// Reflect.getMetadata ( metadataKey, target [, propertyKey] )
	// - https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#reflectgetmetadata--metadatakey-target--propertykey-
	"use strict";
	__webpack_require__(660);
	var assert = __webpack_require__(681);
	function ReflectGetMetadataInvalidTarget() {
	    assert.throws(function () { return Reflect.getMetadata("key", undefined, undefined); }, TypeError);
	}
	exports.ReflectGetMetadataInvalidTarget = ReflectGetMetadataInvalidTarget;
	function ReflectGetMetadataWithoutTargetKeyWhenNotDefined() {
	    var obj = {};
	    var result = Reflect.getMetadata("key", obj, undefined);
	    assert.equal(result, undefined);
	}
	exports.ReflectGetMetadataWithoutTargetKeyWhenNotDefined = ReflectGetMetadataWithoutTargetKeyWhenNotDefined;
	function ReflectGetMetadataWithoutTargetKeyWhenDefined() {
	    var obj = {};
	    Reflect.defineMetadata("key", "value", obj, undefined);
	    var result = Reflect.getMetadata("key", obj, undefined);
	    assert.equal(result, "value");
	}
	exports.ReflectGetMetadataWithoutTargetKeyWhenDefined = ReflectGetMetadataWithoutTargetKeyWhenDefined;
	function ReflectGetMetadataWithoutTargetKeyWhenDefinedOnPrototype() {
	    var prototype = {};
	    var obj = Object.create(prototype);
	    Reflect.defineMetadata("key", "value", prototype, undefined);
	    var result = Reflect.getMetadata("key", obj, undefined);
	    assert.equal(result, "value");
	}
	exports.ReflectGetMetadataWithoutTargetKeyWhenDefinedOnPrototype = ReflectGetMetadataWithoutTargetKeyWhenDefinedOnPrototype;
	function ReflectGetMetadataWithTargetKeyWhenNotDefined() {
	    var obj = {};
	    var result = Reflect.getMetadata("key", obj, "name");
	    assert.equal(result, undefined);
	}
	exports.ReflectGetMetadataWithTargetKeyWhenNotDefined = ReflectGetMetadataWithTargetKeyWhenNotDefined;
	function ReflectGetMetadataWithTargetKeyWhenDefined() {
	    var obj = {};
	    Reflect.defineMetadata("key", "value", obj, "name");
	    var result = Reflect.getMetadata("key", obj, "name");
	    assert.equal(result, "value");
	}
	exports.ReflectGetMetadataWithTargetKeyWhenDefined = ReflectGetMetadataWithTargetKeyWhenDefined;
	function ReflectGetMetadataWithTargetKeyWhenDefinedOnPrototype() {
	    var prototype = {};
	    var obj = Object.create(prototype);
	    Reflect.defineMetadata("key", "value", prototype, "name");
	    var result = Reflect.getMetadata("key", obj, "name");
	    assert.equal(result, "value");
	}
	exports.ReflectGetMetadataWithTargetKeyWhenDefinedOnPrototype = ReflectGetMetadataWithTargetKeyWhenDefinedOnPrototype;


/***/ },
/* 689 */
/***/ function(module, exports, __webpack_require__) {

	// Reflect.getMetadataKeys ( target [, propertyKey] )
	// - https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#reflectgetmetadatakeys--target--propertykey-
	"use strict";
	__webpack_require__(660);
	var assert = __webpack_require__(681);
	function ReflectGetMetadataKeysInvalidTarget() {
	    // 1. If Type(target) is not Object, throw a TypeError exception.
	    assert.throws(function () { return Reflect.getMetadataKeys(undefined, undefined); }, TypeError);
	}
	exports.ReflectGetMetadataKeysInvalidTarget = ReflectGetMetadataKeysInvalidTarget;
	function ReflectGetMetadataKeysWithoutTargetKeyWhenNotDefined() {
	    var obj = {};
	    var result = Reflect.getMetadataKeys(obj, undefined);
	    assert.deepEqual(result, []);
	}
	exports.ReflectGetMetadataKeysWithoutTargetKeyWhenNotDefined = ReflectGetMetadataKeysWithoutTargetKeyWhenNotDefined;
	function ReflectGetMetadataKeysWithoutTargetKeyWhenDefined() {
	    var obj = {};
	    Reflect.defineMetadata("key", "value", obj, undefined);
	    var result = Reflect.getMetadataKeys(obj, undefined);
	    assert.deepEqual(result, ["key"]);
	}
	exports.ReflectGetMetadataKeysWithoutTargetKeyWhenDefined = ReflectGetMetadataKeysWithoutTargetKeyWhenDefined;
	function ReflectGetMetadataKeysWithoutTargetKeyWhenDefinedOnPrototype() {
	    var prototype = {};
	    var obj = Object.create(prototype);
	    Reflect.defineMetadata("key", "value", prototype, undefined);
	    var result = Reflect.getMetadataKeys(obj, undefined);
	    assert.deepEqual(result, ["key"]);
	}
	exports.ReflectGetMetadataKeysWithoutTargetKeyWhenDefinedOnPrototype = ReflectGetMetadataKeysWithoutTargetKeyWhenDefinedOnPrototype;
	function ReflectGetMetadataKeysOrderWithoutTargetKey() {
	    var obj = {};
	    Reflect.defineMetadata("key1", "value", obj, undefined);
	    Reflect.defineMetadata("key0", "value", obj, undefined);
	    var result = Reflect.getMetadataKeys(obj, undefined);
	    assert.deepEqual(result, ["key1", "key0"]);
	}
	exports.ReflectGetMetadataKeysOrderWithoutTargetKey = ReflectGetMetadataKeysOrderWithoutTargetKey;
	function ReflectGetMetadataKeysOrderAfterRedefineWithoutTargetKey() {
	    var obj = {};
	    Reflect.defineMetadata("key1", "value", obj, undefined);
	    Reflect.defineMetadata("key0", "value", obj, undefined);
	    Reflect.defineMetadata("key1", "value", obj, undefined);
	    var result = Reflect.getMetadataKeys(obj, undefined);
	    assert.deepEqual(result, ["key1", "key0"]);
	}
	exports.ReflectGetMetadataKeysOrderAfterRedefineWithoutTargetKey = ReflectGetMetadataKeysOrderAfterRedefineWithoutTargetKey;
	function ReflectGetMetadataKeysOrderWithoutTargetKeyWhenDefinedOnPrototype() {
	    var prototype = {};
	    Reflect.defineMetadata("key2", "value", prototype, undefined);
	    var obj = Object.create(prototype);
	    Reflect.defineMetadata("key1", "value", obj, undefined);
	    Reflect.defineMetadata("key0", "value", obj, undefined);
	    var result = Reflect.getMetadataKeys(obj, undefined);
	    assert.deepEqual(result, ["key1", "key0", "key2"]);
	}
	exports.ReflectGetMetadataKeysOrderWithoutTargetKeyWhenDefinedOnPrototype = ReflectGetMetadataKeysOrderWithoutTargetKeyWhenDefinedOnPrototype;
	function ReflectGetMetadataKeysWithTargetKeyWhenNotDefined() {
	    var obj = {};
	    var result = Reflect.getMetadataKeys(obj, "name");
	    assert.deepEqual(result, []);
	}
	exports.ReflectGetMetadataKeysWithTargetKeyWhenNotDefined = ReflectGetMetadataKeysWithTargetKeyWhenNotDefined;
	function ReflectGetMetadataKeysWithTargetKeyWhenDefined() {
	    var obj = {};
	    Reflect.defineMetadata("key", "value", obj, "name");
	    var result = Reflect.getMetadataKeys(obj, "name");
	    assert.deepEqual(result, ["key"]);
	}
	exports.ReflectGetMetadataKeysWithTargetKeyWhenDefined = ReflectGetMetadataKeysWithTargetKeyWhenDefined;
	function ReflectGetMetadataKeysWithTargetKeyWhenDefinedOnPrototype() {
	    var prototype = {};
	    var obj = Object.create(prototype);
	    Reflect.defineMetadata("key", "value", prototype, "name");
	    var result = Reflect.getMetadataKeys(obj, "name");
	    assert.deepEqual(result, ["key"]);
	}
	exports.ReflectGetMetadataKeysWithTargetKeyWhenDefinedOnPrototype = ReflectGetMetadataKeysWithTargetKeyWhenDefinedOnPrototype;
	function ReflectGetMetadataKeysOrderAfterRedefineWithTargetKey() {
	    var obj = {};
	    Reflect.defineMetadata("key1", "value", obj, "name");
	    Reflect.defineMetadata("key0", "value", obj, "name");
	    Reflect.defineMetadata("key1", "value", obj, "name");
	    var result = Reflect.getMetadataKeys(obj, "name");
	    assert.deepEqual(result, ["key1", "key0"]);
	}
	exports.ReflectGetMetadataKeysOrderAfterRedefineWithTargetKey = ReflectGetMetadataKeysOrderAfterRedefineWithTargetKey;
	function ReflectGetMetadataKeysOrderWithTargetKeyWhenDefinedOnPrototype() {
	    var prototype = {};
	    Reflect.defineMetadata("key2", "value", prototype, "name");
	    var obj = Object.create(prototype);
	    Reflect.defineMetadata("key1", "value", obj, "name");
	    Reflect.defineMetadata("key0", "value", obj, "name");
	    var result = Reflect.getMetadataKeys(obj, "name");
	    assert.deepEqual(result, ["key1", "key0", "key2"]);
	}
	exports.ReflectGetMetadataKeysOrderWithTargetKeyWhenDefinedOnPrototype = ReflectGetMetadataKeysOrderWithTargetKeyWhenDefinedOnPrototype;


/***/ },
/* 690 */
/***/ function(module, exports, __webpack_require__) {

	// Reflect.getOwnMetadata ( metadataKey, target [, propertyKey] )
	// - https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#reflectgetownmetadata--metadatakey-target--propertykey-
	"use strict";
	__webpack_require__(660);
	var assert = __webpack_require__(681);
	function ReflectGetOwnMetadataInvalidTarget() {
	    assert.throws(function () { return Reflect.getOwnMetadata("key", undefined, undefined); }, TypeError);
	}
	exports.ReflectGetOwnMetadataInvalidTarget = ReflectGetOwnMetadataInvalidTarget;
	function ReflectGetOwnMetadataWithoutTargetKeyWhenNotDefined() {
	    var obj = {};
	    var result = Reflect.getOwnMetadata("key", obj, undefined);
	    assert.equal(result, undefined);
	}
	exports.ReflectGetOwnMetadataWithoutTargetKeyWhenNotDefined = ReflectGetOwnMetadataWithoutTargetKeyWhenNotDefined;
	function ReflectGetOwnMetadataWithoutTargetKeyWhenDefined() {
	    var obj = {};
	    Reflect.defineMetadata("key", "value", obj, undefined);
	    var result = Reflect.getOwnMetadata("key", obj, undefined);
	    assert.equal(result, "value");
	}
	exports.ReflectGetOwnMetadataWithoutTargetKeyWhenDefined = ReflectGetOwnMetadataWithoutTargetKeyWhenDefined;
	function ReflectGetOwnMetadataWithoutTargetKeyWhenDefinedOnPrototype() {
	    var prototype = {};
	    var obj = Object.create(prototype);
	    Reflect.defineMetadata("key", "value", prototype, undefined);
	    var result = Reflect.getOwnMetadata("key", obj, undefined);
	    assert.equal(result, undefined);
	}
	exports.ReflectGetOwnMetadataWithoutTargetKeyWhenDefinedOnPrototype = ReflectGetOwnMetadataWithoutTargetKeyWhenDefinedOnPrototype;
	function ReflectGetOwnMetadataWithTargetKeyWhenNotDefined() {
	    var obj = {};
	    var result = Reflect.getOwnMetadata("key", obj, "name");
	    assert.equal(result, undefined);
	}
	exports.ReflectGetOwnMetadataWithTargetKeyWhenNotDefined = ReflectGetOwnMetadataWithTargetKeyWhenNotDefined;
	function ReflectGetOwnMetadataWithTargetKeyWhenDefined() {
	    var obj = {};
	    Reflect.defineMetadata("key", "value", obj, "name");
	    var result = Reflect.getOwnMetadata("key", obj, "name");
	    assert.equal(result, "value");
	}
	exports.ReflectGetOwnMetadataWithTargetKeyWhenDefined = ReflectGetOwnMetadataWithTargetKeyWhenDefined;
	function ReflectGetOwnMetadataWithTargetKeyWhenDefinedOnPrototype() {
	    var prototype = {};
	    var obj = Object.create(prototype);
	    Reflect.defineMetadata("key", "value", prototype, "name");
	    var result = Reflect.getOwnMetadata("key", obj, "name");
	    assert.equal(result, undefined);
	}
	exports.ReflectGetOwnMetadataWithTargetKeyWhenDefinedOnPrototype = ReflectGetOwnMetadataWithTargetKeyWhenDefinedOnPrototype;


/***/ },
/* 691 */
/***/ function(module, exports, __webpack_require__) {

	// Reflect.getOwnMetadataKeysKeys ( target [, propertyKey] )
	// - https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#reflectgetownmetadatakeyskeys--target--propertykey-
	"use strict";
	__webpack_require__(660);
	var assert = __webpack_require__(681);
	function ReflectGetOwnMetadataKeysKeysInvalidTarget() {
	    // 1. If Type(target) is not Object, throw a TypeError exception.
	    assert.throws(function () { return Reflect.getOwnMetadataKeys(undefined, undefined); }, TypeError);
	}
	exports.ReflectGetOwnMetadataKeysKeysInvalidTarget = ReflectGetOwnMetadataKeysKeysInvalidTarget;
	function ReflectGetOwnMetadataKeysWithoutTargetKeyWhenNotDefined() {
	    var obj = {};
	    var result = Reflect.getOwnMetadataKeys(obj, undefined);
	    assert.deepEqual(result, []);
	}
	exports.ReflectGetOwnMetadataKeysWithoutTargetKeyWhenNotDefined = ReflectGetOwnMetadataKeysWithoutTargetKeyWhenNotDefined;
	function ReflectGetOwnMetadataKeysWithoutTargetKeyWhenDefined() {
	    var obj = {};
	    Reflect.defineMetadata("key", "value", obj, undefined);
	    var result = Reflect.getOwnMetadataKeys(obj, undefined);
	    assert.deepEqual(result, ["key"]);
	}
	exports.ReflectGetOwnMetadataKeysWithoutTargetKeyWhenDefined = ReflectGetOwnMetadataKeysWithoutTargetKeyWhenDefined;
	function ReflectGetOwnMetadataKeysWithoutTargetKeyWhenDefinedOnPrototype() {
	    var prototype = {};
	    var obj = Object.create(prototype);
	    Reflect.defineMetadata("key", "value", prototype, undefined);
	    var result = Reflect.getOwnMetadataKeys(obj, undefined);
	    assert.deepEqual(result, []);
	}
	exports.ReflectGetOwnMetadataKeysWithoutTargetKeyWhenDefinedOnPrototype = ReflectGetOwnMetadataKeysWithoutTargetKeyWhenDefinedOnPrototype;
	function ReflectGetOwnMetadataKeysOrderWithoutTargetKey() {
	    var obj = {};
	    Reflect.defineMetadata("key1", "value", obj, undefined);
	    Reflect.defineMetadata("key0", "value", obj, undefined);
	    var result = Reflect.getOwnMetadataKeys(obj, undefined);
	    assert.deepEqual(result, ["key1", "key0"]);
	}
	exports.ReflectGetOwnMetadataKeysOrderWithoutTargetKey = ReflectGetOwnMetadataKeysOrderWithoutTargetKey;
	function ReflectGetOwnMetadataKeysOrderAfterRedefineWithoutTargetKey() {
	    var obj = {};
	    Reflect.defineMetadata("key1", "value", obj, undefined);
	    Reflect.defineMetadata("key0", "value", obj, undefined);
	    Reflect.defineMetadata("key1", "value", obj, undefined);
	    var result = Reflect.getOwnMetadataKeys(obj, undefined);
	    assert.deepEqual(result, ["key1", "key0"]);
	}
	exports.ReflectGetOwnMetadataKeysOrderAfterRedefineWithoutTargetKey = ReflectGetOwnMetadataKeysOrderAfterRedefineWithoutTargetKey;
	function ReflectGetOwnMetadataKeysWithTargetKeyWhenNotDefined() {
	    var obj = {};
	    var result = Reflect.getOwnMetadataKeys(obj, "name");
	    assert.deepEqual(result, []);
	}
	exports.ReflectGetOwnMetadataKeysWithTargetKeyWhenNotDefined = ReflectGetOwnMetadataKeysWithTargetKeyWhenNotDefined;
	function ReflectGetOwnMetadataKeysWithTargetKeyWhenDefined() {
	    var obj = {};
	    Reflect.defineMetadata("key", "value", obj, "name");
	    var result = Reflect.getOwnMetadataKeys(obj, "name");
	    assert.deepEqual(result, ["key"]);
	}
	exports.ReflectGetOwnMetadataKeysWithTargetKeyWhenDefined = ReflectGetOwnMetadataKeysWithTargetKeyWhenDefined;
	function ReflectGetOwnMetadataKeysWithTargetKeyWhenDefinedOnPrototype() {
	    var prototype = {};
	    var obj = Object.create(prototype);
	    Reflect.defineMetadata("key", "value", prototype, "name");
	    var result = Reflect.getOwnMetadataKeys(obj, "name");
	    assert.deepEqual(result, []);
	}
	exports.ReflectGetOwnMetadataKeysWithTargetKeyWhenDefinedOnPrototype = ReflectGetOwnMetadataKeysWithTargetKeyWhenDefinedOnPrototype;
	function ReflectGetOwnMetadataKeysOrderAfterRedefineWithTargetKey() {
	    var obj = {};
	    Reflect.defineMetadata("key1", "value", obj, "name");
	    Reflect.defineMetadata("key0", "value", obj, "name");
	    Reflect.defineMetadata("key1", "value", obj, "name");
	    var result = Reflect.getOwnMetadataKeys(obj, "name");
	    assert.deepEqual(result, ["key1", "key0"]);
	}
	exports.ReflectGetOwnMetadataKeysOrderAfterRedefineWithTargetKey = ReflectGetOwnMetadataKeysOrderAfterRedefineWithTargetKey;


/***/ },
/* 692 */
/***/ function(module, exports, __webpack_require__) {

	// Reflect.hasMetadata ( metadataKey, target [, propertyKey] )
	// - https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#reflecthasmetadata--metadatakey-target--propertykey-
	"use strict";
	__webpack_require__(660);
	var assert = __webpack_require__(681);
	function ReflectHasMetadataInvalidTarget() {
	    assert.throws(function () { return Reflect.hasMetadata("key", undefined, undefined); }, TypeError);
	}
	exports.ReflectHasMetadataInvalidTarget = ReflectHasMetadataInvalidTarget;
	function ReflectHasMetadataWithoutTargetKeyWhenNotDefined() {
	    var obj = {};
	    var result = Reflect.hasMetadata("key", obj, undefined);
	    assert.equal(result, false);
	}
	exports.ReflectHasMetadataWithoutTargetKeyWhenNotDefined = ReflectHasMetadataWithoutTargetKeyWhenNotDefined;
	function ReflectHasMetadataWithoutTargetKeyWhenDefined() {
	    var obj = {};
	    Reflect.defineMetadata("key", "value", obj, undefined);
	    var result = Reflect.hasMetadata("key", obj, undefined);
	    assert.equal(result, true);
	}
	exports.ReflectHasMetadataWithoutTargetKeyWhenDefined = ReflectHasMetadataWithoutTargetKeyWhenDefined;
	function ReflectHasMetadataWithoutTargetKeyWhenDefinedOnPrototype() {
	    var prototype = {};
	    var obj = Object.create(prototype);
	    Reflect.defineMetadata("key", "value", prototype, undefined);
	    var result = Reflect.hasMetadata("key", obj, undefined);
	    assert.equal(result, true);
	}
	exports.ReflectHasMetadataWithoutTargetKeyWhenDefinedOnPrototype = ReflectHasMetadataWithoutTargetKeyWhenDefinedOnPrototype;
	function ReflectHasMetadataWithTargetKeyWhenNotDefined() {
	    var obj = {};
	    var result = Reflect.hasMetadata("key", obj, "name");
	    assert.equal(result, false);
	}
	exports.ReflectHasMetadataWithTargetKeyWhenNotDefined = ReflectHasMetadataWithTargetKeyWhenNotDefined;
	function ReflectHasMetadataWithTargetKeyWhenDefined() {
	    var obj = {};
	    Reflect.defineMetadata("key", "value", obj, "name");
	    var result = Reflect.hasMetadata("key", obj, "name");
	    assert.equal(result, true);
	}
	exports.ReflectHasMetadataWithTargetKeyWhenDefined = ReflectHasMetadataWithTargetKeyWhenDefined;
	function ReflectHasMetadataWithTargetKeyWhenDefinedOnPrototype() {
	    var prototype = {};
	    var obj = Object.create(prototype);
	    Reflect.defineMetadata("key", "value", prototype, "name");
	    var result = Reflect.hasMetadata("key", obj, "name");
	    assert.equal(result, true);
	}
	exports.ReflectHasMetadataWithTargetKeyWhenDefinedOnPrototype = ReflectHasMetadataWithTargetKeyWhenDefinedOnPrototype;


/***/ },
/* 693 */
/***/ function(module, exports, __webpack_require__) {

	// Reflect.hasOwnMetadata ( metadataKey, target [, propertyKey] )
	// - https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#reflecthasownmetadata--metadatakey-target--propertykey-
	"use strict";
	__webpack_require__(660);
	var assert = __webpack_require__(681);
	function ReflectHasOwnMetadataInvalidTarget() {
	    assert.throws(function () { return Reflect.hasOwnMetadata("key", undefined, undefined); }, TypeError);
	}
	exports.ReflectHasOwnMetadataInvalidTarget = ReflectHasOwnMetadataInvalidTarget;
	function ReflectHasOwnMetadataWithoutTargetKeyWhenNotDefined() {
	    var obj = {};
	    var result = Reflect.hasOwnMetadata("key", obj, undefined);
	    assert.equal(result, false);
	}
	exports.ReflectHasOwnMetadataWithoutTargetKeyWhenNotDefined = ReflectHasOwnMetadataWithoutTargetKeyWhenNotDefined;
	function ReflectHasOwnMetadataWithoutTargetKeyWhenDefined() {
	    var obj = {};
	    Reflect.defineMetadata("key", "value", obj, undefined);
	    var result = Reflect.hasOwnMetadata("key", obj, undefined);
	    assert.equal(result, true);
	}
	exports.ReflectHasOwnMetadataWithoutTargetKeyWhenDefined = ReflectHasOwnMetadataWithoutTargetKeyWhenDefined;
	function ReflectHasOwnMetadataWithoutTargetKeyWhenDefinedOnPrototype() {
	    var prototype = {};
	    var obj = Object.create(prototype);
	    Reflect.defineMetadata("key", "value", prototype, undefined);
	    var result = Reflect.hasOwnMetadata("key", obj, undefined);
	    assert.equal(result, false);
	}
	exports.ReflectHasOwnMetadataWithoutTargetKeyWhenDefinedOnPrototype = ReflectHasOwnMetadataWithoutTargetKeyWhenDefinedOnPrototype;
	function ReflectHasOwnMetadataWithTargetKeyWhenNotDefined() {
	    var obj = {};
	    var result = Reflect.hasOwnMetadata("key", obj, "name");
	    assert.equal(result, false);
	}
	exports.ReflectHasOwnMetadataWithTargetKeyWhenNotDefined = ReflectHasOwnMetadataWithTargetKeyWhenNotDefined;
	function ReflectHasOwnMetadataWithTargetKeyWhenDefined() {
	    var obj = {};
	    Reflect.defineMetadata("key", "value", obj, "name");
	    var result = Reflect.hasOwnMetadata("key", obj, "name");
	    assert.equal(result, true);
	}
	exports.ReflectHasOwnMetadataWithTargetKeyWhenDefined = ReflectHasOwnMetadataWithTargetKeyWhenDefined;
	function ReflectHasOwnMetadataWithTargetKeyWhenDefinedOnPrototype() {
	    var prototype = {};
	    var obj = Object.create(prototype);
	    Reflect.defineMetadata("key", "value", prototype, "name");
	    var result = Reflect.hasOwnMetadata("key", obj, "name");
	    assert.equal(result, false);
	}
	exports.ReflectHasOwnMetadataWithTargetKeyWhenDefinedOnPrototype = ReflectHasOwnMetadataWithTargetKeyWhenDefinedOnPrototype;


/***/ },
/* 694 */
/***/ function(module, exports, __webpack_require__) {

	// Reflect.metadata ( metadataKey, metadataValue )
	// - https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#reflectmetadata--metadatakey-metadatavalue-
	"use strict";
	__webpack_require__(660);
	var assert = __webpack_require__(681);
	function ReflectMetadataReturnsDecoratorFunction() {
	    var result = Reflect.metadata("key", "value");
	    assert.equal(typeof result, "function");
	}
	exports.ReflectMetadataReturnsDecoratorFunction = ReflectMetadataReturnsDecoratorFunction;
	function ReflectMetadataDecoratorThrowsWithInvalidTargetWithTargetKey() {
	    var decorator = Reflect.metadata("key", "value");
	    assert.throws(function () { return decorator(undefined, "name"); }, TypeError);
	}
	exports.ReflectMetadataDecoratorThrowsWithInvalidTargetWithTargetKey = ReflectMetadataDecoratorThrowsWithInvalidTargetWithTargetKey;
	function ReflectMetadataDecoratorThrowsWithInvalidTargetWithoutTargetKey() {
	    var decorator = Reflect.metadata("key", "value");
	    assert.throws(function () { return decorator({}, undefined); }, TypeError);
	}
	exports.ReflectMetadataDecoratorThrowsWithInvalidTargetWithoutTargetKey = ReflectMetadataDecoratorThrowsWithInvalidTargetWithoutTargetKey;
	function ReflectMetadataDecoratorSetsMetadataOnTargetWithoutTargetKey() {
	    var decorator = Reflect.metadata("key", "value");
	    var target = function () { };
	    decorator(target);
	    var result = Reflect.hasOwnMetadata("key", target, undefined);
	    assert.equal(result, true);
	}
	exports.ReflectMetadataDecoratorSetsMetadataOnTargetWithoutTargetKey = ReflectMetadataDecoratorSetsMetadataOnTargetWithoutTargetKey;
	function ReflectMetadataDecoratorSetsMetadataOnTargetWithTargetKey() {
	    var decorator = Reflect.metadata("key", "value");
	    var target = {};
	    decorator(target, "name");
	    var result = Reflect.hasOwnMetadata("key", target, "name");
	    assert.equal(result, true);
	}
	exports.ReflectMetadataDecoratorSetsMetadataOnTargetWithTargetKey = ReflectMetadataDecoratorSetsMetadataOnTargetWithTargetKey;


/***/ },
/* 695 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var harness_1 = __webpack_require__(679);
	var spec = __webpack_require__(696);
	var results = harness_1.runTests(spec);
	harness_1.printResults(results);


/***/ },
/* 696 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(680));
	__export(__webpack_require__(694));
	__export(__webpack_require__(686));
	__export(__webpack_require__(693));
	__export(__webpack_require__(692));
	__export(__webpack_require__(690));
	__export(__webpack_require__(688));
	__export(__webpack_require__(691));
	__export(__webpack_require__(689));
	__export(__webpack_require__(687));


/***/ },
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {"use strict";
		__webpack_require__(1);
		var event_target_1 = __webpack_require__(2);
		var define_property_1 = __webpack_require__(4);
		var register_element_1 = __webpack_require__(5);
		var property_descriptor_1 = __webpack_require__(6);
		var timers_1 = __webpack_require__(8);
		var utils_1 = __webpack_require__(3);
		var set = 'set';
		var clear = 'clear';
		var blockingMethods = ['alert', 'prompt', 'confirm'];
		var _global = typeof window == 'undefined' ? global : window;
		timers_1.patchTimer(_global, set, clear, 'Timeout');
		timers_1.patchTimer(_global, set, clear, 'Interval');
		timers_1.patchTimer(_global, set, clear, 'Immediate');
		timers_1.patchTimer(_global, 'request', 'cancelMacroTask', 'AnimationFrame');
		timers_1.patchTimer(_global, 'mozRequest', 'mozCancel', 'AnimationFrame');
		timers_1.patchTimer(_global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
		for (var i = 0; i < blockingMethods.length; i++) {
		    var name = blockingMethods[i];
		    utils_1.patchMethod(_global, name, function (delegate, symbol, name) {
		        return function (s, args) {
		            return Zone.current.run(delegate, _global, args, name);
		        };
		    });
		}
		event_target_1.eventTargetPatch(_global);
		property_descriptor_1.propertyDescriptorPatch(_global);
		utils_1.patchClass('MutationObserver');
		utils_1.patchClass('WebKitMutationObserver');
		utils_1.patchClass('FileReader');
		define_property_1.propertyPatch();
		register_element_1.registerElementPatch(_global);
		// Treat XMLHTTPRequest as a macrotask.
		patchXHR(_global);
		var XHR_TASK = utils_1.zoneSymbol('xhrTask');
		function patchXHR(window) {
		    function findPendingTask(target) {
		        var pendingTask = target[XHR_TASK];
		        return pendingTask;
		    }
		    function scheduleTask(task) {
		        var data = task.data;
		        data.target.addEventListener('readystatechange', function () {
		            if (data.target.readyState === XMLHttpRequest.DONE) {
		                if (!data.aborted) {
		                    task.invoke();
		                }
		            }
		        });
		        var storedTask = data.target[XHR_TASK];
		        if (!storedTask) {
		            data.target[XHR_TASK] = task;
		        }
		        setNative.apply(data.target, data.args);
		        return task;
		    }
		    function placeholderCallback() {
		    }
		    function clearTask(task) {
		        var data = task.data;
		        // Note - ideally, we would call data.target.removeEventListener here, but it's too late
		        // to prevent it from firing. So instead, we store info for the event listener.
		        data.aborted = true;
		        return clearNative.apply(data.target, data.args);
		    }
		    var setNative = utils_1.patchMethod(window.XMLHttpRequest.prototype, 'send', function () { return function (self, args) {
		        var zone = Zone.current;
		        var options = {
		            target: self,
		            isPeriodic: false,
		            delay: null,
		            args: args,
		            aborted: false
		        };
		        return zone.scheduleMacroTask('XMLHttpRequest.send', placeholderCallback, options, scheduleTask, clearTask);
		    }; });
		    var clearNative = utils_1.patchMethod(window.XMLHttpRequest.prototype, 'abort', function (delegate) { return function (self, args) {
		        var task = findPendingTask(self);
		        if (task && typeof task.type == 'string') {
		            // If the XHR has already completed, do nothing.
		            if (task.cancelFn == null) {
		                return;
		            }
		            task.zone.cancelTask(task);
		        }
		        // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no task to cancel. Do nothing.
		    }; });
		}
		/// GEO_LOCATION
		if (_global['navigator'] && _global['navigator'].geolocation) {
		    utils_1.patchPrototype(_global['navigator'].geolocation, [
		        'getCurrentPosition',
		        'watchPosition'
		    ]);
		}

		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 1 */
	/***/ function(module, exports) {

		/* WEBPACK VAR INJECTION */(function(global) {;
		;
		var Zone = (function (global) {
		    var Zone = (function () {
		        function Zone(parent, zoneSpec) {
		            this._properties = null;
		            this._parent = parent;
		            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
		            this._properties = zoneSpec && zoneSpec.properties || {};
		            this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
		        }
		        Object.defineProperty(Zone, "current", {
		            get: function () { return _currentZone; },
		            enumerable: true,
		            configurable: true
		        });
		        ;
		        Object.defineProperty(Zone, "currentTask", {
		            get: function () { return _currentTask; },
		            enumerable: true,
		            configurable: true
		        });
		        ;
		        Object.defineProperty(Zone.prototype, "parent", {
		            get: function () { return this._parent; },
		            enumerable: true,
		            configurable: true
		        });
		        ;
		        Object.defineProperty(Zone.prototype, "name", {
		            get: function () { return this._name; },
		            enumerable: true,
		            configurable: true
		        });
		        ;
		        Zone.prototype.get = function (key) {
		            var current = this;
		            while (current) {
		                if (current._properties.hasOwnProperty(key)) {
		                    return current._properties[key];
		                }
		                current = current._parent;
		            }
		        };
		        Zone.prototype.fork = function (zoneSpec) {
		            if (!zoneSpec)
		                throw new Error('ZoneSpec required!');
		            return this._zoneDelegate.fork(this, zoneSpec);
		        };
		        Zone.prototype.wrap = function (callback, source) {
		            if (typeof callback !== 'function') {
		                throw new Error('Expecting function got: ' + callback);
		            }
		            var _callback = this._zoneDelegate.intercept(this, callback, source);
		            var zone = this;
		            return function () {
		                return zone.runGuarded(_callback, this, arguments, source);
		            };
		        };
		        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
		            if (applyThis === void 0) { applyThis = null; }
		            if (applyArgs === void 0) { applyArgs = null; }
		            if (source === void 0) { source = null; }
		            var oldZone = _currentZone;
		            _currentZone = this;
		            try {
		                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
		            }
		            finally {
		                _currentZone = oldZone;
		            }
		        };
		        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
		            if (applyThis === void 0) { applyThis = null; }
		            if (applyArgs === void 0) { applyArgs = null; }
		            if (source === void 0) { source = null; }
		            var oldZone = _currentZone;
		            _currentZone = this;
		            try {
		                try {
		                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
		                }
		                catch (error) {
		                    if (this._zoneDelegate.handleError(this, error)) {
		                        throw error;
		                    }
		                }
		            }
		            finally {
		                _currentZone = oldZone;
		            }
		        };
		        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
		            task.runCount++;
		            if (task.zone != this)
		                throw new Error('A task can only be run in the zone which created it! (Creation: ' +
		                    task.zone.name + '; Execution: ' + this.name + ')');
		            var previousTask = _currentTask;
		            _currentTask = task;
		            var oldZone = _currentZone;
		            _currentZone = this;
		            try {
		                if (task.type == 'macroTask' && task.data && !task.data.isPeriodic) {
		                    task.cancelFn = null;
		                }
		                try {
		                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
		                }
		                catch (error) {
		                    if (this._zoneDelegate.handleError(this, error)) {
		                        throw error;
		                    }
		                }
		            }
		            finally {
		                _currentZone = oldZone;
		                _currentTask = previousTask;
		            }
		        };
		        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
		            return this._zoneDelegate.scheduleTask(this, new ZoneTask('microTask', this, source, callback, data, customSchedule, null));
		        };
		        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
		            return this._zoneDelegate.scheduleTask(this, new ZoneTask('macroTask', this, source, callback, data, customSchedule, customCancel));
		        };
		        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
		            return this._zoneDelegate.scheduleTask(this, new ZoneTask('eventTask', this, source, callback, data, customSchedule, customCancel));
		        };
		        Zone.prototype.cancelTask = function (task) {
		            var value = this._zoneDelegate.cancelTask(this, task);
		            task.runCount = -1;
		            task.cancelFn = null;
		            return value;
		        };
		        Zone.__symbol__ = __symbol__;
		        return Zone;
		    }());
		    ;
		    var ZoneDelegate = (function () {
		        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
		            this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 };
		            this.zone = zone;
		            this._parentDelegate = parentDelegate;
		            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
		            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
		            this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
		            this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
		            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
		            this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
		            this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
		            this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
		            this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
		            this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
		            this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
		            this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
		            this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
		            this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
		            this._hasTaskZS = zoneSpec && (zoneSpec.onHasTask ? zoneSpec : parentDelegate._hasTaskZS);
		            this._hasTaskDlgt = zoneSpec && (zoneSpec.onHasTask ? parentDelegate : parentDelegate._hasTaskDlgt);
		        }
		        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
		            return this._forkZS
		                ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec)
		                : new Zone(targetZone, zoneSpec);
		        };
		        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
		            return this._interceptZS
		                ? this._interceptZS.onIntercept(this._interceptDlgt, this.zone, targetZone, callback, source)
		                : callback;
		        };
		        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
		            return this._invokeZS
		                ? this._invokeZS.onInvoke(this._invokeDlgt, this.zone, targetZone, callback, applyThis, applyArgs, source)
		                : callback.apply(applyThis, applyArgs);
		        };
		        ZoneDelegate.prototype.handleError = function (targetZone, error) {
		            return this._handleErrorZS
		                ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this.zone, targetZone, error)
		                : true;
		        };
		        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
		            try {
		                if (this._scheduleTaskZS) {
		                    return this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this.zone, targetZone, task);
		                }
		                else if (task.scheduleFn) {
		                    task.scheduleFn(task);
		                }
		                else if (task.type == 'microTask') {
		                    scheduleMicroTask(task);
		                }
		                else {
		                    throw new Error('Task is missing scheduleFn.');
		                }
		                return task;
		            }
		            finally {
		                if (targetZone == this.zone) {
		                    this._updateTaskCount(task.type, 1);
		                }
		            }
		        };
		        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
		            try {
		                return this._invokeTaskZS
		                    ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this.zone, targetZone, task, applyThis, applyArgs)
		                    : task.callback.apply(applyThis, applyArgs);
		            }
		            finally {
		                if (targetZone == this.zone && (task.type != 'eventTask') && !(task.data && task.data.isPeriodic)) {
		                    this._updateTaskCount(task.type, -1);
		                }
		            }
		        };
		        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
		            var value;
		            if (this._cancelTaskZS) {
		                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this.zone, targetZone, task);
		            }
		            else if (!task.cancelFn) {
		                throw new Error('Task does not support cancellation, or is already canceled.');
		            }
		            else {
		                value = task.cancelFn(task);
		            }
		            if (targetZone == this.zone) {
		                // this should not be in the finally block, because exceptions assume not canceled.
		                this._updateTaskCount(task.type, -1);
		            }
		            return value;
		        };
		        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
		            return this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this.zone, targetZone, isEmpty);
		        };
		        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
		            var counts = this._taskCounts;
		            var prev = counts[type];
		            var next = counts[type] = prev + count;
		            if (next < 0) {
		                throw new Error('More tasks executed then were scheduled.');
		            }
		            if (prev == 0 || next == 0) {
		                var isEmpty = {
		                    microTask: counts.microTask > 0,
		                    macroTask: counts.macroTask > 0,
		                    eventTask: counts.eventTask > 0,
		                    change: type
		                };
		                try {
		                    this.hasTask(this.zone, isEmpty);
		                }
		                finally {
		                    if (this._parentDelegate) {
		                        this._parentDelegate._updateTaskCount(type, count);
		                    }
		                }
		            }
		        };
		        return ZoneDelegate;
		    }());
		    var ZoneTask = (function () {
		        function ZoneTask(type, zone, source, callback, options, scheduleFn, cancelFn) {
		            this.runCount = 0;
		            this.type = type;
		            this.zone = zone;
		            this.source = source;
		            this.data = options;
		            this.scheduleFn = scheduleFn;
		            this.cancelFn = cancelFn;
		            this.callback = callback;
		            var self = this;
		            this.invoke = function () {
		                try {
		                    return zone.runTask(self, this, arguments);
		                }
		                finally {
		                    drainMicroTaskQueue();
		                }
		            };
		        }
		        return ZoneTask;
		    }());
		    function __symbol__(name) { return '__zone_symbol__' + name; }
		    ;
		    var symbolSetTimeout = __symbol__('setTimeout');
		    var symbolPromise = __symbol__('Promise');
		    var symbolThen = __symbol__('then');
		    var _currentZone = new Zone(null, null);
		    var _currentTask = null;
		    var _microTaskQueue = [];
		    var _isDrainingMicrotaskQueue = false;
		    var _uncaughtPromiseErrors = [];
		    var _drainScheduled = false;
		    function scheduleQueueDrain() {
		        if (!_drainScheduled && !_currentTask && _microTaskQueue.length == 0) {
		            // We are not running in Task, so we need to kickstart the microtask queue.
		            if (global[symbolPromise]) {
		                global[symbolPromise].resolve(0)[symbolThen](drainMicroTaskQueue);
		            }
		            else {
		                global[symbolSetTimeout](drainMicroTaskQueue, 0);
		            }
		        }
		    }
		    function scheduleMicroTask(task) {
		        scheduleQueueDrain();
		        _microTaskQueue.push(task);
		    }
		    function consoleError(e) {
		        var rejection = e && e.rejection;
		        if (rejection) {
		            console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection);
		        }
		        console.error(e);
		    }
		    function drainMicroTaskQueue() {
		        if (!_isDrainingMicrotaskQueue) {
		            _isDrainingMicrotaskQueue = true;
		            while (_microTaskQueue.length) {
		                var queue = _microTaskQueue;
		                _microTaskQueue = [];
		                for (var i = 0; i < queue.length; i++) {
		                    var task = queue[i];
		                    try {
		                        task.zone.runTask(task, null, null);
		                    }
		                    catch (e) {
		                        consoleError(e);
		                    }
		                }
		            }
		            while (_uncaughtPromiseErrors.length) {
		                var uncaughtPromiseErrors = _uncaughtPromiseErrors;
		                _uncaughtPromiseErrors = [];
		                var _loop_1 = function(i) {
		                    var uncaughtPromiseError = uncaughtPromiseErrors[i];
		                    try {
		                        uncaughtPromiseError.zone.runGuarded(function () { throw uncaughtPromiseError; });
		                    }
		                    catch (e) {
		                        consoleError(e);
		                    }
		                };
		                for (var i = 0; i < uncaughtPromiseErrors.length; i++) {
		                    _loop_1(i);
		                }
		            }
		            _isDrainingMicrotaskQueue = false;
		            _drainScheduled = false;
		        }
		    }
		    function isThenable(value) {
		        return value && value.then;
		    }
		    function forwardResolution(value) { return value; }
		    function forwardRejection(rejection) { return ZoneAwarePromise.reject(rejection); }
		    var symbolState = __symbol__('state');
		    var symbolValue = __symbol__('value');
		    var source = 'Promise.then';
		    var UNRESOLVED = null;
		    var RESOLVED = true;
		    var REJECTED = false;
		    var REJECTED_NO_CATCH = 0;
		    function makeResolver(promise, state) {
		        return function (v) {
		            resolvePromise(promise, state, v);
		            // Do not return value or you will break the Promise spec.
		        };
		    }
		    function resolvePromise(promise, state, value) {
		        if (promise[symbolState] === UNRESOLVED) {
		            if (value instanceof ZoneAwarePromise && value[symbolState] !== UNRESOLVED) {
		                clearRejectedNoCatch(value);
		                resolvePromise(promise, value[symbolState], value[symbolValue]);
		            }
		            else if (isThenable(value)) {
		                value.then(makeResolver(promise, state), makeResolver(promise, false));
		            }
		            else {
		                promise[symbolState] = state;
		                var queue = promise[symbolValue];
		                promise[symbolValue] = value;
		                for (var i = 0; i < queue.length;) {
		                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
		                }
		                if (queue.length == 0 && state == REJECTED) {
		                    promise[symbolState] = REJECTED_NO_CATCH;
		                    try {
		                        throw new Error("Uncaught (in promise): " + value);
		                    }
		                    catch (e) {
		                        var error = e;
		                        error.rejection = value;
		                        error.promise = promise;
		                        error.zone = Zone.current;
		                        error.task = Zone.currentTask;
		                        _uncaughtPromiseErrors.push(error);
		                        scheduleQueueDrain();
		                    }
		                }
		            }
		        }
		        // Resolving an already resolved promise is a noop.
		        return promise;
		    }
		    function clearRejectedNoCatch(promise) {
		        if (promise[symbolState] === REJECTED_NO_CATCH) {
		            promise[symbolState] = REJECTED;
		            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
		                if (promise === _uncaughtPromiseErrors[i].promise) {
		                    _uncaughtPromiseErrors.splice(i, 1);
		                    break;
		                }
		            }
		        }
		    }
		    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
		        clearRejectedNoCatch(promise);
		        var delegate = promise[symbolState] ? onFulfilled || forwardResolution : onRejected || forwardRejection;
		        zone.scheduleMicroTask(source, function () {
		            try {
		                resolvePromise(chainPromise, true, zone.run(delegate, null, [promise[symbolValue]]));
		            }
		            catch (error) {
		                resolvePromise(chainPromise, false, error);
		            }
		        });
		    }
		    var ZoneAwarePromise = (function () {
		        function ZoneAwarePromise(executor) {
		            var promise = this;
		            promise[symbolState] = UNRESOLVED;
		            promise[symbolValue] = []; // queue;
		            try {
		                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
		            }
		            catch (e) {
		                resolvePromise(promise, false, e);
		            }
		        }
		        ZoneAwarePromise.resolve = function (value) {
		            return resolvePromise(new this(null), RESOLVED, value);
		        };
		        ZoneAwarePromise.reject = function (error) {
		            return resolvePromise(new this(null), REJECTED, error);
		        };
		        ZoneAwarePromise.race = function (values) {
		            var resolve;
		            var reject;
		            var promise = new this(function (res, rej) { resolve = res; reject = rej; });
		            function onResolve(value) { promise && (promise = null || resolve(value)); }
		            function onReject(error) { promise && (promise = null || reject(error)); }
		            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
		                var value = values_1[_i];
		                if (!isThenable(value)) {
		                    value = this.resolve(value);
		                }
		                value.then(onResolve, onReject);
		            }
		            return promise;
		        };
		        ZoneAwarePromise.all = function (values) {
		            var resolve;
		            var reject;
		            var promise = new this(function (res, rej) { resolve = res; reject = rej; });
		            var count = 0;
		            var resolvedValues = [];
		            function onReject(error) { promise && reject(error); promise = null; }
		            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
		                var value = values_2[_i];
		                if (!isThenable(value)) {
		                    value = this.resolve(value);
		                }
		                value.then((function (index) { return function (value) {
		                    resolvedValues[index] = value;
		                    count--;
		                    if (promise && !count) {
		                        resolve(resolvedValues);
		                    }
		                    promise == null;
		                }; })(count), onReject);
		                count++;
		            }
		            if (!count)
		                resolve(resolvedValues);
		            return promise;
		        };
		        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
		            var chainPromise = new ZoneAwarePromise(null);
		            var zone = Zone.current;
		            if (this[symbolState] == UNRESOLVED) {
		                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
		            }
		            else {
		                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
		            }
		            return chainPromise;
		        };
		        ZoneAwarePromise.prototype.catch = function (onRejected) {
		            return this.then(null, onRejected);
		        };
		        return ZoneAwarePromise;
		    }());
		    var NativePromise = global[__symbol__('Promise')] = global.Promise;
		    global.Promise = ZoneAwarePromise;
		    if (NativePromise) {
		        var NativePromiseProtototype = NativePromise.prototype;
		        var NativePromiseThen_1 = NativePromiseProtototype[__symbol__('then')]
		            = NativePromiseProtototype.then;
		        NativePromiseProtototype.then = function (onResolve, onReject) {
		            var nativePromise = this;
		            return new ZoneAwarePromise(function (resolve, reject) {
		                NativePromiseThen_1.call(nativePromise, resolve, reject);
		            }).then(onResolve, onReject);
		        };
		    }
		    return global.Zone = Zone;
		})(typeof window === 'undefined' ? global : window);

		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var utils_1 = __webpack_require__(3);
		var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
		var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex'.split(',');
		var EVENT_TARGET = 'EventTarget';
		function eventTargetPatch(_global) {
		    var apis = [];
		    var isWtf = _global['wtf'];
		    if (isWtf) {
		        // Workaround for: https://github.com/google/tracing-framework/issues/555
		        apis = WTF_ISSUE_555.split(',').map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
		    }
		    else if (_global[EVENT_TARGET]) {
		        apis.push(EVENT_TARGET);
		    }
		    else {
		        // Note: EventTarget is not available in all browsers,
		        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
		        apis = NO_EVENT_TARGET;
		    }
		    for (var i = 0; i < apis.length; i++) {
		        var type = _global[apis[i]];
		        utils_1.patchEventTargetMethods(type && type.prototype);
		    }
		}
		exports.eventTargetPatch = eventTargetPatch;


	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		/* WEBPACK VAR INJECTION */(function(global) {/**
		 * Suppress closure compiler errors about unknown 'process' variable
		 * @fileoverview
		 * @suppress {undefinedVars}
		 */
		"use strict";
		exports.zoneSymbol = Zone['__symbol__'];
		var _global = typeof window == 'undefined' ? global : window;
		function bindArguments(args, source) {
		    for (var i = args.length - 1; i >= 0; i--) {
		        if (typeof args[i] === 'function') {
		            args[i] = Zone.current.wrap(args[i], source + '_' + i);
		        }
		    }
		    return args;
		}
		exports.bindArguments = bindArguments;
		;
		function patchPrototype(prototype, fnNames) {
		    var source = prototype.constructor['name'];
		    var _loop_1 = function(i) {
		        var name_1 = fnNames[i];
		        var delegate = prototype[name_1];
		        if (delegate) {
		            prototype[name_1] = (function (delegate) {
		                return function () {
		                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
		                };
		            })(delegate);
		        }
		    };
		    for (var i = 0; i < fnNames.length; i++) {
		        _loop_1(i);
		    }
		}
		exports.patchPrototype = patchPrototype;
		;
		exports.isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
		exports.isNode = (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]');
		exports.isBrowser = !exports.isNode && !exports.isWebWorker && !!(typeof window !== 'undefined' && window['HTMLElement']);
		function patchProperty(obj, prop) {
		    var desc = Object.getOwnPropertyDescriptor(obj, prop) || {
		        enumerable: true,
		        configurable: true
		    };
		    // A property descriptor cannot have getter/setter and be writable
		    // deleting the writable and value properties avoids this error:
		    //
		    // TypeError: property descriptors must not specify a value or be writable when a
		    // getter or setter has been specified
		    delete desc.writable;
		    delete desc.value;
		    // substr(2) cuz 'onclick' -> 'click', etc
		    var eventName = prop.substr(2);
		    var _prop = '_' + prop;
		    desc.set = function (fn) {
		        if (this[_prop]) {
		            this.removeEventListener(eventName, this[_prop]);
		        }
		        if (typeof fn === 'function') {
		            var wrapFn = function (event) {
		                var result;
		                result = fn.apply(this, arguments);
		                if (result != undefined && !result)
		                    event.preventDefault();
		            };
		            this[_prop] = wrapFn;
		            this.addEventListener(eventName, wrapFn, false);
		        }
		        else {
		            this[_prop] = null;
		        }
		    };
		    desc.get = function () {
		        return this[_prop];
		    };
		    Object.defineProperty(obj, prop, desc);
		}
		exports.patchProperty = patchProperty;
		;
		function patchOnProperties(obj, properties) {
		    var onProperties = [];
		    for (var prop in obj) {
		        if (prop.substr(0, 2) == 'on') {
		            onProperties.push(prop);
		        }
		    }
		    for (var j = 0; j < onProperties.length; j++) {
		        patchProperty(obj, onProperties[j]);
		    }
		    if (properties) {
		        for (var i = 0; i < properties.length; i++) {
		            patchProperty(obj, 'on' + properties[i]);
		        }
		    }
		}
		exports.patchOnProperties = patchOnProperties;
		;
		var EVENT_TASKS = exports.zoneSymbol('eventTasks');
		var ADD_EVENT_LISTENER = 'addEventListener';
		var REMOVE_EVENT_LISTENER = 'removeEventListener';
		var SYMBOL_ADD_EVENT_LISTENER = exports.zoneSymbol(ADD_EVENT_LISTENER);
		var SYMBOL_REMOVE_EVENT_LISTENER = exports.zoneSymbol(REMOVE_EVENT_LISTENER);
		function findExistingRegisteredTask(target, handler, name, capture, remove) {
		    var eventTasks = target[EVENT_TASKS];
		    if (eventTasks) {
		        for (var i = 0; i < eventTasks.length; i++) {
		            var eventTask = eventTasks[i];
		            var data = eventTask.data;
		            if (data.handler === handler
		                && data.useCapturing === capture
		                && data.eventName === name) {
		                if (remove) {
		                    eventTasks.splice(i, 1);
		                }
		                return eventTask;
		            }
		        }
		    }
		    return null;
		}
		function attachRegisteredEvent(target, eventTask) {
		    var eventTasks = target[EVENT_TASKS];
		    if (!eventTasks) {
		        eventTasks = target[EVENT_TASKS] = [];
		    }
		    eventTasks.push(eventTask);
		}
		function scheduleEventListener(eventTask) {
		    var meta = eventTask.data;
		    attachRegisteredEvent(meta.target, eventTask);
		    return meta.target[SYMBOL_ADD_EVENT_LISTENER](meta.eventName, eventTask.invoke, meta.useCapturing);
		}
		function cancelEventListener(eventTask) {
		    var meta = eventTask.data;
		    findExistingRegisteredTask(meta.target, eventTask.invoke, meta.eventName, meta.useCapturing, true);
		    meta.target[SYMBOL_REMOVE_EVENT_LISTENER](meta.eventName, eventTask.invoke, meta.useCapturing);
		}
		function zoneAwareAddEventListener(self, args) {
		    var eventName = args[0];
		    var handler = args[1];
		    var useCapturing = args[2] || false;
		    // - Inside a Web Worker, `this` is undefined, the context is `global`
		    // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
		    // see https://github.com/angular/zone.js/issues/190
		    var target = self || _global;
		    var delegate = null;
		    if (typeof handler == 'function') {
		        delegate = handler;
		    }
		    else if (handler && handler.handleEvent) {
		        delegate = function (event) { return handler.handleEvent(event); };
		    }
		    var validZoneHandler = false;
		    try {
		        // In cross site contexts (such as WebDriver frameworks like Selenium),
		        // accessing the handler object here will cause an exception to be thrown which
		        // will fail tests prematurely.
		        validZoneHandler = handler && handler.toString() === "[object FunctionWrapper]";
		    }
		    catch (e) {
		        // Returning nothing here is fine, because objects in a cross-site context are unusable
		        return;
		    }
		    // Ignore special listeners of IE11 & Edge dev tools, see https://github.com/angular/zone.js/issues/150
		    if (!delegate || validZoneHandler) {
		        return target[SYMBOL_ADD_EVENT_LISTENER](eventName, handler, useCapturing);
		    }
		    var eventTask = findExistingRegisteredTask(target, handler, eventName, useCapturing, false);
		    if (eventTask) {
		        // we already registered, so this will have noop.
		        return target[SYMBOL_ADD_EVENT_LISTENER](eventName, eventTask.invoke, useCapturing);
		    }
		    var zone = Zone.current;
		    var source = target.constructor['name'] + '.addEventListener:' + eventName;
		    var data = {
		        target: target,
		        eventName: eventName,
		        name: eventName,
		        useCapturing: useCapturing,
		        handler: handler
		    };
		    zone.scheduleEventTask(source, delegate, data, scheduleEventListener, cancelEventListener);
		}
		function zoneAwareRemoveEventListener(self, args) {
		    var eventName = args[0];
		    var handler = args[1];
		    var useCapturing = args[2] || false;
		    // - Inside a Web Worker, `this` is undefined, the context is `global`
		    // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
		    // see https://github.com/angular/zone.js/issues/190
		    var target = self || _global;
		    var eventTask = findExistingRegisteredTask(target, handler, eventName, useCapturing, true);
		    if (eventTask) {
		        eventTask.zone.cancelTask(eventTask);
		    }
		    else {
		        target[SYMBOL_REMOVE_EVENT_LISTENER](eventName, handler, useCapturing);
		    }
		}
		function patchEventTargetMethods(obj) {
		    if (obj && obj.addEventListener) {
		        patchMethod(obj, ADD_EVENT_LISTENER, function () { return zoneAwareAddEventListener; });
		        patchMethod(obj, REMOVE_EVENT_LISTENER, function () { return zoneAwareRemoveEventListener; });
		        return true;
		    }
		    else {
		        return false;
		    }
		}
		exports.patchEventTargetMethods = patchEventTargetMethods;
		;
		var originalInstanceKey = exports.zoneSymbol('originalInstance');
		// wrap some native API on `window`
		function patchClass(className) {
		    var OriginalClass = _global[className];
		    if (!OriginalClass)
		        return;
		    _global[className] = function () {
		        var a = bindArguments(arguments, className);
		        switch (a.length) {
		            case 0:
		                this[originalInstanceKey] = new OriginalClass();
		                break;
		            case 1:
		                this[originalInstanceKey] = new OriginalClass(a[0]);
		                break;
		            case 2:
		                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
		                break;
		            case 3:
		                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
		                break;
		            case 4:
		                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
		                break;
		            default: throw new Error('Arg list too long.');
		        }
		    };
		    var instance = new OriginalClass(function () { });
		    var prop;
		    for (prop in instance) {
		        (function (prop) {
		            if (typeof instance[prop] === 'function') {
		                _global[className].prototype[prop] = function () {
		                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
		                };
		            }
		            else {
		                Object.defineProperty(_global[className].prototype, prop, {
		                    set: function (fn) {
		                        if (typeof fn === 'function') {
		                            this[originalInstanceKey][prop] = Zone.current.wrap(fn, className + '.' + prop);
		                        }
		                        else {
		                            this[originalInstanceKey][prop] = fn;
		                        }
		                    },
		                    get: function () {
		                        return this[originalInstanceKey][prop];
		                    }
		                });
		            }
		        }(prop));
		    }
		    for (prop in OriginalClass) {
		        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
		            _global[className][prop] = OriginalClass[prop];
		        }
		    }
		}
		exports.patchClass = patchClass;
		;
		function createNamedFn(name, delegate) {
		    try {
		        return (Function('f', "return function " + name + "(){return f(this, arguments)}"))(delegate);
		    }
		    catch (e) {
		        // if we fail, we must be CSP, just return delegate.
		        return function () {
		            return delegate(this, arguments);
		        };
		    }
		}
		exports.createNamedFn = createNamedFn;
		function patchMethod(target, name, patchFn) {
		    var proto = target;
		    while (proto && !proto.hasOwnProperty(name)) {
		        proto = Object.getPrototypeOf(proto);
		    }
		    if (!proto && target[name]) {
		        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
		        proto = target;
		    }
		    var delegateName = exports.zoneSymbol(name);
		    var delegate;
		    if (proto && !(delegate = proto[delegateName])) {
		        delegate = proto[delegateName] = proto[name];
		        proto[name] = createNamedFn(name, patchFn(delegate, delegateName, name));
		    }
		    return delegate;
		}
		exports.patchMethod = patchMethod;

		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var utils_1 = __webpack_require__(3);
		/*
		 * This is necessary for Chrome and Chrome mobile, to enable
		 * things like redefining `createdCallback` on an element.
		 */
		var _defineProperty = Object.defineProperty;
		var _getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
		var _create = Object.create;
		var unconfigurablesKey = utils_1.zoneSymbol('unconfigurables');
		function propertyPatch() {
		    Object.defineProperty = function (obj, prop, desc) {
		        if (isUnconfigurable(obj, prop)) {
		            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
		        }
		        if (prop !== 'prototype') {
		            desc = rewriteDescriptor(obj, prop, desc);
		        }
		        return _defineProperty(obj, prop, desc);
		    };
		    Object.defineProperties = function (obj, props) {
		        Object.keys(props).forEach(function (prop) {
		            Object.defineProperty(obj, prop, props[prop]);
		        });
		        return obj;
		    };
		    Object.create = function (obj, proto) {
		        if (typeof proto === 'object') {
		            Object.keys(proto).forEach(function (prop) {
		                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
		            });
		        }
		        return _create(obj, proto);
		    };
		    Object.getOwnPropertyDescriptor = function (obj, prop) {
		        var desc = _getOwnPropertyDescriptor(obj, prop);
		        if (isUnconfigurable(obj, prop)) {
		            desc.configurable = false;
		        }
		        return desc;
		    };
		}
		exports.propertyPatch = propertyPatch;
		;
		function _redefineProperty(obj, prop, desc) {
		    desc = rewriteDescriptor(obj, prop, desc);
		    return _defineProperty(obj, prop, desc);
		}
		exports._redefineProperty = _redefineProperty;
		;
		function isUnconfigurable(obj, prop) {
		    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
		}
		function rewriteDescriptor(obj, prop, desc) {
		    desc.configurable = true;
		    if (!desc.configurable) {
		        if (!obj[unconfigurablesKey]) {
		            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
		        }
		        obj[unconfigurablesKey][prop] = true;
		    }
		    return desc;
		}


	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var define_property_1 = __webpack_require__(4);
		var utils_1 = __webpack_require__(3);
		function registerElementPatch(_global) {
		    if (!utils_1.isBrowser || !('registerElement' in _global.document)) {
		        return;
		    }
		    var _registerElement = document.registerElement;
		    var callbacks = [
		        'createdCallback',
		        'attachedCallback',
		        'detachedCallback',
		        'attributeChangedCallback'
		    ];
		    document.registerElement = function (name, opts) {
		        if (opts && opts.prototype) {
		            callbacks.forEach(function (callback) {
		                var source = 'Document.registerElement::' + callback;
		                if (opts.prototype.hasOwnProperty(callback)) {
		                    var descriptor = Object.getOwnPropertyDescriptor(opts.prototype, callback);
		                    if (descriptor && descriptor.value) {
		                        descriptor.value = Zone.current.wrap(descriptor.value, source);
		                        define_property_1._redefineProperty(opts.prototype, callback, descriptor);
		                    }
		                    else {
		                        opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
		                    }
		                }
		                else if (opts.prototype[callback]) {
		                    opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
		                }
		            });
		        }
		        return _registerElement.apply(document, [name, opts]);
		    };
		}
		exports.registerElementPatch = registerElementPatch;


	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var webSocketPatch = __webpack_require__(7);
		var utils_1 = __webpack_require__(3);
		var eventNames = 'copy cut paste abort blur focus canplay canplaythrough change click contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange emptied ended input invalid keydown keypress keyup load loadeddata loadedmetadata loadstart message mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup pause play playing progress ratechange reset scroll seeked seeking select show stalled submit suspend timeupdate volumechange waiting mozfullscreenchange mozfullscreenerror mozpointerlockchange mozpointerlockerror error webglcontextrestored webglcontextlost webglcontextcreationerror'.split(' ');
		function propertyDescriptorPatch(_global) {
		    if (utils_1.isNode) {
		        return;
		    }
		    var supportsWebSocket = typeof WebSocket !== 'undefined';
		    if (canPatchViaPropertyDescriptor()) {
		        // for browsers that we can patch the descriptor:  Chrome & Firefox
		        if (utils_1.isBrowser) {
		            utils_1.patchOnProperties(HTMLElement.prototype, eventNames);
		        }
		        utils_1.patchOnProperties(XMLHttpRequest.prototype, null);
		        if (typeof IDBIndex !== 'undefined') {
		            utils_1.patchOnProperties(IDBIndex.prototype, null);
		            utils_1.patchOnProperties(IDBRequest.prototype, null);
		            utils_1.patchOnProperties(IDBOpenDBRequest.prototype, null);
		            utils_1.patchOnProperties(IDBDatabase.prototype, null);
		            utils_1.patchOnProperties(IDBTransaction.prototype, null);
		            utils_1.patchOnProperties(IDBCursor.prototype, null);
		        }
		        if (supportsWebSocket) {
		            utils_1.patchOnProperties(WebSocket.prototype, null);
		        }
		    }
		    else {
		        // Safari, Android browsers (Jelly Bean)
		        patchViaCapturingAllTheEvents();
		        utils_1.patchClass('XMLHttpRequest');
		        if (supportsWebSocket) {
		            webSocketPatch.apply(_global);
		        }
		    }
		}
		exports.propertyDescriptorPatch = propertyDescriptorPatch;
		function canPatchViaPropertyDescriptor() {
		    if (utils_1.isBrowser && !Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'onclick')
		        && typeof Element !== 'undefined') {
		        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
		        // IDL interface attributes are not configurable
		        var desc = Object.getOwnPropertyDescriptor(Element.prototype, 'onclick');
		        if (desc && !desc.configurable)
		            return false;
		    }
		    Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {
		        get: function () {
		            return true;
		        }
		    });
		    var req = new XMLHttpRequest();
		    var result = !!req.onreadystatechange;
		    Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {});
		    return result;
		}
		;
		var unboundKey = utils_1.zoneSymbol('unbound');
		// Whenever any eventListener fires, we check the eventListener target and all parents
		// for `onwhatever` properties and replace them with zone-bound functions
		// - Chrome (for now)
		function patchViaCapturingAllTheEvents() {
		    var _loop_1 = function(i) {
		        var property = eventNames[i];
		        var onproperty = 'on' + property;
		        document.addEventListener(property, function (event) {
		            var elt = event.target, bound, source;
		            if (elt) {
		                source = elt.constructor['name'] + '.' + onproperty;
		            }
		            else {
		                source = 'unknown.' + onproperty;
		            }
		            while (elt) {
		                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
		                    bound = Zone.current.wrap(elt[onproperty], source);
		                    bound[unboundKey] = elt[onproperty];
		                    elt[onproperty] = bound;
		                }
		                elt = elt.parentElement;
		            }
		        }, true);
		    };
		    for (var i = 0; i < eventNames.length; i++) {
		        _loop_1(i);
		    }
		    ;
		}
		;


	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var utils_1 = __webpack_require__(3);
		// we have to patch the instance since the proto is non-configurable
		function apply(_global) {
		    var WS = _global.WebSocket;
		    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
		    // On older Chrome, no need since EventTarget was already patched
		    if (!_global.EventTarget) {
		        utils_1.patchEventTargetMethods(WS.prototype);
		    }
		    _global.WebSocket = function (a, b) {
		        var socket = arguments.length > 1 ? new WS(a, b) : new WS(a);
		        var proxySocket;
		        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
		        var onmessageDesc = Object.getOwnPropertyDescriptor(socket, 'onmessage');
		        if (onmessageDesc && onmessageDesc.configurable === false) {
		            proxySocket = Object.create(socket);
		            ['addEventListener', 'removeEventListener', 'send', 'close'].forEach(function (propName) {
		                proxySocket[propName] = function () {
		                    return socket[propName].apply(socket, arguments);
		                };
		            });
		        }
		        else {
		            // we can patch the real socket
		            proxySocket = socket;
		        }
		        utils_1.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open']);
		        return proxySocket;
		    };
		    for (var prop in WS) {
		        _global.WebSocket[prop] = WS[prop];
		    }
		}
		exports.apply = apply;


	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var utils_1 = __webpack_require__(3);
		function patchTimer(window, setName, cancelName, nameSuffix) {
		    var setNative = null;
		    var clearNative = null;
		    setName += nameSuffix;
		    cancelName += nameSuffix;
		    function scheduleTask(task) {
		        var data = task.data;
		        data.args[0] = task.invoke;
		        data.handleId = setNative.apply(window, data.args);
		        return task;
		    }
		    function clearTask(task) {
		        return clearNative(task.data.handleId);
		    }
		    setNative = utils_1.patchMethod(window, setName, function (delegate) { return function (self, args) {
		        if (typeof args[0] === 'function') {
		            var zone = Zone.current;
		            var options = {
		                handleId: null,
		                isPeriodic: nameSuffix === 'Interval',
		                delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 : null,
		                args: args
		            };
		            return zone.scheduleMacroTask(setName, args[0], options, scheduleTask, clearTask);
		        }
		        else {
		            // cause an error by calling it directly.
		            return delegate.apply(window, args);
		        }
		    }; });
		    clearNative = utils_1.patchMethod(window, cancelName, function (delegate) { return function (self, args) {
		        var task = args[0];
		        if (task && typeof task.type === 'string') {
		            if (task.cancelFn && task.data.isPeriodic || task.runCount === 0) {
		                // Do not cancel already canceled functions
		                task.zone.cancelTask(task);
		            }
		        }
		        else {
		            // cause an error by calling it directly.
		            delegate.apply(window, args);
		        }
		    }; });
		}
		exports.patchTimer = patchTimer;


	/***/ }
	/******/ ]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(683)))

/***/ }
/******/ ]);