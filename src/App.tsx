/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState } from 'react';

const initext = `He
インタビュアーによく話した:would often tell interviewers
about one of his
ひらめき:inspirations
for the
最初の:original
story.`

const textAreaCSS = css`
  width: 90%;
  height: 200px;
  margin: 5% 5%;
`

const spanCSS = css`
  margin: 0 0.25rem;
`

function App() {
  const [text, setText] = useState(initext);
  return (
    <>
    <textarea css={textAreaCSS} value={text} onChange={(e) => setText(e.target.value)} />
    <div css={css`user-select: none;`}>
      <p>
        {text.split('\n').map((line, i) => {
          const [jp, en] = line.split(':');
          if (!en) return <span key={i} css={spanCSS}>{jp}</span>
          return (
            <HoverFlip key={i} front={jp} back={en} />
          )
        })}
      </p>
     
    </div>

    </>
  )
}

const frontCSS = css`
  color: black;
  margin: 0 0.25rem;
`
  

const backCSS = css`
  color: red;
  background-color: yellow;
  margin: 0 0.25rem;
`

const HoverFlip = ({ front, back }: { front: string; back: string }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      css={isHovered ? backCSS : frontCSS }
    >
      {isHovered ? back : `(${back.substring(0, 1)}- ${front})`}
    </span>
  )
}

export default App
