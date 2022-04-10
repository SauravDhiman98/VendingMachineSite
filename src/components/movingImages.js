import React, { useState, useCallback, CSSProperties, useEffect } from 'react'
import { useTransition, animated, AnimatedProps, useSpringRef } from '@react-spring/web'

import styles from './styles.module.css'


// Moving image for Social Services......

const pages: ((props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement)[] = [
  ({ style }) => <animated.div style={{ ...style, background: 'transparent' }}><img style={{...style, width: '45vw', height:'40vh'}} src='/Images/VM1.jpg'/></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'transparent' }}><img  style={{...style, width: '45vw', height:'40vh'}} src='/Images/VM2.jpg'/></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'transparent' }}><img  style={{...style, width: '45vw', height:'40vh'}} src='/Images/VM3.jpg'/></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'transparent' }}><img  style={{...style, width: '45vw', height:'40vh'}} src='/Images/VM3.jpg'/></animated.div>,
]

export default function App() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  useEffect(() => {
    transRef.start()
  }, [index])
  return (
    <div className={`flex fill ${styles.container}`} onClick={onClick}>
      {transitions((style, i) => {
        const Page = pages[i]
        return <Page style={style} />
      })}
    </div>
  )
}
