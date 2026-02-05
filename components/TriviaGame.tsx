'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowIcon, FireIcon, BirdIcon, CarIcon } from './Icons3D'

const TRIVIA_QUESTIONS = [
  {
    id: 1,
    question: "In The Hunger Games, what did Haymitch (Ansel's namesake!) win?",
    options: ["The 50th Hunger Games", "A lifetime supply of bread", "A golden mockingjay", "A baby car seat"],
    correct: 0,
    funFact: "Haymitch won the 50th Hunger Games (Quarter Quell)! Just like our Ansel Haymitch will win all our hearts! 🏆"
  },
  {
    id: 2,
    question: "What does Baby from Baby Driver always have in his ears?",
    options: ["Hearing aids", "Earbuds playing music", "Gold earrings", "Baby food"],
    correct: 1,
    funFact: "Baby always has earbuds in, syncing his driving to music! Maybe little Ansel will be a music lover too! 🎵"
  },
  {
    id: 3,
    question: "What's the famous hand signal from The Hunger Games?",
    options: ["High five", "Thumbs up", "Three-finger salute", "Peace sign"],
    correct: 2,
    funFact: "The three-finger salute means thanks, admiration, and goodbye! Give one to baby Ansel! ✋"
  },
  {
    id: 4,
    question: "What car does Baby drive in his iconic first heist?",
    options: ["Red Subaru WRX", "Blue Honda Civic", "Black Mustang", "Yellow Taxi"],
    correct: 0,
    funFact: "A red Subaru WRX! Red is definitely one of Ansel's theme colors today! 🚗"
  },
  {
    id: 5,
    question: "What bird is the symbol of the rebellion in Hunger Games?",
    options: ["Eagle", "Phoenix", "Mockingjay", "Baby Bird"],
    correct: 2,
    funFact: "The Mockingjay - a symbol of hope and rebellion! Our little Ansel is our symbol of hope! 🦅"
  },
  {
    id: 6,
    question: "How many tributes enter the Hunger Games arena?",
    options: ["12 tributes", "24 tributes", "48 tributes", "Just one baby tribute"],
    correct: 1,
    funFact: "24 tributes from 12 districts! Today we have many 'tributes' here to celebrate Ansel! 🎉"
  }
]

export default function TriviaGame() {
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'complete'>('intro')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])

  const startGame = () => {
    setGameState('playing')
    setCurrentQuestion(0)
    setScore(0)
    setAnswers([])
    setSelectedAnswer(null)
    setShowResult(false)
  }

  const handleAnswer = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
    setShowResult(true)
    
    const isCorrect = index === TRIVIA_QUESTIONS[currentQuestion].correct
    if (isCorrect) setScore(prev => prev + 1)
    setAnswers(prev => [...prev, isCorrect])
  }

  const nextQuestion = () => {
    if (currentQuestion < TRIVIA_QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setGameState('complete')
    }
  }

  const currentQ = TRIVIA_QUESTIONS[currentQuestion]

  const getScoreMessage = () => {
    const percentage = (score / TRIVIA_QUESTIONS.length) * 100
    if (percentage === 100) return { icon: '🏆', title: 'Victor!', message: 'May the odds be ever in your favor!' }
    if (percentage >= 80) return { icon: '🥈', title: 'Career Tribute!', message: 'Almost a Victor!' }
    if (percentage >= 60) return { icon: '🎯', title: 'Skilled Tribute!', message: 'Your training paid off!' }
    if (percentage >= 40) return { icon: '🌿', title: 'Survivor!', message: 'You made it through!' }
    return { icon: '🌱', title: 'New Recruit', message: 'Time to watch the movies again!' }
  }

  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-games-forest/10 to-brand-dark" />
      
      {/* Decorative */}
      <div className="absolute top-20 left-10 opacity-10">
        <ArrowIcon className="w-32 h-32" animate={false} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-games-forest" />
            <BirdIcon className="w-8 h-8" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-games-forest" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Tribute Training
          </h2>
          <p className="font-body text-lg text-white/60">
            Test your knowledge in the arena
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Intro */}
          {gameState === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <div className="glass-card p-8 sm:p-12">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowIcon className="w-20 h-20 mx-auto mb-6" />
                </motion.div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  Are You Ready, Tribute?
                </h3>
                <p className="font-body text-white/60 mb-8 max-w-md mx-auto">
                  Answer {TRIVIA_QUESTIONS.length} questions about The Hunger Games, Baby Driver, and our little tribute Ansel!
                </p>
                <motion.button
                  onClick={startGame}
                  className="btn-modern text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enter the Arena →
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Playing */}
          {gameState === 'playing' && (
            <motion.div
              key="playing"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <div className="glass-card p-6 sm:p-8">
                {/* Progress */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-body text-sm text-games-fire">
                    Question {currentQuestion + 1}/{TRIVIA_QUESTIONS.length}
                  </span>
                  <span className="font-body text-sm text-games-forest">
                    Score: {score}
                  </span>
                </div>
                
                <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-8">
                  <motion.div
                    className="h-full bg-gradient-to-r from-driver-red to-games-fire"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / TRIVIA_QUESTIONS.length) * 100}%` }}
                  />
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-6">
                  {currentQ.question}
                </h3>

                <div className="space-y-3 mb-6">
                  {currentQ.options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={showResult}
                      className={`w-full p-4 rounded-xl text-left font-body transition-all ${
                        showResult
                          ? index === currentQ.correct
                            ? 'bg-games-forest text-white'
                            : index === selectedAnswer
                              ? 'bg-driver-red text-white'
                              : 'bg-white/5 text-white/50'
                          : 'bg-white/5 hover:bg-white/10 text-white'
                      }`}
                      whileHover={!showResult ? { scale: 1.02, x: 5 } : {}}
                      whileTap={!showResult ? { scale: 0.98 } : {}}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          showResult && index === currentQ.correct
                            ? 'bg-white text-games-forest'
                            : showResult && index === selectedAnswer
                              ? 'bg-white/20 text-white'
                              : 'bg-white/10 text-white'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span>{option}</span>
                        {showResult && index === currentQ.correct && <span className="ml-auto">✓</span>}
                        {showResult && index === selectedAnswer && index !== currentQ.correct && <span className="ml-auto">✗</span>}
                      </span>
                    </motion.button>
                  ))}
                </div>

                <AnimatePresence>
                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6"
                    >
                      <div className={`p-4 rounded-xl ${
                        selectedAnswer === currentQ.correct 
                          ? 'bg-games-forest/20 border border-games-forest/30' 
                          : 'bg-driver-red/20 border border-driver-red/30'
                      }`}>
                        <p className="font-body text-sm text-white">
                          {selectedAnswer === currentQ.correct ? '🎯 ' : '💡 '}
                          {currentQ.funFact}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {showResult && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={nextQuestion}
                    className="w-full btn-modern text-white"
                  >
                    {currentQuestion < TRIVIA_QUESTIONS.length - 1 ? 'Next Question →' : 'See Results 🏆'}
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}

          {/* Complete */}
          {gameState === 'complete' && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="glass-card p-8 sm:p-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="text-7xl mb-6"
                >
                  {getScoreMessage().icon}
                </motion.div>
                <h3 className="font-display text-3xl font-bold text-white mb-2">
                  {getScoreMessage().title}
                </h3>
                <p className="font-body text-white/60 mb-6">
                  {getScoreMessage().message}
                </p>
                
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 mb-8">
                  <span className="font-display text-2xl text-games-fire font-bold">{score}</span>
                  <span className="font-body text-white/60">out of</span>
                  <span className="font-display text-2xl text-games-forest font-bold">{TRIVIA_QUESTIONS.length}</span>
                </div>

                <div className="flex justify-center gap-2 mb-8">
                  {answers.map((correct, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        correct ? 'bg-games-forest text-white' : 'bg-driver-red text-white'
                      }`}
                    >
                      {correct ? '✓' : '✗'}
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  onClick={startGame}
                  className="btn-modern text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🔄 Play Again
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
