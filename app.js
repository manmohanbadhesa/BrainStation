window.onload = function () {
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");

  const submitBtn = document.getElementById("submitBtn");

  const Calculate = () => {
    console.log(parseInt(num1.value) / parseInt(num2.value));
  };

  submitBtn.onclick = Calculate;

  // Section 2

  const answer = document.getElementById("answer");
  const shakeBtn = document.getElementById("shakeBtn");

  const answers = ["Yes!", "No!", "Ask Again", "Maybe"];

  const Shake = () => {
    const randomNumber = Math.round(Math.random() * 3);
    const result = answers[randomNumber];

    answer.innerText = result;
  };

  shakeBtn.onclick = Shake;
};
