import './BillingHistory.css';
import nextpage from "../../../../shared/icons/nextpage.png"
import backpage from '../../../../shared/icons/Vector.png'
import deletepng from '../../../../shared/icons/trash-alt (1).png'
import avatar from '../../../../shared/images/Avater.jpg'
import React, {  useState, useEffect } from 'react';

function BillingHistory(props) {
    const title = props.title
    return (
        <div>
            <div className="billingHistory" style={{marginLeft:"2%"}}>
                <h1>{title}</h1>
                <div className="listBill">
                    <List name="Nguyễn Anh Dũng" id="#1235689" amount="10 tỉ" time="04:34:45 AM" date="28 Nov, 2021" status="Complete"></List>
                    <List name="Nguyễn Anh Dũng" id="#1235689" amount="10 tỉ" time="04:34:45 AM" date="28 Nov, 2021" status="Pending"></List>
                    <List name="Nguyễn Anh Dũng" id="#1235689" amount="10 tỉ" time="04:34:45 AM" date="28 Nov, 2021" status="Canceled"></List>
                    <List name="Nguyễn Anh Dũng" id="#1235689" amount="10 tỉ" time="04:34:45 AM" date="28 Nov, 2021" status="Complete"></List>
                    <List name="Nguyễn Anh Dũng" id="#1235689" amount="10 tỉ" time="04:34:45 AM" date="28 Nov, 2021" status="Complete"></List>
                </div>
                <Pagination pageNumber={1} quantityOfBill={100}></Pagination>
            </div>
        </div>
    )
}

function List(props) {
    const name = props.name
    const id = props.id
    const amount = props.amount
    const time = props.time
    const status = props.status
    const date = props.date
    return (
        <div className="list">
            <div className="BHInf">
                <div className="avatar">
                    <img id="avatarBH" src={avatar} alt="" />
                </div>
                <div className="nameUser">{name}</div>
            </div>
            <div className="id">{id}</div>
            <div className="amount">{amount}</div>
            <div className="BHTime">
                <span className="date">{date}</span>
                <span className="time">{time}</span>
            </div>
            <div className={status}>
                <span className="textStatus">{status}</span>
            </div>
            <button className="deleteIc">
                <img id="deleteIci" src={deletepng} alt="" />
            </button>
        </div>
    )
}

function Pagination(props) {
    let quantityOfBill = props.quantityOfBill
    const [screen, setScreen] = useState([true, false, false])
    function changeScreen1(value) {
        var list = []
        for (var i = 0; i < 3; i++) {
            if (i == value)
                list.push(true)
            else
                list.push(false)
        }
        setScreen(list)
    }
    return (
        <div className="pagination">
            <div>
                <p id="S">Showing <span id="Onetosix">1-6</span> from <span id="quantityOfBill">{quantityOfBill}</span> data</p>
            </div>
            <div className="page">
                <button className="backPage">
                    <img id="backPagei" src={backpage} alt="" />
                </button>
                <ChangePageButton
                    pageNumber="1"
                    isSlted={screen[0]}
                    onPress={() => { changeScreen1(0) }}
                >
                </ChangePageButton>
                <ChangePageButton
                    pageNumber="2"
                    isSlted={screen[1]}
                    onPress={() => { changeScreen1(1) }}
                >
                </ChangePageButton>
                <ChangePageButton
                    pageNumber="3"
                    isSlted={screen[2]}
                    onPress={() => { changeScreen1(2) }}
                >
                </ChangePageButton>
                <button className="nextPage">
                    <img id="nextPagei" src={nextpage} alt="" />
                </button>
            </div>
        </div>
    )
}
function ChangePageButton(props) {
    let pageNumber = props.pageNumber
    const onPress = props.onPress
    const [isSlted, setIsSlted] = useState(props.isSlted)
    function changeSelected() {
        setIsSlted(!isSlted)
    }
    useEffect(() => {
        setIsSlted(props.isSlted)
    }, [props])
    return (
        <button className={(isSlted) ? "onPage" : "outPage"} onClick={() => {
            props.onPress()
            changeSelected()
        }}>
            <span className={(isSlted) ? "nbrOfOnPage" : "nbrOfOutPage"}>{pageNumber}</span>
        </button>
    )
}

export default BillingHistory