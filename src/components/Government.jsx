import UpperAnalytics from "./Government/UpperAnalytics";


export default function Government(){
    return (
        <>
        <div className="flex flex-col bg-gray-100 justify-between w-100%">
            <h1 className="text-green-950 text-3xl m-5 mb-0 font-bold">Government Portal</h1>
            <p className="text-green-700 m-5 mt-0">Real-time insights for optimal crop management</p>
            <UpperAnalytics/>
        </div>
        </>
    )
}