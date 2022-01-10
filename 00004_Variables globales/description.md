Entonces, ¿es necesario darle valor a nuestras variables antes de usarlas?

¡Sí! :smile: Cuando declarás una variable tenés que darle un valor inicial, lo cual se conoce como _inicializar_ la variable.

¡Y sorpresa! Podemos declarar variables tanto directamente en el programa, como dentro de una `function`:

```javascript
function cuentaExtravagante(unNumero) {
  let elDoble = unNumero * 2;
  if (elDoble > 10) {
    return elDoble;
  } else {
    return 0;
  }
}
```

Las variables declaradas dentro de una `function`, conocidas como _variables locales_, no presentan mayor misterio. Sin embargo, hay que tener un particular cuidado: sólo se pueden utilizar desde dentro de la `function` en cuestión. Si quiero referenciarla desde un programa:

```javascript
let elCuadruple = elDoble * 4;
```

Kaboom, ¡se romperá! :collision:

Sin embargo, las variables declaradas directamente en el programa, conocidas como _variables globales_, pueden ser utilizadas desde cualquier `function`. Por ejemplo:

```javascript
let pesoMaximoEquipajeEnGramos = 5000;

function puedeLlevar(pesoEquipaje) {
  return pesoEquipaje <= pesoMaximoEquipajeEnGramos;
}
```

> Veamos si queda claro: definí una función `ascensorSobrecargado`, que toma una cantidad de personas y retorna si entre todas superan la carga máxima de 300 kg.
>
> Tené en cuenta que nuestra función va a utilizar dos variables globales:
>
* `pesoPromedioPersonaEnKilogramos`, la cual ya está declarada,
* `cargaMaximaEnKilogramos` que vas a tener que declarar.
