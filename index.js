import Lemma from  "./lemma.js";
import Theorem from "./theorem.js";

let lemmas = {
    "L1": new Lemma("L1", "B → (C → B)"),
    "L2": new Lemma("L2", "(B → (C → D))→((B→C)→( B→ D))"),
    "L3": new Lemma("L3", "B ∧ C → B"),
    "L4": new Lemma("L4", "B ∧ C → C"),
    "L5": new Lemma("L5", "B → (C → B ∧ C)"),
    "L6": new Lemma("L6", "B → B ∨ C"),
    "L7": new Lemma("L7", "C → B ∨ C"),
    "L8": new Lemma("L8", "(B → D) → ((C → D) → (B ∨ C → D))"),
    "L9": new Lemma("L9", "(B → C) → ((B → ¬C) → ¬B)"),
    "L10": new Lemma("L10", "¬B → (B → C)"),
    "L11": new Lemma("L11", "B ∨ ¬B"),
    "L12": new Lemma("L12", "∀x F(x) → F(t)"),
    "L13": new Lemma("L13", "F(t) → ∃x F(x)"),
    "L14": new Lemma("L14", "∀x (G → F(x)) → (G → ∀x F(x))"),
    "L15": new Lemma("L15", "∀x (F(x) → G) → (∃x F(x) → G)"),
    "MP": new Lemma("MP", "B → C; B ├ C"),
    "Gen": new Lemma("Gen", "F(x) ├ ∀x F(x)"),
}

let theorems = [
    new Theorem("T141", "<b>[L1, L2, MP]: ⊢ A → A </b>, for any formula A.", [lemmas.L1, lemmas.L2, lemmas.MP]),
    new Theorem("T142", "<b>[L1, L2, MP]: A → B, B → C ⊢ A → C </b> for any formulas A, B, C.", [lemmas.L1, lemmas.L2, lemmas.MP]),
    new Theorem("T143", "<b>[L14, MP, Gen]</b> </br>If F is any formula, and G is any formula that does not contain x as a free variable, then </br><b>G → F(x) G → xF(x)</b>.", [lemmas.L14, lemmas.MP, lemmas.Gen]),
    new Theorem("DT1", "<b>[L1, L2, T, MP]: A1, A2, ..., An ⊢ B → C</b>. </br>Ja ir zināms, ka B ⊢ C, tad varam secināt arī, ka B→C", [lemmas.L1, lemmas.L2, lemmas.MP]),
    new Theorem("DT2", "If T is a first order theory, and there is a proof of <b>[T, MP, Gen]: A1, A2, ..., An, B ⊢ C</b>, </br>where Generalization is not applied to the free variables of B, then there is a proof of <b>[L1, L2, L14, T, MP, Gen]: A1, A2, ..., An ⊢ B → C</b>", [lemmas.L1, lemmas.L2, lemmas.L14, lemmas.MP, lemmas.Gen]),
    new Theorem("T221(a)","<b>[L5, MP] A, B ⊢ A ∧ B</b> </br>Ja ir pierādīti A un B atsevišķi, tad varam arī pierādīt A ∧ B",[lemmas.L5, lemmas.MP]),
    new Theorem("T221(b)","<b>[L3, L4, MP]: A ∧ B ⊢ A, A ∧ B ⊢ B</b> </br>Ja ir pierādīts A ∧ B tad varam arī pierādīt A, B atsevišķi",[lemmas.L3, lemmas.L4, lemmas.MP]),
    new Theorem("T230(a)","<b>[L6, MP]: A ⊢ A ∨ B</b>",[lemmas.L6, lemmas.MP]),
    new Theorem("T230(b)","<b>[L7, MP]: B ⊢ A ∨ B</b>. ",[lemmas.L7, lemmas.MP]),
    new Theorem("T231","If there is a proof of <b>[L1, L2, L8, MP]: A1, A2, ..., An, B ⊢ D</b>, </br>and a proof of  <b>A1, A2, ..., An, C ⊢ D</b>, </br>then there is a proof of <b>A1 , A2 , ... , An , B ∨ C ⊢ D</b>.",[lemmas.L1, lemmas.L2, lemmas.L8, lemmas.MP]),
    new Theorem("T234","<b>[L1-L8, MP]: ⊢ (A ∧ B) ∨ C ↔ (A ∨ C) ∧ (B ∨ C)</b></br><b>[L1-L8, MP]: ⊢ (A ∨ B) ∧ C ↔ (A ∧ C) ∨ (B ∧ C)</b>",[lemmas.L1,lemmas.L2,lemmas.L3,lemmas.L4,lemmas.L5,lemmas.L6,lemmas.L7,lemmas.L8,lemmas.MP]),
    new Theorem("T241(a)","If <b>[L1, L2, L9, MP]: A1, A2, ..., An, B ⊢ C</b>,</br>and <b>[L1, L2, L9, MP]: A1, A2, ..., An, B ⊢ ￢C</b>, </br>then <b>[L1, L2, L9, MP]: A1, A2, ..., An ⊢ ￢B</b>.",[lemmas.L1, lemmas.L2, lemmas.L9, lemmas.MP]),
    new Theorem("T241(b)","<b>[L3, L4, L9, MP]: ⊢ ￢(A∧￢A)</b>", [lemmas.L3, lemmas.L4, lemmas.L9, lemmas.MP]),
    new Theorem("T242","<b>[L1, L2, L9, MP]: ⊢ (A → B) → (￢B → ￢A)</b></br>Modus Tollens: <b>[L1, L2, L9, MP]: ⊢ A → B, ￢B ⊢ ￢A</b>",[lemmas.L1, lemmas.L2, lemmas.L9, lemmas.MP]),
    new Theorem("T243","<b>[L1-L9, MP]: ⊢ (A → ￢B) ↔ (B → ￢A)</b>", [lemmas.L1,lemmas.L2,lemmas.L3,lemmas.L4,lemmas.L5,lemmas.L6,lemmas.L7,lemmas.L8,lemmas.L9,lemmas.MP]),
    new Theorem("T244","<b>[L1, L2, L9, MP]: ⊢ A → ￢￢A</b>", [lemmas.L1, lemmas.L2, lemmas.L9, lemmas.MP]),
    new Theorem("T245","<b>[L1, L2, L9, MP]: ⊢ ￢￢￢A ↔ ￢A</b>", [lemmas.L1, lemmas.L2, lemmas.L9, lemmas.MP]),
    new Theorem("T246(a)","<b>[L1, L2, L9, MP]: ⊢ (￢A → A) → ￢￢A</b>",[lemmas.L1, lemmas.L2, lemmas.L9, lemmas.MP]),
    new Theorem("T246(b)","<b>[L1, L2, L6, L7, L9, MP]: ⊢ ￢￢(A v ￢A)</b>",[lemmas.L1, lemmas.L2, lemmas.L6, lemmas.L7, lemmas.L9, lemmas.MP]),
    new Theorem("T247","<b>[L1-L9, MP]:</b></br>a) <b>⊢ (A → B) → (￢￢A → ￢￢B)</b>.</br>b) <b>⊢ ￢￢(A → B) → (￢￢A → ￢￢B)</b>.</br>c) <b>⊢ (A → (B → C)) → (￢￢A → (￢￢B → ￢￢C))</b>.</br>d) <b>￢￢(A → B), ￢￢(B → C) ⊢ ￢￢(A → C)</b>.</br>e) <b>￢￢A, ￢￢(A → B) ⊢ ￢￢B</b>", [lemmas.L1,lemmas.L2,lemmas.L3,lemmas.L4,lemmas.L5,lemmas.L6,lemmas.L7,lemmas.L8,lemmas.L9,lemmas.MP]),
    new Theorem("T248","<b>[L1-L9, MP]:</b></br>a) <b>⊢ ￢￢(A ∧ B) ↔ (￢￢A ∧ ￢￢B)</b>.</br>b) <b>⊢ ￢￢A ∨ ￢￢ B → ￢￢(A ∨ B)</b>.",[lemmas.L1,lemmas.L2,lemmas.L3,lemmas.L4,lemmas.L5,lemmas.L6,lemmas.L7,lemmas.L8,lemmas.L9,lemmas.MP]),
    new Theorem("T249","<b>[L1, L2, L9, MP] ⊢ ￢A → (A → ￢B)</b>",[lemmas.L1, lemmas.L2, lemmas.L9, lemmas.MP]),
    new Theorem("T2410","<b>[L1-L9, MP]:</b></br>a) <b>⊢ ￢A ∨ ￢B → ￢(A ∧ B)</b>.</br>b) <b>⊢ ￢(A ∨ B) ↔ ￢A ∧ ￢B</b>.",[lemmas.L1,lemmas.L2,lemmas.L3,lemmas.L4,lemmas.L5,lemmas.L6,lemmas.L7,lemmas.L8,lemmas.L9,lemmas.MP]),
    new Theorem("T251(a)","<b>[L10, MP]: A, ￢A ⊢ B</b>.",[lemmas.L10, lemmas.MP]),
    new Theorem("T251(b)","<b>[L1, L2, L8, L10, MP]: ⊢ A ∨ B → (￢A → B)</b>.",[lemmas.L1, lemmas.L2, lemmas.L8, lemmas.L10, lemmas.MP]),
    new Theorem("T251(c)","<b>[L1, L8, L10, MP]: ⊢ ￢A ∨ B → (A → B)</b>.",[lemmas.L1, lemmas.L8, lemmas.L10, lemmas.MP]),
    new Theorem("T252","<b>[L1-L10, MP]:</b>.</br>a) <b>⊢ (￢￢A → ￢￢B) → ￢￢(A → B)</b>.</br>It's the converse of Theorem 2.4.7(b). Hence, ⊢￢￢(A → B) ↔ (￢￢A → ￢￢B).</br>b) <b>⊢ ￢￢A → (￢A → A)</b>.</br>It's the converse of Theorem 2.4.6(a). Hence, ⊢ ￢￢A ↔ (￢A → A).</br>c) <b>⊢ A v ￢A → (￢￢A → A)</b>.</br>d) <b>⊢ ￢￢(￢￢A → A)</b>.", [lemmas.L1,lemmas.L2,lemmas.L3,lemmas.L4,lemmas.L5,lemmas.L6,lemmas.L7,lemmas.L8,lemmas.L9,lemmas.L10,lemmas.MP]),
]

let availableTheorems = [];
document.addEventListener("DOMContentLoaded",()=>{
    index();
    initCheckboxes();
});

function checkboxesChanged() {
    document.getElementById("theorems").innerHTML = "";
    lemmas[this.id].selected = this.checked;
    theorems.forEach(t => {
        t.available = true;
        t.dependsOn.forEach(l => {
            if (!l.selected) {
                t.available = false;
            }
        });
        if (t.available) {
            document.getElementById("theorems").innerHTML += t.render();
        }
    });
}

function initCheckboxes() {
    let checkboxes = document.getElementsByClassName("lemma-checkbox");
    Array.from(checkboxes).forEach(e => {
        e.addEventListener('change', checkboxesChanged);
    });
}

function index() {
    let form = document.getElementById("form");
    let axiomList = document.getElementById("lemmas");
    for (let l in lemmas) {
        form.innerHTML += `
            <Label class="checkbox-container">
            <input class="lemma-checkbox" type="checkbox" id="${l}">
            <span class="checkbox-label">${l}</span>
            </Label>
        `
    }
    for (let [key, value] of Object.entries(lemmas)) {
        axiomList.innerHTML += `
        <div class="lemma"><b>${value.name}</b>: ${value.description}</div>
        `
      }
}
