'use client';

import { useState } from 'react';
import { QuizQuestion } from '@/lib/data';
import { Button } from './ui/button';

interface QuizProps {
  questions: QuizQuestion[];
  onQuizComplete: (score: number) => void;
}

export function Quiz({ questions, onQuizComplete }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Last question, so calculate and report the score
      const correctAnswers = selectedAnswers.reduce((total, answer, index) => {
        return answer === questions[index].correctAnswer ? total + 1 : total;
      }, 0);
      const percentageScore = Math.round(
        (correctAnswers / questions.length) * 100
      );
      onQuizComplete(percentageScore);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="bg-gray-800 p-6 rounded-lg mt-8">
      <h3 className="text-2xl font-bold mb-4">
        Quiz: Question {currentQuestionIndex + 1} of {questions.length}
      </h3>
      <p className="text-lg mb-4">{currentQuestion.question}</p>
      <div className="flex flex-col gap-4">
        {currentQuestion.options.map((option) => (
          <Button
            key={option}
            variant={
              selectedAnswers[currentQuestionIndex] === option
                ? 'default'
                : 'outline'
            }
            onClick={() => handleAnswerSelect(option)}
            className="w-full justify-start"
          >
            {option}
          </Button>
        ))}
      </div>
      <Button
        onClick={handleNextQuestion}
        disabled={!selectedAnswers[currentQuestionIndex]}
        className="mt-6"
      >
        {currentQuestionIndex < questions.length - 1
          ? 'Next Question'
          : 'Finish Quiz'}
      </Button>
    </div>
  );
}
