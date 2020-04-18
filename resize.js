const fs = require('fs');
const resizeImg = require('resize-img');

(async () => {
	const image = await resizeImg(fs.readFileSync('./images/teste.png'), {
		width: 200,
        height: 300,
	});

	fs.writeFileSync('unicorn-128x128.png', image);
})();