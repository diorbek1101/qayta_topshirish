import { faker } from "@faker-js/faker";
import "../public/main.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const inputUser: HTMLInputElement = document.querySelector(".user")!;
const inputRepo: HTMLInputElement = document.querySelector(".repo")!;
const inputBranch: HTMLInputElement = document.querySelector(".branch")!;
const inputSearch: HTMLInputElement = document.querySelector(".input-search")!;
const StartBtn: HTMLButtonElement = document.querySelector(".start")!;
const SearchBtn: HTMLButtonElement = document.querySelector(".search-btn")!;
const tbody = document.querySelector("tbody")!;

class User {
	constructor(public user: string, public repo: number, public branch: number) {}
}

function github() {
	StartBtn.addEventListener("click", () => {
		const valueUser = inputUser.value;
		const valueRepo = inputRepo.value;
		const valueBranch = inputBranch.value;

		for (let i = 0; i < +valueUser; i++) {
			const username = faker.internet.userName();
			const commitMessage = faker.git.commitMessage();
			const branch = faker.git.branch();

			tbody.innerHTML += `<tr>
							<th scope="row">${i + 1}</th>
							<td class="username">${username}</td>
							<td class="repo">${commitMessage}</td>
							<td class="brach">${branch}</td>
					</tr>`;
		}

		search();
	});
}

function search() {
	const usernames: NodeListOf<HTMLTableCellElement> = document.querySelectorAll(".username");

	inputSearch.addEventListener("input", () => {
		const searchValue = inputSearch.value.toLowerCase();

		usernames.forEach((item, idx) => {
			const user = item.textContent?.toLowerCase();
			const find = user?.slice(0, searchValue.length);

			if (find === searchValue) {
				console.log(`User ${idx + 1}: ${item.textContent}`);
				tbody.innerHTML = `<tr>
				<th scope="row">${idx + 1}</th>
				<td class="username">${item.textContent}</td>
				<td class="repo"></td>
				<td class="brach"></td>
		</tr>`;
			}
		});
	});
}

function init() {
	github();
}
init();
