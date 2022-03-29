export function createCard(title, description, image, year, id) {
	return `
		<div id="card" class="card">
			<h3>${title}</h3>
			<img src=${image}> 
			<p class="description">${description}</p>
			<p>${year}</p>
			<div class="patch_delete">
			<button id="patchCard${id}" class="patchCard"><i class="fas fa-cog"></i></button>
			<button id="deleteCard${id}" class="deletButton"><i class=" fas fa-trash-alt "></i></button>
			</div>
			
		</div>
  `;
}
