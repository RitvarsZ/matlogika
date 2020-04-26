
export default class Theorem {
    constructor(name, description, dependsOn) {
        this.name = name;
        this.description = description;
        this.dependsOn = dependsOn;
        this.available = false;
    }

    render() {
        return `
            <div class="theorem" id="theorem-${this.name}">
            <h3 class="theorem-name">${this.name}</h3>
            <p class="theorem-description">
                ${this.description}
            </p>
            </div>
        `
    }
};