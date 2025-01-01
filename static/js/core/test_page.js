// script.js
document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            id: 1,
            question: "Determine all composite integers n such that n > 1 and satisfy the following property: if d₁, d₂, ..., dₖ are all the positive divisors of n...",
            solution: "If n has at least 2 prime divisors...",
            correctAnswer: "Answer1"
        },
        {
            id: 2,
            question: "Let x and y be two positive integers such that x-y = 75 and the least common multiple of x and y is 360. Find the value of x + y.",
            solution: "Let d = gcd(x, y). Then x = md and y = nd...",
            correctAnswer: "165"
        }
    ];

    const questionsContainer = document.getElementById('questions-container');
    const scoreDisplay = document.getElementById('score-display');

    // Render questions dynamically
    questions.forEach(q => {
        const questionElem = document.createElement('div');
        questionElem.classList.add('question');
        questionElem.innerHTML = `
            <h3>Question ${q.id}</h3>
            <p>${q.question}</p>
            <input type="text" id="answer-${q.id}" placeholder="Type your answer here">
            <button onclick="toggleSolution('solution-${q.id}')">Show Solution</button>
            <div id="solution-${q.id}" class="solution">${q.solution}</div>
        `;
        questionsContainer.appendChild(questionElem);
    });

    // Toggle solutions
    window.toggleSolution = (id) => {
        const element = document.getElementById(id);
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    };

    // Submit Test
    document.getElementById('submit-test').addEventListener('click', () => {
        let score = 0;

        questions.forEach(q => {
            const userAnswer = document.getElementById(`answer-${q.id}`).value.trim();
            if (userAnswer.toLowerCase() === q.correctAnswer.toLowerCase()) {
                score++;
            }
        });

        scoreDisplay.textContent = `Your Score: ${score}/${questions.length}`;
    });
});
