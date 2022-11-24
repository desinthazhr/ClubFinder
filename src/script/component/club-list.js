import './club-item.js';

class ClubList extends HTMLElement {
    set clubs(clubs) {
        this._clubs = clubs;
        this.render();
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.innerHTML = "";
        this._clubs.forEach((club) => {
            const ClubItemElement = document.createElement("club-item");
            ClubItemElement.club = club;
            this.appendChild(ClubItemElement);
        });
    }
}

customElements.define('club-list', ClubList);