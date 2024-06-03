import { WeeklyTime } from './WeeklyTime'
import { TemperaturTime } from "./TemperaturTime"




export const Time = () => {
    return (
        <>
         <div className="w-full md:w-3/4 p-4 flex flex-col h-screen">
            <WeeklyTime/>
            <TemperaturTime/>
         </div>
        </>
    )
}