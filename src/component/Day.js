import dummy from "../db/data.json";

function Day (){
    //Use dummy.vocabulary 

    //*******day1 fixed, show only day************

    // 1. Check Day1 first! 첫번째 날이 잘 출력 되는지 확인!
    // const day = 1;
    // const vocabularyList = dummy.vocabulary.filter(vocabulary => (
    //     vocabulary.day === 1
    // ))
    //     console.log(vocabularyList);

        const day = 1;
        const vocabularyList = dummy.vocabulary.filter(vocabulary => (
            vocabulary.day === day
        ))


    return<>
    <table>
        <tbody>
       {/* 2. Change(dummy.vocabulary.map -> vocabularyList) 위에 선언한것으로 바꾸기*/}
        {vocabularyList.map(vocabulary=>(
            <tr key={vocabulary.id}>
            <td>{vocabulary.eng}</td>
            <td>{vocabulary.kor}</td>
            </tr>
        ))}
       </tbody>
    </table>
    </>
}
export default Day;
