import React from "react";

class Withdraw extends React.Component {
    expenseNameTaker = (e) => {
        this.expenseName = e.target.value
    }

    withdrawTaker = (e) => {
        this.withdrawInput = +e.target.value
    }

    withdrawSubmit = () => {
        this.props.setWithdraw(this.withdrawInput, this.expenseName);

    }

    render() {
        return (
            <div className="wDiv">
                <input type="text" placeholder="product name" onChange={this.expenseNameTaker}></input>
                <input type="number" placeholder="how much" onChange={this.withdrawTaker}></input>
                <button onClick={this.withdrawSubmit}>withdraw</button>
            </div>

        )
    }
}

export default Withdraw