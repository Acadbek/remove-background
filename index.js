
// names = ['Sara', 'John', 'Michael', 'Jessica', 'David', 'James', 'Emily', 'William', 'Matthew', 'Ashley',
// 	'Daniel', 'Madison', 'Elizabeth', 'Joseph', 'Andrew', 'Olivia', 'Robert', 'Emily', 'Ava', 'William',
// 	'Abigail', 'Jacob', 'Ethan', 'Sophia', 'Samantha', 'Isabella', 'Aiden', 'Mia', 'Nicholas', 'Aria',
// 	'Alexander', 'Ella', 'Natalie', 'Ryan', 'Chloe', 'Evelyn', 'Owen', 'Avery', 'Liam', 'Natalie',
// 	'Mila', 'Brayden', 'Addison', 'Lily', 'Aurora', 'Eleanor', 'Arianna', 'Audrey', 'Aubree', 'Aubrey',
// 	'Aaliyah', 'Hazel', 'Caroline', 'Aurora', 'Avery', 'Aria',
// ]

// let name = "Aria";

// function binarySearch(names, target) {
// 	let left = 0;
// 	let right = names.length - 1;

// 	while (left <= right) {
// 		let mid = Math.floor((left + right) / 2);
// 		if (names[mid] === target) {
// 			return mid
// 		} else if (names[mid] < target) {
// 			return left = mid + 1;
// 		} else {
// 			return right = mid - 1;
// 		}
// 	}

// 	return -1;
// }


// console.log(binarySearch(names, "Sara"));   // Output: 0


// function removeBackground(imageUrl) {
// 	// Create an HTML image element
// 	var img = new Image();

// 	// Set the source of the image
// 	img.src = imageUrl;

// 	// Allow cross-origin access to the image
// 	img.crossOrigin = "Anonymous";

// 	// Wait for the image to load
// 	img.onload = function () {
// 		// Create a canvas element
// 		var canvas = document.createElement('canvas');
// 		var ctx = canvas.getContext('2d');

// 		// Set the canvas dimensions to the image dimensions
// 		canvas.width = img.width;
// 		canvas.height = img.height;

// 		// Draw the image onto the canvas
// 		ctx.drawImage(img, 0, 0);

// 		// Get the image data from the canvas
// 		var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

// 		// Loop through each pixel in the image
// 		for (var i = 0; i < imageData.data.length; i += 4) {
// 			// Check if the pixel is white
// 			if (imageData.data[i] == 255 && imageData.data[i + 1] == 255 && imageData.data[i + 2] == 255) {
// 				// Set the alpha value to 0
// 				imageData.data[i + 3] = 0;
// 			}
// 		}

// 		// Put the modified image data back onto the canvas
// 		ctx.putImageData(imageData, 0, 0);

// 		// Convert the canvas back to an image
// 		var newImg = new Image();
// 		newImg.src = canvas.toDataURL();

// 		// Display the new image
// 		document.body.appendChild(newImg);
// 	};
// }

function removebackground() {
	let images = document.getElementById('urls').value.split('\n')

	images.forEach(imageUrl => {
		const image = new Image();
		image.onload = ({ target }) => {
			const w = Math.round(target.width);
			const h = Math.round(target.height);

			const canvas = document.createElement("canvas");
			canvas.width = w;
			canvas.height = h;
			const canvasContext = canvas.getContext("2d");
			canvasContext.drawImage(target, 0, 0, target.width, target.height, 0, 0, w, h);

			const canvasImageData = canvasContext.getImageData(0, 0, w, h);
			console.log(canvasImageData);

			for (
				let index = 0, dataLength = canvasImageData.data.length;
				index < dataLength;
				index += 4
			) {
				const r = canvasImageData.data[index];
				const g = canvasImageData.data[index + 1];
				const b = canvasImageData.data[index + 2];
				if ([r, g, b].every((item) => item > 230))
					canvasImageData.data[index + 3] = 0;
			}

			target.width = w;
			target.height = h;
			canvasContext.putImageData(canvasImageData, 0, 0);
			document.body.append(image, canvas);
		};
		image.crossOrigin = "";
		image.src = imageUrl;
	});
}

async function getd() {
	removebackground()
	// let response = fetch('http://localhost:8082/images')
	// let res = (await response).json()
	// return res
}

// getd()







