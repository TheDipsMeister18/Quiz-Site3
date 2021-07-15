const startingMinute = 10;
let time = startingMinute * 60;

const countdownElement = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	countdownElement.innerHTML = minutes + ' : ' + seconds;
	time--;
	time = time < 0 ? getScore() : time;
}
let qnobtn = document.querySelectorAll('#hero .hero .right-box .qno button');
let radio = document.getElementsByName('flexRadioDefault');

let currentBtn;

function reset() {
	for (let i = 0; i < radio.length; i++) radio[i].checked = false;
	document.getElementById('flexSwitchCheckDefault').checked = false;

	questions[qcount].uanswer = '';
	questions[qcount].mreview = '';
	check(qcount);
}

function reset1() {
	for (let i = 0; i < radio.length; i++) radio[i].checked = false;
	document.getElementById('flexSwitchCheckDefault').checked = false;
}

function btnChange() {
	check(currentBtn - 1);
}

function removeBorder() {
	for (let i = 0; i < qnobtn.length; i++) {
		qnobtn[i].style.border = 'none';
	}
}

let questions = [
	{
		id: 1,
		question: 'What is the full form of RAM ?',
		para: '',
		uanswer: '',
		answer: 'Random Access Memory',
		mreview: '',
		options: [
			'Random Access Memory',
			'Randomely Access Memory',
			'Run Aceapt Memory',
			'None of these',
		],
	},
	{
		id: 2,
		question: 'What is the full form of CPU?',
		para: '',
		uanswer: '',
		answer: 'Central Processing Unit',
		mreview: '',
		options: [
			'Central Program Unit',
			'Central Processing Unit',
			'Central Preload Unit',
			'None of these',
		],
	},
	{
		id: 3,
		question: 'What is the full form of E-mail',
		para: '',
		uanswer: '',
		answer: 'Electronic Mail',
		mreview: '',
		options: [
			'Electronic Mail',
			'Electric Mail',
			'Engine Mail',
			'None of these',
		],
	},
	{
		id: 4,
		question: 'How many days are there in a week?',
		para: '',
		uanswer: '',
		answer: 'Seven',
		mreview: '',
		options: ['Four', 'Seven', 'Eleven', 'Six'],
	},
	{
		id: 5,
		question: 'How many days are there in a normal year?',
		para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		uanswer: '',
		answer: '365',
		mreview: '',
		options: ['352', '385', '366', '365'],
	},
];

let qcount = 0;

let score = 0;

function prev() {
	check(qcount);

	if (qcount > 0) {
		qcount--;
		show(qcount);
	}
}

function next() {
	check(qcount);

	if (qcount < 4) {
		qcount++;
		show(qcount);
	}
}

function show(count) {
	reset1();

	currentBtn = questions[count].id;

	if (questions[count].para === '') {
		document.getElementById('para-btn').classList.add('hide');
		document.getElementById('collapseExample').classList.remove('show');
	} else {
		document.getElementById('para-btn').classList.remove('hide');
	}

	removeBorder();

	document.getElementById('btn-' + questions[count].id).style.border =
		'5px solid black';
	document.getElementById('para').innerHTML = questions[count].para;
	document.getElementById('question-body').innerHTML =
		questions[count].id + '. ' + questions[count].question;
	document.getElementById('option1').innerHTML = questions[count].options[0];
	document.getElementById('option2').innerHTML = questions[count].options[1];
	document.getElementById('option3').innerHTML = questions[count].options[2];
	document.getElementById('option4').innerHTML = questions[count].options[3];

	if (questions[count].uanswer != '') {
		document.getElementById(questions[count].uanswer).checked = true;
		console.log(document.getElementById(questions[count].uanswer).checked);
	}

	if (questions[count].mreview != '') {
		document.getElementById(questions[count].mreview).checked = true;
		console.log(document.getElementById(questions[count].mreview).checked);
	}

	qcount = count;
}

show(0);

function check(count) {
	let c = 0;
	if (document.getElementById('flexSwitchCheckDefault').checked == true) {
		document.getElementById(
			'btn-' + questions[count].id
		).style.backgroundColor = '#9932CC';
	} else {
		for (let i = 0; i < radio.length; i++) {
			if (radio[i].checked == true) {
				c++;
				document.getElementById(
					'btn-' + questions[count].id
				).style.backgroundColor = '#50C878';
			}
		}
		if (
			c == 0 &&
			document.getElementById('flexSwitchCheckDefault').checked == false
		) {
			document.getElementById(
				'btn-' + questions[count].id
			).style.backgroundColor = 'crimson';
		}
	}
}

function option(radioid) {
	check(qcount);
	questions[qcount].uanswer = radioid;
	console.log(questions[qcount].uanswer);
}

function review(reviewid) {
	check(qcount);
	if (document.getElementById('flexSwitchCheckDefault').checked == true)
		questions[qcount].mreview = reviewid;
	else questions[qcount].mreview = '';
	console.log(questions[qcount].mreview);
}

function getScore() {
	for (let i = 0; i < questions.length; i++) {
		if (questions[i].uanswer != '') {
			let str = questions[i].uanswer;
			let pos = Number(str.charAt(str.length - 1));
			if (questions[i].options[pos - 1] === questions[i].answer) score += 2;
			else score -= 0.5;
		}
	}
	sessionStorage.setItem('score', score);
	window.location.assign('/end.html');
}

window.history.forward();
function noBack() {
	window.history.forward();
}
