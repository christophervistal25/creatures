const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const character = document.querySelector('#character');
const creature = document.querySelector('#creature');

const xCoordinatesWalkBy = 10;
const yCoordinatesWalkBy = 10;

let creaturesCoordinates = [];

let xCoordinate = 0 , yCoordinate = 0;

let incrementOverLap = (position,positionLap,incBy) => {
	return (position >= positionLap) ? positionLap : position+=incBy;
};


let decrementOverLap = (position,positionLap,incBy) => {
	return (position <= positionLap) ? positionLap : position-=incBy;
};

let generatePosition = (min , max) => {
	return Math.floor(Math.random() * (+max - +min)) + +min; ;
};

//binary search implementation 
let binarySearch = (elements , find , start , end) => {
	if (start <= end) {
		let mid = Math.floor(start + (end - start) / 2);
		if (elements[mid] == find) {
			return mid;
		} else if(elements[mid] < find) {
			return binarySearch(elements , find , mid + 1 ,end);
		} else {
			return binarySearch(elements , find , start , mid - 1);
		} 
	} 
	return -1;
	
};

document.addEventListener('DOMContentLoaded' , () =>  {
	creaturesCoordinates.push(generatePosition(0,windowWidth));
	creaturesCoordinates.push(generatePosition(0,windowHeight));
	creature.style.marginLeft = creaturesCoordinates[0] + 'px';
creature.style.marginRight = creaturesCoordinates[1] + 'px';
});




window.onkeydown = (e) => {
	switch(e.keyCode) {
		case 39 :
			xCoordinate = incrementOverLap(xCoordinate,
				(windowWidth - (xCoordinatesWalkBy * 2)),xCoordinatesWalkBy);
			character.style.marginLeft = xCoordinate + 'px';
			break;

		case 37 :
			xCoordinate = decrementOverLap(xCoordinate,1,xCoordinatesWalkBy);
			character.style.marginLeft = xCoordinate + 'px';
			break;

		case 38 :
			yCoordinate = decrementOverLap(yCoordinate,1,yCoordinatesWalkBy);
			character.style.marginTop = yCoordinate + 'px';
			break;

		case 40 :
			yCoordinate = incrementOverLap(yCoordinate,
				(windowHeight - (yCoordinatesWalkBy * 2)),yCoordinatesWalkBy);
			character.style.marginTop = yCoordinate + 'px';
			break;

	}
}
