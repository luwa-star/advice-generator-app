const advice_id = document.querySelector(".advice_id");
const advice_text = document.querySelector(".advice");
const btn = document.getElementById("advice-btn");

advice_id.textContent = "117";
advice_text.textContent =
    "It is easy to sit up and take notice, What is difficult is getting up and taking action";

async function getAdvice() {
    await fetch("https://api.adviceslip.com/advice", {
            cache: "no-cache", //to update my values
        })
        .then((res) => {
            if (res.ok) {
                data = res.json();
                return data;
            } else {
                return Promise.reject(res);
            }
        })
        .then((data) => {
            advice_id.textContent = data.slip.id;
            advice_text.textContent = data.slip.advice;
            console.log(data.slip.id);
            console.log(data.slip.advice);
        })
        .catch((err) => {
            console.warn("Sorry! Something went wrong.", err);
        });
}
btn.addEventListener("click", getAdvice);