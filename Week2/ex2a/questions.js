const questions = [
    {question: "If you live to be 70 years old, how many times will your heart have beat?", answer:"Your heart will have beat 2.5 billion times!!!"},
    {question: "How often does the surface of our skin replace itself?", answer:"Every month. Our bodies regenerate our skin every, single month. That's about 1000 different times in our lifetimes."},
    {question: "How many dead skin cells do we shed every minute?", answer:"30,000. We shed 30,000 skin cells every minute. It puts the skin regeneration question in a whole new light too, huh? Gross"},
    {question: "How many microscopic mites live on our bodies at any given time?", answer:"Experts estimate that there are anywwhere between 1-1.5 million mites living on our bodies at any given time. They are most abundant on our faces, noses, and eyelashes. Kinda makes you wanna bust out that face scrub, huh?" },
    {question: "What is the second part of the small intestine called?", answer:"Jejunum. I put this one in here because I think that's a fun word. :-)"},
    {question: "How long did the longest documented attack of constant hiccups last?", answer:"68 years... 68 freaking years..."},
]
const questionLength = questions.length;
const questionIndex = Math.floor(Math.random() * questionLength);
const yourAnswer = window.prompt(questions[questionIndex].question);
window.alert('You answered ' + yourAnswer + '. The answer we were looking for was: '+ questions[questionIndex].answer +'');
