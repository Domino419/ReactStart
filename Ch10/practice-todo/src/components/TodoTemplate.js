import './TodoTemplate.scss' ;

const TodoTemplate = ({children}) => {
    return (
        <div className='TodoTemplate'>
            <dic className="app-title">일정 관리 </dic>
            <div className='content'>{children}</div>
        </div>
    );
};

export default TodoTemplate;