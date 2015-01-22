/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Player = function(startX, startY, startLvl, startProffesion) {
	var x = startX,
		y = startY,
		hp = 1,
		mp = 1,
		lvl = startLvl;
		//hp = lvl*100,
		//mp = lvl*200;
	var attackedPlayer;
	var usingSkill;
	var moveDirection = 0;
	var counter = 0;
	var proffesion = parseInt(startProffesion);
	
	var wilk = {x: 333,y: 500,hp: 2000,hpmax: 2000,moveDirection: 0,pong: 0};
	
	switch(proffesion){
		case 0:
			hp=lvl*150;
			mp=lvl*150;
		case 1:
			hp=lvl*200;
			mp=lvl*100;
		break;
		case 2:
			hp=lvl*100;
			mp=lvl*200;
		break;
		default:
	}
// Getters and setters
// Getters and setters
	var getHp = function() {
		return hp;
	};
	var getMp = function() {
		return mp;
	};
	var getLvl = function() {
		return lvl;
	};
	
	var getX = function() {
		return x;
	};

	var getY = function() {
		return y;
	};

	var setX = function(newX) {
		x = newX;
	};
	var setHp = function(newHp) {
		hp = newHp;
	};
	var setMp = function(newMp) {
		mp = newMp;
	};
	var setY = function(newY) {
		y = newY;
	};
	var setLvl = function(newLvl) {
		lvl = newLvl;
	};
	var getattackedPlayer = function() {
		return attackedPlayer;
	};

	var setattackedPlayer = function(newattackedPlayer) {
		attackedPlayer = newattackedPlayer;
	};
	var getLocalId = function() {
		return localId;
	};

	var setLocalId = function(newLocalId) {
		localId = newLocalId;
	};
	var getUsingSkill = function() {
		return usingSkill;
	};

	var setUsingSkill = function(newUsingSkill) {
		usingSkill = newUsingSkill;
	};
	var getMoveDirection = function() {
		return moveDirection;
	};

	var setMoveDirection = function(newMoveDirection) {
		moveDirection = newMoveDirection;
	};
	var getProffesion = function() {
		return proffesion;
	};

	var setProffesion = function(newProffesion) {
		proffesion = newProffesion;
	};
	var getCounter = function() {
		return counter;
	};
	var setCounter = function(newCounter) {
		counter = newCounter;
	};
	//MONSTERS
	var getWilkX = function() {
		return wilk.x;
	};
	var setWilkX = function(newWilkX) {
		wilk.x = newWilkX;
	};
	var getWilkY = function() {
		return wilk.y;
	};
	var setWilkY = function(newWilkY) {
		wilk.y = newWilkY;
	};
	var getWilkHp = function() {
		return wilk.hp;
	};
	var setWilkHp = function(newWilkHp) {
		wilk.hp = newWilkHp;
	};
	var getWilkMoveDirection = function() {
		return wilk.moveDirection;
	};
	var setWilkMoveDirection = function(newWilkMoveDirection) {
		wilk.moveDirection = newWilkMoveDirection;
	};
	// 
	// Define which variables and methods can be accessed
	return {
		getX: getX,
		getY: getY,
		getLvl: getLvl,
		setLvl: setLvl,
		setX: setX,
		setY: setY,
		getHp: getHp,
		setHp: setHp,
		getMp: getMp,
		setMp: setMp,
		getattackedPlayer: getattackedPlayer,
		setattackedPlayer: setattackedPlayer,
		setLocalId: setLocalId,
		getLocalId: getLocalId,
		setUsingSkill: setUsingSkill,
		getUsingSkill: getUsingSkill,
		setMoveDirection: setMoveDirection,
		getMoveDirection: getMoveDirection,
		setProffesion: setProffesion,
		getProffesion: getProffesion,
		setCounter: setCounter,
		getCounter: getCounter,
		setWilkX: setWilkX,
		getWilkX: getWilkX,
		setWilkY: setWilkY,
		getWilkY: getWilkY,
		setWilkHp: setWilkHp,
		getWilkHp: getWilkHp,
		setWilkMoveDirection: setWilkMoveDirection,
		getWilkMoveDirection: getWilkMoveDirection
	}
};

// Export the Player class so you can use it in
// other files by using require("Player").Player
exports.Player = Player;
