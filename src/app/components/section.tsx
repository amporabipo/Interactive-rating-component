"use client"

import styles from '@/app/components/01.module.css'
import Image from "next/image";
import { useState } from 'react';

export default function Component() {
  const [parentRender, setParedRender] = useState<boolean>(true)
  const [parentResult, setParendResult] = useState<number>()

  const handleChildState = (newState: boolean) => {
    setParedRender(newState)
  }
  const handleResult = (result: number) => {
    setParendResult(result)
  }
  const myresult: number = Number(parentResult)
  return (
    <>
      <div className={styles.card}>
        {parentRender
          ? (<Questions state={handleChildState} result={handleResult} />)
          : <Result result={myresult} />}
      </div>
    </>
  )
}

interface PropsQuestion {
  state: (newState: boolean) => void;
  result: (result: number) => void;
}

function Questions({ state, result }: PropsQuestion) {
  const [myresult, setResult] = useState<number>()
  const [render, setRender] = useState<boolean>(true)

  const handleChange = () => {
    setRender(!render)
    state(render)
  }
  const handleResult = (value: any) => {
    result(value)
    console.log(value)
  }
  return (
    <>
      <div className={styles.questionc}>
        <Image
          src={'/01/icon-star.svg'}
          width={10}
          height={10}
          alt='alt'
        />
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request.
          All feedback is appreciated to help us improve our offering!</p>
        <ul>
          <li><button value={1} onClick={() => handleResult(1)}>1</button></li>
          <li><button value={2} onClick={() => handleResult(2)}>2</button></li>
          <li><button value={3} onClick={() => handleResult(3)}>3</button></li>
          <li><button value={4} onClick={() => handleResult(4)}>4</button></li>
          <li><button value={5} onClick={() => handleResult(5)}>5</button></li>
        </ul>
        <button onClick={handleChange}>SUBMIT</button>
      </div>
    </>
  )
}

interface ResultProps {
  result: number;
}

function Result({ result }: ResultProps) {


  return (
    <>
      <div className={styles.result}>
        <Image
          src={'/01/illustration-thank-you.svg'}
          width={10}
          height={10}
          alt='illustration'
        />
        <span><h3>You selected {result} out of 5 </h3></span>
        <h3>Thank you!</h3>
        <p>We appreciate you taking the time to give a rating. If you ever need more support,
          don&apos;t hesitate to get in touch!</p>
      </div>
    </>
  )
}

