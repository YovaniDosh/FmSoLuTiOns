# JavaScript ladrillo a ladrillo

Imagina que el juego es un edificio. Primero reunimos los materiales, después construimos habitaciones con una responsabilidad concreta y finalmente instalamos los interruptores que responden a cada clic.

## Plano del edificio

- Líneas 1–24: datos, elementos de HTML y estado de la partida.
- Líneas 26–84: funciones especializadas.
- Líneas 86–99: coordinador de una ronda completa.
- Líneas 101–118: eventos que conectan los clics con las funciones.

## Materiales y conexiones con HTML

### Línea 1

```javascript
const choices = ["rock", "paper", "scissors"];
```

Creamos un array con las tres jugadas permitidas. Sus posiciones son `0`, `1` y `2`; más adelante utilizaremos esas posiciones para elegir una jugada aleatoria.

### Líneas 2–6

```javascript
const winningMoves = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};
```

Este objeto es el reglamento del edificio. Cada propiedad dice qué derrota una jugada: piedra vence a tijeras, papel a piedra y tijeras a papel. La llave de la línea 2 abre el objeto y la línea 6 lo cierra.

### Líneas 7–11

```javascript
const choiceImages = {
  rock: "../../assets/images/rock-paper-scissors-icon-rock.svg",
  paper: "../../assets/images/rock-paper-scissors-icon-paper.svg",
  scissors: "../../assets/images/rock-paper-scissors-icon-scissors.svg",
};
```

Construimos una segunda tabla. Esta conecta el nombre lógico de cada jugada con su imagen. Gracias a ella podemos pedir `choiceImages.paper` y recibir directamente la ruta del icono de papel.

### Línea 12

```javascript
const selection = document.querySelector(".selection");
```

Guardamos la sección donde se elige una jugada. Es como apuntar la dirección de una habitación para poder ocultarla después.

### Línea 13

```javascript
const round = document.querySelector(".round");
```

Guardamos la sección que presenta el resultado de cada ronda.

### Línea 14

```javascript
const choiceButtons = document.querySelectorAll(".selection .choice");
```

Seleccionamos los tres botones. `querySelectorAll` devuelve una colección porque necesitamos trabajar con papel, tijeras y piedra.

### Líneas 15–16

```javascript
const playerChoiceElement = document.getElementById("player-choice");
const houseChoiceElement = document.getElementById("house-choice");
```

Estas dos líneas guardan los círculos del resultado. El primero pertenece al jugador y el segundo a la computadora.

### Línea 17

```javascript
const resultText = document.getElementById("result");
```

Guardamos el párrafo que comunicará el resultado de la ronda o de toda la partida.

### Líneas 18–19

```javascript
const playerScoreOutput = document.getElementById("player-score");
const houseScoreOutput = document.getElementById("house-score");
```

Conectamos JavaScript con los dos marcadores visibles. Una referencia actualizará los puntos del jugador y la otra los de la computadora.

### Líneas 20–22

```javascript
const playAgainButton = document.querySelector(".play-again");
const rulesButton = document.querySelector(".rules-button");
const rulesDialog = document.querySelector(".rules-dialog");
```

Guardamos el botón para continuar, el botón Rules y el diálogo. Son tres puertas que utilizaremos al final del archivo.

### Líneas 23–24

```javascript
let playerScore = 0;
let houseScore = 0;
```

Creamos los dos contadores y los iniciamos en cero. Usamos `let` porque sus valores cambiarán durante la partida. La línea 25 queda vacía para separar los materiales de las funciones.

## Habitación 1: elección de la computadora

### Líneas 26–30

```javascript
function getHouseChoice()
{
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
```

La línea 26 declara la función y la 27 abre su bloque. En la línea 28, `Math.random()` crea un decimal entre 0 y casi 1; lo multiplicamos por 3 y `Math.floor()` lo convierte en `0`, `1` o `2`. La línea 29 utiliza ese índice para devolver una jugada del array. La línea 30 cierra la función y la 31 separa visualmente la siguiente habitación.

## Habitación 2: árbitro de la ronda

### Líneas 32–40

```javascript
function getRoundResult(playerChoice, houseChoice)
{
  if (playerChoice === houseChoice)
  {
    return "draw";
  }

  return winningMoves[playerChoice] === houseChoice ? "win" : "lose";
}
```

Las líneas 32 y 33 crean la función y abren su bloque. La línea 34 compara ambas elecciones. Si son iguales, las líneas 35–37 devuelven `draw` y terminan la función. La línea 38 es una separación visual. En la 39 consultamos el reglamento: si la jugada guardada en `winningMoves[playerChoice]` coincide con la computadora, devolvemos `win`; de lo contrario, `lose`. La línea 40 cierra la función y la 41 separa la siguiente pieza.

## Habitación 3: dibujar una elección

### Líneas 42–46

```javascript
function renderChoice(element, choice)
{
  element.dataset.choice = choice;
  element.querySelector("img").src = choiceImages[choice];
}
```

Las líneas 42 y 43 crean la herramienta. La línea 44 escribe `data-choice` para que Sass aplique el color correcto. La línea 45 busca la imagen interior y le asigna el icono correspondiente. Juntas, las líneas 44 y 45 construyen el círculo completo. La línea 46 cierra la función y la 47 deja una separación.

## Habitación 4: actualizar los marcadores

### Líneas 48–61

```javascript
function updateScore(result)
{
  if (result === "win")
  {
    playerScore += 1;
  }
  else if (result === "lose")
  {
    houseScore += 1;
  }

  playerScoreOutput.textContent = playerScore;
  houseScoreOutput.textContent = houseScore;
}
```

Las líneas 48–49 abren la función. La línea 50 pregunta si ganó el jugador y las líneas 51–53 le suman un punto. La línea 54 pregunta si perdió; si es así, las líneas 55–57 suman un punto a la computadora. Un empate no entra en ninguna condición y no suma puntos. La línea 58 separa cálculo y pantalla. Las líneas 59–60 copian ambos valores a los elementos `<output>`. La línea 61 cierra la función y la 62 separa la siguiente habitación.

## Habitación 5: saber si terminó la partida

### Líneas 63–76

```javascript
function getMatchResult()
{
  if (playerScore === 3)
  {
    return "You win";
  }

  if (houseScore === 3)
  {
    return "You lose";
  }

  return "";
}
```

Las líneas 63–64 abren la función. En la línea 65 comprobamos si el jugador llegó a 3; las líneas 66–68 devuelven `You win`. La línea 69 separa las condiciones. La línea 70 comprueba si la computadora llegó a 3 y las líneas 71–73 devuelven `You lose`. Si nadie alcanzó el objetivo, la línea 75 devuelve un texto vacío. La línea 76 cierra la función y la 77 deja una separación.

El detalle importante es `return`: cuando alguien llega a 3, la función entrega inmediatamente el mensaje y no continúa bajando por el edificio.

## Habitación 6: reiniciar la partida

### Líneas 78–84

```javascript
function resetMatch()
{
  playerScore = 0;
  houseScore = 0;
  playerScoreOutput.textContent = playerScore;
  houseScoreOutput.textContent = houseScore;
}
```

Las líneas 78–79 abren la función. Las líneas 80–81 devuelven ambos contadores internos a cero. Las líneas 82–83 reflejan esos ceros en pantalla. La línea 84 cierra la habitación y la 85 separa el coordinador principal.

## Pasillo principal: jugar una ronda

### Líneas 86–99

```javascript
function playRound(playerChoice)
{
  const houseChoice = getHouseChoice();
  const roundResult = getRoundResult(playerChoice, houseChoice);
  renderChoice(playerChoiceElement, playerChoice);
  renderChoice(houseChoiceElement, houseChoice);
  updateScore(roundResult);
  const matchResult = getMatchResult();
  selection.hidden = true;
  round.hidden = false;
  resultText.textContent = matchResult || (roundResult === "draw" ? "Draw" : `Round ${roundResult}`);
  playAgainButton.textContent = matchResult ? "New game" : "Play again";
  playAgainButton.focus();
}
```

- Las líneas 86–87 abren el coordinador y reciben la elección del jugador.
- La línea 88 obtiene la jugada aleatoria de la computadora.
- La línea 89 entrega ambas jugadas al árbitro.
- Las líneas 90–91 dibujan las dos elecciones reutilizando la misma herramienta.
- La línea 92 actualiza los marcadores.
- La línea 93 comprueba si alguien acaba de alcanzar 3 puntos.
- Las líneas 94–95 ocultan la selección y muestran el resultado.
- La línea 96 usa primero `matchResult`. Si está vacío, muestra `Draw`, `Round win` o `Round lose`.
- La línea 97 cambia el botón a `New game` cuando terminó la partida; si continúa, conserva `Play again`.
- La línea 98 mueve el foco al botón para facilitar la navegación con teclado.
- La línea 99 cierra el coordinador y la 100 separa los eventos.

## Interruptor 1: elegir una jugada

### Líneas 101–103

```javascript
choiceButtons.forEach((button) => {
  button.addEventListener("click", () => playRound(button.dataset.choice));
});
```

La línea 101 recorre los tres botones. La línea 102 instala un evento de clic y entrega el `data-choice` del botón a `playRound`. La línea 103 cierra el recorrido. Entre estas tres líneas, cualquier elección puede encender todo el sistema del juego. La línea 104 separa el siguiente interruptor.

## Interruptor 2: continuar o comenzar de nuevo

### Líneas 105–114

```javascript
playAgainButton.addEventListener("click", () => {
  if (getMatchResult())
  {
    resetMatch();
  }

  round.hidden = true;
  selection.hidden = false;
  choiceButtons[0].focus();
});
```

La línea 105 escucha Play Again o New Game. La línea 106 vuelve a consultar si existe un ganador. Si existe, las líneas 107–109 reinician ambos marcadores. La línea 110 separa el reinicio del cambio de vista. Las líneas 111–112 ocultan el resultado y muestran las opciones. La línea 113 devuelve el foco al primer botón. La línea 114 cierra el evento y la 115 separa el último interruptor.

## Interruptor 3: mostrar las reglas

### Líneas 116–118

```javascript
rulesButton.addEventListener("click", () => {
  rulesDialog.showModal();
});
```

La línea 116 escucha el botón Rules. La línea 117 abre el `<dialog>` como modal nativo. La línea 118 cierra el evento. El navegador gestiona el foco, el fondo bloqueado y el cierre mediante los mecanismos propios del diálogo.

## Recorrido completo de una partida

1. Pulsas papel y la línea 102 llama a `playRound("paper")`.
2. La computadora elige piedra en la línea 88.
3. El árbitro compara papel contra piedra y devuelve `win`.
4. La línea 92 suma un punto al jugador.
5. La línea 93 pregunta si ese punto llevó el marcador a 3.
6. Si todavía no llegó, ves `Round win` y continúas con Play Again.
7. Cuando el marcador alcanza 3, `getMatchResult()` devuelve `You win`.
8. El botón cambia a New Game.
9. Al pulsarlo, `resetMatch()` devuelve ambos marcadores a cero y construye una partida nueva.

## Ejercicios

1. Sigue el código con jugador `rock` y computadora `paper`. ¿Qué marcador cambia?
2. Explica por qué un empate no puede acercar a nadie a los 3 puntos.
3. Cambia temporalmente el objetivo de 3 a 5 en `getMatchResult()`. ¿Qué dos líneas necesitas modificar?
4. Añade temporalmente `console.log(randomIndex)` debajo de la línea 28 y observa cinco elecciones. Después elimina ese código de prueba.
5. Piensa cómo guardarías ambos marcadores en `localStorage` sin cambiar las reglas del árbitro.
