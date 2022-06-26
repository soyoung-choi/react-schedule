import React from 'react'
import '../styles/TodoTemplate.scss'
const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="contents">{children}</div>
    </div>
  )
}

export default TodoTemplate
