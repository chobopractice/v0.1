import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, ProgressBar, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Questions from './Questions';



function QuestionTest() {
    const history = useHistory();
    const [questions, setQuestions] = useState(Questions)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const progressBar =(currentQuestion)/(questions.city.length)*100
    const result = Math.ceil(score / questions.city.length * 100)

    const selectAnswer = (answerNumber, numbers) => {
        if(answerNumber.length === 4) {
            const temp = answerNumber.slice(0,3);
            temp.sort((a,b)=>a-b);
            temp.push(answerNumber[3]);
            return temp
        }
        let n = numbers[Math.floor(Math.random()*numbers.length)];
        if(answerNumber.indexOf(n)<0){
            answerNumber.push(n);
        }
        return (
            this.selectAnswer(answerNumber, numbers)
        );
    }

    const handleAnswerButtonClick = (e)=>{
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
        if (nextQuestion < questions.city.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        };
        if (e.target.value === questions.city[currentQuestion].rightAnswer){
            setScore(score+1)
        }
    };

    return(
        <Container>
            <Row>
            <Col sm={12}>
            <div>
                {showScore ? (
                    <div>
                    <h1 className="result-text mt-5">퀴즈가 끝났습니다.</h1>
                    <div className='score-section'>
                        <h1 className="result-score">{result} 점</h1>
                    </div>
                    </div>
                ) : (
                <div>
                    <Button onClick={()=>{ history.goBack() }} variant="primary" size="lg" disabled>
                        뒤로가기
                    </Button>
                    <div className='question-count mt-4'>
                        <ProgressBar animated now={progressBar} />
                    </div>
                    <div className='question-text text-center mt-5'>{questions.city[currentQuestion].questionText}</div>
                    <div className='container'>
                        <div className='row'>
                        <div className="img mt-3 text-center">{questions.city[currentQuestion].image}</div>
                        {questions.city[currentQuestion].answerOption.map((answerOption,i)=>{
                            return (
                            <Button onClick={handleAnswerButtonClick} className='answer mt-4' value={questions.city[currentQuestion].answerOption[i]}>
                                {questions.city[currentQuestion].answerOption[i]}
                                </Button>)
                        })}
                        </div>
                    </div>
                    <input type="hidden" id="score" value={score} />
                </div>)
                }
            </div>
            </Col>
            </Row>
        </Container>
    )
}



export default QuestionTest;