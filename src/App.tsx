import { useRef, useState } from 'react'
import './App.css'
import { Card } from './Card'
import { mockData } from './mock'


function App() {
    const [dragging, setDragging] = useState(false)
    const [position, setPosition] = useState<[number, number]>([0, 0])
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.target === wrapperRef.current) {
            setDragging(true)
            setPosition([e.pageX, e.pageY])
        }
    }
    const handleMouseMove = (e: React.MouseEvent) => {
        if (dragging) {
            console.log(e)
            const x = e.pageX
            const y = e.pageY
            const deltaX = x - position[0]
            const deltaY = y - position[1]
            const left = parseInt(wrapperRef.current!.style.left || '0')
            const top = parseInt(wrapperRef.current!.style.top || '0')
            wrapperRef.current!.style.left = left + deltaX + 'px'
            wrapperRef.current!.style.top = top + deltaY + 'px'
            setPosition([x, y])
        }
    }
    const handleMouseUp = (e: React.MouseEvent) => {
        setDragging(false)
    }
    const zoomReset = () => {
        wrapperRef.current!.style.transform = 'scale(1)'
    }
    const zoomIn = () => {
        wrapperRef.current!.style.transform = 'scale(2)'
    }
    return (
        <>
            <button onClick={zoomReset}>100%</button>
            <button onClick={zoomIn}>200%</button>
            <div
                className="App"
                ref={wrapperRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}>
                <Card id={mockData.id} title={mockData.title} children={mockData.children} />
            </div>
        </>
    )
}

export default App
