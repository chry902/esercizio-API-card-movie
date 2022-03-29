export function createCard(id, title, poster, description, year) {
	return `
		<div id="card ${id}" class="card">
			<h3>${title}</h3>
			<img id="cardImg" src=${poster}> 
			<p class="description">${description}</p>
			<p>${year}</p>
			<div clss="modalForm" id="modalForm"></div>
			<div class="patch_delete">
			<button id="patchCard${id}" class="patchCard"><i class="fas fa-cog"></i></button>
			<button id="deleteCard${id}" class="deletButton"><i class=" fas fa-trash-alt "></i></button>
			</div>
			
		</div>
  		`;
}
