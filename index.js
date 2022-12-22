// get userName
let userName = window.prompt("Welcome to my trivia game! First, what is your name?")
console.log("userName", userName)
let userScore = 0
//prompt user with each question 
for (let i = 0; i < questions.length; i++){
    let question = questions[i] 
    let userAnswer = window.prompt(question.text)
    console.log(userAnswer)
    if(userAnswer.toUpperCase() === question.correctAnswer) {
        window.alert(`Question ${i+1} is correct`)
        userScore += 10
    } else {
        window.alert(`Question ${i+1} is incorrect`)
    }
    window.alert("Your score is: " + userScore)
}
// arrays and objs...or at least just objs, need to be like, established as a 'real' thing via console and let 'x' = 'i'
window.alert("Your score is: " + userScore)

