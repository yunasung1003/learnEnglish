import dummy from "../db/data.json";

function DayList (){
    //먼저 콘솔 창에 데이터 나타나는지 확인
    console.log(dummy); 

    return(
        <ul className="list_day">
            {dummy.days.map(day =>(
            <li key={day.id}>
                {day.day}Day
                </li>
            ))}   

            {/* <li>Day</li> */}
        </ul>
    )
}
export default DayList;