const loggedInUser = localStorage.getItem("loggedInUser");

if (!loggedInUser && window.location.pathname.includes("index.html")) {
  window.location.href = "auth.html"; // Redirect to login page
}
/*-----------------------------------------------------------------------------------------------------*/

function showTopic(topic) {
  currentTopic = topic;
  const topicTitle = document.getElementById("topicTitle");

  // Preserve dropdown
  const selectEl = document.getElementById("difficultySelect");
  topicTitle.innerHTML = `${topic.toUpperCase()} `;
  if (selectEl) topicTitle.appendChild(selectEl);

  filterQuestions();
}

/*------------------------------------------------------------------------------------------------------*/

let currentTopic = "OOP"; // track current topic

function filterQuestions() {
  const selectedDifficulty = document.getElementById("difficultySelect").value;

  const filteredQuestions = questions[currentTopic].filter(q =>
    selectedDifficulty === "all" || q.difficulty === selectedDifficulty
  );

  renderQuestions(filteredQuestions);
}

function renderQuestions(questionList) {
  const accordion = document.getElementById("accordion");
  accordion.innerHTML = "";

  if (!questionList || questionList.length === 0) {
    accordion.innerHTML = "<p>No questions found for this selection.</p>";
    return;
  }

  questionList.forEach((item, index) => {
    const container = document.createElement("div");
    container.className = "accordion-item";

    const header = document.createElement("div");
    header.className = "question-header";

    const title = document.createElement("div");
    title.className = "question-title";
    title.textContent = item.question;

    const actions = document.createElement("div");
    actions.className = "actions";

    const doneBtn = document.createElement("button");
    doneBtn.className = "toggle-btn";

    const loggedInUser = localStorage.getItem("loggedInUser");
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    const userMarks = userData[loggedInUser]?.markedQuestions || {};
    const key = `${currentTopic}_${index}`;
    if (userMarks[key]) {
      doneBtn.classList.add("done");
    }

    doneBtn.onclick = (e) => {
      e.stopPropagation();
      doneBtn.classList.toggle("done");
      toggleQuestionDone(currentTopic, index);
    };

    const arrow = document.createElement("div");
    arrow.className = "arrow";
    arrow.innerHTML = "&#9654;";

    header.onclick = () => {
      const isVisible = answer.style.display === "block";
      answer.style.display = isVisible ? "none" : "block";
      arrow.classList.toggle("open", !isVisible);
    };

    actions.appendChild(doneBtn);
    actions.appendChild(arrow);

    header.appendChild(title);
    header.appendChild(actions);

    const answer = document.createElement("div");
    answer.className = "answer";

    const codeBlock = document.createElement("code");
    codeBlock.textContent = item.code;

    const copyBtn = document.createElement("button");
    copyBtn.textContent = "Copy Code";
    copyBtn.className = "copy-btn";
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(item.code).then(() => {
        copyBtn.textContent = "Copied!";
        setTimeout(() => (copyBtn.textContent = "Copy Code"), 1500);
      });
    };

    const explanation = document.createElement("p");
    explanation.textContent = item.explanation;

    answer.appendChild(copyBtn);
    answer.appendChild(codeBlock);
    answer.appendChild(explanation);

    container.appendChild(header);
    container.appendChild(answer);
    accordion.appendChild(container);
  });
}



/*------------------------------------------------------------------------------------------------------*/
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "auth.html"; // redirect to login page
}

/*-----------------------------copy btn-------------------------------------------------------------------------*/

function toggleQuestionDone(subject, index) {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (!loggedInUser) return;

  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const userMarks = userData[loggedInUser]?.markedQuestions || {};

  const key = `${subject}_${index}`;

  // Toggle logic
  if (userMarks[key]) {
    delete userMarks[key];
  } else {
    userMarks[key] = true;
  }

  // Save back
  userData[loggedInUser] = {
    ...(userData[loggedInUser] || {}),
    markedQuestions: userMarks,
  };

  localStorage.setItem("userData", JSON.stringify(userData));

  // Re-render questions
  renderQuestions(subject); // assuming you have a function that renders subject questions
}

/*-----------------------------copy btn-------------------------------------------------------------------------*/

function mockLogin() {
  // Set a fake user for testing
  const username = "sumit123"; // change if you want
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  if (!userData[username]) {
    userData[username] = { markedQuestions: {} };
  }
  localStorage.setItem("loggedInUser", username);
  localStorage.setItem("userData", JSON.stringify(userData));
}

window.onload = function () {
  const username = localStorage.getItem("loggedInUser");

  if (username) {
    // Show welcome message
    const welcomeEl = document.getElementById("welcome-msg");
    if (welcomeEl) {
      welcomeEl.innerText = `Welcome, ${username}`;
    }

    // Load questions
    showTopic("OOP");
  } else {
    window.location.href = "auth.html";
  }
};
