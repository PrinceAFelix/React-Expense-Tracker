import '../../styles/ui/ExpenseItem.css';

export const EmptyExpense = () => {
    return (
        <div className="item-container">
            <div className='message'>
                <h2>There are no expenses to show</h2>
            </div>
        </div>
    )
}

