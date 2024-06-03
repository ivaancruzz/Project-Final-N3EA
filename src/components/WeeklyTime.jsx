export const WeeklyTime = () => {
    return (
        <>
         <div className="flex-grow flex items-end justify-center mb-40">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-4xl h-45">
        <div className="bg-customSecondaryDark p-3 rounded-lg text-center w-32 h-44">
        <p className="text-xs mb-1 py-4">Tomorrow</p>
        <img src="https://placehold.co/50x50" alt="weather icon" className="mx-auto mb-2 w-10 h-10" />
        <p className="text-xs  py-10"><span className="font-semibold">16°C</span> 11°C</p>
       </div>
      <div className="bg-customSecondaryDark p-3 rounded-lg text-center w-32 h-44">
        <p className="text-xs mb-1 py-4">Sun, 7 Jun</p>
        <img src="https://placehold.co/50x50" alt="weather icon" className="mx-auto mb-2 w-10 h-10" />
        <p className="text-xs py-10"><span className="font-semibold">16°C</span> 11°C</p>
      </div>
      <div className="bg-customSecondaryDark p-3 rounded-lg text-center w-32 h-44">
        <p className="text-xs mb-1 py-4">Mon, 8 Jun</p>
        <img src="https://placehold.co/50x50" alt="weather icon" className="mx-auto mb-2 w-10 h-10" />
        <p className="text-xs  py-10"><span className="font-semibold">16°C</span> 11°C</p>
      </div>
      <div className="bg-customSecondaryDark p-3 rounded-lg text-center w-32 h-44">
        <p className="text-xs mb-1 py-4">Tue, 9 Jun</p>
        <img src="https://placehold.co/50x50" alt="weather icon" className="mx-auto mb-2 w-10 h-10" />
        <p className="text-xs  py-10"><span className="font-semibold">16°C</span> 11°C</p>
      </div>
        <div className="bg-customSecondaryDark p-3 rounded-lg text-center w-32 h-44">
        <p className="text-xs mb-1 py-4">Wed, 10 Jun</p>
        <img src="https://placehold.co/50x50" alt="weather icon" className="mx-auto mb-2 w-10 h-10" />
        <p className="text-xs  py-10"><span className="font-semibold">16°C</span> 11°C</p>
      </div>
       </div>
       </div>
        </>
    )
}