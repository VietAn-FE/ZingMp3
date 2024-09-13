import { useParams } from "react-router-dom";


function LibraryPage() {
    console.log(111);
    let params = useParams();
    console.log(params); // "one/two"
    return (
        <>LibraryPage</>
    )
}
export default LibraryPage;