export const typeForm = {
  signIn: `            
  <form action="" class="formSign" novalidate>
    <p>Introduce tu datos</p>
    <div class="Itext">
        <input type="text" id="name" minlength="2" placeholder="Nombre" required>
        <input type="text" id="surname1" minlength="2" placeholder=" Primer Apellido" required>
        <input type="text" id="surname2"  placeholder=" Segundo Apellido" required>
        <input type="email" id="mail" required placeholder="Email">
        <input type="number" id="phone" required placeholder="Telefono">
    </div>
    <div class="radio">
        <input type="radio" name="gen" id="Hombre" value="Hombre" required>
        <label for="Hombre">Hombre</label>
        <input type="radio" name="gen" id="Mujer" value="Mujer">
        <label for="Mujer">Mujer</label>
        <input type="radio" name="gen" id="Otros" value="Otros">
        <label for="Otros">Otros</label>
    </div>
    <spam class = "nodisplay" id ="errradio" >Debe elegir una opción</spam>
    <div class="Itext">
        <select id="pais" required>
            <option selected="false" disabled="disabled">Pais</option>
            <option value="spain">España</option>
            <option value="other">Otro</option>
        </select>
        <spam class = "nodisplay" id ="errpais" >Debe elegir una opción</spam>
        <select class="nodisplay" id="prov" >
        </select>
        <spam class = "nodisplay" id ="errRadio" >Debe elegir una opción</spam>
        <input type="password" id="pass" placeholder="Contraseña" autocomplete="off" minlength="8" required>
        <input type="password" id="repass"  placeholder="Contraseña" autocomplete="off" minlength="8" required>
        <input type="text" id="apikey" placeholder="API-key" required>
        <div>
        <input type="checkbox" name="" id="Iacept" required>
          <label for="Iacept">Acepto las condiciones</label>
        </div>
        <spam class = "nodisplay" id ="errIacept">Debe aceptar las condiciones</spam>
        <input type="submit" value="Enviar">
    </div>
  </form>`,
  logIn: `  
  <form action="" class="formSign" novalidate>
    <div class="Itext">
      <div class="textLog">
      <p>Bienvenido a Webapp</p>
      </div>
        <input type="email" id="mail" placeholder="Email" required>
        <spam class="nodisplay errorMessage" id="errLogin">Introduzca datos correctos</spam>
        <input type="password" id="pass" autocomplete="off" placeholder="Contraseña" required>
        <input type="submit" value="Enviar">
    </div>
    <p class="nodisplay">La contraseña o el usuario no son correctos</p>
  </form>`
}
