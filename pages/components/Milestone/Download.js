import { CSVLink, CSVDownload } from "react-csv";
export function Table() {

        const csvData = [
            { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
            { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
            { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
        ];
    return (
        <>
        {
            <>
            <table></table>
            <CSVLink data={csvData}><button class="btn btn-primary">Download me</button></CSVLink>
            
            </>
        }
        </>
    );
}