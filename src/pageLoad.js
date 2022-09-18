// Append html elements to DOM (including: header, hero and info)

export default function pageLoad() {

	const content = document.querySelector('#content');
	// Create header
	const header = document.createElement('div');
	header.classList.add('header');
	header.textContent = "Test 1 2";
	content.appendChild(header);
}
