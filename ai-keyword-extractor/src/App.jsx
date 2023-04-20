import { useState } from 'react'

import React from 'react'
import {Container, Box} from "@chakra-ui/react"
import Header from './components/Header'
import Footer from './components/Footer'
import TextInput from './components/TextInput'
import KeywordsModal from './components/KeywordsModal'

const App = () => {

  const [keywords, setKeywords] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const extractKeywords = async (text) => {
    setLoading(true)
    setIsOpen(true)

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer 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`
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: 'Extract keywords from this text. Make the first letter of each word uppercase and separate with commas\n\n' + text + '',
        temperature: 0.5,
        max_tokens: 60,
        frequency_penalty: 0.8
      })
    }

    const response = await fetch('https://api.openai.com/v1/completions', options)

    const json = await response.json()

    const data = json.choices[0].text.trim()

    console.log(data)
    setKeywords(data)
    setLoading(false)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
   <Box bg='blue.600' color='white' height='100vh' paddingTop='130px'>
    <Container maxW='3xl' centerContent>
      <Header/>
      <TextInput extractKeywords={extractKeywords}/>
      <Footer/>
    </Container>
    <KeywordsModal keywords={keywords} loading={loading} isOpen={isOpen} closeModal={closeModal}/>
   </Box>
  )
}

export default App