# RandomBack-ColorGradient

JS 챌린지 11차 과제 - 지정된 색을 이용하여 linear-gradient로 Background Random Color 구현하기

<br>

---

<br>

## RandomColor 가져오기

`colors`라는 배열에 색상 값이 저장되어있고, 그 색상 값을 random하게 가져오기 위해서는 `Math`가 필요하다.

\* let으로 선언하는 이유는 밑에서 설명

```js
let randomColor = colors[Math.random() * colors.length];
```

Math.random() 은 0~1 사이의 수를 랜덤하게 주는 것이다.

따라서, 그 뒤에 배열의 길이 만큼 곱해줘야 colors를 랜덤하게 내줄 수 있다.

<br>

### \> 문제점

0~1 사이의 랜덤한 수를 준다고 했는데, 실제로 콘솔로 확인해보면 말 그대로 랜덤하게 수를 준다.... 정수가 아니기 떄문이다.

따라서, 다시한번 `Math`를 이용하여 `Math.floor`를 해준다.

```js
let randomColor = colors[Math.floor(Math.random() * colors.length)];
```

이렇게 하면 정수로 출력되며, `colors` 안의 색을 제대로 가져올 수 있다.

<br>

---

<br>

## 이벤트 리스너, 함수 만들어주기

우선 버튼에 이벤트를 달기 위해 `Button` 이라는 변수에 `querySelector`로 버튼 부분을 넣어준다.

버튼을 클릭하면 색상이 변하게 만들 것이기 떄문에 옵션은 `Click`으로 달아준다.

```js
button.addEventListener("click", handleColor);
```

이렇게 써주면 `handleColor`라는 함수를 버튼을 클릭 할 때마다 실행해준다.

<br>

---

<br>

## handleColor 함수 작성

### 조건 만들어주기

맨 위에서 만들어놓은 `randomColor`를 gradient로 만들기 위해서는 2개 이상이 필요하다.

여기서는 2개만 이용했기 떄문에, `randomColor1`, `randomColor2`로 지정해준다.

조건상 '두 색상이 같으면 안된다'라는 조건은 없었지만, gradient는 두 색상이 달라야.. 예쁘니까 두 색상이 같을 경우 미리 두 색상을 다르게 지정해 준다.

```js
if (randomColor1 === randomColor2) {
  randomColor1 = colors[0];
  randomColor2 = colors[7];
}
// [] 안의 숫자는 그냥 끌리는 숫자로 지정했다.
```

<br>

---

<br>

### 조건 만들기 2

같은 생각으로 다르게 구현하신 분들이 있길래 보고 배웠다...! 이 방법들이 훨씬 더 안정적이고 좋은 방법인거 같다.

<br>

### do while 사용해서 만들기

```js
do {
  randomColor2 = colors[Math.floor(Math.random() * colors.length)];
} while (randomColor1 === randomColor2);
```

### filter 사용해서 만들기

```js
const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
const filterColors = color.filter((element) => element !== randomColor1);

const randomColor2 =
  filterColors[Math.floor(Math.random() * filterColors.length)];
```

### background linear-gradient color 지정

`Click` 할때마다 `body` 부분의 배경색을 무작위 gradient로 바꿔줄 것이기 때문에 `body`에 `style`을 지정해준다.

```js
body.style.background = `linear-gradient(0.25turn, ${randomColor1}, ${randomColor2}})`;
```

여기서 주의할 점은 `linear-gradient`를 지정해줄때, 변수가 안에 들어가야 하기 떄문에 백틱(``)을 이용하여 써주는 것이다.

\* `0.25turn`은 MDN을 참고해서 적어주었다.

`background`말고 `backgroundImage`를 통해서도 `style` 지정이 가능하다.

<br>

---

<br>

## TIL

css를 js로 쓰는 부분에서 살짝 막혔지만, MDN을 정독해서.. 해냈다.

추가적으로 MDN을 더 봐야 할 것 같다.

또 조건 만들때 `const` 대신 `let`을 써줬는데, 이유는.. const로 변수를 선언하니까 변수가 readOnly라며 에러가 났기 떄문이다.

그래서 혹시....? 하면서 선언 부분을 바꿔주니 해결되었다.

작동이 안되는건 아닐지 걱정하면서 let으로 바꿔주고 콘솔로 아무 텍스트나 출력되는지 확인해서 색상을 확인했는데, 잘 찍히는 것 같았다.

<br>

\- linear-gradient를 JS에서 지정해주는 방법을 배웠다.

\- random의 작동원리를 제대로 얼게됨.
