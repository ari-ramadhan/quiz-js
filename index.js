
const correctAnswers = ['A', 'B', 'A', 'A', 'B']

const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')
const scoreText = document.querySelector('.result p')
const questions = document.querySelectorAll('.question')



form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]

    result.classList.remove('hide');

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 1;
            questions[index].classList.add('correct')
        } else {
            questions[index].classList.add('wrong')

        }
    })
    console.log(score);
    scoreText.innerText = `You Scored ${score}/${form.childElementCount - 1}`
    window.scrollTo(0,0)

    form.children[form.children.length - 1].classList.add('hide')
})


result.addEventListener('click', event => {
    if (event.target.localName === 'button') {
        location.reload()
    }
})
