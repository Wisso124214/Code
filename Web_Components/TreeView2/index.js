class TreeView extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.innerHTML = `   
      <div class="header-view">
      <ul class="ul-check ul-todos">
        <li><input type="checkbox"> Carpeta 1
          <ul>
            <li><input type="checkbox"> Imagenes
              <ul>
                <li><input type="checkbox"> Imagen 1</li>
                <li><input type="checkbox"> Imagen 2</li>
                <li><input type="checkbox"> Imagen 3</li>
              </ul>
            </li>
            <li><input type="checkbox"> Videos
                <ul>
                    <li><input type="checkbox"> Video 1</li>
                    <li><input type="checkbox"> Video 2</li>
                    <li><input type="checkbox"> Video 3</li>
                </ul>
            </li>
          </ul>
        </li>
        <li><input type="checkbox"> Carpeta 2
          <ul>
            <li><input type="checkbox"> Imagenes</li>
            <li><input type="checkbox"> Videos</li>
          </ul>
        </li>
        <li><input type="checkbox"> Carpeta 3
          <ul>
            <li><input type="checkbox"> Imagenes</li>
            <li><input type="checkbox"> Videos</li>
          </ul>
        </li>
      </ul>
  </div>`;
  }

  async connectedCallback() {
    //await this.loadStyles();
    this.shadow.querySelectorAll("li").forEach((li) => {
      this.addEventListenerToNode(li);
    });
  }

  addEventListenerToNode(node) {
    node.addEventListener("click", (event) => {
      event.stopPropagation();
      node.classList.toggle("expanded");
    });
    const checkbox = node.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", (event) => {
      event.stopPropagation();
      this.updateChildCheckboxes(node, checkbox.checked);
      this.updateParentCheckboxes(node);
    });
    checkbox.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }
  
  //Actualizar los checkbox hijos
  updateChildCheckboxes(li, checked) {
    const childCheckboxes = li.querySelectorAll("li input[type='checkbox']");
    childCheckboxes.forEach((childCheckbox) => {
      childCheckbox.checked = checked;
    });
  }

  //Actualizar los checkbox padres
  updateParentCheckboxes(li) {
    if (li.parentElement.parentElement.tagName === "LI") {
      const parentCheckbox = li.parentElement.parentElement.querySelector(
        "input[type='checkbox']"
      );
      const siblingCheckboxes = Array.from(
        li.parentElement.parentElement.querySelectorAll(":scope > ul > li")
      );
      if (
        //Si todos los hermanos están marcados se marca el padre
        siblingCheckboxes.every(
          (siblingLi) =>
            siblingLi.querySelector("input[type='checkbox']").checked
        )
      ) {
        parentCheckbox.checked = true;
        parentCheckbox.indeterminate = false;
      } else if (
        //Si alguno de los hermanos está marcado se marca el padre como indeterminado
        siblingCheckboxes.some(
          (siblingLi) =>
            siblingLi.querySelector("input[type='checkbox']").checked
        )
      ) {
        parentCheckbox.indeterminate = true;
        parentCheckbox.checked = false;
      } else {
        //Si ninguno de los hermanos está marcado se desmarca el padre
        parentCheckbox.checked = false;
        parentCheckbox.indeterminate = false;
      }
      this.updateParentCheckboxes(li.parentElement.parentElement);
    }
  }

  //Cargar estilos
  async loadStyles() {
    const response = await fetch("http://localhost:5050");
    console.log(response);
    const styles = await response.text();
    const style = document.createElement("style");
    style.textContent = styles;
    this.shadow.appendChild(style);
  }
}

customElements.define("tree-view", TreeView);
